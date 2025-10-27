import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Waitlist.css';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <div className="waitlist-page">
      {/* Background Elements */}
      <div className="waitlist-bg">
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
      <nav className="waitlist-nav">
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
      <main className="waitlist-main">
        <div className="content-wrapper">
          <div className="coming-soon-badge">COMING SOON</div>

          <h1 className="main-heading">
            Join the waitlist for<br />
            DevMates early access
          </h1>

          <p className="description">
            Be among the first to experience the future of co-founder matching.<br />
            Get exclusive early access and lifetime discounts.
          </p>

          <form className="email-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="email"
                className="email-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={submitted}
              />
              <button type="submit" className="submit-button" disabled={submitted}>
                {submitted ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </div>
            {submitted && <p className="success-message">✓ You're on the list!</p>}
          </form>

          <div className="social-proof">
            <div className="avatars">
              <div className="avatar" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop)'}}></div>
              <div className="avatar" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop)'}}></div>
              <div className="avatar" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop)'}}></div>
            </div>
            <p className="signup-count"><strong>4,532</strong> founders already signed up</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Waitlist;
