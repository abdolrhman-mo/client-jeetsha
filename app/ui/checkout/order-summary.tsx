'use client'

import { products } from '@/app/lib/placeholder-data'
import Image from 'next/image'
import H5 from '@/app/ui/components/h5'
import Input from '@/app/ui/components/input'

export default function OrderSummary() {
    return (
        <div className='grid grid-cols-6 gap-y-4 gap-x-2'>
            <div className="col-span-6 grid grid-cols-6">
                <div className="col-span-4 grid grid-cols-6 gap-4">
                    <div 
                        className="col-span-2 bg-slate-200 border rounded-md overflow-hidden flex justify-center"
                    >
                        <Image
                            className=''
                            src={products[11].image_url}
                            alt={products[11].name}
                            width={50}
                            height={50}
                        />
                    </div>
                    <div className="col-span-4 flex justify-center flex-col">
                        <p className='capitalize text-sm'>{products[11].name}</p>
                        <p className='text-gray-500 text-xs'>Small</p>
                    </div>
                </div>
                <div className="col-span-2 flex justify-end items-center">
                    1,600.00 EGP
                </div>
            </div>

            <Input placeholder='discount code' styles='col-span-5' />
            <Input type='submit' value='Apply' styles='col-span-1' />

            <div className="col-span-6">
                <div className="flex justify-between">
                    <p className=''>Subtotal</p>
                    <p className=''>1,600.00 EGP</p>
                </div>
                <div className="flex justify-between">
                    <p className=''>Shipping</p>
                    <p className=''>60.00 EGP</p>
                </div> 
                <div className="flex justify-between">
                    <H5 text='total' styles='' />
                    <H5 text='1,660.00 EGP' styles='' />
                </div> 
            </div>
        </div>
    )
}