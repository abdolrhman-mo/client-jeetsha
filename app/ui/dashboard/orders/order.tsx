import OrderItem from "./order-item"
import Link from "next/link"
import clsx from "clsx"
import Button from "../../common/button"
import { changeOrderStatusAPI } from "@/app/lib/services/orders/orderAdminService"
import { OrderResponse, OrderType } from "@/app/lib/types/orderTypes"
import { ROUTES } from "@/app/lib/constants/routes"
import { useAppDispatch } from "@/redux/store"
import { changeOrderStatus } from "@/redux/features/orders/orderAdminThunk"

export default function Order({
    order,
    state,
}: {
    order: OrderResponse
    state: 'pending' | 'delivered'
}) {
    const dispatch = useAppDispatch()

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
      console.log('changing state from', state)
      dispatch(changeOrderStatus({ orderId: order.id, state, orderData: order }))
    }

    return (
        <div className="p-6 rounded-lg shadow-md bg-white">
            <div className="mb-4">
                <p className="text-base font-semibold">Order Id:</p>
                <p className="text-sm text-gray-600">
                    {order.id ? order.id : 'No order id available'}
                </p>
            </div>
            <div className="mb-4">
                <p className="text-base font-semibold">Order Date:</p>
                <p className="text-sm text-gray-600">
                    {order.created_at ? formatDate(order.created_at) : 'No date available'}
                </p>
            </div>
            <div className="mb-4">
                <p className="text-base font-semibold">Shipping Address:</p>
                <p className="text-sm text-gray-600">
                    {order.address?.address_text ? order.address?.address_text : 'No address available'}
                </p>
            </div>
            <div className="mb-4">
                <p className="text-base font-semibold">Phone No:</p>
                <p className="text-sm text-gray-600">
                    {order.user.phone_number ? order.user.phone_number : 'No phone number available'}
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
            <Link href={ROUTES.DASHBOARD.ORDER_DETAILS(order.id)}>View Details</Link>
        </div>
    )
}
