'use client'

import { createInventoryItemAPI, fetchInventoryItemsAPI } from "@/app/lib/services/inventoryService"
import { fetchProductsAPI } from "@/app/lib/services/productsService"
import Button from "@/app/ui/common/button"
import Heading from "@/app/ui/common/heading"
import Test from "@/app/ui/common/test"
import InventoryItems from "@/app/ui/dashboard/inventory/inventory-items"
import Input from "@/app/ui/forms/input"
import Select from "@/app/ui/forms/select"
import { useEffect, useState } from "react"

interface InventoryFormProps {
    onSubmit: (data: InventoryData) => void
}
  
interface InventoryData {
    // user: number | null
    product: number
    size_text: string
    type: 'add' | 'minus'
    quantity: number
    // size: number | null
    description: string
}

export default function Page() {
    const [products, setProducts] = useState<any[]>([])
    const [inventoryItems, setInventoryItems] = useState<any[]>([])
    useEffect(() => {
      const getData1 = async () => {
        try {
          const data = await fetchProductsAPI()
          setProducts(data)
        } catch (error) {
          console.error('Failed to fetch products:', error)
        }
      }
      const getData2 = async () => {
        try {
            const data = await fetchInventoryItemsAPI()
            setInventoryItems(data)
        } catch (error) {
            console.error('Failed to fetch inventory items:', error)
        }
      }
      getData1()
      getData2()
    }, [])

    const [formData, setFormData] = useState<InventoryData>({
        // user: null,
        product: 1,
        size_text: 'xs',
        type: 'add',
        quantity: 1,
        // size: null,
        description: 'restok',
    })
      
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: name === 'quantity' ? Number(value) : value,
        })
    }
      
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log(formData)
        await createInventoryItemAPI(formData)
    }

    return (
        <>
            <Heading level={4} className="capitalize">Make changes</Heading>
            <div className="w-fit bg-white shadow rounded-lg p-4">
                <form className="grid grid-cols-2 space-y-2" onSubmit={handleSubmit}>
                    <Select 
                        label="product" 
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        required={true}
                        options={products} 
                        isProductsSelect={true} 
                    />
                    <Select 
                        label="size label" 
                        name="size_text"
                        value={formData.size_text}
                        onChange={handleChange}
                        required={true}
                        options={['xs', 's', 'm', 'l', 'xl', 'xxl']}
                    />
                    <Select 
                        label="type" 
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required={true}
                        options={['add', 'minus']}
                    />
                    <Input label="quantity" type="number" name="quantity" value={formData.quantity} onChange={handleChange} required={true} />
                    {/* <div>
                        <label>Size (optional)</label>
                        <input
                            type="number"
                            name="size"
                            value={formData.size || ''}
                            onChange={handleChange}
                            placeholder="Size"
                        />
                    </div> */}
                    <Select
                        label="change reason" 
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required={true}
                        options={['restock', 'return', 'sale', 'adjustment', 'damage/loss']}
                    />
                    <br />
                    <Input className="col-span-2" type="submit" value={'submit'} />
                </form>
            </div>
            <br />
            <InventoryItems inventoryItems={inventoryItems} products={products} />
            <br />
            <br />
            <br />
        </>
    )
}