import Link from "next/link";
import CartItems from "@/app/ui/cart/cart-items";
import H2 from "@/app/ui/components/H2";
import H4 from "@/app/ui/components/h4";
import { fetchProducts } from "@/app/lib/server/fetchProducts";
import OrderItems from "@/app/ui/dashboard/order-items";

export default async function Page() {
    const orders = await fetchProducts()

    return (
        <>
            <p>Home</p>
        </>
    )
}