import React from 'react';
import { 
  Globe, 
  ShieldCheck
} from 'lucide-react';

export default function Footer({ onOpenAction }) {
  return (
    <footer className="site-footer" id="footer" aria-label="Aeline Site Footer">
      <div className="footer-top-container">
        
        {/* Brand & System Status Column */}
        <div className="footer-brand-col">
          <div className="footer-brand-row">
            <div className="footer-logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 19.5H8.5L12 12.5L15.5 19.5H21L12 2Z" fill="#ffffff" />
                <path d="M12 12.5L8.5 19.5H15.5L12 12.5Z" fill="#d2ff28" />
              </svg>
            </div>
            <span className="footer-brand-title">Aeline</span>
          </div>

          <p className="footer-brand-bio">
            Infrastruktur intelijen dan pelacak harga mata uang kripto real-time bertenaga AI. Memberikan akses streaming data sub-detik dari 18+ bursa global ke trader di seluruh dunia.
          </p>

          {/* Live System Operational Badge */}
          <div className="footer-system-badge" title="Status node dan WebSocket server">
            <span className="system-dot-live" />
            <span className="system-status-text">Semua Sistem Beroperasi Normal (12ms)</span>
          </div>

          {/* Social Links */}
          <div className="footer-socials-row">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="X (Twitter)">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://t.me" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Telegram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Discord">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="GitHub">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Links Navigation Grid */}
        <div className="footer-links-grid">
          
          {/* Column 1: Produk */}
          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Produk & Pelacak</h4>
            <ul className="footer-link-list">
              <li><a href="#live-prices" className="footer-link">Live Crypto Ticker</a></li>
              <li><a href="#features" className="footer-link">AI Whale Scanner</a></li>
              <li><a href="#simulator" className="footer-link">Simulasi Alert Harga</a></li>
              <li><a href="#features" className="footer-link">Multi-Chain Portfolio</a></li>
              <li><a href="#live-prices" className="footer-link">Pelacak Gas Fee ETH</a></li>
              <li>
                <a href="#mobile" className="footer-link" onClick={(e) => { e.preventDefault(); onOpenAction('Aeline Mobile App'); }}>
                  Aplikasi Mobile (iOS/Android)
                  <span className="footer-mini-badge">New</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Pasar */}
          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Pasar Kripto</h4>
            <ul className="footer-link-list">
              <li><a href="#live-prices" className="footer-link">Harga Bitcoin (BTC)</a></li>
              <li><a href="#live-prices" className="footer-link">Harga Ethereum (ETH)</a></li>
              <li><a href="#live-prices" className="footer-link">Ekosistem Solana (SOL)</a></li>
              <li><a href="#live-prices" className="footer-link">Top Gainers 24 Jam</a></li>
              <li><a href="#live-prices" className="footer-link">Fear & Greed Index</a></li>
              <li><a href="#live-prices" className="footer-link">Heatmap Likuiditas</a></li>
            </ul>
          </div>

          {/* Column 3: Developer */}
          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Developer & API</h4>
            <ul className="footer-link-list">
              <li>
                <a href="#api" className="footer-link" onClick={(e) => { e.preventDefault(); onOpenAction('Dokumentasi WebSocket API'); }}>
                  WebSocket API Docs
                </a>
              </li>
              <li><a href="#api" className="footer-link" onClick={(e) => { e.preventDefault(); onOpenAction('REST API Endpoints'); }}>REST Endpoints</a></li>
              <li><a href="#api" className="footer-link" onClick={(e) => { e.preventDefault(); onOpenAction('Python & Node.js SDK'); }}>SDK Python & Node.js</a></li>
              <li><a href="#api" className="footer-link" onClick={(e) => { e.preventDefault(); onOpenAction('Postman Collection'); }}>Postman Collection</a></li>
              <li><a href="#api" className="footer-link" onClick={(e) => { e.preventDefault(); onOpenAction('Server Uptime Status'); }}>Status Uptime Server</a></li>
            </ul>
          </div>

          {/* Column 4: Perusahaan & Legal */}
          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Perusahaan</h4>
            <ul className="footer-link-list">
              <li><a href="#about" className="footer-link">Tentang Aeline</a></li>
              <li>
                <a href="#careers" className="footer-link" onClick={(e) => { e.preventDefault(); onOpenAction('Karir di Aeline'); }}>
                  Karir <span className="footer-hiring-badge">We're hiring</span>
                </a>
              </li>
              <li><a href="#faq" className="footer-link">Pertanyaan Umum (FAQ)</a></li>
              <li><a href="#privacy" className="footer-link" onClick={(e) => { e.preventDefault(); onOpenAction('Kebijakan Privasi'); }}>Kebijakan Privasi</a></li>
              <li><a href="#terms" className="footer-link" onClick={(e) => { e.preventDefault(); onOpenAction('Syarat & Ketentuan'); }}>Syarat & Ketentuan</a></li>
              <li><a href="#security" className="footer-link" onClick={(e) => { e.preventDefault(); onOpenAction('Laporan Audit Keamanan'); }}>Audit Keamanan</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Financial Risk Disclaimer Box */}
      <div className="footer-disclaimer-box">
        <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
          <ShieldCheck size={16} color="#9ca3af" style={{ flexShrink: 0, marginTop: '2px' }} />
          <p className="disclaimer-text">
            <strong>Penafian Risiko Kripto:</strong> Perdagangan aset dan mata uang kripto memiliki tingkat volatilitas pasar yang sangat tinggi dan dapat mengakibatkan kerugian modal. Data harga real-time, grafik, dan sinyal algoritma AI yang disajikan di platform Aeline ditujukan semata-mata untuk keperluan analitis dan edukasi, serta bukan merupakan anjuran keuangan, rekomendasi investasi, atau ajakan untuk memperjualbelikan aset keuangan apa pun. Harap lakukan riset mandiri (DYOR) sebelum mengambil keputusan trading.
          </p>
        </div>
      </div>

      {/* Bottom Copyright & Currency Strip */}
      <div className="footer-bottom-strip">
        <div className="footer-copyright">
          © {new Date().getFullYear()} Aeline Technologies Inc. Hak Cipta Dilindungi Undang-Undang.
        </div>

        <div className="footer-locale-selectors">
          <div className="locale-pill">
            <Globe size={13} />
            <span>Bahasa Indonesia (ID)</span>
          </div>
          <div className="locale-pill">
            <span>Mata Uang: <strong>USD ($)</strong></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
