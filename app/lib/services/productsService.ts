import { ProductType } from "../types/productTypes"

// Mock data structure
const mockProducts: ProductType[] = [
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
      { id: 3, size_text: 'l', quantity: 8, product: 1 },
      { id: 4, size_text: 'xl', quantity: 5, product: 1 }
    ],
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
      { id: 5, size_text: '30', quantity: 5, product: 2 },
      { id: 6, size_text: '32', quantity: 8, product: 2 },
      { id: 7, size_text: '34', quantity: 6, product: 2 },
      { id: 8, size_text: '36', quantity: 4, product: 2 }
    ],
  },
]

// Simulate API delay
const simulateDelay = () => new Promise(resolve => setTimeout(resolve, 300))

export const fetchProductsAPI = async () => {
  await simulateDelay()
  return mockProducts
}

export const addProductAPI = async (formData: FormData) => {
  await simulateDelay()
  
  // Create a new product
  const newProduct: ProductType = {
    id: mockProducts.length + 1,
    name: formData.get('name') as string,
    price: parseFloat(formData.get('price') as string),
    image: '/imgs/tshirts/white1.jpg', // Default image
    description: formData.get('description') as string,
    tags: [
      { id: 5, name: 'new' }
    ],
    sizes: [
      { id: 9, size_text: 's', quantity: 10, product: mockProducts.length + 1 },
      { id: 10, size_text: 'm', quantity: 15, product: mockProducts.length + 1 },
      { id: 11, size_text: 'l', quantity: 8, product: mockProducts.length + 1 }
    ],
  }
  
  mockProducts.push(newProduct)
  return newProduct
} 