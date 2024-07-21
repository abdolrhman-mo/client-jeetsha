import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import OrderSummary from "@/app/ui/checkout/order-summary";
import clsx from "clsx";

export default function MobileOrderSummary({
    showSummary,
    onShowSummary,
}: {
    showSummary?: any
    onShowSummary?: any
}) {
    return (
        <>
            <div className='lg:hidden bg-slate-100 border'>
                <div 
                    className={clsx(
                        {
                            'w-5/6 mx-auto py-4 cursor-pointer': showSummary === false,
                            'hidden': showSummary
                        }
                    )}
                    onClick={onShowSummary}
                >
                    Show order summary 
                    <ChevronDownIcon
                        className='h-4 inline-block mx-2'
                    />
                </div>
                <div 
                    className={clsx(
                        {
                            'w-5/6 mx-auto py-4 cursor-pointer': showSummary,
                            'hidden': showSummary === false
                        }
                    )}
                    onClick={onShowSummary}
                >
                    Hide order summary
                    <ChevronUpIcon
                        className='h-4 inline-block mx-2'
                    />
                </div>
            </div>

            <div className="bg-slate-100">
                <div
                    className={clsx(
                        // Layout & Sizing
                        'overflow-hidden w-5/6',
                        // Spacing
                        'mx-auto',
                        // Animations & Transitions
                        'transition-all duration-700 ease-in-out',
                        {
                            'h-64 py-6': showSummary,
                            'h-0 py-0': showSummary === false
                        }
                    )}
                >
                    <OrderSummary />
                </div>
            </div>
        </>
    )
}