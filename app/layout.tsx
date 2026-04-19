import type { Metadata } from 'next'
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import GlowOrb from '@/components/ui/GlowOrb'

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
    default: 'AdsByVsh — Creative Performance Marketing',
    template: '%s — AdsByVsh',
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
  authors: [{ name: 'AdsByVsh' }],
  creator: 'AdsByVsh',
  metadataBase: new URL('https://adsbyvalr.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adsbyvalr.com',
    siteName: 'AdsByVsh',
    title: 'AdsByVsh — Creative Performance Marketing',
    description: 'We build ad engines for brands people actually remember.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AdsByVsh — Creative Performance Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AdsByVsh — Creative Performance Marketing',
    description: 'We build ad engines for brands people actually remember.',
    images: ['/og-image.png'],
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
        <GlowOrb />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
