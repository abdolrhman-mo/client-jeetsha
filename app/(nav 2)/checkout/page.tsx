'use client'

import { useState } from 'react'
import Radio from '@/app/ui/forms/radio'
import AddressForm from '@/app/ui/forms/checkout-form'
import OrderSummary from '@/app/ui/checkout/order-summary'
import Note from '@/app/ui/checkout/note'
import MobileOrderSummary from '@/app/ui/checkout/mobile-order-summary'
import clsx from 'clsx'
import { abdoRedirect } from '@/app/lib/actions'
import Heading from '@/app/ui/common/heading'
import { createOrderAPI } from '@/app/lib/services/ordersService'
import { isAuth } from '@/app/lib/services/auth'
import CheckoutForm from '@/app/ui/forms/checkout-form'

export default function Page() {
    const [showSummary, setShowSummary] = useState(false)
    let handleShowSummary = () => {
        setShowSummary(value => !value)
    }

    let handleCompleteOrder = async () => {
        if (isAuth()) {
            try {
                const order = await createOrderAPI()
                abdoRedirect(`/order-confirmation?orderId=${order.id}`)
            } catch(error) {
                console.error('Failed to create order:', error)
            }
        }
    }

    return (
        <div className='text-sm text-gray-900'>
            {/* Mobile Order Summary */}
            <MobileOrderSummary showSummary={showSummary} onShowSummary={handleShowSummary} />

            <div className='text-sm w-5/6 mx-auto my-12 grid lg:grid-cols-2 gap-16'>
                <CheckoutForm />
            </div>
        </div>
    )
}