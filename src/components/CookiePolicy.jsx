import React from 'react';
import './CookiePolicy.css';

const CookiePolicy = () => {
  return (
    <div className="cookie-policy-page">
      {/* Background Elements */}
      <div className="cookie-policy-bg">
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

      {/* Cookie Policy Content */}
      <div className="cookie-policy-container">
        <div className="cookie-policy-header">
          <h1>Cookie Policy</h1>
          <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="cookie-policy-content">
        <section className="policy-section">
          <h3>1. What Are Cookies?</h3>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
          </p>
        </section>

        <section className="policy-section">
          <h3>2. How We Use Cookies</h3>
          <p>DevMates uses cookies for several purposes:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
          </ul>
        </section>

        <section className="policy-section">
          <h3>3. Types of Cookies We Use</h3>
          
          <div className="cookie-type">
            <h4>Essential Cookies</h4>
            <p>These cookies are necessary for the website to function and cannot be switched off. They include:</p>
            <ul>
              <li>Authentication cookies to keep you logged in</li>
              <li>Security cookies to protect against fraud</li>
              <li>Load balancing cookies for website performance</li>
            </ul>
          </div>

          <div className="cookie-type">
            <h4>Analytics Cookies</h4>
            <p>We use analytics cookies to understand how our website is used:</p>
            <ul>
              <li>Google Analytics to track website usage</li>
              <li>Heat mapping tools to understand user behavior</li>
              <li>Performance monitoring cookies</li>
            </ul>
          </div>

          <div className="cookie-type">
            <h4>Preference Cookies</h4>
            <p>These cookies remember your choices and preferences:</p>
            <ul>
              <li>Language and region preferences</li>
              <li>Theme and display settings</li>
              <li>Notification preferences</li>
            </ul>
          </div>

          <div className="cookie-type">
            <h4>Marketing Cookies</h4>
            <p>Used to deliver relevant advertisements and measure their effectiveness:</p>
            <ul>
              <li>Social media tracking pixels</li>
              <li>Advertising network cookies</li>
              <li>Retargeting cookies</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h3>4. Third-Party Cookies</h3>
          <p>
            We may use third-party services that set their own cookies. These include:
          </p>
          <ul>
            <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
            <li><strong>Social Media Platforms:</strong> For social sharing and login functionality</li>
            <li><strong>Payment Processors:</strong> For secure payment processing</li>
            <li><strong>Customer Support:</strong> For live chat and support features</li>
          </ul>
        </section>

        <section className="policy-section">
          <h3>5. Managing Your Cookie Preferences</h3>
          <p>
            You can control and manage cookies in several ways:
          </p>
          <ul>
            <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies</li>
            <li><strong>Cookie Consent Banner:</strong> Use our cookie consent tool to manage preferences</li>
            <li><strong>Opt-Out Links:</strong> Use provided opt-out links for specific services</li>
          </ul>
          
          <div className="cookie-controls">
            <h4>Cookie Settings</h4>
            <div className="cookie-toggle">
              <label>
                <input type="checkbox" defaultChecked disabled />
                Essential Cookies (Required)
              </label>
              <p>These cookies are necessary for the website to function properly.</p>
            </div>
            
            <div className="cookie-toggle">
              <label>
                <input type="checkbox" defaultChecked />
                Analytics Cookies
              </label>
              <p>Help us understand how visitors use our website.</p>
            </div>
            
            <div className="cookie-toggle">
              <label>
                <input type="checkbox" defaultChecked />
                Preference Cookies
              </label>
              <p>Remember your settings and preferences.</p>
            </div>
            
            <div className="cookie-toggle">
              <label>
                <input type="checkbox" />
                Marketing Cookies
              </label>
              <p>Used to deliver relevant advertisements.</p>
            </div>
          </div>
        </section>

        <section className="policy-section">
          <h3>6. Updates to This Policy</h3>
          <p>
            We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="policy-section">
          <h3>7. Contact Us</h3>
          <p>
            If you have any questions about our use of cookies, please contact us at:
          </p>
          <ul>
            <li>Email: privacy@devmatesapp.com</li>
            <li>Address: DevMates Inc., 123 Startup Street, San Francisco, CA 94105</li>
          </ul>
        </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
