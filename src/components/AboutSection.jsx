import React from 'react';
import { Globe, Lightbulb } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="about-section" id="about" aria-label="Tentang Aeline Crypto">
      {/* Subheading Pill */}
      <div className="about-badge">
        <span className="badge-dot" />
        <span>ABOUT US</span>
      </div>

      {/* Main Heading with Inline Badges */}
      <h2 className="about-headline">
        A global consulting partner<br />
        dedicated to building{' '}
        <span className="inline-badge inline-badge-blue" title="Smart Crypto Ecosystem">
          <Globe size={20} strokeWidth={2.2} />
        </span>{' '}
        smarter<br />
        and{' '}
        <span className="inline-badge inline-badge-lime" title="Adaptive Intelligence">
          <Lightbulb size={20} strokeWidth={2.5} />
        </span>{' '}
        <span className="headline-muted">more adaptive</span>
      </h2>

      {/* Bento Grid */}
      <div className="bento-grid">
        
        {/* Bento Card 1: 120+ Collaborating */}
        <div className="bento-card-1">
          {/* Header */}
          <div className="bento-1-header">
            <span className="bento-1-logo">IPSUM</span>
            <div className="bento-sound-btn" title="Live WebSocket stream">
              <div className="soundwave-bars">
                <span className="sound-bar" style={{ height: '8px' }} />
                <span className="sound-bar" style={{ height: '14px' }} />
                <span className="sound-bar" style={{ height: '10px' }} />
              </div>
            </div>
          </div>

          {/* Man Portrait in Blue Sky */}
          <div className="bento-1-photo-wrap">
            <img 
              src="/images/man_blue_sky.jpg" 
              alt="Crypto Intelligence Leader" 
              className="bento-1-photo"
              loading="lazy"
            />
          </div>

          {/* Bottom Floating Overlay Card */}
          <div className="bento-1-overlay-card">
            <div className="bento-stat-big">120+</div>
            <p className="bento-desc-text">
              Bursa kripto dan protokol likuiditas DeFi terintegrasi secara langsung.
            </p>
          </div>
        </div>

        {/* Bento Card 2: 100% Commitment & Testimonial */}
        <div className="bento-card-2">
          <div>
            <div className="bento-label-top">Commitment to measurable</div>
            <div className="bento-stat-100">100%</div>
          </div>

          <div className="bento-2-bottom">
            {/* Overlapping Client Avatars */}
            <div className="avatar-group" aria-label="Trader Avatars">
              {/* Avatar 1 */}
              <div className="avatar-item">
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url(/images/avatar_team_members.jpg)',
                  backgroundPosition: '10% 10%',
                  backgroundSize: '210%'
                }} />
              </div>
              {/* Avatar 2 */}
              <div className="avatar-item">
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url(/images/avatar_team_members.jpg)',
                  backgroundPosition: '90% 10%',
                  backgroundSize: '210%'
                }} />
              </div>
              {/* Avatar 3 */}
              <div className="avatar-item">
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url(/images/avatar_team_members.jpg)',
                  backgroundPosition: '10% 90%',
                  backgroundSize: '210%'
                }} />
              </div>
              {/* Avatar 4 */}
              <div className="avatar-item">
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url(/images/avatar_team_members.jpg)',
                  backgroundPosition: '90% 90%',
                  backgroundSize: '210%'
                }} />
              </div>
            </div>

            {/* Testimonial Quote */}
            <p className="testimonial-quote">
              “Their real-time crypto price tracking completely reshaped how we work. It's efficient, intelligent, and seamless.”
            </p>
          </div>
        </div>

        {/* Bento Column 3: Stacked Card 3 & Card 4 */}
        <div className="bento-col-3">
          
          {/* Bento Card 3: Neon Lime 520k+ */}
          <div className="bento-card-3">
            <div>
              <div className="bento-lime-label">Data Points</div>
              <div className="bento-lime-number">520k+</div>
            </div>
            <p className="bento-lime-desc">
              Titik data harga dan transaksi dianalisis per detik untuk strategi trading cerdas.
            </p>
          </div>

          {/* Bento Card 4: Dark Charcoal Continents 20+ */}
          <div className="bento-card-4">
            <span className="bento-4-label">Continents</span>
            <span className="bento-4-number">20+</span>
          </div>

        </div>

      </div>
    </section>
  );
}
