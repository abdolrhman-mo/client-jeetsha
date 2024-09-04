import { CartItemType } from "../../types/cartTypes"
import { OrderRequest, OrderType } from "../../types/orderTypes"
import { addDetailsToOrders, transformOrderData } from "./orderUtility"

const API_URL = process.env.NEXT_PUBLIC_API_URL

// Fetch user orders
export const fetchUserOrdersAPI = async () => {
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

export const placeUserOrderAPI = async () => {
  try {
    const res = await fetch(`${API_URL}/orderItems/move-to-orders/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('authToken')}`
      },
    })

    if (!res.ok) {
      console.error(`Error: ${res.status}`)
    }

    const order = await res.json()

    const transformedOrder = transformOrderData(order)
    
    return transformedOrder
  } catch (error) {
    console.error('Error making order:', error)
    throw error
  }
}

export const addOrderDataAPI = async (
  orderId: number,
  orderData: OrderRequest,
) => {
    try {
      const res = await fetch(`${API_URL}/orders/users-view/${orderId}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify({
          country: orderData.address.country,
          city: orderData.address.city,
          addressText: orderData.address.address_text,
          phone_number: orderData.user.phone_number,
          // TODO: Add first name and last name
        })
      })
  
      if (!res.ok) {
        console.error(`Error: ${res.status}`)
      }
      
      const order = await res.json()

      const transformedOrder = transformOrderData(order)
      
      return transformedOrder
    } catch (error) {
      console.error('Error making order:', error)
      throw error
    }
}

export const createBuyItNowOrderAPI = async (
  product_id: number,
  size_text: string,
  user: null | number,
  order: number,
) => {
  try {
    const body: any = {
      product_id,
      size_text,
      order,
    }

    if (user !== null) {
      body.user = user
    }
    
    const res = await fetch(`${API_URL}/orderItems/buy-it-now/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
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


// Guest functions

export const createGuestOrderAPI = async (
  orderData: OrderRequest
) => {
  try {
    const res = await fetch(`${API_URL}/orders/users-view/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country: orderData.address.country,
        city: orderData.address.city,
        addressText: orderData.address.address_text,
        phone_number: orderData.user.phone_number,
        // TODO: Add first name and last name
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

export const addOrderItemToGuestOrderAPI = async (orderId: number, orderItem: CartItemType) => {
  try {
    const res = await fetch(`${API_URL}/orderItems/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order: orderId,
        prdocut: orderItem.product,
        quantity: orderItem.quantity,
        size_text: orderItem.size,
        product_id: orderItem.product.id
      })
    })

    if (!res.ok) {
      console.error(`Error: ${res.status}`)
    }
    
    const data = await res.json()
    console.log('order item added', data)
    return data
  } catch (error) {
    console.error('Error making order:', error)
    throw error
  }
}