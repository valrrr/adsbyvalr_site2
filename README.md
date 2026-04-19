# adsbyvalr — Marketing Site

Production-ready Next.js 14 site for adsbyvalr creative performance agency.

## Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS with custom color palette
- **Animation**: Framer Motion (scroll reveals, hero stagger, mobile menu)
- **Fonts**: Fraunces (display) · Inter (body) · JetBrains Mono (accents) — via `next/font`
- **Deployment**: Vercel-ready

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route        | Description                                       |
|--------------|---------------------------------------------------|
| `/`          | Home — hero, services preview, work, process, CTA |
| `/work`      | Case study grid (6 entries)                       |
| `/services`  | Services detail + engagement model                |
| `/about`     | Agency story, values, approach                    |
| `/contact`   | Contact form + calendar embed placeholder         |

## Component Structure

```
components/
  ui/
    Button.tsx          Magnetic-hover button (primary/secondary/ghost)
    FadeIn.tsx          Framer Motion scroll-triggered fade
    GlowOrb.tsx         Cursor-following ambient glow (desktop only)
    Marquee.tsx         Infinite CSS marquee
    Section.tsx         Semantic section wrapper
  sections/
    Hero.tsx            Hero with word-stagger + drifting gradient
    ServicesPreview.tsx 3-column service cards with hover glow
    WorkPreview.tsx     3 work teasers with hover effects
    Process.tsx         4-step process with mono numbers
    CTABand.tsx         Full-width CTA with ambient orb
    ContactForm.tsx     Client-side contact form
  Nav.tsx               Fixed nav with scroll frost + mobile drawer
  Footer.tsx            3-column footer
```

## Swapping Placeholder Content

- **Case study images**: Replace gradient `div` placeholders in `WorkPreview.tsx` and `work/page.tsx` with `<Image>` from `next/image`
- **Contact form backend**: Wire `ContactForm.tsx` to Formspree, Resend, or your form API
- **Calendar embed**: Replace the placeholder `div` in `contact/page.tsx` with a Calendly or Cal.com `<iframe>`
- **Domain**: Update `metadataBase` in `app/layout.tsx` and URLs in `app/sitemap.ts`
- **Social links**: Update `Footer.tsx` with real social handles
- **OG image**: Add `/public/og-image.png` (1200×630)

## Design Tokens

| Token              | Value     | Use                            |
|--------------------|-----------|--------------------------------|
| `bg-primary`       | `#0A0A0F` | Page background                |
| `bg-secondary`     | `#13101A` | Card/section backgrounds       |
| `glow-purple`      | `#A855F7` | Primary accent, borders, icons |
| `glow-red`         | `#FF2E4C` | CTAs, highlights               |
| `glow-magenta`     | `#D946EF` | Gradients, hover states        |
| `text-primary`     | `#F5F3FF` | Body text                      |
| `text-muted`       | `#8B829E` | Secondary text                 |

## Performance Notes

- Blur filters applied to fixed/absolute elements only — never on scrolling content
- Cursor glow and drifting gradient disabled on touch + `prefers-reduced-motion`
- Marquee is pure CSS — zero JS
- Framer Motion used only for mount animations and `whileInView` (fires once)
- No scroll-jacking, no parallax on images, no WebGL
