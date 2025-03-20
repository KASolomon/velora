"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ChevronRight, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Layout } from "@/components/layout/layout"
import { products } from "@/data/products"
import {
  shippingFormSchema,
  type ShippingFormValues,
  paymentFormSchema,
  type PaymentFormValues,
} from "@/lib/validations/checkout"

export default function CheckoutPage() {
  const [step, setStep] = useState<"shipping" | "payment" | "review">("shipping")
  const [shippingData, setShippingData] = useState<ShippingFormValues | null>(null)
  const [paymentData, setPaymentData] = useState<PaymentFormValues | null>(null)

  const cartItems = [
    { product: products[0], quantity: 1 },
    { product: products[2], quantity: 2 },
    { product: products[5], quantity: 1 },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const shipping = 15.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  // Shipping form
  const shippingForm = useForm<ShippingFormValues>({
    resolver: zodResolver(shippingFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "us",
      phone: "",
      saveInfo: false,
    },
  })

  // Payment form
  const paymentForm = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: {
      paymentMethod: "credit-card",
      cardNumber: "",
      expiryDate: "",
      cvc: "",
      nameOnCard: "",
      savePayment: false,
    },
  })

  function onShippingSubmit(data: ShippingFormValues) {
    setShippingData(data)
    setStep("payment")
  }

  function onPaymentSubmit(data: PaymentFormValues) {
    setPaymentData(data)
    setStep("review")
  }

  function onPlaceOrder() {
    // Here you would typically send the order to your backend
    console.log("Order placed", { shipping: shippingData, payment: paymentData, items: cartItems })
    // Redirect to order confirmation page
  }

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-gold">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/cart" className="hover:text-gold">
            Cart
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span>Checkout</span>
        </div>

        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-lg border bg-card mb-8">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Checkout Steps</h2>
                  <div className="flex items-center">
                    <div
                      className={`h-2 w-8 rounded-full ${step === "shipping" || step === "payment" || step === "review" ? "bg-gold" : "bg-muted"}`}
                    ></div>
                    <div
                      className={`h-2 w-8 rounded-full mx-1 ${step === "payment" || step === "review" ? "bg-gold" : "bg-muted"}`}
                    ></div>
                    <div className={`h-2 w-8 rounded-full ${step === "review" ? "bg-gold" : "bg-muted"}`}></div>
                  </div>
                </div>

                {step === "shipping" && (
                  <Form {...shippingForm}>
                    <form onSubmit={shippingForm.handleSubmit(onShippingSubmit)} className="space-y-6">
                      <h3 className="text-lg font-medium">Shipping Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={shippingForm.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your first name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={shippingForm.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your last name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={shippingForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="Enter your email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={shippingForm.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel>Street Address</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your street address" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={shippingForm.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your city" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={shippingForm.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>State/Province</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select state" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="ca">California</SelectItem>
                                  <SelectItem value="ny">New York</SelectItem>
                                  <SelectItem value="tx">Texas</SelectItem>
                                  <SelectItem value="fl">Florida</SelectItem>
                                  <SelectItem value="il">Illinois</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={shippingForm.control}
                          name="zipCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>ZIP/Postal Code</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your ZIP code" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={shippingForm.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Country</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select country" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="us">United States</SelectItem>
                                  <SelectItem value="ca">Canada</SelectItem>
                                  <SelectItem value="uk">United Kingdom</SelectItem>
                                  <SelectItem value="au">Australia</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={shippingForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={shippingForm.control}
                        name="saveInfo"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Save this information for next time</FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-gold-foreground">
                        Continue to Payment
                      </Button>
                    </form>
                  </Form>
                )}

                {step === "payment" && (
                  <Form {...paymentForm}>
                    <form onSubmit={paymentForm.handleSubmit(onPaymentSubmit)} className="space-y-6">
                      <h3 className="text-lg font-medium">Payment Method</h3>
                      <FormField
                        control={paymentForm.control}
                        name="paymentMethod"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-3"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0 rounded-lg border p-4">
                                  <FormControl>
                                    <RadioGroupItem value="credit-card" />
                                  </FormControl>
                                  <FormLabel className="font-normal flex items-center">
                                    <CreditCard className="h-5 w-5 mr-2" />
                                    Credit Card
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0 rounded-lg border p-4">
                                  <FormControl>
                                    <RadioGroupItem value="paypal" />
                                  </FormControl>
                                  <FormLabel className="font-normal flex items-center">
                                    <svg
                                      className="h-5 w-5 mr-2"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6.5 21H3L4.5 3H10.5C12.5 3 14 4 14 6C14 8 12.5 9 10.5 9H7.5L6.5 21Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M13.5 21H10L11.5 3H17.5C19.5 3 21 4 21 6C21 8 19.5 9 17.5 9H14.5L13.5 21Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                    PayPal
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {paymentForm.watch("paymentMethod") === "credit-card" && (
                        <div className="space-y-4">
                          <h4 className="font-medium">Card Information</h4>
                          <FormField
                            control={paymentForm.control}
                            name="cardNumber"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Card Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="1234 5678 9012 3456" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="grid grid-cols-2 gap-4">
                            <FormField
                              control={paymentForm.control}
                              name="expiryDate"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Expiry Date</FormLabel>
                                  <FormControl>
                                    <Input placeholder="MM/YY" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={paymentForm.control}
                              name="cvc"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>CVC</FormLabel>
                                  <FormControl>
                                    <Input placeholder="123" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <FormField
                            control={paymentForm.control}
                            name="nameOnCard"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name on Card</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter name as it appears on card" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}

                      <FormField
                        control={paymentForm.control}
                        name="savePayment"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Save this payment method for future purchases</FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />

                      <div className="flex gap-4">
                        <Button variant="outline" className="flex-1" onClick={() => setStep("shipping")}>
                          Back to Shipping
                        </Button>
                        <Button type="submit" className="flex-1 bg-gold hover:bg-gold/90 text-gold-foreground">
                          Review Order
                        </Button>
                      </div>
                    </form>
                  </Form>
                )}

                {step === "review" && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium">Review Your Order</h3>

                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <h4 className="font-medium mb-2">Shipping Information</h4>
                        {shippingData && (
                          <>
                            <p>
                              {shippingData.firstName} {shippingData.lastName}
                            </p>
                            <p>{shippingData.address}</p>
                            <p>
                              {shippingData.city}, {shippingData.state.toUpperCase()} {shippingData.zipCode}
                            </p>
                            <p>
                              {shippingData.country === "us"
                                ? "United States"
                                : shippingData.country === "ca"
                                  ? "Canada"
                                  : shippingData.country === "uk"
                                    ? "United Kingdom"
                                    : "Australia"}
                            </p>
                            <p>{shippingData.email}</p>
                            <p>{shippingData.phone}</p>
                          </>
                        )}
                        <Button variant="link" className="p-0 h-auto text-gold" onClick={() => setStep("shipping")}>
                          Edit
                        </Button>
                      </div>

                      <div className="rounded-lg border p-4">
                        <h4 className="font-medium mb-2">Payment Method</h4>
                        {paymentData && (
                          <div className="flex items-center">
                            {paymentData.paymentMethod === "credit-card" ? (
                              <>
                                <CreditCard className="h-5 w-5 mr-2" />
                                <span>Credit Card ending in {paymentData.cardNumber?.slice(-4) || "****"}</span>
                              </>
                            ) : (
                              <>
                                <svg
                                  className="h-5 w-5 mr-2"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.5 21H3L4.5 3H10.5C12.5 3 14 4 14 6C14 8 12.5 9 10.5 9H7.5L6.5 21Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M13.5 21H10L11.5 3H17.5C19.5 3 21 4 21 6C21 8 19.5 9 17.5 9H14.5L13.5 21Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span>PayPal</span>
                              </>
                            )}
                          </div>
                        )}
                        <Button variant="link" className="p-0 h-auto text-gold" onClick={() => setStep("payment")}>
                          Edit
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium">Order Items</h4>
                      <div className="divide-y border rounded-lg">
                        {cartItems.map((item) => (
                          <div key={item.product.id} className="flex items-center gap-4 p-4">
                            <div className="w-16 h-16 rounded-md overflow-hidden bg-muted">
                              <Image
                                src={item.product.image || "/placeholder.svg"}
                                alt={item.product.name}
                                width={64}
                                height={64}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h5 className="font-medium">{item.product.name}</h5>
                              <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-gold">
                                ${(item.product.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" className="flex-1" onClick={() => setStep("payment")}>
                        Back to Payment
                      </Button>
                      <Button className="flex-1 bg-gold hover:bg-gold/90 text-gold-foreground" onClick={onPlaceOrder}>
                        Place Order
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-lg border bg-card sticky top-24">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Items ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                    </span>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

