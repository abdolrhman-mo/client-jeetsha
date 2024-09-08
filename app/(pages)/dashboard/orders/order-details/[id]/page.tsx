'use client'

import { ROUTES } from "@/app/lib/constants/routes"
import { formatDate } from "@/app/lib/utils"
import { changeOrderStatus, fetchOrderInDetailPage } from "@/redux/features/orders/orderAdminThunk"
import { useAppSelector } from "@/redux/hooks"
import { useAppDispatch } from "@/redux/store"
import { useEffect } from "react"
import Button from "@/app/ui/common/button"
import OrderItem from "@/app/ui/dashboard/all-orders/order-item"
import clsx from "clsx"
import Link from "next/link"
import OrderInfo from "@/app/ui/dashboard/order-details/order-info"
import OrderStatusSwitcher from "@/app/ui/dashboard/order-details/order-status-switcher"
import OrderItems from "@/app/ui/dashboard/order-details/order-items"
import CustomerInfo from "@/app/ui/dashboard/order-details/customer-info"
import AddressInfo from "@/app/ui/dashboard/order-details/address-info"

export default function Page({ params }: { params: { id: number } }) {
  // const [order, setOrder] = useState<OrderResponse | null>(null)
  const disptach = useAppDispatch()
  const order = useAppSelector(state => state.orderAdmin.orderInDetailPage)

  useEffect(() => {
    disptach(fetchOrderInDetailPage({ orderId: params.id }))
  }, [params.id])

  const handleChangeState = async () => {
    if (order) {
      disptach(changeOrderStatus({ orderId: order.id, state: order?.status, orderData: order }))
    }
  }

  return (
    <>
      <div className="mb-6">
        <Link 
          href={ROUTES.DASHBOARD.ORDERS} 
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          &larr; Back to Orders
        </Link>
      </div>
      {order && <>
          <OrderInfo order={order} />
          <CustomerInfo order={order} />
          <AddressInfo order={order} />
          <OrderItems order={order} />
          <OrderStatusSwitcher order={order} />
        </>
      }
      <br />
      <br />
      <br />
      <br />
    </>
  )
}
