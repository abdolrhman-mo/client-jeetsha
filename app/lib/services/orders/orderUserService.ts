import { CartItemType } from "../../types/cartTypes"
import { OrderRequest, OrderResponse } from "../../types/orderTypes"
import { transformOrderData, transformOrdersList } from "./orderUtility"
import productsData from "@/app/lib/data/products.json"

// const API_URL = process.env.NEXT_PUBLIC_API_URL

// Mock data
const mockUserOrders: OrderResponse[] = [
  {
    id: 1,
    totalOrderPrice: 59.98,
    status: 'pending',
    created_at: new Date().toISOString(),
    user: {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      phone_number: '1234567890'
    },
    address: {
      country: 'USA',
      city: 'New York',
      address_text: '123 Fashion St'
    },
    order_items: [
      {
        id: 1,
        product: productsData[0],
        quantity: 2,
        size: {
          id: 1,
          size_text: 'm',
          quantity: 10,
          product: 1
        }
      }
    ]
  }
]

// Simulate delay
const delay = () => new Promise(resolve => setTimeout(resolve, 100))

// Fetch user orders
export const fetchUserOrdersAPI = async () => {
  await delay()
  return mockUserOrders
}

export const placeUserOrderAPI = async () => {
  await delay()
  const newOrder: OrderResponse = {
    ...mockUserOrders[0],
    id: mockUserOrders.length + 1,
    created_at: new Date().toISOString(),
    totalOrderPrice: productsData[0].price * 2
  }
  mockUserOrders.push(newOrder)
  return newOrder
}

export const addOrderDataAPI = async (orderId: number, orderData: OrderRequest) => {
  await delay()
  const order = mockUserOrders.find(o => o.id === orderId)
  if (order) {
    order.user = {
      id: 1,
      ...orderData.user
    }
    order.address = orderData.address
  }
  return order || null
}

export const createBuyItNowOrderAPI = async (product_id: number, size_text: string) => {
  await delay()
  const newOrder: OrderResponse = {
    id: mockUserOrders.length + 1,
    status: 'pending',
    created_at: new Date().toISOString(),
    user: {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      phone_number: '1234567890'
    },
    address: {
      country: 'USA',
      city: 'New York',
      address_text: '123 Fashion St'
    },
    order_items: [
      {
        id: mockUserOrders.length + 1,
        product: productsData[0],
        quantity: 1,
        size: {
          id: 1,
          size_text: size_text,
          quantity: 10,
          product: product_id
        }
      }
    ],
    totalOrderPrice: productsData[0].price
  }
  mockUserOrders.push(newOrder)
  return newOrder
}

export const createOrderAPI = async (orderData: OrderRequest) => {
  await delay()
  const newOrder: OrderResponse = {
    id: mockUserOrders.length + 1,
    status: 'pending',
    created_at: new Date().toISOString(),
    user: {
      id: 1,
      ...orderData.user
    },
    address: orderData.address,
    order_items: [],
    totalOrderPrice: 0
  }
  mockUserOrders.push(newOrder)
  return newOrder
}

export const createOrderItemAPI = async (order: number, product_id: number, size_text: string) => {
  await delay()
  const orderItem = {
    id: mockUserOrders.length + 1,
    product: productsData[0],
    quantity: 1,
    size: {
      id: 1,
      size_text: size_text,
      quantity: 10,
      product: product_id
    }
  }
  return orderItem
}

// Guest functions
export const createGuestOrderAPI = async (orderData: OrderRequest) => {
  await delay()
  const newOrder: OrderResponse = {
    id: mockUserOrders.length + 1,
    status: 'pending',
    created_at: new Date().toISOString(),
    user: {
      id: 1,
      ...orderData.user
    },
    address: orderData.address,
    order_items: [],
    totalOrderPrice: 0
  }
  mockUserOrders.push(newOrder)
  return newOrder
}

export const addOrderItemToGuestOrderAPI = async (orderId: number, orderItem: CartItemType) => {
  await delay()
  const order = mockUserOrders.find(o => o.id === orderId)
  if (order) {
    order.order_items.push({
      id: order.order_items.length + 1,
      product: orderItem.product,
      quantity: orderItem.quantity,
      size: {
        id: 1,
        size_text: orderItem.size,
        quantity: 10,
        product: orderItem.product.id
      }
    })
    order.totalOrderPrice = order.order_items.reduce((total, item) => 
      total + (item.product.price * item.quantity), 0
    )
  }
  return order || null
}