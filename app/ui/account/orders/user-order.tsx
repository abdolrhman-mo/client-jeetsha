import { OrderItemType, OrderResponse, OrderType } from "@/app/lib/types/orderTypes"
import Image from "next/image"
import UserOrderItemsList from "./order-items/user-order-items-list"

export default function UserOrder({
  order,
}: {
  order: OrderResponse
}) {
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
          <span className="text-gray-600">{order.address?.address_text || "No address provided"}</span>
        </div>
      </div>

      {/* Order Items */}
      
      <UserOrderItemsList orderItems={order.order_items} />
    </li>
  )
}
