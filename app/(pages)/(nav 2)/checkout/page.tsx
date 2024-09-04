'use client'

import { useState } from 'react'
import MobileOrderSummary from '@/app/ui/checkout/mobile-order-summary'
import CheckoutForm from '@/app/ui/forms/checkout-form'

export default function Page() {
    const [showSummary, setShowSummary] = useState(false)
    let handleShowSummary = () => {
        setShowSummary(value => !value)
    }

    return (
        <div className='text-sm text-gray-900'>
            <MobileOrderSummary showSummary={showSummary} onShowSummary={handleShowSummary} />

            <CheckoutForm />
        </div>
    )
}