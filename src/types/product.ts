export interface Product {
  id: number
  name: string
  brand: string
  price: number
  rating: number
  reviews: number
  image: string
  isNew?: boolean
  discount?: number
  description?: string
  specifications?: Record<string, string>
}

