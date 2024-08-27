export interface TagType {
    id: number
    name: string
}

export interface SizeType {
    id: number
    size_text: string
    quantity: number
    product: number
}

export interface ProductType {
    id: number
    name: string
    price: number
    image: string
    description: string
    tags: TagType[]
    sizes: SizeType[]
}

export interface CartItemType {
    id: number
    product: ProductType
    quantity: number
    size: string
    totalOrderItemsPrice: number
}

export interface OrderType {
    id: number
    user: number
    created_at: string
    status: string
    order_items: any[]
    address: string | null
}

export interface AddressType {
    id: number
    country: string
    city: string
    addressText: string
    phone_number: string
    user: number | null
}