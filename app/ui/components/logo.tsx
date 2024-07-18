import Link from "next/link"
import { lusitana } from "@/app/ui/fonts"

export default function Logo({
    text_size = 'text-4xl'
}: {
    text_size: string
}) {
    return (
        <Link 
            href="/"
            className={`${lusitana.className} ${text_size} font-black`}
        >
            Leopard
        </Link>
    )
}