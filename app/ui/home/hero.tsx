import clsx from "clsx"
import CustomLink from "../common/custom-link"
import Heading from "../common/heading"
import { ROUTES } from "@/app/lib/constants/routes"

export default function Hero() {
    return (
        <div className="h-[90vh] md:h-screen">
            <div className="overflow-hidden h-full bg-black">
                <div className={clsx(
                        // Layout & Sizing
                        'w-full h-[90vh] md:h-screen relative',
                        // Background
                        "bg-[url('/hero-mobile.png')] md:bg-[url('/hero.png')] bg-cover bg-center",
                    )}
                ></div>
                <div className="z-20 absolute top-1/2 left-1/2 -translate-x-1/2">
                    {/* <Heading level={2} className="text-white text-center my-6">new collection</Heading>
                    <div className="w-fit mx-auto">
                        <CustomLink theme='light' href={'#new-collection'}>view all</CustomLink>
                    </div> */}
                </div>
            </div>
        </div>
    )
}