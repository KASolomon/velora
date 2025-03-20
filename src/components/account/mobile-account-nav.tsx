"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CreditCard, Heart, LogOut, Menu, Package, Settings, ShoppingBag, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function MobileAccountNav() {
  const pathname = usePathname()

  const menuItems = [
    {
      title: "Account Overview",
      href: "/account",
      icon: User,
    },
    {
      title: "Orders",
      href: "/account/orders",
      icon: Package,
    },
    {
      title: "Wishlist",
      href: "/wishlist",
      icon: Heart,
    },
    {
      title: "Payment Methods",
      href: "/account/payment",
      icon: CreditCard,
    },
    {
      title: "Purchase History",
      href: "/account/purchases",
      icon: ShoppingBag,
    },
    {
      title: "Account Settings",
      href: "/account/settings",
      icon: Settings,
    },
  ]

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="ml-2">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="pb-4">
          <SheetTitle>Account Menu</SheetTitle>
        </SheetHeader>
        <div className="grid gap-2 py-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                pathname === item.href
                  ? "bg-gold text-gold-foreground dark:bg-gold dark:text-gold-foreground"
                  : "hover:bg-muted dark:hover:bg-muted"
              }`}
            >
              <item.icon className="mr-2 h-4 w-4" />
              <span>{item.title}</span>
            </Link>
          ))}
          <Link
            href="/auth/login"
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-destructive dark:text-destructive hover:bg-muted dark:hover:bg-muted"
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sign Out</span>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

