import Link from "next/link"

export default function Logo({
    text_size = 'text-4xl'
}: {
    text_size: string
}) {
    return (
        <Link 
            href="/"
            className={`${text_size} font-black`}
        >
            Leopard
        </Link>
    )
}