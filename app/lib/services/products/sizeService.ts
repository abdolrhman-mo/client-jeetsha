const API_URL = process.env.NEXT_PUBLIC_API_URL

export const fetchSizesAPI = async () => {
  try {
    const res = await fetch(`${API_URL}/size/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('authToken')}`,
      },
    })
    if (!res.ok) {
      console.error(`Error fetching cart items: ${res.statusText}`)
      return []
    }
    const data = await res.json()
    
    return data
  } catch (error) {
    console.error('Error fetching sizes:', error)
    return []
  }
}

export const fetchSizeByIdAPI = async (sizeId: number) => {
  try {
    const res = await fetch(`${API_URL}/size/${sizeId}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('authToken')}`,
      },
    })
    if (!res.ok) {
      console.error(`Error fetching cart items: ${res.statusText}`)
      return []
    }
    const data = await res.json()
    
    return data
  } catch (error) {
    console.error('Error fetching sizes:', error)
    return []
  }
}