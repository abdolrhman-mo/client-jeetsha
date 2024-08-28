import { fetchOrdersAPI } from "@/app/lib/services/ordersService"
import { OrderType } from "@/app/lib/types"
import { useEffect, useState } from "react"
import Order from "./order"

export default function MyOrders() {
    const [orders, setOrders] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            const data = await fetchOrdersAPI()
            setOrders(data)
            setLoading(false)
        }
        getData()
    }, [])

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                orders ? (
                    orders.map((order: OrderType) => 
                        <ul className="divide-y divide-gray-300">
                            <Order order={order} />
                        </ul>
                    )
                ) : (
                    <p>You haven't placed any orders yet.</p>
                )
            )}
        </>
    )
}