import React, { useState } from 'react';
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
      <nav className="docs-nav">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/" className="logo">
              <img src="/logo.png" alt="DevMates Logo" width="110" height="32" />
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
                onClick={() => setActiveTab('getting-started')}
              >
                Getting Started
              </button>
              <button 
                className={`tab-button ${activeTab === 'faq' ? 'active' : ''}`}
                onClick={() => setActiveTab('faq')}
              >
                FAQ
              </button>
              <button 
                className={`tab-button ${activeTab === 'privacy' ? 'active' : ''}`}
                onClick={() => setActiveTab('privacy')}
              >
                Privacy Policy
              </button>
              <button 
                className={`tab-button ${activeTab === 'terms' ? 'active' : ''}`}
                onClick={() => setActiveTab('terms')}
              >
                Terms of Service
              </button>
              <button 
                className={`tab-button ${activeTab === 'cookies' ? 'active' : ''}`}
                onClick={() => setActiveTab('cookies')}
              >
                Cookie Policy
              </button>
              <button 
                className={`tab-button ${activeTab === 'refund' ? 'active' : ''}`}
                onClick={() => setActiveTab('refund')}
              >
                Refund Policy
              </button>
            </div>

            <div className="docs-tab-content">
              {activeTab === 'getting-started' && <GettingStarted />}
              {activeTab === 'faq' && <FAQ />}
              {activeTab === 'privacy' && <PrivacyPolicy />}
              {activeTab === 'terms' && <TermsOfService />}
              {activeTab === 'cookies' && <CookiePolicy />}
              {activeTab === 'refund' && <RefundPolicy />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Docs;
