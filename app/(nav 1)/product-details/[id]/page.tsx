import Image from "next/image"
import NavSearchResults from "@/app/ui/layout/nav/nav-search-results"
import ProductsList from "@/app/ui/products/products-list"
import SizeRadio from "@/app/ui/product-details/size-radio"
import AddToCartLink from "@/app/ui/product-details/add-to-cart-link"
import CustomLink from "@/app/ui/common/custom-link"
import Button from "@/app/ui/common/button"
import Heading from "@/app/ui/common/heading"
import { fetchProductsAPI } from "@/app/lib/services/productsService"

export default async function Page({
    params,
    searchParams,
}: {
    params: {id: number}
    searchParams?: {
        query?: string
        page?: string
    }
}) {
    const products = await fetchProductsAPI()
    const product = products[(params.id) - 1]
    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1

    return (
        <>
            {/* Nav Search Results */}
            <NavSearchResults query={query} currentPage={currentPage} />

            <div className="w-5/6 mx-auto pt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex justify-center w-full">
                    <Image
                        className="max-w-96"
                        src={product.image}
                        alt={product.name}
                        width={500}
                        height={500}
                    />
                </div>
                <div className="space-y-4">
                    <Heading level={2}>{product.name}</Heading>
                    <div className="flex space-x-4">
                        {/* <p className="line-through">1300.00 EGP</p> */}
                        <p>{product.price} EGP</p>
                        {/* <p className="text-red-500">Save 300.00 EGP</p> */}
                    </div>
                    <hr />
                    <div className="text-center md:text-left">
                        <p className="uppercase">size</p>
                        <SizeRadio items={product.sizes} />
                    </div>
                    <AddToCartLink product={product} />
                    <Button>buy it now</Button>
                    {/* <ul>
                        {product.description.map(item => 
                            <li
                                className="list-disc"
                            >
                                {item}
                            </li>
                        )}
                    </ul> */}
                </div>
            </div>
            <div className="col-span-2 pt-24 space-y-16">
                <div className="text-center">
                    <Heading level={2}>you may also like</Heading>
                </div>
                <ProductsList products={products} limit={4} tag='latest' />
                <div className="w-fit mx-auto">
                    <CustomLink className="text-xs" href="/collections/all">continue shopping</CustomLink>
                </div>
            </div>
        </>
    )
}