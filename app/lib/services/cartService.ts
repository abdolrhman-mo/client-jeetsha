import { CartItemType } from "../types/cartTypes"
import { changeSizes } from "./products/productUtils"

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const fetchCartItemsAPI = async () => {
  try {
    const res = await fetch(`${API_URL}/orderItems/cart/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('authToken')}`,
      },
    })
    if (!res.ok) {
      console.error(`Error fetching cart items: ${res.statusText}`)
      return []
    }
    let data = await res.json()
    data = await changeSizes(data)
    return data
  } catch (error) {
    console.error('Error fetching cart items:', error)
    return []
  }
}

export const addToCartAPI = async (product_id: number, size_text: string) => {
  try {
    const res = await fetch(`${API_URL}/orderItems/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('authToken')}`
      },
      body: JSON.stringify({
        product_id,
        quantity: 1,
        size_text,
        user: localStorage.getItem('userId'),
      }),
    })
    if (!res.ok) {
      console.error(`Error: ${res.status}`)
      return []
    }
    let data = await res.json()
    
    data = await changeSizes([data])
    
    return data[0]
  } catch (error) {
    console.error('Error adding item to cart:', error)
    return []
  }
}

export const removeItemFromCartAPI = async (cartItemId: number) => {
  try {
    const res = await fetch(`${API_URL}/orderItems/${cartItemId}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('authToken')}`,
      },
    })
    if (!res.ok) {
      console.error(`Error removing cart item: ${res.statusText}`)
      return []
    }
    // No need to return anything if the delete operation is successful
  } catch (error) {
    console.error('Error removing cart item:', error)
    return []
  }
}

export const changeCartItemsQuantityAPI = async (
  cartItemId: number,
  newQuantity: number
) => {
  try {
    const res = await fetch(`${API_URL}/orderItems/${cartItemId}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('authToken')}`,
      },
      body: JSON.stringify({
        quantity: newQuantity
      })
    })
    if (!res.ok) {
      console.error('Faild to update cart item quantity')
      return []
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.error('Error updating quantity: ', error)
    return []
  }
}

export const syncCartWithServerAPI = async (cartItems: CartItemType[]): Promise<void> => {
  for (const item of cartItems) {
    await addToCartAPI(item.product.id, item.size)
  }
}