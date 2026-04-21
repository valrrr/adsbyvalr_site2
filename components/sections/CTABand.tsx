import Button from '@/components/ui/Button'
import FadeIn from '@/components/ui/FadeIn'

export default function CTABand() {
  return (
    <section
      className="relative py-20 md:py-40 bg-bg-primary overflow-hidden"
      aria-label="Call to action"
    >
      {/* Large centered magenta orb — the main glow source */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="rounded-full w-[500px] h-[400px] md:w-[700px] md:h-[500px]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(107,33,168,0.5) 0%, rgba(168,85,247,0.3) 30%, rgba(255,46,76,0.15) 60%, transparent 80%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="absolute top-0 inset-x-0 h-px gradient-line" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <p className="font-mono text-xs tracking-widest text-glow-purple uppercase mb-6">
            READY?
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-normal text-text-primary leading-[1.0] glow-headline mb-8">
            let&apos;s build something.
          </h2>
        </FadeIn>

        {/* Supporting copy — desktop only */}
        <FadeIn delay={0.2}>
          <p className="font-body text-base md:text-lg text-text-muted max-w-md mx-auto mb-10 leading-relaxed hidden md:block">
            one call. no pitch deck, no agency jargon. just a straight conversation about what your brand needs.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4 mt-2 md:mt-0">
            <Button href="/contact" variant="primary" size="lg">
              book a call
            </Button>
            {/* Secondary button — desktop only */}
            <Button href="/work" variant="secondary" size="lg" className="hidden md:inline-flex">
              see the work first
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="font-mono text-xs tracking-widest text-text-muted uppercase mt-10 md:mt-12">
            DTC · FASHION · JEWELRY · HOSPITALITY · DESIGN · LIFESTYLE
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
