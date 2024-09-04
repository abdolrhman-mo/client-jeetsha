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