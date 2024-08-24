export default function Radio({
    name,
    options,
    styles = '',
    component,
    componentIndex
}: {
    name: string
    options: string[]
    styles?: string
    component?: React.ReactNode
    componentIndex?: number
}) {
    const listItems = options.map((option, i) => {
        let item
        let label = (
            <label
                    className="p-4 text-sm pl-3 cursor-pointer capitalize"
                    htmlFor={option}
                >
                    {option}
            </label>
        )

        // If there is more than one option add the input of type radio
        if (options.length > 1) {

            // Adding the peer name
            if (componentIndex === i) {
                item = (
                    <>
                        {
                            <input
                                className={`peer cursor-pointer`}
                                type="radio"
                                id={option}
                                name={name} 
                                value={option} 
                            />
                        }
                        {label}
                    </>
                )
            } else {
                item = (
                    <>
                        {
                            <input
                                className={`cursor-pointer`}
                                type="radio"
                                id={option}
                                name={name} 
                                value={option} 
                            />
                        }
                        {label}
                    </>
                )
            }
        } else {
            item = label
        }

        // Adding the component to the option
        if (i === componentIndex) {
            return (
                <div key={i} className={`p-4 border first:rounded-t-lg last:rounded-b-lg`}>
                    {item}
                    {component}
                </div>
            )
        }
        return (
            <div key={i} className={`p-4 border first:rounded-t-lg last:rounded-b-lg`}>
                {item}
            </div>
        )
    })
    return (
        <div className={` ${styles}`}>
            {listItems.map((item: any) => 
                    item
            )}
        </div>
    )
}