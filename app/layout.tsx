import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: 'Divisy - Technology Consulting to Grow Without Friction',
    template: '%s | Divisy',
  },
  description:
    'Technology consulting that gives you clarity, not dependency. Strategy, data, and cloud to accelerate your product with measurable impact.',
  keywords: [
    'technology consulting',
    'cloud architecture',
    'data analytics',
    'product strategy',
    'digital transformation',
    'software consulting',
  ],
  authors: [{ name: 'Divisy' }],
  creator: 'Divisy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://divisy.com',
    siteName: 'Divisy',
    title: 'Divisy - Technology Consulting to Grow Without Friction',
    description:
      'Technology consulting that gives you clarity, not dependency. Strategy, data, and cloud to accelerate your product with measurable impact.',
    images: [
      {
        url: '/logo.svg',
        width: 140,
        height: 32,
        alt: 'Divisy Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divisy - Technology Consulting',
    description: 'Technology consulting that gives you clarity, not dependency. Strategy, data, and cloud to accelerate your product.',
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/logo-symbol.svg" />
        <link rel="apple-touch-icon" href="/logo-symbol.svg" />
      </head>
      <body>
        {children}
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}

