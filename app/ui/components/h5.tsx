export default function H5({
    text,
    styles
}: {
    text: string
    styles?: string
}) {
    return <h5 className={`text-l font-semibold capitalize py-2 ${styles}`}>{ text }</h5>
}