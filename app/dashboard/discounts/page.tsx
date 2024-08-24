import Heading from "@/app/ui/common/heading";

export default function Page() {
    return (
        <>
            <Heading level={3}>Discounts</Heading>
            <br />
            <div className="bg-white shadow rounded px-8 py-6 min-h-[75vh] flex items-center justify-center text-center">
                <div>
                    <Heading level={3}>Manage discounts and promotions</Heading>
                    <p>Create discounts and discount codes.</p>
                    <br />
                    <br />
                </div>
            </div>
        </>
    )
}