import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function ShopByCategoryItem({
    href,
    text,
    imgSrc,
}: {
    href: string
    text: string
    imgSrc: string
}) {
    return (
        <Link
            className={clsx(
                'group',
                'relative overflow-hidden flex items-center',
            )}
            href={href}
        >
            <Image
                className={clsx(
                    // Layout & Sizing
                    'object-cover h-full group-hover:h-[105%]',
                    // Anmations & Transitions
                    'transition-all duration-300 ease-in-out',
                )}
                src={imgSrc}
                alt={text}
                width={500}
                height={500}
            />
            <button className={clsx(
                    // Layout
                    'absolute top-1/2 left-1/2',
                    '',
                    // Animations & Transitions
                    '-translate-y-1/2 -translate-x-1/2',
                    // Spacing
                    'py-1.5 px-4',
                    // Typography
                    'uppercase',
                    // Background
                    'bg-white',
                )}
            >
                {text}
            </button>
        </Link>
    )
}