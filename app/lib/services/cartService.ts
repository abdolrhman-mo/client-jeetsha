import { API_URL } from "./api-url"
import { fetchProductsAPI } from "./productsService"

export const fetchCartItemsAPI = async () => {
  const token = localStorage.getItem('authToken')
  try {
    const res = await fetch(`${API_URL}/orderItems/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if required, such as authorization tokens
        'Authorization': `Token ${token}`,
      },
    })

    if (!res.ok) {
      throw new Error(`Error fetching cart items: ${res.statusText}`)
    }

    const data = await res.json()

    // Replace product id with actual product
    const cartItems = data
    const products = await fetchProductsAPI()
    const productsMap = new Map(products.map((product: any) => [product.id, product]))
    let modifiedData: any = []
    cartItems.map((cartItem: any) => {
        let newCartItem = {
            id: cartItem.id,
            product: productsMap.get(cartItem.product) || null,
            quantity: cartItem.quantity
        }
        modifiedData.push(newCartItem)
    })

    return modifiedData

  } catch (error) {
    console.error('Error fetching cart items:', error)
    throw error
  }
}

export const addToCartAPI = async (product: number, quantity: number) => {
  try {
    const res = await fetch(`${API_URL}/orderItems/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('authToken')}`
      },
      body: JSON.stringify({
        product,
        quantity,
        user: localStorage.getItem('userId'),
      }),
    })

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`)
    }

    const data = await res.json()
    console.log('data added to cart api', data)
    return data
  } catch (error) {
    console.error('Error adding item to cart:', error)
    throw error
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
      throw new Error(`Error removing cart item: ${res.statusText}`)
    }

    // No need to return anything if the delete operation is successful
  } catch (error) {
    console.error('Error removing cart item:', error)
    throw error
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
      throw new Error('Faild to update cart item quantity')
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.error('Error updating quantity: ', error)
  }
}