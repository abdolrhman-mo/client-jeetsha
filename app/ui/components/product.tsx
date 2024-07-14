import Link from "next/link";
import Image from "next/image";

export default function Product() {
    return (
        <Link href={'/collections/tees/1'}>
            <img src="" alt="" />
            <Image 
                src={'/imgs/tees/tee1.jpg'} 
                alt="tee"
                width={300}
                height={0}
            />
            <h4>Tee 1</h4>
            <p>Leopard</p>
            <p>LE 1,350.00</p>
        </Link>
    )
}