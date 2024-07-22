'use client'

import { poppins } from '@/app/ui/fonts'
import Hero from '@/app/ui/home/hero'
import ProductGallery from '@/app/ui/home/product-gallery'
import NavSearchResults from '@/app/ui/components/nav/nav-search-results'
import ShopByCategory from '@/app/ui/home/shop-by-category'
import { motion } from "framer-motion"

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

      {/* Nav Search Results */}
      <NavSearchResults query={query} currentPage={currentPage} /> 

      <div className="z-10">
        <motion.div
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          // animate={{ x: 100 }}
        >
          <Hero />
        </motion.div>

        <ProductGallery title='latest drop' tag='latest' />
        <ProductGallery title='tees' tag='tee' />
        <ProductGallery title='pants' tag='pants' />
        <ProductGallery title='shorts' tag='shorts' />

        <ShopByCategory />
      </div>
    </main>
  );
}
