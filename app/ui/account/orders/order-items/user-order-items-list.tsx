import { OrderItemType } from "@/app/lib/types/orderTypes"
import Image from "next/image"

export default function UserOrderItemsList({
  orderItems,
}: {
  orderItems: OrderItemType[]
}) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL
  
  return (
    <div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">Order Items</h3>
        {orderItems.length > 0 ? (
          orderItems.map((orderItem: OrderItemType, i: number) => (
            <div key={i} className="border-t border-gray-200 pt-4 pb-2">
                <div className="grid grid-cols-2">
                    <div>
                        <p className="text-md font-semibold text-gray-800 capitalize">{orderItem.product.name}</p>
                        <p className="text-sm text-gray-600">Quantity: {orderItem.quantity}</p>
                        <p className="text-sm text-gray-600">Size: <span className="uppercase">{orderItem.size}</span></p>
                        <p className="text-sm text-gray-600">Price: {orderItem.product.price * orderItem.quantity} EGP</p>
                    </div>
                    <div className="flex-shrink-0 w-24 h-24 relative">
                        <Image
                            className="object-cover rounded"
                            src={orderItem.product.image.startsWith('http') ? orderItem.product.image : `${API_URL + orderItem.product.image}`}
                            alt={orderItem.product.name}
                            layout="fill" // Ensures the image covers the container
                        />
                    </div>
                </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">No items in this order.</p>
        )}
      </div>
  )
}