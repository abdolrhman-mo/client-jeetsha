import clsx from "clsx"
import CustomLink from "../common/custom-link"
import Heading from "../common/heading"

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
                    <Heading level={2} className="text-white text-center">new collection</Heading>
                    <div className="w-fit mx-auto">
                        <CustomLink theme='light' href='/collections/latest'>view all</CustomLink>
                    </div>
                </div>
            </div>
        </div>
    )
}