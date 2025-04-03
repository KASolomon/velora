import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { products } from "@/data/products"

export default function WishlistPage() {
  // For demo purposes, we'll use a subset of products as wishlist items
  const wishlistItems = products.slice(0, 5)

  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-card dark:bg-card p-6">
        <h2 className="text-xl font-semibold mb-2">Your Wishlist</h2>
        <p className="text-muted-foreground dark:text-muted-foreground">
          Items you've saved for later. Add them to your cart when you're ready to purchase.
        </p>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="rounded-lg border bg-card dark:bg-card p-8 text-center">
          <h3 className="text-lg font-medium mb-2">Your wishlist is empty</h3>
          <p className="text-muted-foreground dark:text-muted-foreground mb-4">
            Items added to your wishlist will be saved here.
          </p>
          <Button className="bg-gold hover:bg-gold/90 text-gold-foreground dark:bg-gold dark:hover:bg-gold/90 dark:text-gold-foreground">
            <Link href="/category/electronics">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="relative group rounded-lg border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute top-2 right-2 z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-destructive hover:text-destructive-foreground dark:bg-zinc-800/80 dark:hover:bg-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Remove from wishlist</span>
                </Button>
              </div>
              <Link href={`/product/${item.id}`}>
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-4">
                <Link href={`/product/${item.id}`}>
                  <h3 className="font-medium group-hover:text-gold dark:group-hover:text-gold transition-colors line-clamp-1">
                    {item.name}
                  </h3>
                </Link>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mt-1">{item.brand}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-semibold text-gold dark:text-gold">${item.price.toFixed(2)}</span>
                  <Button
                    size="sm"
                    className="bg-gold hover:bg-gold/90 text-gold-foreground dark:bg-gold dark:hover:bg-gold/90 dark:text-gold-foreground rounded-full"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {wishlistItems.length > 0 && (
        <div className="flex justify-between items-center pt-6 border-t dark:border-zinc-800">
          <Button variant="outline" className="text-destructive dark:text-destructive dark:border-zinc-700">
            <Trash2 className="h-4 w-4 mr-2" />
            Clear Wishlist
          </Button>
          <Link href="/category/electronics">
            <Button variant="outline" className="dark:border-zinc-700">
              Continue Shopping
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}

