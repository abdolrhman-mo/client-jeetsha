import clsx from "clsx"

export default function Button({
    className,
    theme = 'dark',
    onClick,
    children,
}: {
    className?: string
    theme?: 'light' | 'dark'
    onClick?: any
    children: React.ReactNode
}) {
    return (
        <button onClick={onClick} className={clsx(
            'text-white bg-black rounded w-full block py-2 px-8 capitalize text-center',
            {
                'text-black bg-white border' : theme === 'light'
            }
        ) + ` ${className}`}>
            {children}
        </button>
    )
}