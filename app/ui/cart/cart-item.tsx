import clsx from "clsx";
import Image from "next/image";
import CTA from "../components/cta";

export default function CartItem({
    cartItem
}: {
    cartItem: any
}) {
    return (
        <div className="grid grid-cols-3 gap-4">
            <Image
                className="max-h-56 object-contain"
                src={cartItem.image_url}
                width={500}
                height={500}
                alt={cartItem.name}
            />
            <div className='col-span-2 flex justify-around flex-col'>
                <div>
                    <p
                        className='capitalize pb-2'
                        >
                        {cartItem.name}
                    </p>
                    <p
                        className='text-sm'
                        >
                        <span
                            className='font-bold'
                            >
                            Size: 
                        </span>
                        Medium
                    </p>
                </div>
                <div className="flex justify-between">
                    <div className="border flex">
                        <button
                            className={clsx(
                                // Spacing
                                'px-3 py-0.5',
                                // Transition & Animations
                                'transition-all duration-300 ease-in-out',
                                'hover:bg-black hover:text-white',
                            )}
                        >
                            -
                        </button>
                        <p
                            className={clsx(
                                'py-1 px-2'
                            )}
                        >
                            {3}
                        </p>
                        <button
                            className={clsx(
                                // Spacing
                                'px-3 py-0.5',
                                // Transition & Animations
                                'transition-all duration-300 ease-in-out',
                                'hover:bg-black hover:text-white',
                            )}
                        >
                            +
                        </button>
                    </div>
                    <p>{cartItem.price} EGP</p>
                </div>
                <CTA text="remove" styles="bg-red-400 text-xs max-w-fit py-1 px-4" />
            </div>
        </div>
    )
}