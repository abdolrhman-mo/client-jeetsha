import Image from "next/image";
import QuantityModifier from "../../cart/cart-item/quantity-modifier";
import { API_URL } from "@/app/lib/services/api-url";

export default function ProductCard({
    cartItem
}: {
    cartItem: any
}) {
    const product = cartItem.product
    const sizes: any = {
        'xs': 'x small',
        's': 'small',
        'm': 'medium',
        'l': 'large',
        'xl': 'x large',
    }

    return (
        <div className="col-span-6 grid grid-cols-6">
            <div className="col-span-6 grid grid-cols-6 gap-4">
                <div
                    className="col-span-2 bg-slate-200 border rounded-md overflow-hidden flex justify-center"
                >
                    <Image
                        src={product.image.startsWith('http') ? product.image : `${API_URL + product.image}`}
                        alt={product.name}
                        width={50}
                        height={50}
                    />
                </div>
                <div className="col-span-4 flex justify-center flex-col space-y-1">
                    <div className="flex justify-between">
                        <p className='capitalize text-sm w-fit'>{product.name}</p>
                        <div className="w-fit text-sm">
                            {product.price} EGP
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p className='text-gray-500 text-xs'>
                            <span className="capitalize text-xs"> {sizes[cartItem.size]} </span>
                        </p>
                        <p className="text-sm">
                            <QuantityModifier cartItem={cartItem} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}