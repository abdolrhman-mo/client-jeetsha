'use client'

import { addToCartAPI, fetchCartItemsAPI } from "@/app/lib/services/cartService"
import Button from "../common/button"
import { addItem, changeCartItemQuantity } from "@/lib/features/cart/cartSlice"
import { useAppDispatch } from "@/lib/store"
import { isAuth } from "@/app/lib/services/auth"
import { toggleNavCart } from "@/lib/features/nav/navCartSlice"
import { CartItemType, ProductType } from "@/app/lib/types"
import { fetchProductsAPI } from "@/app/lib/services/productsService"

export default function AddToCartLink({
    product,
    selectedSize,
    onClick,
    removeSelectedSize,
}: {
    product: ProductType
    selectedSize: string
    onClick: any
    removeSelectedSize: any
}) {
    const dispatch = useAppDispatch()

    const addToCart = async () => {
        onClick()
        if (isAuth()) {
            const quantity = 1
            try {
                const cartItems = await fetchCartItemsAPI()
                // check to see if product w selected size is in the cart
                const existingItem = cartItems.find((item: CartItemType) => 
                    item.product.name === product.name && item.size === selectedSize
                )

                const productSizeQuantity = product.sizes.find(size => size.size_text === selectedSize)?.quantity || 0

                if (productSizeQuantity > 0) {
                    if (existingItem) {
                        if (existingItem.quantity < productSizeQuantity) {
                            // If item in cart and quantity of items in cart < quantity of product
                            const itemAdded = await addToCartAPI(product.id, 1, selectedSize)
                            console.log('itemAdded', itemAdded)
                            dispatch(changeCartItemQuantity({
                                cartItemId: itemAdded.id, 
                                newQuantity: itemAdded.quantity
                            }))
                            removeSelectedSize()
                            dispatch(toggleNavCart())
                        }
                    } else {
                        const itemAdded = await addToCartAPI(product.id, 1, selectedSize)
                        // If item not in cart but product quantity > 0
                        dispatch(addItem({
                            id: itemAdded.id,
                            product,
                            quantity,
                            size: selectedSize,
                            totalOrderItemsPrice: itemAdded.totalOrderItemsPrice
                        }))
                        removeSelectedSize()
                        dispatch(toggleNavCart())
                    }
                }
            } catch (error) {
                console.error('Failed to add product to cart:', error)
                alert('Failed to add product to cart.')
            }
        }
        else {
            const quantity = 1
            let string = localStorage.getItem('cartItems') || '[]'
            let cartItems = JSON.parse(string)
            
            let cartItem = {
                quantity: quantity,
                product: product
            }
            console.log('cartItems', cartItems)
            if (cartItems !== null || cartItems.length !== 0) {
                const isItemInCart = cartItems.some((item: any) => item.product.id === cartItem.product.id)
                if (!isItemInCart) {
                    cartItems.push(cartItem)
                    localStorage.setItem('cartItems', JSON.stringify(cartItems))
                    // dispatch(addItem({ id: null, product, quantity, size: selectedSize }))
                }
            } else {
                cartItems.push(cartItem)
                localStorage.setItem('cartItems', JSON.stringify(cartItems))
                // dispatch(addItem({ id: null, product, quantity, size: selectedSize }))
            }
            
            dispatch(toggleNavCart())
        }
    }
    
    return <Button theme="light" onClick={addToCart}>add to cart</Button>
}