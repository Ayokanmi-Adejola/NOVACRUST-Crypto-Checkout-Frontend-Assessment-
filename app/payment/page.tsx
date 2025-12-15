"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Currency = {
  code: string;
  name: string;
  icon: string;
  color: string;
};

type Wallet = {
  name: string;
  icon: string;
};

const CURRENCIES: Currency[] = [
  { code: 'ETH', name: 'Ethereum', icon: '⟠', color: '#627eea' },
  { code: 'USDT - CELO', name: 'Tether on Celo', icon: '₮', color: '#f8d12f' },
  { code: 'USDT - TON', name: 'Tether on TON', icon: '₮', color: '#0098ea' },
  { code: 'USDT - BNB', name: 'Tether on BNB', icon: '₮', color: '#f3ba2f' },
];

const WALLETS: Wallet[] = [
  { name: 'Metamask', icon: '🦊' },
  { name: 'Rainbow', icon: '🌈' },
  { name: 'WalletConnect', icon: '🔗' },
  { name: 'Other Crypto Wallets (Binance, Conibase, Bybit etc)', icon: '💼' },
];

export default function PaymentPage() {
  const router = useRouter();
  const [tab, setTab] = useState<'crypto-to-cash' | 'cash-to-crypto' | 'crypto-to-fiat'>('crypto-to-cash');
  const [youPay, setYouPay] = useState('1.00');
  const [youReceive, setYouReceive] = useState('1.00');
  const [payCurrency, setPayCurrency] = useState(CURRENCIES[0]);
  const [receiveCurrency, setReceiveCurrency] = useState(CURRENCIES[2]);
  const [payFrom, setPayFrom] = useState<string>('');
  const [payTo, setPayTo] = useState<string>('');
  const [showPayCurrencyDropdown, setShowPayCurrencyDropdown] = useState(false);
  const [showReceiveCurrencyDropdown, setShowReceiveCurrencyDropdown] = useState(false);
  const [showPayFromDropdown, setShowPayFromDropdown] = useState(false);
  const [showPayToDropdown, setShowPayToDropdown] = useState(false);

  const handleNext = () => {
    router.push('/recipient');
  };

  return (
    <div className="card">
      <div className="tabs">
        <button
          className={`tab ${tab === 'crypto-to-cash' ? 'active' : ''}`}
          onClick={() => setTab('crypto-to-cash')}
        >
          Crypto to cash
        </button>
        <button
          className={`tab ${tab === 'cash-to-crypto' ? 'active' : ''}`}
          onClick={() => setTab('cash-to-crypto')}
        >
          Cash to crypto
        </button>
        <button
          className={`tab ${tab === 'crypto-to-fiat' ? 'active' : ''}`}
          onClick={() => setTab('crypto-to-fiat')}
        >
          Crypto to fiat loan
        </button>
      </div>

      <div className="stack">
        <div className="field">
          <label className="label">You pay</label>
          <div className="amount-display">
            <input
              type="text"
              className="amount-input"
              value={youPay}
              onChange={(e) => setYouPay(e.target.value)}
            />
            <div className="dropdown">
              <button
                className="currency-badge"
                onClick={() => setShowPayCurrencyDropdown(!showPayCurrencyDropdown)}
              >
                <span style={{ fontSize: '18px' }}>{payCurrency.icon}</span>
                {payCurrency.code}
                <span style={{ fontSize: '12px' }}>▼</span>
              </button>
              {showPayCurrencyDropdown && (
                <div className="dropdown-menu" style={{ minWidth: '200px', right: 0, left: 'auto' }}>
                  <div style={{ padding: '12px' }}>
                    <input
                      type="text"
                      className="input"
                      placeholder="Search"
                      style={{ height: '36px', fontSize: '14px' }}
                    />
                  </div>
                  {CURRENCIES.map((curr) => (
                    <div
                      key={curr.code}
                      className="dropdown-item"
                      onClick={() => {
                        setPayCurrency(curr);
                        setShowPayCurrencyDropdown(false);
                      }}
                    >
                      <div className="dropdown-icon" style={{ backgroundColor: curr.color, color: 'white' }}>
                        {curr.icon}
                      </div>
                      <span style={{ fontWeight: 500 }}>{curr.code}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">You receive</label>
          <div className="amount-display">
            <input
              type="text"
              className="amount-input"
              value={youReceive}
              onChange={(e) => setYouReceive(e.target.value)}
            />
            <div className="dropdown">
              <button
                className="currency-badge"
                onClick={() => setShowReceiveCurrencyDropdown(!showReceiveCurrencyDropdown)}
              >
                <span style={{ fontSize: '18px' }}>{receiveCurrency.icon}</span>
                {receiveCurrency.code}
                <span style={{ fontSize: '12px' }}>▼</span>
              </button>
              {showReceiveCurrencyDropdown && (
                <div className="dropdown-menu" style={{ minWidth: '200px', right: 0, left: 'auto' }}>
                  <div style={{ padding: '12px' }}>
                    <input
                      type="text"
                      className="input"
                      placeholder="Search"
                      style={{ height: '36px', fontSize: '14px' }}
                    />
                  </div>
                  {CURRENCIES.map((curr) => (
                    <div
                      key={curr.code}
                      className="dropdown-item"
                      onClick={() => {
                        setReceiveCurrency(curr);
                        setShowReceiveCurrencyDropdown(false);
                      }}
                    >
                      <div className="dropdown-icon" style={{ backgroundColor: curr.color, color: 'white' }}>
                        {curr.icon}
                      </div>
                      <span style={{ fontWeight: 500 }}>{curr.code}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Pay from</label>
          <div className="dropdown">
            <button
              className={`dropdown-trigger ${showPayFromDropdown ? 'open' : ''}`}
              onClick={() => setShowPayFromDropdown(!showPayFromDropdown)}
            >
              <span style={{ color: payFrom ? 'var(--text)' : 'var(--muted)' }}>
                {payFrom || 'Select an option'}
              </span>
              <span style={{ fontSize: '12px' }}>▼</span>
            </button>
            {showPayFromDropdown && (
              <div className="dropdown-menu">
                {WALLETS.map((wallet) => (
                  <div
                    key={wallet.name}
                    className="dropdown-item"
                    onClick={() => {
                      setPayFrom(wallet.name);
                      setShowPayFromDropdown(false);
                    }}
                  >
                    <span style={{ fontSize: '20px' }}>{wallet.icon}</span>
                    <span>{wallet.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="field">
          <label className="label">Pay to</label>
          <div className="dropdown">
            <button
              className={`dropdown-trigger ${showPayToDropdown ? 'open' : ''}`}
              onClick={() => setShowPayToDropdown(!showPayToDropdown)}
            >
              <span style={{ color: payTo ? 'var(--text)' : 'var(--muted)' }}>
                {payTo || 'Select an option'}
              </span>
              <span style={{ fontSize: '12px' }}>▼</span>
            </button>
            {showPayToDropdown && (
              <div className="dropdown-menu">
                {WALLETS.map((wallet) => (
                  <div
                    key={wallet.name}
                    className="dropdown-item"
                    onClick={() => {
                      setPayTo(wallet.name);
                      setShowPayToDropdown(false);
                    }}
                  >
                    <span style={{ fontSize: '20px' }}>{wallet.icon}</span>
                    <span>{wallet.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <button className="btn full" onClick={handleNext}>
          Convert now
        </button>
      </div>
    </div>
  );
}
