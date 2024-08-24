import ProductsList from "@/app/ui/products/products-list"
import CustomLink from "../common/custom-link"

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
                    <CustomLink
                        className="text-lg"
                        href={`/collections/${tag}`} 
                        theme="light" 
                    >
                        view all
                    </CustomLink>
                </div>
            </div>
        </div>
    )
}