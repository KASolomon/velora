import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Layout } from "@/components/layout/layout"
import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"
import { RelatedProducts } from "@/components/related-products"
import { products } from "@/data/products"

export default function ProductPage({ params }: { params: { id: string } }) {
  // This would normally come from a database or API
  const productId = Number.parseInt(params.id)
  const product = products.find((p) => p.id === productId) || products[0]

  // Generate multiple images for the gallery
  const productImages = [
    product.image,
    `/placeholder.svg?height=150&width=150&text=Image 2`,
    `/placeholder.svg?height=150&width=150&text=Image 3`,
    `/placeholder.svg?height=150&width=150&text=Image 4`,
  ]

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="container py-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-gold">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/category/electronics" className="hover:text-gold">
            Electronics
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span>{product.name}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Product Images */}
          <ProductGallery images={productImages} alt={product.name} />

          {/* Product Info */}
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts products={products.slice(0, 4)} />
    </Layout>
  )
}

