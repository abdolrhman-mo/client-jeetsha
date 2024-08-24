'use client'

import { addToCartAPI } from "@/app/lib/services/cartService"
import Button from "../common/button"
import { addItem } from "@/lib/features/cart/cartSlice"
import { useEffect } from "react"
import { useAppDispatch } from "@/lib/store"
import { isAuth } from "@/app/lib/services/auth"
import { toggleNavCart } from "@/lib/features/nav/navCartSlice"

export default function AddToCartLink({
    product,
}: {
    product: any
}) {
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        // dispatch(fetchCartItems())
    }, [dispatch])

    let addToCart = async () => {
        if (isAuth()) {
            const quantity = 1
            try {
                await addToCartAPI(product.id, quantity)
                dispatch(addItem({ quantity, product }))

                dispatch(toggleNavCart())
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
                    dispatch(addItem({ quantity, product }))
                }
            } else {
                cartItems.push(cartItem)
                localStorage.setItem('cartItems', JSON.stringify(cartItems))
                dispatch(addItem({ quantity, product }))
            }
            
            dispatch(toggleNavCart())
        }
    }
    
    return <Button theme="light" onClick={addToCart}>add to cart</Button>
}