const API_URL = process.env.NEXT_PUBLIC_API_URL

export interface InventoryData {
    product: number
    size_text: string
    type: 'add' | 'minus'
    quantity: number
    description: string
}

export async function createInventoryItemAPI(data: InventoryData) {
    try {
        const res = await fetch(`${API_URL}/inventory/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('authToken')}`
            },
            body: JSON.stringify(data),
        })

        if (!res.ok) {
            throw new Error(`Failed to create inventory item: ${res.statusText}`)
        }

        const result = await res.json()
        console.log('created inventory item', result)
        return result
    } catch (error) {
        console.error('Error creating inventory item:', error)
        throw error
    }
}

export async function fetchInventoryItemsAPI() {
    try {
    const res = await fetch(`${API_URL}/inventory/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('authToken')}`
        },
    })

    if (!res.ok) {
        throw new Error(`Failed to fetch inventory items: ${res.statusText}`)
    }

    const result = await res.json()
    console.log('fetched inventory items:', result)
    return result
    } catch (error) {
    console.error('Error fetching inventory items:', error)
    throw error
    }
}

export async function updateInventoryItemAPI(id: number, data: InventoryData) {
    try {
    const res = await fetch(`${API_URL}/${id}/`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    if (!res.ok) {
        throw new Error(`Failed to update inventory item: ${res.statusText}`)
    }

    const result = await res.json()
    return result
    } catch (error) {
    console.error('Error updating inventory item:', error)
    throw error
    }
}

export async function deleteInventoryItemAPI(id: number) {
    try {
    const res = await fetch(`${API_URL}/${id}/`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        },
    })

    if (!res.ok) {
        throw new Error(`Failed to delete inventory item: ${res.statusText}`)
    }

    return { success: true }
    } catch (error) {
    console.error('Error deleting inventory item:', error)
    throw error
    }
}
