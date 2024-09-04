import { ROUTES } from "@/app/lib/constants/routes"
import Button from "@/app/ui/common/button"
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export default function AddNewAddressSection({
  setAdd,
}: {
  setAdd: any
}) {
  return (
    <div>
      <Button
        className="!w-fit"
        onClick={() => {
          setAdd()
        }}
      >
        Add a new address
      </Button>
      <br />
      <Link href={ROUTES.ACCOUNT}>
        <ArrowLongLeftIcon className="h-6 inline-block pr-3" />
        Return to account details
      </Link>
    </div>
  )
}