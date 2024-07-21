import clsx from "clsx"
import Link from "next/link"

export default function ViewAllLink({
    url
}: {
    url: string
}) {
    return (
        <div className="text-center">
            <Link
                href={url}
                className={clsx(
                        // Layout & Sizing
                        'inline-block',
                        // Spacing
                        'px-4 py-2',
                        // Typography
                        'text-l tracking-widest',
                        // Border
                        'border hover:border-black transition duration-300'
                    )}
                >
                VIEW ALL
            </Link>
        </div>
    )
}