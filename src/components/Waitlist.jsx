import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { waitlistService } from '../supabase';
import './Waitlist.css';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('free');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [waitlistStats, setWaitlistStats] = useState({ totalSignups: 0, planStats: {} });

  // Get plan from URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get('plan');
    if (plan && ['free', 'pro', 'premium', 'enterprise'].includes(plan)) {
      setSelectedPlan(plan);
    }
  }, []);

  // Load waitlist statistics
  useEffect(() => {
    const loadStats = async () => {
      try {
        const stats = await waitlistService.getWaitlistStats();
        if (stats.success) {
          setWaitlistStats({
            totalSignups: stats.totalSignups,
            planStats: stats.planStats
          });
        }
      } catch (error) {
        console.error('Failed to load waitlist stats:', error);
      }
    };

    loadStats();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      // Check if email already exists
      const emailCheck = await waitlistService.checkEmailExists(email);
      
      if (emailCheck.exists) {
        setError('This email is already on our waitlist!');
        setLoading(false);
        return;
      }

      // Collect additional data
      const additionalData = {
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        utmSource: new URLSearchParams(window.location.search).get('utm_source'),
        utmMedium: new URLSearchParams(window.location.search).get('utm_medium'),
        utmCampaign: new URLSearchParams(window.location.search).get('utm_campaign'),
        utmTerm: new URLSearchParams(window.location.search).get('utm_term'),
        utmContent: new URLSearchParams(window.location.search).get('utm_content'),
      };

      // Add to waitlist
      const result = await waitlistService.addToWaitlist(email, selectedPlan, additionalData);

      if (result.success) {
        setSubmitted(true);
        setSuccessMessage('✓ You\'re on the list! We\'ll notify you when we launch.');
        
        // Update stats
        setWaitlistStats(prev => ({
          ...prev,
          totalSignups: prev.totalSignups + 1,
          planStats: {
            ...prev.planStats,
            [selectedPlan]: (prev.planStats[selectedPlan] || 0) + 1
          }
        }));

        // Reset form after delay
        setTimeout(() => {
          setSubmitted(false);
          setEmail('');
          setSuccessMessage('');
        }, 5000);
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Waitlist submission error:', error);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
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
            <div className="plan-selection">
              <label className="plan-label">Choose your plan:</label>
              <div className="plan-options">
                <label className={`plan-option ${selectedPlan === 'free' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="plan"
                    value="free"
                    checked={selectedPlan === 'free'}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                  />
                  <span className="plan-name">Free</span>
                  <span className="plan-price">$0</span>
                </label>
                <label className={`plan-option ${selectedPlan === 'pro' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="plan"
                    value="pro"
                    checked={selectedPlan === 'pro'}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                  />
                  <span className="plan-name">Pro</span>
                  <span className="plan-price">$20</span>
                </label>
                <label className={`plan-option ${selectedPlan === 'premium' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="plan"
                    value="premium"
                    checked={selectedPlan === 'premium'}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                  />
                  <span className="plan-name">Premium</span>
                  <span className="plan-price">$35</span>
                </label>
              </div>
            </div>
            
            <div className="input-wrapper">
              <input
                type="email"
                className="email-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading || submitted}
              />
              <button type="submit" className="submit-button" disabled={loading || submitted}>
                {loading ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="spinner">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="31.416" strokeDashoffset="31.416">
                      <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416" repeatCount="indefinite"/>
                      <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416" repeatCount="indefinite"/>
                    </circle>
                  </svg>
                ) : submitted ? (
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
            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
          </form>

          <div className="social-proof">
            <div className="avatars">
              <div className="avatar" style={{backgroundImage: 'url(https://randomuser.me/api/portraits/men/32.jpg)'}}></div>
              <div className="avatar" style={{backgroundImage: 'url(https://randomuser.me/api/portraits/women/44.jpg)'}}></div>
              <div className="avatar" style={{backgroundImage: 'url(https://randomuser.me/api/portraits/men/68.jpg)'}}></div>
            </div>
            <p className="signup-count">
              <strong>{waitlistStats.totalSignups || 85}</strong> founders already signed up.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Waitlist;
