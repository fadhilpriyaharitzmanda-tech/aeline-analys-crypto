import React, { useState } from 'react';
import { Bell, CheckCircle2, Send, Zap, Shield, Sparkles } from 'lucide-react';

export default function LiveAlertSimulator() {
  const [selectedCoin, setSelectedCoin] = useState('BTC');
  const [targetCondition, setTargetCondition] = useState('above');
  const [targetPrice, setTargetPrice] = useState('95,000');
  const [channel, setChannel] = useState('telegram');
  const [isAlertActive, setIsAlertActive] = useState(false);
  const [simulatedNotification, setSimulatedNotification] = useState(null);

  const coinPresets = {
    BTC: { name: 'Bitcoin', current: '$94,820.50', defaultTarget: '95,500' },
    ETH: { name: 'Ethereum', current: '$3,450.20', defaultTarget: '3,550' },
    SOL: { name: 'Solana', current: '$198.75', defaultTarget: '210' }
  };

  const handleCoinChange = (coin) => {
    setSelectedCoin(coin);
    setTargetPrice(coinPresets[coin].defaultTarget);
    setSimulatedNotification(null);
  };

  const handleTriggerTest = () => {
    setIsAlertActive(true);
    setSimulatedNotification({
      coin: selectedCoin,
      price: targetPrice,
      condition: targetCondition === 'above' ? 'menembus ke atas' : 'turun di bawah',
      channel: channel.toUpperCase(),
      timestamp: new Date().toLocaleTimeString('id-ID')
    });
  };

  return (
    <section className="alert-simulator-section" id="simulator">
      <div className="simulator-card-container">
        
        {/* Left Side: Setup Controls */}
        <div className="simulator-controls-col">
          <div className="about-badge" style={{ marginBottom: '16px' }}>
            <span className="badge-dot" style={{ backgroundColor: '#f59e0b' }} />
            <span>SIMULASI ALERT INTERAKTIF</span>
          </div>

          <h3 className="simulator-title">
            Pasang Notifikasi Real-Time dalam 3 Langkah
          </h3>
          <p className="simulator-desc">
            Coba langsung sistem pemantauan harga otomatis Aeline. Pilih koin, tentukan batas harga target, dan lihat bagaimana notifikasi terkirim seketika saat pasar bergerak.
          </p>

          {/* Step 1: Select Crypto */}
          <div className="sim-control-group">
            <label className="sim-label">1. Pilih Aset Kripto</label>
            <div className="sim-pill-selector">
              {Object.keys(coinPresets).map((coin) => (
                <button
                  key={coin}
                  type="button"
                  className={`sim-select-btn ${selectedCoin === coin ? 'active' : ''}`}
                  onClick={() => handleCoinChange(coin)}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <img 
                    src={`/images/coins/${coin.toLowerCase()}.png`} 
                    alt={coin} 
                    style={{ width: '20px', height: '20px', borderRadius: '50%', objectFit: 'contain' }} 
                  />
                  <span className="sim-btn-coin">{coin}</span>
                  <span className="sim-btn-price">{coinPresets[coin].current}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Set Condition & Price */}
          <div className="sim-control-group">
            <label className="sim-label">2. Kondisi & Target Harga (USD)</label>
            <div className="sim-input-row">
              <select 
                className="sim-select-input"
                value={targetCondition}
                onChange={(e) => setTargetCondition(e.target.value)}
              >
                <option value="above">Harga Naik &gt;=</option>
                <option value="below">Harga Turun &lt;=</option>
              </select>

              <div className="sim-price-input-wrap">
                <span className="sim-currency-prefix">$</span>
                <input
                  type="text"
                  className="sim-price-input"
                  value={targetPrice}
                  onChange={(e) => setTargetPrice(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Step 3: Choose Notification Channel */}
          <div className="sim-control-group">
            <label className="sim-label">3. Saluran Pengiriman Alert</label>
            <div className="sim-channel-row">
              {[
                { id: 'telegram', label: 'Telegram Bot' },
                { id: 'discord', label: 'Discord Webhook' },
                { id: 'push', label: 'Browser Push' }
              ].map((ch) => (
                <button
                  key={ch.id}
                  type="button"
                  className={`sim-channel-btn ${channel === ch.id ? 'active' : ''}`}
                  onClick={() => setChannel(ch.id)}
                >
                  {ch.label}
                </button>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <button 
            type="button" 
            className="btn-trigger-simulation"
            onClick={handleTriggerTest}
          >
            <Zap size={16} />
            <span>Simulasikan Kirim Alert Real-Time</span>
          </button>
        </div>

        {/* Right Side: Live Notification Preview Display */}
        <div className="simulator-preview-col">
          <div className="phone-preview-mockup">
            <div className="phone-screen-header">
              <span className="phone-time">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              <div className="phone-signals">
                <span style={{ fontSize: '10px' }}>5G</span>
                <div style={{ width: '16px', height: '8px', border: '1px solid #111', borderRadius: '2px', position: 'relative' }}>
                  <div style={{ width: '80%', height: '100%', background: '#10b981' }} />
                </div>
              </div>
            </div>

            <div className="phone-content-body">
              <div className="phone-app-badge">
                <Sparkles size={14} color="#d2ff28" />
                <span>AELINE SENTINEL ENGINE</span>
              </div>

              {simulatedNotification ? (
                <div className="incoming-alert-bubble animation-bounce">
                  <div className="bubble-top-row">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div className="bubble-icon-dot" />
                      <span className="bubble-app-name">Aeline Price Alert</span>
                    </div>
                    <span className="bubble-time">{simulatedNotification.timestamp}</span>
                  </div>

                  <h4 className="bubble-title">
                    🚨 Sinyal Target {simulatedNotification.coin} Tercapai!
                  </h4>
                  <p className="bubble-body">
                    {coinPresets[simulatedNotification.coin].name} telah {simulatedNotification.condition} <strong>${simulatedNotification.price} USD</strong>. Volume beli melonjak +34% dalam 5 menit terakhir.
                  </p>

                  <div className="bubble-meta-strip">
                    <span>Channel: {simulatedNotification.channel}</span>
                    <span style={{ color: '#10b981', fontWeight: 700 }}>Latency: 9ms</span>
                  </div>
                </div>
              ) : (
                <div className="phone-empty-state">
                  <div className="empty-bell-circle">
                    <Bell size={24} color="#9ca3af" />
                  </div>
                  <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '12px', fontWeight: 500 }}>
                    Klik tombol <strong>"Simulasikan Kirim Alert"</strong> di sebelah kiri untuk melihat notifikasi real-time muncul di layar ini.
                  </p>
                </div>
              )}

              {/* Live Ticker Mini Card inside Phone */}
              <div className="phone-ticker-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '11px', color: '#6b7280', fontWeight: 600 }}>Status Sentinel</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#111827' }}>Memonitor 18 Bursa</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '10px', color: '#6b7280' }}>Data Stream</span>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#0284c7' }}>100% Aktif</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
