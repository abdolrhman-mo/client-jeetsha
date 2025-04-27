import { CartItemType } from "../types/cartTypes"
import { TagType, SizeType } from "../types/productTypes"

// Mock data structure
const mockCartItems: CartItemType[] = [
  {
    id: 1,
    product: {
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
    quantity: 1,
    size: 'm',
    totalOrderItemsPrice: 29.99
  },
  {
    id: 2,
    product: {
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
    quantity: 1,
    size: '32',
    totalOrderItemsPrice: 49.99
  },
]

// Simulate API delay
const simulateDelay = () => new Promise(resolve => setTimeout(resolve, 300))

export const fetchCartItemsAPI = async () => {
  await simulateDelay()
  return mockCartItems
}

export const addToCartAPI = async (product_id: number, size_text: string) => {
  await simulateDelay()
  
  // Create a new cart item
  const newItem: CartItemType = {
    id: mockCartItems.length + 1,
    product: {
      id: product_id,
      name: `Product ${product_id}`,
      price: 39.99,
      image: '/imgs/tshirts/white1.jpg',
      description: 'A great product',
      tags: [
        { id: 5, name: 'new' }
      ],
      sizes: [
        { id: 9, size_text: 'S', quantity: 10, product: product_id },
        { id: 10, size_text: 'M', quantity: 15, product: product_id },
        { id: 11, size_text: 'L', quantity: 8, product: product_id }
      ],
    },
    quantity: 1,
    size: size_text,
    totalOrderItemsPrice: 39.99
  }
  
  mockCartItems.push(newItem)
  return newItem
}

export const removeItemFromCartAPI = async (cartItemId: number) => {
  await simulateDelay()
  const index = mockCartItems.findIndex(item => item.id === cartItemId)
  if (index !== -1) {
    mockCartItems.splice(index, 1)
  }
}

export const changeCartItemsQuantityAPI = async (
  cartItemId: number,
  newQuantity: number
) => {
  await simulateDelay()
  const item = mockCartItems.find(item => item.id === cartItemId)
  if (item) {
    item.quantity = newQuantity
    item.totalOrderItemsPrice = item.product.price * newQuantity
    return item
  }
  return null
}

export const syncCartWithServerAPI = async (cartItems: CartItemType[]): Promise<void> => {
  await simulateDelay()
  // In mock version, we don't need to do anything since we're using local data
  console.log('Cart synced with server (mock)')
}