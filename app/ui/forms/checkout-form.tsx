'use client'

import { governorates } from '@/app/lib/governorates'
import Input from '@/app/ui/forms/input'
import Select from '@/app/ui/forms/select'
import Heading from '../common/heading'
import { useEffect, useState } from 'react'
import { addAddressAPI, editAddressAPI, fetchAddressesAPI } from '@/app/lib/services/address'
import Radio from './radio'
import Note from '../checkout/note'
import OrderSummary from '../checkout/order-summary'
import clsx from 'clsx'
import * as yup from 'yup'
import { abdoRedirect } from '@/app/lib/actions'
import { addAddressToOrderAPI, createOrderAPI } from '@/app/lib/services/ordersService'
import { isAuth } from '@/app/lib/services/auth'

let governorates_names_en: string[] = []

governorates.map(governerate => {
    governorates_names_en.push(governerate.governorate_name_en)
})

interface AddressFormProps {
    onSubmit: (data: AddressData) => void
}
  
interface AddressData {
    id: number
    country: string
    city: string
    addressText: string
    phone_number: string
}

const addressSchema = yup.object().shape({
    country: yup.string().required("Country is required."),
    city: yup.string().required("City is required."),
    addressText: yup.string().required("Address is required."),
    phone_number: yup.string()
        .matches(/^0?[1-9][0-9]{9,10}$/, "Write a valid phone number.")
        .required("Phone number is required."),
})

export default function CheckoutForm({
    className
}: {
    className?: string
}) {
    const [loading, setLoading] = useState(true)
    const [address, setAddress] = useState<AddressData | null>(null)
    const [errors, setErrors] = useState<Partial<Record<keyof AddressData, string>>>({})
    
    const [formData, setFormData] = useState<AddressData>({
        id: 1,
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
            setLoading(false)
        }
        getData()
    }, [])

    useEffect(() => {
        if (isAuth()) {
            if (address) {
                setFormData({
                    id: address.id | 0,
                    country: "Egypt",
                    city: address.city || "",
                    addressText: address.addressText || "",
                    phone_number: address.phone_number || "",
                })
            }
        } else {
            const string = localStorage.getItem('defaultAddress') || '{}'
            const defaultAddress = JSON.parse(string)
            if (defaultAddress) {
                setFormData({
                    id: defaultAddress.id | 0,
                    country: "Egypt",
                    city: defaultAddress.city || "",
                    addressText: defaultAddress.addressText || "",
                    phone_number: defaultAddress.phone_number || "",
                })
            }
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

        try {
            await addressSchema.validate(formData, { abortEarly: false })
            setErrors({})

            const order = await createOrderAPI()
            // console.log('order added', order)

            let fetchedAddress
            
            if (address && isAuth()) {
                fetchedAddress = await editAddressAPI(
                    formData.id,
                    formData.country,
                    formData.city,
                    formData.addressText,
                    formData.phone_number,
                )
            } else {
                fetchedAddress = await addAddressAPI(
                    formData.country,
                    formData.city,
                    formData.addressText,
                    formData.phone_number
                )
            }
            // console.log('address added', fetchedAddress)

            await addAddressToOrderAPI(order.order_items.id, fetchedAddress.id)
            // console.log('orderWAddress', orderWAddress)

            abdoRedirect(`/order-confirmation?orderId=${order.order_items.id}`)
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                const newErrors: Partial<Record<keyof AddressData, string>> = {}
                error.inner.forEach((err) => {
                    if (err.path) {
                        newErrors[err.path as keyof AddressData] = err.message
                    }
                })
                setErrors(newErrors)
            } else {
                console.error('Error adding address:', error)
            }
        }
        
    }

    return (
        <div className='text-sm w-5/6 mx-auto my-12 grid lg:grid-cols-2 gap-16'>
            <div className={`grid grid-cols-2 gap-2 ${className}`}>
                <Heading level={4} className='col-span-2'>Delivery</Heading>
                <Select 
                    name="country"
                    options={['Egypt']}
                    value={formData.country}
                    onChange={handleChange} 
                    className='col-span-2' 
                />
                {errors.country && <p className='text-red-500 col-span-2'>{errors.country}</p>}

                <Input 
                    name="addressText"
                    value={formData.addressText}
                    onChange={handleChange} 
                    placeholder='Address' 
                    className='col-span-2' 
                />
                {errors.addressText && <p className='text-red-500 col-span-2'>{errors.addressText}</p>}

                <Input 
                    name="city"
                    value={formData.city}
                    onChange={handleChange} 
                    placeholder='City' 
                    className='col-span-2 md:col-span-1' 
                />
                {errors.city && <p className='text-red-500 col-span-2 block md:hidden'>{errors.city}</p>}

                {/* <Select 
                    name="governorate"
                    options={governorates_names_en} 
                    className='col-span-6 md:col-span-2' 
                    /> */}
                <Input 
                    name="postalCode"
                    placeholder='Postal code (optional)' 
                    className='col-span-2 md:col-span-1'
                />
                {errors.city && <p className='text-red-500 col-span-2 hidden md:block'>{errors.city}</p>}
                
                <Input 
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    placeholder='Phone' 
                    type='tel' 
                    className='col-span-2' 
                />
                {errors.phone_number && <p className='text-red-500 col-span-2'>{errors.phone_number}</p>}

                <Heading level={4} className='col-span-2'>shipping method</Heading>
                <Radio 
                    name='shippingmethod' 
                    options={['Cairo Delivery (3 Working Days)']}
                    styles='col-span-2' 
                />

                <Heading level={4} className='col-span-2'>Payment</Heading>
                <p className='col-span-2 text-gray-500 pb-4'>All transactions are secure and encrypted.</p>
                <Radio 
                    name='payment' 
                    options={[
                        // 'Pay via (Debit / Credit cards / Wallets / Installments)', 
                        'Cash on Delivery(COD)'
                    ]} 
                    styles='col-span-2'
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
            <div className='grid h-fit'>
                <Heading level={4} className='lg:hidden'>order summary</Heading>
                <OrderSummary />
            </div>
            <button
                onClick={handleSubmit}
                className={clsx(
                    // Layout
                    'cursor-pointer text-center h-fit',
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
                {loading ? 'processing..' : 'complete order'}
            </button>
        </div>
    )
}