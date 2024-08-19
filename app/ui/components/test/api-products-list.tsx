'use client'

import { hasTag } from '@/app/lib/utils'
import clsx from 'clsx'
import Product from '@/app/ui/components/product'
import CTA from '@/app/ui/components/cta'


export default function ApiProductsList({
    products = {},
    styles = '',
    productStyles = '',
    tag = 'all',
    limit = 0,
    search = false,
    navSearch = false,
    query,
    currentPage,
}: {
    products?: any
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
                {/* {products.map((product: any, i: number) =>
                    <Product key={i} product={product} />
                    // <p>{product.name}</p>
                    // <Product product={{ name: 'name', price: 100, id: 1}} />
                )} */}
            </div>
            
            {
                navSearch ? (
                    <div className="text-center pt-28">
                        {
                            filteredProducts.length > 0 ? (
                                <CTA
                                    text={'view more'}
                                    href={`/search/?query=${query}`}
                                    styles='max-w-fit block'
                                    navSearch={true}
                                />
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