import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Background Elements */}
      <div className="about-bg">
        <div className="gradient-green"></div>
        <div className="gradient-pink"></div>
        <div className="noise-texture"></div>
        <div className="ellipse-blur"></div>

        {/* Subtle Color Orbs */}
        <div className="color-orb orb-1"></div>
        <div className="color-orb orb-2"></div>
        <div className="color-orb orb-3"></div>
        <div className="color-orb orb-4"></div>
        <div className="color-orb orb-5"></div>
        <div className="color-orb orb-6"></div>
        <div className="color-orb orb-7"></div>
        <div className="color-orb orb-8"></div>
      </div>

      {/* Navigation */}
      <nav className="about-nav">
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
      <main className="about-main">
        <div className="content-wrapper">
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-badge">OUR STORY</div>
            <h1 className="hero-heading">
              We Built DevMates Because<br />
              <span className="gradient-text">Finding Great Team Members</span><br />
              Was Impossible
            </h1>
            <p className="hero-description">
              After countless hours wasted on platforms like Fiverr, Upwork, and Freelancer, 
              we realized the problem wasn't us—it was the platforms themselves.
            </p>
            
            {/* Problem Section - Moved inside hero */}
            <h2 className="section-heading">The Problem We Faced</h2>
              <div className="problem-grid">
                <div className="problem-card">
                  <div className="problem-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Low Quality Talent</h3>
                  <p>Generic profiles, fake portfolios, and developers who couldn't deliver on their promises.</p>
                </div>
                
                <div className="problem-card">
                  <div className="problem-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                      <path d="M21 16V8A2 2 0 0 0 19 6H5A2 2 0 0 0 3 8V16A2 2 0 0 0 5 18H19A2 2 0 0 0 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 10H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 14H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Poor Communication</h3>
                  <p>Language barriers, timezone issues, and developers who disappeared mid-project.</p>
                </div>
                
                <div className="problem-card">
                  <div className="problem-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                      <path d="M12 1V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17 5H9.5A3.5 3.5 0 0 0 6 8.5V8.5A3.5 3.5 0 0 0 9.5 12H14.5A3.5 3.5 0 0 1 18 15.5V15.5A3.5 3.5 0 0 1 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Expensive & Inefficient</h3>
                  <p>High platform fees, bidding wars, and projects that took 3x longer than estimated.</p>
                </div>
              </div>
          </section>

          {/* Solution Section */}
          <section className="solution-section">
            <div className="section-content">
              <h2 className="section-heading">Our Solution</h2>
              <div className="solution-content">
                <div className="solution-text">
                  <h3>We Built DevMates to Solve These Problems</h3>
                  <p>
                    Instead of complaining about the broken system, we decided to build something better. 
                    DevMates connects you with vetted, skilled developers who understand your vision and 
                    can deliver quality work on time.
                  </p>
                  <div className="solution-features">
                    <div className="feature-item">
                      <div className="feature-check">✓</div>
                      <span>Rigorous vetting process</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-check">✓</div>
                      <span>Clear communication standards</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-check">✓</div>
                      <span>Fair pricing without bidding wars</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-check">✓</div>
                      <span>Project management tools</span>
                    </div>
                  </div>
                </div>
                <div className="solution-visual">
                  <div className="comparison-card">
                    <div className="comparison-header">
                      <h4>Before DevMates</h4>
                    </div>
                    <div className="comparison-list">
                      <div className="comparison-item negative">❌ 2 weeks to find a developer</div>
                      <div className="comparison-item negative">❌ 50% chance of project failure</div>
                      <div className="comparison-item negative">❌ Poor communication</div>
                      <div className="comparison-item negative">❌ Over budget and behind schedule</div>
                    </div>
                  </div>
                  
                  <div className="comparison-card">
                    <div className="comparison-header">
                      <h4>With DevMates</h4>
                    </div>
                    <div className="comparison-list">
                      <div className="comparison-item positive">✅ 24 hours to find a developer</div>
                      <div className="comparison-item positive">✅ 95% project success rate</div>
                      <div className="comparison-item positive">✅ Clear communication</div>
                      <div className="comparison-item positive">✅ On time and on budget</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="mission-section">
            <div className="section-content">
              <h2 className="section-heading">Our Mission</h2>
              <div className="mission-content">
                <div className="mission-text">
                  <h3>Building the Future of Work</h3>
                  <p>
                    We believe that great ideas shouldn't die because you can't find the right people 
                    to build them. DevMates is more than just a platform—it's a community of builders, 
                    creators, and innovators who are passionate about bringing ideas to life.
                  </p>
                  <p>
                    Our mission is to make it easier for entrepreneurs, startups, and businesses to 
                    find the perfect team members who share their vision and can help them succeed.
                  </p>
                </div>
                <div className="mission-stats">
                  <div className="stat-item">
                    <div className="stat-number">20+</div>
                    <div className="stat-label">Vetted Developers</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">95%</div>
                    <div className="stat-label">Success Rate</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">24h</div>
                    <div className="stat-label">Average Match Time</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <div className="cta-content">
              <h2>Ready to Find Your Perfect Team?</h2>
              <p>Join thousands of entrepreneurs who've found their ideal co-founders and team members on DevMates.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="cta-button primary">
                  Join the Waitlist
                </Link>
                <Link to="/docs" className="cta-button secondary">
                  Learn More
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
