import { CartItemType } from "@/app/lib/types/cartTypes"
import { changeCartItemQuantity } from "@/redux/features/cart/cartThunk"
import { useAppDispatch } from "@/redux/store"
import clsx from "clsx"

export default function ChangeQuantityButton({
    cartItem,
    type,
}: {
    cartItem: CartItemType
    type: 'increment' | 'decrement'
}) {
    const dispatch = useAppDispatch()

    const handleQuantityChange = (cartItemId: number, newQuantity: number) => {
        dispatch(changeCartItemQuantity({ cartItemId, newQuantity }))
    }

    return (
        <button
            onClick={() => {
                const newQuantity = type === 'increment' ? cartItem.quantity + 1 : cartItem.quantity - 1
                handleQuantityChange(cartItem.id, newQuantity)
            }}
            className={clsx(
                // Spacing
                'px-1.5 h-fit md:px-3 md:py-0.5',
                // Transition & Animations
                'transition-all duration-300 ease-in-out',
                'hover:bg-black hover:text-white',
            )}
        >
            {type === 'increment' ? '+' : '-'}
        </button>
    )
}