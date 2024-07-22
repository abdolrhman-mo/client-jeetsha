import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

export default function Product({
    product,
    styles,
}: {
    product: any
    styles?: string
}) {
    return (
        <Link
            className='group' 
            href={`/product/${product.id}`}
            key={product.id}
        >
            <div className={`grid grid-rows-12 h-full gap-4 ${styles}`}>
                <div className='overflow-hidden row-span-10 flex items-center'>
                    <Image
                        className={clsx(
                            // Layout & Sizing
                            'object-cover h-full group-hover:h-[105%]',
                            // Transitions & Animations
                            'transition-all duration-300 ease-in-out',
                        )}
                        src={product.image_url} 
                        alt={product.name}
                        width={500}
                        height={500}
                    />
                </div>
                <div className='row-span-2 text-center'>
                    <h4 
                        className='uppercase text-md tracking-widest'
                    >
                        {product.name}
                    </h4>
                    <p
                        className='text-slate-600 text-sm'
                    >
                        {product.price} EGP
                    </p>
                </div>
            </div>
        </Link>
    )
}