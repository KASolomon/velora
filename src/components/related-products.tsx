import type { Product } from "@/types/product"
import { ProductCard } from "@/components/product-card"

interface RelatedProductsProps {
  products: Product[]
  title?: string
}

export function RelatedProducts({ products, title = "You May Also Like" }: RelatedProductsProps) {
  return (
    <div className="bg-muted/30 py-12">
      <div className="container">
        <h2 className="text-2xl font-bold tracking-tight mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

