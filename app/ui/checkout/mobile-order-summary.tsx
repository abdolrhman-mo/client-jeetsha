import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import OrderSummary from "@/app/ui/checkout/order-summary";
import clsx from "clsx";
import { motion } from "framer-motion"

export default function MobileOrderSummary({
    showSummary,
    onShowSummary,
}: {
    showSummary?: any
    onShowSummary?: any
}) {
    const chevron = {
        normal: {
            rotate: '0deg',
        },
        inverted: {
            rotate: '180deg',
        } 
    }
    const orderSummary = {
        show: {
            height: 'fit-content',
            padding: '1.5rem 0',
        },
        hide: {
            height: '0',
            padding: '0',
        }
    }

    return (
        <>
            <div className='lg:hidden bg-slate-100 border'>
                <div 
                    className={clsx(
                        'w-5/6 mx-auto py-4 cursor-pointer',
                    )}
                    onClick={onShowSummary}
                >
                    {showSummary ? 'Hide order summary' : 'Show order summary'}
                    <motion.div
                        className="inline-block"
                        animate={showSummary ? 'inverted' : 'normal'}
                        variants={chevron}
                    >
                        <ChevronDownIcon
                            className='h-4 inline-block mx-2'
                        />
                    </motion.div>
                </div>
            </div>

            <div className="bg-slate-100 h-fit">
                <motion.div
                    initial={false}
                    animate={ showSummary ? 'show' : 'hide' }
                    variants={orderSummary}
                    className={clsx(
                        // Layout & Sizing
                        'overflow-hidden w-5/6',
                        // Spacing
                        'mx-auto',
                        // Animations & Transitions
                        'transition-all duration-700 ease-in-out',
                    )}
                >
                    <OrderSummary />
                </motion.div>
            </div>
        </>
    )
}