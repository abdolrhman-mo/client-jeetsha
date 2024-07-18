import { main_color } from "@/app/lib/colors"
import clsx from "clsx"

export default function Input({
    placeholder = '',
    styles = '',
    type = 'text',
    // if it's submit button
    value = '',
}: {
    placeholder?: string
    styles?: string
    type?: string
    value?: string
}) {

    if (type != 'submit') {
        return <input
            className={`rounded-lg placeholder:text-sm placeholder:capitalize text-sm ${styles}`}
            type={type}
            placeholder={placeholder}
            value={value}
        />
    } else {
        return <input
            className={`rounded-lg placeholder:text-sm text-sm capitalize font-semibold ` + `text-white bg-${main_color} cursor-pointer p-2 ${styles}`}
            type={type}
            placeholder={placeholder}
            value={value}
        />
    }

}