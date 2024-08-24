import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import Button from "../common/button"
import { useDispatch } from "react-redux"
import { changeCartItemQuantity, removeItem } from "@/lib/features/cart/cartSlice"
import { changeCartItemsQuantityAPI, removeCartItemAPI } from "@/app/lib/services/cartService"
import { isAuth } from "@/app/lib/services/auth"

export default function CartItem({
    item,
}: {
    item: any
}) {
    const dispatch: any = useDispatch()
    const cartItem = item.product

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

    const handleQuantityChange = (cartItemId: number, newQuantity: number, productId: number) => {
        if (isAuth()) {
            changeCartItemsQuantityAPI(cartItemId, newQuantity)
        } else {
            const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]')
            const updatedCartItems = cartItems.map((item: any) => {
                if (item.product.id === cartItemId) {
                    return { ...item, quantity: newQuantity }
                }
                return item
            })
          
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
        }
        dispatch(changeCartItemQuantity({
            cartItemId: productId, 
            newQuantity
        }))
    }

    return (
        <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center">
                <Image
                    className="max-h-56 object-contain"
                    src={cartItem.image}
                    width={500}
                    height={500}
                    alt={cartItem.name}
                />
            </div>
            <div className='flex justify-around flex-col'>
                <div>
                    <p
                        className='capitalize pb-1'
                        >
                        {cartItem.name}
                    </p>
                    <p className="pb-1">
                        <span
                            className='font-bold'
                            >
                            Size: 
                        </span>
                        Medium
                    </p>
                </div>
                <div className="flex justify-between">
                    <div className="border flex h-fit">
                        <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1, item.product.id)}
                            className={clsx(
                                // Spacing
                                'px-1.5 h-fit md:px-3 md:py-0.5',
                                // Transition & Animations
                                'transition-all duration-300 ease-in-out',
                                'hover:bg-black hover:text-white',
                            )}
                            >
                            -
                        </button>
                        <p
                            className={clsx(
                                'h-fit md:px-2'
                            )}
                        >
                            {item.quantity}
                        </p>
                        <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1, item.product.id)}
                            className={clsx(
                                // Spacing
                                'px-1.5 h-fit md:px-3 md:py-0.5',
                                // Transition & Animations
                                'transition-all duration-300 ease-in-out',
                                'hover:bg-black hover:text-white',
                            )}
                        >
                            +
                        </button>
                    </div>
                    <p dir="rtl">
                        {cartItem.price} EGP
                    </p>
                </div>
                <button
                    onClick={() => handleRemoveItem(item.product.id)}
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