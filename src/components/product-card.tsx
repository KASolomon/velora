import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-2 transition-all duration-200 hover:border-[#B8860B]/50 dark:hover:border-[#B8860B]/30 hover:shadow-gold-sm dark:hover:shadow-gold-sm">
        {product.isNew && (
          <div className="absolute top-2 right-2 z-10 bg-[#B8860B] text-white text-xs font-medium px-2 py-1 rounded">
            New
          </div>
        )}
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 z-10 bg-black text-white text-xs font-medium px-2 py-1 rounded">
            {product.discount}% OFF
          </div>
        )}
        <div className="aspect-square overflow-hidden rounded-md bg-gray-100 dark:bg-zinc-800">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium group-hover:text-[#B8860B] transition-colors">{product.name}</h3>
          <div className="flex items-center mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < product.rating ? "fill-[#B8860B] text-[#B8860B]" : "text-gray-400 dark:text-zinc-500"}`}
              />
            ))}
            <span className="ml-1 text-xs text-gray-500 dark:text-zinc-400">({product.reviews})</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">{product.brand}</p>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-1">
              {product.discount > 0 && (
                <span className="text-sm line-through text-gray-400 dark:text-zinc-500">
                  ${(product.price * (1 + product.discount / 100)).toFixed(2)}
                </span>
              )}
              <span className="text-lg font-semibold text-[#B8860B]">${product.price.toFixed(2)}</span>
            </div>
            <Button size="sm" variant="ghost" className="rounded-full hover:text-[#B8860B]">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Add to cart</span>
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}

