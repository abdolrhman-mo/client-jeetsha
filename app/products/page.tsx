async function getData() {
    const res = await fetch('http://localhost:8000/products/')
    if (!res.ok) {
        throw new Error('Faild to fetch data')
    }

    return res.json()
}

export default async function Page() {
    const data = await getData()
    console.log(data[0].name)
    return (
        <main>
            {data[0].name}
        </main>
    )
}