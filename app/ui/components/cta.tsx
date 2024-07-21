import Link from "next/link"
import { mainColor } from "@/app/lib/colors"
import clsx from "clsx"

export default function CTA({
    text,
    href = '',
    styles = '',
}: {
    text: string
    href?: string
    styles?: string
}) {
    return (
        <Link
            className={clsx(
                // Layout & Sizing
                'inline-block w-full',
                // Spacing
                'p-2',
                // Typography
                'text-center text-white placeholder:text-sm text-sm capitalize font-semibold',
                // Border
                'rounded-lg',
                // Interactivity
                'cursor-pointer',
            ) + ` bg-${mainColor}` + ` ${styles}`}
            href={href}
        >
            {text}
        </Link>
    )
}