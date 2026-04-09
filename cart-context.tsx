"use client"

// ============================================================
// CART CONTEXT
// This file manages the shopping cart for the entire app.
// It uses React Context so any component can access the cart.
// ============================================================

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react"
import type { Product } from "@/lib/products"

// ─── Types ──────────────────────────────────────────────────

export type CartItem = {
  product: Product
  quantity: number
}

type CartContextType = {
  items: CartItem[]
  isOpen: boolean
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  totalItems: number
  totalPrice: number
}

// ─── Context ────────────────────────────────────────────────

const CartContext = createContext<CartContextType | null>(null)

// ─── Provider ───────────────────────────────────────────────

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addToCart = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id)
      if (existing) {
        // Already in cart — just increase quantity
        return prev.map((i) =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }
      // New item — add to cart
      return [...prev, { product, quantity: 1 }]
    })
    setIsOpen(true) // Open cart sidebar when item is added
  }, [])

  const removeFromCart = useCallback((productId: number) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId))
  }, [])

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity < 1) return
    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId ? { ...i, quantity } : i
      )
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])
  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)
  const totalPrice = items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// ─── Hook ───────────────────────────────────────────────────

// Use this hook inside any component to access the cart.
// Example: const { addToCart, totalItems } = useCart()
export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>")
  return ctx
}
