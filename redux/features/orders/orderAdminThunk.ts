import { changeOrderStatusAPI, fetchAdminOrderByIdAPI, fetchAllOrdersAPI } from "@/app/lib/services/orders/orderAdminService"
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
    state: 'pending' | 'delivered' | 'canceled'
    orderData: OrderResponse
  },
  { dispatch }
) => {
  const newState: 'pending' | 'delivered' = state === 'pending' ? 'delivered' : 'pending'
  await changeOrderStatusAPI(orderId, newState, orderData)

  dispatch(fetchOrderInDetailPage({ orderId }))
  dispatch(fetchAllOrders())
  return { orderId, newState }
})

export const fetchOrderInDetailPage = createAsyncThunk('orderAdmin/fetchOrderInDetailPage', async (
  { orderId }: { orderId: number }
) => {
  const order: OrderResponse = await fetchAdminOrderByIdAPI(orderId)

  return order
})