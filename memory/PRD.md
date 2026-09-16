# Cergis Networks — Website Redesign MVP (PRD)

## Original Problem Statement
Redesign and rebuild the corporate website for Cergis Networks, an Indonesian ISP and network infrastructure company (existing site: cergis.net.id). Modern, premium, enterprise-focused corporate website. Phase 1 scope: 5 core pages only — Home, Solutions, Network, About Us, Contact. Brand: "Service is a Promise." / "Connectivity That Moves Business." Never invent statistics, customer names, coverage, SLA figures — use clearly marked placeholders.

## User Choices (confirmed)
- Stack: existing React (JS) + FastAPI + MongoDB template (not Next.js)
- Contact form: save inquiries to MongoDB AND send email notification via Emergent-managed Resend
- Theme: lighter corporate — mostly white/slate, deep navy structure, orange CTA accents
- Design bar: Awwwards-level — masked line-by-line hero reveal, editorial marquee, numbered manifesto chapters, framer-motion scroll reveals, Lenis momentum scrolling, hero parallax

## Architecture
- Frontend: React 19 + react-router-dom 7, Tailwind, framer-motion 11, lenis, sonner, lucide-react
  - Pages: / (Home), /solutions, /network, /about, /contact
  - Components: Navbar, Footer, Reveal/MaskedLine/SectionHeader/Eyebrow, NetworkViz (animated SVG topology), Marquee, CTASection, SolutionCard; data/solutions.js
  - Fonts: Plus Jakarta Sans (display), Inter (body), JetBrains Mono (labels)
- Backend: FastAPI, MongoDB (motor)
  - GET /api/ — health
  - POST /api/inquiries — validate, store in `inquiries` collection, send notification email
  - GET /api/inquiries — list (for later export/admin)
  - Email: Emergent managed email proxy (httpx), guardrail gate `_assert_safe_email` on every send
- Env (backend/.env): EMERGENT_EMAIL_KEY, EMAIL_FROM_NAME="Cergis Networks", INQUIRY_NOTIFY_EMAIL (currently test sink delivered@resend.dev — REPLACE with real company inbox)

## Implemented (2026-09-16)
- All 5 pages, fully responsive, sticky glass navbar + mobile full-screen menu
- Kinetic hero: masked line reveal, animated SVG network topology (SMIL packet pulses), scroll parallax, highlight strip
- Editorial marquee, numbered manifesto chapters, dark "Service is a Promise." signature section
- Interactive network architecture explorer (6 clickable layers + detail panel), NOC operations section
- About page with placeholder timeline (marked "Placeholder — to be confirmed") and values grid
- Contact form → MongoDB + email notification (verified end-to-end, toast confirmation)
- SEO title/meta per brief; no invented statistics anywhere

## Backlog
- P0: Replace INQUIRY_NOTIFY_EMAIL with Cergis's real inbox; fill in real office address/email/phone/WhatsApp/hours placeholders
- P1: Verified company facts (timeline dates, stats) once provided; Industries page; Case Studies
- P2: Insights/Blog, Customer Portal, CMS, Careers, Knowledge Center (Phase 2 per brief)

## Next Tasks
1. Collect real contact details + notification inbox from user
2. Add /api/inquiries admin view or export once real content lands
3. Industries / Case Studies pages
