import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function CryptoFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Dari mana sumber data harga mata uang kripto yang ditampilkan di Aeline?',
      a: 'Kami mengumpulkan data harga secara langsung melalui koneksi WebSocket berlatensi rendah ke 18+ bursa kripto tier-1 global (Binance, Coinbase, Kraken, OKX, Bybit) serta liquidity pool terdesentralisasi (Uniswap v3, Raydium, Aerodrome). Algoritma agregasi harga kami menghitung volume-weighted average price (VWAP) untuk mencegah fluktuasi palsu.'
    },
    {
      q: 'Apakah saya perlu menghubungkan private key atau saldo dompet saya?',
      a: 'Tidak sama sekali! Keamanan pengguna adalah prioritas mutlak. Aeline beroperasi dengan sistem non-custodial dan read-only. Anda hanya perlu memasukkan alamat publik dompet (public key) untuk melacak portofolio lintas rantai. Kami tidak pernah meminta private key, seed phrase, atau hak akses transaksi apa pun.'
    },
    {
      q: 'Seberapa cepat pembaruan data harga real-time (latensi)?',
      a: 'Sistem infrastruktur kami didukung oleh node server global di 20+ region dengan rata-rata latensi round-trip hanya 12 milidetik. Data harga di-stream secara kontinu tanpa perlu me-refresh halaman web, sehingga Anda mendapatkan harga pasar paling mutakhir saat volatilitas tinggi terjadi.'
    },
    {
      q: 'Bagaimana cara mengatur notifikasi alert harga ke Telegram atau Discord?',
      a: 'Cukup klik ikon lonceng (Alert) pada koin pilihan Anda di tabel live ticker. Tentukan target harga atau persentase kenaikan yang diinginkan, lalu hubungkan bot Telegram Aeline atau masukkan webhook Discord. Saat target harga tercapai di bursa, notifikasi otomatis terkirim dalam hitungan milidetik.'
    },
    {
      q: 'Apakah layanan pelacak harga Aeline Crypto tersedia secara gratis?',
      a: 'Ya! Fitur pelacakan harga real-time, filter kategori, grafik tren 7 hari, dan hingga 5 alert aktif per akun dapat dinikmati 100% gratis. Untuk trader profesional dan pengembang yang membutuhkan akses WebSocket API institusional serta AI Whale Scanner, kami menyediakan paket berlangganan Pro.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="crypto-faq-section" id="faq">
      <div className="crypto-section-header">
        <div className="about-badge">
          <HelpCircle size={14} style={{ marginRight: '6px' }} />
          <span>PERTANYAAN UMUM</span>
        </div>
        <h2 className="crypto-tracker-title">
          Segala Hal Tentang Pelacak Harga Aeline
        </h2>
        <p className="crypto-tracker-sub">
          Jawaban lengkap seputar teknologi streaming harga, keandalan data, keamanan dompet, dan konfigurasi alert otomatis.
        </p>
      </div>

      <div className="faq-accordion-container">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx} 
              className={`faq-item-card ${isOpen ? 'open' : ''}`}
              onClick={() => toggleFaq(idx)}
            >
              <div className="faq-question-row">
                <h3 className="faq-question-text">{faq.q}</h3>
                <div className="faq-toggle-icon">
                  <ChevronDown 
                    size={20} 
                    style={{ 
                      transform: isOpen ? 'rotate(180deg)' : 'none', 
                      transition: 'transform 0.25s ease' 
                    }} 
                  />
                </div>
              </div>

              {isOpen && (
                <div className="faq-answer-body">
                  <p className="faq-answer-text">{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
