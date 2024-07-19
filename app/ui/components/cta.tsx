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
                'text-center inline-block w-full rounded-lg', 
                'placeholder:text-sm text-sm capitalize font-semibold',
                'text-white cursor-pointer p-2',
            ) + ` bg-${mainColor}` + ` ${styles}`}
            href={href}
        >
            {text}
        </Link>
    )
}