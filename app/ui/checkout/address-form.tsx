import { governorates } from '@/app/lib/governorates'
import H4 from '@/app/ui/components/h4'
import Input from '@/app/ui/components/input'
import Select from '@/app/ui/components/select'

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
            <H4 text='Contact' styles='col-span-6' />
            <Input 
                type='email'
                placeholder='Email'
                styles='col-span-6'
            />

            <H4 text='Delivery' styles='col-span-6' />
            <Select options={['egypt']} styles='col-span-6' />
            <Input placeholder='First name' styles='col-span-6 md:col-span-3' />
            <Input placeholder='Second name' styles='col-span-6 md:col-span-3' />
            <Input placeholder='address' styles='col-span-6' />

            <Input placeholder='City' styles='col-span-6 md:col-span-2' />
            <Select options={governorates_names_en} styles='col-span-6 md:col-span-2' />
            <Input 
                placeholder='Postal code (optional)' 
                styles='col-span-6 md:col-span-2'
            />
            
            <Input 
                placeholder='Phone' 
                type='tel' 
                styles='col-span-6' 
            />
        </div>
    )
}