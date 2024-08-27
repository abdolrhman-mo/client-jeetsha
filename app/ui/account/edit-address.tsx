import clsx from "clsx"

export default function EditAddress({
    showEditAddress
}: {
    showEditAddress: boolean
}) {
    return (
        <div className={clsx(
            {
                'block w-10 h-10' : showEditAddress,
                'hidden' : !showEditAddress
            }
        )}>
            <p>heyyyyyyyyyyy</p>
        </div>
    )
}