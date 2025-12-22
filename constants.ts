import { Feature } from './types';

export const COMPANY_INFO = {
  name: 'Saelix',
  tagline: 'Advanced AI Research & Development',
  description: 'Building ethical, coherent AI systems for enterprise applications.',
  contactEmail: 'collaborate@saelix.org',
  founded: 2023
};

export const HOME_PAGE_FEATURES: Feature[] = [
  {
    icon: 'zap',
    title: 'High Performance',
    description: 'Enterprise-grade AI systems optimized for speed and reliability.'
  },
  {
    icon: 'shield',
    title: 'Ethical AI',
    description: 'Built on principles of transparency, safety, and responsible innovation.'
  },
  {
    icon: 'layers',
    title: 'Scalable Architecture',
    description: 'Flexible solutions that grow with your organization\'s needs.'
  }
];

export const SAELIX_SLATE = {
  name: 'Saelix Slate',
  version: '1.0.0',
  releaseDate: '2025-Q1',
  tagline: 'Enterprise-Grade AI Application Platform',
  description: 'A comprehensive platform for deploying and managing AI applications at scale. Built for teams that demand performance, security, and reliability.',
  features: [
    'Real-time data processing and inference',
    'Advanced model deployment and versioning',
    'Enterprise-grade security and compliance',
    'Scalable distributed architecture',
    'Comprehensive monitoring and analytics',
    'Team collaboration tools'
  ],
  keyBenefits: [
    'Reduce deployment time from weeks to days',
    'Scale AI workloads without operational overhead',
    'Ensure model performance and reliability in production',
    'Maintain security and compliance standards'
  ],
  useCases: [
    'Real-time recommendation engines',
    'Predictive analytics for business intelligence',
    'Natural language processing applications',
    'Computer vision at scale',
    'Time-series forecasting',
    'Custom model deployment'
  ]
};

export const FOOTER_LINKS = {
  product: [
    { label: 'Saelix Slate', href: '/saelix-slate' }
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Contact', href: `mailto:${COMPANY_INFO.contactEmail}` }
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' }
  ]
};
