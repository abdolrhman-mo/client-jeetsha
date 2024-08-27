import clsx from "clsx"
import Image from "next/image"
import { useDispatch } from "react-redux"
import { removeItem } from "@/lib/features/cart/cartSlice"
import { removeCartItemAPI } from "@/app/lib/services/cartService"
import { isAuth } from "@/app/lib/services/auth"
import QuantityModifier from "./quantity-modifier"
import { CartItemType } from "@/app/lib/types"

export default function CartItem({
    cartItem,
}: {
    cartItem: CartItemType
}) {
    const dispatch: any = useDispatch()

    const product = cartItem.product

    const sizes: any = {
        'xs': 'x small',
        's': 'small',
        'm': 'medium',
        'l': 'large',
        'xl': 'x large',
    }

    const handleRemoveItem = (cartItemId: number) => {
        if (isAuth()) {
            removeCartItemAPI(cartItemId)
        } else {
            const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]')
            const updatedCartItems = cartItems.filter((item: any) => 
                item.product.id !== cartItemId
            )
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
        }
        dispatch(removeItem(cartItemId))
    }

    return (
        <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center">
                <Image
                    className="max-h-56 object-contain"
                    // src={product.image}
                    src={`http://localhost:8000${product.image}`}
                    width={500}
                    height={500}
                    alt={product.name}
                />
            </div>
            <div className='flex justify-around flex-col'>
                <div>
                    <p
                        className='capitalize pb-1'
                    >
                        {product.name}
                    </p>
                    <p className="pb-1">
                        <span
                            className='font-bold'
                            >
                            Size: 
                        </span>
                        <span className="uppercase text-xs"> {sizes[cartItem.size]} </span>
                    </p>
                </div>
                <QuantityModifier cartItem={cartItem} />
                <p dir="rtl">
                    {product.price} EGP
                </p>
                <button
                    onClick={() => handleRemoveItem(cartItem.id)}
                    className={clsx(
                        // Layout & Sizing
                        'inline-block w-full tracking-widest',
                        // Spacing
                        'py-1 px-4',
                        // Typography
                        'text-center placeholder:text-sm text-sm capitalize font-medium',
                        // Transitions
                        'transition-all duration-300 ease-in-out',
                        // Interactivity
                        'cursor-pointer',
                        // Typography
                        'text-white border-none hover:opacity-85 text-xs lowercase',
                        // Background
                        'bg-red-400'
                    )}
                >
                    remove
                </button>
            </div>
        </div>
    )
}