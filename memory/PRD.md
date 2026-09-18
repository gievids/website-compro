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
  - Components: Navbar, Footer, Reveal/MaskedLine/SectionHeader/Eyebrow, HeroCarousel (reusable full-bleed with per-slide object-position: Home 4, Solutions 2, Network 3, Industries 4, About 2, Contact 2; contained no-crop mode available), Marquee, CTASection, SolutionCard, FAQ, brand/Logo; data/solutions.js
  - Fonts: Plus Jakarta Sans (display), Inter (body), JetBrains Mono (labels)
- Backend: FastAPI, MongoDB (motor)
  - GET /api/ — health
  - POST /api/inquiries — validate, store in `inquiries` collection, send notification email
  - GET /api/inquiries — list (for later export/admin)
  - Email: Emergent managed email proxy (httpx), guardrail gate `_assert_safe_email` on every send
- Env (backend/.env): EMERGENT_EMAIL_KEY, EMAIL_FROM_NAME="Cergis Networks", INQUIRY_NOTIFY_EMAIL="info@cergis.net.id" (live)
- Real contact details live sitewide: The Bellezza Shopping Arcade, Permata Hijau — Jakarta; info@cergis.net.id; 021 2567 5858; WhatsApp 0822 9960 1565; Mon–Fri 08.00–18.00 WIB

## Implemented (2026-09-16)
- All 5 pages, fully responsive, sticky glass navbar + mobile full-screen menu
- All 16 carousel/page photos are self-hosted in frontend/public/images/ (no external customer-assets URLs remain); source zip available at /cergis-website-source.zip; user pushes to GitHub repo "website-compro" manually
- Kinetic hero: full-screen image carousel (4 client-provided photos) with crossfade + Ken Burns zoom, vertical progress indicators, navy gradient scrim, masked line reveal, scroll parallax, highlight strip
- Editorial marquee, numbered manifesto chapters, dark "Service is a Promise." signature section
- Interactive network architecture explorer (6 clickable layers + detail panel), NOC operations section
- Typography system: content paragraphs justified (line-height 1.7, hyphens auto) on desktop/tablet, left-aligned below 640px; short labels/cards (text-sm/mono) stay left; all decorative em/en dashes removed from copy sitewide
- Brand system: reusable components/brand/Logo.jsx with official full color logo (logo-cergis-full.webp, uncropped, transparent space preserved) on light backgrounds; official white variation (logo-cergis-white2.webp, same composition) on navy footer; hexagon favicon; always width:auto + object-contain, verified ratio 1.33 rendered = natural
- Interactive FAQ accordion (8 company-provided Q&As) on the homepage before the final CTA and on the Contact page below the form
- Industries page (/industries): intro copy + 11 sector cards (Banking & Trading, Mining, E-Commerce, IT Solution, Call Center, Software Development, Media & Entertainment, FMCG, F&B, Hospitality, Education Institution) + orange CTA card; added to navbar and footer
- About page with real company timeline (2006 founding → 2011 ISP license → 2024 Jartaplok license → Present) and values grid
- Contact form → MongoDB + email notification (verified end-to-end, toast confirmation)
- SEO title/meta per brief; no invented statistics anywhere (99.5% SLA on Internet Service is company-provided/verified)

## Backlog
- P1: Case Studies
- P2: Insights/Blog, Customer Portal, CMS, Careers, Knowledge Center (Phase 2 per brief)

## Next Tasks
1. Industries / Case Studies pages (Phase 2)
2. Add /api/inquiries admin view or export
3. Insights/Blog, Customer Portal, CMS (Phase 2)
