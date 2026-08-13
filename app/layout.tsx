import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Nunito_Sans } from 'next/font/google'
import { restaurantConfig } from '@/config/restaurant.config'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

const { seo, restaurant } = restaurantConfig

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),

  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,

  authors: [{ name: restaurant.name }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: seo.siteUrl,
    siteName: restaurant.name,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: restaurant.name,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
}

export const viewport: Viewport = {
  themeColor: seo.themeColor,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Schema.org estruturado estritamente com informações reais da configuração
  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: restaurant.name,
    description: seo.description,
    url: seo.siteUrl,
    ...(seo.ogImage && {
      image: `${seo.siteUrl}${seo.ogImage}`,
    }),
    ...(restaurant.phoneDisplay && {
      telephone: restaurant.phoneHref.replace('tel:', ''),
    }),
    address: {
      '@type': 'PostalAddress',
      streetAddress: restaurant.address.street,
      addressLocality: restaurant.address.city.split(' - ')[0] || restaurant.address.city,
      addressRegion: restaurant.address.city.split(' - ')[1] || 'SP',
      postalCode: restaurant.address.zip.replace('CEP ', ''),
      addressCountry: 'BR',
    },
    ...(seo.cuisine && {
      servesCuisine: seo.cuisine,
    }),
    ...(seo.priceRange && {
      priceRange: seo.priceRange,
    }),
  }

  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${nunitoSans.variable} bg-background`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}