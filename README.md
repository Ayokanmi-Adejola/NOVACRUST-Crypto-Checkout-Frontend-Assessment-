# NOVACRUST Crypto Checkout (Frontend Assessment)

A clean Next.js + TypeScript implementation of the NOVACRUST crypto checkout widget, based on the provided Figma design.

## Implemented Screens

1. **Payment Widget** (`/payment`) - Main crypto-to-cash conversion screen with:
   - Tab navigation (Crypto to cash, Cash to crypto, Crypto to fiat loan)
   - Amount inputs with currency selection dropdowns
   - Wallet selection for "Pay from" and "Pay to"
   - Searchable currency/token dropdowns

2. **Recipient Details** (`/recipient`) - Contact information collection:
   - Email input with validation
   - Phone number with country code selector
   - Back navigation and form validation

3. **Send ETH** (`/send-eth`) - Transaction instruction screen:
   - Wallet address display with copy function
   - Transaction summary (amount, network, wallet)
   - Warning message for network verification

4. **Success** (`/success`) - Confirmation screen:
   - Transaction ID display
   - Processing status message
   - Navigation back to home

## Features

✅ Next.js 14 with App Router  
✅ TypeScript strict mode  
✅ Responsive design (desktop + mobile)  
✅ Clean component structure  
✅ Form validation with error states  
✅ Accessible labels and ARIA attributes  
✅ NOVACRUST branding matching Figma  
✅ Light theme with teal primary color  

## Setup

```cmd
cd c:\Users\Dell\Quick-Test
npm install
npm run dev
```

Open http://localhost:3000

## Build

```cmd
npm run build
npm run start
```

## Project Structure

```
app/
├── payment/page.tsx       # Main widget with tabs and dropdowns
├── recipient/page.tsx     # Email and phone collection
├── send-eth/page.tsx      # Transaction instructions
├── success/page.tsx       # Confirmation screen
├── layout.tsx             # NOVACRUST header
└── globals.css            # Design system tokens

components/
├── Button.tsx             # Reusable button component
└── Input.tsx              # Form input with validation
```

## Design Decisions

- **Light theme**: Matches Figma's clean, professional aesthetic
- **Teal primary color** (#0d5f5f): Brand color from design
- **Custom dropdowns**: Built from scratch for full control over styling
- **No external UI library**: Keeps bundle small and maintains design accuracy
- **Validation**: Simple client-side validation for email/phone
- **Mock data**: All currencies, wallets, and transactions are mocked

## Deployment

Recommended: Vercel (optimized for Next.js)

```cmd
vercel
```

Or deploy to Netlify with Next.js runtime support.

## Time Spent

~4 hours including:
- Design analysis and component planning
- Styling system setup
- Screen implementation
- Validation and testing
