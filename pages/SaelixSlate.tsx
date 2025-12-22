import React from 'react';
import { SAELIX_SLATE } from '../constants';
import { ArrowRight, Check } from 'lucide-react';

const SaelixSlate: React.FC = () => {
  return (
    <>
      {/* Product Hero */}
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-content">
            <h1 className="product-hero-title">{SAELIX_SLATE.name}</h1>
            <p className="product-hero-subtitle">{SAELIX_SLATE.tagline}</p>
            <button className="btn btn-primary">
              Get Started
              <ArrowRight className="btn-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="product-section">
        <div className="container">
          <h2 className="section-title">Product Overview</h2>
          <p className="section-description">{SAELIX_SLATE.description}</p>
        </div>
      </section>

      {/* Key Features */}
      <section className="product-features-section">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid-2col">
            {SAELIX_SLATE.features.map((feature, index) => (
              <div key={index} className="feature-item-2col">
                <div className="feature-icon-box">
                  <Check size={24} className="check-icon" />
                </div>
                <h3 className="feature-name">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="product-benefits-section">
        <div className="container">
          <h2 className="section-title">Why Choose Saelix Slate?</h2>
          <div className="benefits-grid">
            {SAELIX_SLATE.keyBenefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <h3 className="benefit-title">Benefit {index + 1}</h3>
                <p className="benefit-text">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="product-usecases-section">
        <div className="container">
          <h2 className="section-title">Use Cases</h2>
          <div className="usecases-grid">
            {SAELIX_SLATE.useCases.map((usecase, index) => (
              <div key={index} className="usecase-card">
                <p className="usecase-text">{usecase}</p>
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
              <h4 className="spec-label">Version</h4>
              <p className="spec-value">{SAELIX_SLATE.version}</p>
            </div>
            <div className="spec-item">
              <h4 className="spec-label">Release Date</h4>
              <p className="spec-value">{SAELIX_SLATE.releaseDate}</p>
            </div>
            <div className="spec-item">
              <h4 className="spec-label">Platform</h4>
              <p className="spec-value">Cloud & On-Premise</p>
            </div>
            <div className="spec-item">
              <h4 className="spec-label">Support</h4>
              <p className="spec-value">Enterprise Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-content">
            <h2 className="final-cta-title">Ready to Get Started?</h2>
            <p className="final-cta-description">Contact our team to learn how Saelix Slate can transform your AI workflows.</p>
            <button className="btn btn-primary">
              Request a Demo
              <ArrowRight className="btn-icon" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SaelixSlate;
