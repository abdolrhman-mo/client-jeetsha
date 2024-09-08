import { OrderResponse } from '@/app/lib/types/orderTypes'
import { formatDate } from '@/app/lib/utils'
import { NextPage } from 'next'
import Heading from '../../common/heading'

interface Props {order: OrderResponse}

const OrderInfo: NextPage<Props> = ({order}) => {
  return (
    <div className="p-4">
      <Heading level={3}>Order info</Heading>
      <div className="grid gird-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p><span className='font-semibold'>Order ID:</span> #{order.id}</p>
          <p><span className='font-semibold'>Date:</span> {formatDate(order.created_at)}</p>
        </div>
        <div>
          <p className='capitalize'><span className='font-semibold'>Order Status:</span> {order.status}</p>
          {/* <p><span className='font-semibold'>Payment Status:</span> Paid</p> */}
        </div>
      </div>
    </div>
  )
}

export default OrderInfo