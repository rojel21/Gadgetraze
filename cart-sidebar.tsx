"use client"

// ============================================================
// CART SIDEBAR
// Slides in from the right when items are added.
// Shows all cart items, quantities, and a checkout button.
// ============================================================

import { useCart } from "@/context/cart-context"
import { formatPrice } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { ShoppingCart, Trash2, Plus, Minus, ShoppingBag } from "lucide-react"
import { useState } from "react"
import { CheckoutModal } from "@/components/checkout-modal"

export function CartSidebar() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, totalItems, totalPrice } =
    useCart()
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  return (
    <>
      <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
        <SheetContent className="flex flex-col w-full sm:max-w-md p-0" side="right">
          {/* Header */}
          <SheetHeader className="px-6 py-4 border-b border-border">
            <SheetTitle className="flex items-center gap-2 text-lg font-bold">
              <ShoppingCart className="w-5 h-5 text-primary" />
              Your Cart
              {totalItems > 0 && (
                <Badge className="ml-1 text-xs">{totalItems}</Badge>
              )}
            </SheetTitle>
          </SheetHeader>

          {/* Empty state */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center p-8">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-muted-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Your cart is empty</p>
                <p className="text-sm text-muted-foreground">
                  Add some gadgets to get started!
                </p>
              </div>
              <Button
                className="rounded-full mt-2"
                onClick={closeCart}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <ScrollArea className="flex-1 px-6 py-4">
                <div className="flex flex-col gap-4">
                  {items.map(({ product, quantity }) => {
                    const discount =
                      product.originalPrice > product.price
                        ? Math.round(
                            ((product.originalPrice - product.price) /
                              product.originalPrice) *
                              100
                          )
                        : 0

                    return (
                      <div
                        key={product.id}
                        className="flex gap-3 p-3 rounded-xl bg-muted/40 border border-border/40"
                      >
                        {/* Product Image */}
                        <div className="w-16 h-16 rounded-lg bg-background flex items-center justify-center text-3xl flex-shrink-0">
                          {product.image}
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-sm font-semibold text-foreground line-clamp-2 leading-snug">
                              {product.name}
                            </p>
                            <button
                              onClick={() => removeFromCart(product.id)}
                              className="text-muted-foreground hover:text-destructive transition-colors flex-shrink-0 mt-0.5"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm font-bold text-foreground">
                              {formatPrice(product.price)}
                            </span>
                            {discount > 0 && (
                              <Badge
                                variant="secondary"
                                className="text-xs px-1.5 bg-green-100 text-green-700"
                              >
                                -{discount}%
                              </Badge>
                            )}
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() =>
                                updateQuantity(product.id, quantity - 1)
                              }
                              disabled={quantity <= 1}
                              className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-40"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-medium w-5 text-center">
                              {quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(product.id, quantity + 1)
                              }
                              className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                            <span className="text-xs text-muted-foreground ml-auto">
                              = {formatPrice(product.price * quantity)}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </ScrollArea>

              {/* Footer / Order Summary */}
              <div className="px-6 py-4 border-t border-border bg-background">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Subtotal ({totalItems} items)</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Delivery</span>
                    <span className="text-green-600 font-medium">Free in Dhaka</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-foreground text-base">
                    <span>Total</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                </div>

                <Button
                  className="w-full rounded-full text-base font-semibold gap-2"
                  size="lg"
                  onClick={() => {
                    closeCart()
                    setCheckoutOpen(true)
                  }}
                >
                  Proceed to Checkout
                </Button>
                <Button
                  variant="ghost"
                  className="w-full mt-2 text-sm text-muted-foreground"
                  onClick={closeCart}
                >
                  Continue Shopping
                </Button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>

      {/* Checkout modal is outside the Sheet to avoid stacking issues */}
      <CheckoutModal
        open={checkoutOpen}
        onOpenChange={setCheckoutOpen}
      />
    </>
  )
}
