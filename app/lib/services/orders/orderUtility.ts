import { OrderItemType, OrderResponse, OrderType } from "../../types/orderTypes"
import { fetchSizeByIdAPI } from "../products/sizeService"


// A utility function to replace size id with actual
// size text in order items (order.order_items)
export const addDetailsToOrders = async (orders: OrderType[]): Promise<OrderType[]> => {
    return await Promise.all(orders.map(async (order: OrderType) => {
        if (order.order_items.length > 0) {
            try {
                const itemsWithDetails = await Promise.all(order.order_items.map(async (item: OrderItemType) => {
                    const product = item.product
                    let size = null

                    // Fetch size details if available
                    if (item.size) {
                        try {
                            size = await fetchSizeByIdAPI(Number(item.size))
                        } catch (error) {
                            console.error(`Failed to fetch size details for item ${item.id}:`, error)
                        }
                    }

                    return {
                        ...item,
                        product,
                        size: size ? size.size_text : null,
                    }
                }))
                order.order_items = itemsWithDetails
            } catch (error) {
                console.error(`Failed to fetch item details for order ${order.id}:`, error)
            }
        }
        return order
    }))
}

// A utility function which takes order data and transform it to orderData typescript
// interface i want
export const transformOrderData = async (data: any) => {
  
  // console.log('data before transformation', data)

  const transformedData: OrderResponse = {
    id: data.id,
    created_at: data.created_at,
    status: data.status,
    order_items: data.order_items,
    address: {
      country: data.country,
      city: data.city,
      address_text: data.addressText
    },
    user: {
      id: data.user.id,
      first_name: data.user.first_name || '',
      last_name: data.user.last_name || '',
      phone_number: data.phone_number,
    }
  }

  // console.log('data after transformation', transformedData)

  return transformedData
}