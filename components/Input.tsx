"use client";
import React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  hint?: string;
  id: string;
};

export default function Input({ label, error, hint, id, ...props }: Props) {
  const invalid = Boolean(error);
  return (
    <div className="field">
      <label className="label" htmlFor={id}>{label}</label>
      <input id={id} className="input" aria-invalid={invalid || undefined} aria-describedby={hint ? id + '-hint' : undefined} {...props} />
      {hint && <div id={id + '-hint'} className="subtitle">{hint}</div>}
      {invalid && <div className="error" role="alert">{error}</div>}
    </div>
  );
}
