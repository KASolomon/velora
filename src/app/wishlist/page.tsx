import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { products } from "@/data/products"

export default function WishlistPage() {
  // For demo purposes, we'll use a subset of products as wishlist items
  const wishlistItems = products.slice(0, 5)

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-6">Items added to your wishlist will be saved here.</p>
            <Link href="/category/electronics">
              <Button className="bg-gold hover:bg-gold/90 text-gold-foreground">Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="relative group rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="absolute top-2 right-2 z-10">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-destructive hover:text-destructive-foreground"
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
                      <h3 className="font-medium group-hover:text-gold transition-colors line-clamp-1">{item.name}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">{item.brand}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-lg font-semibold text-gold">${item.price.toFixed(2)}</span>
                      <Button size="sm" className="bg-gold hover:bg-gold/90 text-gold-foreground rounded-full">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-6 border-t">
              <Button variant="outline">
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Wishlist
              </Button>
              <Link href="/category/electronics">
                <Button variant="outline">Continue Shopping</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

