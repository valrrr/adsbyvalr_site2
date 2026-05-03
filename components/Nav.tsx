'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/ui/Button'
import Logo from '@/components/ui/Logo'

const navLinks = [
  { label: 'work',     href: '/work'     },
  { label: 'services', href: '/services' },
  { label: 'about',    href: '/about'    },
  { label: 'contact',  href: '/contact'  },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'nav-frosted' : 'bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">

            {/* Logo */}
            <Link
              href="/"
              className="text-text-primary hover:text-glow-purple transition-colors"
              aria-label="adsbyvalr — Home"
            >
              <Logo iconSize={28} strokeWidth={6.5} />
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-body text-sm text-text-muted hover:text-text-primary transition-colors focus-visible:text-glow-magenta"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button href="https://portal.adsbyvalr.com" variant="secondary" size="sm" external>
                log in
              </Button>
              <Button href="/contact" variant="primary" size="sm">
                book a call
              </Button>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus-visible:outline-glow-magenta rounded"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block h-0.5 bg-text-primary transition-all duration-300 ${
                  mobileOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
                }`}
              />
              <span
                className={`block h-0.5 bg-text-primary transition-all duration-300 ${
                  mobileOpen ? 'opacity-0 w-0' : 'w-4'
                }`}
              />
              <span
                className={`block h-0.5 bg-text-primary transition-all duration-300 ${
                  mobileOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={closeMobile}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-label="Mobile navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[80vw] max-w-xs bg-bg-secondary border-l border-border-subtle flex flex-col md:hidden"
            >
              {/* Purple accent line */}
              <div className="h-0.5 gradient-line" />

              <div className="flex-1 flex flex-col px-6 pt-20 pb-8 gap-6">
                {navLinks.map(({ label, href }, i) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    <Link
                      href={href}
                      onClick={closeMobile}
                      className="block font-display text-3xl font-bold text-text-primary hover:text-glow-purple transition-colors"
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Sticky CTAs at bottom */}
              <div className="px-6 pb-10 flex flex-col gap-3">
                <Button href="/contact" variant="primary" size="lg" className="w-full justify-center">
                  book a call
                </Button>
                <Button href="https://portal.adsbyvalr.com" variant="secondary" size="lg" external className="w-full justify-center">
                  log in
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
