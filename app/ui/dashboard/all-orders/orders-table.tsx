import { useAppSelector } from "@/redux/hooks"
import OrdersRow from "./orders-row"
import { OrderResponse } from "@/app/lib/types/orderTypes"

export default function OrdersTable({
  orders,
}: {
  orders: OrderResponse[]
}) {

  return (
    <div className="overflow-x-auto rounded">
      <table className="min-w-full bg-white text-sm">
        <thead className="hidden md:table-header-group bg-gray-200 text-gray-600">
          <tr>
            <th className="py-2 px-4 text-left">Order ID</th>
            <th className="py-2 px-4 text-left">Customer Name</th>
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Total</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Actions</th>
            <th className="py-2 px-4 text-left">City</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrdersRow key={order.id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  )
}