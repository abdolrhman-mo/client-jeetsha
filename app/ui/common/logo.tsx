import { APP_NAME } from "@/app/lib/constants/appConfig"
import { ROUTES } from "@/app/lib/constants/routes"
import Image from "next/image"
import Link from "next/link"

export default function Logo({
    className
}: {
    className?: string
}) {
    return (
        <Link 
            href={ROUTES.HOME}
            className={`text-4xl font-black ${className}`}
        >
          {/* {APP_NAME} */}
          <Image
            src={'/logo.png'}
            alt={APP_NAME}
            width={100}
            height={100}
          />
        </Link>
    )
}