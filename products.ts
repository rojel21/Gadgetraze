// ============================================================
// PRODUCTS DATA — Edit this file to manage your store
// Each product is one object in the array below.
// ============================================================

export const WHATSAPP_NUMBER = "8801XXXXXXXXX" // ← Replace with your actual number

export type Product = {
  id: number
  name: string
  category: string
  price: number          // Price in BDT (Bangladeshi Taka)
  originalPrice: number  // Original/crossed-out price
  image: string          // Emoji or image path e.g. "/images/iphone.png"
  rating: number         // e.g. 4.9
  reviews: number        // Number of reviews
  badge?: string         // Optional: "Best Seller" | "Hot" | "New" | "Popular" | "Deal"
  stock: boolean         // true = in stock, false = out of stock
  description: string    // Short product description shown in modal
  features: string[]     // Key features shown in bullet list
  warranty: string       // e.g. "1 Year Official Warranty"
  delivery: string       // e.g. "3-5 Days (Outside Dhaka)"
}

export const categories = ["All", "Smartphones", "Earbuds", "Smartwatches", "Accessories"]

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    category: "Smartphones",
    price: 189999,
    originalPrice: 199999,
    image: "📱",
    rating: 4.9,
    reviews: 128,
    badge: "Best Seller",
    stock: true,
    description:
      "The most powerful iPhone ever. Featuring the A17 Pro chip, titanium design, and a 48MP camera system with 5× optical zoom. A game-changer for mobile photography and performance.",
    features: [
      "A17 Pro chip — fastest mobile processor",
      "48MP main camera with 5× optical zoom",
      "Titanium frame — lighter, stronger, premium",
      "USB-C with USB 3 speeds",
      "Action Button for quick shortcuts",
      "Up to 29 hours video playback",
    ],
    warranty: "1 Year Official Apple Warranty",
    delivery: "Same Day in Dhaka / 2-3 Days Outside",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    category: "Smartphones",
    price: 169999,
    originalPrice: 179999,
    image: "📱",
    rating: 4.8,
    reviews: 95,
    badge: "Hot",
    stock: true,
    description:
      "Samsung's ultimate flagship with a built-in S Pen, 200MP camera, and Galaxy AI features. Designed for power users who want the best Android experience.",
    features: [
      "Built-in S Pen with AI writing tools",
      "200MP main camera with 10× optical zoom",
      "Snapdragon 8 Gen 3 processor",
      "6.8-inch Dynamic AMOLED 120Hz display",
      "5000mAh battery with 45W fast charging",
      "Galaxy AI: Circle to Search, Live Translate",
    ],
    warranty: "1 Year Samsung Official Warranty",
    delivery: "Same Day in Dhaka / 2-3 Days Outside",
  },
  {
    id: 3,
    name: "Apple AirPods Pro 2",
    category: "Earbuds",
    price: 36999,
    originalPrice: 39999,
    image: "🎧",
    rating: 4.9,
    reviews: 256,
    badge: "Popular",
    stock: true,
    description:
      "Industry-leading Active Noise Cancellation meets spatial audio. The AirPods Pro 2 set the standard for premium wireless earbuds.",
    features: [
      "Active Noise Cancellation (ANC) — best in class",
      "Transparency mode with Adaptive Audio",
      "Personalized Spatial Audio with head tracking",
      "H2 chip for clear calls & low latency",
      "Up to 6 hours listening + 30 hours with case",
      "MagSafe & wireless charging case",
    ],
    warranty: "1 Year Apple Warranty",
    delivery: "1-2 Days Nationwide",
  },
  {
    id: 4,
    name: "Samsung Galaxy Buds2 Pro",
    category: "Earbuds",
    price: 18999,
    originalPrice: 21999,
    image: "🎧",
    rating: 4.7,
    reviews: 84,
    stock: true,
    description:
      "Premium sound meets intelligent ANC. Galaxy Buds2 Pro deliver Hi-Fi audio with 360° surround sound at an accessible price.",
    features: [
      "Hi-Fi 24-bit audio quality",
      "Intelligent Active Noise Cancellation",
      "360 Audio with head tracking",
      "IPX7 water resistant",
      "Up to 8 hours playback (29 with case)",
      "Seamless switch between Samsung devices",
    ],
    warranty: "1 Year Samsung Warranty",
    delivery: "1-2 Days Nationwide",
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    category: "Smartwatches",
    price: 62999,
    originalPrice: 68999,
    image: "⌚",
    rating: 4.8,
    reviews: 167,
    badge: "New",
    stock: true,
    description:
      "The most capable Apple Watch yet. With the new S9 chip, a brighter display, and the innovative Double Tap gesture — it's your healthiest companion.",
    features: [
      "S9 chip — 60% faster neural engine",
      "Double Tap gesture for hands-free control",
      "2000-nit always-on Retina display",
      "Blood oxygen & ECG sensors",
      "Crash Detection & Fall Detection",
      "18-hour battery life",
    ],
    warranty: "1 Year Apple Warranty",
    delivery: "Same Day in Dhaka / 2-3 Days Outside",
  },
  {
    id: 6,
    name: "Samsung Galaxy Watch 6",
    category: "Smartwatches",
    price: 34999,
    originalPrice: 38999,
    image: "⌚",
    rating: 4.6,
    reviews: 72,
    stock: true,
    description:
      "Track your health with precision. The Galaxy Watch 6 features advanced sleep coaching, body composition analysis, and all-day health monitoring.",
    features: [
      "Advanced sleep coaching & analysis",
      "Body composition measurement",
      "Heart rate, SpO2, and ECG sensors",
      "Wear OS 4 with One UI Watch 6",
      "Samsung Pay support",
      "5ATM + IP68 water resistance",
    ],
    warranty: "1 Year Samsung Warranty",
    delivery: "1-2 Days Nationwide",
  },
  {
    id: 7,
    name: "Anker 65W Fast Charger",
    category: "Accessories",
    price: 3499,
    originalPrice: 4299,
    image: "🔌",
    rating: 4.7,
    reviews: 312,
    badge: "Deal",
    stock: true,
    description:
      "Charge your laptop, phone, and tablet simultaneously. The Anker 65W GaN charger packs serious power into a pocket-sized form factor.",
    features: [
      "65W total output across 2 USB-C + 1 USB-A",
      "GaN technology — stays cool & compact",
      "Charges MacBook Air, iPhone, iPad, Android",
      "PowerIQ 4.0 for smart device detection",
      "Universal voltage — works worldwide",
      "MultiProtocol: PD 3.0, QC 4+, AFC",
    ],
    warranty: "18 Months Anker Warranty",
    delivery: "1-2 Days Nationwide",
  },
  {
    id: 8,
    name: "Baseus 20000mAh Power Bank",
    category: "Accessories",
    price: 2999,
    originalPrice: 3999,
    image: "🔋",
    rating: 4.5,
    reviews: 189,
    stock: true,
    description:
      "Never run out of charge. The Baseus 20000mAh power bank supports 65W fast charging for laptops and has dual USB-C ports for simultaneous charging.",
    features: [
      "20000mAh massive capacity",
      "65W USB-C fast charging (charges laptop)",
      "Dual USB-C + USB-A ports",
      "LED power indicator display",
      "Passthrough charging supported",
      "Airlines approved capacity",
    ],
    warranty: "1 Year Baseus Warranty",
    delivery: "1-2 Days Nationwide",
  },
]

// ─── Helpers ───────────────────────────────────────────────

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(price)
    .replace("BDT", "৳")
}

export function getDiscount(price: number, originalPrice: number) {
  return Math.round(((originalPrice - price) / originalPrice) * 100)
}
