import { CreditCard, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PaymentMethodsPage() {
  // Mock payment methods
  const paymentMethods = [
    {
      id: 1,
      type: "Credit Card",
      cardType: "Visa",
      last4: "4242",
      expiry: "09/25",
      isDefault: true,
    },
    {
      id: 2,
      type: "Credit Card",
      cardType: "Mastercard",
      last4: "5678",
      expiry: "12/24",
      isDefault: false,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-xl font-semibold mb-2">Payment Methods</h2>
        <p className="text-muted-foreground">Manage your payment methods for a seamless checkout experience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paymentMethods.map((method) => (
          <Card key={method.id} className="relative">
            {method.isDefault && (
              <Badge className="absolute top-4 right-4 bg-gold hover:bg-gold/90 text-gold-foreground">Default</Badge>
            )}
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-muted p-2">
                  <CreditCard className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <CardTitle className="text-lg">{method.cardType}</CardTitle>
                  <CardDescription>•••• •••• •••• {method.last4}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                <p>Expires: {method.expiry}</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="text-destructive">
                <Trash2 className="h-4 w-4 mr-2" />
                Remove
              </Button>
              {!method.isDefault && (
                <Button variant="outline" size="sm" className="text-gold hover:text-gold/80">
                  Set as Default
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}

        <Card className="border-dashed flex flex-col items-center justify-center p-6 h-full">
          <div className="rounded-full bg-muted p-3 mb-4">
            <Plus className="h-6 w-6 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2">Add Payment Method</h3>
          <p className="text-sm text-muted-foreground text-center mb-4">
            Add a new credit card or payment method to your account.
          </p>
          <Button className="bg-gold hover:bg-gold/90 text-gold-foreground">Add New Payment Method</Button>
        </Card>
      </div>
    </div>
  )
}

