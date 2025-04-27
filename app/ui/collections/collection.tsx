import ProductsList from "@/app/ui/products/products-list"
import Heading from "../common/heading"
import productsData from "@/app/lib/data/products.json"

export default async function Collection({
    title,
    tag,
}: {
    title: string
    tag: string
}) {
    // const products = await fetchProductsAPI()
    const products = productsData

    return (
        <div className="pt-12">
            <div className="text-center">
                <Heading level={2}>{title}</Heading>
            </div>
            <ProductsList products={products} tag={tag} />
        </div>
    )
}