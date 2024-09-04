import { OrderType } from "@/app/lib/types/types"
import OrderItem from "./order-item"
import { useEffect } from "react"
import Order from "./order"

export default function OrdersList({
    orders,
    state,
}: {
    orders: OrderType[]
    state: 'pending' | 'delivered'
}) {
    return (
        <>
            {
                orders.length === 0 ? (
                    <p>There is no items in here.</p>
                ) : (
                    orders.map((order: OrderType) =>
                        <div key={order.id} className="mb-8">
                            <Order state={state} order={order} />
                        </div>
                    )
                )
            }
        </>
    )
}