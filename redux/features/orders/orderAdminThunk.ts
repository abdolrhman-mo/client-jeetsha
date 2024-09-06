import { changeOrderStatusAPI, fetchAllOrdersAPI } from "@/app/lib/services/orders/orderAdminService"
import { OrderResponse } from "@/app/lib/types/orderTypes"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchAllOrders = createAsyncThunk('orderAdmin/fethcAllOrders', async () => {
  const fetchedOrders = await fetchAllOrdersAPI()
  const sortedOrders = (fetchedOrders || []).sort((a: any, b: any) => 
    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  )

  return sortedOrders
})

export const changeOrderStatus = createAsyncThunk('orderAdmin/changeOrderStatus', async (
  {
    orderId,
    state,
    orderData,
  }: {
    orderId: number
    state: 'pending' | 'delivered'
    orderData: OrderResponse
  }
) => {
  const newState: 'pending' | 'delivered' = state === 'pending' ? 'delivered' : 'pending'
  await changeOrderStatusAPI(orderId, newState, orderData)

  return { orderId, newState }
})