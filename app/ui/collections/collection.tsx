import ProductsList from "@/app/ui/products/products-list"
import Heading from "../common/heading"
import { fetchProductsAPI } from "@/app/lib/services/productService"

export default async function Collection({
    title,
    tag,
}: {
    title: string
    tag: string
}) {
    const products = await fetchProductsAPI()

    return (
        <div className="pt-12">
            <div className="text-center">
                <Heading level={2}>{title}</Heading>
            </div>
            <ProductsList products={products} tag={tag} />
        </div>
    )
}