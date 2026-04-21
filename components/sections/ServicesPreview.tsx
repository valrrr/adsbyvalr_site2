'use client'

import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'

const services = [
  {
    id: '01',
    title:       'paid social',
    description: 'Meta, TikTok, Pinterest. we run campaigns that actually scale — not just spend budgets. data-led targeting, creative testing, and constant iteration.',
    descMobile:  'Meta, TikTok, Pinterest — campaigns built to scale. data-led targeting and relentless creative testing.',
    tags:        ['META ADS', 'TIKTOK ADS', 'PINTEREST'],
    icon:        '⚡',
  },
  {
    id: '02',
    title:       'creative strategy',
    description: 'the hook is everything. we develop ad concepts, write scripts, and direct creative that stops thumbs and drives action. built for your brand voice.',
    descMobile:  'the hook is everything. concepts, scripts, and creative direction built for your brand voice.',
    tags:        ['CONCEPTS', 'SCRIPTS', 'UGC DIRECTION'],
    icon:        '◈',
  },
  {
    id: '03',
    title:       'growth systems',
    description: "testing frameworks, attribution setups, and reporting dashboards that make decisions obvious. no more guessing what's working.",
    descMobile:  'testing frameworks and reporting dashboards that make decisions obvious.',
    tags:        ['A/B TESTING', 'ATTRIBUTION', 'REPORTING'],
    icon:        '◎',
  },
]

export default function ServicesPreview() {
  return (
    <section
      className="relative py-16 md:py-32 bg-bg-secondary overflow-hidden"
      aria-label="Services overview"
    >
      <div className="absolute top-0 inset-x-0 h-px gradient-line" />

      {/* Purple orb — mid-right bleed */}
      <div
        className="absolute rounded-full pointer-events-none w-[400px] h-[400px] top-1/2 right-[-100px] -translate-y-1/2 bg-[#A855F7] opacity-[0.15] blur-[80px] md:opacity-[0.10] md:blur-[110px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-12 md:mb-16">
          <p className="font-mono text-xs tracking-widest text-glow-purple uppercase mb-4">
            02 / SERVICES
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-normal text-text-primary leading-tight">
            what we do best.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ id, title, description, descMobile, tags, icon }, i) => (
            <FadeIn key={id} delay={i * 0.1}>
              <div className="service-card group relative h-full bg-bg-primary border border-border-subtle rounded-2xl p-6 md:p-8 cursor-default">
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(168,85,247,0.06) 0%, transparent 70%)',
                  }}
                  aria-hidden="true"
                />

                <div className="mb-5 text-3xl text-glow-purple">{icon}</div>

                <p className="font-mono text-xs tracking-widest text-text-muted uppercase mb-3">
                  {id}
                </p>

                <h3 className="font-display text-2xl md:text-3xl font-normal text-text-primary mb-4">
                  {title}
                </h3>

                {/* Short copy on mobile, full copy on desktop */}
                <p className="font-body text-sm text-text-muted leading-relaxed mb-5 md:hidden">
                  {descMobile}
                </p>
                <p className="font-body text-sm text-text-muted leading-relaxed mb-6 hidden md:block">
                  {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {tags.map(tag => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-3 py-1 rounded-full border border-border-subtle text-text-muted uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Hide CTA on mobile — nav covers it */}
        <FadeIn delay={0.3} className="mt-10 text-center hidden md:block">
          <Button href="/services" variant="secondary" size="md">
            see all services →
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
