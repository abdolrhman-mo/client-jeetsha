import ProductsList from "@/app/ui/products/products-list"
import CustomLink from "../common/custom-link"
import { fetchProductsAPI } from "@/app/lib/services/products/productService"
import { ProductsListSkeleton } from "../skeletons/products-skeleton"
import Heading from "../common/heading"
import { ROUTES } from "@/app/lib/constants/routes"

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
            <Heading level={2} className="text-center">{title}</Heading>
            <ProductsList products={products} tag={tag} limit={100} />
            {/* <ProductsListSkeleton count={4} /> */}
            <div className="text-center w-5/6 mx-auto">
                <div className="w-fit mx-auto">
                    <CustomLink
                        className="text-lg"
                        href={ROUTES.COLLECTION_FUNCTION(tag)} 
                        theme="light" 
                    >
                        view all
                    </CustomLink>
                </div>
            </div>
        </div>
    )
}