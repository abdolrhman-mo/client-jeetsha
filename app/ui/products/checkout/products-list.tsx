import { useEffect, useState } from "react"
import ProductCard from "./product-card"
import { CartItemType } from "@/app/lib/types/types"

export default function ProductsList({
    cartItems,
    buyItNow = false,
}: {
    cartItems: CartItemType[]
    buyItNow?: boolean
}) {return (
        cartItems.map((cartItem: any, i: number) => <ProductCard cartItem={cartItem} key={i} buyItNow={buyItNow} />)
    )
}