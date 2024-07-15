import Link from "next/link"

export default function ViewAllLink({
    url
}: {
    url: string
}) {
    return (
        <div className="text-center">
            <Link
                href={url}
                className='inline-block text-l tracking-widest my-12 px-4 py-2 border hover:border-black transition duration-300'
                >
                VIEW ALL
            </Link>
        </div>
    )
}