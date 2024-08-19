import ProductsList from "@/app/ui/components/products-list"
import CTA from "@/app/ui/components/cta"

import { fetchProducts } from "@/app/lib/server/fetchProducts"

export default async function ProductGallery({
    title,
    tag,
    products = [],
}: {
    title: string
    tag: string
    products?: any[]
}) {
    return (
        <div className="my-36">
            <h2 className='text-3xl text-center my-12 uppercase'>{title}</h2>
            <ProductsList products={products} tag={tag} limit={100} />
            <div className="text-center w-5/6 mx-auto">
                <div className="w-fit mx-auto">
                    <CTA 
                        text="view all" 
                        href={`/collections/${tag}`} 
                        theme="light" 
                        styles="text-lg"
                    />
                </div>
            </div>
        </div>
    )
}