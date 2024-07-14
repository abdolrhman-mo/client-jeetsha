import Link from "next/link"
import Input from "@/app/ui/components/input"

export default function Page() {
    return (
        <>
            <h2 className="text-3xl mx-auto w-fit">CREATE ACCOUNT</h2>
            <Input inputFor="first name" />
            <Input inputFor="last name" />
            <Input inputFor="email" />
            <Input inputFor="password" />
            <input className="bg-black text-white py-2 w-full cursor-pointer" type="submit" value="CREATE" />
            <Link className="block py-2 w-full text-center cursor-pointer" href={'/login'}>Already have an acount?</Link>
        </>
    )
}