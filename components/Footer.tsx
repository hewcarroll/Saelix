import React from 'react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Saelix</h4>
            <p className="footer-text">{COMPANY_INFO.description}</p>
          </div>

          {/* Product */}
          <div className="footer-section">
            <h5 className="footer-subheading">Product</h5>
            <ul className="footer-links">
              <li><a href="#saelix-slate" className="footer-link">Saelix Slate</a></li>
              <li><a href="#kala" className="footer-link">KALA</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h5 className="footer-subheading">Company</h5>
            <ul className="footer-links">
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href={`mailto:${COMPANY_INFO.contactEmail}`} className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <h5 className="footer-subheading">Legal</h5>
            <ul className="footer-links">
              <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="#terms" className="footer-link">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
