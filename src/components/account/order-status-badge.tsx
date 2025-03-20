import { cn } from "@/lib/utils"

type OrderStatus = "processing" | "shipped" | "delivered" | "cancelled" | "returned"

interface OrderStatusBadgeProps {
  status: OrderStatus
  className?: string
}

export function OrderStatusBadge({ status, className }: OrderStatusBadgeProps) {
  const statusConfig = {
    processing: {
      label: "Processing",
      className: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    },
    shipped: {
      label: "Shipped",
      className: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    },
    delivered: {
      label: "Delivered",
      className: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    },
    cancelled: {
      label: "Cancelled",
      className: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    },
    returned: {
      label: "Returned",
      className: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    },
  }

  const { label, className: statusClassName } = statusConfig[status]

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        statusClassName,
        className,
      )}
    >
      {label}
    </span>
  )
}

