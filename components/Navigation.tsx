import React from 'react';
import { Menu, X } from 'lucide-react';
import { PageView } from '../types';

interface NavigationProps {
  currentPage: PageView;
  setPage: (page: PageView) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems: { label: string; page: PageView }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Saelix Slate', page: 'saelix-slate' }
  ];

  const handleNavClick = (page: PageView) => {
    setPage(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">Saelix</span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links-desktop">
          {navItems.map((item) => (
            <button
              key={item.page}
              className={`nav-link ${currentPage === item.page ? 'active' : ''}`}
              onClick={() => handleNavClick(item.page)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="nav-links-mobile">
          {navItems.map((item) => (
            <button
              key={item.page}
              className={`nav-link-mobile ${currentPage === item.page ? 'active' : ''}`}
              onClick={() => handleNavClick(item.page)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
