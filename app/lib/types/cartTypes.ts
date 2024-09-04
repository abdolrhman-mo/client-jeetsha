import { ProductType } from "./productTypes"

export interface CartItemType {
  id: number
  product: ProductType
  quantity: number
  size: string
  totalOrderItemsPrice: number
}