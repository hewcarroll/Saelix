import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './pages/Dashboard';
import GISMap from './pages/GISMap';
import Inspections from './pages/Inspections';
import WorkOrders from './pages/WorkOrders';
import Scheduling from './pages/Scheduling';
import Inventory from './pages/Inventory';
import ReportBuilder from './pages/ReportBuilder';
import Settings from './pages/Settings';
import AiDrawer from './components/AiDrawer';
import DemoBanner from './components/DemoBanner';
import { DemoToastProvider } from './components/DemoToast';
import { AppProvider } from './contexts/AppContext';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [aiDrawerOpen, setAiDrawerOpen] = useState(false);

  return (
    <AppProvider>
      <DemoToastProvider>
      <Router>
        <div className="flex flex-col h-screen bg-slate-50 overflow-hidden">
          <DemoBanner />
          <div className="flex flex-1 min-h-0 overflow-hidden">
          {/* Sidebar Navigation */}
          <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
            <TopBar
              toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
              onOpenAi={() => setAiDrawerOpen(true)}
            />

            <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 relative">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/map" element={<GISMap />} />
                <Route path="/inspections" element={<Inspections />} />
                <Route path="/work-orders" element={<WorkOrders />} />
                <Route path="/reports" element={<ReportBuilder />} />
                <Route path="/scheduling" element={<Scheduling />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/analytics" element={<div className="text-center mt-20 text-slate-400">Advanced Analytics Module Placeholder</div>} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>

          {/* AI Assistant Drawer */}
          <AiDrawer isOpen={aiDrawerOpen} onClose={() => setAiDrawerOpen(false)} />

        </div>
        </div>
      </Router>
      </DemoToastProvider>
    </AppProvider>
  );
}

export default App;