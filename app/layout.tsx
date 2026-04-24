import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
})

const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
})

export const metadata: Metadata = {
  title: 'Basem Akram | Network & Security Engineer',
  description: 'Portfolio of Basem Akram - Network Engineer, Cybersecurity Specialist, and AI Enthusiast. Building secure and intelligent systems.',
  keywords: ['Network Engineer', 'Cybersecurity', 'AI', 'Security Engineer', 'SOC Analyst', 'Python Developer'],
  authors: [{ name: 'Basem Akram' }],
  openGraph: {
    title: 'Basem Akram | Network & Security Engineer',
    description: 'Network Engineer, Cybersecurity Specialist, and AI Enthusiast',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#141414',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
