import Heading from "@/app/ui/common/heading";

export default function Page() {
    return (
        <>
            <Heading level={3}>Themes</Heading>
            <br />
            <div className="bg-white shadow rounded px-8 py-6 min-h-[75vh] flex items-center justify-center text-center">
                <div>
                    <p>Choose between different themes and customize them.</p>
                    <br />
                    <br />
                </div>
            </div>
        </>
    )
}