import clsx from "clsx"

export default function SizeRadio({
    items,
}: {
    items: any
}) {
    return (
        <div className={clsx(
                // Layout & Sizing
                'w-fit',
                // Flex
                'flex flex-wrap justify-center',
                // Spacing
                'mx-auto md:mx-0',
            )}
        >
            {Object.keys(items).map(size =>
                <label htmlFor={size} className="capitalize cursor-pointer m-1">
                    <input 
                        className={clsx(
                            'hidden peer',
                        )} 
                        type="radio" 
                        id={size} 
                        name="sizes" 
                    />
                    <p
                        className={clsx(
                            // Spacing
                            'px-4 py-1',
                            // Border
                            'border-2 peer-checked:border-black',
                        )}
                    >
                        {size}
                    </p>
                </label>
            )}
        </div>
    )
}