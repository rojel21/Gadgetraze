"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Quote, CheckCircle } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Rafiq Ahmed",
    location: "Dhaka",
    rating: 5,
    review:
      "Excellent service! Ordered an iPhone 15 Pro and received it within 24 hours. 100% authentic product with proper warranty. Highly recommended!",
    product: "iPhone 15 Pro Max",
    verified: true,
    date: "2 days ago",
  },
  {
    id: 2,
    name: "Fatima Khatun",
    location: "Chittagong",
    rating: 5,
    review:
      "Best gadget shop in Bangladesh! The WhatsApp ordering process was so smooth. The delivery person was very professional. Will definitely order again.",
    product: "Samsung Galaxy Buds2 Pro",
    verified: true,
    date: "1 week ago",
  },
  {
    id: 3,
    name: "Mohammad Hasan",
    location: "Sylhet",
    rating: 5,
    review:
      "I was skeptical at first but Gadgetraze proved me wrong. Original products at fair prices. Cash on delivery option made it risk-free for me.",
    product: "Apple Watch Series 9",
    verified: true,
    date: "2 weeks ago",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    location: "Rajshahi",
    rating: 4,
    review:
      "Great experience shopping here. Product quality is top-notch. Only giving 4 stars because delivery took 3 days to Rajshahi, but the product was perfect!",
    product: "Anker 65W Fast Charger",
    verified: true,
    date: "3 weeks ago",
  },
  {
    id: 5,
    name: "Karim Mia",
    location: "Dhaka",
    rating: 5,
    review:
      "This is my third purchase from Gadgetraze. Every single time, they have exceeded my expectations. Genuine products, great prices, and amazing customer service.",
    product: "Samsung Galaxy S24 Ultra",
    verified: true,
    date: "1 month ago",
  },
  {
    id: 6,
    name: "Ayesha Begum",
    location: "Khulna",
    rating: 5,
    review:
      "Ordered a power bank for my husband. The Facebook messenger support team helped me choose the right one. Very happy with the purchase!",
    product: "Baseus 20000mAh Power Bank",
    verified: true,
    date: "1 month ago",
  },
]

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <Card className="h-full border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6 flex flex-col h-full">
        {/* Quote Icon */}
        <Quote className="w-8 h-8 text-primary/20 mb-4" />

        {/* Rating */}
        <div className="flex gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < review.rating
                  ? "fill-amber-400 text-amber-400"
                  : "fill-muted text-muted"
              }`}
            />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-foreground/80 leading-relaxed flex-1 mb-4">
          {`"${review.review}"`}
        </p>

        {/* Product */}
        <div className="text-sm text-muted-foreground mb-4">
          Purchased: <span className="text-primary font-medium">{review.product}</span>
        </div>

        {/* Reviewer Info */}
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <Avatar className="w-10 h-10">
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {review.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground">{review.name}</span>
              {review.verified && (
                <CheckCircle className="w-4 h-4 text-green-500" />
              )}
            </div>
            <div className="text-xs text-muted-foreground">
              {review.location} • {review.date}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Customer Reviews
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Gadgetraze Shop BD
            for their gadget needs. Real reviews from real customers.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12 p-6 bg-muted/50 rounded-2xl">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">10,000+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">98%</div>
            <div className="text-sm text-muted-foreground">Positive Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">500+</div>
            <div className="text-sm text-muted-foreground">5-Star Reviews</div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
