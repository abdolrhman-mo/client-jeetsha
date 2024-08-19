import clsx from "clsx";
import Image from "next/image";
import CTA from "@/app/ui/components/cta";
import Link from "next/link";

export default function OrderItem({
    cartItem,
    state,
}: {
    cartItem: any
    state: 'pending' | 'delivered'
}) {
    return (
        <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center bg-slate-400 rounded">
                <Image
                    className="max-h-24 object-contain"
                    src={cartItem.image}
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
                        <p
                            className={clsx(
                                'h-fit md:px-2'
                            )}
                        >
                            {1}
                        </p>
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
                        'text-white border-none hover:opacity-85 text-xs lowercase',
                        // Transitions
                        'transition-all duration-300 ease-in-out',
                        // Interactivity
                        'cursor-pointer',
                        // Background
                        'bg-red-400',
                        'rounded',
                    )}
                    href='/#'
                >
                    {state === 'pending' ? 'move to delivered' : 'move back to pending'}
                </Link>
            </div>
        </div>
    )
}