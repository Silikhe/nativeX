import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Contact, Market, Footer } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Native X',
  description: 'This is native x app'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='{inter.className}'>
        <Navbar />
        {children}
        <Contact />
        <Market/>
        <Footer/>
      </body>
    </html>
  )
}
