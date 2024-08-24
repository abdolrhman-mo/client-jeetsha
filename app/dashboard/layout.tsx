import '@/app/ui/global.css'
import { poppins } from '@/app/ui/fonts'
import Link from 'next/link'
import Nav from '../ui/dashboard/nav'
import SideBar from '../ui/dashboard/sidebar'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body className={`${poppins.className} antialiased`}>
        <Nav />
        <div className="grid grid-cols-1 md:grid-cols-6 pt-14 bg-slate-50 min-h-screen">
          <SideBar />
          <div className='col-span-5 w-5/6 mx-auto pt-8'>
            {children}
          </div>
        </div>
    </body>
  )
}
