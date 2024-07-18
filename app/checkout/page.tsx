'use client'

import { governorates } from '@/app/lib/governorates'
import H4 from '@/app/ui/components/h4'
import H5 from '@/app/ui/components/h5'
import Input from '@/app/ui/components/input'
import Select from '@/app/ui/components/select'
import Radio from '@/app/ui/components/radio'
import AddressForm from '@/app/ui/components/checkout/address-form'
import OrderSummary from '@/app/ui/components/checkout/order-summary'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { ChevronUpIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useState } from 'react'
import { products } from '@/app/lib/placeholder-data'
import Image from 'next/image'
import Note from '@/app/ui/components/checkout/note'

export default function Page() {
    const [showSummary, setShowSummary] = useState(false)
    let handleShowSummary = () => {
        if (showSummary) {
            setShowSummary(false)
        } else {
            setShowSummary(true)
        }
    }
    return (
        <div className='text-sm'>
            {/* mobile Order Summary */}
            <div className='lg:hidden bg-slate-100 border'>
                <div 
                    className={clsx(
                        {
                            'w-5/6 mx-auto py-4 cursor-pointer': showSummary === false,
                            'hidden': showSummary
                        }
                    )}
                    onClick={handleShowSummary}
                >
                    Show order summary 
                    <ChevronDownIcon
                        className='h-4 inline-block mx-2'
                    />
                </div>
                <div 
                    className={clsx(
                        {
                            'w-5/6 mx-auto py-4 cursor-pointer': showSummary,
                            'hidden': showSummary === false
                        }
                    )}
                    onClick={handleShowSummary}
                >
                    Hide order summary
                    <ChevronUpIcon
                        className='h-4 inline-block mx-2'
                    />
                </div>
            </div>
            <div className="bg-slate-100">
                <div
                    className={clsx(
                        'w-5/6 mx-auto overflow-hidden transition-all duration-700 ease-in-out',
                        {
                            'h-64 py-6': showSummary,
                            'h-0 py-0': showSummary === false
                        }
                    )}
                >
                    <OrderSummary />
                </div>
            </div>

            <div className='text-sm w-5/6 mx-auto my-12 grid lg:grid-cols-2 gap-16'>
                <div>
                    
                    <AddressForm />

                    <H5 text='shipping method' styles='col-span-6' />
                    <Radio 
                        name='shippingmethod' 
                        options={['Cairo Delivery (3 Working Days)']}
                        styles='col-span-6' 
                    />

                    <H4 text="Payment" styles='col-span-6' />
                    <p className='col-span-6 text-gray-500'>All transactions are secure and encrypted.</p>
                    <Radio 
                        name='payment' 
                        options={['Pay via (Debit/Credit cards/Wallets/Installments)', 'Cash on Delivery(COD)']} 
                        styles='col-span-6'
                        component={
                            <Note
                                styles='transition-all duration-500 ease-in-out overflow-hidden h-0 py-0 peer-checked:h-fit peer-checked:p-6' />
                        }
                        componentIndex={0}
                    />

                    <H5 text='billing address' />
                    <Radio
                        name='billing address'
                        options={['same as shipping address', 'use a different billing address']}
                        component={
                            <AddressForm
                                styles='transition-all duration-500 ease-in-out overflow-hidden h-0 py-0 peer-checked:h-fit peer-checked:py-6' />
                        }
                        componentIndex={1}
                    />
                </div>

                <div className="">    
                    <H4 text='order summery' styles='lg:hidden' />
                    <OrderSummary />
                </div>
                <Input type='submit' value='complete order' />
            </div>
        </div>
    )
}