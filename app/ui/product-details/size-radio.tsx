import { RootState } from "@/redux/store"
import clsx from "clsx"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function SizeRadio({
    onChange,
    selectedSize,
    addToCartClicked,
}: {
    onChange?: any
    selectedSize: string
    addToCartClicked: boolean
}) {
    const cartItems = useSelector((state: RootState) => state.cart.items || [])
    const product = useSelector((state: RootState) => state.product.item)
    const sizes = ['xs', 's', 'm', 'l', 'xl']
    
    const [availableSizes, setAvailableSizes] = useState<Set<string>>(new Set())
    
    useEffect(() => {
        if (product) {
            const sizesAvaillable = new Set(
                product.sizes
                    .filter((productSize: any) => {
                        const existedCartItem = cartItems.find(item => 
                            item.product.id === product.id && item.size === selectedSize
                        )
                        if (existedCartItem) {
                            return (
                                productSize.quantity > 0  && existedCartItem?.quantity < productSize.quantity
                            ) // product quantity > 0  &&  cart item quantity < product quantity
                        } else {
                            return (
                                productSize.quantity > 0
                            )
                        }
                    }
                    )
                    .map((productSize: any) => 
                        productSize.size_text
                    )
            )
            setAvailableSizes(sizesAvaillable)
        }
    }, [addToCartClicked])

    return (
        <div className={clsx(
                // Layout & Sizing
                'w-fit',
                // Flex
                'flex flex-wrap justify-center',
                // Spacing
                'mx-auto md:mx-0',
            )}
        >
            {sizes.map((size: any) => {
                const isSoldOut = !availableSizes.has(size)

                return (
                    <label key={size} htmlFor={size} className="capitalize cursor-pointer m-1">
                        <input 
                            className={clsx(
                                'hidden peer',
                            )} 
                            type="radio" 
                            id={size} 
                            name="sizes" 
                            disabled={isSoldOut}
                            checked={selectedSize === size}
                            onChange={onChange}
                            value={size}
                        />
                        <p
                            className={clsx(
                                // Spacing
                                'px-4 py-1',
                                // Border
                                'border-2 peer-checked:border-black',
                                // Typo
                                'uppercase',
                                // Conditional styling
                                {
                                    'text-gray-400': isSoldOut,
                                    'bg-gray-200': isSoldOut,
                                    'bg-white': !isSoldOut,
                                }
                            )}
                            >
                            {size}
                        </p>
                    </label>
                )}
            )}
        </div>
    )
}