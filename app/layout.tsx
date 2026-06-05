import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

// Self-hosted display + heading fonts
const bebasNeue = localFont({
  src: '../public/fonts/bebas-neue.woff2',
  variable: '--font-display',
  weight: '400',
  display: 'swap',
})

const barlowCondensed = localFont({
  src: [
    { path: '../public/fonts/barlow-condensed-600.woff2', weight: '600', style: 'normal' },
    { path: '../public/fonts/barlow-condensed-700.woff2', weight: '700', style: 'normal' },
    { path: '../public/fonts/barlow-condensed-800.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-heading',
  display: 'swap',
})

// Body font via Google (Inter) — swap to self-hosted later if needed
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nextlevelrecruiting.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Next Level Recruiting | Athlete Recruiting Services — Southern California',
    template: '%s | Next Level Recruiting',
  },
  description:
    'Southern California athlete recruiting agency founded by an active high school coach. Professional highlight tapes, film breakdowns, recruiting profiles, and college consulting across 9 sports.',
  keywords: [
    'athlete recruiting',
    'highlight tape',
    'college recruiting',
    'Southern California',
    'basketball recruiting',
    'NLR',
  ],
  authors: [{ name: 'NLR', url: SITE_URL }],
  creator: 'Next Level Recruiting',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Next Level Recruiting',
    images: [
      {
        url: '/images/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Next Level Recruiting — Southern California athlete recruiting agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@NLRAthletes',
    creator: '@NLRAthletes',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#070F16',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${barlowCondensed.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <a href="#main-content" className="skip-nav">
            Skip to main content
          </a>
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
