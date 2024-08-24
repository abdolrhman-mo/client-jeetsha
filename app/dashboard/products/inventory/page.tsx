import Button from "@/app/ui/common/button";
import Heading from "@/app/ui/common/heading";

export default function Page() {
    return (
        <>
            <Heading level={2} className="capitalize">Make changes</Heading>
            <div className="w-fit">
                <Button theme="light">Restok</Button>
                <Button theme="light">Damage/Loss</Button>
                <Button theme="light">Adjustment</Button>
            </div>
            <br />
            <Heading level={2} className="capitalize">Inventory History</Heading>
        </>
    )
}