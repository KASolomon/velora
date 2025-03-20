import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Package, Printer } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { OrderStatusBadge } from "@/components/account/order-status-badge"
import { OrderTimeline } from "@/components/account/order-timeline"
import { orders } from "@/data/orders"

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  const orderId = Number.parseInt(params.id)
  const order = orders.find((o) => o.id === orderId)

  if (!order) {
    return (
      <div className="rounded-lg border bg-card dark:bg-card p-8 text-center">
        <h2 className="text-xl font-semibold mb-2">Order Not Found</h2>
        <p className="text-muted-foreground dark:text-muted-foreground mb-4">
          The order you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link href="/account/orders">Back to Orders</Link>
        </Button>
      </div>
    )
  }

  const orderDate = new Date(order.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Link
            href="/account/orders"
            className="inline-flex items-center text-sm text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground mb-2"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Orders
          </Link>
          <h2 className="text-2xl font-semibold">Order #{order.orderNumber}</h2>
          <p className="text-muted-foreground dark:text-muted-foreground">Placed on {orderDate}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Printer className="h-4 w-4" />
            Print Receipt
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-gold hover:text-gold/80 hover:border-gold/80 dark:text-gold dark:hover:text-gold/80 dark:hover:border-gold/80 gap-1"
          >
            <Package className="h-4 w-4" />
            Track Package
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="rounded-lg border bg-card dark:bg-card">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Order Items</h3>
                <OrderStatusBadge status={order.status} />
              </div>
              <div className="divide-y dark:divide-border">
                {order.items.map((item, index) => (
                  <div key={index} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 rounded-md overflow-hidden bg-muted dark:bg-muted">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground dark:text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${item.price.toFixed(2)}</p>
                        <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {order.events && (
            <div className="rounded-lg border bg-card dark:bg-card p-6">
              <OrderTimeline events={order.events} />
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border bg-card dark:bg-card p-6">
            <h3 className="font-medium text-lg mb-4">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground dark:text-muted-foreground">Subtotal</span>
                <span>${(order.total * 0.9).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground dark:text-muted-foreground">Shipping</span>
                <span>$9.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground dark:text-muted-foreground">Tax</span>
                <span>${(order.total * 0.1).toFixed(2)}</span>
              </div>
              <Separator className="my-2 bg-border dark:bg-border" />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span className="text-gold dark:text-gold">${order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {order.shippingAddress && (
            <div className="rounded-lg border bg-card dark:bg-card p-6">
              <h3 className="font-medium text-lg mb-4">Shipping Information</h3>
              <div className="space-y-1">
                <p className="font-medium">{order.shippingAddress.name}</p>
                <p>{order.shippingAddress.address}</p>
                <p>
                  {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                </p>
                <p>{order.shippingAddress.country}</p>
              </div>
            </div>
          )}

          {order.paymentMethod && (
            <div className="rounded-lg border bg-card dark:bg-card p-6">
              <h3 className="font-medium text-lg mb-4">Payment Method</h3>
              <div className="space-y-1">
                <p>
                  {order.paymentMethod.type}
                  {order.paymentMethod.last4 && ` ending in ${order.paymentMethod.last4}`}
                </p>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <Button className="w-full bg-gold hover:bg-gold/90 text-gold-foreground dark:bg-gold dark:hover:bg-gold/90 dark:text-gold-foreground">
              Buy Again
            </Button>
            <Button variant="outline" className="w-full">
              Request Return
            </Button>
            <Button variant="outline" className="w-full">
              Need Help?
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

