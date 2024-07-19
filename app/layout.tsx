'use client'

import '@/app/ui/global.css'
import { useState } from 'react'
import Nav from './ui/components/nav'
import Footer from './ui/components/footer'
import { useSearchParams } from 'next/navigation'

export default function RootLayout({
  children,
  // searchParams,
}: {
  children: React.ReactNode
  // searchParams?: {
  //   query?: string
  //   page?: string
  // }
}) {
  
  const searchParams = useSearchParams()
  const query = new URLSearchParams(searchParams)

  const [showCart, setShowCart] = useState(false)
  let handleShowCart = () => {
      if (showCart) {
          setShowCart(false)
      } else {
          setShowCart(true)
      }
  }
  const [showSearch, setShowSearch] = useState(false)
  let handleShowSearch = () => {
      if (showSearch) {
          setShowSearch(false)
      } else {
          setShowSearch(true)
      }
  }
  const [showNav, setShowNav] = useState(false)
  let handleShowNav = () => {
      if (showNav) {
          setShowNav(false)
      } else {
          setShowNav(true)
      }
  }

  return (
    <html lang="en">
      <body className={
        (showCart || showSearch || showNav) ? 'overflow-hidden' : ''
      }>
        <Nav
          showNav={showNav}
          onShowNav={handleShowNav}
          showCart={showCart}
          onShowCart={handleShowCart}
          showSearch={showSearch}
          onShowSearch={handleShowSearch}
          query={query.toString()}
          // currentPage={currentPage}
        />
        <div className="h-12"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
