import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SpecialOffers from './components/SpecialOffers';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import Waitlist from './components/Waitlist';
import Docs from './components/Docs';
import AboutUs from './components/AboutUs';
import './components/LandingPage.css';
import './components/Footer.css';
import './components/SpecialOffers.css';
import './components/TermsOfService.css';
import './components/PrivacyPolicy.css';
import './components/Waitlist.css';
import './components/Docs.css';
import './components/FAQ.css';
import './components/GettingStarted.css';
import './components/CookiePolicy.css';
import './components/RefundPolicy.css';
import './components/AboutUs.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/special-offers" element={<SpecialOffers />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
