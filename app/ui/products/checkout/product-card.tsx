import Image from "next/image";

export default function ProductCard({
    product
}: {
    product: any
}) {
    return (
        <div className="col-span-6 grid grid-cols-6">
            <div className="col-span-4 grid grid-cols-6 gap-4">
                <div
                    className="col-span-2 bg-slate-200 border rounded-md overflow-hidden flex justify-center"
                >
                    <Image
                        className=''
                        src={product.image}
                        alt={product.name}
                        width={50}
                        height={50}
                    />
                </div>
                <div className="col-span-4 flex justify-center flex-col">
                    <p className='capitalize text-sm'>{product.name}</p>
                    <p className='text-gray-500 text-xs'>Small</p>
                </div>
            </div>
            <div className="col-span-2 flex justify-end items-center">
                {product.price} EGP
            </div>
        </div>
    )
}