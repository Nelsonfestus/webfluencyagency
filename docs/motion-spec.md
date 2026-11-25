# Motion & Design Specification: Webfluency Agency
*Reverse-engineered from https://partner.clleancode.com/*

---

## 1. Design Tokens & Visual Hierarchy

### Color Palette
- **Near-Black Background (Default Dark)**: `#131313` (Main background) / `#000000` (Deep black header, overlays, preloader) / `#181818` (Card background dark)
- **Light Sections**: `#ffffff` (Pure white background) / `#fafafa` (Off-white cards) / `#f2f2ee` & `#e4e4e0` (Light borders & muted surfaces)
- **Primary Text**: `#fafafa` / `#ffffff` on dark; `#131313` on light sections
- **Muted Text**: `#8c8c8a` / `#a0a09e` (Dark mode) / `#666663` (Light mode)
- **Borders & Dividers**: `rgba(255, 255, 255, 0.1)` (`--grey300`) on dark; `rgba(0, 0, 0, 0.08)` on light
- **Signature Accent Color**: `#b6f419` (Electric Neon Lime / Chartreuse)
  - Secondary Accent: `#cbff46` (Light Lime Hover)
  - Dark Accent Tint: `rgba(182, 244, 25, 0.12)` (Glow / Chip backgrounds)
  - Accent Gradient Line: `linear-gradient(180deg, #000000 0%, #b6f419 50%, #000000 100%)`

### Typography System
- **Display Font**: Editorial Grotesk with tight tracking (`letter-spacing: -0.035em` to `-0.04em`), medium/semibold weight (500/600).
- **Body Font**: Clean neutral Grotesk (`Inter` / system-ui), regular 400 and medium 500, line-height 1.5 to 1.6.
- **Mono / Eyebrow**: `Space Mono` / `ui-monospace` for numbered badges `(01)`, tags, and technical specs.
- **Fluid Scale**:
  - Hero Headline (H1): `clamp(52px, 38px + 4.8vw, 110px)`, line-height 0.95 - 1.02.
  - Section Headings (H2): `clamp(40px, 32px + 2.4vw, 72px)`, line-height 1.05 - 1.1.
  - Card Headings (H3): `clamp(24px, 20px + 0.8vw, 36px)`, line-height 1.15.
  - Subtext / Large Body: `clamp(18px, 16px + 0.35vw, 22px)`, line-height 1.5.
  - Small / Micro-labels: `13px - 14px`, uppercase tracking `0.06em`.

### Geometry & Spacing
- Container Max Width: `1440px` (standard wrap `1280px` - `1360px` with fluid gutter `clamp(20px, 4vw, 60px)`).
- Border Radii:
  - Cards: `24px` (`--border-radius`)
  - Chips / Pills / Buttons: `999px` (`--radius-pill`)
  - Small elements / Tooltips: `8px` - `12px`

---

## 2. Animation & Motion Curves

### Easing Curves (Cubic-Bezier)
1. **Strong Out Expo** (Hero, Reveals, Page Transitions):
   `cubic-bezier(0.19, 1, 0.22, 1)` (GSAP `"expo.out"`)
2. **Smooth Power2 Out** (Hover, Micro-interactions, Fades):
   `cubic-bezier(0.3, 0.86, 0.36, 0.95)` / `"power2.out"`
3. **Accordion / Height Ease**:
   `cubic-bezier(0.4, 0, 0.2, 1)` (Fluid responsive expansion)
4. **Circular / SVG Track Progress**:
   `cubic-bezier(0.65, 0, 0.35, 1)`
5. **Magnetic Follower**:
   Spring damping `25`, stiffness `250`, mass `0.5`

### Durations & Timing
- Preloader Duration: ~2.4s total (Counter: 1.8s, Hold: 0.2s, Upward Curtain Wipe: 0.85s).
- Text Line Mask Reveals: Duration `0.85s`, Stagger `0.06s` per line, Ease `expo.out`.
- Card Stagger Reveals: Duration `0.7s`, Stagger `0.1s`, Start `top 82%`.
- Hover Tilt / Lift: Duration `0.35s`, Ease `"power2.out"`.
- Accordion Open/Close: Duration `0.42s`, Ease `cubic-bezier(0.4, 0, 0.2, 1)`.

---

## 3. Section Motion & Interaction Details

### 1. Preloader Sequence
- **Initial State**: Fixed full-screen `#000000` overlay (`z-index: 9999`).
- **Counter**: Large display typography `0%` to `100%` alongside `"webfluency 0% friction."`.
- **Mockup Flashes**: Rapid sequence of 10-12 agency project cards flashing behind the counter at ~120ms intervals with blend mode / low opacity (0.15 - 0.25).
- **Handoff**: At 100%, preloader wipes upward (`yPercent: -100%`) with `cubic-bezier(0.19, 1, 0.22, 1)`. As curtain lifts, Hero text lines reveal in masked `translateY(100% -> 0%)`.

### 2. Navbar & Fullscreen Overlay Menu
- **Scroll Behavior**:
  - Hidden on scroll down (`translateY(-100%)`, duration `0.35s`).
  - Shown on scroll up (`translateY(0%)`, with glassmorphic `backdrop-blur-md` and `rgba(19, 19, 19, 0.85)` background).
- **Magnetic Buttons**:
  - "Book a Call" CTA and Menu toggle pull gently towards mouse on hover (`x`, `y` translation up to 8px).
- **Fullscreen Menu Overlay**:
  - Full viewport slide/fade in.
  - Staggered line reveal for navigation items (`Home`, `Services`, `Process`, `Work`, `FAQ`, `Contact`).
  - Active hover preview showing contextual graphic / category tag.

### 3. Hero Section
- **Headline Mask Reveal**: Text wrapped in overflow-hidden containers; lines slide up from `y: 100%` to `y: 0%` with opacity `0 -> 1`.
- **Floating Image Parallax**: Ambient subtle floating motion (`y: ±12px`) linked to scroll velocity and mouse position.
- **Cursor Image Trail (Desktop)**:
  - Tracks pointer movement across the hero bounds.
  - Spawns a floating project thumbnail every ~60px of mouse distance.
  - Thumbnail scales in (`scale: 0.8 -> 1`, `opacity: 0.9`), drifts slightly in movement direction, and smoothly fades out over 900ms.
- **Buttons**:
  - Primary "Book a Call": Accent `#b6f419` hover fill with arrow icon slide (`x: 0 -> 4px`, `y: 0 -> -4px`).
  - Secondary "See Our Services": Ghost pill with white border, expanding fill on hover.

### 4. Proof & Logo Marquee
- **Infinite Loop**: Seamless CSS / GSAP horizontal translation (`transform: translateX(-50%)`).
- **Speed**: 35s desktop, 25s mobile.
- **Interaction**: Pauses smoothly on hover (`animation-play-state: paused`).
- **Masking**: Linear gradient mask-image on container edges for soft fade-in/fade-out (`linear-gradient(90deg, transparent, black 15%, black 85%, transparent)`).

### 5. "Why Webfluency" (6-Card Grid)
- **Header Marquee**: Giant background marquee band `"Why Webfluency?"` shifting subtly horizontally with scroll.
- **Stagger Reveal**: Cards rise from `y: 40px`, `opacity: 0` with `stagger: 0.08s`.
- **Hover Lift**: `translateY(-6px)`, border color transitions to accent `#b6f419` / glow.
- **6 Interactive Mini-Scenes**:
  1. *Problem-First Approach*: Interactive before/after problem vs resolution toggle indicator.
  2. *Clear Process, Zero Surprises*: Sequential animated progress rail (Kickoff → Design → Build → QA → Launch) with active pulsing beacon.
  3. *Built to Rank*: Real-time SEO ranking pulse bar (SERP position #1 simulation).
  4. *Quality in Every Detail*: 100/100 Core Web Vitals score dial with instant load benchmark.
  5. *One Point of Contact*: Live direct communication badge ("Direct Slack / WhatsApp channel • 15m response").
  6. *Results You Can Measure*: Dynamic SVG growth chart drawing upwards with conversion metrics.

### 6. Services List (Expandable Hover Rows)
- **Numbered Structure**: Large `(01)` to `(08)` list items separated by fine dividers.
- **Hover State**:
  - Row expands vertically (`padding: 32px 0 -> 48px 0`).
  - Accent color highlights the number and arrow.
  - Tags animate in with quick stagger (`opacity: 0 -> 1`, `translateY: 8px -> 0px`).
  - Floating image preview springs to follow the cursor on desktop (`transform: translate3d(x, y, 0)`).
- **Service Details**:
  - Problem solved, Webfluency approach, tangible business outcome, and 5-7 specialized tags.

### 7. Process (Pinned Scroll with SVG Progress Track)
- **Pinned Stage**: Pin container while scrolling through 6 distinct phases.
- **Circular SVG Track**:
  - Outer dashed circle (`stroke-dasharray: 12 12`).
  - Active animated progress circle (`stroke-dashoffset` driven by ScrollTrigger progress).
- **Phase Transitions**: Each phase smoothly fades in and out as user scrolls, syncing with the circular progress indicator.

### 8. Engagement Models (3 Cards)
- Cards: Project-by-Project, Monthly Growth Retainer, Dedicated On-Demand.
- Hover Interaction: Lift `y: -8px`, outer neon lime border gradient activation, CTA button arrow translate.

### 9. Selected Work & Case Studies
- **Portfolio Cards**: Aspect ratio 16:10 with image scale `scale: 1.0 -> 1.06` on hover.
- **Cursor Bubble**: Cursor follower expands into a circular `#b6f419` badge with black text `"VIEW"`.
- **Featured Case Study**: Full-width high-impact section with live client quote, challenge, solution, and metric callouts (`+312% Organic Traffic`, `0.6s Load Time`).

### 10. Stats & Animated Counters
- **Trigger**: ScrollTrigger fires once when entering viewport (`top 85%`).
- **Animation**: Numbers count up from 0 to target over 2.0s with `power1.out` easing.
- **Placeholders**: `[00]+` and `[00]%` clear templates for user data.

### 11. Tech Stack Marquee
- Horizontal marquee of industry-standard tools (Next.js, Tailwind, React, Supabase, Shopify, GA4, Search Console, Midjourney, etc.) with grayscale-to-white hover transition.

### 12. FAQ Accordion
- **Toggle**: Click expands collapsible content region (`max-height: 0 -> scrollHeight`).
- **Plus Icon**: Rotates 45 degrees to form an "x" (`transform: rotate(45deg)`).
- **Smooth Physics**: `cubic-bezier(0.4, 0, 0.2, 1)` duration `0.35s`.
- **Accessibility**: ARIA `aria-expanded`, `aria-controls`, and keyboard Enter/Space controls.

### 13. Contact Modal & Final CTA
- Giant marquee banner `"Let's talk about your project"` with magnet button.
- Slide-over modal with backdrop blur (`opacity: 0 -> 1`, modal `translateX(100% -> 0%)`).
- Form with input float labels, validation, honeypot anti-spam, and responsive submission state.

### 14. Responsive & Accessibility Constraints
- **Reduced Motion**: All continuous parallax, heavy transforms, and preloader image flashing are disabled when `prefers-reduced-motion: reduce` is detected.
- **Mobile Viewport (390px)**:
  - Cursor followers disabled on touch devices.
  - Sticky bottom "Book a Call" quick action pill.
  - Touch-friendly tap targets (minimum 48px height).
  - Horizontal margins compressed to `16px - 20px`.
