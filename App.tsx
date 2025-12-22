import React, { useState, lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { PageView } from './types';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const SaelixSlate = lazy(() => import('./pages/SaelixSlate'));

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    minHeight: '400px',
    fontSize: '18px',
    color: '#6B7280'
  }}>
    Loading...
  </div>
);

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
        <Suspense fallback={<LoadingFallback />}>
          {renderPage()}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
