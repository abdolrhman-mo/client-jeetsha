import { products } from "@/app/lib/placeholder-data"
import H2 from "@/app/ui/components/H2"
import Image from "next/image"

export default function Page() {
    const product = products[0]
    return (
        <div className="w-5/6 mx-auto pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Image
                src={product.image_url}
                alt={product.name}
                width={500}
                height={500}
            />
            <div>
                <H2 text="green washed hoodie" styles="" />
                <div className="flex space-x-4">
                    <p className="line-through">900.00 EGP</p>
                    <p>600.00 EGP</p>
                    <p className="text-red-500">Save 300.00 EGP</p>
                </div>
                <hr />
                <p className="uppercase">size</p>
                <div className="flex space-x-4">
                    <p>x-small</p>
                    <p>small</p>
                    <p>medium</p>
                    <p>large</p>
                    <p>x-large</p>
                </div>
                add to cart
                buy it now
                description
            </div>
        </div>
    )
}