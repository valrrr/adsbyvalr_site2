'use client'

import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Marquee from '@/components/ui/Marquee'

const marqueeItems = [
  'Jewelry', 'Apparel', 'Hospitality', 'Beauty', 'Design', 'Lifestyle',
  'DTC Brands', 'Fashion', 'Wellness', 'Home Goods',
]

export default function Hero() {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    setIsTouch(window.matchMedia('(hover: none)').matches)
  }, [])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 })
  const txH1 = useTransform(springX, [-1, 1], [-6, 6])
  const tyH1 = useTransform(springY, [-1, 1], [-6, 6])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reducedMotion || isTouch) return
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2))
    mouseY.set((e.clientY - rect.top  - rect.height / 2) / (rect.height / 2))
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: '#08080C' }}
      aria-label="Hero — adsbyvalr"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Purple ambient orb ── */}
      <div
        className="orb-drift-purple absolute pointer-events-none"
        style={{
          width: '55%',
          height: '55%',
          top: '5%',
          left: '-10%',
          background: 'radial-gradient(ellipse, #A855F7 0%, transparent 70%)',
          filter: 'blur(140px)',
          opacity: 0.18,
        }}
        aria-hidden="true"
      />

      {/* ── Red ambient orb ── */}
      <div
        className="orb-drift-red absolute pointer-events-none"
        style={{
          width: '50%',
          height: '50%',
          bottom: '5%',
          right: '-5%',
          background: 'radial-gradient(ellipse, #FF2E4C 0%, transparent 70%)',
          filter: 'blur(160px)',
          opacity: 0.14,
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

        {/* Headline with cursor parallax */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{
            x: txH1,
            y: tyH1,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            wordSpacing: '0.05em',
            fontVariationSettings: '"opsz" 144',
          }}
          className="font-display font-normal text-5xl md:text-6xl lg:text-7xl text-text-primary max-w-4xl mb-7"
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
          paid social, creative, and growth systems<br className="hidden md:block" /> for DTC and lifestyle brands.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.88, duration: 0.5 }}
          className="flex flex-wrap items-center gap-5"
        >
          <Button href="/contact" variant="primary" size="md">
            book a call
          </Button>
          <Link href="/work" className="work-link font-body text-sm font-medium">
            <span className="work-link-text">see the work</span>
            <span className="work-link-arrow" aria-hidden="true">→</span>
          </Link>
        </motion.div>

        {/* Currently booking chip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-6 flex items-center gap-2 font-mono text-[11px] text-text-muted tracking-[0.14em]"
          aria-label="Currently booking for June 2026"
        >
          <span>[</span>
          <span
            className="dot-pulse inline-block w-[6px] h-[6px] rounded-full bg-glow-red flex-shrink-0"
            aria-hidden="true"
          />
          <span>currently booking — june 2026 ]</span>
        </motion.div>
      </div>

      {/* ── Marquee strip ── */}
      <div
        className="relative z-10 border-t border-border-subtle py-4"
        style={{ backgroundColor: 'rgba(19,16,26,0.25)' }}
      >
        <Marquee items={marqueeItems} />
      </div>
    </section>
  )
}
