export default function Select({
    options,
    styles = ''
}: {
    options: string[]
    styles?: string
}) {
    return (
        <select
            className={`text-sm rounded-lg capitalize ${styles}`}
            name="" 
            id=""
        >
            {options.map((option, i) => 
                <option
                    key={i}
                    className="capitalize"
                    value={option}
                >
                    {option}
                </option>
            )}
        </select>
    )
}