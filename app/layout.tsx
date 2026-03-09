import React from "react"
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: 'Manpreet Kaur | CS Student at UBC',
  description: 'Third-year Computer Science student at the University of British Columbia.',
  keywords: ['Computer Science', 'UBC', 'Student', 'Software Developer', 'Full Stack'],
  authors: [{ name: 'Manpreet Kaur' }],
  openGraph: {
    title: 'Manpreet Kaur | CS Student at UBC',
    description: 'Third-year Computer Science student at the University of British Columbia.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
