import { useEffect, useState } from "react"
import { fetchUserOrdersAPI } from "@/app/lib/services/orders/orderUserService"
import { OrderResponse, OrderType } from "@/app/lib/types/orderTypes"
import UserOrder from "./user-order"
import { useAppDispatch } from "@/redux/store"
import { useAppSelector } from "@/redux/hooks"
import { fetchUserOrders } from "@/redux/features/orders/orderUserThunk"

export default function UserOrdersList() {
  const dispatch = useAppDispatch()
  
  const orders = useAppSelector(state => state.order.items)
  const status = useAppSelector(state => state.order.status)

  useEffect(() => {
    dispatch(fetchUserOrders())
  }, [])

  return (
      <>
          {status === 'loading' ? (
              <p>Loading...</p>
          ) : (
              orders ? (
                  orders.slice().reverse().map((order: OrderResponse) => 
                      <ul className="divide-y divide-gray-300">
                          <UserOrder order={order} />
                      </ul>
                  )
              ) : (
                  <p>You haven't placed any orders yet.</p>
              )
          )}
      </>
  )
}