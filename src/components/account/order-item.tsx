import Link from "next/link";
import { format } from "date-fns";
import { Package } from "lucide-react";

import { Button } from "@/components/ui/button";
import { OrderStatusBadge } from "@/components/account/order-status-badge";
import type { Order } from "@/types/order";

interface OrderItemProps {
  order: Order;
}

export function OrderItem({ order }: OrderItemProps) {
  return (
    <div className="rounded-lg border border-borderColor dark:border-zinc-800 bg-card dark:bg-zinc-900 p-4 shadow-xs hover:border-gold/30 dark:hover:border-gold/20 transition-all duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="rounded-md bg-muted dark:bg-zinc-800 p-2">
            <Package className="h-6 w-6 text-gold" />
          </div>
          <div>
            <h3 className="font-medium">Order #{order.orderNumber}</h3>
            <p className="text-sm text-muted-foreground dark:text-zinc-400">
              {format(new Date(order.date), "MMMM d, yyyy")} •{" "}
              {order.items.length} {order.items.length === 1 ? "item" : "items"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <OrderStatusBadge status={order.status} />
          <span className="text-sm font-medium text-gold">
            ${order.total.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {order.items.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="h-10 w-10 rounded-md bg-muted dark:bg-zinc-800 overflow-hidden"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
          {order.items.length > 3 && (
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted dark:bg-zinc-800 text-xs font-medium">
              +{order.items.length - 3}
            </div>
          )}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href={`/account/orders/${order.id}`}>View Details</Link>
          </Button>
          <Button variant="gold-outline" size="sm">
            Buy Again
          </Button>
        </div>
      </div>
    </div>
  );
}
