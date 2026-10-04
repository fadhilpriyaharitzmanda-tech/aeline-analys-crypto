import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogoStrip from './components/LogoStrip';
import LiveCryptoTicker from './components/LiveCryptoTicker';
import AboutSection from './components/AboutSection';
import CryptoFeatures from './components/CryptoFeatures';
import LiveAlertSimulator from './components/LiveAlertSimulator';
import CryptoFAQ from './components/CryptoFAQ';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import Modal from './components/Modal';

export default function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    data: null
  });

  const handleOpenModal = (title, data = null) => {
    setModalState({
      isOpen: true,
      title,
      data
    });
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      title: '',
      data: null
    });
  };

  return (
    <main className="page-wrapper">
      {/* 1. Hero Section Container with Rounded Frame & Clouds */}
      <section className="hero-wrapper" aria-label="Hero Showcase">
        {/* Background Clouds Layer */}
        <div className="hero-clouds-bg" aria-hidden="true" />
        <div className="hero-clouds-overlay" aria-hidden="true" />

        {/* Top Navbar */}
        <Navbar onOpenAction={handleOpenModal} />

        {/* Hero Content & 3D Curved Arch */}
        <HeroSection onOpenAction={handleOpenModal} />
      </section>

      {/* 2. Client / Exchange Partner Logo Strip */}
      <LogoStrip />

      {/* 3. Live Real-Time Crypto Price Tracker (CORE FOCUS) */}
      <LiveCryptoTicker onOpenAlert={(coin) => handleOpenModal(`Pasang Alert Real-Time: ${coin.name} (${coin.symbol})`, coin)} />

      {/* 4. About Us & Signature Bento Grid Section */}
      <AboutSection />

      {/* 5. Advanced Crypto Intelligence Features */}
      <CryptoFeatures />

      {/* 6. Interactive Live Alert Simulator Widget */}
      <LiveAlertSimulator />

      {/* 7. Frequently Asked Questions (FAQ) */}
      <CryptoFAQ />

      {/* 8. High-Impact CTA Banner */}
      <CtaBanner onOpenAction={handleOpenModal} />

      {/* 9. Comprehensive Enterprise Footer */}
      <Footer onOpenAction={handleOpenModal} />

      {/* 10. Interactive Modal Dialog */}
      <Modal 
        isOpen={modalState.isOpen}
        title={modalState.title}
        data={modalState.data}
        onClose={handleCloseModal}
      />
    </main>
  );
}
