import clsx from "clsx";
import Image from "next/image";
import CTA from "@/app/ui/components/cta";
import Link from "next/link";

export default function CartItem({
    cartItem,
}: {
    cartItem: any
}) {
    return (
        <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center">
                <Image
                    className="max-h-56 object-contain"
                    src={cartItem.image_url}
                    width={500}
                    height={500}
                    alt={cartItem.name}
                />
            </div>
            <div className='flex justify-around flex-col'>
                <div>
                    <p
                        className='capitalize pb-1'
                        >
                        {cartItem.name}
                    </p>
                    <p className="pb-1">
                        <span
                            className='font-bold'
                            >
                            Size: 
                        </span>
                        Medium
                    </p>
                </div>
                <div className="flex justify-between">
                    <div className="border flex h-fit">
                        <button
                            className={clsx(
                                // Spacing
                                'px-1.5 h-fit md:px-3 md:py-0.5',
                                // Transition & Animations
                                'transition-all duration-300 ease-in-out',
                                'hover:bg-black hover:text-white',
                            )}
                            >
                            -
                        </button>
                        <p
                            className={clsx(
                                'h-fit md:px-2'
                            )}
                        >
                            {1}
                        </p>
                        <button
                            className={clsx(
                                // Spacing
                                'px-1.5 h-fit md:px-3 md:py-0.5',
                                // Transition & Animations
                                'transition-all duration-300 ease-in-out',
                                'hover:bg-black hover:text-white',
                            )}
                        >
                            +
                        </button>
                    </div>
                    <p dir="rtl">
                        {cartItem.price} EGP
                    </p>
                </div>
                <Link
                    className={clsx(
                        // Layout & Sizing
                        'inline-block w-full tracking-widest',
                        // Spacing
                        'py-1 px-4',
                        // Typography
                        'text-center placeholder:text-sm text-sm uppercase font-medium',
                        // Transitions
                        'transition-all duration-300 ease-in-out',
                        // Interactivity
                        'cursor-pointer',
                        // Typography
                        'text-white border-none hover:opacity-85 text-xs lowercase',
                        // Background
                        'bg-red-400'
                    )}
                    href='/#'
                >
                    remove
                </Link>
            </div>
        </div>
    )
}