'use client'

import Link from 'next/link'
import { poppins } from '@/app/ui/fonts'
import Image from 'next/image'
import Nav from '@/app/ui/components/nav'
import ProductsList from '@/app/ui/components/products-list'
import ViewAllLink from '@/app/ui/components/view-all-link'
import { useState } from 'react'
import clsx from 'clsx'
import CTA from './ui/components/cta'

export default function Page({
  searchParams,
}: {
  searchParams: {
    query?: string
    page?: string
  }
}) {
  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1

  return (
    <main className={`${poppins.className} antialiased z-10`}>
      {/* Background Shade
      <div 
        className={clsx(
            // Layout & Sizing
            'fixed inset-y-0 z-40 h-screen w-full',
            // Backgrounds & Effects
            'bg-black opacity-50',
            {
                'hidden': showNav === false && showCart === false && showSearch === false
            }
        )}
        onClick={() => {
            if (showNav) {
                handleShowNav()
            } else if (showCart) {
                handleShowCart()
            } 
            else {
                handleShowSearch()
            }
        }}
      ></div> */}
      {/* Nav Search Results */}
      <div 
        className={clsx(
            // Layout & Sizing
            'fixed z-40 top-20 overflow-y-scroll h-full md:h-3/4 w-full',
            // Spacing
            'py-12',
            // Backgrounds & Effects
            'bg-white',
            {
                'hidden': !query
            }
        )}
      >
        <div className="w-5/6 mx-auto pt-12">
            <ProductsList
              styles='grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-y-12'
              productStyles='max-h-64'
              limit={5}
              search={true}
              query={query}
              currentPage={currentPage}
            />
            <br />
        </div>
      </div>

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

        <p>{query}</p>

        <h2 className='text-3xl text-center my-12'>LATEST DROP</h2>
        <ProductsList tag='latest' />
        <ViewAllLink url="/collections/all" />

        <h2 className='text-3xl text-center my-12'>TEES</h2>
        <ProductsList tag='tee' limit={4} />
        <ViewAllLink url="/collections/tees" />

        <h2 className='text-3xl text-center my-12'>PANTS</h2>
        <ProductsList tag='pants' limit={4} />
        <ViewAllLink url="/collections/tees" />

        <h2 className='text-3xl text-center my-12'>SHORTS</h2>
        <ProductsList tag='shorts' limit={4} />
        <ViewAllLink url="/collections/tees" />
      </div>
    </main>
  );
}
