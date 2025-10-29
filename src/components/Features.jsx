import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './Features.css';

const Features = () => {
  const mainFeatures = [
    {
      id: 1,
      title: "Smart Co-Founder Matching",
      description: "Find teammates with complementary skills and shared vision through our intelligent matching algorithm.",
      details: [
        "AI-powered compatibility analysis",
        "Skill-based filtering",
        "Shared goal matching",
        "Cultural fit assessment"
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Build Your Profile",
      description: "Showcase your skills, experience, and startup goals with a comprehensive profile builder.",
      details: [
        "Customizable profile sections",
        "Portfolio integration",
        "Skill tags and verification",
        "Experience timeline"
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Team Compatibility",
      description: "See detailed compatibility scores before you connect to ensure the perfect team fit.",
      details: [
        "Real-time compatibility scoring",
        "Skills alignment analysis",
        "Goal matching metrics",
        "Cultural fit indicators"
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Project Ideas Hub",
      description: "Share your startup ideas and find passionate co-founders ready to build together.",
      details: [
        "Public idea posting",
        "Collaborative filtering",
        "Team formation tools",
        "Project tracking"
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "Verified Skills",
      description: "Connect GitHub and showcase real projects with proof of your technical abilities.",
      details: [
        "GitHub integration",
        "Portfolio verification",
        "Real project showcase",
        "Skill authenticity badges"
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 6,
      title: "Team Chat & Collaboration",
      description: "Connect with matches and plan your startup together with integrated communication tools.",
      details: [
        "Real-time messaging",
        "Video call integration",
        "Shared workspace",
        "File sharing"
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 10h8M8 14h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  const additionalFeatures = [
    {
      id: 1,
      title: "Profile Boost",
      description: "Increase your visibility and get more matches with profile boosting.",
      icon: "🚀"
    },
    {
      id: 2,
      title: "Founder Forum",
      description: "Access public forums to discuss ideas, share experiences, and network with founders.",
      icon: "💬"
    },
    {
      id: 3,
      title: "Enhanced Data Visibility",
      description: "See detailed analytics about your profile performance and match insights.",
      icon: "📊"
    },
    {
      id: 4,
      title: "Super Like Profiles",
      description: "Stand out by sending super likes to profiles you're really interested in.",
      icon: "⭐"
    },
    {
      id: 5,
      title: "Passport to Any Location",
      description: "Match with co-founders from anywhere in the world regardless of your location.",
      icon: "🌍"
    },
    {
      id: 6,
      title: "Rewind Last Swipe",
      description: "Undo your last swipe decision and give profiles a second chance.",
      icon: "↩️"
    },
    {
      id: 7,
      title: "Startup Insights Dashboard",
      description: "Get comprehensive analytics and insights about your startup journey and team formation.",
      icon: "📈"
    },
    {
      id: 8,
      title: "Verified Founder Badge",
      description: "Show credibility with a verified founder badge on your profile.",
      icon: "✓"
    },
    {
      id: 9,
      title: "Early Access to New Features",
      description: "Be among the first to try new features and shape the platform's future.",
      icon: "🎁"
    }
  ];

  return (
    <div className="features-page">
      {/* Background Elements */}
      <div className="features-bg">
        <div className="gradient-green"></div>
        <div className="gradient-pink"></div>
        <div className="noise-texture"></div>
        <div className="stars-bg"></div>
        <div className="ellipse-blur"></div>
        <div className="white-spec-texture"></div>

        {/* Subtle Color Orbs */}
        <div className="color-orb orb-1"></div>
        <div className="color-orb orb-2"></div>
        <div className="color-orb orb-3"></div>
      </div>

      {/* Navigation */}
      <nav className="features-nav">
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
      <main className="features-main">
        <div className="content-wrapper">
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-badge">FEATURES</div>
            <h1 className="hero-heading">
              Everything You Need to
              <br />
              <span className="gradient-text">Build Your Dream Team</span>
            </h1>
            <p className="hero-description">
              Connect with co-founders, validate skills, and collaborate on your next big idea.
              Discover all the powerful features DevMates offers to help you find the perfect team.
            </p>
            
            {/* Core Features - Moved inside hero */}
            <h2 className="section-heading">Core Features</h2>
            <div className="features-grid">
              {mainFeatures.map((feature) => (
                <div key={feature.id} className="feature-card-large">
                  <div className="feature-icon-wrapper">
                    {feature.icon}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <ul className="feature-details">
                    {feature.details.map((detail, index) => (
                      <li key={index}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="#09F785" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Additional Features Section */}
          <section className="additional-features-section">
            <h2 className="section-heading">Premium Features</h2>
            <p className="section-subtitle">
              Unlock powerful tools and features with our Pro and Premium plans
            </p>
            <div className="additional-features-grid">
              {additionalFeatures.map((feature) => (
                <div key={feature.id} className="additional-feature-card">
                  <div className="additional-feature-icon">{feature.icon}</div>
                  <h4 className="additional-feature-title">{feature.title}</h4>
                  <p className="additional-feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <h2 className="cta-heading">Ready to Find Your Co-Founder?</h2>
            <p className="cta-description">
              Join thousands of founders building their next big idea together
            </p>
            <Link to="/waitlist" className="cta-button">
              <span>Join the Waitlist</span>
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M8.69995 13.5999L12.3 9.9999L8.69995 6.3999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Features;

