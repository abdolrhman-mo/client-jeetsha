import Link from 'next/link';
import { poppins } from '@/app/ui/fonts'
import Image from 'next/image'
import Nav from '@/app/ui/components/nav'
import ProductsList from '@/app/ui/components/products-list';
import ViewAllLink from '@/app/ui/components/view-all-link';

export default function Page() {
  return (
    <main className={`${poppins.className} antialiased`}>
      <Nav />
      <div className="hero overflow-hidden h-screen flex items-center bg-black">
        <Image
          src="/hero2.webp"
          width={10}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          className="hidden md:block opacity-50"
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
    </main>
  );
}
