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
  const [showCart, setShowCart] = useState(false)
  let handleShowCart = () => {
      setShowCart(!showCart)
  }
  const [showSearchBar, setshowSearchBar] = useState(false)
  let handleshowSearchBar = () => {
      setshowSearchBar(!showSearchBar)
  }
  const [showMobileNav, setshowMobileNav] = useState(false)
  let handleshowMobileNav = () => {
    setshowMobileNav(!showMobileNav)
  }

  return (
      <body className={
        (showCart || showSearchBar || showMobileNav) ? 'overflow-hidden' : ''
      }>
        <Nav
          showMobileNav={showMobileNav}
          onShowMobileNav={handleshowMobileNav}
          showCart={showCart}
          onShowCart={handleShowCart}
          showSearchBar={showSearchBar}
          onShowSearchBar={handleshowSearchBar}
        />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
      </body>
  );
}
