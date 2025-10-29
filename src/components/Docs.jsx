import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import FAQ from './FAQ';
import GettingStarted from './GettingStarted';
import CookiePolicy from './CookiePolicy';
import RefundPolicy from './RefundPolicy';
import './Docs.css';

const Docs = () => {
  const [activeTab, setActiveTab] = useState('privacy');
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
      // Scroll to top when switching tabs
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 150);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        // Show header at the top
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        setIsHeaderVisible(false);
      } else {
        // Scrolling up - show header
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="docs-page">
      {/* Background Elements */}
      <div className="docs-bg">
        <div className="gradient-green"></div>
        <div className="gradient-pink"></div>
        <div className="noise-texture"></div>
        <div className="stars-bg"></div>
        <div className="ellipse-blur"></div>

        {/* Subtle Color Orbs */}
        <div className="color-orb orb-1"></div>
        <div className="color-orb orb-2"></div>
        <div className="color-orb orb-3"></div>
      </div>

      {/* Navigation */}
      <nav className={`docs-nav ${!isHeaderVisible ? 'hidden' : ''}`}>
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/" className="logo">
              <img src="/logo.png" alt="DevMates Logo" />
            </Link>
          </div>
          <div className="nav-right">
            <Link to="/" className="back-link">← Back to Home</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="docs-main">
        <div className="docs-container">
          <div className="docs-header">
            <h1>Documentation</h1>
            <p>Legal documents and policies for DevMates</p>
          </div>

          <div className="docs-content">
            <div className="docs-tabs">
              <button 
                className={`tab-button ${activeTab === 'getting-started' ? 'active' : ''}`}
                onClick={() => handleTabChange('getting-started')}
              >
                Getting Started
              </button>
              <button 
                className={`tab-button ${activeTab === 'faq' ? 'active' : ''}`}
                onClick={() => handleTabChange('faq')}
              >
                FAQ
              </button>
              <button 
                className={`tab-button ${activeTab === 'privacy' ? 'active' : ''}`}
                onClick={() => handleTabChange('privacy')}
              >
                Privacy Policy
              </button>
              <button 
                className={`tab-button ${activeTab === 'terms' ? 'active' : ''}`}
                onClick={() => handleTabChange('terms')}
              >
                Terms of Service
              </button>
              <button 
                className={`tab-button ${activeTab === 'cookies' ? 'active' : ''}`}
                onClick={() => handleTabChange('cookies')}
              >
                Cookie Policy
              </button>
              <button 
                className={`tab-button ${activeTab === 'refund' ? 'active' : ''}`}
                onClick={() => handleTabChange('refund')}
              >
                Refund Policy
              </button>
            </div>

            <div className={`docs-tab-content ${isAnimating ? 'animating' : ''}`}>
              <div key={activeTab} className="tab-content-wrapper">
                {activeTab === 'getting-started' && <GettingStarted />}
                {activeTab === 'faq' && <FAQ />}
                {activeTab === 'privacy' && <PrivacyPolicy />}
                {activeTab === 'terms' && <TermsOfService />}
                {activeTab === 'cookies' && <CookiePolicy />}
                {activeTab === 'refund' && <RefundPolicy />}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Docs;
