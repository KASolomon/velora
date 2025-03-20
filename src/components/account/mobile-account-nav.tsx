"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CreditCard,
  Heart,
  LogOut,
  Menu,
  Package,
  Settings,
  ShoppingBag,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MobileAccountNav() {
  const pathname = usePathname();

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
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="ml-2">Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Account Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {menuItems.map((item) => (
          <DropdownMenuItem key={item.href} asChild>
            <Link
              href={item.href}
              className={`flex w-full items-center ${
                pathname === item.href ? "font-medium text-gold" : ""
              }`}
            >
              <item.icon className="mr-2 h-4 w-4" />
              <span>{item.title}</span>
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            href="/auth/login"
            className="flex w-full items-center text-destructive"
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sign Out</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
