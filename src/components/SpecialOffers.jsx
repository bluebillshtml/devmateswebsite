import React from 'react';
import { Link } from 'react-router-dom';
import './SpecialOffers.css';

const SpecialOffers = () => {
  return (
    <div className="special-offers-page">
      {/* Background Elements */}
      <div className="offers-bg">
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
      <nav className="offers-nav">
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

      {/* Content */}
      <div className="offers-container">
        {/* Hero Section */}
        <div className="offers-hero">
          <div className="badge-container">
            <span className="offers-badge">Limited Time Offer</span>
          </div>
          <h1>Early users get lifetime savings</h1>
          <p className="hero-subtitle">
            Join DevMates today and lock in exclusive pricing forever. Plus, get early access to premium features before anyone else.
          </p>
        </div>

        {/* Lifetime Discount Explanation */}
        <section className="content-section">
          <h2>What's the lifetime discount?</h2>
          <p className="section-intro">
            As an early supporter of DevMates, you'll receive a special discount that stays with your account forever. This means you'll pay less than future users—for life.
          </p>

          <div className="comparison-container">
            <div className="comparison-box early-user-box">
              <div className="box-header">
                <h3>Early Users</h3>
                <span className="discount-label">40% OFF</span>
              </div>
              <div className="pricing-info">
                <div className="price-row">
                  <span className="old-price">$49</span>
                  <span className="new-price">$29<span className="period">/mo</span></span>
                </div>
                <p className="price-subtext">Locked in forever</p>
              </div>
              <ul className="benefits-list">
                <li>All Pro features included</li>
                <li>Never pay full price</li>
                <li>Discount applies to upgrades</li>
                <li>Grandfathered pricing</li>
              </ul>
            </div>

            <div className="comparison-box future-user-box">
              <div className="box-header">
                <h3>Future Users</h3>
                <span className="standard-label">Standard Pricing</span>
              </div>
              <div className="pricing-info">
                <div className="price-row">
                  <span className="future-price">$49<span className="period">/mo</span></span>
                </div>
                <p className="price-subtext">Subject to price increases</p>
              </div>
              <ul className="benefits-list muted">
                <li>All Pro features included</li>
                <li>Pay standard rates</li>
                <li>No special discounts</li>
                <li>Market pricing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section className="content-section">
          <h2>Choose your plan</h2>
          <p className="section-intro">
            Both paid plans include the lifetime discount for early users. Pick the one that fits your needs.
          </p>

          <div className="plans-container">
            {/* Pro Plan */}
            <div className="plan-box">
              <div className="plan-header">
                <div className="plan-badge pro-badge">
                  <span className="badge-icon">◆</span>
                  <span>Pro</span>
                </div>
                <h3>For growing teams</h3>
              </div>

              <div className="plan-pricing">
                <div className="price-breakdown">
                  <div className="price-line">
                    <span className="label">Regular price:</span>
                    <span className="strikethrough">$49/month</span>
                  </div>
                  <div className="price-line featured">
                    <span className="label">Early user price:</span>
                    <span className="featured-price">$29/month</span>
                  </div>
                </div>
                <p className="savings-text">Save $240/year forever</p>
              </div>

              <div className="plan-features">
                <h4>Everything in Pro:</h4>
                <ul>
                  <li>Unlimited matches</li>
                  <li>Verified skill badges</li>
                  <li>Advanced filters</li>
                  <li>Direct messaging</li>
                  <li>Priority profile visibility</li>
                  <li>Team collaboration tools</li>
                </ul>
              </div>

              <button className="plan-button" onClick={() => window.location.href = '/waitlist?plan=pro'}>Get Pro Access</button>
            </div>

            {/* Enterprise Plan */}
            <div className="plan-box featured-plan">
              <div className="popular-badge">Most Popular</div>
              <div className="plan-header">
                <div className="plan-badge enterprise-badge">
                  <span className="badge-icon">◆</span>
                  <span>Enterprise</span>
                </div>
                <h3>For established startups</h3>
              </div>

              <div className="plan-pricing">
                <div className="price-breakdown">
                  <div className="price-line">
                    <span className="label">Regular price:</span>
                    <span className="strikethrough">$199/month</span>
                  </div>
                  <div className="price-line featured">
                    <span className="label">Early user price:</span>
                    <span className="featured-price">$119/month</span>
                  </div>
                </div>
                <p className="savings-text">Save $960/year forever</p>
              </div>

              <div className="plan-features">
                <h4>Everything in Pro, plus:</h4>
                <ul>
                  <li>Dedicated account manager</li>
                  <li>Custom integrations</li>
                  <li>API access</li>
                  <li>Advanced analytics dashboard</li>
                  <li>White-label options</li>
                  <li>SSO & security features</li>
                  <li>24/7 priority support</li>
                </ul>
              </div>

              <button className="plan-button featured-button" onClick={() => window.location.href = '/waitlist?plan=enterprise'}>Get Enterprise Access</button>
            </div>
          </div>
        </section>

        {/* Early Access Perks */}
        <section className="content-section">
          <h2>Early access perks</h2>
          <p className="section-intro">
            Premium sign-ups don't just save money—you'll be first in line for everything new.
          </p>

          <div className="perks-container">
            <div className="perk-item">
              <div className="perk-number">01</div>
              <h3>Beta Features First</h3>
              <p>Get exclusive access to new features 2-4 weeks before general release. Shape the product with your feedback.</p>
            </div>

            <div className="perk-item">
              <div className="perk-number">02</div>
              <h3>Founding Member Badge</h3>
              <p>Stand out with a special "Founding Member" badge on your profile, showing you're an early supporter.</p>
            </div>

            <div className="perk-item">
              <div className="perk-number">03</div>
              <h3>Priority Support Queue</h3>
              <p>Jump to the front of the support line. Get responses within 2 hours, not 24.</p>
            </div>

            <div className="perk-item">
              <div className="perk-number">04</div>
              <h3>Product Roadmap Input</h3>
              <p>Vote on upcoming features and help shape the future of DevMates through exclusive surveys.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="cta-section">
          <h2>Lock in your lifetime discount today</h2>
          <p>Join hundreds of founders who are building their dream teams with DevMates</p>
          <div className="cta-buttons-group">
            <button className="cta-button primary">Start with Pro</button>
            <button className="cta-button secondary">Get Enterprise</button>
          </div>
          <p className="guarantee-text">30-day money-back guarantee • Cancel anytime</p>
        </section>
      </div>
    </div>
  );
};

export default SpecialOffers;
