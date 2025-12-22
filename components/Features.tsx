import React from 'react';
import { Feature } from '../types';
import * as LucideIcons from 'lucide-react';

interface FeaturesProps {
  features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'zap': LucideIcons.Zap,
      'shield': LucideIcons.Shield,
      'layers': LucideIcons.Layers,
      'cpu': LucideIcons.Cpu,
      'database': LucideIcons.Database,
      'lock': LucideIcons.Lock,
    };
    return iconMap[iconName] || LucideIcons.Package;
  };

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = getIcon(feature.icon);
            return (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <Icon size={32} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
