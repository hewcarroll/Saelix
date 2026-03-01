import React from 'react';
import { ArrowRight, Play, MapPin, Zap, Users, BarChart3, ClipboardCheck, Calendar, Package, FileText, Brain, Check, TrendingUp, Search, MessageSquare } from 'lucide-react';
import { SAELIX_SLATE, PRODUCT_MODULES, KALA, WHY_UTILITIES_CHOOSE, GUIDED_DEMO_STEPS, CASE_STUDY } from '../constants';
import { PageView } from '../types';
import ContactForm from '../components/ContactForm';

interface HomeProps {
  setPage: (page: PageView) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  const handleLaunchDemo = () => {
    setPage('demo');
  };

  const scrollToContactForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
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
              <div className="slate-badge">For Water, Sewer & Stormwater Utilities</div>
              <h1 className="slate-hero-title">Saelix Slate</h1>
              <p className="slate-hero-tagline">{SAELIX_SLATE.tagline}</p>
              <p className="slate-hero-description">
                {SAELIX_SLATE.description}
              </p>
              <div className="slate-hero-ctas">
                <button className="btn btn-primary btn-lg" onClick={scrollToContactForm}>
                  Book a 30-Minute Demo
                </button>
                <button className="btn btn-secondary" onClick={handleLaunchDemo}>
                  <Play size={18} />
                  Try the Demo
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

      {/* Why Utilities Choose Saelix */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Why Utilities Choose Saelix</h2>
          <div className="why-choose-list">
            {WHY_UTILITIES_CHOOSE.map((item, index) => (
              <div key={index} className="why-choose-item">
                <Check size={22} className="check-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Modules */}
      <section className="slate-capabilities">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Eight Integrated Modules</h2>
          <p className="section-subtitle">
            Everything you need to manage water, sewer, and stormwater infrastructure in one platform.
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
              <h3>Unified GIS, Inspections & Work Orders</h3>
              <p>One connected system eliminates duplicate data entry and ensures every inspection finding connects to the right work order and the right crew.</p>
            </div>
            <div className="value-prop">
              <Users size={36} className="value-prop-icon" />
              <h3>Built for Field Crews</h3>
              <p>Intuitive interfaces designed for the people doing the actual work — not just back-office managers.</p>
            </div>
            <div className="value-prop">
              <Zap size={36} className="value-prop-icon" />
              <h3>Enterprise-Grade, Any-Size Utility</h3>
              <p>Scalable architecture that works for a 50-mile system or a 5,000-mile system, without enterprise-grade complexity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* KALA AI Section — R&D Differentiator */}
      <section className="kala-home-section">
        <div className="container">
          <div className="kala-home-grid">
            <div className="kala-home-visual">
              <div className="kala-orb">
                <div className="kala-orb-ring ring-1" />
                <div className="kala-orb-ring ring-2" />
                <div className="kala-orb-ring ring-3" />
                <div className="kala-orb-core">
                  <Brain size={40} />
                </div>
              </div>
            </div>
            <div className="kala-home-text">
              <div className="kala-badge">R&D / AI Lab</div>
              <h2 className="kala-home-title">KALA</h2>
              <p className="kala-home-fullname">{KALA.fullName}</p>
              <p className="kala-home-description">
                The AI engine that will power predictive maintenance, anomaly detection, and explainable
                recommendations inside Slate. Built on an immutable ethics kernel that ensures transparent,
                auditable, and predictable AI behavior.
              </p>
              <div className="kala-home-highlights">
                <div className="kala-highlight">
                  <TrendingUp size={20} />
                  <span>Predictive Maintenance</span>
                </div>
                <div className="kala-highlight">
                  <Search size={20} />
                  <span>Anomaly Detection</span>
                </div>
                <div className="kala-highlight">
                  <MessageSquare size={20} />
                  <span>Explainable Recommendations</span>
                </div>
              </div>
              <button className="btn btn-secondary" onClick={() => setPage('kala')}>
                Explore the AI Lab
                <ArrowRight className="btn-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="case-study-section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>{CASE_STUDY.headline}</h2>
          <p className="case-study-summary">{CASE_STUDY.summary}</p>
          <div className="case-study-results">
            {CASE_STUDY.results.map((result, index) => (
              <div key={index} className="case-study-result">
                <div className="case-study-metric">{result.metric}</div>
                <div className="case-study-label">{result.label}</div>
              </div>
            ))}
          </div>
          <blockquote className="case-study-quote">
            <p>"{CASE_STUDY.quote}"</p>
            <cite>— {CASE_STUDY.attribution}</cite>
          </blockquote>
        </div>
      </section>

      {/* Guided Demo CTA */}
      <section className="slate-demo-cta">
        <div className="container">
          <div className="demo-cta-content">
            <h2>See Saelix Slate in Action</h2>
            <p>Follow these steps in the interactive demo:</p>
            <div className="guided-demo-steps">
              {GUIDED_DEMO_STEPS.map((step) => (
                <div key={step.step} className="guided-step">
                  <div className="guided-step-number">{step.step}</div>
                  <div className="guided-step-action">{step.action}</div>
                  <div className="guided-step-description">{step.description}</div>
                </div>
              ))}
            </div>
            <button className="btn btn-primary btn-lg" onClick={handleLaunchDemo}>
              <Play size={18} />
              Launch Interactive Demo
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-section">
        <div className="container">
          <ContactForm id="contact-form" />
        </div>
      </section>
    </>
  );
};

export default Home;
