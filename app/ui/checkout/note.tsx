import { CreditCardIcon } from "@heroicons/react/24/outline";

export default function Note({
    styles,
}: {
    styles?: string,
}) {
    return (
        <div className={`text-center space-y-6 ${styles}`}>
            <CreditCardIcon className="max-w-28 mx-auto" />
            <p className="w-5/6 mx-auto">After clicking “Pay now”, you will be redirected to Pay via (Debit/Credit cards/Wallets/Installments) to complete your purchase securely.</p>
        </div>
    )
}