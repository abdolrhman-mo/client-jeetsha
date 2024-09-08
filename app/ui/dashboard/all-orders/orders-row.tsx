import { ROUTES } from "@/app/lib/constants/routes";
import { OrderResponse } from "@/app/lib/types/orderTypes";
import { formatDate } from "@/app/lib/utils";
import { changeOrderStatus } from "@/redux/features/orders/orderAdminThunk";
import { useAppDispatch } from "@/redux/store";
import Link from "next/link";

export default function OrdersRow({
  order,
}: {
  order: OrderResponse
}) {
  const dispatch = useAppDispatch()

  const toggleStatus = () => {
    dispatch(changeOrderStatus({ orderId: order.id, state: order.status, orderData: order}))
  }

  return (
    <tr className="block md:table-row py-4 md:py-0 border-b border-gray-200">
      <td className="py-2 px-4 block md:table-cell">
        <div className="md:hidden font-semibold inline-block pr-2">Order ID:</div>
        {order.id}
      </td>
      <td className="py-2 px-4 block md:table-cell">
        <div className="md:hidden font-semibold">Customer Name:</div>
        {
          !order.user.first_name && !order.user.last_name ?
          <span className="text-gray-500">No name</span> :
          order.user.first_name + ' ' + order.user.last_name
        }
      </td>
      <td className="py-2 px-4 block md:table-cell">
        <div className="md:hidden font-semibold inline-block pr-2">Date:</div>
        {formatDate(order.created_at)}
      </td>
      <td className="py-2 px-4 block md:table-cell">
        <div className="md:hidden font-semibold inline-block pr-2">Total:</div>
        {order.totalOrderPrice} EGP
      </td>
      <td className="py-2 px-4 block md:table-cell">
        <div className="md:hidden font-semibold inline-block pr-2">Status:</div>
        <span className={`${
          order.status === 'pending'
            ? 'text-yellow-600'
            : order.status === 'delivered'
            ? 'text-green-600'
            : 'text-red-600'
        }`}>
          {order.status}
        </span>
      </td>
      <td className="py-2 px-4 block md:table-cell">
        <div className="md:hidden font-semibold inline-block pr-2">Actions:</div>
        <div className="flex items-center divide-x-2 text-center text-xs">
          <Link 
            href={ROUTES.DASHBOARD.ORDER_DETAILS(order.id)} 
            className="text-blue-500 hover:underline pr-1"
          >
            View
          </Link>
          <button
            className="text-blue-500 hover:underline flex-wrap w-16 pl-1"
            onClick={toggleStatus}
          >
            {order.status === 'pending' ? 'Mark as Delivered' : 'Mark as Pending'}
          </button>
        </div>
      </td>
      <td className="py-2 px-4 block md:table-cell">
        <div className="md:hidden font-semibold inline-block pr-2">City:</div>
          {order.address.city}
      </td>
    </tr>
  )
}