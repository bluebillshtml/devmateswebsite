import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      {/* Background Elements */}
      <div className="privacy-bg">
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
      <nav className="privacy-nav">
        <div className="nav-container">
          <div className="nav-left">
            <a href="/" className="logo">
              <img src="/logo.png" alt="DevMates Logo" width="110" height="32" />
            </a>
          </div>
          <div className="nav-right">
            <a href="/" className="back-link">← Back to Home</a>
          </div>
        </div>
      </nav>

      {/* Privacy Content */}
      <div className="privacy-container">
        <div className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="privacy-content">
          <section className="privacy-section">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, update your profile, or communicate with us. This may include:
            </p>
            <ul>
              <li>Name, email address, and contact information</li>
              <li>Professional background, skills, and experience</li>
              <li>Profile photos and portfolio information</li>
              <li>Communication preferences and settings</li>
              <li>Payment information for premium features</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, including:
            </p>
            <ul>
              <li>Facilitating connections between co-founders and team members</li>
              <li>Matching users based on skills, interests, and goals</li>
              <li>Providing customer support and responding to inquiries</li>
              <li>Sending important updates about our service</li>
              <li>Processing payments for premium features</li>
              <li>Analyzing usage patterns to improve our platform</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
            </p>
            <ul>
              <li>With other users when you choose to connect or share your profile</li>
              <li>With service providers who assist us in operating our platform</li>
              <li>When required by law or to protect our rights and safety</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
            </p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and assessments</li>
              <li>Access controls and authentication systems</li>
              <li>Employee training on data protection practices</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>5. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance your experience on our platform. These help us:
            </p>
            <ul>
              <li>Remember your preferences and settings</li>
              <li>Analyze how you use our service</li>
              <li>Provide personalized content and recommendations</li>
              <li>Improve our platform's performance and functionality</li>
            </ul>
            <p>
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="privacy-section">
            <h2>6. Your Rights and Choices</h2>
            <p>
              You have certain rights regarding your personal information:
            </p>
            <ul>
              <li>Access and review your personal data</li>
              <li>Update or correct inaccurate information</li>
              <li>Delete your account and associated data</li>
              <li>Opt out of marketing communications</li>
              <li>Request data portability</li>
              <li>Object to certain processing activities</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>7. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. When you delete your account, we will remove your personal information from our active systems, though some information may be retained for legal or business purposes.
            </p>
          </section>

          <section className="privacy-section">
            <h2>8. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during such transfers, including standard contractual clauses and adequacy decisions.
            </p>
          </section>

          <section className="privacy-section">
            <h2>9. Children's Privacy</h2>
            <p>
              Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
            </p>
          </section>

          <section className="privacy-section">
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our service after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="privacy-section">
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
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

export default PrivacyPolicy;
