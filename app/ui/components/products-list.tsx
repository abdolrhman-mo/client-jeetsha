import Product from "@/app/ui/components/product"
import { products } from "@/app/lib/placeholder-data"

export default function ProductsList({
    tag
}: {
    tag: string
}) {
    function has_tag(tags: string[], searched_for: string) {
        for (let i = 0; i < tags.length; i++) {
            if (tags[i] === searched_for) {
                return true
            }
        }
        return false
    }

    let filtered_products: any = []
    products.map(product => {
        if (has_tag(product.tags, tag)) {
            filtered_products.push(product)
        }
    })
    return (
        <div className="w-11/12 mx-auto grid grid-cols-4 gap-8">
            {filtered_products.map((product: any) =>
                <Product product={product} />
            )}
        </div>
    )
}