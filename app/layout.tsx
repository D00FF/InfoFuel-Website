import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400','600','700'] })

export const metadata: Metadata = {
  title: 'InfoFuel - From Creator to CEO Without the Guesswork',
  description: 'We partner with creators to build scalable, systemized brands that fuel growth — while you focus on content and community.',
  openGraph: {
    title: 'InfoFuel - From Creator to CEO Without the Guesswork',
    description: 'We partner with creators to build scalable, systemized brands that fuel growth — while you focus on content and community.',
    url: 'https://infofuel.io',
    siteName: 'InfoFuel',
    images: [
      { url: '/og-image.png', width: 1200, height: 630, alt: 'InfoFuel Preview' }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InfoFuel - From Creator to CEO',
    description: 'We partner with creators to build scalable brands without burnout.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gradient-to-b from-orange-50 via-white to-white text-gray-900`}>
        {children}
      </body>
    </html>
  )
}
