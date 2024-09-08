import { ProductType } from "./productTypes"

export interface OrderItemType {
  id: number
  product: ProductType
  quantity: number
  size: any
}

export interface OrderType {
  id: number
  user: any
  created_at: string
  status: 'pending' | 'delivered'
  order_items: OrderItemType[]
  country: string
  city: string
  addressText: string
  phone_number: string
}

export interface OrderRequest {
  address: {
    id: number
    country: string
    city: string
    address_text: string
  }
  user: {
    first_name: string
    last_name: string
    phone_number: string
  }
}

export interface OrderResponse {
  id: number
  created_at: string 
  status: 'pending' | 'delivered' | 'canceled'
  order_items: OrderItemType[]
  address: {
    country: string
    city: string
    address_text: string
  }
  user: {
    id: number
    first_name: string
    last_name: string
    phone_number: string
  }
  totalOrderPrice: number
}