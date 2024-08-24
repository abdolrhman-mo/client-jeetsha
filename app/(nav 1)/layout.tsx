'use client'

import '@/app/ui/global.css'
import { useState } from 'react'
import Nav from '@/app/ui/layout/nav/nav'
import Footer from '@/app/ui/layout/footer'

import { useSelector } from 'react-redux'
import { selectSearchBar } from '@/lib/features/nav/searchBarSlice'
import { selectMobileNav } from '@/lib/features/nav/mobileNavSlice'
import { selectNavCart } from '@/lib/features/nav/navCartSlice'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const searchBar = useSelector(selectSearchBar)
  const mobileNav = useSelector(selectMobileNav)
  const navCart = useSelector(selectNavCart)

  return (
      <body className={
        (navCart || searchBar || mobileNav) ? 'overflow-hidden' : ''
      }>
        <Nav />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
      </body>
  );
}
