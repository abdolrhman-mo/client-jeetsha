import clsx from "clsx"
import Image from "next/image"
import { useDispatch } from "react-redux"
import QuantityModifier from "./quantity-modifier"
import { CartItemType } from "@/app/lib/types/cartTypes"
import { useAppDispatch } from "@/redux/store"
import { removeItemFromCart } from "@/redux/features/cart/cartThunk"

export default function CartItem({
    cartItem,
}: {
    cartItem: CartItemType
}) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    const dispatch: any = useAppDispatch()

    const product = cartItem.product

    const sizes: any = {
        'xs': 'x small',
        's': 'small',
        'm': 'medium',
        'l': 'large',
        'xl': 'x large',
    }

    const handleRemoveItem = (cartItemId: number) => {
        dispatch(removeItemFromCart({ cartItemId }))
    }

    return (
        product && (
            <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center">
                    <Image
                        className="max-h-56 object-contain"
                        // src={product.image}
                        src={product.image.startsWith('http') ? product.image : `${API_URL + product.image}`}
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
    )
}