import { OrderItemType, OrderResponse } from '@/app/lib/types/orderTypes'
import { NextPage } from 'next'
import Heading from '../../common/heading'
import Image from 'next/image'
import OrderItem from '../all-orders/order-item'

interface Props {order: OrderResponse}

const OrderItems: NextPage<Props> = ({
  order
}) => {
  return (
    <div className="p-4">
      <Heading level={3}>Order Items</Heading>
      <div className="pt-4">
        <div className="space-y-4">
          {order.order_items.map((orderItem: any) => (
            <OrderItem key={orderItem.id} orderItem={orderItem} />
          ))}
        </div>
      </div>
      <Heading level={4}>Total order price: {order.totalOrderPrice} EGP</Heading>
    </div>
  )
}

export default OrderItems