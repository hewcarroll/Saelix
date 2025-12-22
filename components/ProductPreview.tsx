import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProductPreviewProps {
  productName: string;
  productTagline: string;
  productDescription: string;
  features: string[];
  onLearnMore: () => void;
}

const ProductPreview: React.FC<ProductPreviewProps> = ({
  productName,
  productTagline,
  productDescription,
  features,
  onLearnMore
}) => {
  return (
    <section className="product-preview-section">
      <div className="container">
        <div className="product-preview-content">
          <div className="product-preview-text">
            <h2 className="section-title">{productName}</h2>
            <p className="product-tagline">{productTagline}</p>
            <p className="product-description">{productDescription}</p>
            
            <div className="product-features-list">
              <h3 className="features-heading">Key Features</h3>
              <ul className="features-list">
                {features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="feature-item">{feature}</li>
                ))}
              </ul>
            </div>
            
            <button className="btn btn-primary" onClick={onLearnMore}>
              Explore Saelix Slate
              <ArrowRight className="btn-icon" />
            </button>
          </div>
          
          <div className="product-preview-visual">
            <div className="product-placeholder">
              <div className="placeholder-content">
                <svg viewBox="0 0 400 300" className="placeholder-svg">
                  <rect width="400" height="300" fill="#f0f4f8" />
                  <circle cx="200" cy="150" r="80" fill="#0066CC" opacity="0.1" />
                  <circle cx="200" cy="150" r="60" fill="#0066CC" opacity="0.2" />
                  <circle cx="200" cy="150" r="40" fill="#0066CC" opacity="0.3" />
                  <text x="200" y="160" textAnchor="middle" fill="#6B7280" fontSize="16" fontFamily="sans-serif">
                    Saelix Slate
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
