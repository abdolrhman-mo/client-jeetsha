import { ROUTES } from "@/app/lib/constants/routes";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="w-full flex justify-center shadow bg-white fixed">
            <div className="w-5/6 flex justify-between mx-auto py-4 font-semibold">
                <Link href={ROUTES.DASHBOARD.MAIN}>Makady Solutions</Link>
                <ul className="flex space-x-8">
                    <li>
                        <Link href={ROUTES.ACCOUNT}>Profile</Link>
                    </li>
                    <li>
                        <Link href={ROUTES.HOME}>My Website</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}