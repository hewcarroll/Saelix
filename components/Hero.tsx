import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaSecondary?: string;
  onCtaClick: () => void;
  onSecondaryClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaSecondary,
  onCtaClick,
  onSecondaryClick
}) => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={onCtaClick}>
              {ctaText}
              <ArrowRight className="btn-icon" />
            </button>
            {ctaSecondary && (
              <button className="btn btn-secondary" onClick={onSecondaryClick}>
                {ctaSecondary}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
