import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="card">
      <div className="stack">
        <div className="title">Crypto Checkout Widget</div>
        <div className="subtitle">Experience a streamlined crypto payment flow</div>
        <Link className="btn full" href="/payment">Start Payment</Link>
      </div>
    </div>
  )
}
