import FadeIn from '@/components/ui/FadeIn'

const steps = [
  {
    number: '01',
    title:  'audit & align',
    body:   'we dig into your current ads, funnels, and analytics. no assumptions. we find exactly where performance is leaking before we spend a dollar.',
  },
  {
    number: '02',
    title:  'creative blueprint',
    body:   'we map your customer psychology to a creative framework — angles, hooks, formats, and messaging hierarchies. the foundation every ad is built on.',
  },
  {
    number: '03',
    title:  'launch & test',
    body:   'structured A/B testing from day one. we isolate variables, read signals fast, and cut losers before they drain your budget.',
  },
  {
    number: '04',
    title:  'scale what works',
    body:   'when winners emerge, we scale them intelligently. budget reallocation, audience expansion, and fresh creative variations — systematically, not recklessly.',
  },
]

export default function Process() {
  return (
    <section
      className="relative py-24 md:py-32 bg-bg-secondary overflow-hidden"
      aria-label="Our process"
    >
      <div className="absolute top-0 inset-x-0 h-px gradient-line" />

      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, #6B21A8 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-16">
          <p className="font-mono text-xs tracking-widest text-glow-purple uppercase mb-4">
            04 / PROCESS
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-normal text-text-primary leading-tight max-w-xl">
            how we actually work.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map(({ number, title, body }, i) => (
            <FadeIn key={number} delay={i * 0.1}>
              <div className="group flex gap-6 md:gap-8">
                <div className="shrink-0">
                  <span className="font-mono text-4xl md:text-5xl font-black process-number leading-none">
                    {number}
                  </span>
                </div>

                <div className="pt-1">
                  <h3 className="font-display text-xl md:text-2xl font-normal text-text-primary mb-3">
                    {title}
                  </h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>

              {i < steps.length - 1 && (
                <div className="mt-8 lg:mt-10 h-px bg-border-subtle md:hidden" />
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
