export type OrderStatus = "processing" | "shipped" | "delivered" | "cancelled" | "returned"

export interface OrderItem {
  id: number
  name: string
  price: number
  quantity: number
  image?: string
}

export interface OrderEvent {
  type: string
  title: string
  date: string
  description?: string
}

export interface Order {
  id: number
  orderNumber: string
  date: string
  status: OrderStatus
  total: number
  items: OrderItem[]
  events?: OrderEvent[]
  shippingAddress?: {
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  paymentMethod?: {
    type: string
    last4?: string
  }
}

