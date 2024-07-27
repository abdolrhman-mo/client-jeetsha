import Link from "next/link"
import { mainColor } from "@/app/lib/colors"
import clsx from "clsx"
import { toggleSearchBar } from "@/lib/features/nav/searchBarSlice"
import { useDispatch } from "react-redux"

export default function CTA({
    text,
    href = '',
    theme = 'dark',
    styles = '',
    navSearch = false,
}: {
    text: string
    href?: string
    theme?: 'light' | 'dark'
    styles?: string
    navSearch?: boolean
}) {
    let bgColor: string = 'white'
    if (theme === 'dark') {
        bgColor = mainColor
    }

    const dispatch = useDispatch()
    let handleClick = () => {
        if (navSearch) {
            dispatch(toggleSearchBar())
        }
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
            onClick={handleClick}
        >
            {text}
        </Link>
    )
}