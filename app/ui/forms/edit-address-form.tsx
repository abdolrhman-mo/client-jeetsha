import Heading from "../common/heading"
import Input from "./components/input"
import Select from "./components/select"
import Button from "../common/button"
import { useState } from "react"
import { useAppDispatch } from "@/redux/store"
import { editAddress } from "@/redux/features/address/addressThunk"
import { AddressResponse, AddressType } from "@/app/lib/types/addressTypes"

// let governorates_names_en: string[] = []

// governorates.map(governerate => {
//     governorates_names_en.push(governerate.governorate_name_en)
// })

export default function EditAddressForm({
    address,
    resetAddressId,
}: {
    address: AddressResponse
    resetAddressId: any
}) {
    const dispatch = useAppDispatch()
    const [formData, setFormData] = useState<AddressType>({
        country: "Egypt",
        city: address.city || "",
        address_text: address.address_text || "",
        is_default: address.is_default || false
    })
      
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked
            setFormData({
                ...formData,
                [name]: checked,
            })
        } else {
            setFormData({
                ...formData,
                [name]: value,
            })
        }
    }

    let handleSubmit = async (e: any) => {
        dispatch(editAddress({ id: address.id, addressData: {
            country: formData.country,
            city: formData.city,
            address_text: formData.address_text,
            is_default: formData.is_default,
        } }))
        resetAddressId()
    }

    let handleCancel = (e: any) => {
        e.preventDefault()
        resetAddressId()
    }

    return (
        <form>
            <div className={`grid gap-2 md:grid-cols-6`}>
                <Heading level={4} className='col-span-6'>edit address</Heading>
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
                    name="address_text"
                    value={formData.address_text}
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

                {!address.is_default && (
                    <div className="col-span-6">
                        <input 
                            className="rounded mr-4 cursor-pointer" 
                            type="checkbox" 
                            name="is_default" 

                            checked={formData.is_default}
                            onChange={handleChange}
                        />
                        <label className="italic" htmlFor="default">Set as default address</label>
                    </div>
                )}
                <Button onClick={handleCancel} className="col-span-6 md:col-span-3" theme={'light'}>Cancel</Button>
                <Button onClick={handleSubmit} className="col-span-6 md:col-span-3">Save</Button>
            </div>
        </form>
    )
}



