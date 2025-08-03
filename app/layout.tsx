import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Jewelry Designer Portfolio',
  description: 'Explore the portfolio of an aspiring jewelry designer specializing in contemporary, fine, and traditional jewelry pieces. Seeking internship opportunities.',
  metadataBase: new URL('https://localhost:3000'),
  openGraph: {
    title: 'Jewelry Designer Portfolio',
    description: 'Explore the portfolio of an aspiring jewelry designer specializing in contemporary, fine, and traditional jewelry pieces. Seeking internship opportunities.',
    type: 'website',
  },
  keywords: ['jewelry design', 'portfolio', 'fine jewelry', 'contemporary jewelry', 'designer', 'internship', 'craftsmanship']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-background text-foreground">
          {children}
        </div>
      </body>
    </html>
  )
} 