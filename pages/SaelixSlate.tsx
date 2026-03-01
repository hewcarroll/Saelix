import React from 'react';
import { SAELIX_SLATE, PRODUCT_MODULES_DETAIL, TARGET_CUSTOMERS, WHY_UTILITIES_CHOOSE } from '../constants';
import { Check, MapPin, Zap, Users, Play, ArrowRight, BarChart3, ClipboardCheck, FileText, Calendar, Package } from 'lucide-react';
import { PageView } from '../types';
import ContactForm from '../components/ContactForm';

interface SaelixSlateProps {
  setPage: (page: PageView) => void;
}

const SaelixSlate: React.FC<SaelixSlateProps> = ({ setPage }) => {
  const handleLaunchDemo = () => {
    setPage('demo');
  };

  const scrollToContactForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const moduleIcons: Record<string, React.ReactNode> = {
    'Dashboard': <BarChart3 size={22} />,
    'GIS Map': <MapPin size={22} />,
    'Inspections': <ClipboardCheck size={22} />,
    'Work Orders': <FileText size={22} />,
    'Scheduling': <Calendar size={22} />,
    'Inventory': <Package size={22} />,
    'Reports': <FileText size={22} />,
    'Analytics': <BarChart3 size={22} />,
  };

  return (
    <>
      {/* Product Hero */}
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-content">
            <h1 className="product-hero-title">{SAELIX_SLATE.name}</h1>
            <p className="product-hero-subtitle">Unified GIS, inspections, and work orders for water, sewer, and stormwater infrastructure.</p>
            <p style={{ marginBottom: '2rem', fontSize: '18px', maxWidth: '700px', margin: '0 auto 2rem' }}>
              From CCTV inspection to compliant report in one system. Enterprise-grade, but deployable by small and mid-sized utilities.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-lg" onClick={scrollToContactForm}>
                Book a 30-Minute Demo
              </button>
              <button className="btn btn-secondary" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)' }} onClick={handleLaunchDemo}>
                <Play size={18} />
                Try the Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="product-section">
        <div className="container">
          <h2 className="section-title">The Challenge</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '18px', color: '#6B7280', lineHeight: '1.6', marginBottom: '2rem' }}>
              Your GIS doesn't talk to your inspection software. Inspection findings get re-keyed into a separate work order system.
              Crew scheduling lives in a spreadsheet. Compliance reports require hours of manual data compilation.
              And when a regulator asks for an audit trail, you're pulling records from five different places.
            </p>
            <p style={{ fontSize: '16px', color: '#6B7280' }}>
              Saelix Slate eliminates these disconnected workflows. One platform connects field inspections
              to work orders to crew dispatch to compliance reporting — for water, sewer, and stormwater infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="product-features-section">
        <div className="container">
          <h2 className="section-title">One Platform, Not Five</h2>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
              <div style={{ padding: '2rem', backgroundColor: '#F3F4F6', borderRadius: '8px', textAlign: 'center' }}>
                <MapPin size={40} style={{ margin: '0 auto 1rem', color: '#0066CC' }} />
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '0.5rem' }}>Unified Asset View</h3>
                <p style={{ fontSize: '14px', color: '#6B7280' }}>Every pipe, manhole, and asset on one interactive map with inspection history and work order status.</p>
              </div>
              <div style={{ padding: '2rem', backgroundColor: '#F3F4F6', borderRadius: '8px', textAlign: 'center' }}>
                <Zap size={40} style={{ margin: '0 auto 1rem', color: '#0066CC' }} />
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '0.5rem' }}>Automated Workflows</h3>
                <p style={{ fontSize: '14px', color: '#6B7280' }}>Inspection findings automatically generate work orders, assign crews, and track progress to completion.</p>
              </div>
              <div style={{ padding: '2rem', backgroundColor: '#F3F4F6', borderRadius: '8px', textAlign: 'center' }}>
                <Users size={40} style={{ margin: '0 auto 1rem', color: '#0066CC' }} />
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '0.5rem' }}>Compliant Reporting</h3>
                <p style={{ fontSize: '14px', color: '#6B7280' }}>NASSCO, EPA, and OSHA-compliant reports generated directly from operational data with complete audit trails.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules — Before vs After */}
      <section className="product-section">
        <div className="container">
          <h2 className="section-title">What Changes When You Switch to Slate</h2>
          <div className="modules-before-after">
            {PRODUCT_MODULES_DETAIL.map((module, index) => (
              <div key={index} className="module-ba-card">
                <div className="module-ba-header">
                  <div className="module-ba-icon">
                    {moduleIcons[module.name] || <Zap size={22} />}
                  </div>
                  <div className="module-ba-name">{module.name}</div>
                </div>
                <div className="module-ba-content">
                  <div className="module-ba-before">
                    <div className="module-ba-label">Before</div>
                    <div className="module-ba-text">{module.before}</div>
                  </div>
                  <div className="module-ba-after">
                    <div className="module-ba-label">After</div>
                    <div className="module-ba-text">{module.after}</div>
                  </div>
                </div>
                <div className="module-ba-outcome">{module.outcome}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Utilities Choose Saelix Slate */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Why Utilities Choose Saelix Slate</h2>
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

      {/* Solution Pages CTA */}
      <section className="product-section" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>See How Slate Works for Your Organization</h2>
          <div className="solution-cta-grid">
            <div className="solution-cta-card">
              <h3>Water Utilities</h3>
              <p>Sewer lining projects, FOG programs, SSO prevention, and capital improvement planning — all in one platform.</p>
              <button className="btn btn-secondary" onClick={() => { setPage('solutions-water'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                Solutions for Water Utilities
                <ArrowRight className="btn-icon" />
              </button>
            </div>
            <div className="solution-cta-card">
              <h3>Municipalities</h3>
              <p>Multi-system infrastructure management, storm response, consent decree compliance, and cross-department coordination.</p>
              <button className="btn btn-secondary" onClick={() => { setPage('solutions-municipalities'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                Solutions for Municipalities
                <ArrowRight className="btn-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="product-section">
        <div className="container">
          <h2 className="section-title">Built for Infrastructure Operators</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto 3rem' }}>
            {TARGET_CUSTOMERS.map((customer, index) => (
              <div key={index} style={{ padding: '1.5rem', backgroundColor: '#F3F4F6', borderRadius: '8px', textAlign: 'center' }}>
                <p style={{ fontSize: '15px', fontWeight: '500', color: '#111827' }}>{customer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="product-specs-section">
        <div className="container">
          <h2 className="section-title">Technical Specifications</h2>
          <div className="specs-grid">
            <div className="spec-item">
              <h4 className="spec-label">Platform</h4>
              <p className="spec-value">React + FastAPI</p>
            </div>
            <div className="spec-item">
              <h4 className="spec-label">Scalability</h4>
              <p className="spec-value">100K+ Assets</p>
            </div>
            <div className="spec-item">
              <h4 className="spec-label">Deployment</h4>
              <p className="spec-value">Cloud & On-Premise</p>
            </div>
            <div className="spec-item">
              <h4 className="spec-label">Version</h4>
              <p className="spec-value">{SAELIX_SLATE.version}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Flow Visualization */}
      <section className="product-section">
        <div className="container">
          <h2 className="section-title">End-to-End Workflow</h2>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', textAlign: 'center' }}>
              {['Inspect', 'Upload', 'Analyze', 'Generate', 'Dispatch', 'Execute', 'Report'].map((step, idx) => (
                <div key={idx}>
                  <div style={{ padding: '1rem', backgroundColor: '#E6F0FF', borderRadius: '8px', marginBottom: '0.5rem' }}>
                    <p style={{ fontWeight: '600', color: '#0066CC' }}>{step}</p>
                  </div>
                  {idx < 6 && <p style={{ fontSize: '20px', color: '#0066CC' }}>&rarr;</p>}
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', marginTop: '2rem', color: '#6B7280', fontSize: '14px' }}>
              From field inspection to compliance reporting — all in one platform for water, sewer, and stormwater utilities.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="product-section" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="container">
          <h2 className="section-title">Enterprise-Grade Security & Compliance</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '1rem' }}>Role-Based Access</h3>
              <p style={{ fontSize: '14px', color: '#6B7280' }}>Administrator, Operator, QA Reviewer, and Client Viewer roles with granular permissions</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '1rem' }}>Regulatory Compliance</h3>
              <p style={{ fontSize: '14px', color: '#6B7280' }}>NASSCO standards, EPA regulations, and OSHA safety certifications</p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '1rem' }}>Data Security</h3>
              <p style={{ fontSize: '14px', color: '#6B7280' }}>Encryption, audit trails, and comprehensive logging for compliance</p>
            </div>
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

export default SaelixSlate;
