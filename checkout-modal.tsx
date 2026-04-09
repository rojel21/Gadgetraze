"use client"

// ============================================================
// CHECKOUT MODAL
// Collects customer info (name, phone, address) then builds
// a WhatsApp message with the full order and opens WhatsApp.
// ============================================================

import { useState } from "react"
import { useCart } from "@/context/cart-context"
import { formatPrice, WHATSAPP_NUMBER } from "@/lib/products"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  MessageCircle,
  User,
  Phone,
  MapPin,
  ChevronRight,
  CheckCircle2,
  Package,
} from "lucide-react"

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CheckoutModal({ open, onOpenChange }: Props) {
  const { items, totalPrice, totalItems, clearCart } = useCart()
  const [step, setStep] = useState<"form" | "success">("form")
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  })
  const [errors, setErrors] = useState<Partial<typeof form>>({})

  function validate() {
    const e: Partial<typeof form> = {}
    if (!form.name.trim()) e.name = "Please enter your name"
    if (!form.phone.trim()) e.phone = "Please enter your phone number"
    else if (!/^(?:\+8801|8801|01)[3-9]\d{8}$/.test(form.phone.replace(/\s/g, "")))
      e.phone = "Enter a valid Bangladeshi phone number"
    if (!form.address.trim()) e.address = "Please enter your delivery address"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function buildWhatsAppMessage() {
    const lines = [
      "🛒 *New Order from Gadgetraze Shop BD*",
      "",
      "*Order Items:*",
      ...items.map(
        ({ product, quantity }) =>
          `• ${quantity}× ${product.name} — ${formatPrice(product.price * quantity)}`
      ),
      "",
      `*Subtotal:* ${formatPrice(totalPrice)}`,
      `*Delivery:* Free in Dhaka`,
      `*Total: ${formatPrice(totalPrice)}*`,
      "",
      "*Customer Details:*",
      `👤 Name: ${form.name}`,
      `📞 Phone: ${form.phone}`,
      `📍 Address: ${form.address}`,
      form.notes ? `📝 Notes: ${form.notes}` : "",
    ]
      .filter((l) => l !== undefined)
      .join("\n")

    return encodeURIComponent(lines)
  }

  function handleOrder() {
    if (!validate()) return
    const message = buildWhatsAppMessage()
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank")
    setStep("success")
  }

  function handleClose() {
    if (step === "success") {
      clearCart()
      setStep("form")
      setForm({ name: "", phone: "", address: "", notes: "" })
    }
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        {step === "form" ? (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-xl font-bold">
                <Package className="w-5 h-5 text-primary" />
                Complete Your Order
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                Fill in your details and we'll send your order via WhatsApp.
              </DialogDescription>
            </DialogHeader>

            {/* Order Summary */}
            <div className="rounded-xl bg-muted/50 border border-border p-4 space-y-2 mb-2">
              <p className="text-sm font-semibold text-foreground mb-3">
                Order Summary ({totalItems} items)
              </p>
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {quantity}× {product.name}
                  </span>
                  <span className="font-medium text-foreground">
                    {formatPrice(product.price * quantity)}
                  </span>
                </div>
              ))}
              <Separator className="my-2" />
              <div className="flex justify-between font-bold text-foreground">
                <span>Total</span>
                <span className="text-primary">{formatPrice(totalPrice)}</span>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="text-sm font-medium text-foreground flex items-center gap-1.5 mb-1.5">
                  <User className="w-3.5 h-3.5" />
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahim Ahmed"
                  value={form.name}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, name: e.target.value }))
                    setErrors((er) => ({ ...er, name: undefined }))
                  }}
                  className={`w-full px-3 py-2.5 rounded-lg border text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition ${
                    errors.name ? "border-destructive" : "border-border"
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-destructive mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium text-foreground flex items-center gap-1.5 mb-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 01712-345678"
                  value={form.phone}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, phone: e.target.value }))
                    setErrors((er) => ({ ...er, phone: undefined }))
                  }}
                  className={`w-full px-3 py-2.5 rounded-lg border text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition ${
                    errors.phone ? "border-destructive" : "border-border"
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-destructive mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="text-sm font-medium text-foreground flex items-center gap-1.5 mb-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Delivery Address *
                </label>
                <textarea
                  placeholder="e.g. House 12, Road 5, Dhanmondi, Dhaka 1205"
                  value={form.address}
                  rows={2}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, address: e.target.value }))
                    setErrors((er) => ({ ...er, address: undefined }))
                  }}
                  className={`w-full px-3 py-2.5 rounded-lg border text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none transition ${
                    errors.address ? "border-destructive" : "border-border"
                  }`}
                />
                {errors.address && (
                  <p className="text-xs text-destructive mt-1">{errors.address}</p>
                )}
              </div>

              {/* Notes */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Order Notes (Optional)
                </label>
                <textarea
                  placeholder="Any special requests or delivery instructions..."
                  value={form.notes}
                  rows={2}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, notes: e.target.value }))
                  }
                  className="w-full px-3 py-2.5 rounded-lg border border-border text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none transition"
                />
              </div>

              {/* Payment method badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                <p className="text-xs text-muted-foreground w-full">Payment Methods:</p>
                {["Cash on Delivery", "bKash", "Nagad", "Rocket", "Bank Transfer"].map((m) => (
                  <Badge key={m} variant="secondary" className="text-xs">
                    {m}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Submit */}
            <Button
              className="w-full rounded-full gap-2 text-base font-semibold mt-2 bg-green-600 hover:bg-green-700 text-white"
              size="lg"
              onClick={handleOrder}
            >
              <MessageCircle className="w-5 h-5" />
              Place Order via WhatsApp
              <ChevronRight className="w-4 h-4" />
            </Button>
            <p className="text-xs text-center text-muted-foreground -mt-1">
              WhatsApp will open with your order details pre-filled
            </p>
          </>
        ) : (
          /* Success State */
          <div className="flex flex-col items-center text-center gap-5 py-6">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Order Sent! 🎉
              </h3>
              <p className="text-muted-foreground text-sm max-w-xs">
                Your order details have been sent to WhatsApp. Our team will confirm your order shortly.
              </p>
            </div>
            <div className="bg-muted/50 rounded-xl p-4 w-full text-left space-y-2">
              <p className="text-sm font-medium text-foreground">What happens next?</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✅ We'll confirm availability within 1 hour</li>
                <li>✅ You'll receive payment instructions on WhatsApp</li>
                <li>✅ Delivery arranged within 1-3 business days</li>
              </ul>
            </div>
            <Button className="rounded-full w-full" onClick={handleClose}>
              Back to Shopping
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
