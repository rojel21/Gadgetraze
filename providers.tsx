"use client"

// ============================================================
// PROVIDERS
// Wraps the app with all global context providers.
// Add new providers here in the future (e.g. ThemeProvider).
// ============================================================

import { CartProvider } from "@/context/cart-context"
import { CartSidebar } from "@/components/cart-sidebar"
import type { ReactNode } from "react"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
      {/* CartSidebar lives here so it's available on every page */}
      <CartSidebar />
    </CartProvider>
  )
}
