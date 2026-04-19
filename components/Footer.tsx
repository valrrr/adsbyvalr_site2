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
    <footer className="relative bg-bg-secondary border-t border-border-subtle" aria-label="Site footer">
      {/* Top gradient line */}
      <div className="gradient-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Col 1 — Wordmark + tagline */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="font-display text-2xl font-black text-text-primary hover:text-glow-purple transition-colors"
            >
              adsbyvalr
            </Link>
            <p className="font-mono text-xs tracking-wider text-text-muted uppercase">
              Creative performance marketing
            </p>
            <p className="font-body text-sm text-text-muted mt-1 leading-relaxed">
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

          {/* Col 3 — Contact + social */}
          <div className="flex flex-col gap-3">
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

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="font-mono text-xs text-text-muted">
            © {year} adsbyvalr. All rights reserved.
          </p>
          <p className="font-mono text-xs text-border-subtle">
            EST. 2025 — CREATIVE PERFORMANCE
          </p>
        </div>
      </div>
    </footer>
  )
}
