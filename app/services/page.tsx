import type { Metadata } from 'next'
import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'
import CTABand from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Paid social, creative strategy, and growth systems. adsbyvalr builds the full performance marketing stack for creative brands.',
}

const services = [
  {
    id: '01',
    title:    'paid social',
    headline: 'the right ad. the right person. at the right cost.',
    body:     'we run Meta, TikTok, and Pinterest campaigns built to scale — not just to look good on a PDF. targeting architecture, creative testing velocity, and budget management that treats your money like ours.',
    deliverables: [
      'campaign architecture & setup',
      'audience research & segmentation',
      'creative testing frameworks',
      'weekly performance reviews',
      'budget optimization & scaling',
    ],
    accent: '#A855F7',
  },
  {
    id: '02',
    title:    'creative strategy',
    headline: 'the hook is everything. we write the hook.',
    body:     "most brands have a product story. we find the angle people actually respond to. we develop ad concepts, write scripts, and direct UGC and studio creative — so every asset has a job before it\'s ever filmed.",
    deliverables: [
      'creative brief development',
      'hook ideation & scripting',
      'UGC talent direction',
      'creative performance analysis',
      'monthly creative refreshes',
    ],
    accent: '#FF2E4C',
  },
  {
    id: '03',
    title:    'growth systems',
    headline: 'stop guessing. start knowing.',
    body:     'testing frameworks, attribution setups, and reporting dashboards that make the right decision obvious. we build the infrastructure that makes everything else work — and keeps it working as you scale.',
    deliverables: [
      'attribution model setup',
      'A/B testing infrastructure',
      'custom reporting dashboards',
      'performance audits',
      'scaling playbooks',
    ],
    accent: '#D946EF',
  },
  {
    id: '04',
    title:    'landing page direction',
    headline: 'your ad brought them. your page keeps them.',
    body:     "we review and direct landing page copy, structure, and messaging to match your ad creative. no redesigns — just the strategic lens that closes the gap between click and conversion.",
    deliverables: [
      'landing page audit',
      'copy direction & hierarchy',
      'CRO recommendations',
      'post-click experience mapping',
    ],
    accent: '#A855F7',
  },
  {
    id: '05',
    title:    'brand identity for ads',
    headline: 'recognition is a performance metric.',
    body:     'we help creative brands develop a distinct ad aesthetic — visual language, tone, and brand codes that make their ads recognizable in 2 seconds. not a rebrand. a paid-media lens on your identity.',
    deliverables: [
      'paid media brand audit',
      'visual language framework',
      'ad aesthetic guidelines',
      'creative do/don\'t documentation',
    ],
    accent: '#FF2E4C',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative pt-32 pb-24 bg-bg-primary overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,46,76,0.2) 0%, rgba(107,33,168,0.2) 50%, transparent 80%)',
            filter: 'blur(80px)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="font-mono text-xs tracking-widest text-glow-purple uppercase mb-4">
              01 / SERVICES
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-text-primary leading-tight glow-headline mb-6">
              Built for creative brands.
            </h1>
            <p className="font-body text-base md:text-lg text-text-muted max-w-lg leading-relaxed">
              not cookie-cutter retainers. services designed around how creative brands actually grow — through better creative, sharper strategy, and systems that compound.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Services list */}
      <section className="pb-24 bg-bg-primary" aria-label="Services detail">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col divide-y divide-border-subtle">
            {services.map(({ id, title, headline, body, deliverables, accent }, i) => (
              <FadeIn key={id} delay={i * 0.08}>
                <div className="group py-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                  {/* Left */}
                  <div>
                    <p className="font-mono text-xs tracking-widest text-text-muted uppercase mb-3">
                      {id}
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl font-normal text-text-primary mb-4 leading-tight">
                      {title}
                    </h2>
                    <p
                      className="font-display text-lg md:text-xl font-normal mb-4 leading-snug"
                      style={{ color: accent }}
                    >
                      {headline}
                    </p>
                    <p className="font-body text-sm text-text-muted leading-relaxed">
                      {body}
                    </p>
                  </div>

                  {/* Right — deliverables */}
                  <div className="bg-bg-secondary rounded-2xl border border-border-subtle p-6 lg:mt-8">
                    <p className="font-mono text-xs tracking-widest text-text-muted uppercase mb-4">
                      WHAT&apos;S INCLUDED
                    </p>
                    <ul className="space-y-3">
                      {deliverables.map(item => (
                        <li key={item} className="flex items-start gap-3 font-body text-sm text-text-muted">
                          <span className="mt-0.5 shrink-0 font-mono text-xs" style={{ color: accent }}>→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement model */}
      <section className="py-20 bg-bg-secondary border-t border-border-subtle" aria-label="How we engage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-normal text-text-primary">
              how we engage.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { type: 'retainer', desc: 'ongoing monthly partnership. best for brands ready to scale with consistent creative and ad management.' },
              { type: 'sprint',   desc: 'focused 4–6 week engagements. best for audits, relaunches, or brands needing a strategic reset.' },
              { type: 'project',  desc: 'defined scope, defined timeline. best for one-time deliverables like creative strategy or system builds.' },
            ].map(({ type, desc }) => (
              <FadeIn key={type}>
                <div className="rounded-2xl border border-border-subtle bg-bg-primary p-6">
                  <h3 className="font-display text-xl font-normal text-text-primary mb-3">{type}</h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2} className="mt-10">
            <Button href="/contact" variant="primary" size="lg">book a discovery call</Button>
          </FadeIn>
        </div>
      </section>

      <CTABand />
    </>
  )
}
