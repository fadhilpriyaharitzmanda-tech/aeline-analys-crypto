import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Users } from 'lucide-react';

export default function CtaBanner({ onOpenAction }) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <section className="cta-banner-wrapper" aria-label="Mulai Melacak Kripto">
      <div className="cta-banner-card">
        {/* Ambient Glows */}
        <div className="cta-ambient-glow-lime" />
        <div className="cta-ambient-glow-blue" />

        <div className="cta-content-container">
          <div className="about-badge" style={{ color: '#d2ff28', marginBottom: '20px' }}>
            <span className="badge-dot" style={{ backgroundColor: '#d2ff28' }} />
            <span style={{ color: '#d2ff28' }}>AKSES GRATIS LANGSUNG</span>
          </div>

          <h2 className="cta-heading-title">
            Siap Melacak Harga Kripto dengan Presisi Detik Ini?
          </h2>

          <p className="cta-subheading-text">
            Bergabung bersama 4.900+ trader profesional, analis on-chain, dan institusi yang mengandalkan kecepatan streaming sub-detik Aeline.
          </p>

          {/* Email Subscription Form */}
          <form className="cta-form-row" onSubmit={handleSubmit}>
            <input
              type="email"
              className="cta-email-input"
              placeholder="Masukkan alamat email Anda..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-cta-submit">
              <span>Mulai Lacak Sekarang</span>
              <div className="btn-arrow-circle-black">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </div>
            </button>
          </form>

          {isSubscribed && (
            <div className="cta-success-toast animation-bounce">
              <CheckCircle2 size={16} color="#d2ff28" />
              <span>Akses VIP telah dikirimkan ke email Anda. Selamat datang di Aeline Crypto!</span>
            </div>
          )}

          {/* Trust Value Badges */}
          <div className="cta-trust-strip">
            <div className="trust-item">
              <Zap size={16} color="#d2ff28" />
              <span>Latensi Streaming 12ms</span>
            </div>
            <div className="trust-item">
              <ShieldCheck size={16} color="#d2ff28" />
              <span>100% Non-Custodial & Aman</span>
            </div>
            <div className="trust-item">
              <Users size={16} color="#d2ff28" />
              <span>4.900+ Trader Terdaftar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
