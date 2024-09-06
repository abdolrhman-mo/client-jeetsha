import { OrderResponse } from "@/app/lib/types/orderTypes"
import Order from "./order"

export default function OrdersList({
    orders,
    state,
}: {
    orders: OrderResponse[]
    state: 'pending' | 'delivered'
}) {
    return (
        <>
            {
                orders.length === 0 ? (
                    <p>There is no items in here.</p>
                ) : (
                    orders.map((order: OrderResponse) =>
                        <div key={order.id} className="mb-8">
                            <Order state={state} order={order} />
                        </div>
                    )
                )
            }
        </>
    )
}