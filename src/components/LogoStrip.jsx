import React from 'react';

export default function LogoStrip() {
  const partners = [
    {
      id: 1,
      name: 'Binance',
      icon: (
        <svg className="logoipsum-glyph" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 5.09L8.91 11.27L5.82 8.18L12 2ZM18.18 8.18L21.27 11.27L15.09 17.45L12 14.36L18.18 8.18ZM12 17.45L15.09 20.54L12 23.63L8.91 20.54L12 17.45ZM5.82 14.36L8.91 17.45L2.73 11.27L5.82 8.18L5.82 14.36ZM12 8.91L14.36 11.27L12 13.63L9.64 11.27L12 8.91Z" />
        </svg>
      )
    },
    {
      id: 2,
      name: 'Coinbase',
      icon: (
        <svg className="logoipsum-glyph" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <rect x="9.5" y="9.5" width="5" height="5" rx="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 3,
      name: 'Ethereum',
      icon: (
        <svg className="logoipsum-glyph" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.999 1.75L4.5 14.125L11.999 18.5L19.5 14.125L11.999 1.75ZM11.999 19.875L4.5 15.5L11.999 22.25L19.5 15.5L11.999 19.875Z" />
        </svg>
      )
    },
    {
      id: 4,
      name: 'Solana',
      icon: (
        <svg className="logoipsum-glyph" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 17.5L7.5 14H20L16.5 17.5H4ZM4 6.5L7.5 3H20L16.5 6.5H4ZM7.5 12L4 8.5H16.5L20 12H7.5Z" />
        </svg>
      )
    },
    {
      id: 5,
      name: 'Kraken',
      icon: (
        <svg className="logoipsum-glyph" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M12 6L16 12H8L12 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      )
    },
    {
      id: 6,
      name: 'Chainlink',
      icon: (
        <svg className="logoipsum-glyph" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 6.5V17.5L12 22L20 17.5V6.5L12 2ZM17.5 16.1L12 19.2L6.5 16.1V7.9L12 4.8L17.5 7.9V16.1Z" />
        </svg>
      )
    },
    {
      id: 7,
      name: 'Uniswap',
      icon: (
        <svg className="logoipsum-glyph" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.5L19.5 8.7L12 12.9L4.5 8.7L12 4.5Z" />
        </svg>
      )
    }
  ];

  return (
    <section className="partner-strip" aria-label="Bursa & Protokol Kripto Terintegrasi">
      {partners.map((partner) => (
        <div key={partner.id} className="logoipsum-item">
          {partner.icon}
          <span>{partner.name}</span>
        </div>
      ))}
    </section>
  );
}
