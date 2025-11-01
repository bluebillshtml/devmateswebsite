import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './LandingPage.css';

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const testimonials = [
    {
      quote: "DevMates has become an essential platform for our team to connect, collaborate, and build new ventures. It streamlines the process of finding like-minded creators, making it a core part of how we form and scale our projects.",
      author: "Levi Carpenter",
      title: "CEO of Devmates",
      avatar: "/levi.jpg",
      showStars: false
    },
    {
      quote: "Finding a technical co-founder was always the hardest part of launching a startup. DevMates made it seamless - I connected with my CTO in just two weeks. Now we're building something incredible together.",
      author: "Sarah Chen",
      title: "Founder of TechFlow AI",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      showStars: true
    },
    {
      quote: "The skill verification feature gave me confidence that I was connecting with real developers. Within a month, I had assembled a talented team of 4 co-founders, all verified and passionate about our vision.",
      author: "Marcus Johnson",
      title: "Co-Founder of CloudSync",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      showStars: true
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Popup timer - show after 10 seconds if not dismissed before
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('devmates-popup-dismissed');

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    localStorage.setItem('devmates-popup-dismissed', 'true');
  };

  const headerClass = `header ${scrolled ? 'scrolled' : ''}`;

  return (
    <div className="landing-page">
      {/* Header */}
      <header className={headerClass}>
        <nav className="nav-container">
          <div className="nav-content">
            <div className="nav-left">
              <div className="nav-links">
                <Link to="/features" className="nav-link">Features</Link>
                <a href="#pricing" className="nav-link">Pricing</a>
                <a href="/docs" className="nav-link">Docs</a>
                <Link to="/about" className="nav-link">About</Link>
              </div>
            </div>
            <div className="nav-right">
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg">
          <div className="hero-gradient hero-gradient-1"></div>
          <div className="hero-gradient hero-gradient-2"></div>
          <div className="hero-gradient hero-gradient-3"></div>
          <div className="hero-gradient hero-gradient-4"></div>
          <div className="noise-texture"></div>
          <div className="stars-bg"></div>
        </div>
        <div className="hero-content">
          <div className="beta-badge">
            <img src="/logo.png" alt="DevMates Logo" className="beta-logo" />
            <span className="beta-text">is currently in development</span>
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path d="M8.69995 13.5999L12.3 9.9999L8.69995 6.3999" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="hero-title">
            <span className="title-line">Find Your Co-Founder</span>
            <span className="title-line">Who Actually Builds.</span>
          </h1>
          <p className="hero-description">
            <span>Stop wasting time on freelance platforms. Connect with verified</span>
            <span>technical co-founders who are ready to build, not just talk.</span>
          </p>
          <a href="/waitlist" className="btn-get-started">
            <span>Join the Waitlist</span>
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path d="M8.69995 13.5999L12.3 9.9999L8.69995 6.3999" stroke="#09090A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        <div className="hero-phones">
          {/* Phone Mockup 1 - Profile/Swipe Screen */}
          <div className="phone-mockup phone-1">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="app-header">
                  <div className="app-logo">
                    <span className="logo-text">devmates.</span>
                  </div>
                  <div className="app-filter-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <line x1="4" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="4" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <div className="swipe-card-container">
                  <div className="profile-card">
                    <div className="profile-card-image">
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop" alt="Profile" />
                    </div>
                    <div className="profile-card-info">
                      <div className="profile-verified">
                        <h3 className="profile-card-name">Sarah Martinez</h3>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="9" fill="#FF4458"/>
                          <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="profile-card-role">UI/UX Designer</p>
                      <div className="profile-card-location">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M7 7.5C7.82843 7.5 8.5 6.82843 8.5 6C8.5 5.17157 7.82843 4.5 7 4.5C6.17157 4.5 5.5 5.17157 5.5 6C5.5 6.82843 6.17157 7.5 7 7.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M7 12.5C9 10 11 8.21 11 6C11 3.79 9.21 2 7 2C4.79 2 3 3.79 3 6C3 8.21 5 10 7 12.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>New York, NY</span>
                      </div>
                      <p className="profile-card-bio">Design systems enthusiast. Building beautiful interfaces.</p>
                      <div className="profile-card-skills">
                        <span className="skill-tag">Figma</span>
                        <span className="skill-tag">UI/UX</span>
                        <span className="skill-tag">Brand Design</span>
                        <span className="skill-tag-more">+2</span>
                      </div>
                      <div className="profile-card-connections">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M12 14V12.6667C12 11.9594 11.719 11.2811 11.219 10.781C10.7189 10.281 10.0406 10 9.33333 10H6.66667C5.95942 10 5.28115 10.281 4.78105 10.781C4.28095 11.2811 4 11.9594 4 12.6667V14M10.6667 4.66667C10.6667 6.13943 9.47276 7.33333 8 7.33333C6.52724 7.33333 5.33333 6.13943 5.33333 4.66667C5.33333 3.19391 6.52724 2 8 2C9.47276 2 10.6667 3.19391 10.6667 4.66667Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>24.3K</span>
                      </div>
                    </div>
                  </div>
                  <div className="swipe-actions">
                    <button className="swipe-action-btn swipe-dismiss">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M20 12L12 20M12 12L20 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="swipe-action-btn swipe-like">
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path d="M18 30L15.9 28.08C9.6 22.32 5.4 18.48 5.4 13.8C5.4 10.08 8.28 7.2 12 7.2C14.04 7.2 16.08 8.16 17.52 9.72H18.48C19.92 8.16 21.96 7.2 24 7.2C27.72 7.2 30.6 10.08 30.6 13.8C30.6 18.48 26.4 22.32 20.1 28.08L18 30Z" fill="currentColor"/>
                      </svg>
                    </button>
                    <button className="swipe-action-btn swipe-message">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="10" fill="currentColor"/>
                      </svg>
                    </button>
                  </div>
                  <div className="swipe-hint">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M10 6L6 10M6 6L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Swipe to explore</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 6L10 10M10 6L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="app-nav">
                  <div className="nav-item nav-active">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M21 8.25L12 13.5L3 8.25M21 12L12 17.25L3 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Home</span>
                  </div>
                  <div className="nav-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                      <path d="M19.4 15C19.1277 15.6171 18.7583 16.1986 18.3 16.73C17.2 17.93 15.71 18.75 14 19M4.6 9C4.87229 8.38289 5.24172 7.80138 5.7 7.27C6.8 6.07 8.29 5.25 10 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span>Explore</span>
                  </div>
                  <div className="nav-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Messages</span>
                  </div>
                  <div className="nav-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Profile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Mockup 2 - Explore/Teams Screen */}
          <div className="phone-mockup phone-2">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="explore-header">
                  <div className="search-bar">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <input type="text" placeholder="Search teams, projects, roles..." readOnly />
                  </div>
                  <button className="filter-btn">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <line x1="4" y1="5" x2="16" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <line x1="4" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <line x1="4" y1="15" x2="16" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
                <div className="category-filters">
                  <button className="category-btn category-active">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="2" y="2" width="5" height="5" rx="1" fill="currentColor"/>
                      <rect x="9" y="2" width="5" height="5" rx="1" fill="currentColor"/>
                      <rect x="2" y="9" width="5" height="5" rx="1" fill="currentColor"/>
                      <rect x="9" y="9" width="5" height="5" rx="1" fill="currentColor"/>
                    </svg>
                    <span>All</span>
                  </button>
                  <button className="category-btn">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2L9.5 6H13.5L10.5 8.5L11.5 12.5L8 10L4.5 12.5L5.5 8.5L2.5 6H6.5L8 2Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>AI & ML</span>
                  </button>
                  <button className="category-btn">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M2 8H14M8 2C9.5 4 10 6 10 8C10 10 9.5 12 8 14M8 2C6.5 4 6 6 6 8C6 10 6.5 12 8 14" stroke="currentColor" strokeWidth="1.2"/>
                    </svg>
                    <span>Web Dev</span>
                  </button>
                  <button className="category-btn">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="3" y="2" width="10" height="12" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M6 2V14M10 6H13" stroke="currentColor" strokeWidth="1.2"/>
                    </svg>
                    <span>Mobile</span>
                  </button>
                </div>
                <div className="stats-row">
                  <div className="stat-card">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C23 17.9391 22.5786 16.9217 21.8284 16.1716C21.0783 15.4214 20.0609 15 19 15M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7ZM19 7C19 8.65685 17.6569 10 16 10C14.3431 10 13 8.65685 13 7C13 5.34315 14.3431 4 16 4C17.6569 4 19 5.34315 19 7Z" stroke="#FF4458" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="stat-info">
                      <div className="stat-value">1,200+</div>
                      <div className="stat-label">Active Teams</div>
                    </div>
                  </div>
                  <div className="stat-card">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="7" width="18" height="14" rx="2" stroke="#FF4458" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 7V5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3H14C14.5304 3 15.0391 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5V7M12 14V12" stroke="#FF4458" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="stat-info">
                      <div className="stat-value">450+</div>
                      <div className="stat-label">Open Roles</div>
                    </div>
                  </div>
                </div>
                <div className="teams-list">
                  <div className="teams-count">6 teams found</div>
                  <div className="team-card">
                    <div className="team-image">
                      <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop" alt="Team" />
                      <span className="team-badge">Remote</span>
                      <button className="team-bookmark">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="7" fill="white"/>
                          <path d="M5 7L7 9L11 5" stroke="#FF4458" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                    <div className="team-info">
                      <h4 className="team-name">AI-Powered Code Assistant</h4>
                      <p className="team-company">TechStudio</p>
                      <div className="team-tags">
                        <span className="team-tag">Startup</span>
                        <span className="team-tag">Full-time</span>
                      </div>
                      <div className="team-meta">
                        <span className="team-members">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M10 12V11C10 9.89543 9.10457 9 8 9H4C2.89543 9 2 9.89543 2 11V12M12 9V12M8 5C8 6.10457 7.10457 7 6 7C4.89543 7 4 6.10457 4 5C4 3.89543 4.89543 3 6 3C7.10457 3 8 3.89543 8 5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          4/6
                        </span>
                        <span className="team-openings">2 open</span>
                      </div>
                    </div>
                  </div>
                  <div className="team-card">
                    <div className="team-image">
                      <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop" alt="Team" />
                      <span className="team-badge">Remote</span>
                      <button className="team-bookmark">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="7" fill="white"/>
                          <path d="M5 7L7 9L11 5" stroke="#FF4458" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                    <div className="team-info">
                      <h4 className="team-name">EcoCart - Sustainable Shopping</h4>
                      <p className="team-company">GreenTech Collective</p>
                      <div className="team-tags">
                        <span className="team-tag">Startup</span>
                        <span className="team-tag">Full-time</span>
                      </div>
                      <div className="team-meta">
                        <span className="team-members">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M10 12V11C10 9.89543 9.10457 9 8 9H4C2.89543 9 2 9.89543 2 11V12M12 9V12M8 5C8 6.10457 7.10457 7 6 7C4.89543 7 4 6.10457 4 5C4 3.89543 4.89543 3 6 3C7.10457 3 8 3.89543 8 5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          5/8
                        </span>
                        <span className="team-openings">3 open</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Mockup 3 - Project Detail Screen */}
          <div className="phone-mockup phone-3">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="detail-header">
                  <button className="back-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="share-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8.5 13.5L15.5 17.5M15.5 6.5L8.5 10.5" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
                <div className="project-hero">
                  <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop" alt="Project" />
                </div>
                <div className="project-content">
                  <h2 className="project-title">GameDev Studio - Indie RPG</h2>
                  <p className="project-author">by Pixel Dreams</p>
                  <div className="project-badges">
                    <span className="project-badge badge-gaming">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M5 8L3 10M9 6L11 4M7 7L9 5M5 5L7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <rect x="2" y="2" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      gaming
                    </span>
                    <span className="project-badge badge-side">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <rect x="3" y="2" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M5 2V12" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      Side Project
                    </span>
                    <span className="project-badge badge-flexible">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M7 4V7L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      Flexible
                    </span>
                  </div>
                  <div className="project-location">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 7.5C7.82843 7.5 8.5 6.82843 8.5 6C8.5 5.17157 7.82843 4.5 7 4.5C6.17157 4.5 5.5 5.17157 5.5 6C5.5 6.82843 6.17157 7.5 7 7.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 12.5C9 10 11 8.21 11 6C11 3.79 9.21 2 7 2C4.79 2 3 3.79 3 6C3 8.21 5 10 7 12.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Remote</span>
                  </div>
                  <div className="project-stats">
                    <div className="project-stat">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M13 16V14.6667C13 13.9594 12.719 13.2811 12.219 12.781C11.7189 12.281 11.0406 12 10.3333 12H7.66667C6.95942 12 6.28115 12.281 5.78105 12.781C5.28095 13.2811 5 13.9594 5 14.6667V16M11.6667 5.66667C11.6667 7.13943 10.4728 8.33333 9 8.33333C7.52724 8.33333 6.33333 7.13943 6.33333 5.66667C6.33333 4.19391 7.52724 3 9 3C10.4728 3 11.6667 4.19391 11.6667 5.66667Z" stroke="#FF4458" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className="stat-details">
                        <div className="stat-number">7</div>
                        <div className="stat-text">Members</div>
                      </div>
                    </div>
                    <div className="project-stat-divider"></div>
                    <div className="project-stat">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <rect x="4" y="6" width="10" height="10" rx="1" stroke="#FF4458" strokeWidth="1.5"/>
                        <path d="M6 6V4C6 3.46957 6.21071 2.96086 6.58579 2.58579C6.96086 2.21071 7.46957 2 8 2H10C10.5304 2 11.0391 2.21071 11.4142 2.58579C11.7893 2.96086 12 3.46957 12 4V6M9 11V10" stroke="#FF4458" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className="stat-details">
                        <div className="stat-number">3</div>
                        <div className="stat-text">Open Roles</div>
                      </div>
                    </div>
                    <div className="project-stat-divider"></div>
                    <div className="project-stat">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <rect x="3" y="4" width="12" height="11" rx="2" stroke="#FF4458" strokeWidth="1.5"/>
                        <path d="M3 7H15M6 3V5M12 3V5" stroke="#FF4458" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <div className="stat-details">
                        <div className="stat-number">202</div>
                        <div className="stat-text">Founded</div>
                      </div>
                    </div>
                  </div>
                  <div className="project-section">
                    <h3 className="section-title">About</h3>
                    <p className="section-text">Developing an indie RPG with unique mechanics and beautiful pixel art. Inspired by classics like Final Fantasy.</p>
                  </div>
                  <button className="apply-btn">
                    <span>Apply to Join</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Cloud Section */}
      <section className="logo-cloud-section">
        {/* Top marquee - scrolling left */}
        <div className="logo-marquee-wrapper">
          <div className="logo-marquee logo-marquee-left">
            <div className="logo-scroll-item logo-large" style={{transform: 'rotate(-5deg)'}}>
              <img src="/logo1.png" alt="Logo 1" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-small" style={{transform: 'rotate(3deg)'}}>
              <img src="/logo2.png" alt="Logo 2" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-medium" style={{transform: 'rotate(-2deg)'}}>
              <img src="/logo3.png" alt="Logo 3" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-large" style={{transform: 'rotate(4deg)'}}>
              <img src="/logo4.png" alt="Logo 4" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-small" style={{transform: 'rotate(-3deg)'}}>
              <img src="/logo5.png" alt="Logo 5" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-medium" style={{transform: 'rotate(2deg)'}}>
              <img src="/logo6.png" alt="Logo 6" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-large" style={{transform: 'rotate(-4deg)'}}>
              <img src="/logo7.png" alt="Logo 7" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-small" style={{transform: 'rotate(5deg)'}}>
              <img src="/logo8.png" alt="Logo 8" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-large" style={{transform: 'rotate(-5deg)'}}>
              <img src="/logo1.png" alt="Logo 1" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-small" style={{transform: 'rotate(3deg)'}}>
              <img src="/logo2.png" alt="Logo 2" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-medium" style={{transform: 'rotate(-2deg)'}}>
              <img src="/logo3.png" alt="Logo 3" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-large" style={{transform: 'rotate(4deg)'}}>
              <img src="/logo4.png" alt="Logo 4" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-small" style={{transform: 'rotate(-3deg)'}}>
              <img src="/logo5.png" alt="Logo 5" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-medium" style={{transform: 'rotate(2deg)'}}>
              <img src="/logo6.png" alt="Logo 6" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-large" style={{transform: 'rotate(-4deg)'}}>
              <img src="/logo7.png" alt="Logo 7" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-small" style={{transform: 'rotate(5deg)'}}>
              <img src="/logo8.png" alt="Logo 8" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-large" style={{transform: 'rotate(-5deg)'}}>
              <img src="/logo1.png" alt="Logo 1" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-small" style={{transform: 'rotate(3deg)'}}>
              <img src="/logo2.png" alt="Logo 2" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-medium" style={{transform: 'rotate(-2deg)'}}>
              <img src="/logo3.png" alt="Logo 3" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-large" style={{transform: 'rotate(4deg)'}}>
              <img src="/logo4.png" alt="Logo 4" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-small" style={{transform: 'rotate(-3deg)'}}>
              <img src="/logo5.png" alt="Logo 5" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-medium" style={{transform: 'rotate(2deg)'}}>
              <img src="/logo6.png" alt="Logo 6" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-large" style={{transform: 'rotate(-4deg)'}}>
              <img src="/logo7.png" alt="Logo 7" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-small" style={{transform: 'rotate(5deg)'}}>
              <img src="/logo8.png" alt="Logo 8" className="logo-image" />
            </div>
          </div>
        </div>

        {/* Center text */}
        <div className="logo-cloud-title">
          <h2>Used by developers, designers,</h2>
          <h2>and startup founders building</h2>
          <h2>the next big thing.</h2>
        </div>

        {/* Bottom marquee - scrolling right */}
        <div className="logo-marquee-wrapper">
          <div className="logo-marquee logo-marquee-right">
            <div className="logo-scroll-item logo-small" style={{transform: 'rotate(2deg)'}}>
              <img src="/logo5.png" alt="Logo 5" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-large" style={{transform: 'rotate(-3deg)'}}>
              <img src="/logo6.png" alt="Logo 6" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-medium" style={{transform: 'rotate(4deg)'}}>
              <img src="/logo7.png" alt="Logo 7" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-small" style={{transform: 'rotate(-5deg)'}}>
              <img src="/logo8.png" alt="Logo 8" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-large" style={{transform: 'rotate(3deg)'}}>
              <img src="/logo1.png" alt="Logo 1" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-medium" style={{transform: 'rotate(-2deg)'}}>
              <img src="/logo2.png" alt="Logo 2" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-small" style={{transform: 'rotate(4deg)'}}>
              <img src="/logo3.png" alt="Logo 3" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-large" style={{transform: 'rotate(-4deg)'}}>
              <img src="/logo4.png" alt="Logo 4" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-small" style={{transform: 'rotate(2deg)'}}>
              <img src="/logo5.png" alt="Logo 5" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-large" style={{transform: 'rotate(-3deg)'}}>
              <img src="/logo6.png" alt="Logo 6" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-medium" style={{transform: 'rotate(4deg)'}}>
              <img src="/logo7.png" alt="Logo 7" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-small" style={{transform: 'rotate(-5deg)'}}>
              <img src="/logo8.png" alt="Logo 8" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-large" style={{transform: 'rotate(3deg)'}}>
              <img src="/logo1.png" alt="Logo 1" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-medium" style={{transform: 'rotate(-2deg)'}}>
              <img src="/logo2.png" alt="Logo 2" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-small" style={{transform: 'rotate(4deg)'}}>
              <img src="/logo3.png" alt="Logo 3" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-large" style={{transform: 'rotate(-4deg)'}}>
              <img src="/logo4.png" alt="Logo 4" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-small" style={{transform: 'rotate(2deg)'}}>
              <img src="/logo5.png" alt="Logo 5" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-large" style={{transform: 'rotate(-3deg)'}}>
              <img src="/logo6.png" alt="Logo 6" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-medium" style={{transform: 'rotate(4deg)'}}>
              <img src="/logo7.png" alt="Logo 7" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-small" style={{transform: 'rotate(-5deg)'}}>
              <img src="/logo8.png" alt="Logo 8" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-large" style={{transform: 'rotate(3deg)'}}>
              <img src="/logo1.png" alt="Logo 1" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-medium" style={{transform: 'rotate(-2deg)'}}>
              <img src="/logo2.png" alt="Logo 2" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-small" style={{transform: 'rotate(4deg)'}}>
              <img src="/logo3.png" alt="Logo 3" className="logo-image" />
            </div>
            <div className="logo-scroll-item logo-large" style={{transform: 'rotate(-4deg)'}}>
              <img src="/logo4.png" alt="Logo 4" className="logo-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-bg"></div>
        <div className="features-gradient features-gradient-1"></div>
        <div className="features-gradient features-gradient-2"></div>
        <div className="features-gradient features-gradient-3"></div>
        <div className="features-gradient features-gradient-4"></div>
        <div className="features-glow-orbs">
          <div className="glow-orb-green" style={{top: '10%', left: '5%'}}></div>
          <div className="glow-orb-purple" style={{top: '70%', right: '10%'}}></div>
          <div className="glow-orb-blue" style={{top: '-10%', right: '5%'}}></div>
        </div>

        <div className="features-header">
          <h2 className="features-title">Everything you need to build your dream team</h2>
          <p className="features-subtitle">Connect with co-founders, validate skills, and collaborate on your next big idea</p>
        </div>

        <div className="feature-cards-container">
          {/* Row 1 */}
          <div className="feature-cards-row">
            {/* Card 1: Smart Matching Algorithm */}
            <div className="feature-card">
              <div className="feature-card-visual">
                <div className="dual-phone-container">
                  {/* Phone 1 - Profile Card */}
                  <div className="phone-device phone-left">
                    <div className="phone-frame-device">
                      <div className="phone-notch-device"></div>
                      <div className="phone-screen-device">
                        <div className="profile-card-screen">
                          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop" alt="Profile" className="profile-image-photo" />
                          <div className="profile-header-bar">
                            <span className="profile-logo">DevMates</span>
                          </div>
                          <div className="profile-info-bottom">
                            <h4 className="profile-name-card">Emma Williams</h4>
                            <p className="profile-role-card">Product Manager</p>
                            <p className="profile-location-card">📍 San Francisco, CA</p>
                            <div className="profile-tags-card">
                              <span className="tag-card">Product Design</span>
                              <span className="tag-card">Growth Hacking</span>
                              <span className="tag-card">SEO</span>
                              <span className="tag-card">UI/UX</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone 2 - Startup Categories */}
                  <div className="phone-device phone-right">
                    <div className="phone-frame-device">
                      <div className="phone-notch-device"></div>
                      <div className="phone-screen-device">
                        <div className="categories-screen-new">
                          <div className="categories-header">
                            <h3>Browse Ideas</h3>
                            <button className="filter-btn">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M3 7h18M6 12h12M9 17h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </button>
                          </div>

                          <div className="category-list">
                            <div className="category-item">
                              <div className="category-icon-wrapper purple-gradient">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                              <div className="category-content">
                                <h4>Find Co-Founders</h4>
                                <p>3,284 looking</p>
                              </div>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="arrow-icon">
                                <path d="M9 18l6-6-6-6" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </div>

                            <div className="category-item">
                              <div className="category-icon-wrapper blue-gradient">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                              <div className="category-content">
                                <h4>Skill Verified</h4>
                                <p>1,847 developers</p>
                              </div>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="arrow-icon">
                                <path d="M9 18l6-6-6-6" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </div>

                            <div className="category-item">
                              <div className="category-icon-wrapper pink-gradient">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path d="M12 20.94c1.5 0 2.75 1.06 4.96 0 2.5-1.5 4.96-8.94 4.96-8.94H2.08s2.46 7.44 4.96 8.94c2.21 1.06 3.46 0 4.96 0z" fill="white"/>
                                  <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2"/>
                                  <path d="M12 2v4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                              </div>
                              <div className="category-content">
                                <h4>Startup Ideas</h4>
                                <p>5,621 ideas</p>
                              </div>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="arrow-icon">
                                <path d="M9 18l6-6-6-6" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </div>

                            <div className="category-item">
                              <div className="category-icon-wrapper green-gradient">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M8 10h8M8 14h4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                              </div>
                              <div className="category-content">
                                <h4>Active Teams</h4>
                                <p>938 teams</p>
                              </div>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="arrow-icon">
                                <path d="M9 18l6-6-6-6" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-card-text">
                <h3>Smart Co-Founder Matching</h3>
                <p>Find teammates with complementary skills and shared vision</p>
              </div>
            </div>

            {/* Card 2: Build Your Profile */}
            <div className="feature-card">
              <div className="feature-card-visual">
                <div className="form-preview">
                  <div className="form-field">
                    <label>Skills</label>
                    <input type="text" placeholder="React, Node.js, UI/UX" readOnly />
                  </div>
                  <div className="form-field">
                    <label>Role</label>
                    <input type="text" placeholder="Full-Stack Developer" readOnly />
                  </div>
                  <div className="form-add-btn">+</div>
                  <div className="form-tabs">
                    <span>Developer</span>
                    <span>Designer</span>
                    <span>Product</span>
                    <span>Marketing</span>
                  </div>
                </div>
              </div>
              <div className="feature-card-text">
                <h3>Build Your Profile</h3>
                <p>Showcase your skills, experience, and startup goals</p>
              </div>
            </div>

            {/* Card 3: Team Compatibility Score */}
            <div className="feature-card">
              <div className="feature-card-visual">
                <div className="single-phone-container">
                  <div className="phone-device-single">
                    <div className="phone-frame-device">
                      <div className="phone-notch-device"></div>
                      <div className="phone-screen-device">
                        <div className="compatibility-screen-new">
                          <div className="compat-header">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" alt="Profile" className="compat-avatar" />
                            <div className="compat-info">
                              <h4 className="compat-name">Sarah Chen</h4>
                              <p className="compat-role">Full-Stack Developer</p>
                            </div>
                          </div>
                          <div className="compat-score-section">
                            <div className="score-circle-new">
                              <svg width="90" height="90" viewBox="0 0 90 90">
                                <circle cx="45" cy="45" r="38" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6"/>
                                <circle cx="45" cy="45" r="38" fill="none" stroke="rgba(128, 128, 128, 0.3)" strokeWidth="6" strokeDasharray="240" strokeDashoffset="14" strokeLinecap="round" transform="rotate(-90 45 45)"/>
                              </svg>
                              <div className="score-text-new">94%</div>
                            </div>
                            <p className="match-label">Compatibility Match</p>
                          </div>
                          <div className="compat-bars">
                            <div className="compat-bar-item">
                              <span className="bar-label">Skills</span>
                              <div className="bar-track">
                                <div className="bar-fill" style={{width: '92%'}}></div>
                              </div>
                            </div>
                            <div className="compat-bar-item">
                              <span className="bar-label">Goals</span>
                              <div className="bar-track">
                                <div className="bar-fill" style={{width: '96%'}}></div>
                              </div>
                            </div>
                            <div className="compat-bar-item">
                              <span className="bar-label">Culture</span>
                              <div className="bar-track">
                                <div className="bar-fill" style={{width: '94%'}}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-card-text">
                <h3>Team Compatibility</h3>
                <p>See detailed compatibility scores before you connect</p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="feature-cards-row">
            {/* Card 4: Project Ideas Hub */}
            <div className="feature-card">
              <div className="feature-card-visual">
                <div className="api-preview">
                  <div className="api-buttons">
                    <button className="api-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2v6M12 18v4M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M18 12h4M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                    <button className="api-btn">New</button>
                  </div>
                  <div className="api-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>AI SaaS Platform</span>
                  </div>
                  <div className="api-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#5E6AD2" strokeWidth="2"/>
                      <circle cx="9" cy="7" r="4" stroke="#5E6AD2" strokeWidth="2"/>
                    </svg>
                    <span>Looking for technical co-founder</span>
                  </div>
                  <div className="api-tag-group">
                    <span className="api-tag">React</span>
                    <span className="api-tag">Python</span>
                    <span className="api-tag">AI/ML</span>
                  </div>
                  <div className="api-metrics">
                    <div className="api-metric">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="#9a9a9c" strokeWidth="2"/>
                      </svg>
                      <span>24</span>
                    </div>
                    <div className="api-metric">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#9a9a9c" strokeWidth="2"/>
                      </svg>
                      <span>8</span>
                    </div>
                    <div className="api-metric">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="#9a9a9c" strokeWidth="2"/>
                        <polyline points="12 6 12 12 16 14" stroke="#9a9a9c" strokeWidth="2"/>
                      </svg>
                      <span>2d ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-card-text">
                <h3>Project Ideas Hub</h3>
                <p>Share your startup ideas and find passionate co-founders</p>
              </div>
            </div>

            {/* Card 5: Verified Skills */}
            <div className="feature-card">
              <div className="feature-card-visual">
                <div className="github-preview">
                  <div className="github-header">
                    <div className="github-avatar-badge">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="white"/>
                      </svg>
                    </div>
                    <span className="github-username">@sarah_dev</span>
                  </div>

                  <div className="github-stats">
                    <div className="github-stat-item">
                      <span className="stat-number">247</span>
                      <span className="stat-label">Contributions</span>
                    </div>
                    <div className="github-stat-item">
                      <span className="stat-number">18</span>
                      <span className="stat-label">Repos</span>
                    </div>
                    <div className="github-stat-item">
                      <span className="stat-number">342</span>
                      <span className="stat-label">Stars</span>
                    </div>
                  </div>

                  <div className="github-projects">
                    <div className="github-project-item">
                      <div className="project-dot react-dot"></div>
                      <span className="project-name">react-dashboard</span>
                    </div>
                    <div className="github-project-item">
                      <div className="project-dot python-dot"></div>
                      <span className="project-name">ml-api-service</span>
                    </div>
                    <div className="github-project-item">
                      <div className="project-dot ts-dot"></div>
                      <span className="project-name">ui-component-lib</span>
                    </div>
                  </div>

                  <div className="github-verified">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#09F785" strokeWidth="2"/>
                      <polyline points="22 4 12 14.01 9 11.01" stroke="#09F785" strokeWidth="2"/>
                    </svg>
                    <span>Portfolio Verified</span>
                  </div>
                </div>
              </div>
              <div className="feature-card-text">
                <h3>Verified Skills</h3>
                <p>Connect GitHub and showcase real projects with proof</p>
              </div>
            </div>

            {/* Card 6: Team Chat & Collaboration */}
            <div className="feature-card">
              <div className="feature-card-visual">
                <div className="chat-preview-new">
                  <div className="chat-conversation">
                    <div className="chat-message-item received">
                      <div className="chat-user-avatar">
                        <span>AM</span>
                      </div>
                      <div className="chat-message-content">
                        <div className="chat-message-header">
                          <span className="chat-user-name">Alex Martinez</span>
                          <span className="chat-message-time">2:34 PM</span>
                        </div>
                        <div className="chat-message-bubble">Hey! Love your idea for the AI platform 🚀</div>
                      </div>
                    </div>

                    <div className="chat-message-item sent">
                      <div className="chat-message-content sent-content">
                        <div className="chat-message-header">
                          <span className="chat-message-time">2:36 PM</span>
                          <span className="chat-user-name">You</span>
                        </div>
                        <div className="chat-message-bubble sent-bubble">Thanks! I saw your design portfolio. Want to co-found?</div>
                      </div>
                    </div>

                    <div className="chat-message-item received">
                      <div className="chat-user-avatar">
                        <span>AM</span>
                      </div>
                      <div className="chat-message-content">
                        <div className="chat-message-header">
                          <span className="chat-user-name">Alex Martinez</span>
                          <span className="chat-message-time">2:38 PM</span>
                        </div>
                        <div className="chat-message-bubble">Absolutely! Let's discuss equity split and roles</div>
                      </div>
                    </div>

                    <div className="chat-message-item received">
                      <div className="chat-user-avatar">
                        <span>AM</span>
                      </div>
                      <div className="chat-message-content">
                        <div className="chat-message-header">
                          <span className="chat-user-name">Alex Martinez</span>
                          <span className="chat-message-time">2:39 PM</span>
                        </div>
                        <div className="chat-message-bubble">I can handle all design & frontend. You doing backend?</div>
                      </div>
                    </div>
                  </div>

                  <div className="chat-input-bar">
                    <input type="text" placeholder="Type a message..." className="chat-text-input" readOnly />
                    <button className="chat-send-button">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="feature-card-text">
                <h3>Team Chat & Collaboration</h3>
                <p>Connect with matches and plan your startup together</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="testimonials-bg">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/a2abe0642bbe851e74263ac6d52914d6908fcd4a?width=1366" alt="Stars" className="stars-overlay" />
        </div>
        <div className="testimonial-content" key={activeTestimonial}>
          <blockquote className="testimonial-quote">
            <p>"{testimonials[activeTestimonial].quote}"</p>
            {testimonials[activeTestimonial].showStars && (
              <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700"/>
                  </svg>
                ))}
              </div>
            )}
          </blockquote>
          <div className="testimonial-author">
            <img src={testimonials[activeTestimonial].avatar} alt={testimonials[activeTestimonial].author} className="author-avatar" />
            <div className="author-info">
              <div className="author-name">{testimonials[activeTestimonial].author}</div>
              <div className="author-title">{testimonials[activeTestimonial].title}</div>
            </div>
          </div>
        </div>
        <div className="testimonial-logos">
          <button
            className={`logo-grid-item ${activeTestimonial === 0 ? 'active' : ''}`}
            onClick={() => setActiveTestimonial(0)}
          >
            <svg width="34" height="30" viewBox="0 0 34 30" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M32.8561 13.5585C33.2434 14.2291 33.2434 15.0554 32.8561 15.7261L25.6534 28.2008C25.2661 28.8714 24.5505 29.2846 23.776 29.2846H9.37056C8.59609 29.2846 7.88044 28.8714 7.49313 28.2008L0.290482 15.7261C-0.0968273 15.0554 -0.0968273 14.2291 0.290482 13.5585L7.49313 1.08381C7.88044 0.413149 8.59609 0 9.37056 0H23.776C24.5505 0 25.2661 0.413149 25.6534 1.08381L32.8561 13.5585ZM26.4983 9.3054C26.7879 9.23633 27.0321 9.52737 26.9137 9.80049L24.9262 14.3853C24.8194 14.6318 24.4906 14.6797 24.3179 14.4739L23.5796 13.594L18.9748 17.6203C18.5256 18.013 17.8436 17.969 17.4488 17.5219L14.3969 14.0656L10.8868 17.121C10.9299 17.2974 10.9527 17.4818 10.9527 17.6716C10.9527 18.9484 9.91753 19.9837 8.64042 19.9837C7.36345 19.9837 6.32812 18.9484 6.32812 17.6716C6.32812 16.3945 7.36345 15.3594 8.64042 15.3594C8.92309 15.3594 9.19392 15.41 9.44423 15.5029L13.7854 11.724C14.2346 11.333 14.9153 11.3777 15.3095 11.8242L18.3598 15.2785L22.1858 11.9331L21.4449 11.0501C21.2722 10.8444 21.3764 10.5288 21.6377 10.4665L26.4983 9.3054Z" fill="white"/>
            </svg>
          </button>
          <button
            className={`logo-grid-item ${activeTestimonial === 1 ? 'active' : ''}`}
            onClick={() => setActiveTestimonial(1)}
          >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M9.99037 28.7841C9.9909 28.9517 10.0259 29.1174 10.0933 29.2709C10.1607 29.4244 10.259 29.5623 10.382 29.6761C10.5051 29.7898 10.6502 29.877 10.8085 29.9321C10.9667 29.9873 11.1346 30.0091 11.3016 29.9964C17.6519 29.5418 23.6496 25.0477 25.5643 18.0284C25.665 17.6247 25.9679 17.4222 26.3714 17.4222C26.5783 17.4306 26.7736 17.5201 26.9149 17.6715C27.0563 17.8228 27.1323 18.0238 27.1265 18.2309C27.1265 19.796 25.1146 23.8864 22.2377 26.2601C22.0911 26.3834 21.9742 26.5383 21.8958 26.7131C21.8172 26.888 21.7792 27.0783 21.7845 27.2699C21.7874 27.4257 21.8211 27.5794 21.8835 27.7221C21.9459 27.8649 22.0358 27.9939 22.1482 28.1018C22.2606 28.2097 22.3931 28.2943 22.5382 28.3509C22.6834 28.4075 22.8383 28.4347 22.994 28.4313C23.246 28.4313 23.6495 28.2798 24.1537 27.8252C26.1656 26.0067 29.9999 20.9065 29.9999 15.3007C29.9999 7.08206 23.646 0 14.7786 0C6.86613 0 0.0117188 6.46407 0.0117188 13.9381C0.0117188 18.8867 3.94306 22.6231 9.13356 22.6231C13.1158 22.6231 16.7951 19.796 17.8034 15.9068C17.904 15.5031 18.2058 15.3007 18.6093 15.3007C18.8163 15.309 19.0117 15.3986 19.1532 15.5499C19.2947 15.7012 19.371 15.9021 19.3656 16.1093C19.3656 17.8769 16.0389 24.0414 9.28509 24.0414C7.67206 24.0414 5.65668 23.5868 4.24482 22.7782C4.05583 22.6866 3.84995 22.635 3.64013 22.6267C3.47942 22.6205 3.31919 22.6477 3.16949 22.7064C3.01978 22.7652 2.8839 22.8543 2.77032 22.9682C2.65673 23.082 2.56791 23.2182 2.50944 23.368C2.45097 23.5179 2.42415 23.6782 2.43062 23.839C2.43715 24.0449 2.49615 24.2457 2.60197 24.4225C2.70779 24.5992 2.85696 24.7459 3.03537 24.8489C4.90046 25.9144 7.11818 26.4648 9.38568 26.4648C15.0306 26.4648 20.1715 22.6267 21.6839 16.9712C21.7845 16.5675 22.0875 16.365 22.4898 16.365C22.6968 16.3734 22.8922 16.4628 23.0337 16.6142C23.1752 16.7655 23.2515 16.9665 23.246 17.1736C23.246 19.4964 19.1135 26.9704 11.1502 27.5765C10.8421 27.5994 10.5532 27.7353 10.3392 27.9582C10.1251 28.1811 10.0009 28.4752 9.99037 28.7841Z" fill="#4B4B4C"/>
            </svg>
          </button>
          <button
            className={`logo-grid-item ${activeTestimonial === 2 ? 'active' : ''}`}
            onClick={() => setActiveTestimonial(2)}
          >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.90164 0H24.0984C27.3577 0 30 2.64225 30 5.90164V24.0984C30 27.3577 27.3577 30 24.0984 30H5.90164C2.64225 30 0 27.3577 0 24.0984V5.90164C0 2.64225 2.64225 0 5.90164 0ZM14.0714 9.13568C14.3682 8.7388 14.9993 8.9487 14.9993 9.44424V16.5168H9.58067C9.15639 16.5168 8.91393 16.0327 9.16799 15.6929L14.0714 9.13568ZM15.9287 20.6012C15.6317 20.9981 15 20.7882 15 20.2927V13.2202H20.4234C20.848 13.2202 21.0907 13.7042 20.8363 14.044L15.9287 20.6012Z" fill="#4B4B4C"/>
            </svg>
          </button>
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
              <span>Perfect for exploring</span>
              <span>DevMates and finding</span>
              <span>your first co-founder.</span>
            </p>
            <a href="/waitlist?plan=free" className="btn-plan">Join Now</a>
            <ul className="plan-features">
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Create Your Profile</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Browse 10 Matches Daily</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Send 5 Messages</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>1 Profile Boost A Month</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Access Public Founder Forum</span>
              </li>
            </ul>
            <p className="pricing-fine-print"></p>
          </div>

          {/* Pro Plan */}
          <div className="pricing-card pro-card">
            <div className="most-popular-badge">Most Popular</div>
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
            <div className="plan-price">$20</div>
            <p className="plan-description">
              <span>Unlimited matches and</span>
              <span>premium features to</span>
              <span>find your ideal co-founders.</span>
            </p>
            <a href="/waitlist?plan=pro" className="btn-plan btn-plan-primary">Join Now</a>
            <ul className="plan-features">
              <li>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M17.5 11.6837L12.25 17.7948L9.91666 15.5725M24.5 14.4614C24.5 19.9842 19.7989 24.4614 14 24.4614C8.201 24.4614 3.5 19.9842 3.5 14.4614C3.5 8.93859 8.201 4.46143 14 4.46143C19.7989 4.46143 24.5 8.93859 24.5 14.4614Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Unlimited Matches</span>
              </li>
              <li>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M17.5 11.6837L12.25 17.7948L9.91666 15.5725M24.5 14.4614C24.5 19.9842 19.7989 24.4614 14 24.4614C8.201 24.4614 3.5 19.9842 3.5 14.4614C3.5 8.93859 8.201 4.46143 14 4.46143C19.7989 4.46143 24.5 8.93859 24.5 14.4614Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Unlimited Messages</span>
              </li>
              <li>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M17.5 11.6837L12.25 17.7948L9.91666 15.5725M24.5 14.4614C24.5 19.9842 19.7989 24.4614 14 24.4614C8.201 24.4614 3.5 19.9842 3.5 14.4614C3.5 8.93859 8.201 4.46143 14 4.46143C19.7989 4.46143 24.5 8.93859 24.5 14.4614Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Enhanced Data Visibility</span>
              </li>
              <li>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M17.5 11.6837L12.25 17.7948L9.91666 15.5725M24.5 14.4614C24.5 19.9842 19.7989 24.4614 14 24.4614C8.201 24.4614 3.5 19.9842 3.5 14.4614C3.5 8.93859 8.201 4.46143 14 4.46143C19.7989 4.46143 24.5 8.93859 24.5 14.4614Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>10 Profile Boosts A Month</span>
              </li>
              <li>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M17.5 11.6837L12.25 17.7948L9.91666 15.5725M24.5 14.4614C24.5 19.9842 19.7989 24.4614 14 24.4614C8.201 24.4614 3.5 19.9842 3.5 14.4614C3.5 8.93859 8.201 4.46143 14 4.46143C19.7989 4.46143 24.5 8.93859 24.5 14.4614Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Verified Founder Badge</span>
              </li>
              <li>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M17.5 11.6837L12.25 17.7948L9.91666 15.5725M24.5 14.4614C24.5 19.9842 19.7989 24.4614 14 24.4614C8.201 24.4614 3.5 19.9842 3.5 14.4614C3.5 8.93859 8.201 4.46143 14 4.46143C19.7989 4.46143 24.5 8.93859 24.5 14.4614Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Early Access to New Features</span>
              </li>
            </ul>
          </div>

          {/* Premium Plan */}
          <div className="pricing-card enterprise-card">
            <div className="plan-badge enterprise-badge">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                <circle cx="10.5" cy="10.5" r="10" fill="url(#enterprise-gradient)" stroke="url(#enterprise-stroke)"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M4.17285 6.17285C4.17285 5.06828 5.06828 4.17285 6.17285 4.17285H14.1729C15.2774 4.17285 16.1729 5.06828 16.1729 6.17285V14.1728C16.1729 15.2774 15.2774 16.1728 14.1729 16.1728H6.17285C5.06828 16.1728 4.17285 15.2774 4.17285 14.1728V6.17285ZM5.50618 6.17285C5.50618 5.80466 5.80466 5.50618 6.17285 5.50618H6.83952V6.83952C6.83952 7.20771 6.54104 7.50618 6.17285 7.50618C5.80466 7.50618 5.50618 7.20771 5.50618 6.83952V6.17285ZM8.83952 7.50618C8.47133 7.50618 8.17285 7.20771 8.17285 6.83952V5.50618H9.50619V6.83952C9.50619 7.20771 9.20771 7.50618 8.83952 7.50618ZM11.5062 7.50618C11.138 7.50618 10.8395 7.20771 10.8395 6.83952V5.50618H12.1729V6.83952C12.1729 7.20771 11.8744 7.50618 11.5062 7.50618ZM14.1729 7.50618C13.8047 7.50618 13.5062 7.20771 13.5062 6.83952V5.50618H14.1729C14.541 5.50618 14.8395 5.80466 14.8395 6.17285V6.83952C14.8395 7.20771 14.541 7.50618 14.1729 7.50618ZM8.83952 12.8395C8.83952 12.4713 9.138 12.1729 9.50619 12.1729H10.8395C11.2077 12.1729 11.5062 12.4713 11.5062 12.8395V14.8395H12.8395V12.8395C12.8395 11.7349 11.9441 10.8395 10.8395 10.8395H9.50619C8.40162 10.8395 7.50619 11.7349 7.50619 12.8395V14.8395H8.83952V12.8395Z" fill="white"/>
                <defs>
                  <linearGradient id="enterprise-gradient" x1="10.3565" y1="0.165924" x2="10.0075" y2="20.1629">
                    <stop stopColor="#5E6AD2"/>
                    <stop offset="1" stopColor="#5790FF"/>
                  </linearGradient>
                  <radialGradient id="enterprise-stroke">
                    <stop stopColor="white" stopOpacity="0.48"/>
                    <stop offset="1" stopColor="white" stopOpacity="0.04"/>
                  </radialGradient>
                </defs>
              </svg>
              <span>Premium</span>
            </div>
            <div className="plan-price">$35</div>
            <p className="plan-description">
              <span>All premium features</span>
              <span>plus exclusive perks</span>
              <span>for serious founders.</span>
            </p>
            <a href="/waitlist?plan=premium" className="btn-plan">Join Now</a>
            <ul className="plan-features">
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Everything in Pro</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Super Like Profiles</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Passport to Any Location</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Rewind Last Swipe</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Startup Insights Dashboard</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Dedicated Founder Concierge</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Early Access to App</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Dedicated Support Add-on */}
        <div className="dedicated-support-card">
          <div className="support-content">
            <h3>Dedicated Support</h3>
            <p>
              <span>We are here to help you find your perfect co-founder with</span>
              <span>a dedicated support specialist who can assist with profile</span>
              <span>optimization, matching strategy, and team formation.</span>
            </p>
            <h4>What's included</h4>
            <ul className="support-features">
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Direct 1-on-1 Consultation</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Profile Optimization Review</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Matching Strategy Guidance</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Co-founder Team Formation Help</span>
              </li>
            </ul>
          </div>
          <div className="support-pricing">
            <div className="addon-badge">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9.5" fill="url(#addon-gradient)" stroke="url(#addon-stroke)"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M9.99995 6.19043C10.3506 6.19043 10.6349 6.4747 10.6349 6.82535V9.36503H13.1745C13.5252 9.36503 13.8095 9.64929 13.8095 9.99995C13.8095 10.3506 13.5252 10.6349 13.1745 10.6349H10.6349V13.1745C10.6349 13.5252 10.3506 13.8095 9.99995 13.8095C9.64929 13.8095 9.36503 13.5252 9.36503 13.1745V10.6349H6.82535C6.4747 10.6349 6.19043 10.3506 6.19043 9.99995C6.19043 9.64929 6.4747 9.36503 6.82535 9.36503H9.36503V6.82535C9.36503 6.4747 9.64929 6.19043 9.99995 6.19043Z" fill="white"/>
                <defs>
                  <linearGradient id="addon-gradient" x1="10.1748" y1="0.469592" x2="9.84232" y2="19.5143">
                    <stop stopColor="#B097F8"/>
                    <stop offset="1" stopColor="#7A58DD"/>
                  </linearGradient>
                  <radialGradient id="addon-stroke">
                    <stop stopColor="white" stopOpacity="0.48"/>
                    <stop offset="1" stopColor="white" stopOpacity="0.04"/>
                  </radialGradient>
                </defs>
              </svg>
              <span>Add On</span>
            </div>
            <div className="addon-price">
              <div className="price">$250</div>
              <div className="price-period">one-time</div>
            </div>
            <a href="#contact" className="btn-addon">Request Access</a>
            <p className="addon-note">No long term contract obligation.</p>
          </div>
        </div>
      </section>

      <Footer />

      {/* Waitlist Popup Overlay */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup} aria-label="Close popup">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="popup-header">
              <h2 className="popup-title">Find Your Co-Founder</h2>
              <p className="popup-subtitle">Connect with verified builders ready to launch</p>
            </div>

            <div className="popup-benefits">
              <div className="popup-benefit">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.6 7.45833L8.35 15.7083L3.5 10.8583" stroke="#09F785" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Verified technical co-founders</span>
              </div>
              <div className="popup-benefit">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.6 7.45833L8.35 15.7083L3.5 10.8583" stroke="#09F785" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Match with builders, not talkers</span>
              </div>
              <div className="popup-benefit">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.6 7.45833L8.35 15.7083L3.5 10.8583" stroke="#09F785" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Early access to beta launch</span>
              </div>
            </div>

            <a href="/waitlist" className="popup-cta">
              <span>Join the Waitlist</span>
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M8.69995 13.5999L12.3 9.9999L8.69995 6.3999" stroke="#09090A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <p className="popup-disclaimer">Get notified when we launch. No spam, ever.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
