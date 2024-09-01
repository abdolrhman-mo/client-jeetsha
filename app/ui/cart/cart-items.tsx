import { isAuth } from "@/app/lib/services/authService"
import { fetchCartItemsAPI } from "@/app/lib/services/cartService"
import { CartItemType } from "@/app/lib/types"
import { addItem, setCartItems, setTotalPrice } from "@/redux/features/cart/cartSlice"
import { RootState, useAppDispatch } from "@/redux/store"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CartItem from "./cart-item/cart-item"
import { selectNavCart } from "@/redux/features/nav/navCartSlice"
import { useAppSelector } from "@/redux/hooks"
import { fetchCartItems } from "@/redux/features/cart/cartThunk"

export default function CartItems() {
    // const dispatch = useDispatch()
    // const cartItems = useSelector((state: RootState) => state.cart.items)
    const dispatch = useAppDispatch()
    const cartItems = useAppSelector(state => state.cart.items)
    const status = useAppSelector(state => state.cart.status)
    const error = useAppSelector(state => state.cart.error)

    useEffect(() => {
        // if (isAuth()):
        dispatch(fetchCartItems())


        const fetchData = async () => {
            if (isAuth()) {
                // if (cartItems.length === 0) {
                //     try {
                //         const fetchedItems = await fetchCartItemsAPI()
                //         if (fetchedItems.length > 0) {
                //             dispatch(setCartItems(fetchedItems))
                //         }
                //     } catch (error) {
                //         console.error('Faild to fetch cart items:', error)
                //     }
                // }
            } else {
                // if (cartItems.length === 0) {
                //     const string = localStorage.getItem('cartItems') || '[]'
                //     const fetchedCartItems = JSON.parse(string)
                //     if (fetchedCartItems.length > 0) {
                //         dispatch(setCartItems(fetchedCartItems))
                //     }
                // }
            }
        }
        fetchData()
    }, [dispatch])

    return (
        <>
            {status === 'loading' && <p>Loading cart...</p>}
            {status === 'failed' && <p>Error: {error}</p>}
            {Array.isArray(cartItems) && cartItems.length === 0 ? (
                    <p>Your cart is currently empty.</p>
                ) : (
                    <>
                        {Array.isArray(cartItems) && cartItems.slice().reverse().map((cartItem: CartItemType, i: number) => {
                            return <CartItem key={i} cartItem={cartItem} />
                        })}
                    </>
            )}
        </>
    )
}