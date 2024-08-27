import { CartItemType } from "@/app/lib/types"
import ChangeQuantityButton from "./change-quantity-button"
import clsx from "clsx"

export default function QuantityModifier({
    cartItem,
}: {
    cartItem: CartItemType
}) {
    return (
        <div className="flex justify-between">
            <div className="border flex h-fit">
                <ChangeQuantityButton cartItem={cartItem} type="decrement" />
                <p
                    className={clsx(
                        'h-fit md:px-2'
                    )}
                >
                    {cartItem.quantity}
                </p>
                <ChangeQuantityButton cartItem={cartItem} type="increment" />
            </div>
        </div>
    )
}