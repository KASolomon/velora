"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { OrderItem } from "@/components/account/order-item"
import type { Order } from "@/types/order"

interface OrderListProps {
  orders: Order[]
  itemsPerPage?: number
}

export function OrderList({ orders, itemsPerPage = 5 }: OrderListProps) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(orders.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentOrders = orders.slice(startIndex, endIndex)

  return (
    <div className="space-y-6">
      {currentOrders.length === 0 ? (
        <div className="rounded-lg border bg-card dark:bg-card p-8 text-center">
          <h3 className="text-lg font-medium mb-2">No orders found</h3>
          <p className="text-muted-foreground dark:text-muted-foreground mb-4">You haven't placed any orders yet.</p>
          <Button className="bg-gold hover:bg-gold/90 text-gold-foreground dark:bg-gold dark:hover:bg-gold/90 dark:text-gold-foreground">
            Start Shopping
          </Button>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {currentOrders.map((order) => (
              <OrderItem key={order.id} order={order} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2 py-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous page</span>
              </Button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <Button
                  key={i}
                  variant="outline"
                  size="sm"
                  className={
                    currentPage === i + 1
                      ? "bg-gold text-gold-foreground border-gold hover:bg-gold/90 hover:text-gold-foreground dark:bg-gold dark:text-gold-foreground dark:border-gold dark:hover:bg-gold/90"
                      : ""
                  }
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next page</span>
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

