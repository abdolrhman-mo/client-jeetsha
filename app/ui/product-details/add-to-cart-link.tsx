'use client'

import { addToCartAPI, fetchCartItemsAPI } from "@/app/lib/services/cartService"
import Button from "../common/button"
import { addItem, changeCartItemQuantity } from "@/lib/features/cart/cartSlice"
import { useAppDispatch } from "@/lib/store"
import { isAuth } from "@/app/lib/services/auth"
import { toggleNavCart } from "@/lib/features/nav/navCartSlice"
import { CartItemType, ProductType } from "@/app/lib/types"

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
                // Check to see if product w selected size is in the cart
                const existingItem = cartItems.find((item: CartItemType) => 
                    item.product.name === product.name && item.size === selectedSize
                )

                const productSizeQuantity = product.sizes.find(size => size.size_text === selectedSize)?.quantity || 0

                if (productSizeQuantity > 0) {
                    if (existingItem) {
                        if (existingItem.quantity < productSizeQuantity) {
                            // If item in cart and quantity of items in cart < quantity of product
                            const itemAdded = await addToCartAPI(product.id, 1, selectedSize)
                            dispatch(changeCartItemQuantity({
                                cartItemId: itemAdded.id, 
                                newQuantity: itemAdded.quantity
                            }))
                            removeSelectedSize()
                            dispatch(toggleNavCart())
                        }
                    } else {
                        // If item not in cart but product quantity > 0
                        const itemAdded = await addToCartAPI(product.id, 1, selectedSize)
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
        } else {
            const quantity = 1
            let string = localStorage.getItem('cartItems') || '[]'
            let cartItems: CartItemType[] = JSON.parse(string)
            
            // Check to see if product w selected size is in the cart
            const existingItem = cartItems.find((item: CartItemType) => 
                item.product.name === product.name && item.size === selectedSize
            )

            const productSizeQuantity = product.sizes.find(size => size.size_text === selectedSize)?.quantity || 0

            if (productSizeQuantity > 0) {
                if (existingItem) {
                    if (existingItem.quantity < productSizeQuantity) {
                        // If item in cart and quantity of items in cart < quantity of product
                        existingItem.quantity += 1
                        localStorage.setItem('cartItems', JSON.stringify(cartItems))
                        
                        dispatch(changeCartItemQuantity({
                            cartItemId: existingItem.id, 
                            newQuantity: existingItem.quantity
                        }))
                        removeSelectedSize()
                        dispatch(toggleNavCart())
                    }
                } else {
                    // If item not in cart but product quantity > 0
                    let id 
                    if (cartItems.length === 0) id = 0
                    else id = cartItems[cartItems.length - 1].id + 1
                    
                    const itemAdded = {
                        id: id,
                        quantity: quantity,
                        product: product,
                        size: selectedSize,
                        totalOrderItemsPrice: 0,
                    }
                    cartItems.push(itemAdded)
                    localStorage.setItem('cartItems', JSON.stringify(cartItems))

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
        }
    }
    
    return <Button theme="light" onClick={addToCart}>add to cart</Button>
}