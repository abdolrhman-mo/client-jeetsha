import { OrderItemType, OrderResponse, OrderType } from "../../types/orderTypes"


// A utility function which takes order data and transform it to orderData typescript
// interface i want
export const transformOrderData = async (data: any) => {
  
  // console.log('order before transformation', data)

  // Get total order price
  let totalPrice: number = 0
  data.order_items.forEach((orderItem: OrderItemType) => {
    totalPrice += orderItem.product.price * orderItem.quantity
  })

  // Transform data
  const transformedData: OrderResponse = {
    id: data.id,
    created_at: data.created_at,
    status: data.status,
    order_items: data.order_items,
    address: {
      country: data.country,
      city: data.city,
      address_text: data.addressText
    },
    user: {
      id: data.user,
      first_name: data.order_first_name || '',
      last_name: data.order_last_name || '',
      phone_number: data.phone_number,
    },
    totalOrderPrice: totalPrice
  }

  // console.log('order after transformation', transformedData)

  return transformedData
}

export const transformOrdersList = async (data: any) => {
  const transformedOrdersList: any = []
  data.forEach(async (order: any) => {
    const test = await transformOrderData(order)
    transformedOrdersList.push(test)
  })
  return transformedOrdersList
}