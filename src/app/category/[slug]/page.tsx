import Link from "next/link"
import { ChevronDown, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Layout } from "@/components/layout/layout"
import { FilterSidebar } from "@/components/filter-sidebar"
import { MobileFilters } from "@/components/mobile-filters"
import { ProductCard } from "@/components/product-card"
import { products } from "@/data/products"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // This would normally come from a database or API
  const categoryName = params.slug.charAt(0).toUpperCase() + params.slug.slice(1).replace(/-/g, " ")

  return (
    <Layout>
      {/* Category Header */}
      <section className="bg-muted/30 py-8">
        <div className="container">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center text-sm text-muted-foreground">
              <Link href="/" className="hover:text-gold">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-1" />
              <span>{categoryName}</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-secondary">
              {categoryName} <span className="text-gold">Collection</span>
            </h1>
            <p className="text-muted-foreground">
              Discover our premium selection of {categoryName.toLowerCase()} products, crafted for excellence and
              curated for the discerning customer.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
          {/* Filters - Desktop */}
          <div className="hidden md:block">
            <FilterSidebar />
          </div>

          {/* Product Grid */}
          <div className="space-y-6">
            {/* Mobile Filter Button and Sort */}
            <div className="flex items-center justify-between">
              <MobileFilters />

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground hidden sm:inline-block">Sort by:</span>
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest Arrivals</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-sm text-muted-foreground">
              Showing <span className="font-medium text-foreground">1-12</span> of{" "}
              <span className="font-medium text-foreground">36</span> products
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2 py-8">
              <Button variant="outline" size="icon" disabled>
                <ChevronDown className="h-4 w-4 rotate-90" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-gold text-white border-gold hover:bg-gold/90 hover:text-white"
              >
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm" disabled>
                ...
              </Button>
              <Button variant="outline" size="sm">
                12
              </Button>
              <Button variant="outline" size="icon">
                <ChevronDown className="h-4 w-4 -rotate-90" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

