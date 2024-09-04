import clsx from 'clsx'
import Label from './label'

type InputProps = {
  value?: string | number
  type?: 'text' | 'password' | 'email' | 'submit' | 'file' | 'textarea' | 'tel' | 'number'
  name?: string
  placeholder?: string
  className?: string
  label?: string | false
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  rows?: number // Add rows for textarea
  defaultValue?: string | number
  error?: string | false
}

export default function Input({
  value,
  type = 'text',
  name = '',
  placeholder = '',
  className = '',
  label = false,
  onChange,
  onBlur,
  required = false,
  rows,
  defaultValue,
  error,
}: InputProps) {
  const isTextarea = type === 'textarea'

  return (
    <div className={`py-2 ${className}`}>
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
          onChange={onChange as any}
          onBlur={onBlur as any}
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
          onBlur={onBlur}
          required={required}
          defaultValue={defaultValue}
        />
      )}
      {error && (
        <p className={"text-red-500 text-xs italic mt-2"}>{error}</p>
      )}
    </div>
  )
}
