import Link from "next/link";
import { Package, CreditCard, Heart, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { orders } from "@/data/orders";

export default function AccountPage() {
  // Get the most recent order
  const recentOrder = orders.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )[0];

  const accountCards = [
    {
      title: "Orders",
      description: "View and track your orders",
      icon: Package,
      href: "/account/orders",
      stat: `${orders.length} orders`,
    },
    {
      title: "Wishlist",
      description: "Products you've saved",
      icon: Heart,
      href: "/wishlist",
      stat: "5 items",
    },
    {
      title: "Payment Methods",
      description: "Manage your payment methods",
      icon: CreditCard,
      href: "/account/payment",
      stat: "2 cards saved",
    },
    {
      title: "Account Settings",
      description: "Update your profile and preferences",
      icon: Settings,
      href: "/account/settings",
      stat: "Last updated 2 weeks ago",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="rounded-lg border bg-card dark:bg-card p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Welcome back, John</h2>
            <p className="text-muted-foreground dark:text-muted-foreground">
              Here's an overview of your account and recent activity.
            </p>
          </div>
          <Button className="bg-gold hover:bg-gold/90 text-gold-foreground dark:bg-gold dark:hover:bg-gold/90 dark:text-gold-foreground">
            <Link href="/account/settings">Edit Profile</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {accountCards.map((card) => (
          <Card
            key={card.title}
            className="hover:shadow-md transition-shadow dark:border-borderColor"
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">{card.title}</CardTitle>
              <card.icon className="h-5 w-5 text-gold dark:text-gold" />
            </CardHeader>
            <CardContent>
              <CardDescription>{card.description}</CardDescription>
              <p className="mt-2 font-medium">{card.stat}</p>
            </CardContent>
            <CardFooter>
              <Button
                variant="ghost"
                className="w-full text-gold hover:text-gold/80 hover:bg-gold/10 dark:text-gold dark:hover:text-gold/80 dark:hover:bg-gold/10"
                asChild
              >
                <Link href={card.href}>View {card.title}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {recentOrder && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Recent Order</h2>
          <div className="rounded-lg border bg-card dark:bg-card p-4 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-medium">
                  Order #{recentOrder.orderNumber}
                </h3>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                  {new Date(recentOrder.date).toLocaleDateString()} •{" "}
                  {recentOrder.items.length}{" "}
                  {recentOrder.items.length === 1 ? "item" : "items"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                  ${
                    recentOrder.status === "delivered"
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                      : recentOrder.status === "shipped"
                      ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                      : recentOrder.status === "processing"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                      : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                  }`}
                >
                  {recentOrder.status.charAt(0).toUpperCase() +
                    recentOrder.status.slice(1)}
                </span>
                <span className="text-sm font-medium">
                  ${recentOrder.total.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {recentOrder.items.slice(0, 3).map((item, index) => (
                  <div
                    key={index}
                    className="h-10 w-10 rounded-md bg-muted dark:bg-muted overflow-hidden"
                  >
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
                {recentOrder.items.length > 3 && (
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted dark:bg-muted text-xs font-medium">
                    +{recentOrder.items.length - 3}
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/account/orders/${recentOrder.id}`}>
                    View Details
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gold hover:text-gold/80 hover:border-gold/80 dark:text-gold dark:hover:text-gold/80 dark:hover:border-gold/80"
                >
                  Buy Again
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              variant="link"
              className="text-gold hover:text-gold/80 dark:text-gold dark:hover:text-gold/80"
              asChild
            >
              <Link href="/account/orders">View All Orders</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
