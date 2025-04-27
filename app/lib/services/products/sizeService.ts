// const API_URL = process.env.NEXT_PUBLIC_API_URL

// Mock data
const mockSizes = [
  { id: 1, size_text: 's', quantity: 10, product: 1 },
  { id: 2, size_text: 'm', quantity: 15, product: 1 },
  { id: 3, size_text: 'l', quantity: 8, product: 1 },
  { id: 4, size_text: 'xl', quantity: 5, product: 1 },
  { id: 5, size_text: '30', quantity: 5, product: 2 },
  { id: 6, size_text: '32', quantity: 8, product: 2 },
  { id: 7, size_text: '34', quantity: 6, product: 2 },
  { id: 8, size_text: '36', quantity: 4, product: 2 }
]

// Simulate delay
const delay = () => new Promise(resolve => setTimeout(resolve, 100))

export const fetchSizesAPI = async () => {
  await delay()
  return mockSizes
}

export const fetchSizeByIdAPI = async (sizeId: number) => {
  await delay()
  return mockSizes.find(size => size.id === sizeId) || null
}