'use client'

import { useState } from 'react'
import H4 from '@/app/ui/components/h4'
import H5 from '@/app/ui/components/h5'
import Input from '@/app/ui/components/input'
import Radio from '@/app/ui/components/radio'
import AddressForm from '@/app/ui/checkout/address-form'
import OrderSummary from '@/app/ui/checkout/order-summary'
import Note from '@/app/ui/checkout/note'
import MobileOrderSummary from '@/app/ui/checkout/mobile-order-summary'

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
            {/* Mobile Order Summary */}
            <MobileOrderSummary showSummary={showSummary} onShowSummary={handleShowSummary} />

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

                <div>
                    <H4 text='order summery' styles='lg:hidden' />
                    <OrderSummary />
                </div>
                <Input type='submit' value='complete order' />
            </div>
        </div>
    )
}