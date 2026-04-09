// ============================================================
// ROOT LAYOUT
// The outermost wrapper for every page.
// Sets up fonts, metadata, and global providers.
// ============================================================

import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/providers'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
})
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Gadgetraze Shop BD | Premium Gadgets & Electronics in Bangladesh',
  description: 'Shop the latest gadgets, smartphones, accessories & electronics at Gadgetraze Shop BD. Free delivery in Dhaka. Order via WhatsApp or Facebook.',
  keywords: 'gadgets bangladesh, electronics dhaka, smartphone bd, tech shop',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
