import type { Order } from "@/types/order"
import { products } from "@/data/products"

// Generate order items from products
const generateOrderItems = (productIds: number[]) => {
  return productIds.map((id) => {
    const product = products.find((p) => p.id === id) || products[0]
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: Math.floor(Math.random() * 3) + 1,
      image: product.image,
    }
  })
}

export const orders: Order[] = [
  {
    id: 1,
    orderNumber: "VLR-10042",
    date: "2023-03-15T10:30:00Z",
    status: "delivered",
    total: 529.97,
    items: generateOrderItems([1, 3, 6]),
    events: [
      {
        type: "order_placed",
        title: "Order Placed",
        date: "2023-03-15T10:30:00Z",
        description: "Your order has been received and is being processed.",
      },
      {
        type: "order_processed",
        title: "Order Processed",
        date: "2023-03-16T14:45:00Z",
        description: "Your order has been processed and is being prepared for shipping.",
      },
      {
        type: "order_shipped",
        title: "Order Shipped",
        date: "2023-03-17T09:20:00Z",
        description: "Your order has been shipped via Express Delivery.",
      },
      {
        type: "order_delivered",
        title: "Order Delivered",
        date: "2023-03-19T15:10:00Z",
        description: "Your order has been delivered successfully.",
      },
    ],
    shippingAddress: {
      name: "John Doe",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
    },
    paymentMethod: {
      type: "Credit Card",
      last4: "4242",
    },
  },
  {
    id: 2,
    orderNumber: "VLR-10043",
    date: "2023-04-02T14:20:00Z",
    status: "delivered",
    total: 1299.99,
    items: generateOrderItems([4]),
    events: [
      {
        type: "order_placed",
        title: "Order Placed",
        date: "2023-04-02T14:20:00Z",
        description: "Your order has been received and is being processed.",
      },
      {
        type: "order_processed",
        title: "Order Processed",
        date: "2023-04-03T11:30:00Z",
        description: "Your order has been processed and is being prepared for shipping.",
      },
      {
        type: "order_shipped",
        title: "Order Shipped",
        date: "2023-04-04T08:45:00Z",
        description: "Your order has been shipped via Premium Delivery.",
      },
      {
        type: "order_delivered",
        title: "Order Delivered",
        date: "2023-04-06T13:15:00Z",
        description: "Your order has been delivered successfully.",
      },
    ],
    shippingAddress: {
      name: "John Doe",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
    },
    paymentMethod: {
      type: "PayPal",
    },
  },
  {
    id: 3,
    orderNumber: "VLR-10044",
    date: "2023-05-10T09:15:00Z",
    status: "shipped",
    total: 269.97,
    items: generateOrderItems([5, 12]),
    events: [
      {
        type: "order_placed",
        title: "Order Placed",
        date: "2023-05-10T09:15:00Z",
        description: "Your order has been received and is being processed.",
      },
      {
        type: "order_processed",
        title: "Order Processed",
        date: "2023-05-11T14:30:00Z",
        description: "Your order has been processed and is being prepared for shipping.",
      },
      {
        type: "order_shipped",
        title: "Order Shipped",
        date: "2023-05-12T10:45:00Z",
        description: "Your order has been shipped via Standard Delivery.",
      },
    ],
    shippingAddress: {
      name: "John Doe",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
    },
    paymentMethod: {
      type: "Credit Card",
      last4: "1234",
    },
  },
  {
    id: 4,
    orderNumber: "VLR-10045",
    date: "2023-06-05T16:40:00Z",
    status: "processing",
    total: 179.99,
    items: generateOrderItems([11]),
    events: [
      {
        type: "order_placed",
        title: "Order Placed",
        date: "2023-06-05T16:40:00Z",
        description: "Your order has been received and is being processed.",
      },
    ],
    shippingAddress: {
      name: "John Doe",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
    },
    paymentMethod: {
      type: "Credit Card",
      last4: "5678",
    },
  },
  {
    id: 5,
    orderNumber: "VLR-10046",
    date: "2023-06-20T11:25:00Z",
    status: "cancelled",
    total: 229.99,
    items: generateOrderItems([10]),
    events: [
      {
        type: "order_placed",
        title: "Order Placed",
        date: "2023-06-20T11:25:00Z",
        description: "Your order has been received and is being processed.",
      },
      {
        type: "order_cancelled",
        title: "Order Cancelled",
        date: "2023-06-21T09:15:00Z",
        description: "Your order has been cancelled as requested.",
      },
    ],
    shippingAddress: {
      name: "John Doe",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
    },
    paymentMethod: {
      type: "PayPal",
    },
  },
]

