import Image from "next/image"

export default function Hero() {
    return (
        <div className="overflow-hidden h-screen flex items-start bg-white">
            <Image
                className="block relative -top-72 z-10"
                src="/hero2.webp"
                width={500}
                height={500}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt="Screenshots of the dashboard project showing desktop version"
            />
        </div>
    )
}