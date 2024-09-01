import { fetchProductsAPI } from "@/app/lib/services/productService";

export default async function Page() {
    const orders = await fetchProductsAPI()

    return (
        <>
            <p>Home</p>
        </>
    )
}