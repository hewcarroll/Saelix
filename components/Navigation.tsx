import React from 'react';
import { PageView } from '../types';
import { Atom, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: PageView;
  setPage: (page: PageView) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems: { id: PageView; label: string }[] = [
    { id: 'home', label: 'Institute' },
    { id: 'about', label: 'Coherology' },
    { id: 'products', label: 'Products' },
    { id: 'wiki', label: 'Research Wiki' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => setPage('home')}>
            <div className="bg-indigo-600 p-2 rounded-lg mr-3 shadow-lg shadow-indigo-500/20">
              <Atom className="text-white w-6 h-6" />
            </div>
            <span className="font-serif font-bold text-xl tracking-wide text-white">SAELIX <span className="text-indigo-400 font-sans text-sm font-normal tracking-wider ml-1">INSTITUTE</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setPage(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    currentPage === item.id
                      ? 'text-white bg-white/10 shadow-inner'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                 onClick={() => setPage('contact')}
                 className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-lg shadow-indigo-900/50">
                Join Network
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setPage(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium ${
                  currentPage === item.id
                    ? 'text-white bg-white/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
