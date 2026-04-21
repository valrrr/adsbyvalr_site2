'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'

interface Metric {
  prefix: string
  value: number
  suffix: string
  decimals: number
  label: string
}

interface Project {
  id: string
  slug: string
  category: string
  client: string
  metrics: [Metric, Metric, Metric]
  summary: string
  gradient: string
  mobileOnly?: boolean
}

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

const projects: Project[] = [
  {
    id: 'kinetic-label',
    slug: 'kinetic-label',
    category: 'fashion — paid social',
    client: 'kinetic label',
    metrics: [
      { prefix: '',  value: 2.4, suffix: 'x', decimals: 1, label: 'ROAS lift' },
      { prefix: '-', value: 38,  suffix: '%', decimals: 0, label: 'CPA drop' },
      { prefix: '$', value: 420, suffix: 'k', decimals: 0, label: 'ad spend managed' },
    ],
    summary: 'scaled a LA streetwear launch from zero to 6-figure monthly revenue on meta + tiktok in 90 days.',
    gradient: 'linear-gradient(135deg, #3b0764 0%, #6B21A8 40%, #A855F7 70%, #D946EF 100%)',
  },
  {
    id: 'foret-studio',
    slug: 'foret-studio',
    category: 'jewelry — creative strategy',
    client: 'forêt studio',
    metrics: [
      { prefix: '',  value: 3.1, suffix: 'x', decimals: 1, label: 'ROAS lift' },
      { prefix: '-', value: 22,  suffix: '%', decimals: 0, label: 'CPA drop' },
      { prefix: '$', value: 180, suffix: 'k', decimals: 0, label: 'ad spend managed' },
    ],
    summary: 'rebuilt the creative system for a fine jewelry brand — new hooks, new testing cadence, new ceiling.',
    gradient: 'linear-gradient(135deg, #4a0d67 0%, #D946EF 45%, #A855F7 75%, #FF2E4C 100%)',
  },
  {
    id: 'haven-co',
    slug: 'haven-co',
    category: 'hospitality — growth systems',
    client: 'haven co.',
    metrics: [
      { prefix: '',  value: 4.8, suffix: 'x', decimals: 1, label: 'ROAS lift' },
      { prefix: '-', value: 51,  suffix: '%', decimals: 0, label: 'CPA drop' },
      { prefix: '$', value: 640, suffix: 'k', decimals: 0, label: 'ad spend managed' },
    ],
    summary: "turned a boutique hotel group's booking funnel into a repeatable growth engine across three properties.",
    gradient: 'linear-gradient(135deg, #0f0c29 0%, #1e1b4b 30%, #6B21A8 70%, #A855F7 100%)',
  },
  {
    id: 'oros-skin',
    slug: 'oros-skin',
    category: 'beauty — full-funnel',
    client: 'oros skin',
    metrics: [
      { prefix: '',  value: 2.9, suffix: 'x', decimals: 1, label: 'ROAS lift' },
      { prefix: '-', value: 29,  suffix: '%', decimals: 0, label: 'CPA drop' },
      { prefix: '$', value: 310, suffix: 'k', decimals: 0, label: 'ad spend managed' },
    ],
    summary: 'built the full meta + google ads stack for a clean beauty brand preparing for retail distribution.',
    gradient: 'linear-gradient(135deg, #7f1d1d 0%, #FF2E4C 35%, #D946EF 70%, #A855F7 100%)',
  },
]

const MOBILE_PROJECTS = projects.slice(0, 3)

const detailVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' as const } },
  exit:    { opacity: 0,       transition: { duration: 0.15 } },
}

function useCountUp(
  target: number,
  decimals: number,
  duration: number,
  active: boolean,
  reducedMotion: boolean,
): string {
  const [val, setVal]     = useState(0)
  const rafRef            = useRef<number | null>(null)
  const startRef          = useRef<number | null>(null)

  useEffect(() => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    startRef.current = null

    if (!active) { setVal(0); return }
    if (reducedMotion) { setVal(target); return }

    const step = (now: number) => {
      if (startRef.current === null) startRef.current = now
      const t     = Math.min((now - startRef.current) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setVal(t >= 1 ? target : eased * target)
      if (t < 1) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current) }
  }, [active, target, duration, reducedMotion])

  if (decimals > 0) return val === target ? target.toFixed(decimals) : val.toFixed(decimals)
  return val === target ? String(target) : String(Math.round(val))
}

function MetricBlock({
  metric,
  active,
  reducedMotion,
}: {
  metric: Metric
  active: boolean
  reducedMotion: boolean
}) {
  const display = useCountUp(metric.value, metric.decimals, 1200, active, reducedMotion)
  return (
    <div className="flex flex-col gap-1.5">
      <p className="font-display text-3xl sm:text-5xl font-normal text-text-primary leading-none">
        {metric.prefix}{display}{metric.suffix}
      </p>
      <p className="font-body text-xs text-text-muted lowercase tracking-wide">
        {metric.label}
      </p>
    </div>
  )
}

export default function WorkPreview() {
  const [displayIndex, setDisplayIndex]   = useState(0)
  const [inView, setInView]               = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const switchTo = useCallback((index: number) => setDisplayIndex(index), [])

  const handleRowHover = useCallback((index: number) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    hoverTimer.current = setTimeout(() => switchTo(index), 150)
  }, [switchTo])

  const handleRowLeave = useCallback(() => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
  }, [])

  const handleClick = useCallback((index: number) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    switchTo(index)
  }, [switchTo])

  const project = projects[displayIndex]

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-32 bg-bg-primary overflow-hidden"
      aria-label="Selected work"
    >
      {/* Red orb — mid-left bleed */}
      <div
        className="absolute rounded-full pointer-events-none w-[400px] h-[400px] top-1/2 left-[-100px] -translate-y-1/2 bg-[#FF2E4C] opacity-[0.15] blur-[80px] md:opacity-[0.10] md:blur-[110px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-widest text-glow-purple uppercase mb-4">
              [ 03 / SELECTED WORK ]
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-normal text-text-primary leading-tight">
              results, not decks.
            </h2>
          </div>
          <Button href="/work" variant="ghost" size="md" className="group shrink-0 hidden md:inline-flex">
            view all work
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Button>
        </FadeIn>

        {/* Interactive module */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start">

          {/* ── Selector ── */}
          <div className="w-full md:w-[38%] shrink-0">

            {/* Mobile: 3 projects as horizontal pills */}
            <div className="flex md:hidden gap-3 overflow-x-auto pb-3 no-scrollbar" role="tablist">
              {MOBILE_PROJECTS.map((p, i) => (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={displayIndex === i}
                  onClick={() => handleClick(i)}
                  className={`flex-shrink-0 px-4 rounded-full font-mono text-[11px] tracking-wider border transition-colors whitespace-nowrap ${
                    displayIndex === i
                      ? 'border-glow-magenta text-text-primary bg-glow-magenta/10'
                      : 'border-border-subtle text-text-muted'
                  }`}
                  style={{ minHeight: 48 }}
                >
                  {p.client}
                </button>
              ))}
            </div>

            {/* Desktop: stacked selector rows (all 4 projects) */}
            <div className="hidden md:flex flex-col" role="tablist">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={displayIndex === i}
                  onClick={() => handleClick(i)}
                  onMouseEnter={() => handleRowHover(i)}
                  onMouseLeave={handleRowLeave}
                  className="text-left py-5 pr-4 transition-all duration-200 active:scale-[0.98] focus-visible:outline-none"
                >
                  <p className={`font-mono text-[11px] tracking-[0.15em] uppercase mb-1.5 transition-colors duration-200 ${
                    displayIndex === i ? 'text-glow-magenta' : 'text-text-muted'
                  }`}>
                    [ {p.category} ]
                  </p>
                  <p className={`font-display text-2xl lg:text-3xl font-normal transition-colors duration-200 ${
                    displayIndex === i ? 'text-text-primary' : 'text-text-muted/60'
                  }`}>
                    {p.client}
                  </p>
                  <div className="relative mt-3 h-px bg-border-subtle" aria-hidden="true">
                    <div
                      className="absolute inset-y-0 left-0 transition-all duration-500 ease-out"
                      style={{
                        width: displayIndex === i ? '100%' : '0%',
                        background: 'linear-gradient(90deg, var(--glow-magenta), var(--glow-red))',
                      }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ── Detail panel ── */}
          <div className="flex-1 min-w-0" role="tabpanel">
            <AnimatePresence mode="wait">
              <motion.div
                key={displayIndex}
                variants={detailVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Visual card — 4:3 on mobile, 16:10 on desktop */}
                <div
                  className="relative rounded-2xl overflow-hidden case-shimmer-wrap aspect-[4/3] md:aspect-[16/10]"
                  style={{ background: project.gradient }}
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: GRAIN }} />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(ellipse at 65% 35%, rgba(217,70,239,0.35) 0%, transparent 60%)',
                    }}
                  />
                  <div className="absolute bottom-4 left-5">
                    <p className="font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">
                      {project.category}
                    </p>
                  </div>
                </div>

                {/* Metrics — always 3-in-a-row */}
                <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-6">
                  {project.metrics.map((m) => (
                    <MetricBlock
                      key={`${displayIndex}-${m.label}`}
                      metric={m}
                      active={inView}
                      reducedMotion={reducedMotion}
                    />
                  ))}
                </div>

                {/* Summary + link — desktop only */}
                <div className="hidden md:block">
                  <p className="font-body text-sm text-text-muted leading-relaxed mt-5 max-w-lg">
                    {project.summary}
                  </p>
                  <Link
                    href={`/work/${project.slug}`}
                    className="work-link font-body text-sm mt-4 inline-flex"
                  >
                    <span className="work-link-text">read case study</span>
                    <span className="work-link-arrow" aria-hidden="true">→</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile view-all link */}
        <div className="mt-8 md:hidden text-center">
          <Button href="/work" variant="ghost" size="sm" className="group">
            view all work
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
