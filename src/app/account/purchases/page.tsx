import Image from "next/image"
import Link from "next/link"
import { Download, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { products } from "@/data/products"

export default function PurchasesPage() {
  // Mock purchase history data
  const purchases = [
    {
      id: 1,
      product: products[0],
      date: "2023-11-15",
      orderNumber: "VLR-10042",
      price: 249.99,
      status: "Delivered",
      downloadable: false,
    },
    {
      id: 2,
      product: products[3],
      date: "2023-10-22",
      orderNumber: "VLR-10036",
      price: 1299.99,
      status: "Delivered",
      downloadable: false,
    },
    {
      id: 3,
      product: products[6],
      date: "2023-09-05",
      orderNumber: "VLR-10028",
      price: 149.99,
      status: "Delivered",
      downloadable: true,
    },
    {
      id: 4,
      product: products[9],
      date: "2023-08-17",
      orderNumber: "VLR-10019",
      price: 229.99,
      status: "Delivered",
      downloadable: false,
    },
  ]

  // Digital purchases (for the Digital tab)
  const digitalPurchases = purchases.filter((p) => p.downloadable)

  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-xl font-semibold mb-2">Purchase History</h2>
        <p className="text-muted-foreground">
          View and manage your purchase history, including digital downloads and receipts.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All Purchases</TabsTrigger>
            <TabsTrigger value="digital">Digital Items</TabsTrigger>
          </TabsList>

          <div className="flex justify-between items-center mt-6 mb-4">
            <p className="text-sm text-muted-foreground">Showing {purchases.length} purchases</p>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select defaultValue="recent">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="space-y-4">
              {purchases.map((purchase) => (
                <Card key={purchase.id} className="overflow-hidden">
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 h-32 bg-muted">
                      <Image
                        src={purchase.product.image || "/placeholder.svg"}
                        alt={purchase.product.name}
                        width={128}
                        height={128}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <h3 className="font-medium">{purchase.product.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            Order #{purchase.orderNumber} • {new Date(purchase.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gold">${purchase.price.toFixed(2)}</p>
                          <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                            {purchase.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/account/orders/${purchase.orderNumber}`}>View Order</Link>
                        </Button>
                        <Button variant="outline" size="sm">
                          Buy Again
                        </Button>
                        {purchase.downloadable && (
                          <Button variant="outline" size="sm" className="text-gold hover:text-gold/80">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="digital" className="mt-0">
            {digitalPurchases.length === 0 ? (
              <Card className="p-8 text-center">
                <h3 className="text-lg font-medium mb-2">No digital purchases</h3>
                <p className="text-muted-foreground mb-4">You haven't purchased any digital items yet.</p>
                <Button className="bg-gold hover:bg-gold/90 text-gold-foreground">Browse Digital Products</Button>
              </Card>
            ) : (
              <div className="space-y-4">
                {digitalPurchases.map((purchase) => (
                  <Card key={purchase.id} className="overflow-hidden">
                    <div className="flex flex-col sm:flex-row">
                      <div className="w-full sm:w-32 h-32 bg-muted">
                        <Image
                          src={purchase.product.image || "/placeholder.svg"}
                          alt={purchase.product.name}
                          width={128}
                          height={128}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <h3 className="font-medium">{purchase.product.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              Order #{purchase.orderNumber} • {new Date(purchase.date).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gold">${purchase.price.toFixed(2)}</p>
                            <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                              {purchase.status}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                          <Button variant="outline" size="sm" className="text-gold hover:text-gold/80">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                          <Button variant="outline" size="sm">
                            View License
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

