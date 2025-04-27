// const API_URL = process.env.NEXT_PUBLIC_API_URL

// Mock data
const mockProducts = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 29.99,
    image: '/imgs/tshirts/white1.jpg',
    description: 'A comfortable and stylish white t-shirt',
    tags: [
      { id: 1, name: 't-shirt' },
      { id: 2, name: 'casual' }
    ],
    sizes: [
      { id: 1, size_text: 's', quantity: 10, product: 1 },
      { id: 2, size_text: 'm', quantity: 15, product: 1 },
      { id: 3, size_text: 'l', quantity: 8, product: 1 }
    ]
  },
  {
    id: 2,
    name: 'Black Denim Jeans',
    price: 49.99,
    image: '/imgs/tshirts/black1.jpg',
    description: 'Slim fit black denim jeans',
    tags: [
      { id: 3, name: 'jeans' },
      { id: 4, name: 'pants' }
    ],
    sizes: [
      { id: 4, size_text: '30', quantity: 5, product: 2 },
      { id: 5, size_text: '32', quantity: 8, product: 2 },
      { id: 6, size_text: '34', quantity: 6, product: 2 }
    ]
  }
]

const mockTags = [
  { id: 1, name: 't-shirt' },
  { id: 2, name: 'casual' },
  { id: 3, name: 'jeans' },
  { id: 4, name: 'pants' }
]

// Simulate delay
const delay = () => new Promise(resolve => setTimeout(resolve, 100))

export async function fetchProductsAPI() {
  await delay()
  return mockProducts
}

export const fetchTagsAPI = async () => {
  await delay()
  return mockTags
}