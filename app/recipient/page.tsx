"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/components/Input';

export default function RecipientPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+234');
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (phone.length < 6) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      router.push('/send-eth');
    }
  };

  return (
    <div className="card">
      <button className="back-btn" onClick={() => router.back()}>
        ← Back
      </button>
      
      <div className="stack">
        <div>
          <div className="title">Recipient details</div>
        </div>

        <Input
          id="recipient-email"
          label="Recipient email"
          type="email"
          placeholder="Enter recipient email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />

        <div className="field">
          <label className="label" htmlFor="recipient-phone">Recipient phone number</label>
          <div style={{ display: 'flex', gap: '12px' }}>
            <select
              className="select"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              style={{ width: '120px' }}
            >
              <option value="+234">🇳🇬 +234</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+91">🇮🇳 +91</option>
            </select>
            <input
              id="recipient-phone"
              type="tel"
              className="input"
              placeholder="000 - 000 - 00000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ flex: 1 }}
            />
          </div>
          {errors.phone && <div className="error" role="alert">{errors.phone}</div>}
        </div>

        <button className="btn full" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
