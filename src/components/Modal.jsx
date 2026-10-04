import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Bell, Send } from 'lucide-react';

export default function Modal({ isOpen, title, data, onClose }) {
  const [alertSubmitted, setAlertSubmitted] = useState(false);
  const [targetValue, setTargetValue] = useState(data ? data.price : '');

  if (!isOpen) return null;

  const handleSetAlert = (e) => {
    e.preventDefault();
    setAlertSubmitted(true);
    setTimeout(() => {
      setAlertSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: '#d2ff28',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#111'
          }}>
            {data ? <Bell size={22} /> : <Sparkles size={22} />}
          </div>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#111827', lineHeight: '1.3' }}>{title}</h3>
            <p style={{ fontSize: '13px', color: '#6b7280' }}>Aeline Sentinel Engine</p>
          </div>
        </div>

        {data ? (
          <div>
            <p style={{ fontSize: '14px', color: '#4b5563', marginBottom: '16px', lineHeight: '1.5' }}>
              Dapatkan notifikasi instan saat harga <strong>{data.name} ({data.symbol})</strong> bergerak melewati batas yang Anda tentukan.
            </p>

            <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '14px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                <span style={{ color: '#6b7280' }}>Harga Terkini:</span>
                <strong style={{ color: '#111827' }}>${data.price.toLocaleString('en-US')}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: '#6b7280' }}>Perubahan 24 Jam:</span>
                <span style={{ color: data.change24h >= 0 ? '#10b981' : '#ef4444', fontWeight: 700 }}>
                  {data.change24h >= 0 ? '+' : ''}{data.change24h}%
                </span>
              </div>
            </div>

            {alertSubmitted ? (
              <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '12px', padding: '14px', textAlign: 'center', color: '#065f46' }}>
                <CheckCircle size={24} style={{ margin: '0 auto 6px', display: 'block' }} />
                <strong style={{ fontSize: '14px' }}>Alert Berhasil Dikonfigurasi!</strong>
                <p style={{ fontSize: '12px', marginTop: '4px' }}>Sistem akan memantau WebSocket bursa secara aktif.</p>
              </div>
            ) : (
              <form onSubmit={handleSetAlert}>
                <div style={{ marginBottom: '14px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                    Kirim Notifikasi Saat Harga (USD):
                  </label>
                  <input
                    type="number"
                    step="any"
                    defaultValue={data.price}
                    required
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #d1d5db',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                    Saluran Notifikasi:
                  </label>
                  <select style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: '1px solid #d1d5db',
                    fontSize: '14px',
                    background: '#fff'
                  }}>
                    <option>Telegram Bot (@AelineAlertBot)</option>
                    <option>Discord Webhook</option>
                    <option>Browser Web Push</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  style={{
                    width: '100%',
                    background: '#d2ff28',
                    color: '#0c0e12',
                    padding: '13px',
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: '14px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <Send size={16} />
                  <span>Aktifkan Real-Time Alert</span>
                </button>
              </form>
            )}
          </div>
        ) : (
          <div>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6', marginBottom: '20px' }}>
              Selamat datang di ekosistem intelijen harga kripto Aeline. Nikmati pembaruan harga sub-detik dengan integrasi WebSocket langsung dari 18+ bursa global.
            </p>

            <div style={{ background: '#f8fafc', borderRadius: '16px', padding: '16px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <CheckCircle size={18} color="#10b981" />
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#1f2937' }}>Streaming WebSocket 12ms</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <CheckCircle size={18} color="#10b981" />
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#1f2937' }}>Deteksi Whale & Anomali Bertenaga AI</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle size={18} color="#10b981" />
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#1f2937' }}>100% Non-Custodial & Read-Only</span>
              </div>
            </div>

            <button 
              style={{
                width: '100%',
                background: '#111827',
                color: '#ffffff',
                padding: '14px',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer'
              }}
              onClick={onClose}
            >
              Tutup & Lanjutkan Menjelajah
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
