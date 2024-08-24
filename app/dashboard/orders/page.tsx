import OrderItems from "@/app/ui/dashboard/order-items"
import Heading from "@/app/ui/common/heading"
import { fetchProductsAPI } from "@/app/lib/services/productsService"

export default async function Page() {
    const orders = await fetchProductsAPI()

    return (
        <>
            <div className="flex justify-between min-h-4 items-center">
                <Heading level={2}>orders</Heading>
            </div>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Heading level={4}>pending</Heading>
                    <div>
                        <p className="pb-4">Order Date: 17/8/2024</p>
                        <OrderItems items={orders} state={'pending'} />
                    </div>
                </div>
                <div>
                    <Heading level={4}>delivered</Heading>
                    <div>
                        <p className="pb-4">Order Date: 18/8/2024</p>
                        <OrderItems items={orders} state={'delivered'} />
                    </div>
                </div>
            </div>
        </>
    )
}