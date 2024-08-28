import { OrderType } from "../types"
import { fetchAddressesByIdAPI } from "./address"
import { API_URL } from "./api-url"
import { fetchSizeByIdAPI } from "./cartService"

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
      console.error(`Error fetching orders: ${res.statusText}`)
    }

    const data = await res.json()

    const filteredOrders = data.filter((order: OrderType) => order.order_items.length > 0)

    const ordersWithDetails = await Promise.all(filteredOrders.map(async (order: OrderType) => {
      // Fetch address details if available
      if (order.address) {
        try {
          const address = await fetchAddressesByIdAPI(Number(order.address))
          order.address = address.addressText
        } catch (error) {
          console.error(`Failed to fetch address for order ${order.id}:`, error)
        }
      }

      // Fetch item details including size
      if (order.order_items.length > 0) {
        try {
          const itemsWithDetails = await Promise.all(order.order_items.map(async (item) => {
            const product = item.product
            let size = null
            
            // Fetch size details if available
            if (item.size) {
              try {
                size = await fetchSizeByIdAPI(item.size)
              } catch (error) {
                console.error(`Failed to fetch size details for item ${item.id}:`, error)
              }
            }
            
            return {
              ...item,
              product,
              size: size.size_text
            }
          }))
          order.order_items = itemsWithDetails
        } catch (error) {
          console.error(`Failed to fetch item details for order ${order.id}:`, error)
        }
      }

      return order
    }))

    return ordersWithDetails
  } catch (error) {
    console.error('Failed to fetch orders:', error)
    throw error // Rethrow the error after logging it
  }
}

export const fetchOrderByIdAPI = async (orderId: number) => {
  try {
    const res = await fetch(`${API_URL}/orders/${orderId}/`, {
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

      // Fetch address details if available
    if (order.address) {
      try {
        const address = await fetchAddressesByIdAPI(Number(order.address))
        order.address = address
      } catch (error) {
        console.error(`Failed to fetch address for order ${order.id}:`, error)
      }
    }

    // Fetch item details including size
    if (order.order_items.length > 0) {
      try {
        const itemsWithDetails = await Promise.all(order.order_items.map(async (item) => {
          const product = item.product
          let size = null
          
          // Fetch size details if available
          if (item.size) {
            try {
              size = await fetchSizeByIdAPI(item.size)
            } catch (error) {
              console.error(`Failed to fetch size details for item ${item.id}:`, error)
            }
          }
          
          return {
            ...item,
            product,
            size: size.size_text
          }
        }))
        order.order_items = itemsWithDetails
      } catch (error) {
        console.error(`Failed to fetch item details for order ${order.id}:`, error)
      }
    }

    return order
  } catch (error) {
    console.error('Failed to fetch orders:', error)
    throw error // Rethrow the error after logging it
  }
}

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
        console.error(`Error: ${res.status}`)
      }
      
      const data = await res.json()
      // console.log('order confirmation data', data)
      return data
    } catch (error) {
      console.error('Error making order:', error)
      throw error
    }
}

export const addAddressToOrderAPI = async (
  orderId: number,
  addressId: number
) => {
    try {
      const res = await fetch(`${API_URL}/orders/admin-view/${orderId}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify({
          user: localStorage.getItem('userId'),
          address: addressId
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

export const changeOrderStateAPI = async (
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