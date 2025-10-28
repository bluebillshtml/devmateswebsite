import React from 'react';
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: "What is DevMates?",
      answer: "DevMates is a platform that connects builders, developers, designers, and entrepreneurs to form startup teams and find co-founders. We help you find the right people who share your goals, skills, and vision to build successful startups together."
    },
    {
      question: "How does the matching process work?",
      answer: "Our algorithm analyzes your skills, experience, interests, and startup goals to match you with compatible co-founders. You can also browse profiles manually and use advanced filters to find the perfect match for your startup idea."
    },
    {
      question: "Is DevMates free to use?",
      answer: "We offer a free tier with basic features. For advanced features like unlimited matches, verified skill badges, and priority visibility, we have Pro ($20/month) and Premium ($35/month) plans. Early users get lifetime discounts on all paid plans!"
    },
    {
      question: "How do I verify my skills?",
      answer: "You can verify your skills by linking your GitHub, LinkedIn, portfolio, or completing skill assessments. Verified skills appear as badges on your profile, making you more attractive to potential co-founders."
    },
    {
      question: "Is it safe to meet potential co-founders?",
      answer: "We take safety seriously. All profiles go through verification, and we provide safety guidelines for in-person meetings. We also offer secure messaging and video calls within the platform before meeting in person."
    },
    {
      question: "Can I use DevMates if I don't have a startup idea yet?",
      answer: "Absolutely! Many successful partnerships start with complementary skills rather than a specific idea. You can browse profiles of people with interesting backgrounds and explore potential collaborations."
    },
    {
      question: "What if I'm not technical but want to start a tech company?",
      answer: "Perfect! DevMates is designed for non-technical founders to find technical co-founders. Many successful startups are founded by business-minded individuals who partner with developers and designers."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription anytime from your account settings. Your access will continue until the end of your current billing period. Early users maintain their lifetime discount even after cancellation."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with DevMates, contact our support team within 30 days of your first payment for a full refund."
    },
    {
      question: "How do I contact support?",
      answer: "You can reach our support team at support@devmatesapp.com or use the contact form in your account dashboard. We typically respond within 24 hours and offer priority support for Premium and Enterprise users."
    }
  ];

  return (
    <div className="faq-container">
      {/* Background Elements */}
      <div className="faq-bg">
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

      <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
        <p>Find answers to common questions about DevMates</p>
      </div>
      
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
      
      <div className="faq-footer">
        <p>Still have questions? <a href="mailto:support@devmatesapp.com">Contact our support team</a></p>
      </div>
    </div>
  );
};

export default FAQ;
