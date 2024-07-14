import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { poppins } from '@/app/ui/fonts'
import Image from 'next/image'
import Nav from '@/app/ui/components/nav'
import ProductsList from '@/app/ui/components/products-list';

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
      <ProductsList />
      <div className="text-center">
        <Link
          href="/collections/all"
          className='inline-block text-l tracking-widest my-12 px-4 py-2 border hover:border-black transition duration-300'
          >
          VIEW ALL
        </Link>
      </div>

      <h2 className='text-3xl text-center my-12'>TEES</h2>
      <ProductsList />
      <div className="text-center">
        <Link
          href="/collections/tees"
          className='inline-block text-l tracking-widest my-12 px-4 py-2 border hover:border-black transition duration-300'
          >
          VIEW ALL
        </Link>
      </div>
    </main>
  );
}
