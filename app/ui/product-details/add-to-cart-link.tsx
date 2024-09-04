'use client'

import Button from "../common/button"
import { useAppDispatch } from "@/redux/store"
import { toggleNavCart } from "@/redux/features/nav/navCartSlice"
import { addItemToCart } from "@/redux/features/cart/cartThunk"
import { ProductType } from "@/app/lib/types/productTypes"

export default function AddToCartLink({
    product,
    selectedSize,
    onClick,
    removeSelectedSize,
}: {
    product: ProductType
    selectedSize: string
    onClick: any
    removeSelectedSize: any
}) {
    const dispatch = useAppDispatch()

    const handleAddToCart = async () => {
        onClick()
        
        dispatch(addItemToCart({ product, size_text: selectedSize }))
        removeSelectedSize()
        dispatch(toggleNavCart())
    }
    
    return <Button theme="light" onClick={handleAddToCart}>add to cart</Button>
}