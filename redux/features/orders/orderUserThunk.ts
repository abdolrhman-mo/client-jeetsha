import { abdoRedirect } from "@/app/lib/actions"
import { isAuth } from "@/app/lib/services/auth/authService"
import {
    addOrderDataAPI, 
    addOrderItemToGuestOrderAPI, 
    createBuyItNowOrderAPI, 
    createGuestOrderAPI,
    createOrderAPI,
    createOrderItemAPI,
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
    console.log('order placed after transformation', order)
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
  // Create buy it now order
  // let order = await createBuyItNowOrderAPI(
  //   productId,
  //   size_text,
  // )
  // console.log('buy it now order', order)
  // const orderId = order.id
  
  // Create order

  const order = await createOrderAPI(orderData)
  const orderId = order.id

  console.log('my created order', order)

  // Create order item with order id

  const orderItem = await createOrderItemAPI(orderId, productId, size_text)
  
  console.log('created aslo order item', orderItem)
  
  
  // // Add data to order

  // await addOrderDataAPI(orderId, orderData)

  
  // POST ORDER UPDATES
  
  await updateUserData(orderData)
  
  abdoRedirect(`/order-confirmation?orderId=${orderId}`)

  return order
})