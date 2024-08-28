import { CartItemType } from "../types"
import { API_URL } from "./api-url"
import { fetchProductsAPI } from "./productsService"

const fetchSizesAPI = async () => {
  try {
    const res = await fetch(`${API_URL}/size/`, {
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
    const data = await res.json()
    
    return data
  } catch (error) {
    console.error('Error fetching sizes:', error)
    return []
  }
}

const changeSizes = async (data: CartItemType[]) => {
  // Replace size id with size text
  const cartItems = data
  const sizes = await fetchSizesAPI()
  const sizesMap = new Map(sizes.map((size: any) => [size.id, size.size_text]))

  let modifiedData: any[] = cartItems.map((cartItem: CartItemType) => {
    let sizeValue = sizesMap.get(cartItem.size) || ''

    return {
      id: cartItem.id,
      product: cartItem.product,
      quantity: cartItem.quantity,
      size: sizeValue,
      totalOrderItemsPrice: cartItem.totalOrderItemsPrice
    }
  })

  // console.log('modifiedData',modifiedData)

  return modifiedData
}

export const fetchSizeByIdAPI = async (sizeId: number) => {
  try {
    const res = await fetch(`${API_URL}/size/${sizeId}/`, {
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
    const data = await res.json()
    
    return data
  } catch (error) {
    console.error('Error fetching sizes:', error)
    return []
  }
}

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

export const addToCartAPI = async (product: number, quantity: number, selectedSize: string) => {
  try {
    const res = await fetch(`${API_URL}/orderItems/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('authToken')}`
      },
      body: JSON.stringify({
        product_id: product,
        quantity,
        size_text: selectedSize,
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

export const removeCartItemAPI = async (cartItemId: number) => {
  try {
    const res = await fetch(`${API_URL}/orderItems/${cartItemId}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if required, such as authorization tokens
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
  if (newQuantity < 1) {
    // TODO: remove from cart
    return
  }
  // console.log('new quantity going to server:', newQuantity)
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