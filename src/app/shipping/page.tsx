import { Package, RefreshCw, Truck } from "lucide-react"

import { Layout } from "@/components/layout/layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ShippingPage() {
  return (
    <Layout>
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-2">Shipping & Returns</h1>
            <p className="text-muted-foreground">
              Learn about our shipping methods, delivery times, and return policies.
            </p>
          </div>

          <Tabs defaultValue="shipping" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="shipping" className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                <span>Shipping</span>
              </TabsTrigger>
              <TabsTrigger value="returns" className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4" />
                <span>Returns</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="shipping" className="mt-6">
              <div className="space-y-8">
                <div className="rounded-lg border bg-card p-6">
                  <h2 className="text-xl font-semibold mb-4">Shipping Methods</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-gold/10 p-3">
                        <Truck className="h-6 w-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-medium">Standard Shipping</h3>
                        <p className="text-muted-foreground mt-1">3-5 business days</p>
                        <p className="text-sm mt-2">Free for orders over $50, $5.99 for orders under $50</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-gold/10 p-3">
                        <Package className="h-6 w-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-medium">Express Shipping</h3>
                        <p className="text-muted-foreground mt-1">1-2 business days</p>
                        <p className="text-sm mt-2">$12.99 flat rate</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-gold/10 p-3">
                        <Package className="h-6 w-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-medium">Same-Day Delivery</h3>
                        <p className="text-muted-foreground mt-1">Available in select areas</p>
                        <p className="text-sm mt-2">$19.99 flat rate (order by 11 AM local time)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h2 className="text-xl font-semibold mb-4">International Shipping</h2>
                  <p className="mb-4">
                    We ship to most countries worldwide. International shipping times vary between 7-14 business days
                    depending on the destination.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">International Standard</h3>
                      <p className="text-muted-foreground mt-1">7-14 business days</p>
                      <p className="text-sm mt-2">
                        Rates calculated at checkout based on destination and package weight
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium">International Express</h3>
                      <p className="text-muted-foreground mt-1">3-5 business days</p>
                      <p className="text-sm mt-2">
                        Rates calculated at checkout based on destination and package weight
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-muted rounded-md">
                    <p className="text-sm">
                      <strong>Note:</strong> International orders may be subject to customs duties and taxes imposed by
                      the destination country. These charges are the responsibility of the recipient and are not
                      included in our shipping rates.
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h2 className="text-xl font-semibold mb-4">Shipping Policies</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">Order Processing</h3>
                      <p className="text-muted-foreground mt-1">
                        Orders are typically processed within 24 hours of being placed. During peak seasons or
                        promotional periods, processing may take up to 48 hours.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium">Tracking Information</h3>
                      <p className="text-muted-foreground mt-1">
                        Tracking information will be provided via email once your order has shipped. You can also track
                        your order by logging into your account.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium">Shipping Restrictions</h3>
                      <p className="text-muted-foreground mt-1">
                        Certain products cannot be shipped to international destinations due to local regulations. These
                        restrictions will be noted on the product page.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="returns" className="mt-6">
              <div className="space-y-8">
                <div className="rounded-lg border bg-card p-6">
                  <h2 className="text-xl font-semibold mb-4">Return Policy</h2>
                  <p className="mb-4">
                    We want you to be completely satisfied with your purchase. If you're not, we offer a hassle-free
                    return policy.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">30-Day Returns</h3>
                      <p className="text-muted-foreground mt-1">
                        You have 30 days from the date of delivery to return most items for a full refund.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium">Return Conditions</h3>
                      <p className="text-muted-foreground mt-1">
                        Items must be in their original condition with all tags and packaging intact. Used, damaged, or
                        altered items may not be eligible for return.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium">Non-Returnable Items</h3>
                      <p className="text-muted-foreground mt-1">The following items cannot be returned:</p>
                      <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground">
                        <li>Perishable goods (food, flowers, etc.)</li>
                        <li>Personalized or custom-made items</li>
                        <li>Digital products and gift cards</li>
                        <li>Intimate apparel and swimwear</li>
                        <li>Items marked as final sale</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h2 className="text-xl font-semibold mb-4">Return Process</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">Initiating a Return</h3>
                      <p className="text-muted-foreground mt-1">
                        To initiate a return, log into your account, go to 'Orders', select the order containing the
                        item you wish to return, and click 'Return Item'. Follow the instructions to complete the return
                        process.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium">Return Shipping</h3>
                      <p className="text-muted-foreground mt-1">
                        For standard returns, you are responsible for return shipping costs. We provide a prepaid
                        shipping label, and the cost will be deducted from your refund.
                      </p>
                      <p className="text-muted-foreground mt-1">
                        For defective or incorrect items, we will provide a free return shipping label.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium">Refund Process</h3>
                      <p className="text-muted-foreground mt-1">
                        Once your return is received and inspected, your refund will be processed within 3-5 business
                        days. It may take an additional 5-10 business days for the refund to appear in your account,
                        depending on your payment method.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h2 className="text-xl font-semibold mb-4">Exchanges</h2>
                  <p className="mb-4">
                    We offer exchanges for items of equal value. To request an exchange, follow the same process as a
                    return but select 'Exchange' instead of 'Refund' when prompted.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">Exchange Process</h3>
                      <p className="text-muted-foreground mt-1">
                        Select the item you wish to exchange and the reason for the exchange. Then, select the
                        replacement item you want (same item, different size/color).
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium">Exchange Shipping</h3>
                      <p className="text-muted-foreground mt-1">
                        For standard exchanges, you are responsible for return shipping costs. The replacement item will
                        be shipped to you free of charge once we receive your return.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about shipping or returns, our customer support team is here to help.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/contact">
                <button className="bg-gold hover:bg-gold/90 text-gold-foreground px-6 py-2 rounded-md">
                  Contact Us
                </button>
              </a>
              <a href="/faq">
                <button className="bg-background hover:bg-muted text-foreground border border-input px-6 py-2 rounded-md">
                  View FAQs
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

