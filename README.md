# Webfluency Agency — Production-Ready Website

A complete agency website built with Next.js 14 (App Router), TypeScript, Tailwind CSS, GSAP, Lenis, and custom motion design. Engineered to rank, convert, and perform.

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Production build
npm run build
npm start
```

---

## Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Scroll | Lenis (smooth-scroll, synced with GSAP) |
| Animation | GSAP + ScrollTrigger |
| Fonts | Inter (body) · Space Grotesk (display) · Space Mono (labels) |
| Images | next/image with WebP/AVIF support |
| Form API | Built-in Next.js API route at `/api/contact` |
| SEO | Semantic HTML + JSON-LD + sitemap.xml + robots.txt |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout, fonts, JSON-LD schemas, metadata
│   ├── page.tsx                # Home page — all sections composed here
│   ├── globals.css             # Base styles, CSS variables, Lenis, marquee mask
│   ├── sitemap.ts              # Dynamic sitemap for all routes
│   ├── robots.ts               # robots.txt
│   ├── api/
│   │   └── contact/route.ts    # Contact form API (wire email provider here)
│   └── services/
│       ├── page.tsx            # Services index (/services)
│       └── [slug]/page.tsx     # Individual service pages (8 routes)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Navbar — hide/show on scroll, magnetic CTA
│   │   ├── MenuOverlay.tsx     # Fullscreen navigation overlay
│   │   ├── ContactModal.tsx    # Slide-over contact form with chip selector
│   │   ├── Footer.tsx          # Complete footer with services, socials, CTA
│   │   └── MobileStickyBar.tsx # Sticky bottom booking bar (mobile only)
│   ├── motion/
│   │   ├── Preloader.tsx       # 0–100% counter, image flash, upward reveal
│   │   ├── SmoothScroll.tsx    # Lenis + GSAP ScrollTrigger sync provider
│   │   └── CustomCursor.tsx    # Dot + ring cursor, VIEW bubble, touch-disabled
│   ├── sections/
│   │   ├── Hero.tsx            # Headline reveal, cursor trail, CTAs
│   │   ├── LogoMarquee.tsx     # Infinite partner proof marquee
│   │   ├── WhyWebfluency.tsx   # 6-card grid with animated mini-scenes
│   │   ├── Services.tsx        # Numbered expandable rows (01–08)
│   │   ├── Process.tsx         # 6 steps + animated SVG circle progress
│   │   ├── EngagementModels.tsx# 3 pricing/engagement cards
│   │   ├── SelectedWork.tsx    # 4 case study cards + featured case study
│   │   ├── Stats.tsx           # Scroll-triggered counter cards
│   │   ├── TechMarquee.tsx     # Dual-row tech stack marquee
│   │   ├── Faq.tsx             # Smooth accordion, light section
│   │   └── FinalCta.tsx        # Giant marquee heading + Book a Call
│   └── ui/
│       └── MagneticButton.tsx  # Reusable magnetic CTA button (all variants)
│
├── content/
│   └── site-content.ts         # ← MASTER CONTENT FILE (edit all copy here)
│
└── lib/
    └── utils.ts                # cn() utility
```

---

## 🔧 Placeholder Checklist — Replace Before Launch

Go through each item below and replace with your verified data:

### Brand & Contact
- [ ] `src/content/site-content.ts` → `SITE_METADATA.url` — Your production domain
- [ ] `SITE_METADATA.contact.email` — Your real business email
- [ ] `SITE_METADATA.contact.phone` — Your real business phone
- [ ] `SITE_METADATA.contact.address` — Your actual business location
- [ ] `SITE_METADATA.socials` — Your real social media profile URLs
- [ ] `BOOKING_URL` — Your Calendly / Cal.com / booking link

### Copy & Case Studies
- [ ] `CASE_STUDIES[]` — Replace 4 placeholder projects with your real case studies + images
- [ ] `FEATURED_CASE_STUDY` — Replace with real featured client story, metrics, and direct quote
- [ ] `STATS[]` — Replace all `[00]` values with your verified data
- [ ] `PARTNER_PLACEHOLDERS[]` — Replace with real client/partner names and logos

### Images
- [ ] All Unsplash placeholder images → Your real project screenshots / photos
- [ ] `public/images/og-image.jpg` — Create a proper 1200×630 OG image
- [ ] `public/favicon.ico` + `public/apple-touch-icon.png` — Your brand favicon

### Technical / Legal
- [ ] `src/app/api/contact/route.ts` — Wire up your email provider (Resend recommended)
- [ ] Privacy Policy route (`/privacy`) — Add your legal pages
- [ ] Terms of Service route (`/terms`) — Add your legal pages
- [ ] `src/app/layout.tsx` footer → Legal entity name

### SEO
- [ ] Verify Google Search Console after first deploy
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Configure canonical URLs to match your production domain

---

## Deploying to Vercel

1. Push repo to GitHub / GitLab / Bitbucket
2. Connect repo in [Vercel Dashboard](https://vercel.com/new)
3. Vercel auto-detects Next.js — no configuration needed
4. Add environment variable `RESEND_API_KEY` (or your chosen email provider key) in Vercel project settings
5. Deploy → Vercel assigns a `.vercel.app` domain
6. Add your custom domain in Vercel > Project > Domains

```bash
# Or deploy directly via Vercel CLI
npx vercel --prod
```

---

## Email Provider Setup (Contact Form)

The `/api/contact` route is fully wired — just add your provider. Resend is recommended:

```bash
npm install resend
```

Then in `src/app/api/contact/route.ts`, uncomment the Resend block and add:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

to your `.env.local` file.

---

## Motion & Design Reference

See [`/docs/motion-spec.md`](./docs/motion-spec.md) for the full reverse-engineered animation spec from the reference site, including easing curves, durations, stagger values, and scroll trigger points.

---

## Performance Notes

- All Lenis smooth scroll and heavy GSAP animations are disabled when `prefers-reduced-motion: reduce` is active
- Custom cursor is disabled on touch/pointer:coarse devices
- Images use `next/image` with automatic WebP/AVIF conversion and lazy loading
- Fonts preloaded with `font-display: swap`
- All heavy sections use `ScrollTrigger` with single RAF loop via GSAP ticker
