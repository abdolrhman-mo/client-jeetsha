import clsx from 'clsx'
import Label from './label'

type InputProps = {
  value?: string | number
  type?: 'text' | 'password' | 'email' | 'submit' | 'file' | 'textarea' | 'tel' | 'number'
  name?: string
  placeholder?: string
  className?: string
  label?: string | false
  onChange?: any
  required?: boolean
  rows?: number // Add rows for textarea
  defaultValue?: string | number
}

export default function Input({
  value,
  type = 'text',
  name = '',
  placeholder = '',
  className = '',
  label = false,
  onChange,
  required = false,
  rows,
  defaultValue,
}: InputProps) {
  const isTextarea = type === 'textarea'

  return (
    <>
      {label && type !== 'submit' && (
        <Label>{label}</Label>
      )}
      {isTextarea ? (
        <textarea
          className={clsx(
            'block w-full',
            'p-2',
            'text-sm placeholder:text-sm placeholder:capitalize',
            'rounded',
            className
          )}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          rows={rows}
          required={required}
        />
      ) : (
        <input
          className={clsx(
            'block w-full',
            'p-2',
            'text-sm placeholder:text-sm placeholder:capitalize',
            'rounded',
            'border-1 border-gray-200',
            {
              'cursor-pointer text-white capitalize font-semibold bg-black': type === 'submit',
            },
            className
          )}
          value={value}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          defaultValue={defaultValue}
        />
      )}
    </>
  )
}
