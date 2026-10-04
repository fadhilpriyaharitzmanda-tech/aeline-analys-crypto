import React from 'react';
import { Radio, BrainCircuit, Wallet, BellRing, ShieldCheck, Zap } from 'lucide-react';

export default function CryptoFeatures() {
  const features = [
    {
      id: 1,
      badge: 'LATENSI SUB-DETIK',
      title: 'Streaming Data WebSocket 12ms',
      desc: 'Dapatkan feed harga order book level-2 tanpa jeda langsung dari bursa terkemuka dunia seperti Binance, Coinbase, dan Kraken.',
      icon: <Radio size={24} color="#0284c7" />,
      accentBg: '#e0f2fe',
      visual: (
        <div className="feature-mini-visual">
          <div className="visual-ping-row">
            <span className="visual-exchange-tag">Binance WS</span>
            <span className="visual-latency-tag">8ms</span>
          </div>
          <div className="visual-ping-row">
            <span className="visual-exchange-tag">Coinbase Pro</span>
            <span className="visual-latency-tag">14ms</span>
          </div>
          <div className="visual-ping-row">
            <span className="visual-exchange-tag">Kraken Feed</span>
            <span className="visual-latency-tag">11ms</span>
          </div>
        </div>
      )
    },
    {
      id: 2,
      badge: 'ARTIFICIAL INTELLIGENCE',
      title: 'AI Whale & Anomaly Scanner',
      desc: 'Machine learning memindai pergerakan dompet paus (whale) dan lonjakan volume likuiditas mendadak untuk memprediksi breakout harga.',
      icon: <BrainCircuit size={24} color="#10b981" />,
      accentBg: '#dcfce7',
      visual: (
        <div className="feature-mini-visual">
          <div className="whale-alert-pill">
            <span className="whale-dot" />
            <span style={{ fontSize: '11px', fontWeight: 700 }}>Whale Alert: 4,500 BTC</span>
          </div>
          <div style={{ fontSize: '10px', color: '#6b7280', marginTop: '6px' }}>
            Ditransfer dari Unknown Wallet ke Binance • Sinyal Volatilitas Tinggi (+84%)
          </div>
        </div>
      )
    },
    {
      id: 3,
      badge: 'MULTI-CHAIN',
      title: 'Aggregator Portofolio Lintas Rantai',
      desc: 'Hubungkan alamat dompet read-only Anda untuk memantau total kekayaan bersih kripto di Ethereum, Solana, Bitcoin, Arbitrum, dan Base.',
      icon: <Wallet size={24} color="#8b5cf6" />,
      accentBg: '#f3e8ff',
      visual: (
        <div className="feature-mini-visual">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontSize: '11px', color: '#4b5563', fontWeight: 600 }}>Total Balance</span>
            <span style={{ fontSize: '14px', fontWeight: 800, color: '#111827' }}>$142,850.00</span>
          </div>
          <div className="chain-bars-preview">
            <div className="chain-bar" style={{ width: '48%', background: '#627eea' }} title="ETH 48%" />
            <div className="chain-bar" style={{ width: '32%', background: '#14f195' }} title="SOL 32%" />
            <div className="chain-bar" style={{ width: '20%', background: '#f7931a' }} title="BTC 20%" />
          </div>
        </div>
      )
    },
    {
      id: 4,
      badge: 'NOTIFIKASI INSTAN',
      title: 'Smart Trigger & Webhook Otomatis',
      desc: 'Kirim alert real-time ke Telegram, Discord, atau SMS saat harga menembus target, Golden Cross terjadi, atau RSI masuk zona overbought.',
      icon: <BellRing size={24} color="#f59e0b" />,
      accentBg: '#fef3c7',
      visual: (
        <div className="feature-mini-visual">
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#229ED9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px', fontWeight: 'bold' }}>TG</div>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#1f2937' }}>Alert: ETH menembus $3,450 🚀</div>
          </div>
          <div style={{ fontSize: '10px', color: '#10b981', marginTop: '4px', fontWeight: 600 }}>Terkirim dalam 0.3 detik</div>
        </div>
      )
    }
  ];

  return (
    <section className="crypto-features-section" id="features">
      <div className="crypto-section-header">
        <div className="about-badge">
          <span className="badge-dot" style={{ backgroundColor: '#3b82f6' }} />
          <span>KEUNGGULAN SISTEM</span>
        </div>
        <h2 className="crypto-tracker-title">
          Infrastruktur Intelijen Kripto Generasi Terbaru
        </h2>
        <p className="crypto-tracker-sub">
          Dirancang untuk trader profesional, analis on-chain, dan institusi yang membutuhkan kecepatan absolut dan akurasi tanpa kompromi.
        </p>
      </div>

      <div className="features-bento-grid">
        {features.map((feat) => (
          <div key={feat.id} className="feature-card-item">
            <div className="feature-header-wrap">
              <div className="feature-icon-box" style={{ backgroundColor: feat.accentBg }}>
                {feat.icon}
              </div>
              <span className="feature-badge-pill">{feat.badge}</span>
            </div>

            <h3 className="feature-card-title">{feat.title}</h3>
            <p className="feature-card-desc">{feat.desc}</p>

            <div className="feature-visual-wrapper">
              {feat.visual}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
