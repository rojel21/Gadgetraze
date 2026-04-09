"use client"

import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Are all products 100% authentic?",
    answer:
      "Yes! We guarantee 100% authentic products. All our items are sourced from authorized distributors and come with official warranty. We never deal with replicas or counterfeit products.",
  },
  {
    question: "How can I place an order?",
    answer:
      "You can order directly through our website, or contact us via WhatsApp or Facebook Messenger. Our team will guide you through the ordering process and confirm your order details.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Cash on Delivery (COD), bKash, Nagad, Rocket, and bank transfers. For COD, you pay when you receive your product. Online payment options are also available for your convenience.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Inside Dhaka: 24-48 hours. Outside Dhaka: 2-5 business days. We use trusted courier services like Pathao, RedX, and Steadfast to ensure safe delivery.",
  },
  {
    question: "What is your return/exchange policy?",
    answer:
      "We offer a 7-day return policy for defective products. If you receive a faulty item, contact us immediately with proof (photos/videos). We will arrange for a replacement or full refund.",
  },
  {
    question: "Do products come with warranty?",
    answer:
      "Yes, all products come with official brand warranty. Warranty periods vary by product (6 months to 2 years). We also provide extended warranty options for select products.",
  },
  {
    question: "Is there any delivery charge?",
    answer:
      "Inside Dhaka: ৳60-80. Outside Dhaka: ৳100-150 depending on location. For orders above ৳5,000, delivery is FREE inside Dhaka!",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, we will send you a tracking number via WhatsApp/SMS. You can track your parcel using the courier company website or app.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re
              looking for, feel free to contact us.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still Have Questions */}
          <div className="mt-12 text-center p-8 bg-card rounded-2xl border border-border/50">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="gap-2 rounded-full" asChild>
                <a
                  href="https://wa.me/8801XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button variant="outline" className="gap-2 rounded-full" asChild>
                <a
                  href="https://m.me/gadgetrazeshopbd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.936 1.444 5.55 3.704 7.256V22l3.35-1.838c.895.246 1.843.38 2.846.38 5.523 0 10-4.145 10-9.243S17.523 2 12 2z" />
                  </svg>
                  Message on Facebook
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
