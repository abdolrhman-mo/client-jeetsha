'use client'

import Heading from "@/app/ui/common/heading"
import { fetchOrdersAPI } from "@/app/lib/services/orderService"
import { useEffect, useState } from "react"
import { OrderType } from "@/app/lib/types"
import OrdersList from "@/app/ui/dashboard/orders/orders-list"

export default function Page() {
    const [orders, setOrders] = useState<OrderType[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        const getData = async () => {
            try {
                const fetchedOrders = await fetchOrdersAPI()
                const sortedOrders = (fetchedOrders || []).sort((a, b) => 
                    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
                )
                setOrders(sortedOrders)
                // console.log('fetchedOrders', fetchedOrders)
                // const t = fetchedOrders?.filter(order => order.status === 'pending')
                // console.log('pending fetchedOrders', t)
                setLoading(false)
            } catch (error) {
                console.error('Failed to fetch orders', error)
            }
        }
        getData()
    }, [])

    return (
        <>
            <div className="flex justify-between min-h-4 items-center">
                <Heading level={2}>orders</Heading>
            </div>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Heading level={4}>pending</Heading>
                    <div>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <OrdersList orders={orders?.filter(order => order.status === 'pending')} state={'pending'} />
                        )}
                    </div>
                </div>
                <div>
                    <Heading level={4}>delivered</Heading>
                    <div>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <OrdersList orders={orders?.filter(order => order.status === 'delivered')} state={'delivered'} />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}