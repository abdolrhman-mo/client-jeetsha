import clsx from "clsx"
import Label from "./label"

export default function Select({
    value = '',
    name = '',
    onChange,
    onBlur,
    required = false,
    options,
    className = '',
    isProductsSelect  = false,
    label = false,
    error,
  }: {
    value?: string | number
    name?: string
    onChange?: any
    onBlur?: any
    required?: boolean
    options: any[]
    className?: string
    isProductsSelect?: boolean
    label?: string | false
    error?: string | false
}) {
    return (
        <>
            {label && (
                <Label>{label}</Label>
            )}
            <select
                className={`text-gray-900 border-1 border-gray-200 text-sm rounded capitalize ${className}`}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                required={required}
            >
                {options.map((option, i) => 
                    <option
                        key={i}
                        className={clsx(
                            "text-gray-900 text-sm capitalize",
                        )}
                        value={isProductsSelect ? option.id : option}
                    >
                        {isProductsSelect ? `${option.name} (${option.id})` : option}
                    </option>
                )}
            </select>
            {error && (
              <p className={"text-red-500 text-xs italic mt-2"}>{error}</p>
            )}
        </>
    )
}