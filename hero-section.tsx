"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart, MessageCircle, Shield, Truck, CreditCard, Star } from "lucide-react"

const trustBadges = [
  { icon: Shield, label: "100% Authentic Products" },
  { icon: Truck, label: "Fast Delivery in BD" },
  { icon: CreditCard, label: "Cash on Delivery" },
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-primary" />
              <span>Trusted by 10,000+ Customers in Bangladesh</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              <span className="text-balance">Your One-Stop</span>
              <br />
              <span className="text-primary">Gadget Shop</span>
              <br />
              <span className="text-balance">in Bangladesh</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Discover the latest smartphones, earbuds, smartwatches, and tech
              accessories at unbeatable prices. Quality guaranteed with fast
              delivery across Bangladesh.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button
                size="lg"
                className="gap-2 rounded-full text-base px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                asChild
              >
                <a href="#products">
                  <ShoppingCart className="w-5 h-5" />
                  Shop Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 rounded-full text-base px-8 border-2 hover:bg-green-50 hover:border-green-500 hover:text-green-600 transition-all"
                asChild
              >
                <a
                  href="https://wa.me/8801XXXXXXXXX?text=Hi! I want to order from Gadgetraze Shop BD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Order on WhatsApp
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <badge.icon className="w-5 h-5 text-primary" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image / Feature Card */}
          <div className="relative">
            <div className="relative bg-card rounded-3xl shadow-2xl p-8 border border-border">
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                New Arrivals
              </div>

              {/* Product Showcase */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-2xl p-6 flex flex-col items-center">
                  <div className="w-24 h-24 bg-background rounded-xl mb-4 flex items-center justify-center text-4xl">
                    📱
                  </div>
                  <span className="text-sm font-medium text-foreground">Smartphones</span>
                  <span className="text-xs text-muted-foreground">From ৳8,999</span>
                </div>
                <div className="bg-muted rounded-2xl p-6 flex flex-col items-center">
                  <div className="w-24 h-24 bg-background rounded-xl mb-4 flex items-center justify-center text-4xl">
                    🎧
                  </div>
                  <span className="text-sm font-medium text-foreground">Earbuds</span>
                  <span className="text-xs text-muted-foreground">From ৳499</span>
                </div>
                <div className="bg-muted rounded-2xl p-6 flex flex-col items-center">
                  <div className="w-24 h-24 bg-background rounded-xl mb-4 flex items-center justify-center text-4xl">
                    ⌚
                  </div>
                  <span className="text-sm font-medium text-foreground">Smartwatches</span>
                  <span className="text-xs text-muted-foreground">From ৳1,299</span>
                </div>
                <div className="bg-muted rounded-2xl p-6 flex flex-col items-center">
                  <div className="w-24 h-24 bg-background rounded-xl mb-4 flex items-center justify-center text-4xl">
                    🔌
                  </div>
                  <span className="text-sm font-medium text-foreground">Accessories</span>
                  <span className="text-xs text-muted-foreground">From ৳199</span>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 pt-6 border-t border-border flex items-center justify-around">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">10K+</div>
                  <div className="text-xs text-muted-foreground">Happy Customers</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-xs text-muted-foreground">Products</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">4.9</div>
                  <div className="text-xs text-muted-foreground">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
