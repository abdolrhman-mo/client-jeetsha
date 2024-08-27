import { useEffect, useState } from "react"
import ProductCard from "./product-card"
import { CartItemType } from "@/app/lib/types"

export default function ProductsList({
    cartItems,
}: {
    cartItems: CartItemType[]
}) {return (
        cartItems.map((cartItem: any, i: number) => <ProductCard cartItem={cartItem} key={i} />)
    )
}