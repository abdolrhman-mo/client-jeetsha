import Link from "next/link";
import Image from "next/image";

export default function Product({
    product
}: {
    product: any
}) {
    return (
        <Link href={'/collections/tees/1'}>
            <div className="h-5/6">
                <Image
                    className=""
                    src={product.image_url} 
                    alt="tee"
                    width={300}
                    height={300}
                />
            </div>
            <h4 className="uppercase">{product.name}</h4>
            <p>Leopard</p>
            <p>{product.price}</p>
        </Link>
    )
}