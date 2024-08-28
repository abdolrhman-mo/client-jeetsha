import { OrderType } from "@/app/lib/types"
import OrderItem from "./order-item"
import { useEffect } from "react"
import Link from "next/link"
import clsx from "clsx"
import Button from "../../common/button"
import { changeOrderStateAPI } from "@/app/lib/services/ordersService"

export default function Order({
    order,
    state,
}: {
    order: OrderType
    state: string
}) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return new Intl.DateTimeFormat('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            // hour: '2-digit', 
            // minute: '2-digit' 
        }).format(date)
    }

    const handleChangeState = async () => {
        const newOrder = await changeOrderStateAPI(order.id, state === 'pending' ? 'delivered' : 'pending')
    }

    return (
        <div className="p-6 border rounded-lg shadow-md bg-white">
            <div className="mb-4">
                <p className="text-base font-semibold">Order Date:</p>
                <p className="text-sm text-gray-600">
                    {order.created_at ? formatDate(order.created_at) : 'No date available'}
                </p>
            </div>
            <div className="mb-4">
                <p className="text-base font-semibold">Shipping Address:</p>
                <p className="text-sm text-gray-600">
                    {order.address ? order.address.addressText : 'No address available'}
                </p>
            </div>
            <div className="mb-4">
                <p className="text-base font-semibold">Phone No:</p>
                <p className="text-sm text-gray-600">
                    {order.address ? order.address.addressText : 'No address available'}
                </p>
            </div>
            <div className="mb-4">
                <p className="text-base font-semibold">Items:</p>
                <div className="space-y-4">
                    {order.order_items.map((orderItem) => (
                        <OrderItem key={orderItem.id} orderItem={orderItem} state="pending" />
                    ))}
                </div>
            </div>
            <Button
                className={clsx(
                    "w-full text-center !py-1 px-3 rounded-md text-white font-semibold text-sm", // Smaller font size
                    "transition duration-300 ease-in-out",
                    state === "pending"
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-red-500 hover:bg-red-600"
                )}
                onClick={handleChangeState}
            >
                {state === "pending" ? "Move to Delivered" : "Move Back to Pending"}
            </Button>
            <br />
            <Link href={`/dashboard/orders/order-details/${order.id}`}>View Details</Link>
        </div>
    )
}
