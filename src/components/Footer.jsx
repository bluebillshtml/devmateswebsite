import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-catalog-header">
            <h2 className="catalog-title">devmates</h2>
            <svg className="catalog-arrow" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.75 8.75L8.75 0.75M8.75 0.75L1.89286 0.750001M8.75 0.75V7.60714" stroke="#ECEEEC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="footer-nav-wrapper">
            <nav className="footer-nav">
              <div className="nav-item">
                <span className="nav-link">Home</span>
                <span className="nav-separator">/</span>
              </div>
              <div className="nav-item">
                <span className="nav-link">Special Offers</span>
                <span className="nav-separator">/</span>
              </div>
              <div className="nav-item">
                <span className="nav-link">Blog</span>
                <span className="nav-separator">/</span>
              </div>
              <div className="nav-item">
                <span className="nav-link">About Us</span>
                <span className="nav-separator">/</span>
              </div>
              <div className="nav-item">
                <span className="nav-link">Payment & Delivery</span>
                <span className="nav-separator">/</span>
              </div>
              <div className="nav-item">
                <span className="nav-link">Contacts</span>
              </div>
            </nav>

            <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="#3C403C"/>
                <path d="M22 29L22 15M22 15L16 21M22 15L28 21" stroke="#ECEEEC" strokeWidth="1.5"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="footer-right">
          <div className="contact-section">
            <p className="contact-label">Contact Us</p>
            <div className="phone-number">
              <span className="phone-paren">(</span>
              <span className="phone-text">+1 891 989-11-91</span>
              <span className="phone-paren">)</span>
            </div>
          </div>

          <div className="info-group">
            <div className="info-item">
              <p className="info-label">Location</p>
              <p className="info-text">2972 Westheimer Rd. Santa Ana,<br />Illinois 85486</p>
            </div>

            <div className="info-item">
              <p className="info-label">Email</p>
              <p className="info-text">hello@logoipsum.com</p>
            </div>
          </div>

          <div className="hours-section">
            <p className="info-label">Mo—Fr</p>
            <p className="hours-text">9am—6pm</p>
          </div>

          <p className="copyright">© 2023 — Copyright</p>
        </div>
      </div>

      <div className="footer-banner">
        <div className="banner-content">
          <div className="banner-text-wrapper">
            <p className="banner-text">Explore<br />our success</p>
            <div className="banner-line"></div>
          </div>
          <div className="banner-arrow-wrapper">
            <svg className="banner-arrow" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.00019 15.8493L15.8494 1.00007M15.8494 1.00007L3.12151 1.00007M15.8494 1.00007L15.8494 13.728" stroke="#ECEEEC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="banner-divider-top"></div>
            <div className="banner-divider-bottom"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
