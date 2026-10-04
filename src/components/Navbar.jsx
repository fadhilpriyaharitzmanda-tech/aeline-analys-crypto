import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenAction }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Main Navigation">
      {/* Brand Logo */}
      <a href="#home" className="nav-brand" id="nav-brand-logo">
        <div className="nav-logo-icon">
          {/* Origami folded Aeline icon */}
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L3 19.5H8.5L12 12.5L15.5 19.5H21L12 2Z"
              fill="white"
              fillOpacity="0.95"
            />
            <path
              d="M12 12.5L8.5 19.5H15.5L12 12.5Z"
              fill="#d2ff28"
            />
          </svg>
        </div>
        <span className="nav-brand-text">Aeline</span>
        <span className="nav-crypto-badge">CRYPTO</span>
      </a>

      {/* Nav Menu Links */}
      <ul className="nav-links">
        <li>
          <a href="#home" className="nav-link">HOME</a>
        </li>
        <li>
          <a href="#live-prices" className="nav-link">
            LIVE HARGA
            <span className="nav-live-dot" />
          </a>
        </li>
        <li>
          <a href="#features" className="nav-link">FITUR AI</a>
        </li>
        <li>
          <a href="#simulator" className="nav-link">SIMULASI ALERT</a>
        </li>
        <li>
          <a href="#about" className="nav-link">ABOUT US</a>
        </li>
        <li 
          className="nav-link-dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="nav-link" aria-expanded={dropdownOpen}>
            MORE LINKS
            <ChevronDown size={14} style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
          </button>

          {dropdownOpen && (
            <div className="dropdown-menu">
              <a href="#live-prices" className="dropdown-item">Top Gainers 24j</a>
              <a href="#features" className="dropdown-item">Whale Radar</a>
              <a href="#faq" className="dropdown-item">FAQ & Panduan</a>
              <a 
                href="#api" 
                className="dropdown-item" 
                onClick={(e) => { e.preventDefault(); onOpenAction('WebSocket API Feed'); }}
              >
                Dokumentasi API
              </a>
            </div>
          )}
        </li>
      </ul>

      {/* Action Button */}
      <button 
        className="btn-buy-template" 
        id="btn-buy-template"
        onClick={() => onOpenAction('Mulai Melacak Kripto')}
      >
        MULAI MELACAK
      </button>
    </nav>
  );
}
