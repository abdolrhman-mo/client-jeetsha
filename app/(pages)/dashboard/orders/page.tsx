'use client'

import Heading from "@/app/ui/common/heading"
import { useEffect, useState } from "react"
import OrdersList from "@/app/ui/dashboard/orders/orders-list"
import { fetchAllOrdersAPI } from "@/app/lib/services/orders/orderAdminService"
import { OrderResponse, OrderType } from "@/app/lib/types/orderTypes"
import { useAppDispatch } from "@/redux/store"
import { useSelector } from "react-redux"
import { useAppSelector } from "@/redux/hooks"
import { distance } from "framer-motion"
import { fetchAllOrders } from "@/redux/features/orders/orderAdminThunk"

export default function Page() {
    // const [orders, setOrders] = useState<OrderResponse[]>([])
    const dispatch = useAppDispatch()
    const orders = useAppSelector(state => state.orderAdmin.items)
    const status = useAppSelector(state => state.orderAdmin.status)
    
    useEffect(() => {
      dispatch(fetchAllOrders())
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
                        {status === 'loading' ? (
                            <p>Loading...</p>
                        ) : (
                            <OrdersList orders={orders?.filter(order => order.status === 'pending')} state={'pending'} />
                        )}
                    </div>
                </div>
                <div>
                    <Heading level={4}>delivered</Heading>
                    <div>
                        {status === 'loading' ? (
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