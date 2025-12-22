import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductPreview from '../components/ProductPreview';
import { HOME_PAGE_FEATURES, SAELIX_SLATE, COMPANY_INFO } from '../constants';
import { PageView } from '../types';

interface HomeProps {
  setPage: (page: PageView) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  const handleExploreSlate = () => {
    setPage('saelix-slate');
  };

  return (
    <>
      <Hero
        title="Welcome to Saelix"
        subtitle="Advanced AI Research & Development. Building ethical, coherent AI systems for enterprise applications."
        ctaText="Explore Saelix Slate"
        onCtaClick={handleExploreSlate}
      />

      <Features features={HOME_PAGE_FEATURES} />

      <ProductPreview
        productName={SAELIX_SLATE.name}
        productTagline={SAELIX_SLATE.tagline}
        productDescription={SAELIX_SLATE.description}
        features={SAELIX_SLATE.features}
        onLearnMore={handleExploreSlate}
      />

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your AI Workflows?</h2>
            <p className="cta-description">Get started with Saelix Slate today</p>
            <button className="btn btn-primary" onClick={handleExploreSlate}>
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
