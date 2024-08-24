import clsx from "clsx"

export default function SizeRadio({
    items = '',
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
            {items.map((size: any) =>
                <label htmlFor={size.size_text} className="capitalize cursor-pointer m-1">
                    <input 
                        className={clsx(
                            'hidden peer',
                        )} 
                        type="radio" 
                        id={size.size_text} 
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
                        {size.size_text}
                    </p>
                </label>
            )}
        </div>
    )
}