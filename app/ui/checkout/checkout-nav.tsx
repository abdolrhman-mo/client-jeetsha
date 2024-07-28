import Link from "next/link"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import Logo from "@/app/ui/components/logo"

export default function CheckoutNav() {
    return (
        <nav className="shadow-sm">
            <div className="py-4 w-9/12 mx-auto flex justify-between items-center tracking-widest ">
                <Logo text_size='text-2xl' />
                <Link href={'/cart'}>
                    <ShoppingBagIcon className="h-6 px-2" />
                </Link>
            </div>
        </nav>
    )
}