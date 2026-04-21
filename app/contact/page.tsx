import type { Metadata } from 'next'
import FadeIn from '@/components/ui/FadeIn'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book a discovery call with adsbyvalr. One conversation to see if we\'re the right fit for your brand.',
}

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-bg-primary overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 20%, rgba(107,33,168,0.25) 0%, rgba(255,46,76,0.1) 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <FadeIn>
              <p className="font-mono text-xs tracking-widest text-glow-purple uppercase mb-4">
                01 / CONTACT
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-text-primary leading-tight glow-headline mb-6">
                Let&apos;s talk about your brand.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="font-body text-base text-text-muted leading-relaxed mb-8 max-w-md">
                one call. no pitch deck. we&apos;ll ask the right questions, give you honest feedback, and figure out together if we&apos;re the right fit.
              </p>
            </FadeIn>

            {/* Contact details */}
            <FadeIn delay={0.3}>
              <div className="space-y-4 mb-10">
                <a href="mailto:hello@adsbyvalr.com"
                  className="flex items-center gap-3 font-body text-sm text-text-muted hover:text-text-primary transition-colors group">
                  <span className="font-mono text-xs text-glow-purple">→</span>
                  hello@adsbyvalr.com
                </a>
                <p className="flex items-center gap-3 font-mono text-xs text-text-muted">
                  <span className="text-glow-purple">→</span>
                  response within 24 hours
                </p>
              </div>
            </FadeIn>

            {/* Calendar embed placeholder */}
            <FadeIn delay={0.35}>
              <div className="rounded-2xl border border-border-subtle bg-bg-secondary p-6">
                <p className="font-mono text-xs tracking-widest text-glow-purple uppercase mb-3">
                  Prefer to book direct?
                </p>
                <div
                  className="relative h-48 rounded-xl border border-border-subtle flex items-center justify-center overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(107,33,168,0.1) 0%, rgba(10,10,15,1) 100%)',
                  }}
                >
                  <div className="text-center">
                    <p className="font-mono text-xs text-text-muted mb-2">[ Calendar Integration ]</p>
                    <p className="font-body text-xs text-text-muted opacity-60">
                      Calendly / Cal.com embed goes here
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Form */}
          <FadeIn delay={0.2}>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
