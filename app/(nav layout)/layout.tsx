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
      if (showCart) {
          setShowCart(false)
      } else {
          setShowCart(true)
      }
  }
  const [showSearchBar, setshowSearchBar] = useState(false)
  let handleshowSearchBar = () => {
      if (showSearchBar) {
          setshowSearchBar(false)
      } else {
          setshowSearchBar(true)
      }
  }
  const [showMobileNav, setshowMobileNav] = useState(false)
  let handleshowMobileNav = () => {
      if (showMobileNav) {
          setshowMobileNav(false)
      } else {
          setshowMobileNav(true)
      }
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
