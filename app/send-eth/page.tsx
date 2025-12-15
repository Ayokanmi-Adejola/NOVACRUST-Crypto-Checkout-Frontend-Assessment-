"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SendEthPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const walletAddress = '4LiYAVpms47WNMdtjb6q';

  const handleSend = async () => {
    setLoading(true);
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    router.push('/success');
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
  };

  return (
    <div className="card">
      <button className="back-btn" onClick={() => router.back()}>
        ← Back
      </button>
      
      <div className="stack">
        <div>
          <div className="title">Send ETH to the address below</div>
        </div>

        <div className="field">
          <label className="label">Wallet address</label>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            padding: '12px 16px',
            background: 'var(--input-bg)',
            border: '1px solid var(--border)',
            borderRadius: '12px'
          }}>
            <span style={{ 
              flex: 1, 
              fontFamily: 'monospace', 
              fontSize: '14px',
              color: 'var(--primary)',
              fontWeight: 600
            }}>
              {walletAddress}
            </span>
            <button
              onClick={copyAddress}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '18px'
              }}
              title="Copy address"
            >
              📋
            </button>
          </div>
        </div>

        <div style={{
          padding: '16px',
          background: 'var(--input-bg)',
          borderRadius: '12px',
          border: '1px solid var(--border)'
        }}>
          <div className="stack" style={{ gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
              <span className="muted">Amount to send</span>
              <span style={{ fontWeight: 600 }}>120 ETH</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
              <span className="muted">Network</span>
              <span>ETH</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
              <span className="muted">Wallet</span>
              <span>Other</span>
            </div>
          </div>
        </div>

        <div style={{ 
          padding: '12px 16px', 
          background: '#fff3cd', 
          borderRadius: '8px',
          fontSize: '13px',
          color: '#856404',
          lineHeight: 1.5
        }}>
          ⚠️ Only send{' '}
          <span style={{ fontWeight: 600 }}>ETH</span> to this address. Ensure the address is on the{' '}
          <span style={{ fontWeight: 600 }}>ETH</span> network otherwise you might lose your deposit
        </div>

        <button 
          className="btn full" 
          onClick={handleSend}
          disabled={loading}
        >
          {loading ? 'Processing...' : 'I have sent it'}
        </button>
      </div>
    </div>
  );
}
