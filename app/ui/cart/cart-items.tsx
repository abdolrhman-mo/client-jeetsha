import { isAuth } from "@/app/lib/services/auth"
import { fetchCartItemsAPI } from "@/app/lib/services/cartService"
import CartItem from "@/app/ui/cart/cart-item"
import { addItem } from "@/lib/features/cart/cartSlice"
import { RootState } from "@/lib/store"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function CartItems() {
    const dispatch = useDispatch()
    const cartItems = useSelector((state: RootState) => state.cart.items)

    useEffect(() => {
        if (isAuth()) {
            const fetchData = async () => {
                const fetchedItems = await fetchCartItemsAPI()
                fetchedItems.map((cartItem: any, i: number) => {
                    dispatch(addItem(cartItem))
                })
            }
            fetchData()
        } else {
            const string = localStorage.getItem('cartItems') || '[]'
            JSON.parse(string).map((cartItem: any) => {
                dispatch(addItem(cartItem))
            })
        }
        let total: number = 0
        cartItems.map((item: any) => {
            total += Number(item.price)
        })
        // setTotalPrice(total)
    }, [])
    // const items = 

    return (
        <>
            {
                (cartItems.length === 0) ? (
                    <p>Your cart is currently empty.</p>
                ) : (
                    <>
                        {
                            cartItems.slice().reverse().map((item, i) =>
                                <CartItem key={i} item={item} />
                            )
                        }
                    </>
                )
            }
        </>
    )
}