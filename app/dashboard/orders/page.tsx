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
            <div className="flex justify-between min-h-4 items-center">
                <H2 text="Orders" />
                <Link className="hover:underline" href={'/'}>Go to website</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <H4 text="pending" styles="pb-8" />
                    <div>
                        <p className="pb-4">Order Date: 17/8/2024</p>
                        <OrderItems items={orders} state={'pending'} />
                    </div>
                </div>
                <div>
                    <H4 text="delivered" styles="pb-8"  />
                    <div>
                        <p className="pb-4">Order Date: 18/8/2024</p>
                        <OrderItems items={orders} state={'delivered'} />
                    </div>
                </div>
            </div>
        </>
    )
}