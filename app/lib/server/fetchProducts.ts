export async function fetchProducts() {
    const res = await fetch('http://localhost:8000/products', {
        cache: 'no-store',
    })
    // const data = await res.json()
    if (!res.ok) {
        throw new Error('Faild to fetch data')
    }
    // console.log(data)

    return res.json()
}