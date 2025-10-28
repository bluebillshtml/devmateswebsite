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
                <span className="discount-label">20% OFF</span>
              </div>
              <div className="pricing-info">
                <div className="price-row">
                  <span className="old-price">$20</span>
                  <span className="new-price">$16<span className="period">/mo</span></span>
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
                  <span className="future-price">$20<span className="period">/mo</span></span>
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

        {/* Pricing Section */}
        <section className="pricing-section" id="pricing">
          <div className="pricing-bg">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/359475067136313faab3161b0d924bbc1eb6fda9?width=2850" alt="Stars" className="pricing-stars" />
            {/* Color Orbs */}
            <div className="pricing-orb pricing-orb-green"></div>
            <div className="pricing-orb pricing-orb-purple"></div>
            <div className="pricing-orb pricing-orb-blue"></div>
          </div>
          <div className="pricing-header">
            <h2>Find your perfect co-founder.</h2>
            <p>These are our planned launch tiers — join the waitlist now to lock in early-bird discounts.</p>
            <p className="pricing-fine-print">Early users get a lifetime discount on all paid plans!</p>
          </div>
          <div className="pricing-cards">
            {/* Free Plan */}
            <div className="pricing-card hobby-card">
              <div className="plan-badge hobby-badge">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <circle cx="10.5" cy="10.5" r="10" fill="url(#hobby-gradient)" stroke="url(#hobby-stroke)"/>
                  <path d="M10.5621 4.75425C10.414 4.83504 10.284 4.91616 10.173 4.99164C10.062 4.91616 9.93203 4.83504 9.78392 4.75425C9.252 4.46412 8.47601 4.17285 7.50635 4.17285C6.49414 4.17285 5.483 4.57857 4.72832 5.38356C3.97045 6.19195 3.50635 7.36347 3.50635 8.83952C3.50635 11.0694 5.0882 12.9077 6.56093 14.1243C7.31525 14.7475 8.08426 15.2438 8.70082 15.5864C9.00896 15.7575 9.28551 15.8939 9.50903 15.9897C9.62014 16.0373 9.72564 16.0782 9.81998 16.1084C9.89192 16.1314 10.0291 16.1729 10.173 16.1729C10.3169 16.1729 10.4541 16.1314 10.526 16.1084C10.6204 16.0782 10.7259 16.0373 10.837 15.9897C11.0605 15.8939 11.3371 15.7575 11.6452 15.5864C12.2618 15.2438 13.0308 14.7475 13.7851 14.1243C15.2578 12.9077 16.8397 11.0694 16.8397 8.83952C16.8397 7.36347 16.3756 6.19195 15.6177 5.38356C14.863 4.57857 13.8519 4.17285 12.8397 4.17285C11.87 4.17285 11.094 4.46412 10.5621 4.75425Z" fill="white"/>
                  <defs>
                    <linearGradient id="hobby-gradient" x1="10.3565" y1="0.165924" x2="10.0075" y2="20.1629">
                      <stop stopColor="#10834B"/>
                      <stop offset="1" stopColor="#09F785"/>
                    </linearGradient>
                    <radialGradient id="hobby-stroke">
                      <stop stopColor="white" stopOpacity="0.48"/>
                      <stop offset="1" stopColor="white" stopOpacity="0.04"/>
                    </radialGradient>
                  </defs>
                </svg>
                <span>Free</span>
              </div>
              <div className="plan-price">$0</div>
              <p className="plan-description">
                Perfect for solo developers and small projects. Get started with basic matching and profile features.
              </p>
              <ul className="plan-features">
                <li>Basic profile matching</li>
                <li>Up to 5 matches per month</li>
                <li>Standard profile visibility</li>
                <li>Community access</li>
                <li>Email support</li>
              </ul>
              <button className="plan-button" onClick={() => window.location.href = '/waitlist?plan=free'}>
                Get Started Free
              </button>
            </div>

            {/* Pro Plan */}
            <div className="pricing-card pro-card">
              <div className="most-popular-badge">Most Popular</div>
              <div className="discount-badge">20% OFF</div>
              <div className="plan-badge pro-badge">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <circle cx="10.5" cy="10.5" r="10" fill="url(#pro-gradient)" stroke="url(#pro-stroke)"/>
                  <path d="M7.50602 12.8398C7.50602 13.208 7.8045 13.5065 8.17269 13.5065C8.54088 13.5065 8.83936 13.208 8.83936 12.8398C8.83936 11.3009 9.17989 10.3449 9.76215 9.76264C10.3444 9.18038 11.3004 8.83984 12.8394 8.83984C13.2075 8.83984 13.506 8.54137 13.506 8.17318C13.506 7.80499 13.2075 7.50651 12.8394 7.50651C11.3004 7.50651 10.3444 7.16597 9.76215 6.58372C9.17989 6.00146 8.83934 5.0455 8.83934 3.50651C8.83934 3.13832 8.54088 2.83984 8.17269 2.83984C7.8045 2.83984 7.50602 3.13832 7.50602 3.50651C7.50602 5.0455 7.16548 6.00146 6.58323 6.58372C6.00098 7.16597 5.04501 7.50651 3.50602 7.50651C3.13783 7.50651 2.83936 7.80499 2.83936 8.17318C2.83936 8.54137 3.13783 8.83984 3.50602 8.83984C5.04501 8.83984 6.00098 9.18038 6.58323 9.76264C7.16548 10.3449 7.50602 11.3009 7.50602 12.8398Z" fill="white"/>
                  <defs>
                    <linearGradient id="pro-gradient" x1="10.3565" y1="0.165924" x2="10.0075" y2="20.1629">
                      <stop stopColor="#C495FF"/>
                      <stop offset="1" stopColor="#BF68CF"/>
                    </linearGradient>
                    <radialGradient id="pro-stroke">
                      <stop stopColor="white" stopOpacity="0.48"/>
                      <stop offset="1" stopColor="white" stopOpacity="0.04"/>
                    </radialGradient>
                  </defs>
                </svg>
                <span>Pro</span>
              </div>
              <div className="pricing-row">
                <span className="original-price">$20</span>
                <span className="plan-price">$16</span>
              </div>
              <p className="plan-description">
                Ideal for growing teams and serious founders. Advanced matching, priority features, and enhanced collaboration tools.
              </p>
              <ul className="plan-features">
                <li>Unlimited matches</li>
                <li>Advanced filtering & search</li>
                <li>Priority profile visibility</li>
                <li>Direct messaging</li>
                <li>Team collaboration tools</li>
                <li>Verified skill badges</li>
                <li>Priority support</li>
                <li>Analytics dashboard</li>
              </ul>
              <button className="plan-button" onClick={() => window.location.href = '/waitlist?plan=pro'}>
                Start Pro Trial
              </button>
            </div>

            {/* Premium Plan */}
            <div className="pricing-card enterprise-card">
              <div className="discount-badge">20% OFF</div>
              <div className="plan-badge enterprise-badge">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <circle cx="10.5" cy="10.5" r="10" fill="url(#enterprise-gradient)" stroke="url(#enterprise-stroke)"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.17285 6.17285C4.17285 5.06828 5.06828 4.17285 6.17285 4.17285H14.1729C15.2774 4.17285 16.1729 5.06828 16.1729 6.17285V14.1728C16.1729 15.2774 15.2774 16.1728 14.1729 16.1728H6.17285C5.06828 16.1728 4.17285 15.2774 4.17285 14.1728V6.17285ZM5.50618 6.17285C5.50618 5.80466 5.80466 5.50618 6.17285 5.50618H6.83952V6.83952C6.83952 7.20771 6.54104 7.50618 6.17285 7.50618C5.80466 7.50618 5.50618 7.20771 5.50618 6.83952V6.17285ZM8.83952 7.50618C8.47133 7.50618 8.17285 7.20771 8.17285 6.83952V5.50618H9.50619V6.83952C9.50619 7.20771 9.20771 7.50618 8.83952 7.50618ZM11.5062 7.50618C11.138 7.50618 10.8395 7.20771 10.8395 6.83952V5.50618H12.1729V6.83952C12.1729 7.20771 11.8744 7.50618 11.5062 7.50618ZM14.1729 7.50618C13.8047 7.50618 13.5062 7.20771 13.5062 6.83952V5.50618H14.1729C14.541 5.50618 14.8395 5.80466 14.8395 6.17285V6.83952C14.8395 7.20771 14.541 7.50618 14.1729 7.50618ZM8.83952 12.8395C8.83952 12.4713 9.138 12.1729 9.50619 12.1729H10.8395C11.2077 12.1729 11.5062 12.4713 11.5062 12.8395V14.8395H12.8395V12.8395C12.8395 11.7349 11.9441 10.8395 10.8395 10.8395H9.50619C8.40162 10.8395 7.50619 11.7349 7.50619 12.8395V14.8395H8.83952V12.8395Z" fill="white"/>
                  <defs>
                    <linearGradient id="enterprise-gradient" x1="10.3565" y1="0.165924" x2="10.0075" y2="20.1629">
                      <stop stopColor="#5C7CE6"/>
                      <stop offset="1" stopColor="#4A5FD1"/>
                    </linearGradient>
                    <radialGradient id="enterprise-stroke">
                      <stop stopColor="white" stopOpacity="0.48"/>
                      <stop offset="1" stopColor="white" stopOpacity="0.04"/>
                    </radialGradient>
                  </defs>
                </svg>
                <span>Premium</span>
              </div>
              <div className="pricing-row">
                <span className="original-price">$35</span>
                <span className="plan-price">$28</span>
              </div>
              <p className="plan-description">
                For established companies and large teams. Enterprise-grade features, custom integrations, and dedicated support.
              </p>
              <ul className="plan-features">
                <li>Everything in Pro</li>
                <li>Custom team matching</li>
                <li>API access & integrations</li>
                <li>Dedicated account manager</li>
                <li>Custom branding</li>
                <li>Advanced analytics</li>
                <li>White-label options</li>
                <li>24/7 priority support</li>
              </ul>
              <button className="plan-button" onClick={() => window.location.href = '/waitlist?plan=premium'}>
                Contact Sales
              </button>
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
          <div className="cta-banner-bg">
            <div className="cta-banner-content">
              <h2>Lock in your lifetime discount today</h2>
              <p>Join hundreds of founders who are building their dream teams with DevMates</p>
              <div className="cta-buttons-group">
                <button className="cta-button primary">Start with Pro</button>
                <button className="cta-button secondary">Get Premium</button>
              </div>
              <p className="guarantee-text">30-day money-back guarantee • Cancel anytime</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SpecialOffers;
