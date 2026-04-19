import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import ServicesPreview from '@/components/sections/ServicesPreview'
import WorkPreview from '@/components/sections/WorkPreview'
import Process from '@/components/sections/Process'
import CTABand from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'adsbyvalr — Creative Performance Marketing',
  description:
    'We build ad engines for creative brands — DTC, fashion, jewelry, design, and lifestyle. Paid social, creative strategy, and growth systems.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WorkPreview />
      <Process />
      <CTABand />
    </>
  )
}
