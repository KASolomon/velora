"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DarkModeToggle } from "@/components/dark-mode-toggle";

export function Header() {
  const pathname = usePathname();

  const categories = [
    { name: "Groceries", path: "/category/groceries" },
    { name: "Electronics", path: "/category/electronics" },
    { name: "Fashion", path: "/category/fashion" },
    { name: "Home", path: "/category/home" },
    { name: "Beauty", path: "/category/beauty" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#B8860B]/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-semibold tracking-tight text-[#B8860B]">
              Velora
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.path}
                className={`text-sm font-medium transition-colors hover:text-[#B8860B] ${
                  pathname === category.path ? "text-[#B8860B]" : ""
                }`}
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <Link href="/account">
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-[#B8860B]"
            >
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>
          <Link href="/cart">
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:text-[#B8860B]"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#B8860B] text-[10px] font-medium text-white flex items-center justify-center">
                3
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
