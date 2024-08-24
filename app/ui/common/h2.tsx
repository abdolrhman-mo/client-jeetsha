import clsx from "clsx"

export default function H2({
    text,
    styles,
}: {
    text: string
    styles?: string
}) {
    return (
        <h2
            className={
                clsx(
                    'font-black',
                    // Spacing
                    'my-12',
                    // Typography
                    'text-4xl font-medium uppercase',
                ) + ` ${styles}`
            }
        >
            {text}
        </h2>
    )
}