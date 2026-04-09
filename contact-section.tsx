"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Dhaka, Bangladesh",
    detail: "Mirpur-10, Dhaka-1216",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1XXX-XXXXXX",
    detail: "Call or WhatsApp",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@gadgetraze.com",
    detail: "We reply within 24 hours",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "10:00 AM - 10:00 PM",
    detail: "Saturday - Thursday",
  },
]

const socialLinks = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/8801XXXXXXXXX",
    color: "bg-green-500 hover:bg-green-600",
    label: "Order on WhatsApp",
  },
  {
    name: "Facebook",
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    href: "https://facebook.com/gadgetrazeshopbd",
    color: "bg-blue-600 hover:bg-blue-700",
    label: "Follow on Facebook",
  },
  {
    name: "Messenger",
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.936 1.444 5.55 3.704 7.256V22l3.35-1.838c.895.246 1.843.38 2.846.38 5.523 0 10-4.145 10-9.243S17.523 2 12 2z" />
      </svg>
    ),
    href: "https://m.me/gadgetrazeshopbd",
    color: "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600",
    label: "Message on Facebook",
  },
  {
    name: "Telegram",
    icon: Send,
    href: "https://t.me/gadgetrazeshopbd",
    color: "bg-sky-500 hover:bg-sky-600",
    label: "Join Telegram",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Contact Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or ready to order? Reach out to us through any of
            these channels. We&apos;re here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {info.label}
                        </div>
                        <div className="font-semibold text-foreground">
                          {info.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {info.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Order / Social Links */}
          <div className="space-y-6">
            <Card className="border-border/50 overflow-hidden">
              <div className="bg-primary p-6 text-primary-foreground">
                <h3 className="text-lg font-semibold mb-2">
                  Quick Order
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  The fastest way to order! Click any button below to start a
                  conversation with us.
                </p>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.name}
                      className={`${link.color} text-white gap-2 h-auto py-4 flex-col rounded-xl`}
                      asChild
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {typeof link.icon === "function" ? (
                          <link.icon />
                        ) : (
                          <link.icon className="w-5 h-5" />
                        )}
                        <span className="text-xs">{link.label}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trust Card */}
            <Card className="border-border/50 bg-muted/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      100% Secure Shopping
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Your information is safe with us. We guarantee secure
                      transactions and protect your privacy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
