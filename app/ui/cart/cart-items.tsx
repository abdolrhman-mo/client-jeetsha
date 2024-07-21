import { cartItems } from "@/app/lib/placeholder-data"
import CartItem from "@/app/ui/cart/cart-item"

export default function CartItems() {
    return (
        <>
            {
                (cartItems.length === 0) ? (
                    <p>Your cart is currently empty.</p>
                ) : (
                    cartItems.map(cartItem =>
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    )
                )
            }
        </>
    )
}