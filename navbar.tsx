"use client"

// ============================================================
// NAVBAR
// Fixed top navigation bar with logo, links, cart button.
// The cart icon shows a badge with number of items in cart.
// ============================================================

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useCart } from "@/context/cart-context"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#products" },
  { name: "Categories", href: "#categories" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { totalItems, openCart } = useCart()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground leading-tight">Gadgetraze</span>
              <span className="text-xs text-muted-foreground -mt-1">Shop BD</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2 rounded-full" asChild>
              <a href="https://wa.me/8801XXXXXXXXX" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </Button>

            {/* Cart Button with badge */}
            <Button
              size="sm"
              variant="outline"
              className="gap-2 rounded-full relative"
              onClick={openCart}
              aria-label={`Cart — ${totalItems} items`}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Cart</span>
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 text-xs rounded-full">
                  {totalItems > 99 ? "99+" : totalItems}
                </Badge>
              )}
            </Button>
          </div>

          {/* Mobile: Cart icon + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              className="relative p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={openCart}
              aria-label="Open cart"
            >
              <ShoppingCart className="w-6 h-6 text-foreground" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs rounded-full">
                  {totalItems > 99 ? "99+" : totalItems}
                </Badge>
              )}
            </button>
            <button
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
        )}>
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-border">
              <Button variant="outline" className="gap-2 rounded-full" asChild>
                <a href="https://wa.me/8801XXXXXXXXX" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  <span>Order on WhatsApp</span>
                </a>
              </Button>
              <Button className="gap-2 rounded-full" onClick={() => { openCart(); setIsMobileMenuOpen(false) }}>
                <ShoppingCart className="w-4 h-4" />
                <span>View Cart ({totalItems})</span>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
