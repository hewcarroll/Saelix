import React from 'react';
import { Menu, X, Play, ChevronDown } from 'lucide-react';
import { PageView } from '../types';

interface NavigationProps {
  currentPage: PageView;
  setPage: (page: PageView) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleNavClick = (page: PageView) => {
    setPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'demo') return null;

  const isSolutionPage = currentPage === 'solutions-water' || currentPage === 'solutions-municipalities';

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div
          className="nav-logo"
          onClick={() => handleNavClick('home')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleNavClick('home')}
          style={{ cursor: 'pointer' }}
        >
          <span className="logo-text">Saelix</span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links-desktop">
          <button
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Home
          </button>
          <button
            className={`nav-link ${currentPage === 'saelix-slate' ? 'active' : ''}`}
            onClick={() => handleNavClick('saelix-slate')}
          >
            Saelix Slate
          </button>
          <div className="nav-dropdown">
            <button className={`nav-link ${isSolutionPage ? 'active' : ''}`}>
              Solutions
              <ChevronDown size={14} />
            </button>
            <div className="nav-dropdown-menu">
              <button className="nav-dropdown-item" onClick={() => handleNavClick('solutions-water')}>
                Water Utilities
              </button>
              <button className="nav-dropdown-item" onClick={() => handleNavClick('solutions-municipalities')}>
                Municipalities
              </button>
            </div>
          </div>
          <button
            className={`nav-link ${currentPage === 'kala' ? 'active' : ''}`}
            onClick={() => handleNavClick('kala')}
          >
            AI Lab
          </button>
          <button
            className="btn btn-primary btn-nav-demo"
            onClick={() => handleNavClick('demo')}
          >
            <Play size={14} />
            Try Demo
          </button>
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
          <button
            className={`nav-link-mobile ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Home
          </button>
          <button
            className={`nav-link-mobile ${currentPage === 'saelix-slate' ? 'active' : ''}`}
            onClick={() => handleNavClick('saelix-slate')}
          >
            Saelix Slate
          </button>
          <button
            className={`nav-link-mobile ${currentPage === 'solutions-water' ? 'active' : ''}`}
            onClick={() => handleNavClick('solutions-water')}
          >
            Water Utilities
          </button>
          <button
            className={`nav-link-mobile ${currentPage === 'solutions-municipalities' ? 'active' : ''}`}
            onClick={() => handleNavClick('solutions-municipalities')}
          >
            Municipalities
          </button>
          <button
            className={`nav-link-mobile ${currentPage === 'kala' ? 'active' : ''}`}
            onClick={() => handleNavClick('kala')}
          >
            AI Lab
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleNavClick('demo')}
            style={{ marginTop: '0.5rem' }}
          >
            <Play size={14} />
            Try Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
