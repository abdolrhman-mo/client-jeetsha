import Heading from "../../common/heading"
import { CalendarIcon, ChevronUpIcon, ClipboardDocumentListIcon, CubeIcon, TagIcon } from "@heroicons/react/24/outline"

export default function InventoryItems({
    inventoryItems,
    products,
}: {
    inventoryItems: any[]
    products: any[]
}) {
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
            <Heading level={4} className="capitalize">Inventory History</Heading>
            <br />
            {Object.entries(groupedItems).map(([date, items]) => (
                <div key={date} className="mb-8 text-sm">
                    <Heading level={6}>
                        <div className="flex items-center mb-3">
                            <CalendarIcon className="h-5 w-5 text-gray-500 mr-2" />
                            <p>
                                Date: <span className="font-normal">{date}</span>
                            </p>
                        </div>
                    </Heading>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {items.map(item => {
                            const product = products.find(product => product.id === item.product)
                            const productName = product ? product.name : 'Unknown Product'
                            const productId = product ? product.id : 'Unkown Product Id'
                            return (
                            <div 
                                key={item.id} 
                                className="flex flex-col justify-between p-4 border border-gray-200 rounded-lg bg-white shadow"
                            >
                                <div>
                                    <div className="flex items-center mb-3">
                                        <CubeIcon className="h-5 w-5 text-gray-500 mr-2" />
                                        <p className="text-gray-700 font-semibold">
                                            Product: <span className="font-normal capitalize">
                                                {
                                                    productName
                                                } ({productId})
                                            </span>
                                        </p>
                                    </div>
                                    {/* <div className="flex items-center mb-3">
                                        <CalendarIcon className="h-5 w-5 text-gray-500 mr-2" />
                                        <p className="text-gray-500 text-sm">
                                            Date: <span className="font-normal">{new Date(item.created_at).toLocaleDateString()}</span>
                                        </p>
                                    </div> */}
                                    <div className="flex items-center mb-3">
                                        <ChevronUpIcon className="h-5 w-5 text-gray-500 mr-2" />
                                        <p className="text-gray-700 font-semibold">
                                            {item.type === 'add' ? 'Increase by: ' : 'Decreased by: '} 
                                            <span 
                                                className={
                                                    `font-bold`
                                                }
                                            > {item.quantity} </span>
                                        </p>
                                    </div>
                                    <div className="flex items-center mb-3">
                                        <ClipboardDocumentListIcon className="h-5 w-5 text-gray-500 mr-2" />
                                        <p className="text-gray-700 font-semibold">
                                            Description: <span className="font-normal capitalize">{item.description}</span>
                                        </p>
                                    </div>
                                    {/* <div className="flex items-center mb-3">
                                        <TagIcon className="h-5 w-5 text-gray-500 mr-2" />
                                        <p className="text-gray-500 text-sm font-semibold">
                                            Size: <span className="font-normal">{item.size}</span>
                                        </p>
                                    </div> */}
                                </div>
                                <div className="mt-4">
                                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${item.type === 'add' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {item.type.toUpperCase()}
                                    </span>
                                </div>
                            </div>
                        )})}
                    </div>
                </div>
            ))}
        </>
    )
}