import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';

export default function HeroSection({ onOpenAction }) {
  return (
    <section className="hero-content" id="home">
      {/* Hero Headline */}
      <h1 className="hero-title">
        Building the future of crypto with<br />AI and strategy
      </h1>

      {/* Subheadline focused on Real-Time Crypto Price Tracking */}
      <p className="hero-subtitle">
        Lacak pergerakan harga mata uang kripto secara real-time dengan streaming data sub-detik, sinyal prediktif bertenaga AI, dan automasi portofolio cerdas.
      </p>

      {/* CTA Buttons */}
      <div className="hero-actions">
        <a 
          href="#live-prices"
          className="btn-view-demo"
          id="btn-view-demo"
        >
          LIHAT LIVE TICKER
        </a>
        <button 
          className="btn-get-started"
          id="btn-get-started"
          onClick={() => onOpenAction('Get Started with Crypto Tracking')}
        >
          <span>MULAI MELACAK</span>
          <div className="btn-arrow-circle">
            <ArrowUpRight size={18} strokeWidth={2.5} />
          </div>
        </button>
      </div>

      {/* 3D Cylindrical Curved Arch of UI Cards */}
      <div className="hero-showcase-container">
        <div className="cards-curve-stage">
          <div className="cards-curve-track">
            
            {/* Card 1: BTC/USDT Bar Chart */}
            <div className="curve-card card-pos-1">
              <div className="card-1-content">
                <span className="card-label-small">BTC/USDT Live<br />Volatilitas 24 Jam</span>
                <div className="card-bar-chart">
                  <div className="bar-col" style={{ height: '35%' }} />
                  <div className="bar-col" style={{ height: '55%' }} />
                  <div className="bar-col" style={{ height: '40%' }} />
                  <div className="bar-col" style={{ height: '80%' }} />
                  <div className="bar-col" style={{ height: '65%' }} />
                  <div className="bar-col" style={{ height: '95%' }} />
                </div>
              </div>
            </div>

            {/* Card 2: Crypto Budget & Gas Items */}
            <div className="curve-card card-pos-2">
              <div className="card-2-content">
                <div className="card-budget-header">
                  <span>$4,900</span>
                  <span className="card-budget-sub">/ $5,000 ETH</span>
                </div>
                <div className="card-budget-bar">
                  <div className="card-budget-progress" />
                </div>
                <div className="card-budget-item">
                  <span>Auto Rebalance</span>
                  <div className="card-toggle-pill" />
                </div>
                <div className="card-budget-item">
                  <span>Gas Fee Limit</span>
                  <span style={{ fontWeight: 600 }}>12 Gwei</span>
                </div>
                <div className="card-budget-item">
                  <span>Take Profit</span>
                  <span style={{ fontWeight: 600 }}>$3,500</span>
                </div>
              </div>
            </div>

            {/* Card 3: Photo of Woman with Profit Tags */}
            <div className="curve-card card-pos-3">
              <div className="card-3-content">
                <img 
                  src="/images/woman_green_shirt.jpg" 
                  alt="Aeline Crypto Strategist" 
                  className="card-photo-img"
                  loading="eager"
                />
                <div className="card-photo-tags">
                  <span className="photo-tag">+$2,670 BTC</span>
                  <span className="photo-tag">+$1,200 SOL</span>
                </div>
              </div>
            </div>

            {/* Card 4: Solana Real-time Area Line Chart */}
            <div className="curve-card card-pos-4">
              <div className="card-4-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="card-label-small">Solana Real-Time<br />$198.75 (+8.6%)</span>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
                </div>
                <svg className="card-line-chart-svg" viewBox="0 0 160 90" fill="none">
                  <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>
                  {/* Subtle Gridlines */}
                  <line x1="0" y1="25" x2="160" y2="25" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="0" y1="55" x2="160" y2="55" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 2" />
                  
                  {/* Area fill */}
                  <path
                    d="M 10 75 Q 40 65 70 50 T 120 30 T 150 15 L 150 85 L 10 85 Z"
                    fill="url(#areaGradient)"
                  />
                  {/* Line stroke */}
                  <path
                    d="M 10 75 Q 40 65 70 50 T 120 30 T 150 15"
                    stroke="#0284c7"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Active Live Data point */}
                  <circle cx="150" cy="15" r="4" fill="#0284c7" />
                  <circle cx="150" cy="15" r="7" stroke="#38bdf8" strokeWidth="1.5" fill="none" opacity="0.6" />
                </svg>
              </div>
            </div>

            {/* Card 5: Dark Charcoal Card */}
            <div className="curve-card card-pos-5 card-5-dark">
              <div className="card-5-text">
                Expertise <span className="card-5-dot">⦿</span> that Combines Strategy, Data, and Crypto Intelligence
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '10px', color: '#9ca3af' }}>18 Exchanges</span>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#d2ff28' }} />
              </div>
            </div>

            {/* Card 6: Glowing Cyan Glass Card */}
            <div className="curve-card card-pos-6 card-6-glass">
              <div className="card-plus-btn">+</div>
              <div className="card-6-title">AI Price Alerts</div>
              <div className="card-6-sub">Set trigger condition</div>
            </div>

            {/* Card 7: White Metrics 520k+ Trades/sec */}
            <div className="curve-card card-pos-7">
              <div className="card-7-content">
                <div className="card-pills-row">
                  <span className="metric-pill active">Real-Time</span>
                  <span className="metric-pill">12ms</span>
                </div>
                <div style={{ fontSize: '10px', color: '#6b7280', marginTop: '4px' }}>Data Points</div>
                <div className="card-7-number">520k+</div>
                <div className="card-7-subtext">Trades/sec tracked</div>
              </div>
            </div>

            {/* Card 8: Mobile UI Gauge */}
            <div className="curve-card card-pos-8">
              <div className="card-8-content">
                <div className="gauge-circle">
                  <span>49%</span>
                </div>
                <span style={{ fontSize: '10px', fontWeight: 600, color: '#374151' }}>Win Rate Boost</span>
              </div>
            </div>

          </div>
        </div>

        {/* Social Proof Rating */}
        <div className="hero-social-proof">
          <span className="social-proof-text">Rated 4.9/5 by 4,900+ active crypto traders</span>
          <div className="stars-row" aria-label="5 stars rating">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="star-icon" size={14} fill="#facc15" stroke="#facc15" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
