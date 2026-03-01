import React from 'react';
import { COMPANY_INFO } from '../constants';
import { PageView } from '../types';

interface FooterProps {
  setPage: (page: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent, page: PageView) => {
    e.preventDefault();
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              <li><a href="#" onClick={(e) => handleNavClick(e, 'saelix-slate')} className="footer-link">Saelix Slate</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'kala')} className="footer-link">KALA AI Lab</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="footer-section">
            <h5 className="footer-subheading">Solutions</h5>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => handleNavClick(e, 'solutions-water')} className="footer-link">Water Utilities</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'solutions-municipalities')} className="footer-link">Municipalities</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h5 className="footer-subheading">Contact</h5>
            <ul className="footer-links">
              <li><a href={`mailto:${COMPANY_INFO.contactEmail}`} className="footer-link">{COMPANY_INFO.contactEmail}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <h5 className="footer-subheading">Legal</h5>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => e.preventDefault()} className="footer-link">Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="footer-link">Terms of Service</a></li>
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
