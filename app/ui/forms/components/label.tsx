export default function Label({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
    return (
        <label 
            className={`flex text-sm font-medium text-gray-700 mb-1 capitalize p-1 items-center ${className}`}
        >
            {children}
        </label>
    )
}