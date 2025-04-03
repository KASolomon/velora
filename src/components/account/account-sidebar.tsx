"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CreditCard, Heart, LogOut, Package, Settings, ShoppingBag, User } from "lucide-react"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function AccountSidebar() {
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
      href: "/account/wishlist",
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
    <SidebarProvider>
      <Sidebar collapsible="none" className="hidden md:block">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Account</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild isActive={pathname === item.href}>
                      <Link href={item.href} className="flex items-center">
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/auth/login" className="flex items-center text-destructive hover:text-destructive/80">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sign Out</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}

