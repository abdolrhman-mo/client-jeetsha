import { createAsyncThunk } from "@reduxjs/toolkit"
import { CartItemType, ProductType } from "@/app/lib/types"
import { addToCartAPI, fetchCartItemsAPI } from "@/app/lib/services/cartService"
import { isAuth } from "@/app/lib/services/authService"

export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async () => {
    let data
    if (isAuth()) {
        data = await fetchCartItemsAPI()
    } else {
        data = JSON.parse(localStorage.getItem('cartItems') || '[]')
    }
    return data
})

export const addToCart = createAsyncThunk('cart/addToCart', async (
    { product, size_text }: { product: ProductType; size_text: string },
    { dispatch }
) => {
    const productSizeQuantity = product.sizes.find(size => size.size_text === size_text)?.quantity || 0
    
    let isAuthVar: boolean = isAuth()
    let cartItems
    if (isAuthVar) {
        cartItems = await fetchCartItemsAPI()
    } else {
        cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]')
    }

    // Check to see if product w selected size is in the cart
    const existingItem = cartItems.find((item: CartItemType) => 
        item.product.name === product.name && item.size === size_text
    )
    let changeQuantity = false
    let cartItem = null

    if (productSizeQuantity > 0) {
        // If item in cart
        if (existingItem) {
            // Quantity of cartItem < product quantity
            if (existingItem.quantity < productSizeQuantity) {
                if (isAuthVar) {
                    cartItem = await addToCartAPI(product.id, size_text)
                } else {
                    existingItem.quantity += 1
                    localStorage.setItem('cartItems', JSON.stringify(cartItems))
                    cartItem = existingItem
                }
                changeQuantity = true
            }
        }
        // If item new to cart 
        else {
            if (isAuthVar) {
                cartItem = await addToCartAPI(product.id, size_text)
            } else {
                let id = 0
                if (cartItems.length > 0) id = cartItems[cartItems.length - 1].id + 1

                cartItem = {
                    id: id,
                    quantity: 1,
                    product: product,
                    size: size_text,
                    totalOrderItemsPrice: 0
                }
                cartItems.push(cartItem)
                localStorage.setItem('cartItems', JSON.stringify(cartItems))
            }
        }
    }
    dispatch(fetchCartItems())
    return { cartItem, changeQuantity }
})

// export const setCartItems = createAsyncThunk('cart/setCartItems', async (
//     cartItems: CartItemType[],
//     { dispatch }
// ) => {
    
//     const data = await setcartite
// })