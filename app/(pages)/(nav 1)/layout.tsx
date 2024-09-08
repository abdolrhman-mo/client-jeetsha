'use client'

import '@/app/ui/global.css'
import Nav from '@/app/ui/layout/nav/nav'
import Footer from '@/app/ui/layout/footer'

import { useSelector } from 'react-redux'
import { selectSearchBar } from '@/redux/features/nav/searchBarSlice'
import { selectMobileNav } from '@/redux/features/nav/mobileNavSlice'
import { selectNavCart } from '@/redux/features/nav/navCartSlice'
import clsx from 'clsx'
import { MAIN_COLOR } from '@/app/lib/constants/appConfig'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const searchBar = useSelector(selectSearchBar)
  const mobileNav = useSelector(selectMobileNav)
  const navCart = useSelector(selectNavCart)

  return (
      <body className={clsx(
        (navCart || searchBar || mobileNav) ? 'overflow-hidden' : '',
      ) + `bg-${MAIN_COLOR}`}>
        <Nav />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
  );
}
