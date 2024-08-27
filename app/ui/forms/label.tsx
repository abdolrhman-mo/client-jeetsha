export default function Label({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <label 
            className="block text-sm font-medium text-gray-700 mb-1 capitalize pt-3 pb-1"
        >
            {children}
        </label>
    )
}