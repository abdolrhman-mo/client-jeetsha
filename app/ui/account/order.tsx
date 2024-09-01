import { CartItemType, OrderType } from "@/app/lib/types"
import Image from "next/image"

export default function Order({
  order,
}: {
  order: OrderType
}) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  return (
    <li key={order.id} className="border rounded-lg shadow-sm p-6 mb-6 bg-white">
      {/* Order Details */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Order Details</h2>
        <div className="flex justify-between mb-2">
          <span className="font-semibold text-gray-600">Order ID:</span>
          <span>{order.id}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-semibold text-gray-600">Created At:</span>
          <span>{new Date(order.created_at).toLocaleString()}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-semibold text-gray-600">Status:</span>
          <span
            className={`px-2 py-1 rounded-full text-sm font-medium ${
              order.status === "pending"
                ? "bg-yellow-200 text-yellow-800"
                : "bg-green-200 text-green-800"
            }`}
          >
            {order.status}
          </span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-semibold text-gray-600">Address:</span>
          <span className="text-gray-600">{order.address?.addressText || "No address provided"}</span>
        </div>
      </div>

      {/* Order Items */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">Order Items</h3>
        {order.order_items.length > 0 ? (
          order.order_items.map((orderItem: CartItemType, i: number) => (
            <div key={i} className="border-t border-gray-200 pt-4 pb-2">
                <div className="grid grid-cols-2">
                    <div>
                        <p className="text-md font-semibold text-gray-800 capitalize">{orderItem.product.name}</p>
                        <p className="text-sm text-gray-600">Quantity: {orderItem.quantity}</p>
                        <p className="text-sm text-gray-600">Size: <span className="uppercase">{orderItem.size}</span></p>
                        <p className="text-sm text-gray-600">Price: {orderItem.totalOrderItemsPrice} EGP</p>
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
    </li>
  )
}
