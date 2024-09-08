import { OrderResponse } from '@/app/lib/types/orderTypes'
import { NextPage } from 'next'
import Heading from '../../common/heading'

interface Props {order: OrderResponse}

const CustomerInfo: NextPage<Props> = ({order}) => {
  return (
    <div className="p-4">
      <Heading level={3}>Customer info</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p><span className='font-semibold'>Name:</span> {
            !order.user.first_name && !order.user.last_name ?
            'No name' :
            order.user.first_name + ' ' + order.user.last_name
          }</p>
          <p><span className='font-semibold'>Phone:</span> {order.user.phone_number}</p>
        </div>
      </div>
    </div>
  )
}

export default CustomerInfo