"use client"

// ============================================================
// PRODUCT DETAIL MODAL
// Opens when you click the Eye icon or product name.
// Shows full description, features, warranty, delivery info.
// ============================================================

import { useCart } from "@/context/cart-context"
import { formatPrice, getDiscount, type Product, WHATSAPP_NUMBER } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  ShoppingCart,
  MessageCircle,
  Star,
  Shield,
  Truck,
  Check,
  Plus,
  Minus,
} from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

type Props = {
  product: Product | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProductDetailModal({ product, open, onOpenChange }: Props) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) return null

  const discount = getDiscount(product.price, product.originalPrice)

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      addToCart(product!)
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto p-0">
        <div className="grid sm:grid-cols-2 gap-0">
          {/* Left — Product Image */}
          <div className="relative bg-muted flex items-center justify-center p-12 rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none min-h-[240px]">
            {product.badge && (
              <Badge
                className={cn(
                  "absolute top-4 left-4 text-xs font-semibold",
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
              <Badge
                variant="secondary"
                className="absolute top-4 right-4 text-xs font-semibold bg-destructive/10 text-destructive"
              >
                -{discount}%
              </Badge>
            )}
            <span className="text-8xl select-none">{product.image}</span>
          </div>

          {/* Right — Details */}
          <div className="p-6 flex flex-col gap-4">
            <DialogHeader className="text-left">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                {product.category}
              </span>
              <DialogTitle className="text-xl font-bold text-foreground leading-snug mt-1">
                {product.name}
              </DialogTitle>
            </DialogHeader>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-4 h-4",
                    i < Math.floor(product.rating)
                      ? "fill-amber-400 text-amber-400"
                      : "fill-muted text-muted"
                  )}
                />
              ))}
              <span className="text-sm font-medium ml-1">{product.rating}</span>
              <span className="text-xs text-muted-foreground">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-foreground">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              {discount > 0 && (
                <Badge className="bg-green-100 text-green-700 text-xs">
                  Save {formatPrice(product.originalPrice - product.price)}
                </Badge>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-foreground">Qty:</span>
              <div className="flex items-center border border-border rounded-full overflow-hidden">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="px-4 text-sm font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
              <span className="text-sm text-muted-foreground ml-1">
                = {formatPrice(product.price * quantity)}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-2">
              <Button
                className="flex-1 rounded-full gap-2"
                onClick={handleAddToCart}
                disabled={added}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    Added!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                className="rounded-full gap-2 hover:bg-green-50 hover:border-green-500 hover:text-green-600"
                asChild
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `Hi! I want to order:\n\n${quantity}× ${product.name} — ${formatPrice(product.price * quantity)}\n\nPlease confirm availability.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Info Badges */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Shield className="w-3.5 h-3.5 text-green-500" />
                {product.warranty}
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Truck className="w-3.5 h-3.5 text-blue-500" />
                {product.delivery}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="px-6 pb-6">
          <Separator className="mb-4" />
          <p className="text-sm font-semibold text-foreground mb-3">Key Features</p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}
