# AJILE Development — Barbershop Website Template

Content-rich, plug-and-play Next.js template for barbershops. Swap in a client’s info and the site looks custom in **under 20 minutes**. English and Spanish supported.

## Features

- **Next.js 16** — App Router, TypeScript, Tailwind, stock imagery
- **Plug-and-play** — Edit one config file (and optionally messages) for each brand
- **Content-rich** — Why choose us, What to expect, FAQ, From the shop, Policies, optional Team, gallery, testimonials
- **EN / ES** — All copy in `messages/en.json` and `messages/es.json`; switch via header
- **Pages** — Home, Services (with images), Book, About (Our space, Team, Policies), Contact
- **Single source of truth** — `src/config/site.ts` for business name, address, hours, phone, team, booking URL

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You’ll be redirected to `/en`.

---

## Plug-and-Play: New Client in &lt;20 Minutes

### 1. Edit `src/config/site.ts` (required)

- **businessName** — Shop name
- **locationName** — Optional (e.g. `"South Beach"`); shows in hero and visit block
- **tagline** — One line for hero/meta
- **address** — line1, city, state, zip
- **phone**, **email**
- **parkingInfo** — Optional (e.g. `"Street parking."`)
- **hours** — Mon–Sun strings
- **bookingUrl** — Calendly/Cal.com URL (or leave `""` for “call us”)
- **foundedYear** — Optional; shows “Since 20XX” on About
- **team** — Optional array of `{ name, role, imageUrl? }`. Leave `[]` to hide “Meet the team”.

### 2. Optional: tweak copy in `src/messages/en.json` and `src/messages/es.json`

- Hero tagline, about story, FAQ answers, policies, “From the shop” tips
- Use `{businessName}` in any string to insert the config name

### 3. Deploy

No code changes needed. The template is in-depth by default: FAQ, Why choose us, What to expect, Policies, From the shop, testimonials, gallery, and (if configured) team.

---

## Content Included by Default

- **Home** — Hero, gallery, pull quote, services preview (4 cards), Why choose us (4), What to expect (3 steps), Visit us card, FAQ (5 Q&As), From the shop (3 tips), featured testimonial, 3 short testimonials
- **Services** — Intro line + 8 service cards with stock images
- **About** — Story, values, Our space gallery, optional Team, Policies (cancellations, late arrivals, kids)
- **Book** — Booking section + “or call us”
- **Contact** — Address, phone, email, hours + form
- **Footer** — Links (Services, Book, About, Contact, FAQ, Policies), tagline, optional app placeholder

---

## Project Structure

```
src/
├── app/[locale]/          # All pages (en, es)
│   ├── page.tsx           # Home (hero, gallery, services preview, why us, what to expect, visit, FAQ, from the shop, testimonials)
│   ├── services/          # Service cards with images
│   ├── book/
│   ├── about/             # Story, values, gallery, team, policies
│   └── contact/
├── components/            # Header, Footer, FAQ accordion, forms, booking section
├── config/site.ts         # PLUG-AND-PLAY: edit for each client
├── lib/i18n.ts
└── messages/
    ├── en.json            # All EN copy (optional to edit per client)
    └── es.json            # All ES copy
```

---

## Calendar / Booking

- Set **bookingUrl** in `site.ts` → Book page shows a button that opens that URL.
- Set **calendarEmbedUrl** → Book page can embed an iframe.
- Leave both empty → Book page shows “call us” and phone; contact form available.

---

## License

Private — AJILE Development.
