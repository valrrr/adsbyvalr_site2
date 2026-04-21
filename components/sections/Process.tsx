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
      className="relative py-16 md:py-32 bg-bg-secondary overflow-hidden"
      aria-label="Our process"
    >
      <div className="absolute top-0 inset-x-0 h-px gradient-line" />

      {/* Magenta orb — top-right bleed */}
      <div
        className="absolute rounded-full pointer-events-none w-[380px] h-[380px] top-[10%] right-[-80px] bg-[#D946EF] opacity-[0.18] blur-[80px] md:opacity-[0.12] md:blur-[110px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-10 md:mb-16">
          <p className="font-mono text-xs tracking-widest text-glow-purple uppercase mb-4">
            04 / PROCESS
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-normal text-text-primary leading-tight max-w-xl">
            how we actually work.
          </h2>
        </FadeIn>

        {/* Mobile: horizontal scroll snap carousel */}
        <div
          className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar -mx-4 px-4"
          role="list"
        >
          {steps.map(({ number, title, body }) => (
            <div
              key={number}
              role="listitem"
              className="snap-start flex-shrink-0 w-[80vw] max-w-[300px] bg-bg-primary border border-border-subtle rounded-2xl p-5"
            >
              <span className="font-mono text-3xl font-black process-number leading-none block mb-4">
                {number}
              </span>
              <h3 className="font-display text-lg font-normal text-text-primary mb-2 lowercase">
                {title}
              </h3>
              <p className="font-body text-sm text-text-muted leading-relaxed line-clamp-4">
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop: 2-column grid */}
        <div className="hidden md:grid grid-cols-2 gap-8 lg:gap-12">
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
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
