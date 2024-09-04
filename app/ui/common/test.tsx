'use client'

import { createInventoryItemAPI, fetchInventoryItemsAPI } from "@/app/lib/services/inventoryService"
import { fetchProductsAPI } from "@/app/lib/services/products/productService"
import Button from "@/app/ui/common/button"
import Heading from "@/app/ui/common/heading"
import Input from "@/app/ui/forms/components/input"
import Select from "@/app/ui/forms/components/select"
import { CalendarIcon, ChevronUpIcon, ClipboardDocumentListIcon, CubeIcon, TagIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"

interface InventoryFormProps {
    onSubmit: (data: InventoryData) => void
}
  
interface InventoryData {
    product: number
    size_text: string
    type: 'add' | 'minus'
    quantity: number
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

    const sortedInventoryItems = [...inventoryItems].sort(
        (a, b) => 
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )

    const groupedItems = sortedInventoryItems.reduce((acc: { [key: string]: any[] }, item) => {
        const date = new Date(item.created_at).toLocaleDateString()
        if (!acc[date]) {
            acc[date] = []
        }
        acc[date].push(item)
        return acc
    }, {})

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <Heading level={4} className="capitalize">Inventory History</Heading>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Object.entries(groupedItems).map(([date, items]) => (
                    <div key={date} className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{date}</h2>
                        {items.map(item => (
                            <div 
                                key={item.id} 
                                className="flex flex-col justify-between p-4 border border-gray-200 rounded-lg bg-white shadow mb-4"
                            >
                                <div>
                                    <div className="flex items-center mb-3">
                                        <CubeIcon className="h-5 w-5 text-gray-500 mr-2" />
                                        <p className="text-gray-700 font-semibold">
                                            Product ID: <span className="font-normal">{item.product}</span>
                                        </p>
                                    </div>
                                    <div className="flex items-center mb-3">
                                        <CalendarIcon className="h-5 w-5 text-gray-500 mr-2" />
                                        <p className="text-gray-500 text-sm">
                                            Date: <span className="font-normal">{new Date(item.created_at).toLocaleDateString()}</span>
                                        </p>
                                    </div>
                                    <div className="flex items-center mb-3">
                                        <ChevronUpIcon className="h-5 w-5 text-gray-500 mr-2" />
                                        <p className="text-gray-700">
                                            Quantity: <span className={`font-bold ${item.quantity > 10 ? 'text-green-500' : 'text-red-500'}`}>{item.quantity}</span>
                                        </p>
                                    </div>
                                    <div className="flex items-center mb-3">
                                        <ClipboardDocumentListIcon className="h-5 w-5 text-gray-500 mr-2" />
                                        <p className="text-gray-500 text-sm">
                                            Description: <span className="font-normal">{item.description}</span>
                                        </p>
                                    </div>
                                    <div className="flex items-center mb-3">
                                        <TagIcon className="h-5 w-5 text-gray-500 mr-2" />
                                        <p className="text-gray-500 text-sm">
                                            Size: <span className="font-normal">{item.size}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${item.type === 'add' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {item.type.toUpperCase()}
                                </span>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <br />
            <br />
            <br />
        </>
    )
}
