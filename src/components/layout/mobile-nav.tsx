"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

interface MobileNavProps {
  categories: {
    name: string
    path: string
  }[]
}

export function MobileNav({ categories }: MobileNavProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="hover:text-[#B8860B]">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <span className="text-2xl font-semibold tracking-tight text-[#B8860B]">Velora</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="hover:text-[#B8860B]">
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <div className="container py-8">
            <nav className="flex flex-col gap-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.path}
                  className={`text-lg font-medium transition-colors hover:text-[#B8860B] ${
                    pathname === category.path ? "text-[#B8860B]" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              <div className="h-px bg-border my-2"></div>
              <Link
                href="/account"
                className="text-lg font-medium transition-colors hover:text-[#B8860B]"
                onClick={() => setIsOpen(false)}
              >
                My Account
              </Link>
              <Link
                href="/cart"
                className="text-lg font-medium transition-colors hover:text-[#B8860B]"
                onClick={() => setIsOpen(false)}
              >
                Cart
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}

