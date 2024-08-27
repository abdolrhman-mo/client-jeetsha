import { isAuth } from "@/app/lib/services/auth"
import { fetchCartItemsAPI } from "@/app/lib/services/cartService"
import { CartItemType } from "@/app/lib/types"
import { addItem, setCartItems, setTotalPrice } from "@/lib/features/cart/cartSlice"
import { RootState } from "@/lib/store"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CartItem from "./cart-item/cart-item"
import { selectNavCart } from "@/lib/features/nav/navCartSlice"

export default function CartItems() {
    const dispatch = useDispatch()
    const cartItems = useSelector((state: RootState) => state.cart.items)
    const navCart = useSelector(selectNavCart)

    useEffect(() => {
        const fetchData = async () => {
            if (isAuth()) {
                if (cartItems.length === 0) {
                    try {
                        const fetchedItems = await fetchCartItemsAPI()
                        if (fetchedItems.length !== 0) {
                            dispatch(setCartItems(fetchedItems))
                        }
                    } catch (error) {
                        console.error('Faild to fetch cart items:', error)
                    }
                }
            }
        }
        fetchData()
    }, [])

    return (
        <>
            {
                (cartItems.length === 0 || cartItems === null) ? (
                    <p>Your cart is currently empty.</p>
                ) : (
                    <>
                        {
                            cartItems.slice().reverse().map((cartItem, i) => {
                                return <CartItem key={i} cartItem={cartItem} />
                            })
                        }
                    </>
                )
            }
        </>
    )
}