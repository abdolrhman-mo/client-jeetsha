import Product from '@/app/ui/components/product'
import { products } from '@/app/lib/placeholder-data'
import clsx from 'clsx'
import { hasTag } from '@/app/lib/utils'

export default function ProductsList({
    tag,
    limit = 0,
}: {
    tag: string
    limit?: number
}) {
    if (limit === 0) {
        limit = products.length
    }
    let filtered_products: any = []
    let i = 0
    products.map(product => {
        if (hasTag(product.tags, tag) && i < limit) {
            filtered_products.push(product)
            i++
        }
    })
    i = 0
    // if (limit) {
    //     for (let i = 0; i < limit; i++) {

    //     }
    // }

    return (
        <div 
            className={clsx(
                // Sizing
                'w-11/12',
                // Spacing
                'mx-auto',
                // Grid
                'grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4',
            )}
        >
            {filtered_products.map((product: any) =>
                <Product product={product} />
            )}
        </div>
    )
}