'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Marquee from '@/components/ui/Marquee'

const headline = ['Ads', 'that', 'move', 'creative', 'brands', 'forward.']

const marqueeItems = [
  'Jewelry', 'Apparel', 'Hospitality', 'Beauty', 'Design', 'Lifestyle',
  'DTC Brands', 'Fashion', 'Wellness', 'Home Goods',
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero — AdsByVsh"
    >
      {/* Drifting background glow */}
      <div
        className="hero-glow-drift absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Mono label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-xs tracking-widest text-glow-purple uppercase mb-6"
        >
          [ Est. 2025 — Creative Performance ]
        </motion.p>

        {/* Headline — word stagger */}
        <h1 className="font-display font-black leading-[0.95] tracking-tight glow-headline mb-8">
          <span className="flex flex-wrap gap-x-[0.22em]">
            {headline.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, skewY: 3 }}
                animate={{ opacity: 1, y: 0, skewY: 0 }}
                transition={{
                  delay: 0.3 + i * 0.08,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="inline-block text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-text-primary"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="font-body text-base md:text-lg text-text-muted max-w-lg mb-10 leading-relaxed"
        >
          We build ad engines for brands people actually remember.
          Paid social, creative strategy, and growth systems built for DTC, fashion, and lifestyle.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.5 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Button href="/contact" variant="primary" size="lg">
            Book a Call
          </Button>
          <Button href="/work" variant="ghost" size="lg" className="group">
            See the work
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-20 hidden md:flex items-center gap-3"
          aria-hidden="true"
        >
          <div className="w-8 h-[1px] bg-glow-purple/40" />
          <span className="font-mono text-xs tracking-widest text-text-muted uppercase">Scroll</span>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="relative z-10 border-t border-border-subtle bg-bg-secondary/50 py-4 mt-auto">
        <Marquee items={marqueeItems} />
      </div>
    </section>
  )
}
