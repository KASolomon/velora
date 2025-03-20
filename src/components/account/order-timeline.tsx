import { format } from "date-fns"
import { CheckCircle2, Clock, Package, Truck } from "lucide-react"

import { cn } from "@/lib/utils"
import type { OrderEvent } from "@/types/order"

interface OrderTimelineProps {
  events: OrderEvent[]
}

export function OrderTimeline({ events }: OrderTimelineProps) {
  // Sort events by date, newest first
  const sortedEvents = [...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const getIcon = (type: string) => {
    switch (type) {
      case "order_placed":
        return <Clock className="h-5 w-5" />
      case "order_processed":
        return <CheckCircle2 className="h-5 w-5" />
      case "order_shipped":
        return <Truck className="h-5 w-5" />
      case "order_delivered":
        return <Package className="h-5 w-5" />
      default:
        return <Clock className="h-5 w-5" />
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="font-medium text-lg text-gold">Order Timeline</h3>
      <div className="space-y-4">
        {sortedEvents.map((event, index) => (
          <div key={index} className="flex gap-4">
            <div
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                index === 0
                  ? "bg-gold text-gold-foreground"
                  : "bg-muted dark:bg-zinc-800 text-muted-foreground dark:text-zinc-400",
              )}
            >
              {getIcon(event.type)}
            </div>
            <div className="space-y-1">
              <p className="font-medium">{event.title}</p>
              <p className="text-sm text-muted-foreground dark:text-zinc-400">
                {format(new Date(event.date), "MMMM d, yyyy 'at' h:mm a")}
              </p>
              {event.description && <p className="text-sm">{event.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

