const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function fetchProductsAPI() {
    const res = await fetch(`${API_URL}/products/`, {
        cache: 'no-store',
    })
    if (!res.ok) {
        throw new Error('Faild to fetch data')
    }
    const data = await res.json()

    return data
}

export const fetchTagsAPI = async () => {
    try {
        const token = localStorage.getItem('authToken')
        const res = await fetch(`${API_URL}/tags/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('authToken')}`,
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