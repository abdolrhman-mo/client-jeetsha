// const API_URL = process.env.NEXT_PUBLIC_API_URL

export interface InventoryData {
    product: number
    size_text: string
    type: 'add' | 'minus'
    quantity: number
    description: string
}

// Mock data
const mockInventory: any[] = []

// Simulate delay
const delay = () => new Promise(resolve => setTimeout(resolve, 100))

export async function createInventoryItemAPI(data: InventoryData) {
    await delay()
    mockInventory.push({ id: mockInventory.length + 1, ...data })
    return { success: true }
}

export async function fetchInventoryItemsAPI() {
    await delay()
    return mockInventory
}

export async function updateInventoryItemAPI(id: number, data: InventoryData) {
    await delay()
    const index = mockInventory.findIndex(item => item.id === id)
    if (index !== -1) {
        mockInventory[index] = { ...mockInventory[index], ...data }
    }
    return { success: true }
}

export async function deleteInventoryItemAPI(id: number) {
    await delay()
    const index = mockInventory.findIndex(item => item.id === id)
    if (index !== -1) {
        mockInventory.splice(index, 1)
    }
    return { success: true }
}
