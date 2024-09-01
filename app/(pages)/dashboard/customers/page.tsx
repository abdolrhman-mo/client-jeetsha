import Heading from "@/app/ui/common/heading";

export default function Page() {
    return (
        <>
            <Heading level={3}>Customers</Heading>
            <br />
            <div className="bg-white shadow rounded px-8 py-6 min-h-[75vh] flex items-center justify-center text-center">
                <div>
                    <Heading level={3}>Everything customers related</Heading>
                    <p>View customer details, see customer order history.</p>
                    <br />
                    <br />
                </div>
            </div>
        </>
    )
}