import Link from "next/link";

export default function Nav() {
    return (
        <nav className="w-full flex justify-center shadow bg-white fixed">
            <div className="w-5/6 flex justify-between mx-auto py-4 font-semibold">
                <Link href='/dashboard'>AMS</Link>
                <ul className="flex space-x-8">
                    <li>
                        <Link href='/account'>Profile</Link>
                    </li>
                    <li>
                        <Link href='/'>My Website</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}