import type { Metadata } from 'next'
import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'
import CTABand from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Case studies and results from AdsByVsh — creative performance campaigns for DTC, fashion, jewelry, and lifestyle brands.',
}

const caseStudies = [
  {
    id: 'kinetic-label',
    title:    'Kinetic Label',
    category: 'Fashion',
    service:  'Paid Social',
    result:   '4.2× ROAS',
    period:   '60 days',
    gradient: 'from-glow-purple-deep via-glow-purple to-glow-magenta',
    accent:   '#A855F7',
    summary:
      'A European streetwear brand with strong organic but stagnant paid performance. We rebuilt their creative strategy from scratch — new hooks, tighter audiences, and a testing framework that identified winners in 72 hours.',
  },
  {
    id: 'foret-studio',
    title:    'Forêt Studio',
    category: 'Jewelry',
    service:  'Creative Strategy',
    result:   '+218% CVR',
    period:   '45 days',
    gradient: 'from-glow-magenta via-glow-red to-orange-800',
    accent:   '#FF2E4C',
    summary:
      'A fine jewelry label struggling to convert cold traffic. We rewrote the creative angle — from product-forward to desire-forward — and rebuilt the landing page narrative to match. Conversion rate tripled.',
  },
  {
    id: 'haven-co',
    title:    'Haven Co.',
    category: 'Hospitality',
    service:  'Growth Systems',
    result:   '3× Bookings',
    period:   'Q1 2025',
    gradient: 'from-indigo-900 via-glow-purple-deep to-glow-purple',
    accent:   '#D946EF',
    summary:
      'A boutique hotel group with zero paid infrastructure. We built attribution, ad accounts, and testing systems from zero — then scaled into three markets simultaneously within 90 days.',
  },
  {
    id: 'maison-brier',
    title:    'Maison Brier',
    category: 'Beauty',
    service:  'Paid Social',
    result:   '6.1× ROAS',
    period:   '90 days',
    gradient: 'from-rose-900 via-glow-magenta to-glow-purple',
    accent:   '#D946EF',
    summary:
      'A clean beauty brand in a saturated market. We found an under-targeted audience segment and owned it with editorial-style creative. The results spoke for themselves.',
  },
  {
    id: 'signal-studio',
    title:    'Signal Studio',
    category: 'Design',
    service:  'Creative Strategy',
    result:   '↑ 340% Lead Vol.',
    period:   '30 days',
    gradient: 'from-slate-900 via-glow-purple-deep to-glow-purple',
    accent:   '#A855F7',
    summary:
      'A design studio repositioning as a premium brand partner. We crafted a paid narrative that positioned them against agencies, not freelancers. Lead quality and volume both improved dramatically.',
  },
  {
    id: 'verdant-life',
    title:    'Verdant Life',
    category: 'Lifestyle',
    service:  'Growth Systems',
    result:   '2.8× Revenue',
    period:   '6 months',
    gradient: 'from-emerald-950 via-glow-purple-deep to-glow-magenta',
    accent:   '#A855F7',
    summary:
      'A DTC wellness brand with inconsistent growth. We diagnosed attribution issues, rebuilt their funnel, and introduced a systematic testing cadence. Growth became predictable for the first time.',
  },
]

function CaseStudyCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
  return (
    <FadeIn delay={index * 0.08}>
      <article className="work-card group relative rounded-2xl overflow-hidden border border-border-subtle bg-bg-secondary hover:border-glow-purple/40 transition-colors duration-300">
        {/* Gradient image */}
        <div className={`work-card-image relative aspect-video bg-gradient-to-br ${study.gradient} overflow-hidden`}>
          <div className="absolute inset-0 bg-bg-primary/25 mix-blend-multiply" />

          {/* Result overlay */}
          <div className="absolute inset-0 flex items-end p-6">
            <div>
              <p className="font-mono text-2xl md:text-3xl font-black text-white leading-none"
                style={{ textShadow: `0 0 30px ${study.accent}80` }}>
                {study.result}
              </p>
              <p className="font-mono text-xs text-white/60 mt-1">{study.period}</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs px-2.5 py-1 rounded-full border border-border-subtle text-text-muted">
              {study.category}
            </span>
            <span className="font-mono text-xs px-2.5 py-1 rounded-full border border-border-subtle text-text-muted">
              {study.service}
            </span>
          </div>

          <h2 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-3 group-hover:text-glow-purple transition-colors">
            {study.title}
          </h2>
          <p className="font-body text-sm text-text-muted leading-relaxed">
            {study.summary}
          </p>
        </div>
      </article>
    </FadeIn>
  )
}

export default function WorkPage() {
  return (
    <>
      <div className="relative pt-32 pb-24 bg-bg-primary overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(107,33,168,0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="font-mono text-xs tracking-widest text-glow-purple uppercase mb-4">
              01 / Work
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-text-primary leading-tight glow-headline mb-6">
              Results that speak.
            </h1>
            <p className="font-body text-base md:text-lg text-text-muted max-w-lg leading-relaxed">
              Every number has a strategy behind it. Here&apos;s what we&apos;ve built for brands who refused to settle for average.
            </p>
          </FadeIn>
        </div>
      </div>

      <section className="pb-24 bg-bg-primary" aria-label="Case studies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={study.id} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
