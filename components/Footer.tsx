import Link from 'next/link'

const navLinks = [
  { label: 'Work',     href: '/work'     },
  { label: 'Services', href: '/services' },
  { label: 'About',    href: '/about'    },
  { label: 'Contact',  href: '/contact'  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-bg-secondary border-t border-border-subtle overflow-hidden" aria-label="Site footer">
      <div className="gradient-line" />

      {/* Faint purple orb — top-center bleed */}
      <div
        className="absolute rounded-full pointer-events-none w-[400px] h-[300px] -top-[80px] left-1/2 -translate-x-1/2 bg-[#A855F7] opacity-[0.08] blur-[80px]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 md:py-16">

        {/* 2 cols on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-8">

          {/* Col 1 — Wordmark + tagline */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="font-display text-xl md:text-2xl font-black text-text-primary hover:text-glow-purple transition-colors"
            >
              adsbyvalr
            </Link>
            <p className="font-mono text-xs tracking-wider text-text-muted uppercase leading-relaxed">
              Creative performance<br className="md:hidden" /> marketing
            </p>
            <p className="font-body text-sm text-text-muted mt-1 leading-relaxed hidden md:block">
              We build ad engines for brands<br />people actually remember.
            </p>
          </div>

          {/* Col 2 — Nav links */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs tracking-widest text-glow-purple uppercase mb-1">
              Navigation
            </p>
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="font-body text-sm text-text-muted hover:text-text-primary transition-colors w-fit"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Col 3 — Contact + social (desktop only) */}
          <div className="hidden md:flex flex-col gap-3">
            <p className="font-mono text-xs tracking-widest text-glow-purple uppercase mb-1">
              Get in Touch
            </p>
            <Link
              href="/contact"
              className="font-body text-sm text-text-muted hover:text-glow-magenta transition-colors w-fit"
            >
              Book a discovery call →
            </Link>
            <a
              href="mailto:hello@adsbyvalr.com"
              className="font-body text-sm text-text-muted hover:text-text-primary transition-colors w-fit"
            >
              hello@adsbyvalr.com
            </a>
            <div className="flex gap-4 mt-2">
              <a
                href="https://instagram.com/adsbyvalr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-wider text-text-muted hover:text-glow-purple transition-colors uppercase"
                aria-label="adsbyvalr on Instagram"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com/@adsbyvalr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-wider text-text-muted hover:text-glow-purple transition-colors uppercase"
                aria-label="adsbyvalr on TikTok"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* Mobile: social icons in bottom bar */}
        <div className="mt-8 pt-6 border-t border-border-subtle flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="font-mono text-xs text-text-muted">
            © {year} adsbyvalr. all rights reserved.
          </p>
          {/* Social on mobile only */}
          <div className="flex gap-4 md:hidden">
            <a
              href="https://instagram.com/adsbyvalr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-wider text-text-muted uppercase"
              aria-label="adsbyvalr on Instagram"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com/@adsbyvalr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-wider text-text-muted uppercase"
              aria-label="adsbyvalr on TikTok"
            >
              TikTok
            </a>
          </div>
          <p className="font-mono text-xs text-border-subtle hidden md:block">
            EST. 2025 — CREATIVE PERFORMANCE
          </p>
        </div>
      </div>
    </footer>
  )
}
