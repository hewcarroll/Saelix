import React from 'react';
import { ArrowRight, Play, MapPin, Zap, Users, BarChart3, ClipboardCheck, Calendar, Package, FileText } from 'lucide-react';
import { SAELIX_SLATE, PRODUCT_MODULES } from '../constants';
import { PageView } from '../types';

interface HomeProps {
  setPage: (page: PageView) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  const handleLaunchDemo = () => {
    setPage('demo');
  };

  const handleLearnMore = () => {
    setPage('saelix-slate');
  };

  const moduleIcons: Record<string, React.ReactNode> = {
    'Dashboard': <BarChart3 size={24} />,
    'GIS Map': <MapPin size={24} />,
    'Inspections': <ClipboardCheck size={24} />,
    'Work Orders': <FileText size={24} />,
    'Scheduling': <Calendar size={24} />,
    'Inventory': <Package size={24} />,
    'Reports': <FileText size={24} />,
    'Analytics': <BarChart3 size={24} />,
  };

  return (
    <>
      {/* Hero — Saelix Slate front and center */}
      <section className="slate-hero">
        <div className="container">
          <div className="slate-hero-grid">
            <div className="slate-hero-text">
              <div className="slate-badge">Infrastructure Management Platform</div>
              <h1 className="slate-hero-title">Saelix Slate</h1>
              <p className="slate-hero-tagline">{SAELIX_SLATE.tagline}</p>
              <p className="slate-hero-description">
                {SAELIX_SLATE.description}
              </p>
              <div className="slate-hero-ctas">
                <button className="btn btn-primary btn-lg" onClick={handleLaunchDemo}>
                  <Play size={18} />
                  Try the Demo
                </button>
                <button className="btn btn-secondary" onClick={handleLearnMore}>
                  Learn More
                  <ArrowRight className="btn-icon" />
                </button>
              </div>
            </div>
            <div className="slate-hero-visual">
              <div className="app-mockup" onClick={handleLaunchDemo} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleLaunchDemo()}>
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                  <span className="mockup-title">Saelix Slate</span>
                </div>
                <div className="mockup-body">
                  <div className="mockup-sidebar">
                    <div className="mockup-nav-item active">Dashboard</div>
                    <div className="mockup-nav-item">GIS Map</div>
                    <div className="mockup-nav-item">Inspections</div>
                    <div className="mockup-nav-item">Work Orders</div>
                    <div className="mockup-nav-item">Scheduling</div>
                  </div>
                  <div className="mockup-content">
                    <div className="mockup-stats">
                      <div className="mockup-stat-card">
                        <div className="mockup-stat-value">1,247</div>
                        <div className="mockup-stat-label">Assets Tracked</div>
                      </div>
                      <div className="mockup-stat-card">
                        <div className="mockup-stat-value">38</div>
                        <div className="mockup-stat-label">Open Work Orders</div>
                      </div>
                      <div className="mockup-stat-card">
                        <div className="mockup-stat-value">12</div>
                        <div className="mockup-stat-label">Crews Active</div>
                      </div>
                    </div>
                    <div className="mockup-map-placeholder">
                      <MapPin size={32} className="mockup-map-icon" />
                      <span>GIS Asset Map</span>
                    </div>
                  </div>
                </div>
                <div className="mockup-overlay">
                  <Play size={48} />
                  <span>Click to Launch Demo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Modules */}
      <section className="slate-capabilities">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Everything You Need in One Platform</h2>
          <p className="section-subtitle">
            Eight integrated modules covering the full lifecycle of infrastructure operations.
          </p>
          <div className="modules-grid">
            {PRODUCT_MODULES.map((module, index) => (
              <div key={index} className="module-card">
                <div className="module-icon">
                  {moduleIcons[module.name] || <Zap size={24} />}
                </div>
                <h3 className="module-name">{module.name}</h3>
                <p className="module-description">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="slate-value-props">
        <div className="container">
          <div className="value-props-grid">
            <div className="value-prop">
              <MapPin size={36} className="value-prop-icon" />
              <h3>GIS Asset Management</h3>
              <p>Interactive mapping and visualization of infrastructure assets with real-time status updates and spatial analysis.</p>
            </div>
            <div className="value-prop">
              <Users size={36} className="value-prop-icon" />
              <h3>Fleet & Crew Operations</h3>
              <p>Optimize field operations with intelligent scheduling, dispatch, and crew utilization tracking across projects.</p>
            </div>
            <div className="value-prop">
              <Zap size={36} className="value-prop-icon" />
              <h3>Automated Workflows</h3>
              <p>Streamline from inspection to completion with automated work order generation, assignment, and tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="slate-demo-cta">
        <div className="container">
          <div className="demo-cta-content">
            <h2>See Saelix Slate in Action</h2>
            <p>Explore the interactive demo to see how the platform manages infrastructure operations end-to-end.</p>
            <button className="btn btn-primary btn-lg" onClick={handleLaunchDemo}>
              <Play size={18} />
              Launch Demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
