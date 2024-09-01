const API_URL = process.env.NEXT_PUBLIC_API_URL

export const fetchAddressesAPI = async () => {
    try {
        const res = await fetch(`${API_URL}/address/`, {
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
        console.error('Error fetching cart items:', error)
        return []
    }
}

export const editAddressAPI = async (
    addressId: number,
    country: string,
    city: string,
    addressText: string,
    phone_number: string,
  ) => {
    try {
      const res = await fetch(`${API_URL}/address/${addressId}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify({
            id: addressId,
            country,
            city,
            addressText,
            phone_number,
            user: localStorage.getItem('userId'),
        })
      })
      if (!res.ok) {
        console.error('Faild to update cart item quantity')
        return []
      }
      const data = await res.json()
      console.log('Edited address', data)
      return data
    } catch (error) {
      console.error('Error updating quantity: ', error)
      return []
    }
}

export const addAddressAPI = async (
    country: string,
    city: string,
    addressText: string,
    phone_number: string,
  ) => {
    try {
      const res = await fetch(`${API_URL}/address/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify({
            country,
            city,
            addressText,
            phone_number,
            user: localStorage.getItem('userId'),
        })
      })
      if (!res.ok) {
        console.error('Faild to update cart item quantity')
        return []
      }
      const data = await res.json()
      console.log('Added address', data)
      return data
    } catch (error) {
      console.error('Error updating quantity: ', error)
      return []
    }
}

export const removeAddressAPI = async (
    id: number,
  ) => {
    try {
      const res = await fetch(`${API_URL}/address/${id}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('authToken')}`,
        },
      })
      if (!res.ok) {
        console.error('Faild to update cart item quantity')
        return []
      }
      const data = await res.json()
      console.log('Added address', data)
      return data
    } catch (error) {
      console.error('Error updating quantity: ', error)
      return []
    }
}

export const fetchAddressesByIdAPI = async (
  addressId: number
) => {
  try {
      const res = await fetch(`${API_URL}/address/${addressId}/`, {
          method: 'GET',
          headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('authToken')}`,
          },
      })
      if (!res.ok) {
          console.error(`Error fetching cart items: ${res.statusText}`)
          return {}
      }
      const data = await res.json()
      return data
  } catch (error) {
      console.error('Error fetching cart items:', error)
      return {}
  }
}
