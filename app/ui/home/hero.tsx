import Image from "next/image"
import CTA from "../components/cta"
import H4 from "../components/h4"
import H2 from "../components/H2"
import clsx from "clsx"

export default function Hero() {
    return (
        <div className="h-screen">
            <div className="overflow-hidden h-full bg-black">
                <div className={clsx(
                        // Layout & Sizing
                        'w-full h-[200vh] opacity-70 relative -top-72 md:top-0',
                        // Background
                        "bg-[url('/hero2.webp')] bg-cover bg-center",
                    )}
                ></div>
                {/* <Image
                    className={clsx(
                        // Layout
                        'block relative lg:-top-96 z-10 opacity-70',
                    )}
                    src="/hero2.webp"
                    width={500}
                    height={500}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt="Screenshots of the dashboard project showing desktop version"
                /> */}
                <div className="z-20 absolute top-3/4 left-1/2 -translate-x-1/2">
                    <H2 text="new collection" styles="text-white mb-4 text-center" />
                    <div className="w-fit mx-auto">
                        <CTA text="view all" href="/collections/latest" theme="light" styles="hover:border-white" />
                    </div>
                </div>
            </div>
        </div>
    )
}