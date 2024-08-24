import ProductCard from "./product-card"

export default function ProductsList({
    cartItems,
}: {
    cartItems: any
}) {

    return (
            cartItems.map((item: any, i: number) => <ProductCard product={item.product} key={i} />)
    )
}