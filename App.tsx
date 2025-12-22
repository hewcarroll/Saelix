import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import SaelixSlate from './pages/SaelixSlate';
import { PageView } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setPage={setCurrentPage} />;
      case 'saelix-slate':
        return <SaelixSlate />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <Navigation currentPage={currentPage} setPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
