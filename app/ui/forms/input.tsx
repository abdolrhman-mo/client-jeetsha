import clsx from 'clsx';

type InputProps = {
  value?: string;
  type?: 'text' | 'password' | 'email' | 'submit' | 'file' | 'textarea' | 'tel' // Add other types as needed
  placeholder?: string;
  className?: string;
  label?: string | false;
  onChange?: any
  required?: boolean;
  rows?: number; // Add rows for textarea
};

export default function Input({
  value,
  type = 'text',
  placeholder = '',
  className = '',
  label = false,
  onChange,
  required = false,
  rows,
}: InputProps) {
  const isTextarea = type === 'textarea';

  return (
    <>
      {label && type !== 'submit' && (
        <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
          {label}
        </label>
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
            {
              'cursor-pointer text-white capitalize font-semibold bg-black': type === 'submit',
            },
            className
          )}
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
        />
      )}
    </>
  );
}
