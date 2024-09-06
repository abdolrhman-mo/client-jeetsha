import { OrderRequest, OrderResponse } from "@/app/lib/types/orderTypes"
import { transformOrderData, transformOrdersList } from "./orderUtility"

const API_URL = process.env.NEXT_PUBLIC_API_URL

// Fetch all orders for the admin
export const fetchAllOrdersAPI = async () => {
    try {
        const res = await fetch(`${API_URL}/orders/admin-view/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('authToken')}`
          }
        })
    
        if (!res.ok) {
          console.error(`Error fetching orders: ${res.statusText}`)
        }
    
        const data = await res.json()

        // console.log('data', data[0])
        
        const transformedOrdersList: any = await transformOrdersList(data)
        
        // console.log('transformed data', transformedOrdersList)
    
        // Remove empty orders(orders with no order items)
        const filteredOrders = transformedOrdersList.filter((order: OrderResponse) => order.order_items.length > 0)
    
        // console.log('filteredOrders', filteredOrders)
        
        // return ordersWithDetails
        return filteredOrders
    
      } catch (error) {
        console.error('Failed to fetch orders:', error)
        throw error // Rethrow the error after logging it
      }
}

// Fetch a specifec order by id
export const fetchAdminOrderByIdAPI = async (orderId: number) => {
  try {
    const res = await fetch(`${API_URL}/orders/admin-view/${orderId}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('authToken')}`
      },
    })

    if (!res.ok) {
      console.error(`Error fetching orders: ${res.statusText}`)
    }

    const order: OrderResponse = await res.json()

    const transformedOrder = await transformOrderData(order)

    return transformedOrder
  } catch (error) {
    console.error('Failed to fetch orders:', error)
    throw error // Rethrow the error after logging it
  }
}

// Change status between pending and delivered
export const changeOrderStatusAPI = async (
  orderId: number,
  state: string,
  orderData: OrderResponse
) => {
    try {
      const res = await fetch(`${API_URL}/orders/admin-view/${orderId}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify({
          status: state,
          addressText: orderData.address.address_text || 'blank',
          order_first_name: orderData.user.first_name || 'blank',
          order_last_name: orderData.user.last_name || 'blank',  
        })
      })
  
      if (!res.ok) {
        console.error(`Error: ${res.status}`)
      }
      
      const data = await res.json()
      console.log('edited order', data)
      return data
    } catch (error) {
      console.error('Error making order:', error)
      throw error
    }
}