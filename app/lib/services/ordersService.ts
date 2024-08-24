import { API_URL } from "./api-url"

export const createOrderAPI = async (orderItems: any) => {
    try {
      const res = await fetch(`${API_URL}/orderItems/move-to-orders/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('authToken')}`
        },
        // body: JSON.stringify({
        //   user: Number(localStorage.getItem('userId')),
        //   orderItems,
        // }),
      })
  
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`)
      }
      
      const data = await res.json()
      console.log('order confirmation data', data)
      return data
    } catch (error) {
      console.error('Error adding item to cart:', error)
      throw error
    }
  }