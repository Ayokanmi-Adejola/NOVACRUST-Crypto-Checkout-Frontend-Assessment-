"use client";
import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  full?: boolean;
};

export default function Button({ variant = 'primary', full, children, className, ...props }: Props) {
  return (
    <button
      className={[
        'btn',
        variant === 'secondary' ? 'secondary' : '',
        full ? 'full' : '',
        className || ''
      ].join(' ').trim()}
      {...props}
    >
      {children}
    </button>
  );
}
