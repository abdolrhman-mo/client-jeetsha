'use client'

import Link from 'next/link'
import { poppins } from '@/app/ui/fonts'
import Image from 'next/image'
import Nav from '@/app/ui/components/nav'
import ProductsList from '@/app/ui/components/products-list'
import ViewAllLink from '@/app/ui/components/view-all-link'
import { useState } from 'react'

export default function Page() {
  const [showCart, setShowCart] = useState(false)
  let handleShowCart = () => {
      if (showCart) {
          setShowCart(false)
      } else {
          setShowCart(true)
      }
  }

  return (
    <body className={
      (showCart) ? 'overflow-hidden' : ''
    }>
      <main className={`${poppins.className} antialiased z-10`}>
        <Nav
          onShowCart={handleShowCart}
          showCart={showCart}
        />
        <div className="z-10">
          {/* Hero */}
          <div className="overflow-hidden h-screen flex items-start bg-white">
            <Image
              className="hidden md:block relative -top-72 z-10"
              src="/hero2.webp"
              width={500}
              height={500}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt="Screenshots of the dashboard project showing desktop version"
            />
          </div>

          <h2 className='text-3xl text-center my-12'>LATEST DROP</h2>
          <ProductsList tag='latest' />
          <ViewAllLink url="/collections/all" />

          <h2 className='text-3xl text-center my-12'>TEES</h2>
          <ProductsList tag='tee' />
          <ViewAllLink url="/collections/tees" />

          <h2 className='text-3xl text-center my-12'>PANTS</h2>
          <ProductsList tag='pants' />
          <ViewAllLink url="/collections/tees" />

          <h2 className='text-3xl text-center my-12'>SHORTS</h2>
          <ProductsList tag='shorts' />
          <ViewAllLink url="/collections/tees" />
        </div>
      </main>
    </body>
  );
}
