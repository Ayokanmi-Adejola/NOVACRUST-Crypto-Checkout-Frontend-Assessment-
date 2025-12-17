import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NOVACRUST - Crypto Checkout',
  description: 'Simple crypto checkout experience',
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="brand">
            <svg className="brand-logo" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="8" fill="#0d5f5f"/>
              <path d="M20 10L12 16v14l8 6 8-6V16l-8-6z" fill="white"/>
            </svg>
            NOVACRUST
          </div>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  )
}
