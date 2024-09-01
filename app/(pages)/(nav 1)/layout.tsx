'use client'

import '@/app/ui/global.css'
import Nav from '@/app/ui/layout/nav/nav'
import Footer from '@/app/ui/layout/footer'

import { useSelector } from 'react-redux'
import { selectSearchBar } from '@/redux/features/nav/searchBarSlice'
import { selectMobileNav } from '@/redux/features/nav/mobileNavSlice'
import { selectNavCart } from '@/redux/features/nav/navCartSlice'

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
