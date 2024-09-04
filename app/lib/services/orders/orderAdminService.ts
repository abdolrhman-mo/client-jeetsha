import { OrderType } from "@/app/lib/types/orderTypes"
import { addDetailsToOrders } from "./orderUtility"

const API_URL = process.env.NEXT_PUBLIC_API_URL

// Fetch all orders for the admin
export const fetchAllOrdersAPI = async () => {
    try {
        const res = await fetch(`${API_URL}/orders/users-view/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('authToken')}`
          }
        })
    
        if (!res.ok) {
          console.error(`Error fetching orders: ${res.statusText}`)
        }
    
        const data = await res.json() || []
    
        // Remove empty orders(orders with no order items)
        const filteredOrders = data.filter((order: OrderType) => order.order_items.length > 0)
    
        // Add sizing details(size text instead of size id)
        const ordersWithDetails = await addDetailsToOrders(filteredOrders)
        
        return ordersWithDetails
    
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

    const order: OrderType = await res.json()

    // Add sizing details(size text instead of size id)
    const ordersWithDetails = await addDetailsToOrders([order])
    const orderWithDetails = ordersWithDetails[0]

    return orderWithDetails
  } catch (error) {
    console.error('Failed to fetch orders:', error)
    throw error // Rethrow the error after logging it
  }
}

// Change status between pending and delivered
export const changeOrderStatusAPI = async (
  orderId: number,
  state: string
) => {
    try {
      const res = await fetch(`${API_URL}/orders/admin-view/${orderId}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify({
          id: orderId,
          status: state
        })
      })
  
      if (!res.ok) {
        console.error(`Error: ${res.status}`)
      }
      
      const data = await res.json()
      return data
    } catch (error) {
      console.error('Error making order:', error)
      throw error
    }
}