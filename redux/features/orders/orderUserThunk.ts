import { abdoRedirect } from "@/app/lib/actions"
import { isAuth } from "@/app/lib/services/auth/authService"
import {
    addOrderDataAPI, 
    addOrderItemToGuestOrderAPI, 
    createBuyItNowOrderAPI, 
    createGuestOrderAPI,
    fetchUserOrdersAPI,
    placeUserOrderAPI, 
} from "@/app/lib/services/orders/orderUserService"
import { CartItemType } from "@/app/lib/types/cartTypes"
import { OrderRequest, OrderResponse } from "@/app/lib/types/orderTypes"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { updateUserData } from "./orderUtility"
import { ROUTES } from "@/app/lib/constants/routes"

export const fetchUserOrders = createAsyncThunk('order/fetchUserOrders', async () => {
  const data = await fetchUserOrdersAPI()
  return data
})

export const placeUserOrder = createAsyncThunk('order/placeUserOrder', async (
  { orderData }: { orderData: OrderRequest },
  { dispatch }
) => {
  let order: OrderResponse
  let orderId: number
  if (isAuth()) {
    
    // CREATING ORDER

    order = await placeUserOrderAPI()
    console.log('order placed', order)
    orderId = order.id
    
    // Add new address data and user data to order using patch request
    const orderWithData = await addOrderDataAPI(orderId, orderData)
    console.log('added data to order', orderWithData)
  } else {

    // CREATING GUEST ORDER
  
    order = await createGuestOrderAPI(orderData)
    console.log('guest order placed', order)
    orderId = order.id
    
    // AddING orderItems to order
    const orderItems = JSON.parse(localStorage.getItem('cartItems') || '[]')
    orderItems.forEach(async (orderItem: CartItemType) => 
      await addOrderItemToGuestOrderAPI(orderId, orderItem)
    )
    localStorage.removeItem('cartItems')
  }

  // POST ORDER UPDATES

  await updateUserData(orderData)

  abdoRedirect(ROUTES.ORDER_CONFIRMATION(orderId))

  return order
})

export const placeBuyItNowOrder = createAsyncThunk('order/placeBuyItNowOrder', async (
  {
    orderData,
    productId,
    size_text,
  }: {
    orderData: OrderRequest
    productId: number
    size_text: string
  },
  { dispatch }
) => {
  const isAuthVar = isAuth()
  
  // Create order
  let order
  order = await createGuestOrderAPI(orderData)

  // Add order item to created order
  const orderId = order.id
  order = await createBuyItNowOrderAPI(
    productId,
    size_text,
    isAuthVar ? Number(localStorage.getItem('userId')) : null, 
    orderId
  )
  console.log('buy it now order', order)

  // POST ORDER UPDATES
  
  await updateUserData(orderData)
  
  abdoRedirect(`/order-confirmation?orderId=${orderId}`)

  return order
})