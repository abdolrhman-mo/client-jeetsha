import '@/app/ui/global.css'
import { poppins } from '@/app/ui/fonts'
import Link from 'next/link'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body className={`${poppins.className} antialiased`}>
        <div className="grid grid-cols-1 md:grid-cols-6 pt-12">
          <section className='col-span-1 flex flex-col w-5/6 mx-auto'>
            <Link href={'/dashboard'}>Home</Link>
            <Link href={'/dashboard/orders'}>Orders</Link>
            <Link href={'/dashboard/products'}>Products</Link>
            <Link href={'/dashboard/customers'}>Customers</Link>
            <Link href={'/dashboard/discounts'}>Discounts</Link>
          </section>
          <div className='col-span-5 w-5/6 mx-auto'>
            {children}
          </div>
        </div>
    </body>
  )
}
