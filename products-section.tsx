"use client"

// ============================================================
// PRODUCTS SECTION
// Displays the product grid with category filters.
// Add-to-Cart and View Details buttons are fully wired up.
// ============================================================

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, MessageCircle, Star, Heart, Eye, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/context/cart-context"
import { products, categories, formatPrice, getDiscount, type Product, WHATSAPP_NUMBER } from "@/lib/products"
import { ProductDetailModal } from "@/components/product-detail-modal"

function ProductCard({
  product,
  onViewDetails,
}: {
  product: Product
  onViewDetails: (product: Product) => void
}) {
  const { addToCart } = useCart()
  const [isHovered, setIsHovered] = useState(false)
  const [added, setAdded] = useState(false)
  const [wishlisted, setWishlisted] = useState(false)
  const discount = getDiscount(product.price, product.originalPrice)

  function handleAddToCart() {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <Card
      className="group relative overflow-hidden border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative bg-muted p-8 flex items-center justify-center">
          {product.badge && (
            <Badge
              className={cn(
                "absolute top-3 left-3 text-xs font-semibold",
                product.badge === "Best Seller" && "bg-primary",
                product.badge === "Hot" && "bg-red-500",
                product.badge === "New" && "bg-accent",
                product.badge === "Popular" && "bg-amber-500",
                product.badge === "Deal" && "bg-green-500"
              )}
            >
              {product.badge}
            </Badge>
          )}
          {discount > 0 && (
            <Badge variant="secondary" className="absolute top-3 right-3 text-xs font-semibold bg-destructive/10 text-destructive">
              -{discount}%
            </Badge>
          )}
          <span className="text-7xl transition-transform duration-300 group-hover:scale-110 select-none">
            {product.image}
          </span>
          <div className={cn(
            "absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 transition-all duration-300",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Button
              size="icon" variant="secondary"
              className={cn("rounded-full w-9 h-9 shadow-lg", wishlisted && "text-red-500")}
              onClick={() => setWishlisted((w) => !w)}
            >
              <Heart className={cn("w-4 h-4", wishlisted && "fill-red-500")} />
            </Button>
            <Button
              size="icon" variant="secondary"
              className="rounded-full w-9 h-9 shadow-lg"
              onClick={() => onViewDetails(product)}
            >
              <Eye className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="p-4">
          <span className="text-xs text-muted-foreground uppercase tracking-wide">{product.category}</span>
          <h3
            className="font-semibold text-foreground mt-1 mb-2 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer"
            onClick={() => onViewDetails(product)}
          >
            {product.name}
          </h3>
          <div className="flex items-center gap-1 mb-3">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-medium text-foreground">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold text-foreground">{formatPrice(product.price)}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          <div className="flex gap-2">
            <Button
              className="flex-1 gap-2 rounded-lg" size="sm"
              disabled={!product.stock || added}
              onClick={handleAddToCart}
            >
              {added ? <><Check className="w-4 h-4" />Added!</> : <><ShoppingCart className="w-4 h-4" />Add to Cart</>}
            </Button>
            <Button variant="outline" size="sm"
              className="rounded-lg hover:bg-green-50 hover:border-green-500 hover:text-green-600"
              asChild
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I want to order:\n\n1× ${product.name} — ${formatPrice(product.price)}\n\nPlease confirm availability.`)}`}
                target="_blank" rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [detailOpen, setDetailOpen] = useState(false)

  const filteredProducts =
    activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory)

  function handleViewDetails(product: Product) {
    setSelectedProduct(product)
    setDetailOpen(true)
  }

  return (
    <>
      <section id="products" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Featured Products</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Shop Our Best Selling Gadgets
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of premium gadgets at the best prices
              in Bangladesh. All products come with warranty and authentic guarantee.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm" className="rounded-full"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onViewDetails={handleViewDetails} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="rounded-full gap-2" onClick={() => setActiveCategory("All")}>
              View All Products <span className="text-muted-foreground">→</span>
            </Button>
          </div>
        </div>
      </section>

      <ProductDetailModal
        product={selectedProduct}
        open={detailOpen}
        onOpenChange={setDetailOpen}
      />
    </>
  )
}
