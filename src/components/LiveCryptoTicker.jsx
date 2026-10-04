import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Search, 
  Bell, 
  ArrowUpRight, 
  Zap, 
  Flame, 
  Activity, 
  SlidersHorizontal 
} from 'lucide-react';

const INITIAL_COINS = [
  {
    id: 'bitcoin',
    rank: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    iconColor: '#f7931a',
    category: 'Layer 1',
    price: 94820.50,
    change1h: 0.42,
    change24h: 3.85,
    volume24h: '48.2B',
    marketCap: '1.87T',
    sparkline: [91200, 91800, 92400, 91900, 93100, 93800, 94820.50]
  },
  {
    id: 'ethereum',
    rank: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    iconColor: '#627eea',
    category: 'Layer 1',
    price: 3450.20,
    change1h: -0.15,
    change24h: 5.12,
    volume24h: '24.6B',
    marketCap: '415.8B',
    sparkline: [3280, 3310, 3360, 3340, 3390, 3420, 3450.20]
  },
  {
    id: 'solana',
    rank: 3,
    name: 'Solana',
    symbol: 'SOL',
    iconColor: '#14f195',
    category: 'Layer 1',
    price: 198.75,
    change1h: 1.20,
    change24h: 8.64,
    volume24h: '9.4B',
    marketCap: '94.2B',
    sparkline: [181, 184, 189, 187, 192, 195, 198.75]
  },
  {
    id: 'ripple',
    rank: 4,
    name: 'XRP',
    symbol: 'XRP',
    iconColor: '#23292f',
    category: 'Layer 1',
    price: 2.38,
    change1h: -0.32,
    change24h: -1.45,
    volume24h: '6.8B',
    marketCap: '136.4B',
    sparkline: [2.45, 2.44, 2.42, 2.39, 2.40, 2.37, 2.38]
  },
  {
    id: 'binancecoin',
    rank: 5,
    name: 'BNB',
    symbol: 'BNB',
    iconColor: '#f3ba2f',
    category: 'DeFi',
    price: 642.10,
    change1h: 0.18,
    change24h: 2.30,
    volume24h: '2.1B',
    marketCap: '93.5B',
    sparkline: [625, 628, 632, 630, 635, 639, 642.10]
  },
  {
    id: 'cardano',
    rank: 6,
    name: 'Cardano',
    symbol: 'ADA',
    iconColor: '#0033ad',
    category: 'Layer 1',
    price: 0.84,
    change1h: 0.65,
    change24h: 4.10,
    volume24h: '1.8B',
    marketCap: '29.8B',
    sparkline: [0.79, 0.80, 0.81, 0.82, 0.82, 0.83, 0.84]
  },
  {
    id: 'avalanche',
    rank: 7,
    name: 'Avalanche',
    symbol: 'AVAX',
    iconColor: '#e84142',
    category: 'Layer 1',
    price: 36.80,
    change1h: -0.45,
    change24h: 6.75,
    volume24h: '980M',
    marketCap: '15.1B',
    sparkline: [34.1, 34.5, 35.0, 34.8, 35.6, 36.2, 36.80]
  },
  {
    id: 'near',
    rank: 8,
    name: 'NEAR Protocol',
    symbol: 'NEAR',
    iconColor: '#000000',
    category: 'AI & Big Data',
    price: 7.42,
    change1h: 1.85,
    change24h: 12.40,
    volume24h: '1.2B',
    marketCap: '8.9B',
    sparkline: [6.5, 6.7, 6.8, 7.0, 7.1, 7.25, 7.42]
  },
  {
    id: 'chainlink',
    rank: 9,
    name: 'Chainlink',
    symbol: 'LINK',
    iconColor: '#375bd2',
    category: 'DeFi',
    price: 21.65,
    change1h: 0.55,
    change24h: 4.90,
    volume24h: '840M',
    marketCap: '13.2B',
    sparkline: [20.4, 20.6, 20.9, 21.1, 21.3, 21.5, 21.65]
  },
  {
    id: 'render',
    rank: 10,
    name: 'Render Network',
    symbol: 'RENDER',
    iconColor: '#e51e25',
    category: 'AI & Big Data',
    price: 9.85,
    change1h: 2.10,
    change24h: 14.80,
    volume24h: '760M',
    marketCap: '5.1B',
    sparkline: [8.4, 8.6, 8.9, 9.1, 9.4, 9.6, 9.85]
  }
];

export default function LiveCryptoTicker({ onOpenAlert }) {
  const [coins, setCoins] = useState(INITIAL_COINS);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua Koin');
  const [updatedCoinId, setUpdatedCoinId] = useState(null);
  const [priceDirection, setPriceDirection] = useState('up');

  // Real-time simulated price fluctuations every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Pick random coin to update
      const randomIndex = Math.floor(Math.random() * INITIAL_COINS.length);
      const targetCoin = INITIAL_COINS[randomIndex];
      
      // Calculate realistic delta: ±0.1% to ±0.4%
      const deltaPercent = (Math.random() * 0.6 - 0.28) / 100;
      const isUp = deltaPercent >= 0;

      setCoins((prevCoins) =>
        prevCoins.map((coin, idx) => {
          if (idx !== randomIndex) return coin;
          
          const newPrice = +(coin.price * (1 + deltaPercent)).toFixed(coin.price > 10 ? 2 : 4);
          const newSparkline = [...coin.sparkline.slice(1), newPrice];
          const new24hChange = +(coin.change24h + deltaPercent * 10).toFixed(2);
          
          return {
            ...coin,
            price: newPrice,
            change24h: new24hChange,
            sparkline: newSparkline
          };
        })
      );

      setUpdatedCoinId(targetCoin.id);
      setPriceDirection(isUp ? 'up' : 'down');

      // Clear update pulse after 800ms
      const timeout = setTimeout(() => {
        setUpdatedCoinId(null);
      }, 800);

      return () => clearTimeout(timeout);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const categories = ['Semua Koin', 'Top Gainers', 'Layer 1', 'DeFi', 'AI & Big Data'];

  const filteredCoins = coins.filter((coin) => {
    const matchesSearch = 
      coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeCategory === 'Semua Koin') return matchesSearch;
    if (activeCategory === 'Top Gainers') return matchesSearch && coin.change24h > 5;
    return matchesSearch && coin.category === activeCategory;
  });

  return (
    <section className="crypto-tracker-section" id="live-prices">
      {/* Section Header */}
      <div className="crypto-section-header">
        <div className="about-badge">
          <span className="badge-dot" style={{ backgroundColor: '#10b981' }} />
          <span>MELACAK HARGA REAL-TIME</span>
        </div>
        <h2 className="crypto-tracker-title">
          Streaming Harga Pasar Kripto Tanpa Delay
        </h2>
        <p className="crypto-tracker-sub">
          Feed harga instan dari 18+ bursa global tier-1 dengan latensi sub-detik (12ms). Pantau volatilitas, sinyal AI, dan atur alert otomatis secara langsung.
        </p>
      </div>

      {/* Global Market Overview Strip */}
      <div className="market-overview-grid">
        <div className="overview-metric-card">
          <div className="metric-header">
            <span className="metric-title">Market Cap Global</span>
            <span className="metric-change positive">+3.24%</span>
          </div>
          <div className="metric-val">$3.48 Triliun</div>
          <span className="metric-sub">Kapitalisasi pasar total kripto</span>
        </div>

        <div className="overview-metric-card">
          <div className="metric-header">
            <span className="metric-title">Volume 24 Jam</span>
            <Activity size={16} color="#3b82f6" />
          </div>
          <div className="metric-val">$128.6 Miliar</div>
          <span className="metric-sub">Total transaksi di semua bursa</span>
        </div>

        <div className="overview-metric-card">
          <div className="metric-header">
            <span className="metric-title">Dominasi BTC</span>
            <span className="metric-change positive">56.8%</span>
          </div>
          <div className="metric-val">Bitcoin #1</div>
          <span className="metric-sub">Pangsa pasar Bitcoin saat ini</span>
        </div>

        <div className="overview-metric-card">
          <div className="metric-header">
            <span className="metric-title">Gas Fee ETH</span>
            <Zap size={16} color="#f59e0b" />
          </div>
          <div className="metric-val">12 Gwei</div>
          <span className="metric-sub">Kecepatan transaksi: Sangat Cepat</span>
        </div>
      </div>

      {/* Controls Bar: Search & Category Tabs */}
      <div className="tracker-controls-bar">
        <div className="category-tabs-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'Top Gainers' && <Flame size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />}
              {cat}
            </button>
          ))}
        </div>

        <div className="tracker-search-wrap">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            className="tracker-search-input"
            placeholder="Cari koin (contoh: BTC, Solana)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Real-time Crypto Table */}
      <div className="table-responsive-wrapper">
        <table className="crypto-table">
          <thead>
            <tr>
              <th style={{ width: '48px' }}>#</th>
              <th>Aset Kripto</th>
              <th style={{ textAlign: 'right' }}>Harga Terkini (USD)</th>
              <th style={{ textAlign: 'right' }}>1 Jam</th>
              <th style={{ textAlign: 'right' }}>24 Jam</th>
              <th style={{ textAlign: 'right' }}>Volume 24j</th>
              <th style={{ textAlign: 'right' }}>Market Cap</th>
              <th style={{ textAlign: 'center', width: '130px' }}>Tren 7 Hari</th>
              <th style={{ textAlign: 'center', width: '120px' }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoins.map((coin) => {
              const isUpdated = updatedCoinId === coin.id;
              const is24hPositive = coin.change24h >= 0;
              const is1hPositive = coin.change1h >= 0;

              return (
                <tr 
                  key={coin.id} 
                  className={`crypto-row ${isUpdated ? (priceDirection === 'up' ? 'flash-green' : 'flash-red') : ''}`}
                >
                  <td className="col-rank">{coin.rank}</td>
                  <td className="col-asset">
                    <div className="asset-info">
                      <div 
                        className="asset-icon-circle"
                        style={{ backgroundColor: coin.iconColor }}
                      >
                        {coin.symbol.slice(0, 2)}
                      </div>
                      <div>
                        <div className="asset-name-wrap">
                          <span className="asset-name">{coin.name}</span>
                          <span className="asset-symbol">{coin.symbol}</span>
                        </div>
                        <span className="asset-category-tag">{coin.category}</span>
                      </div>
                    </div>
                  </td>

                  {/* Live Price */}
                  <td className="col-price">
                    <div className="price-val-wrap">
                      <span className="price-usd">
                        ${coin.price.toLocaleString('en-US', { minimumFractionDigits: coin.price > 10 ? 2 : 4 })}
                      </span>
                      {isUpdated && (
                        <span className={`pulse-badge ${priceDirection}`}>
                          {priceDirection === 'up' ? '▲' : '▼'}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* 1h Change */}
                  <td className="col-change">
                    <span className={`percent-tag ${is1hPositive ? 'up' : 'down'}`}>
                      {is1hPositive ? '+' : ''}{coin.change1h}%
                    </span>
                  </td>

                  {/* 24h Change */}
                  <td className="col-change">
                    <span className={`pill-change ${is24hPositive ? 'up' : 'down'}`}>
                      {is24hPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                      {is24hPositive ? '+' : ''}{coin.change24h}%
                    </span>
                  </td>

                  {/* Volume */}
                  <td className="col-vol">${coin.volume24h}</td>

                  {/* Market Cap */}
                  <td className="col-mcap">${coin.marketCap}</td>

                  {/* Sparkline SVG */}
                  <td className="col-chart">
                    <svg className="table-sparkline" viewBox="0 0 100 32" fill="none">
                      <path
                        d={`M 0 ${32 - (coin.sparkline[0] / Math.max(...coin.sparkline)) * 26} 
                            L 16 ${32 - (coin.sparkline[1] / Math.max(...coin.sparkline)) * 26} 
                            L 33 ${32 - (coin.sparkline[2] / Math.max(...coin.sparkline)) * 26} 
                            L 50 ${32 - (coin.sparkline[3] / Math.max(...coin.sparkline)) * 26} 
                            L 66 ${32 - (coin.sparkline[4] / Math.max(...coin.sparkline)) * 26} 
                            L 83 ${32 - (coin.sparkline[5] / Math.max(...coin.sparkline)) * 26} 
                            L 100 ${32 - (coin.sparkline[6] / Math.max(...coin.sparkline)) * 26}`}
                        stroke={is24hPositive ? '#10b981' : '#ef4444'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </td>

                  {/* Actions */}
                  <td className="col-action">
                    <div className="table-action-btns">
                      <button 
                        className="btn-table-alert" 
                        title={`Pasang Alert ${coin.symbol}`}
                        onClick={() => onOpenAlert(coin)}
                      >
                        <Bell size={14} />
                      </button>
                      <button 
                        className="btn-table-track"
                        onClick={() => onOpenAlert(coin)}
                      >
                        <span>Lacak</span>
                        <ArrowUpRight size={12} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Live System Sync Indicator */}
      <div className="table-footer-status">
        <div className="status-live-dot" />
        <span>Terhubung langsung ke WebSocket Engine • Update harga setiap 2.5s • Latensi rata-rata: 12ms</span>
      </div>
    </section>
  );
}
