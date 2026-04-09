"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    name: "Smartphones",
    description: "Latest flagship & budget phones",
    icon: "📱",
    count: 120,
    color: "from-blue-500/20 to-blue-500/5",
    href: "#products",
  },
  {
    name: "Earbuds & Headphones",
    description: "TWS, ANC & gaming headsets",
    icon: "🎧",
    count: 85,
    color: "from-purple-500/20 to-purple-500/5",
    href: "#products",
  },
  {
    name: "Smartwatches",
    description: "Fitness trackers & smart bands",
    icon: "⌚",
    count: 45,
    color: "from-green-500/20 to-green-500/5",
    href: "#products",
  },
  {
    name: "Power Banks",
    description: "Fast charging & high capacity",
    icon: "🔋",
    count: 60,
    color: "from-amber-500/20 to-amber-500/5",
    href: "#products",
  },
  {
    name: "Chargers & Cables",
    description: "USB-C, Lightning & more",
    icon: "🔌",
    count: 95,
    color: "from-red-500/20 to-red-500/5",
    href: "#products",
  },
  {
    name: "Gaming Accessories",
    description: "Controllers, triggers & more",
    icon: "🎮",
    count: 40,
    color: "from-cyan-500/20 to-cyan-500/5",
    href: "#products",
  },
]

export function CategoriesSection() {
  return (
    <section id="categories" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Categories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Browse by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you need from our wide range of categories.
            Quality products at competitive prices.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <a key={category.name} href={category.href}>
              <Card className="group cursor-pointer border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${category.color} p-6`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-5xl mb-4 block">{category.icon}</span>
                        <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {category.description}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {category.count}+ Products
                        </Badge>
                        <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
