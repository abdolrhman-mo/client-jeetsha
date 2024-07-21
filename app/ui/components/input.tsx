import { mainColor } from "@/app/lib/colors"
import clsx from "clsx"

export default function Input({
    placeholder = '',
    styles = '',
    type = 'text',
    // if it's submit button
    value,
}: {
    placeholder?: string
    styles?: string
    type?: string
    value?: string
}) {
    let background = ''
    if (type === 'submit') {
        background =   `bg-${mainColor}`
    }
    return <input
        className={clsx(
            // Spacing
            'p-2',
            // Typography
            'text-sm placeholder:text-sm placeholder:capitalize',
            // Border
            'rounded-lg',
            {
                'cursor-pointer text-white capitalize font-semibold': type === 'submit'
            },
        ) + ` ${background} ${styles}`}
        type={type}
        placeholder={placeholder}
        value={value}
    />

}