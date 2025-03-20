"use client"

import { Heart, Minus, Plus, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Product } from "@/types/product"
import { useState } from "react"

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = () => setQuantity((prev) => prev + 1)
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
        <div className="mt-2 flex items-center">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < product.rating ? "fill-gold text-gold" : "text-muted-foreground"}`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-muted-foreground">{product.reviews} reviews</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Brand: <span className="text-foreground">{product.brand}</span>
        </p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          {product.discount > 0 && (
            <span className="text-lg line-through text-muted-foreground">
              ${(product.price * (1 + product.discount / 100)).toFixed(2)}
            </span>
          )}
          <span className="text-3xl font-bold text-gold">${product.price.toFixed(2)}</span>
          {product.discount > 0 && (
            <span className="ml-2 rounded-full bg-black px-2 py-1 text-xs font-medium text-white">
              {product.discount}% OFF
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground">Price includes taxes. Shipping calculated at checkout.</p>
      </div>

      <div className="h-px bg-border" />

      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="color" className="text-sm font-medium">
            Color
          </label>
          <div className="flex gap-2">
            <button className="h-8 w-8 rounded-full bg-black ring-2 ring-gold ring-offset-2"></button>
            <button className="h-8 w-8 rounded-full bg-white ring-2 ring-offset-2"></button>
            <button className="h-8 w-8 rounded-full bg-gray-500 ring-2 ring-offset-2"></button>
            <button className="h-8 w-8 rounded-full bg-gold ring-2 ring-offset-2"></button>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="size" className="text-sm font-medium">
            Size
          </label>
          <Select defaultValue="m">
            <SelectTrigger id="size">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="xs">XS</SelectItem>
              <SelectItem value="s">S</SelectItem>
              <SelectItem value="m">M</SelectItem>
              <SelectItem value="l">L</SelectItem>
              <SelectItem value="xl">XL</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label htmlFor="quantity" className="text-sm font-medium">
            Quantity
          </label>
          <div className="flex items-center">
            <Button variant="outline" size="icon" className="h-9 w-9 rounded-r-none" onClick={decreaseQuantity}>
              <Minus className="h-4 w-4" />
              <span className="sr-only">Decrease</span>
            </Button>
            <div className="flex h-9 w-12 items-center justify-center border-y">{quantity}</div>
            <Button variant="outline" size="icon" className="h-9 w-9 rounded-l-none" onClick={increaseQuantity}>
              <Plus className="h-4 w-4" />
              <span className="sr-only">Increase</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        <Button size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground">
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
        <Button size="lg" variant="outline">
          <Heart className="mr-2 h-5 w-5" />
          Add to Wishlist
        </Button>
      </div>

      <div className="h-px bg-border" />

      <div className="space-y-4">
        <Tabs defaultValue="description">
          <TabsList className="w-full">
            <TabsTrigger value="description" className="flex-1">
              Description
            </TabsTrigger>
            <TabsTrigger value="specifications" className="flex-1">
              Specifications
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex-1">
              Reviews
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="pt-4">
            <div className="space-y-4">
              <p>
                Experience premium quality with the {product.name}. Designed for the discerning customer who demands
                excellence in every detail.
              </p>
              <p>
                This product features cutting-edge technology, premium materials, and exceptional craftsmanship. Whether
                you're a professional or an enthusiast, the {product.name} delivers outstanding performance and
                reliability.
              </p>
              <p>
                The sleek design and intuitive interface make it a pleasure to use, while the durable construction
                ensures it will stand the test of time.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="specifications" className="pt-4">
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="flex justify-between border-b py-2">
                  <span className="font-medium">Brand</span>
                  <span>{product.brand}</span>
                </div>
                <div className="flex justify-between border-b py-2">
                  <span className="font-medium">Model</span>
                  <span>PRO-{product.id}X</span>
                </div>
                <div className="flex justify-between border-b py-2">
                  <span className="font-medium">Dimensions</span>
                  <span>10 x 5 x 2 inches</span>
                </div>
                <div className="flex justify-between border-b py-2">
                  <span className="font-medium">Weight</span>
                  <span>1.2 lbs</span>
                </div>
                <div className="flex justify-between border-b py-2">
                  <span className="font-medium">Material</span>
                  <span>Premium Aluminum</span>
                </div>
                <div className="flex justify-between border-b py-2">
                  <span className="font-medium">Warranty</span>
                  <span>2 Years</span>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="pt-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < product.rating ? "fill-gold text-gold" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium">Based on {product.reviews} reviews</span>
                </div>
                <Button>Write a Review</Button>
              </div>
              <div className="h-px bg-border" />
              <div className="space-y-4">
                {[
                  {
                    name: "Sarah J.",
                    rating: 5,
                    date: "2 weeks ago",
                    comment:
                      "Absolutely love this product! The quality is exceptional and it exceeded my expectations.",
                  },
                  {
                    name: "Michael T.",
                    rating: 4,
                    date: "1 month ago",
                    comment: "Great product overall. The design is sleek and functionality is solid. Would recommend.",
                  },
                  {
                    name: "Emma R.",
                    rating: 5,
                    date: "2 months ago",
                    comment: "Worth every penny. This is my second purchase from this brand and they never disappoint.",
                  },
                ].map((review, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.date}</div>
                    </div>
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < review.rating ? "fill-gold text-gold" : "text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm">{review.comment}</p>
                    <div className="h-px bg-border" />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

