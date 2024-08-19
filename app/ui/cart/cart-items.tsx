import CartItem from "@/app/ui/cart/cart-item"

export default function CartItems({
    items,
}: {
    items: any
}) {
    return (
        <>
            {
                (items.length === 0) ? (
                    <p>Your cart is currently empty.</p>
                ) : (
                    items.map((item: any) =>
                        <CartItem key={item.id} cartItem={item} />
                    )
                )
            }
        </>
    )
}