import React from 'react';
import { ArrowRight, Play, Check } from 'lucide-react';
import { SOLUTIONS_WATER_UTILITIES } from '../constants';
import { PageView } from '../types';
import ContactForm from '../components/ContactForm';

interface SolutionsWaterProps {
  setPage: (page: PageView) => void;
}

const SolutionsWater: React.FC<SolutionsWaterProps> = ({ setPage }) => {
  const scrollToContactForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero */}
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-content">
            <h1 className="product-hero-title">{SOLUTIONS_WATER_UTILITIES.title}</h1>
            <p className="product-hero-subtitle">{SOLUTIONS_WATER_UTILITIES.subtitle}</p>
            <p style={{ marginBottom: '2rem', fontSize: '18px', maxWidth: '700px', margin: '0 auto 2rem' }}>
              {SOLUTIONS_WATER_UTILITIES.heroDescription}
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-lg" onClick={scrollToContactForm}>
                Book a 30-Minute Demo
              </button>
              <button className="btn btn-secondary" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)' }} onClick={() => setPage('demo')}>
                <Play size={18} />
                Try the Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      {SOLUTIONS_WATER_UTILITIES.useCases.map((useCase, index) => (
        <section key={index} className="solution-usecase">
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center' }}>{useCase.title}</h2>
            <p className="section-subtitle">{useCase.description}</p>
            <div className="solution-usecase-bullets">
              {useCase.bulletPoints.map((point, idx) => (
                <div key={idx} className="solution-usecase-bullet">
                  <Check size={22} className="check-icon" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Cross-link to Municipalities */}
      <section className="product-section" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Also Built for Municipalities</h2>
          <p className="section-subtitle">
            Saelix Slate works for municipal public works departments managing multi-system infrastructure.
          </p>
          <button
            className="btn btn-secondary"
            onClick={() => { setPage('solutions-municipalities'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ marginTop: '1.5rem' }}
          >
            Solutions for Municipalities
            <ArrowRight className="btn-icon" />
          </button>
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

export default SolutionsWater;
