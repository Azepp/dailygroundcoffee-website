import type { Metadata } from 'next'
import './globals.css'
import SplashScreen from '@/components/splashScreen'

export const metadata: Metadata = {
  title: 'Daily Ground Coffee',
  description:
    'Tempatnya para pecinta kopi untuk berbagi pengalaman dan rekomendasi kopi terbaik.',
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
