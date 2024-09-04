import { hasTag } from '@/app/lib/utils'
import clsx from 'clsx'
import Product from '@/app/ui/products/dashboard/product-card'
import CustomLink from '@/app/ui/common/custom-link'
import { ROUTES } from '@/app/lib/constants/routes'

export default function ProductsList({
    products = [],
    styles = '',
    productStyles = '',
    tag = 'all',
    limit = 0,
    search = false,
    navSearch = false,
    query,
    currentPage,
}: {
    products?: any[]
    styles?: string
    productStyles?: string
    tag?: string
    limit?: number
    search?: boolean
    navSearch?: boolean
    query?: string
    currentPage?: number
}) {
    // Search
    let searchedProducts: any = []
    if (search) {
        if (query) {
            products.map((product: any) => {
                if (product.name.toLowerCase().search(query) != -1) {
                    searchedProducts.push(product)
                }
            })
        }
    } else {
        searchedProducts = products
    }

    // Limt Number & Tags
    if (limit === 0) {
        limit = products.length
    }

    let filteredProducts: any = []
    let i = 0
    searchedProducts.map((product: any) => {
        if (hasTag(product.tags, tag) || tag === 'all') {
        // if (product.tag === tag || tag === 'all') {
            if (i < limit) {
                filteredProducts.push(product)
                i++
            }
        }
    })
    i = 0

    return (
        <>
            <div 
                className={clsx(
                    // Sizing
                    'w-11/12',
                    // Spacing
                    'mx-auto',
                    // Grid
                    'grid grid-cols-2 lg:grid-cols-4 gap-x-3 md:gap-x-8 gap-y-4',
                    // Effects
                    'opacity-100',
                ) + ` ${styles}`}
            >
                {filteredProducts.map((product: any) =>
                    <Product
                        key={product.id}
                        product={product}
                        styles={productStyles}
                        navSearch={navSearch}
                    />
                )}
            </div>
            
            {/* If it's a searching product list */}
                {
                    navSearch ? (
                        <div className="text-center pt-28">
                            {
                                filteredProducts.length > 0 ? (
                                    <CustomLink 
                                      href={`${ROUTES.SEARCH}/?query=${query}`}
                                      navSearch={true} 
                                      className='max-w-fit block' 
                                    >
                                      view more
                                    </CustomLink>
                                ) : (
                                    <p>Try searching for something.</p>
                                )
                            }
                        </div>
                    ) : <></>
                }
        </>
    )
}