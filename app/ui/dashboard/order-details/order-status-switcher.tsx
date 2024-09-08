import { NextPage } from 'next'
import Button from '../../common/button'
import { OrderResponse } from '@/app/lib/types/orderTypes'
import clsx from 'clsx'
import { useAppDispatch } from '@/redux/store'
import { changeOrderStatus } from '@/redux/features/orders/orderAdminThunk'

interface Props {order: OrderResponse}

const OrderStatusSwitcher: NextPage<Props> = ({order}) => {
  const disptach = useAppDispatch()
  
  const handleChangeState = async () => {
    if (order) {
      disptach(changeOrderStatus({ orderId: order.id, state: order?.status, orderData: order }))
    }
  }

  return (
    <div className="pt-4">
      <Button
        className={clsx(
          "!w-fit text-center !py-2 px-3 rounded-md text-white font-semibold text-sm mx-auto", 
          "transition duration-300 ease-in-out",
          order.status === "pending"
            ? "bg-green-500 hover:bg-green-600"
            : "bg-yellow-500 hover:bg-yellow-600"
        )}
        onClick={handleChangeState}
      >
        {order.status === "pending" ? "Move to Delivered" : "Move Back to Pending"}
      </Button>
    </div>
  )
}

export default OrderStatusSwitcher