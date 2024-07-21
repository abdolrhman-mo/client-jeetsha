'use client'

import '@/app/ui/global.css'
import { useState } from 'react'
import Nav from '@/app/ui/components/nav/nav'
import Footer from '@/app/ui/components/footer'
import { usePathname, useSearchParams } from 'next/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {children}
    </html>
  );
}
