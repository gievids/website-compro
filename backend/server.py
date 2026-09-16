from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field
from html import escape
from html.parser import HTMLParser
from urllib.parse import urlparse
from pathlib import Path
from datetime import datetime, timezone
import os
import re
import uuid
import logging
import ipaddress
import httpx

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

logger = logging.getLogger(__name__)

EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ.get("EMERGENT_EMAIL_KEY")
EMAIL_FROM_NAME = os.environ.get("EMAIL_FROM_NAME", "Cergis Networks")
INQUIRY_NOTIFY_EMAIL = os.environ.get("INQUIRY_NOTIFY_EMAIL")

# --- Email guardrail gate (G2 + G3 structural checks) ---
_SHORTENERS = ("bit.ly", "tinyurl.com", "t.co", "is.gd", "cutt.ly", "goo.gl", "rebrand.ly")
_CRED_ASK = ("reply with your password", "reply with the code", "send your password", "cvv",
             "send us your password", "enter your password below", "confirm your card number",
             "your full card number", "seed phrase", "recovery phrase", "verify your card",
             "social security number", "confirm your bank details")
_HOSTISH = re.compile(r"\b(?:https?://)?((?:[a-z0-9-]+\.)+[a-z]{2,})", re.I)


def _host_ok(host: str) -> bool:
    if not host or "xn--" in host:
        return False
    try:
        ipaddress.ip_address(host)
        return False
    except ValueError:
        pass
    return not any(host == s or host.endswith("." + s) for s in _SHORTENERS)


def _same_site(shown: str, real: str) -> bool:
    return shown == real or real.endswith("." + shown) or shown.endswith("." + real)


class _EmailScan(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags, self.urls, self.anchors = set(), [], []
        self._href, self._text = None, []

    def handle_starttag(self, tag, attrs):
        self.tags.add(tag.lower())
        self.urls += [v for k, v in attrs if k.lower() in ("href", "src") and v]
        if tag.lower() == "a":
            self._href = dict((k.lower(), v) for k, v in attrs).get("href")
            self._text = []

    def handle_data(self, data):
        if self._href is not None:
            self._text.append(data)

    def handle_endtag(self, tag):
        if tag.lower() == "a" and self._href is not None:
            self.anchors.append((self._href, "".join(self._text)))
            self._href, self._text = None, []


def _assert_safe_email(subject: str, html: str) -> None:
    scan = _EmailScan()
    scan.feed(html)
    if scan.tags & {"form", "input", "textarea", "select"}:
        raise ValueError("No forms or input fields in email (G2)")
    body = f"{subject}\n{html}".lower()
    for p in _CRED_ASK:
        if p in body:
            raise ValueError(f"Email asks the recipient for credentials: {p!r} (G2)")
    for url in scan.urls:
        low = url.strip().lower()
        if low.startswith(("mailto:", "tel:", "cid:", "#")):
            continue
        if not low.startswith("https://"):
            raise ValueError(f"Email links/assets must be absolute https: {url!r} (G3)")
        host = urlparse(low).hostname or ""
        if not _host_ok(host) or urlparse(low).username is not None:
            raise ValueError(f"Shortened, numeric-host or credential-bearing URL: {url!r} (G3)")
    for href, text in scan.anchors:
        real = urlparse(href.strip().lower()).hostname or ""
        if not real:
            continue
        for m in _HOSTISH.finditer(text):
            if not _same_site(m.group(1).lower(), real):
                raise ValueError(f"Anchor text {m.group(1)!r} != real link host {real!r} (G3)")


async def send_email(*, to: str, subject: str, html: str) -> str | None:
    _assert_safe_email(subject, html)
    payload = {"to": [to], "subject": subject, "html": html, "from_name": EMAIL_FROM_NAME}
    async with httpx.AsyncClient(timeout=30) as client_http:
        resp = await client_http.post(
            f"{EMAIL_BASE_URL}/api/v1/email/send",
            headers={"X-Email-Key": EMAIL_KEY},
            json=payload,
        )
    resp.raise_for_status()
    return resp.json().get("id")


# --- Inquiries ---
EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


class InquiryCreate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    company: str = Field(default="", max_length=160)
    email: str = Field(min_length=5, max_length=200)
    phone: str = Field(default="", max_length=40)
    industry: str = Field(default="", max_length=120)
    service: str = Field(min_length=2, max_length=80)
    locations: str = Field(default="", max_length=40)
    message: str = Field(min_length=5, max_length=4000)


def _inquiry_email_html(doc: dict) -> str:
    def row(label, value):
        return (
            f'<tr><td style="padding:10px 14px;font-family:Arial,sans-serif;font-size:11px;'
            f'color:#64748B;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid #E2E8F0">'
            f'{escape(label)}</td>'
            f'<td style="padding:10px 14px;font-family:Arial,sans-serif;font-size:14px;color:#0F172A;'
            f'border-bottom:1px solid #E2E8F0">{escape(value or "-")}</td></tr>'
        )
    rows = "".join([
        row("Name", doc["name"]),
        row("Company", doc["company"]),
        row("Business Email", doc["email"]),
        row("Phone", doc["phone"]),
        row("Industry", doc["industry"]),
        row("Required Service", doc["service"]),
        row("Locations", doc["locations"]),
        row("Message", doc["message"]),
    ])
    return (
        '<table role="presentation" width="100%" style="border-collapse:collapse;background:#FFFFFF;'
        'border:1px solid #E2E8F0">'
        '<tr><td colspan="2" style="padding:16px 20px;background:#0B132B;font-family:Arial,sans-serif;'
        'color:#FFFFFF;font-size:16px;font-weight:bold">New website inquiry</td></tr>'
        + rows +
        f'<tr><td colspan="2" style="padding:12px 20px;font-family:Arial,sans-serif;font-size:11px;'
        f'color:#94A3B8">Sent by the {escape(EMAIL_FROM_NAME)} website contact form.</td></tr></table>'
    )


@api_router.get("/")
async def root():
    return {"message": "Cergis Networks API"}


@api_router.post("/inquiries")
async def create_inquiry(input: InquiryCreate):
    if not EMAIL_RE.match(input.email):
        raise HTTPException(status_code=422, detail="Invalid email address")
    doc = input.model_dump()
    doc["id"] = str(uuid.uuid4())
    doc["created_at"] = datetime.now(timezone.utc).isoformat()
    doc["email_sent"] = False
    await db.inquiries.insert_one(doc)

    if EMAIL_KEY and INQUIRY_NOTIFY_EMAIL:
        try:
            subject = f"New inquiry — {input.service} ({input.name})"
            await send_email(to=INQUIRY_NOTIFY_EMAIL, subject=subject, html=_inquiry_email_html(doc))
            doc["email_sent"] = True
            await db.inquiries.update_one({"id": doc["id"]}, {"$set": {"email_sent": True}})
        except Exception as e:
            logger.error(f"Inquiry email failed: {e}")

    return {"status": "received", "id": doc["id"], "email_sent": doc["email_sent"]}


@api_router.get("/inquiries")
async def list_inquiries():
    items = await db.inquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(200)
    return {"inquiries": items, "count": len(items)}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
