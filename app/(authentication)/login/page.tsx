import Link from "next/link"
import Input from "@/app/ui/components/input"

export default function Page() {
    return (
        <>
            <h2 className="text-3xl mx-auto w-fit">LOGIN</h2>
            <Input inputFor="email" />
            <Input inputFor="password" />
            <Link
                className="block"
                href="/forgot-password"
            >
                Forgot password?
            </Link>
            <input className="bg-black text-white py-2 w-full cursor-pointer" type="submit" value="LOG IN" />
            <Link className="block py-2 w-full text-center cursor-pointer" href={'/signup'}>Create account</Link>
        </>
    )
}