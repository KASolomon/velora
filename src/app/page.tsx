import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { ProductCard } from "@/components/product-card"
import { products } from "@/data/products"

export default function Home() {
  const categories = [
    { name: "Groceries", image: "/placeholder.svg?height=200&width=200", path: "/category/groceries" },
    { name: "Electronics", image: "/placeholder.svg?height=200&width=200", path: "/category/electronics" },
    { name: "Fashion", image: "/placeholder.svg?height=200&width=200", path: "/category/fashion" },
    { name: "Home", image: "/placeholder.svg?height=200&width=200", path: "/category/home" },
    { name: "Beauty", image: "/placeholder.svg?height=200&width=200", path: "/category/beauty" },
    { name: "Sports", image: "/placeholder.svg?height=200&width=200", path: "/category/sports" },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[600px] w-full overflow-hidden">
          <Image
            src="/placeholder.svg?height=1200&width=2000"
            alt="Luxury shopping experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 dark:from-black/80 dark:to-black/40" />
          <div className="container relative z-10 flex h-full flex-col justify-center">
            <div className="max-w-xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Elevate Your <span className="text-gold">Everyday</span>
              </h1>
              <p className="text-xl text-white/90">
                Discover premium products curated for the discerning customer. From gourmet groceries to cutting-edge
                electronics.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="rounded-full bg-gold hover:bg-gold/90 text-gold-foreground">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/30 bg-black/40 text-white hover:bg-black/60 hover:border-gold/50"
                >
                  View Collections
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-secondary">
            Shop by <span className="text-gold">Category</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link key={category.name} href={category.path} className="group flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden rounded-full bg-muted p-4">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={100}
                    height={100}
                    className="h-24 w-24 object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-base font-medium">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-secondary">
              Featured <span className="text-gold">Products</span>
            </h2>
            <Link href="/category/electronics" className="flex items-center text-sm font-medium text-gold">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="py-16">
        <div className="container">
          <div className="relative overflow-hidden rounded-xl">
            <div className="relative h-[400px] w-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1600"
                alt="Special promotion"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center">
                <div className="container">
                  <div className="max-w-lg space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      New Season, New Arrivals
                    </h2>
                    <p className="text-lg text-white/90">
                      Discover our latest collection of premium products, crafted for excellence.
                    </p>
                    <Button size="lg" className="rounded-full bg-gold hover:bg-gold/90 text-gold-foreground">
                      Explore Collection
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 rounded-full bg-gold/10 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-gold"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">On all orders over $50. International shipping available.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 rounded-full bg-gold/10 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-gold"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-muted-foreground">30-day return policy for a hassle-free shopping experience.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 rounded-full bg-gold/10 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-gold"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-muted-foreground">Multiple secure payment options for your convenience.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

