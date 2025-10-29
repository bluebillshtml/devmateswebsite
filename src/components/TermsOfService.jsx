import React from 'react';
import './TermsOfService.css';

const TermsOfService = () => {
  return (
    <div className="terms-page">
      {/* Background Elements */}
      <div className="terms-bg">
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

      {/* Terms Content */}
      <div className="terms-container">
        <div className="terms-header">
          <h1>Terms of Service</h1>
          <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="terms-content">
          <section className="terms-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using DevMates ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="terms-section">
            <h2>2. Description of Service</h2>
            <p>
              DevMates is a platform that connects builders, developers, designers, and entrepreneurs to form startup teams and find co-founders. The Service facilitates networking, profile creation, skill verification, and team formation for startup ventures.
            </p>
          </section>

          <section className="terms-section">
            <h2>3. User Accounts</h2>
            <p>
              To use certain features of the Service, you must register for an account. You agree to:
            </p>
            <ul>
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and update your account information to keep it accurate</li>
              <li>Maintain the security of your password and account</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>4. User Conduct</h2>
            <p>You agree not to use the Service to:</p>
            <ul>
              <li>Post false, misleading, or fraudulent information</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Spam or send unsolicited communications</li>
              <li>Attempt to gain unauthorized access to the Service</li>
              <li>Use the Service for any illegal or unauthorized purpose</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>5. Profile and Skill Verification</h2>
            <p>
              DevMates offers skill verification features to help users assess the capabilities of potential co-founders. While we strive for accuracy, we cannot guarantee the authenticity of all verified skills. Users are responsible for conducting their own due diligence when forming partnerships.
            </p>
          </section>

          <section className="terms-section">
            <h2>6. Privacy and Data</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices. By using the Service, you consent to the collection and use of information in accordance with our Privacy Policy.
            </p>
          </section>

          <section className="terms-section">
            <h2>7. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of DevMates and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks may not be used without our prior written consent.
            </p>
          </section>

          <section className="terms-section">
            <h2>8. Payment Terms</h2>
            <p>
              Some features of the Service require payment. By subscribing to paid features, you agree to:
            </p>
            <ul>
              <li>Pay all fees associated with your subscription</li>
              <li>Provide accurate billing information</li>
              <li>Authorize us to charge your payment method</li>
              <li>Understand that fees are non-refundable unless otherwise stated</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>9. Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section className="terms-section">
            <h2>10. Disclaimers</h2>
            <p>
              The Service is provided on an "AS IS" and "AS AVAILABLE" basis. DevMates makes no warranties, expressed or implied, and hereby disclaims all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
            </p>
          </section>

          <section className="terms-section">
            <h2>11. Limitation of Liability</h2>
            <p>
              In no event shall DevMates, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
            </p>
          </section>

          <section className="terms-section">
            <h2>12. Governing Law</h2>
            <p>
              These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section className="terms-section">
            <h2>13. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="terms-section">
            <h2>14. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <ul>
              <li>Email: legal@devmatesapp.com</li>
              <li>Address: DevMates Inc., 123 Startup Street, San Francisco, CA 94105</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
