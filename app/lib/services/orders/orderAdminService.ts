import { OrderRequest, OrderResponse } from "@/app/lib/types/orderTypes"
import { transformOrderData, transformOrdersList } from "./orderUtility"
import productsData from "@/app/lib/data/products.json"

// const API_URL = process.env.NEXT_PUBLIC_API_URL

// Mock data
const mockOrders: OrderResponse[] = [
  {
    id: 1,
    created_at: new Date().toISOString(),
    status: 'pending',
    user: {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      phone_number: '1234567890'
    },
    address: {
      address_text: '123 Fashion St',
      city: 'New York',
      country: 'USA'
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
    ],
    totalOrderPrice: productsData[0].price * 2
  },
  {
    id: 2,
    status: 'delivered',
    created_at: new Date(Date.now() - 86400000).toISOString(), // yesterday
    user: {
      id: 2,
      first_name: 'Jane',
      last_name: 'Smith',
      phone_number: '1234567890'
    },
    address: {
      address_text: '456 Style Ave',
      city: 'Los Angeles',
      country: 'USA'
    },
    order_items: [
      {
        id: 2,
        product: productsData[1],
        quantity: 1,
        size: {
          id: 2,
          size_text: '32',
          quantity: 8,
          product: 2
        }
      }
    ],
    totalOrderPrice: productsData[1].price
  }
]

// Simulate delay
const delay = () => new Promise(resolve => setTimeout(resolve, 100))

// Fetch all orders for the admin
export const fetchAllOrdersAPI = async () => {
  await delay()
  return mockOrders
}

// Fetch a specific order by id
export const fetchAdminOrderByIdAPI = async (orderId: number) => {
  await delay()
  return mockOrders.find(order => order.id === orderId) || null
}

// Change status between pending and delivered
export const changeOrderStatusAPI = async (
  orderId: number,
  state: 'pending' | 'delivered' | 'canceled',
  orderData: OrderResponse
) => {
  await delay()
  const order = mockOrders.find(o => o.id === orderId)
  if (order) {
    order.status = state
    order.address = orderData.address
    order.user = orderData.user
  }
  return order || null
}