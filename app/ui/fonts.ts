import { Inter } from 'next/font/google'
import { Lusitana } from 'next/font/google'
import { Poppins } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })
export const lusitana = Lusitana({ 
    subsets: ['latin'], 
    weight: ['400', '700']
})
export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})