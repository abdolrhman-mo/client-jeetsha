import { CartItemType } from "../../types/cartTypes"
import { fetchSizesAPI } from "./sizeService"



// Replace size id with size text
export const changeSizes = async (data: CartItemType[]) => {
  const cartItems = data
  const sizes = await fetchSizesAPI()
  const sizesMap = new Map(sizes.map((size: any) => [size.id, size.size_text]))

  let modifiedData: any[] = cartItems.map((cartItem: CartItemType) => {
    let sizeValue = sizesMap.get(cartItem.size) || ''

    return {
      id: cartItem.id,
      product: cartItem.product,
      quantity: cartItem.quantity,
      size: sizeValue,
      totalOrderItemsPrice: cartItem.totalOrderItemsPrice
    }
  })

  // console.log('modifiedData',modifiedData)

  return modifiedData
}