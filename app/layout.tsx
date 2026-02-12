import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Senior Business Analyst & Digital Transformation Specialist',
  description: 'Driving digital transformation through structured thinking and strategic delivery. Expertise in ERP implementation, project leadership, and business process reengineering.',
  keywords: ['Business Analyst', 'Digital Transformation', 'Project Management', 'ERP Implementation', 'Strategic Leadership'],
  generator: 'v0.app',
  openGraph: {
    title: 'Senior Business Analyst & Digital Transformation Specialist',
    description: 'Driving digital transformation through structured thinking and strategic delivery.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="font-sans antialiased bg-background text-foreground">{children}</body>
    </html>
  )
}
