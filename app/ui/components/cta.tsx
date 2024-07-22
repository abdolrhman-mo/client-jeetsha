import Link from "next/link"
import { mainColor } from "@/app/lib/colors"
import clsx from "clsx"

export default function CTA({
    text,
    href = '',
    theme = 'dark',
    styles = '',
}: {
    text: string
    href?: string
    theme?: 'light' | 'dark'
    styles?: string
}) {
    let bgColor: string = 'white'
    if (theme === 'dark') {
        bgColor = mainColor
    }
    return (
        <Link
            className={clsx(
                // Layout & Sizing
                'inline-block w-full tracking-widest',
                // Spacing
                'py-2 px-8',
                // Typography
                'text-center placeholder:text-sm text-sm uppercase font-medium',
                // Transitions
                'transition-all duration-300 ease-in-out',
                // Interactivity
                'cursor-pointer',
                {
                    'border  hover:border-black': theme === 'light',
                    'text-white border-none hover:opacity-85': theme === 'dark',
                },
            ) + ` bg-${bgColor}` + ` ${styles}`}
            href={href}
        >
            {text}
        </Link>
    )
}