import { poppins } from '@/app/ui/fonts'
import Hero from '@/app/ui/home/hero'
import ProductGallery from '@/app/ui/home/product-gallery'
import NavSearchResults from '@/app/ui/layout/nav/nav-search-results'
import ShopByCategory from '@/app/ui/home/shop-by-category'
import { fetchProductsAPI } from '../lib/services/productsService'

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string
    page?: string
  },
}) {
  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1

  const products = await fetchProductsAPI()
  // const products = await getStaticProps()

  return (
    <main className={`${poppins.className} antialiased z-10`}>
      {/* Nav Search Results */}
      <NavSearchResults products={products} query={query} currentPage={currentPage} />

      <div className="z-10">
        <Hero />

        <ProductGallery products={products} title='latest drop' tag='latest' />
        <ProductGallery products={products} title='tees' tag='tee' />
        <ProductGallery products={products} title='pants' tag='pants' />
        <ProductGallery products={products} title='shorts' tag='shorts' />
        {/* <ProductGallery title='shorts' tag='all' /> */}

        <ShopByCategory />
      </div>
    </main>
  );
}

// export const getServerSideProps = async () => {
//   // Fetch data from an API or any other source
//   const res = await fetch('https://api.example.com/data')
//   const data = await res.json();

//   // Return the data as props
//   return {
//     props: {
//       data,
//     },
//   }
// }
