import Heading from "@/app/ui/common/heading";

export default function Page() {
    return (
        <>
            <Heading level={3}>Analytics</Heading>
            <br />
            <div className="bg-white shadow rounded px-8 py-6 min-h-[75vh] flex items-center justify-center text-center">
                <div>
                    <p>Total sales.</p>
                    <p>Total orders.</p>
                    <br />
                    <br />
                </div>
            </div>
        </>
    )
}