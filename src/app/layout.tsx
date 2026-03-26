import type { Metadata } from 'next'
import './globals.css'
import SplashScreen from '@/components/splashScreen'

export const metadata: Metadata = {
  metadataBase: new URL('https://dailygroundcoffee.vercel.app'), // ✅ tambah ini
  title: 'Daily Ground Coffee',
  description:
    'Nikmati kopi berkualitas, suasana yang hangat, dan ruang nyaman untuk ngobrol, kerja, atau sekadar menikmati waktu santai.',
  keywords: [
    'kopi jakarta',
    'cafe jakarta selatan',
    'daily ground coffee',
    'coffee shop',
  ],
  openGraph: {
    title: 'Daily Ground Coffee',
    description:
      'Nikmati kopi berkualitas, suasana yang hangat, dan ruang nyaman.',
    url: 'https://dailygroundcoffee.vercel.app',
    siteName: 'Daily Ground Coffee',
    images: [
      {
        url: 'https://dailygroundcoffee.vercel.app/og-image.jpg', // ✅ absolut
        width: 1200,
        height: 630,
        alt: 'Daily Ground Coffee',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daily Ground Coffee',
    description: 'Nikmati kopi berkualitas, suasana yang hangat.',
    images: ['https://dailygroundcoffee.vercel.app/og-image.jpg'], // ✅ absolut
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">
        <SplashScreen />
        {children}
      </body>
    </html>
  )
}
