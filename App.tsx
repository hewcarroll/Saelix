import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Products from './pages/Products';
import ResearchWiki from './pages/ResearchWiki';
import Coherology from './pages/Coherology';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import { PageView } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setPage={setCurrentPage} />;
      case 'products':
        return <Products />;
      case 'wiki':
        return <ResearchWiki />;
      case 'about':
        return <Coherology />;
      case 'contact':
        return (
          <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center px-4">
            <h1 className="text-3xl text-white font-serif mb-4">Join the Network</h1>
            <p className="text-gray-400 max-w-md">
              We are currently accepting applications for research partners. <br/>
              Please email <span className="text-indigo-400">collaborate@saelix.org</span>.
            </p>
          </div>
        );
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-50 selection:bg-indigo-500/30">
      <Navigation currentPage={currentPage} setPage={setCurrentPage} />
      
      <main className="flex-grow relative">
        {/* Background Gradients */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px]" />
        </div>
        
        {/* Page Content */}
        <div className="animate-in fade-in duration-500">
          {renderPage()}
        </div>
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
