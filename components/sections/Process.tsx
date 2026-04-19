import FadeIn from '@/components/ui/FadeIn'

const steps = [
  {
    number: '01',
    title:  'Audit & Align',
    body:   'We dig into your current ads, funnels, and analytics. No assumptions. We find exactly where performance is leaking before we spend a dollar.',
  },
  {
    number: '02',
    title:  'Creative Blueprint',
    body:   'We map your customer psychology to a creative framework — angles, hooks, formats, and messaging hierarchies. The foundation every ad is built on.',
  },
  {
    number: '03',
    title:  'Launch & Test',
    body:   'Structured A/B testing from day one. We isolate variables, read signals fast, and cut losers before they drain your budget.',
  },
  {
    number: '04',
    title:  'Scale What Works',
    body:   'When winners emerge, we scale them intelligently. Budget reallocation, audience expansion, and fresh creative variations — systematically, not recklessly.',
  },
]

export default function Process() {
  return (
    <section
      className="relative py-24 md:py-32 bg-bg-secondary overflow-hidden"
      aria-label="Our process"
    >
      {/* Top gradient line */}
      <div className="absolute top-0 inset-x-0 h-px gradient-line" />

      {/* Background glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, #6B21A8 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="mb-16">
          <p className="font-mono text-xs tracking-widest text-glow-purple uppercase mb-4">
            04 / Process
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-black text-text-primary leading-tight max-w-xl">
            How we actually work.
          </h2>
        </FadeIn>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map(({ number, title, body }, i) => (
            <FadeIn key={number} delay={i * 0.1}>
              <div className="group flex gap-6 md:gap-8">
                {/* Number */}
                <div className="shrink-0">
                  <span className="font-mono text-4xl md:text-5xl font-black process-number leading-none">
                    {number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-3">
                    {title}
                  </h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>

              {/* Divider */}
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
