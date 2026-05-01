import type { Metadata } from 'next'
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import GlowOrb from '@/components/ui/GlowOrb'
import GrainTexture from '@/components/ui/GrainTexture'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'adsbyvalr — Creative Performance Marketing',
    template: '%s — adsbyvalr',
  },
  description:
    'We build ad engines for brands people actually remember. Creative strategy, paid social, and growth systems for DTC, fashion, jewelry, and lifestyle brands.',
  keywords: [
    'marketing agency',
    'paid social',
    'creative strategy',
    'DTC marketing',
    'fashion marketing',
    'performance marketing',
  ],
  authors: [{ name: 'adsbyvalr' }],
  creator: 'adsbyvalr',
  metadataBase: new URL('https://adsbyvalr.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adsbyvalr.com',
    siteName: 'adsbyvalr',
    title: 'adsbyvalr — Creative Performance Marketing',
    description: 'We build ad engines for brands people actually remember.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'adsbyvalr — Creative Performance Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'adsbyvalr — Creative Performance Marketing',
    description: 'We build ad engines for brands people actually remember.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg-primary text-text-primary font-body antialiased">
        {/* z-[3]: page content — below grain (z-[4]) so blend mode applies across all surfaces */}
        <Nav />
        <div className="relative z-[3]">
          <main id="main-content">{children}</main>
          <Footer />
        </div>
        {/* Grain + vignette overlay (z-[4,5]), cursor orb (z-[9]) */}
        <GrainTexture />
        <GlowOrb />
      </body>
    </html>
  )
}
