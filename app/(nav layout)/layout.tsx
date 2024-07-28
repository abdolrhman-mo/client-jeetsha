'use client'

import '@/app/ui/global.css'
import { useState } from 'react'
import Nav from '@/app/ui/components/nav/nav'
import Footer from '@/app/ui/components/footer'

import { useSelector } from 'react-redux'
import { selectSearchBar } from '@/lib/features/nav/searchBarSlice'
import { selectMobileNav } from '@/lib/features/nav/mobileNavSlice'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showCart, setShowCart] = useState(false)
  let handleShowCart = () => {
      setShowCart(!showCart)
  }
  const searchBar = useSelector(selectSearchBar)
  const mobileNav = useSelector(selectMobileNav)

  return (
      <body className={
        (showCart || searchBar || mobileNav) ? 'overflow-hidden' : ''
      }>
        <Nav
          showCart={showCart}
          onShowCart={handleShowCart}
        />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
      </body>
  );
}
