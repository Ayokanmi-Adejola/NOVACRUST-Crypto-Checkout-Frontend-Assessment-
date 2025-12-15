"use client";
import React from 'react';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="card">
      <div className="success">
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          marginBottom: '8px'
        }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20z" fill="#0d5f5f"/>
            <path d="M34 18L21 31l-7-7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <div>
          <div className="title" style={{ fontSize: '20px', textAlign: 'center', marginBottom: '8px' }}>
            Your transaction is processing
          </div>
          <div className="subtitle" style={{ textAlign: 'center' }}>
            The recipient will receive it shortly.
          </div>
        </div>

        <div style={{ 
          width: '100%',
          padding: '16px',
          background: 'var(--input-bg)',
          borderRadius: '12px',
          marginTop: '8px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span className="subtitle">Transaction ID:</span>
            <span style={{ fontFamily: 'monospace', fontSize: '13px', fontWeight: 600 }}>
              NC17304309
            </span>
          </div>
        </div>

        <Link className="btn full" href="/payment" style={{ marginTop: '8px' }}>
          Go back to home
        </Link>
      </div>
    </div>
  );
}
