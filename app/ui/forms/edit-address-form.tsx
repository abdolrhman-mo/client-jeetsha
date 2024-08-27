import { AddressType } from "@/app/lib/types"
import Heading from "../common/heading"
import Input from "./input"
import Select from "./select"
import { governorates } from "@/app/lib/governorates"
import Button from "../common/button"
import { useState } from "react"
import { editAddressAPI } from "@/app/lib/services/address"

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

export default function EditAddressForm({
    address,
    resetAddressId,
}: {
    address: AddressType
    resetAddressId: any
}) {
    const [formData, setFormData] = useState<AddressData>({
        country: "Egypt",
        city: address.city || "",
        addressText: address.addressText || "",
        phone_number: address.phone_number || "",
    })
      
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    let handleSubmit = async (e: any) => {
        e.preventDefault()
        await editAddressAPI(
            address.id,
            formData.country,
            formData.city,
            formData.addressText,
            formData.phone_number
        )
        resetAddressId()
    }

    let handleCancel = (e: any) => {
        e.preventDefault()
        resetAddressId()
    }

    return (
        <form>
            <div className={`grid gap-2 md:grid-cols-6`}>
                <Heading level={4} className='col-span-6'>delivery</Heading>
                <Select 
                    name="country"
                    options={['egypt']} 
                    value={formData.country}
                    onChange={handleChange} 
                    className='col-span-6' 
                    />
                {/* <Input placeholder='First name' className='col-span-6 md:col-span-3' />
                <Input placeholder='Second name' className='col-span-6 md:col-span-3' /> */}
                <Input 
                    name="addressText"
                    value={formData.addressText}
                    onChange={handleChange} 
                    placeholder='address' 
                    className='col-span-6' 
                    />

                <Input 
                    name="city"
                    value={formData.city}
                    onChange={handleChange} 
                    placeholder='City' 
                    className='col-span-6 md:col-span-6' 
                />
                {/* <Select options={governorates_names_en} className='col-span-6 md:col-span-2' /> */}
                {/* <Input 
                    placeholder='Postal code (optional)' 
                    className='col-span-6 md:col-span-3'
                /> */}
                
                <Input
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    placeholder='Phone' 
                    type='tel' 
                    className='col-span-6' 
                />
                <Button onClick={handleCancel} className="col-span-6 md:col-span-3" theme={'light'}>Cancel</Button>
                <Button onClick={handleSubmit} className="col-span-6 md:col-span-3">Save</Button>
            </div>
        </form>
    )
}



