import { OrderList } from "@/components/account/order-list"
import { orders } from "@/data/orders"

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-card dark:bg-card p-6">
        <h2 className="text-xl font-semibold mb-2">Your Orders</h2>
        <p className="text-muted-foreground dark:text-muted-foreground">
          View and track all your orders. You can also buy items again or request returns.
        </p>
      </div>

      <OrderList orders={orders} />
    </div>
  )
}

