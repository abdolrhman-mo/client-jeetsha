export default function H4({
    text,
    styles
}: {
    text: string
    styles?: string
}) {
    return <h4 className={`text-xl font-semibold capitalize py-2 ${styles}`}>{ text }</h4>
}