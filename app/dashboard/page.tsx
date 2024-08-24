import { fetchProductsAPI } from "../lib/services/productsService";

export default async function Page() {
    const orders = await fetchProductsAPI()

    return (
        <>
            <p>Home</p>
        </>
    )
}