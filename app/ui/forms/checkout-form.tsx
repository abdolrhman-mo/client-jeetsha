'use client'

import { governorates } from '@/app/lib/governorates'
import Input from '@/app/ui/forms/input'
import Select from '@/app/ui/forms/select'
import Heading from '../common/heading'
import { useEffect, useState } from 'react'
import { addAddressAPI, fetchAddressesAPI } from '@/app/lib/services/address'
import Radio from './radio'
import Note from '../checkout/note'
import OrderSummary from '../checkout/order-summary'
import clsx from 'clsx'

let governorates_names_en: string[] = []

governorates.map(governerate => {
    governorates_names_en.push(governerate.governorate_name_en)
})

interface AddressFormProps {
    onSubmit: (data: AddressData) => void
}
  
interface AddressData {
    country: string
    city: string
    addressText: string
    phone_number: string
}

export default function CheckoutForm({
    className
}: {
    className?: string
}) {
    const [address, setAddress] = useState(null)
    
    const [formData, setFormData] = useState<AddressData>({
        country: "Egypt",
        city: "",
        addressText: "",
        phone_number: "",
    })

    useEffect(() => {
        const getData = async () => {
            const data = await fetchAddressesAPI()
            const defaultAddress = data[0]
            setAddress(defaultAddress)
        }
        getData()
    }, [])

    useEffect(() => {
        if (address) {
            setFormData({
                country: "Egypt",
                city: address.city || "",
                addressText: address.addressText || "",
                phone_number: address.phone_number || "",
            })
        }
    }, [address])
      
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    let handleSubmit = async (e: any) => {
        e.preventDefault()
        await addAddressAPI(
            formData.country,
            formData.city,
            formData.addressText,
            formData.phone_number
        )
    }

    return (
        <div className={`grid gap-2 md:grid-cols-6 ${className}`}>
            <div>
            <Heading level={4} className='col-span-6'>Delivery</Heading>
            <Select 
                name="country"
                options={['Egypt']}
                value={formData.country}
                onChange={handleChange} 
                className='col-span-6' 
            />
            <Input 
                name="addressText"
                value={formData.addressText}
                onChange={handleChange} 
                placeholder='Address' 
                className='col-span-6' 
            />
            <Input 
                name="city"
                value={formData.city}
                onChange={handleChange} 
                placeholder='City' 
                className='col-span-6 md:col-span-3' 
            />
            {/* <Select 
                name="governorate"
                options={governorates_names_en} 
                className='col-span-6 md:col-span-2' 
            /> */}
            <Input 
                name="postalCode"
                placeholder='Postal code (optional)' 
                className='col-span-6 md:col-span-3'
            />
            <Input 
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder='Phone' 
                type='tel' 
                className='col-span-6' 
            />
            <Heading level={4} className='col-span-6'>shipping method</Heading>
                    <Radio 
                        name='shippingmethod' 
                        options={['Cairo Delivery (3 Working Days)']}
                        styles='col-span-6' 
                    />

                    <Heading level={4} className='col-span-6'>Payment</Heading>
                    <p className='col-span-6 text-gray-500 pb-4'>All transactions are secure and encrypted.</p>
                    <Radio 
                        name='payment' 
                        options={[
                            // 'Pay via (Debit / Credit cards / Wallets / Installments)', 
                            'Cash on Delivery(COD)'
                        ]} 
                        styles='col-span-6'
                        component={
                            <Note
                                styles='transition-all duration-500 ease-in-out overflow-hidden h-0 py-0 peer-checked:h-fit peer-checked:p-6' />
                        }
                        componentIndex={0}
                    />

                    {/* <Heading level={5}>billing address</Heading>
                    <Radio
                        name='billing address'
                        options={['same as shipping address', 'use a different billing address']}
                        component={
                            <AddressForm
                                className='transition-all duration-500 ease-in-out overflow-hidden h-0 py-0 peer-checked:h-fit peer-checked:py-6' />
                        }
                        componentIndex={1}
                    /> */}
            {/* <button type="button" onClick={handleSubmit}>Submit</button> */}
            </div>
            <div>
                <Heading level={4} className='lg:hidden'>order summary</Heading>
                <OrderSummary />
            </div>
            <button
                onClick={handleSubmit}
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
    )
}