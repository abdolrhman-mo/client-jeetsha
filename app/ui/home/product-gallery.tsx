import ProductsList from "@/app/ui/products/products-list"
import CustomLink from "../common/custom-link"
import { fetchProductsAPI } from "@/app/lib/services/productService"
import { ProductsListSkeleton } from "../skeletons/products-skeleton"

export default async function ProductGallery({
    title,
    tag,
}: {
    title: string
    tag: string
}) {
  const products = await fetchProductsAPI()

    return (
        <div className="my-36">
            <h2 className='text-3xl text-center my-12 uppercase'>{title}</h2>
            <ProductsList products={products} tag={tag} limit={100} />
            {/* <ProductsListSkeleton count={4} /> */}
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