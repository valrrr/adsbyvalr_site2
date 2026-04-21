import type { Metadata } from 'next'
import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'
import CTABand from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'About',
  description:
    'adsbyvalr is a creative performance marketing agency built for DTC, fashion, jewelry, design, and lifestyle brands.',
}

const values = [
  {
    id: '01',
    title:  'performance is the product.',
    body:   'beautiful ads that don\'t convert aren\'t beautiful — they\'re expensive. we hold the creative accountable to the numbers, always.',
  },
  {
    id: '02',
    title:  'strategy before spend.',
    body:   'we refuse to run ads without a creative thesis. every campaign starts with a clear point of view on why it should work — before any money moves.',
  },
  {
    id: '03',
    title:  'clarity over volume.',
    body:   'fewer, sharper bets beat a hundred mediocre tests. we\'d rather run ten excellent ads than flood an account with noise.',
  },
  {
    id: '04',
    title:  'brands we believe in.',
    body:   'we only take on brands we\'d use ourselves. it makes the work better and the relationship longer.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative pt-32 pb-24 bg-bg-primary overflow-hidden">
        <div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(107,33,168,0.25) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="font-mono text-xs tracking-widest text-glow-purple uppercase mb-4">
              01 / About
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-text-primary leading-tight glow-headline mb-8">
              We exist for brands<br className="hidden md:block" /> people obsess over.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-base md:text-lg text-text-muted max-w-2xl leading-relaxed">
              adsbyvalr is a creative performance agency built from day one for creative businesses — the DTC labels, jewelry studios, design shops, and hospitality brands that care deeply about how they look and what they stand for.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Story */}
      <section className="py-24 bg-bg-secondary border-t border-border-subtle" aria-label="Agency story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <FadeIn>
              <p className="font-mono text-xs tracking-widest text-glow-purple uppercase mb-6">
                THE STORY
              </p>
              <div className="space-y-5 font-body text-base text-text-muted leading-relaxed">
                <p>
                  Most performance agencies treat creative as an afterthought. They&apos;ve built systems for spending budgets — not for building brands. Creative businesses need something different.
                </p>
                <p>
                  We built adsbyvalr because the best brands in the world — the ones with real community, real product love, real longevity — deserve paid media that reflects that. Not generic. Not templated.
                </p>
                <p>
                  Our approach is simple: treat creative strategy with the same rigor as media buying. Test obsessively. Scale only what earns it. And care about the brand as much as the client does.
                </p>
              </div>
            </FadeIn>

            {/* Accent block */}
            <FadeIn delay={0.15}>
              <div
                className="relative rounded-2xl overflow-hidden p-10 border border-border-subtle"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(107,33,168,0.15) 0%, rgba(10,10,15,1) 60%)',
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse 80% 60% at 20% 20%, rgba(168,85,247,0.12) 0%, transparent 60%)',
                  }}
                  aria-hidden="true"
                />
                <div className="relative space-y-8">
                  {[
                    { stat: '40+', label: 'brands worked with' },
                    { stat: '$12M+', label: 'in managed ad spend' },
                    { stat: '4.1×', label: 'average ROAS across portfolio' },
                  ].map(({ stat, label }) => (
                    <div key={stat} className="border-b border-border-subtle pb-8 last:border-0 last:pb-0">
                      <p className="font-mono text-4xl md:text-5xl font-black text-text-primary mb-1"
                        style={{ textShadow: '0 0 40px rgba(168,85,247,0.4)' }}>
                        {stat}
                      </p>
                      <p className="font-body text-sm text-text-muted">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-bg-primary" aria-label="Values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <p className="font-mono text-xs tracking-widest text-glow-purple uppercase mb-4">
              02 / VALUES
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-normal text-text-primary leading-tight">
              what we believe.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map(({ id, title, body }, i) => (
              <FadeIn key={id} delay={i * 0.1}>
                <div className="rounded-2xl border border-border-subtle bg-bg-secondary p-8 h-full">
                  <span className="font-mono text-xs text-glow-purple tracking-widest">{id}</span>
                  <h3 className="font-display text-xl md:text-2xl font-normal text-text-primary mt-3 mb-4">
                    {title}
                  </h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">{body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 bg-bg-secondary border-t border-border-subtle" aria-label="Our approach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="font-mono text-xs tracking-widest text-glow-purple uppercase mb-4">
              03 / APPROACH
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-normal text-text-primary leading-tight mb-10">
              how we work with you.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '◎', title: 'small roster.', body: 'we keep client numbers intentionally low. every brand gets attention, not account management.' },
              { icon: '◈', title: 'no templates.', body: 'we\'ve never sent the same strategy twice. every engagement starts with listening, not pitching.' },
              { icon: '⚡', title: 'fast feedback loops.', body: 'weekly calls, real-time Slack access, and dashboards you can actually read. no surprises.' },
            ].map(({ icon, title, body }) => (
              <FadeIn key={title}>
                <div className="rounded-2xl border border-border-subtle bg-bg-primary p-6">
                  <span className="text-2xl text-glow-purple block mb-4">{icon}</span>
                  <h3 className="font-display text-xl font-normal text-text-primary mb-3">{title}</h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">{body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <Button href="/contact" variant="primary" size="lg">book a discovery call</Button>
          </FadeIn>
        </div>
      </section>

      <CTABand />
    </>
  )
}
