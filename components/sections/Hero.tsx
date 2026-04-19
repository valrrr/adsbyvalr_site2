'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Marquee from '@/components/ui/Marquee'

const marqueeItems = [
  'Jewelry', 'Apparel', 'Hospitality', 'Beauty', 'Design', 'Lifestyle',
  'DTC Brands', 'Fashion', 'Wellness', 'Home Goods',
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: '#08080C' }}
      aria-label="Hero — adsbyvalr"
    >
      {/* ── Purple streak: top-left → mid-right ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '56%',
          height: '180px',
          top: '-4%',
          left: '-6%',
          background: 'linear-gradient(105deg, #A855F7 0%, transparent 65%)',
          transform: 'rotate(28deg)',
          transformOrigin: 'left center',
          filter: 'blur(120px)',
          opacity: 0.32,
        }}
        aria-hidden="true"
      />

      {/* ── Red streak: bottom-right → up-left ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '50%',
          height: '160px',
          bottom: '6%',
          right: '-4%',
          background: 'linear-gradient(285deg, #FF2E4C 0%, transparent 65%)',
          transform: 'rotate(-30deg)',
          transformOrigin: 'right center',
          filter: 'blur(140px)',
          opacity: 0.22,
        }}
        aria-hidden="true"
      />

      {/* ── Magenta connector: mid-canvas, very subtle ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '38%',
          height: '110px',
          top: '42%',
          left: '18%',
          background: 'linear-gradient(90deg, transparent, #D946EF 50%, transparent)',
          transform: 'rotate(32deg)',
          filter: 'blur(130px)',
          opacity: 0.11,
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-[22vh] md:pt-[25vh] pb-16 flex-1">

        {/* Mono eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-mono text-[10px] tracking-[0.22em] text-glow-purple uppercase mb-7"
        >
          [ Est. 2025 — Creative Performance ]
        </motion.p>

        {/* Headline — single fade-up, controlled line breaks */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-normal text-5xl md:text-6xl lg:text-7xl text-text-primary max-w-4xl mb-7"
          style={{
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            wordSpacing: '0.05em',
            fontVariationSettings: '"opsz" 144',
          }}
        >
          Ads that move{' '}
          <br className="hidden md:block" />
          creative brands{' '}
          <br className="hidden md:block" />
          forward.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-body text-sm md:text-base text-text-muted max-w-sm mb-9 leading-relaxed"
        >
          Paid social, creative, and growth systems<br className="hidden md:block" /> for DTC and lifestyle brands.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.88, duration: 0.5 }}
          className="flex flex-wrap items-center gap-5"
        >
          <Button href="/contact" variant="primary" size="md">
            Book a Call
          </Button>
          <Button href="/work" variant="ghost" size="sm" className="group text-text-muted hover:text-text-primary">
            See the work
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Button>
        </motion.div>
      </div>

      {/* ── Marquee strip ── */}
      <div className="relative z-10 border-t border-border-subtle py-4" style={{ backgroundColor: 'rgba(19,16,26,0.25)' }}>
        <Marquee items={marqueeItems} />
      </div>
    </section>
  )
}
