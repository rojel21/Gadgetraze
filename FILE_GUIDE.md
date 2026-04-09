# 📖 Gadgetraze Shop — File Guide for Beginners

This document explains every major file in simple language.
No coding experience needed to follow along!

---

## 🗂️ Project Structure Overview

```
gadgetraze-shop/
├── app/                    ← Next.js app pages & styles
│   ├── layout.tsx          ← The "outer shell" of every page
│   ├── page.tsx            ← The homepage
│   └── globals.css         ← Global colors & font settings
│
├── components/             ← Reusable UI building blocks
│   ├── navbar.tsx          ← Top navigation bar
│   ├── hero-section.tsx    ← Big banner at the top of the page
│   ├── products-section.tsx← Product grid with filters
│   ├── categories-section.tsx ← Category cards
│   ├── reviews-section.tsx ← Customer reviews
│   ├── faq-section.tsx     ← FAQ accordion
│   ├── contact-section.tsx ← Contact form
│   ├── footer.tsx          ← Bottom of the page
│   ├── cart-sidebar.tsx    ← Slide-in shopping cart panel
│   ├── product-detail-modal.tsx ← Popup for full product info
│   ├── checkout-modal.tsx  ← Order form → sends to WhatsApp
│   └── providers.tsx       ← Wraps app with global features
│
├── context/
│   └── cart-context.tsx    ← Global cart state (the "brain" of the cart)
│
├── lib/
│   ├── products.ts         ← ⭐ ALL product data lives here
│   └── utils.ts            ← Small helper functions
│
└── public/                 ← Images and icons
```

---

## 📄 File Explanations

---

### `lib/products.ts` ⭐ (Most Important for You)

**What it does:** This is where ALL your product information lives.
Think of it as your product database written in plain code.

**To add a new product**, copy one of the existing product objects and change the values:

```ts
{
  id: 9,                          // Must be a unique number
  name: "Your Product Name",
  category: "Accessories",        // Must match one of the categories list
  price: 4999,                    // Price in BDT (no commas)
  originalPrice: 5999,            // Crossed-out price (higher than price)
  image: "🎮",                    // Emoji for now (or "/images/product.jpg")
  rating: 4.5,                    // Out of 5
  reviews: 50,
  badge: "New",                   // Optional: "Best Seller" | "Hot" | "New" | "Popular" | "Deal"
  stock: true,                    // true = in stock, false = sold out
  description: "Short paragraph describing the product.",
  features: [
    "Feature one",
    "Feature two",
  ],
  warranty: "1 Year Warranty",
  delivery: "1-2 Days Nationwide",
}
```

**To change your WhatsApp number**, find this line at the top:
```ts
export const WHATSAPP_NUMBER = "8801XXXXXXXXX"
```
Replace `8801XXXXXXXXX` with your real number (e.g. `8801712345678`).

---

### `app/layout.tsx`

**What it does:** The outer wrapper for every page on your site.
Like the frame of a house — it contains everything inside it.

It sets up:
- The page title and description (for Google search)
- The fonts (Inter & Poppins)
- The `<Providers>` which gives all pages access to the cart

You rarely need to edit this unless you're changing the site title or adding new fonts.

---

### `app/page.tsx`

**What it does:** This is your homepage.
It simply imports and stacks all the sections in order:
Navbar → Hero → Products → Categories → Reviews → FAQ → Contact → Footer

To reorder sections, just move the lines around. To remove a section, delete its line.

---

### `app/globals.css`

**What it does:** Controls the global visual theme — colors, fonts, spacing.
It uses CSS variables so the whole site can be recolored by changing a few values.

The most useful variables:
```css
--primary: /* Main brand color (buttons, links, highlights) */
--background: /* Page background */
--foreground: /* Main text color */
```

---

### `components/navbar.tsx`

**What it does:** The fixed navigation bar at the top of the page.
- Shows your logo and navigation links
- Has a **Cart button** with a badge showing how many items are in the cart
- On mobile, collapses into a hamburger menu
- Becomes solid/blurred after you scroll down 20px

**To add a new nav link**, find the `navLinks` array:
```ts
const navLinks = [
  { name: "Home", href: "#home" },
  // Add yours here:
  { name: "New Section", href: "#new-section" },
]
```

---

### `components/hero-section.tsx`

**What it does:** The big, eye-catching banner at the very top of your page.
Contains the headline, subtext, Shop Now and WhatsApp buttons, and the feature card grid.

**To edit the headline**, find:
```tsx
<h1>Your One-Stop <span>Gadget Shop</span> in Bangladesh</h1>
```

---

### `components/products-section.tsx`

**What it does:** Shows all your products in a grid. Includes:
- Category filter buttons at the top
- Product cards with Add-to-Cart and WhatsApp buttons
- Heart/Wishlist and Eye/Details buttons on hover
- Clicking a product name or the Eye icon opens the **Product Detail Modal**

The product data comes from `lib/products.ts` — so you never need to edit this file to update products.

---

### `components/cart-sidebar.tsx`

**What it does:** The sliding panel that opens from the right side when you add items to the cart.

Features:
- Shows all items with their quantities
- +/- buttons to adjust quantity
- Trash icon to remove an item
- Shows subtotal, delivery info, and total
- "Proceed to Checkout" button opens the checkout form

---

### `components/product-detail-modal.tsx`

**What it does:** A popup that shows detailed information about a single product.

Opens when you:
- Click the 👁️ Eye icon on a product card
- Click the product name

Shows: large image, full description, all features, warranty, delivery info, quantity selector, and Add to Cart / WhatsApp buttons.

---

### `components/checkout-modal.tsx`

**What it does:** The order form your customers fill out before placing an order.

Collects:
- Customer name
- Phone number (validates Bangladesh format)
- Delivery address
- Optional notes

When they click "Place Order via WhatsApp", it:
1. Validates the form
2. Builds a nicely formatted order message
3. Opens WhatsApp with the message pre-filled and sent to your number

---

### `context/cart-context.tsx`

**What it does:** The "brain" of the shopping cart.
It stores what's in the cart and makes that information available to every component on the page.

Think of it like a shared notepad that every component can read and write to.

**You don't need to edit this file** unless you want to add features like saving the cart to local storage.

Key functions it provides:
- `addToCart(product)` — add one item
- `removeFromCart(id)` — remove an item
- `updateQuantity(id, qty)` — change how many of something
- `clearCart()` — empty the cart
- `openCart()` / `closeCart()` — show/hide the sidebar
- `totalItems` — number shown on the cart badge
- `totalPrice` — total in BDT

---

### `components/providers.tsx`

**What it does:** A simple wrapper that combines all global providers.
Right now it wraps the app with `CartProvider` and renders the `CartSidebar`.

If you add new global features in the future (like a Theme context or Auth context), you'd add them here.

---

### `components/ui/` folder

**What it does:** These are ready-made UI components from the **shadcn/ui** library.
Things like `Button`, `Card`, `Badge`, `Dialog`, `Sheet`, etc.

**You don't need to edit these.** They're pre-built and already styled to match your theme.
If you need a new UI component, run: `npx shadcn@latest add [component-name]`

---

## 🚀 Quick Reference

| Task | Where to go |
|------|------------|
| Add/edit a product | `lib/products.ts` |
| Change WhatsApp number | `lib/products.ts` — `WHATSAPP_NUMBER` |
| Change site title/SEO | `app/layout.tsx` |
| Change colors/theme | `app/globals.css` |
| Add a nav link | `components/navbar.tsx` — `navLinks` array |
| Edit homepage order | `app/page.tsx` |
| Edit hero text | `components/hero-section.tsx` |
| Edit footer info | `components/footer.tsx` |

---

## 🛠️ Running the Project

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open in browser
http://localhost:3000
```

---

## 📦 Deploying to Vercel (Free Hosting)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and import your repo
4. Click "Deploy" — that's it!

Vercel automatically rebuilds your site every time you push changes to GitHub.
