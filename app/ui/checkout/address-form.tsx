import { governorates } from '@/app/lib/governorates'
import Input from '@/app/ui/forms/input'
import Select from '@/app/ui/forms/select'
import Heading from '../common/heading'

let governorates_names_en: string[] = []

governorates.map(governerate => {
    governorates_names_en.push(governerate.governorate_name_en)
})

export default function AddressForm({
    styles
}: {
    styles?: string
}) {
    return (
        <div className={`grid gap-2 md:grid-cols-6 ${styles}`}>
            <Heading level={4} className='col-span-6'>contact</Heading>
            <Input 
                type='email'
                placeholder='Email'
                className='col-span-6'
            />

            <Heading level={4} className='col-span-6'>delivery</Heading>
            <Select options={['egypt']} styles='col-span-6' />
            <Input placeholder='First name' className='col-span-6 md:col-span-3' />
            <Input placeholder='Second name' className='col-span-6 md:col-span-3' />
            <Input placeholder='address' className='col-span-6' />

            <Input placeholder='City' className='col-span-6 md:col-span-2' />
            <Select options={governorates_names_en} styles='col-span-6 md:col-span-2' />
            <Input 
                placeholder='Postal code (optional)' 
                className='col-span-6 md:col-span-2'
            />
            
            <Input 
                placeholder='Phone' 
                type='tel' 
                className='col-span-6' 
            />
        </div>
    )
}