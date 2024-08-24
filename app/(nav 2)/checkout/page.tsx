'use client'

import { useEffect, useState } from 'react'
import Radio from '@/app/ui/forms/radio'
import AddressForm from '@/app/ui/checkout/address-form'
import OrderSummary from '@/app/ui/checkout/order-summary'
import Note from '@/app/ui/checkout/note'
import MobileOrderSummary from '@/app/ui/checkout/mobile-order-summary'
import clsx from 'clsx'
import { abdoRedirect } from '@/app/lib/actions'
import Heading from '@/app/ui/common/heading'
import { createOrderAPI } from '@/app/lib/services/ordersService'
import { fetchCartItemsAPI } from '@/app/lib/services/cartService'
import { isAuth } from '@/app/lib/services/auth'

export default function Page() {
    const [showSummary, setShowSummary] = useState(false)
    let handleShowSummary = () => {
        setShowSummary(value => !value)
    }

    let handleCompleteOrder = async () => {
        if (isAuth()) {
            try {
                const cartItems = await fetchCartItemsAPI()
                const order = await createOrderAPI(cartItems)
                abdoRedirect(`/order-confirmation?orderId=${order.id}`)
            } catch(error) {
                console.error('Failed to create order:', error)
            }
        }
    }

    return (
        <div className='text-sm'>
            {/* Mobile Order Summary */}
            <MobileOrderSummary showSummary={showSummary} onShowSummary={handleShowSummary} />

            <div className='text-sm w-5/6 mx-auto my-12 grid lg:grid-cols-2 gap-16'>
                <div>
                    <AddressForm />

                    <Heading level={5} className='col-span-6'>shipping method</Heading>
                    <Radio 
                        name='shippingmethod' 
                        options={['Cairo Delivery (3 Working Days)']}
                        styles='col-span-6' 
                    />

                    <Heading level={4} className='col-span-6'>Payment</Heading>
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

                    <Heading level={5}>billing address</Heading>
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
                    <Heading level={4} className='lg:hidden'>order summary</Heading>
                    <OrderSummary />
                </div>
                {/* <Input type='submit' value='complete order' /> */}
                <button
                    onClick={handleCompleteOrder}
                    className={clsx(
                        // Layout
                        'cursor-pointer text-center',
                        // Spacing
                        'p-2',
                        // Typography
                        'text-sm text-white capitalize font-semibold',
                        // Background
                        ' bg-black',
                        // Border
                        'rounded-lg',
                    )}
                >
                    complete order
                </button>
            </div>
        </div>
    )
}