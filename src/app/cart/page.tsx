"use client"

import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Layout } from "@/components/layout/layout"
import { products } from "@/data/products"

interface CartItem {
  product: (typeof products)[0]
  quantity: number
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: products[0], quantity: 1 },
    { product: products[2], quantity: 2 },
    { product: products[5], quantity: 1 },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems((prev) => prev.map((item) => (item.product.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const shipping = 15.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Link href="/category/electronics">
              <Button className="bg-gold hover:bg-gold/90 text-gold-foreground">Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="rounded-lg border bg-card">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Shopping Cart ({cartItems.length} items)</h2>
                  <div className="divide-y">
                    {cartItems.map((item) => (
                      <div key={item.product.id} className="py-6 first:pt-0 last:pb-0">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="w-full sm:w-24 h-24 rounded-md overflow-hidden bg-muted">
                            <Image
                              src={item.product.image || "/placeholder.svg"}
                              alt={item.product.name}
                              width={96}
                              height={96}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex-1 flex flex-col sm:flex-row justify-between">
                            <div className="space-y-1">
                              <h3 className="font-medium">{item.product.name}</h3>
                              <p className="text-sm text-muted-foreground">Brand: {item.product.brand}</p>
                              <p className="text-sm text-muted-foreground">
                                Unit Price:{" "}
                                <span className="text-gold font-medium">${item.product.price.toFixed(2)}</span>
                              </p>
                            </div>
                            <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between mt-4 sm:mt-0">
                              <div className="flex items-center">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8 rounded-r-none"
                                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                >
                                  <Minus className="h-3 w-3" />
                                  <span className="sr-only">Decrease</span>
                                </Button>
                                <div className="flex h-8 w-10 items-center justify-center border-y text-sm">
                                  {item.quantity}
                                </div>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8 rounded-l-none"
                                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                  <span className="sr-only">Increase</span>
                                </Button>
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="font-semibold text-gold">
                                  ${(item.product.price * item.quantity).toFixed(2)}
                                </span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-muted-foreground hover:text-destructive"
                                  onClick={() => removeItem(item.product.id)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                  <span className="sr-only">Remove</span>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="rounded-lg border bg-card">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="h-px bg-border"></div>
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span className="text-gold">${total.toFixed(2)}</span>
                    </div>

                    <div className="pt-4">
                      <Input placeholder="Promo code" className="mb-2" />
                      <Button variant="outline" className="w-full mb-4">
                        Apply
                      </Button>
                      <Link href="/checkout">
                        <Button className="w-full bg-gold hover:bg-gold/90 text-gold-foreground">
                          Proceed to Checkout
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

