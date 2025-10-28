import React from 'react';
import './GettingStarted.css';

const GettingStarted = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Sign up and build a compelling profile that showcases your skills, experience, and startup goals. Include your portfolio, GitHub, LinkedIn, and any relevant projects.",
      tips: [
        "Use a professional profile photo",
        "Write a clear, engaging bio",
        "List your technical skills and experience",
        "Describe your ideal co-founder"
      ]
    },
    {
      number: "02",
      title: "Define Your Goals",
      description: "Be specific about what you're looking for. Are you seeking a technical co-founder? A business partner? Someone with specific industry experience?",
      tips: [
        "Specify your startup idea or industry",
        "Define your role and what you bring",
        "Describe your ideal partner's skills",
        "Set clear expectations for equity and commitment"
      ]
    },
    {
      number: "03",
      title: "Verify Your Skills",
      description: "Get verified skill badges by linking your GitHub, portfolio, or completing assessments. Verified profiles get 3x more matches and responses.",
      tips: [
        "Link your GitHub repository",
        "Upload portfolio samples",
        "Complete skill assessments",
        "Get endorsements from colleagues"
      ]
    },
    {
      number: "04",
      title: "Start Matching",
      description: "Use our smart matching algorithm or browse profiles manually. Send thoughtful messages that show you've read their profile and explain why you'd make great co-founders.",
      tips: [
        "Personalize every message",
        "Reference specific details from their profile",
        "Explain your startup vision clearly",
        "Suggest a quick video call to connect"
      ]
    },
    {
      number: "05",
      title: "Build Relationships",
      description: "Take time to get to know potential co-founders. Use our secure messaging and video calls to discuss ideas, values, and working styles before committing.",
      tips: [
        "Schedule regular check-ins",
        "Discuss equity splits early",
        "Test working together on small projects",
        "Ensure you share similar values and work ethics"
      ]
    },
    {
      number: "06",
      title: "Launch Together",
      description: "Once you've found the right co-founder, use DevMates' resources to help you launch. We provide templates, guides, and connections to accelerators and investors.",
      tips: [
        "Create a formal partnership agreement",
        "Define roles and responsibilities clearly",
        "Set up proper legal structure",
        "Plan your go-to-market strategy together"
      ]
    }
  ];

  return (
    <div className="getting-started-container">
      {/* Background Elements */}
      <div className="getting-started-bg">
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

      <div className="getting-started-header">
        <h2>Getting Started with DevMates</h2>
        <p>Follow this step-by-step guide to find your perfect co-founder and launch your startup</p>
      </div>
      
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-item">
            <div className="step-number">{step.number}</div>
            <div className="step-content">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <div className="step-tips">
                <h4>Pro Tips:</h4>
                <ul>
                  {step.tips.map((tip, tipIndex) => (
                    <li key={tipIndex}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="getting-started-footer">
        <div className="cta-section">
          <h3>Ready to Find Your Co-Founder?</h3>
          <p>Join thousands of entrepreneurs who've found their perfect match on DevMates</p>
          <a href="/waitlist" className="cta-button">Join the Waitlist</a>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
