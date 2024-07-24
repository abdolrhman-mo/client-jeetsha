'use client'

import '@/app/ui/global.css'
import { useState } from 'react'
import Nav from '@/app/ui/components/nav/nav'
import Footer from '@/app/ui/components/footer'

import { useSelector } from 'react-redux'
import { selectSearchBar } from '@/lib/features/nav/searchBarSlice'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showCart, setShowCart] = useState(false)
  let handleShowCart = () => {
      setShowCart(!showCart)
  }
  const [showMobileNav, setshowMobileNav] = useState(false)
  let handleshowMobileNav = () => {
    setshowMobileNav(!showMobileNav)
  }
  const searchBar = useSelector(selectSearchBar)

  return (
      <body className={
        (showCart || searchBar || showMobileNav) ? 'overflow-hidden' : ''
      }>
        <Nav
          showMobileNav={showMobileNav}
          onShowMobileNav={handleshowMobileNav}
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
