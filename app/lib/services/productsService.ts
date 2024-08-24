import { API_URL } from "./api-url"

export async function fetchProductsAPI() {
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

export const fetchTagsAPI = async () => {
    try {
        const token = localStorage.getItem('authToken')
        const res = await fetch(`${API_URL}/tags`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if required, such as authorization tokens
                'Authorization': `Token mNK8J7VutTEoGwbrOT0u99bgh3M6g39af3zi6N8GILQuwaz6ZcfzApTxsGB4uKjT`,
            },
        })
    
        if (!res.ok) {
            throw new Error(`Error fetching cart items: ${res.statusText}`)
        }
    
        const data = await res.json()
        return data
    } catch (error) {
        console.error('Error fetching cart items:', error)
        throw error
    }
}