import { OrderResponse } from '@/app/lib/types/orderTypes'
import { NextPage } from 'next'
import Heading from '../../common/heading'

interface Props {order: OrderResponse}

const AddressInfo: NextPage<Props> = ({order}) => {
  return (
    <div className="p-4">
      <Heading level={3}>Address Info</Heading>
      <p><span className='font-semibold'>Country:</span> {order.address.country}</p>
      <p><span className='font-semibold'>City:</span> {order.address.city}</p>
      <p><span className='font-semibold'>Address:</span> {order.address.address_text}</p>
    </div>
  )
}

export default AddressInfo