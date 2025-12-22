import React from 'react';
import { SAELIX_SLATE, PRODUCT_MODULES, TARGET_CUSTOMERS } from '../constants';
import { ArrowRight, Check, MapPin, Zap, Users } from 'lucide-react';

const SaelixSlate: React.FC = () => {
  return (
    <>
      {/* Product Hero */}
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-content">
            <h1 className="product-hero-title">{SAELIX_SLATE.name}</h1>
            <p className="product-hero-subtitle">{SAELIX_SLATE.tagline}</p>
            <p style={{ marginBottom: '2rem', fontSize: '18px', maxWidth: '700px', margin: '0 auto 2rem' }}>
              Enterprise GIS and fleet management for water utilities, municipalities, and infrastructure operators.
            </p>
            <button className="btn btn-primary">
              Request a Demo
              <ArrowRight className="btn-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="product-section">
        <div className="container">
          <h2 className="section-title">The Challenge</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '18px', color: '#6B7280', lineHeight: '1.6', marginBottom: '2rem' }}>
              Water utilities face critical challenges: aging infrastructure requiring constant inspection, 
              disconnected systems managing assets separately from operations, lengthy inspection-to-repair cycles, 
              and complex regulatory compliance requirements.
            </p>
            <p style={{ fontSize: '16px', color: '#6B7280' }}>
              Saelix Slate unifies these operations into one integrated platform, connecting field inspections 
              to work orders to crew dispatch to compliance reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="product-features-section">
        <div className="container">
          <h2 className="section-title">Unified Platform Architecture</h2>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
              <div style={{ padding: '2rem', backgroundColor: '#F3F4F6', borderRadius: '8px', textAlign: 'center' }}>
                <MapPin size={40} style={{ margin: '0 auto 1rem', color: '#0066CC' }} />
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '0.5rem' }}>GIS Asset Management</h3>
                <p style={{ fontSize: '14px', color: '#6B7280' }}>Interactive mapping of infrastructure with real-time status</p>
              </div>
              <div style={{ padding: '2rem', backgroundColor: '#F3F4F6', borderRadius: '8px', textAlign: 'center' }}>
                <Zap size={40} style={{ margin: '0 auto 1rem', color: '#0066CC' }} />
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '0.5rem' }}>Automated Workflows</h3>
                <p style={{ fontSize: '14px', color: '#6B7280' }}>From inspection to work order to completion</p>
              </div>
              <div style={{ padding: '2rem', backgroundColor: '#F3F4F6', borderRadius: '8px', textAlign: 'center' }}>
                <Users size={40} style={{ margin: '0 auto 1rem', color: '#0066CC' }} />
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '0.5rem' }}>Fleet Operations</h3>
                <p style={{ fontSize: '14px', color: '#6B7280' }}>Crew scheduling, dispatch, and performance tracking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="product-features-section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <h2 className="section-title">8 Core Modules</h2>
          <div className="features-grid-2col">
            {PRODUCT_MODULES.map((module, index) => (
              <div key={index} className="feature-item-2col">
                <div className="feature-icon-box">
                  <Check size={24} className="check-icon" />
                </div>
                <div>
                  <h3 className="feature-name">{module.name}</h3>
                  <p style={{ fontSize: '14px', color: '#6B7280' }}>{module.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="product-benefits-section">
        <div className="container">
          <h2 className="section-title">Why Saelix Slate?</h2>
          <div className="benefits-grid">
            {SAELIX_SLATE.keyBenefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <Check size={24} style={{ color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
                  <p className="benefit-text" style={{ margin: 0 }}>{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="product-usecases-section">
        <div className="container">
          <h2 className="section-title">Real-World Applications</h2>
          <div className="usecases-grid">
            {SAELIX_SLATE.useCases.map((usecase, index) => (
              <div key={index} className="usecase-card">
                <p className="usecase-text">{usecase}</p>
              </div>
            ))}
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
                  {idx < 6 && <p style={{ fontSize: '20px', color: '#0066CC' }}>→</p>}
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', marginTop: '2rem', color: '#6B7280', fontSize: '14px' }}>
              From field inspection to compliance reporting, all integrated in one platform
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

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-content">
            <h2 className="final-cta-title">Transform Your Infrastructure Operations</h2>
            <p className="final-cta-description">See how Saelix Slate can streamline your water utility operations with unified GIS and fleet management.</p>
            <button className="btn btn-primary">
              Schedule a Demo
              <ArrowRight className="btn-icon" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SaelixSlate;
