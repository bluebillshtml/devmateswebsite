import React, { useState, useEffect } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);

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

  const headerClass = `header ${scrolled ? 'scrolled' : ''}`;

  return (
    <div className="landing-page">
      {/* Header */}
      <header className={headerClass}>
        <nav className="nav-container">
          <div className="nav-content">
            <div className="nav-left">
              <div className="nav-links">
                <a href="#features" className="nav-link">Features</a>
                <a href="#pricing" className="nav-link">Pricing</a>
                <a href="#docs" className="nav-link">Docs</a>
                <a href="#blog" className="nav-link">Blog</a>
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
        <div className="hero-content">
          <div className="beta-badge">
            <img src="/logo.png" alt="DevMates Logo" className="beta-logo" />
            <span className="beta-text">is currently in development</span>
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path d="M8.69995 13.5999L12.3 9.9999L8.69995 6.3999" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="hero-title">
            <span className="title-line">Find your perfect team,</span>
            <span className="title-line">not freelancers.</span>
          </h1>
          <p className="hero-description">
            <span>DevMates connects builders who share goals, skills, and vision</span>
            <span>to form genuine startup teams — not just hire contractors.</span>
          </p>
          <a href="#signup" className="btn-get-started">
            <span>Get Started</span>
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path d="M8.69995 13.5999L12.3 9.9999L8.69995 6.3999" stroke="#09090A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        <div className="hero-phones">
          {/* Phone Mockup 1 - Profile Screen */}
          <div className="phone-mockup phone-1">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="screen-header">
                  <div className="header-avatar">DM</div>
                  <div className="header-title">Profile</div>
                  <div className="header-action">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="5" r="1.5" fill="#fff"/>
                      <circle cx="10" cy="10" r="1.5" fill="#fff"/>
                      <circle cx="10" cy="15" r="1.5" fill="#fff"/>
                    </svg>
                  </div>
                </div>
                <div className="screen-content">
                  <div className="profile-image"></div>
                  <div className="profile-name">Sarah Chen</div>
                  <div className="profile-title">Full-Stack Developer</div>
                  <div className="profile-tags">
                    <span className="tag">React</span>
                    <span className="tag">Node.js</span>
                    <span className="tag">TypeScript</span>
                  </div>
                  <div className="profile-bio">
                    <div className="bio-text">Building the future, one startup at a time. Looking for co-founders to create something amazing.</div>
                  </div>
                  <div className="profile-stats">
                    <div className="stat">
                      <div className="stat-value">12</div>
                      <div className="stat-label">Projects</div>
                    </div>
                    <div className="stat">
                      <div className="stat-value">4.8</div>
                      <div className="stat-label">Rating</div>
                    </div>
                    <div className="stat">
                      <div className="stat-value">156</div>
                      <div className="stat-label">Matches</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Mockup 2 - Swipe Screen */}
          <div className="phone-mockup phone-2">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="screen-header">
                  <div className="header-logo">DevMates</div>
                  <div className="header-filter">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M3 6h14M6 10h8M8 14h4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <div className="swipe-card">
                  <div className="card-image"></div>
                  <div className="card-content">
                    <div className="card-name">Alex Rodriguez</div>
                    <div className="card-role">UI/UX Designer • 3 years</div>
                    <div className="card-tags">
                      <span className="tag">Figma</span>
                      <span className="tag">Product Design</span>
                    </div>
                    <div className="card-bio">Passionate about creating delightful user experiences for early-stage startups.</div>
                  </div>
                  <div className="card-actions">
                    <button className="action-btn reject">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 18L18 6M6 6l12 12" stroke="#ff4458" strokeWidth="2.5" strokeLinecap="round"/>
                      </svg>
                    </button>
                    <button className="action-btn like">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="#00d25b" stroke="#00d25b" strokeWidth="1.5"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Mockup 3 - Chat Screen */}
          <div className="phone-mockup phone-3">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="screen-header">
                  <div className="back-btn">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M12 16L6 10l6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="chat-avatar"></div>
                  <div className="chat-name">Jamie Lee</div>
                </div>
                <div className="chat-messages">
                  <div className="message received">
                    <div className="message-bubble">Hey! Love your portfolio. Want to collaborate on a project?</div>
                    <div className="message-time">2:45 PM</div>
                  </div>
                  <div className="message sent">
                    <div className="message-bubble">Absolutely! I've been looking for a designer to team up with.</div>
                    <div className="message-time">2:47 PM</div>
                  </div>
                  <div className="message received">
                    <div className="message-bubble">Perfect! Let's schedule a call this week?</div>
                    <div className="message-time">2:48 PM</div>
                  </div>
                </div>
                <div className="chat-input">
                  <input type="text" placeholder="Type a message..." />
                  <button className="send-btn">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M18 2L9 11M18 2l-6 16-3-7-7-3 16-6z" fill="#fff"/>
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
        <div className="logo-cloud-title">
          <h2>Used by teams at Statsig, Deno,</h2>
          <h2>Dagster, Evidence and more.</h2>
        </div>
        <div className="logo-cloud-grid">
          <div className="logo-item">
            <div className="company-logo">
              <div className="logo-icon">M</div>
              <span className="company-name">STATSIG</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="company-logo">
              <div className="logo-icon">D</div>
              <span className="company-name">Deno</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="company-logo">
              <div className="logo-icon">M</div>
              <span className="company-name">Modal</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="company-logo">
              <div className="logo-icon">⚡</div>
              <span className="company-name">hyper</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="company-logo">
              <div className="logo-icon">E</div>
              <span className="company-name">evidence</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="company-logo">
              <div className="logo-icon">D</div>
              <span className="company-name">dagster</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="company-logo">
              <div className="logo-icon">💼</div>
              <span className="company-name">case status</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="company-logo">
              <div className="logo-icon">D</div>
              <span className="company-name">DIG SOUTH</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-bg"></div>
        <div className="features-glow-orbs">
          <div className="glow-orb-green" style={{top: '20%', left: '15%'}}></div>
          <div className="glow-orb-purple" style={{top: '60%', right: '20%'}}></div>
          <div className="glow-orb-blue" style={{top: '40%', left: '70%'}}></div>
        </div>
        <div className="features-image">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/525f92b823587c4060fabcdd2d4b539d36414a56?width=1900" alt="Features" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="testimonials-bg">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/a2abe0642bbe851e74263ac6d52914d6908fcd4a?width=1366" alt="Stars" className="stars-overlay" />
        </div>
        <div className="testimonial-content">
          <blockquote className="testimonial-quote">
            <p>"DevMates has become an essential</p>
            <p>platform for our team to connect,</p>
            <p>collaborate, and build new ventures. It</p>
            <p>streamlines the process of finding</p>
            <p>like-minded creators, making it a core</p>
            <p>part of how we form and scale our projects."</p>
          </blockquote>
          <div className="testimonial-author">
            <img src="/levi.jpg" alt="Levi Carpenter" className="author-avatar" />
            <div className="author-info">
              <div className="author-name">Levi Carpenter</div>
              <div className="author-title">CEO of Devmates</div>
            </div>
          </div>
        </div>
        <div className="testimonial-logos">
          <div className="logo-grid-item">
            <svg width="34" height="30" viewBox="0 0 34 30" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M32.8561 13.5585C33.2434 14.2291 33.2434 15.0554 32.8561 15.7261L25.6534 28.2008C25.2661 28.8714 24.5505 29.2846 23.776 29.2846H9.37056C8.59609 29.2846 7.88044 28.8714 7.49313 28.2008L0.290482 15.7261C-0.0968273 15.0554 -0.0968273 14.2291 0.290482 13.5585L7.49313 1.08381C7.88044 0.413149 8.59609 0 9.37056 0H23.776C24.5505 0 25.2661 0.413149 25.6534 1.08381L32.8561 13.5585ZM26.4983 9.3054C26.7879 9.23633 27.0321 9.52737 26.9137 9.80049L24.9262 14.3853C24.8194 14.6318 24.4906 14.6797 24.3179 14.4739L23.5796 13.594L18.9748 17.6203C18.5256 18.013 17.8436 17.969 17.4488 17.5219L14.3969 14.0656L10.8868 17.121C10.9299 17.2974 10.9527 17.4818 10.9527 17.6716C10.9527 18.9484 9.91753 19.9837 8.64042 19.9837C7.36345 19.9837 6.32812 18.9484 6.32812 17.6716C6.32812 16.3945 7.36345 15.3594 8.64042 15.3594C8.92309 15.3594 9.19392 15.41 9.44423 15.5029L13.7854 11.724C14.2346 11.333 14.9153 11.3777 15.3095 11.8242L18.3598 15.2785L22.1858 11.9331L21.4449 11.0501C21.2722 10.8444 21.3764 10.5288 21.6377 10.4665L26.4983 9.3054Z" fill="white"/>
            </svg>
          </div>
          <div className="logo-grid-item">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M9.99037 28.7841C9.9909 28.9517 10.0259 29.1174 10.0933 29.2709C10.1607 29.4244 10.259 29.5623 10.382 29.6761C10.5051 29.7898 10.6502 29.877 10.8085 29.9321C10.9667 29.9873 11.1346 30.0091 11.3016 29.9964C17.6519 29.5418 23.6496 25.0477 25.5643 18.0284C25.665 17.6247 25.9679 17.4222 26.3714 17.4222C26.5783 17.4306 26.7736 17.5201 26.9149 17.6715C27.0563 17.8228 27.1323 18.0238 27.1265 18.2309C27.1265 19.796 25.1146 23.8864 22.2377 26.2601C22.0911 26.3834 21.9742 26.5383 21.8958 26.7131C21.8172 26.888 21.7792 27.0783 21.7845 27.2699C21.7874 27.4257 21.8211 27.5794 21.8835 27.7221C21.9459 27.8649 22.0358 27.9939 22.1482 28.1018C22.2606 28.2097 22.3931 28.2943 22.5382 28.3509C22.6834 28.4075 22.8383 28.4347 22.994 28.4313C23.246 28.4313 23.6495 28.2798 24.1537 27.8252C26.1656 26.0067 29.9999 20.9065 29.9999 15.3007C29.9999 7.08206 23.646 0 14.7786 0C6.86613 0 0.0117188 6.46407 0.0117188 13.9381C0.0117188 18.8867 3.94306 22.6231 9.13356 22.6231C13.1158 22.6231 16.7951 19.796 17.8034 15.9068C17.904 15.5031 18.2058 15.3007 18.6093 15.3007C18.8163 15.309 19.0117 15.3986 19.1532 15.5499C19.2947 15.7012 19.371 15.9021 19.3656 16.1093C19.3656 17.8769 16.0389 24.0414 9.28509 24.0414C7.67206 24.0414 5.65668 23.5868 4.24482 22.7782C4.05583 22.6866 3.84995 22.635 3.64013 22.6267C3.47942 22.6205 3.31919 22.6477 3.16949 22.7064C3.01978 22.7652 2.8839 22.8543 2.77032 22.9682C2.65673 23.082 2.56791 23.2182 2.50944 23.368C2.45097 23.5179 2.42415 23.6782 2.43062 23.839C2.43715 24.0449 2.49615 24.2457 2.60197 24.4225C2.70779 24.5992 2.85696 24.7459 3.03537 24.8489C4.90046 25.9144 7.11818 26.4648 9.38568 26.4648C15.0306 26.4648 20.1715 22.6267 21.6839 16.9712C21.7845 16.5675 22.0875 16.365 22.4898 16.365C22.6968 16.3734 22.8922 16.4628 23.0337 16.6142C23.1752 16.7655 23.2515 16.9665 23.246 17.1736C23.246 19.4964 19.1135 26.9704 11.1502 27.5765C10.8421 27.5994 10.5532 27.7353 10.3392 27.9582C10.1251 28.1811 10.0009 28.4752 9.99037 28.7841Z" fill="#4B4B4C"/>
            </svg>
          </div>
          <div className="logo-grid-item">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.90164 0H24.0984C27.3577 0 30 2.64225 30 5.90164V24.0984C30 27.3577 27.3577 30 24.0984 30H5.90164C2.64225 30 0 27.3577 0 24.0984V5.90164C0 2.64225 2.64225 0 5.90164 0ZM14.0714 9.13568C14.3682 8.7388 14.9993 8.9487 14.9993 9.44424V16.5168H9.58067C9.15639 16.5168 8.91393 16.0327 9.16799 15.6929L14.0714 9.13568ZM15.9287 20.6012C15.6317 20.9981 15 20.7882 15 20.2927V13.2202H20.4234C20.848 13.2202 21.0907 13.7042 20.8363 14.044L15.9287 20.6012Z" fill="#4B4B4C"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section" id="pricing">
        <div className="pricing-bg">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/359475067136313faab3161b0d924bbc1eb6fda9?width=2850" alt="Stars" className="pricing-stars" />
        </div>
        <div className="pricing-header">
          <h2>A plan for every need.</h2>
          <p>Whether you are just starting or require massive scale, we have a solution.</p>
        </div>
        <div className="pricing-cards">
          {/* Hobby Plan */}
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
              <span>Hobby</span>
            </div>
            <div className="plan-price">$0</div>
            <p className="plan-description">
              <span>Great for personal use or</span>
              <span>a first step to explore</span>
              <span>the Scout platform.</span>
            </p>
            <a href="#signup" className="btn-plan">Sign Up</a>
            <ul className="plan-features">
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>100 Interactions (GPT-3.5 Only)</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Deploy 1 App</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Connect 1 Collection</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>10GB of Storage</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Community Support (Discord)</span>
              </li>
            </ul>
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
            <div className="plan-price">$50</div>
            <p className="plan-description">
              <span>Perfect for building and</span>
              <span>scaling models with</span>
              <span>limited context.</span>
            </p>
            <a href="#signup" className="btn-plan btn-plan-primary">Sign Up</a>
            <ul className="plan-features">
              <li>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M17.5 11.6837L12.25 17.7948L9.91666 15.5725M24.5 14.4614C24.5 19.9842 19.7989 24.4614 14 24.4614C8.201 24.4614 3.5 19.9842 3.5 14.4614C3.5 8.93859 8.201 4.46143 14 4.46143C19.7989 4.46143 24.5 8.93859 24.5 14.4614Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Unlimited Interactions</span>
              </li>
              <li>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M17.5 11.6837L12.25 17.7948L9.91666 15.5725M24.5 14.4614C24.5 19.9842 19.7989 24.4614 14 24.4614C8.201 24.4614 3.5 19.9842 3.5 14.4614C3.5 8.93859 8.201 4.46143 14 4.46143C19.7989 4.46143 24.5 8.93859 24.5 14.4614Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>$0.09 per Interaction</span>
              </li>
              <li>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M17.5 11.6837L12.25 17.7948L9.91666 15.5725M24.5 14.4614C24.5 19.9842 19.7989 24.4614 14 24.4614C8.201 24.4614 3.5 19.9842 3.5 14.4614C3.5 8.93859 8.201 4.46143 14 4.46143C19.7989 4.46143 24.5 8.93859 24.5 14.4614Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Deploy 10 Apps</span>
              </li>
              <li>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M17.5 11.6837L12.25 17.7948L9.91666 15.5725M24.5 14.4614C24.5 19.9842 19.7989 24.4614 14 24.4614C8.201 24.4614 3.5 19.9842 3.5 14.4614C3.5 8.93859 8.201 4.46143 14 4.46143C19.7989 4.46143 24.5 8.93859 24.5 14.4614Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Connect 10 Collections</span>
              </li>
              <li>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M17.5 11.6837L12.25 17.7948L9.91666 15.5725M24.5 14.4614C24.5 19.9842 19.7989 24.4614 14 24.4614C8.201 24.4614 3.5 19.9842 3.5 14.4614C3.5 8.93859 8.201 4.46143 14 4.46143C19.7989 4.46143 24.5 8.93859 24.5 14.4614Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>1TB of Storage</span>
              </li>
              <li>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M17.5 11.6837L12.25 17.7948L9.91666 15.5725M24.5 14.4614C24.5 19.9842 19.7989 24.4614 14 24.4614C8.201 24.4614 3.5 19.9842 3.5 14.4614C3.5 8.93859 8.201 4.46143 14 4.46143C19.7989 4.46143 24.5 8.93859 24.5 14.4614Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Community & Email Support</span>
              </li>
            </ul>
          </div>

          {/* Enterprise Plan */}
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
              <span>Enterprise</span>
            </div>
            <div className="plan-price">Custom</div>
            <p className="plan-description">
              <span>For large scale models</span>
              <span>with large and ever-</span>
              <span>changing context.</span>
            </p>
            <a href="#contact" className="btn-plan">Request Access</a>
            <ul className="plan-features">
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Unlimited Interactions</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Custom Interaction Pricing</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Unlimited Apps</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Unlimited Collections</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Unlimited Storage</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Dedicated Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Dedicated Support Add-on */}
        <div className="dedicated-support-card">
          <div className="support-content">
            <h3>Dedicated Support</h3>
            <p>
              <span>We are here to help get you started with a dedicated</span>
              <span>support engineer who can assist with scoping your first</span>
              <span>models and getting them deployed.</span>
            </p>
            <h4>What's included</h4>
            <ul className="support-features">
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Shared Slack Channel</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Dedicated Support Engineer</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Prompt Engineering Guidance</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10.0147L10.5 15.2528L8.5 13.348M21 12.3957C21 17.1295 16.9705 20.9671 12 20.9671C7.02943 20.9671 3 17.1295 3 12.3957C3 7.66178 7.02943 3.82422 12 3.82422C16.9705 3.82422 21 7.66178 21 12.3957Z" stroke="#434343" strokeWidth="1.5"/>
                </svg>
                <span>Context Sourcing Guidance</span>
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
              <div className="price">$750</div>
              <div className="price-period">monthly</div>
            </div>
            <a href="#contact" className="btn-addon">Request Access</a>
            <p className="addon-note">No long term contract obligation.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img className="footer-logo" src="/logo.png" alt="Scout Logo" width="110" height="20" />
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/4454fe22e3d3f4b1193821c7b2ae25596e01122b?width=674" alt="Scout illustration" className="footer-illustration" />
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Links</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#docs">Docs</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#slack">Slack Bot</a></li>
                <li><a href="#discord">Discord Bot</a></li>
                <li><a href="#command">Command</a></li>
                <li><a href="#chat">Onsite Chat</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2024 Scout. All rights reserved.</p>
          <div className="footer-social">
            <a href="#slack" aria-label="Slack">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5.04235 15.1662C5.04235 16.5538 3.9088 17.6874 2.52117 17.6874C1.13355 17.6874 0 16.5538 0 15.1662C0 13.7786 1.13355 12.645 2.52117 12.645H5.04235V15.1662Z" fill="white" fillOpacity="0.4"/>
                <path d="M6.31274 15.1662C6.31274 13.7786 7.44629 12.645 8.83392 12.645C10.2215 12.645 11.3551 13.7786 11.3551 15.1662V21.4789C11.3551 22.8665 10.2215 24.0001 8.83392 24.0001C7.44629 24.0001 6.31274 22.8665 6.31274 21.4789V15.1662Z" fill="white" fillOpacity="0.4"/>
              </svg>
            </a>
            <a href="#twitter" aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18.8916 1H22.5542L14.5542 10.2048L24 22.6867H16.5783L10.7952 15.1205L4.14458 22.6867H0.481928L9.06024 12.8554L0 1H7.61446L12.8675 7.93976L18.8916 1ZM17.5904 20.4699H19.6145L6.50602 3.07229H4.28916L17.5904 20.4699Z" fill="white" fillOpacity="0.4"/>
              </svg>
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.4226 20.2213H16.8712V14.7144C16.8712 13.4012 16.8475 11.7107 15.0241 11.7107C13.1744 11.7107 12.8914 13.1415 12.8914 14.6188V20.2209H9.33991V8.89645H12.7493V10.4441H12.797C13.1382 9.86642 13.6313 9.39123 14.2237 9.06909C14.816 8.74696 15.4856 8.58994 16.1609 8.61476C19.7605 8.61476 20.4241 10.9591 20.4241 14.0089L20.4226 20.2213ZM5.33271 7.34847C4.92509 7.34854 4.5266 7.22893 4.18764 7.00476C3.84867 6.78059 3.58448 6.46193 3.42842 6.08908C3.27237 5.71623 3.23147 5.30593 3.31092 4.91007C3.39037 4.51421 3.5866 4.15056 3.87477 3.86512C4.16295 3.57968 4.53014 3.38526 4.92991 3.30645C5.32968 3.22764 5.74407 3.26798 6.12069 3.42236C6.4973 3.57675 6.81923 3.83825 7.04575 4.17379C7.27227 4.50933 7.39322 4.90385 7.39329 5.30745C7.39334 5.57544 7.34007 5.8408 7.23654 6.0884C7.13302 6.336 6.98126 6.56099 6.78992 6.75052C6.59858 6.94004 6.37139 7.0904 6.12137 7.19299C5.87134 7.29559 5.60336 7.34842 5.33271 7.34847ZM7.10843 20.2213H3.55329V8.89645H7.10843V20.2213ZM22.1932 0.0016169H1.7687C1.30512 -0.00356306 0.858404 0.173702 0.526757 0.49446C0.195109 0.815217 0.00565772 1.25322 0 1.71223V22.0195C0.00546408 22.4787 0.194804 22.917 0.526441 23.2381C0.858077 23.5592 1.30489 23.7368 1.7687 23.7319H22.1932C22.6579 23.7377 23.106 23.5606 23.4389 23.2395C23.7719 22.9184 23.9625 22.4796 23.9689 22.0195V1.71077C23.9623 1.25085 23.7715 0.812343 23.4386 0.491594C23.1056 0.170844 22.6577 -0.00591465 22.1932 0.000151116" fill="white" fillOpacity="0.4"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
