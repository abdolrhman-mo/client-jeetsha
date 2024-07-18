export default function Input({ 
    inputFor 
}: {
    inputFor: string;
}) {
    let input
    if (inputFor === 'email' || inputFor === 'password') {
        input = <input className="w-full" type={inputFor} name="" id="" />
    } else {
        input = <input className="w-full" type='text' name="" id="" />
    }
    return (
        <div className="space-y-2">
            <p className="uppercase">{inputFor}</p>
            {input}
        </div>
    )
}