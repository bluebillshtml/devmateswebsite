import React from 'react';
import './RefundPolicy.css';

const RefundPolicy = () => {
  return (
    <div className="refund-policy-page">
      {/* Background Elements */}
      <div className="refund-policy-bg">
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

      {/* Refund Policy Content */}
      <div className="refund-policy-container">
        <div className="refund-policy-header">
          <h1>Refund Policy</h1>
          <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="refund-policy-content">
        <section className="policy-section">
          <h3>1. Refund Eligibility</h3>
          <p>
            DevMates offers a 30-day money-back guarantee for all paid subscription plans. If you're not completely satisfied with our service, you may request a full refund within 30 days of your initial payment.
          </p>
          <div className="highlight-box">
            <h4>✅ What's Covered:</h4>
            <ul>
              <li>Pro Plan ($20/month) - Full refund within 30 days</li>
              <li>Premium Plan ($35/month) - Full refund within 30 days</li>
              <li>Annual subscriptions - Prorated refund based on unused time</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h3>2. How to Request a Refund</h3>
          <p>To request a refund, please follow these steps:</p>
          <ol>
            <li><strong>Contact Support:</strong> Email us at support@devmatesapp.com or use the contact form in your account dashboard</li>
            <li><strong>Provide Details:</strong> Include your account email and reason for the refund request</li>
            <li><strong>Processing Time:</strong> We'll process your refund within 5-7 business days</li>
            <li><strong>Confirmation:</strong> You'll receive an email confirmation once the refund is processed</li>
          </ol>
        </section>

        <section className="policy-section">
          <h3>3. Refund Processing</h3>
          <div className="refund-timeline">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h4>Request Submitted</h4>
                <p>You submit your refund request through our support channels</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h4>Review Process</h4>
                <p>Our team reviews your request within 24 hours</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h4>Refund Processed</h4>
                <p>Refund is processed and returned to your original payment method</p>
              </div>
            </div>
          </div>
        </section>

        <section className="policy-section">
          <h3>4. Refund Methods</h3>
          <p>Refunds will be processed using the same payment method you used for the original purchase:</p>
          <ul>
            <li><strong>Credit/Debit Cards:</strong> Refunds appear on your statement within 5-7 business days</li>
            <li><strong>PayPal:</strong> Refunds are processed immediately to your PayPal account</li>
            <li><strong>Bank Transfers:</strong> May take 7-10 business days depending on your bank</li>
            <li><strong>Cryptocurrency:</strong> Refunds processed within 24-48 hours</li>
          </ul>
        </section>

        <section className="policy-section">
          <h3>5. Non-Refundable Items</h3>
          <div className="warning-box">
            <h4>⚠️ The following are not eligible for refunds:</h4>
            <ul>
              <li>Free tier accounts (no payment made)</li>
              <li>Refund requests made after 30 days</li>
              <li>Accounts terminated for Terms of Service violations</li>
              <li>Third-party integrations or add-ons purchased separately</li>
              <li>Custom development work or consulting services</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h3>6. Early User Benefits</h3>
          <p>
            Early users who joined our waitlist get special benefits even after refunds:
          </p>
          <div className="benefits-box">
            <h4>🎁 Early User Perks:</h4>
            <ul>
              <li>Lifetime discount on all future subscriptions</li>
              <li>Priority access to new features</li>
              <li>Exclusive early user community access</li>
              <li>Direct line to our founding team</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h3>7. Disputed Charges</h3>
          <p>
            If you dispute a charge with your bank or credit card company, please contact us first. We're committed to resolving any billing issues quickly and fairly. Chargebacks may result in account suspension.
          </p>
        </section>

        <section className="policy-section">
          <h3>8. Subscription Cancellation</h3>
          <p>
            You can cancel your subscription at any time from your account settings. Cancellation will take effect at the end of your current billing period, and you'll retain access until then.
          </p>
          <div className="info-box">
            <h4>💡 Pro Tip:</h4>
            <p>If you're unsure about continuing, consider pausing your subscription instead of canceling to maintain your early user benefits.</p>
          </div>
        </section>

        <section className="policy-section">
          <h3>9. Contact Information</h3>
          <p>
            For refund requests or billing questions, please contact us:
          </p>
          <ul>
            <li><strong>Email:</strong> support@devmatesapp.com</li>
            <li><strong>Billing Support:</strong> billing@devmatesapp.com</li>
            <li><strong>Response Time:</strong> Within 24 hours</li>
            <li><strong>Business Hours:</strong> Monday-Friday, 9 AM - 6 PM PST</li>
          </ul>
        </section>

        <section className="policy-section">
          <h3>10. Policy Updates</h3>
          <p>
            We may update this Refund Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. Continued use of our service after changes constitutes acceptance of the updated policy.
          </p>
        </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
