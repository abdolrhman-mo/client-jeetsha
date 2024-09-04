import { APP_NAME } from "@/app/lib/constants/appConfig"
import { ROUTES } from "@/app/lib/constants/routes"
import Link from "next/link"

export default function Logo({
    text_size = 'text-4xl'
}: {
    text_size: string
}) {
    return (
        <Link 
            href={ROUTES.HOME}
            className={`${text_size} font-black`}
        >
          {APP_NAME}
        </Link>
    )
}