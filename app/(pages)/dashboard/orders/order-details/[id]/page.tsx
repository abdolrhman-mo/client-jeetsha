'use client'

import { changeOrderStateAPI, fetchOrderByIdAPI } from "@/app/lib/services/orderService"
import { OrderType } from "@/app/lib/types"
import Button from "@/app/ui/common/button"
import OrderItem from "@/app/ui/dashboard/orders/order-item"
import clsx from "clsx"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Page({ params }: { params: { id: number } }) {
  const [order, setOrder] = useState<OrderType | null>(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchOrderByIdAPI(params.id)
        console.log(data)
        setOrder(data)
      } catch (error) {
        console.error(error)
      }
    }
    getData()
  }, [params.id])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date)
  }

  const handleChangeState = async () => {
    if (order) {
      const newOrder = await changeOrderStateAPI(
        order.id,
        order.status === 'pending' ? 'delivered' : 'pending'
      )
      setOrder(newOrder) // Update order state
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-6">
        <Link href="/dashboard/orders" className="text-sm text-gray-500 hover:text-gray-700">
          &larr; Back to Orders
        </Link>
      </div>
      {order ? (
        <div className="bg-white shadow rounded-lg p-6 space-y-8">
          {/* Order Information Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Order Details</h2>
              <div className="text-sm text-gray-600">
                <p><strong>Order Date:</strong> {order.created_at ? formatDate(order.created_at) : 'No date available'}</p>
                <p><strong>Order Status:</strong> {order.status}</p>
              </div>
            </div>
          </div>
          
          {/* User Information Section */}
          <div className="border-t border-gray-200 pt-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">User Information</h2>
            <div className="text-sm text-gray-600">
              {/* <p><strong>User Name:</strong> {order.user ? order.user.name : 'No user information available'}</p>
              <p><strong>Email:</strong> {order.user ? order.user.email : 'No email available'}</p>
              <p><strong>Phone Number:</strong> {order.user ? order.user.phoneNumber : 'No phone number available'}</p> */}
            </div>
          </div>

          {/* Address Section */}
          <div className="border-t border-gray-200 pt-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Shipping Address</h2>
            <div className="text-sm text-gray-600">
              <p>{order.address ? order.address.country : 'No address available'}</p>
              <p>{order.address ? order.address.city : 'No address available'}</p>
              <p>{order.address ? order.address.addressText : 'No address available'}</p>
            </div>
          </div>

          {/* Items Section */}
          <div className="border-t border-gray-200 pt-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Items</h2>
            <div className="space-y-4">
              {order.order_items.map((orderItem) => (
                <OrderItem key={orderItem.id} orderItem={orderItem} state={order.status} />
              ))}
            </div>
          </div>

          {/* Change Order State Button */}
          <div className="border-t border-gray-200 pt-4">
            <Button
              className={clsx(
                "w-full text-center !py-1 px-3 rounded-md text-white font-semibold text-sm", 
                "transition duration-300 ease-in-out",
                order.status === "pending"
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              )}
              onClick={handleChangeState}
            >
              {order.status === "pending" ? "Move to Delivered" : "Move Back to Pending"}
            </Button>
          </div>
        </div>
      ) : (
        <p>Loading order details...</p>
      )}
    </div>
  )
}
