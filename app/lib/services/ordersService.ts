import { API_URL } from "./api-url"

export const createOrderAPI = async () => {
    try {
      const res = await fetch(`${API_URL}/orderItems/move-to-orders/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('authToken')}`
        },
      })
  
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`)
      }
      
      const data = await res.json()
      console.log('order confirmation data', data)
      return data
    } catch (error) {
      console.error('Error making order:', error)
      throw error
    }
}

export const fetchOrdersAPI = async () => {
  try {
    const res = await fetch(`${API_URL}/orders/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('authToken')}`
      },
    })

    if (!res.ok) {
      throw new Error(`Error fetching orders: ${res.statusText}`)
    }

    const data = await res.json()

    return data 
  } catch (error) {
    console.error('Failed to fetch orders:', error)
    throw error // Rethrow the error after logging it
  }
}