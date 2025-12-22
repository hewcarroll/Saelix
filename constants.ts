import { Feature } from './types';

export const COMPANY_INFO = {
  name: 'Saelix',
  tagline: 'Infrastructure Management Platform',
  description: 'Enterprise GIS and fleet management solutions for water utilities, municipalities, and infrastructure operators.',
  contactEmail: 'collaborate@saelix.org',
  founded: 2023
};

export const HOME_PAGE_FEATURES: Feature[] = [
  {
    icon: 'map',
    title: 'GIS Asset Management',
    description: 'Interactive mapping and visualization of infrastructure assets with real-time status updates.'
  },
  {
    icon: 'truck',
    title: 'Fleet & Crew Management',
    description: 'Optimize field operations with intelligent scheduling, dispatch, and crew utilization tracking.'
  },
  {
    icon: 'zap',
    title: 'Workflow Automation',
    description: 'Streamline operations from inspection to completion with automated work order generation and tracking.'
  }
];

export const SAELIX_SLATE = {
  name: 'Saelix Slate',
  version: '1.0.0',
  releaseDate: '2025-Q1',
  tagline: 'Unified GIS & Fleet Management Platform',
  description: 'Enterprise-grade platform for managing water, sewer, and stormwater infrastructure. Combines GIS asset management, CCTV inspection tracking, work order dispatch, crew scheduling, and compliance reporting in one unified system.',
  features: [
    'Interactive GIS mapping with real-time asset visualization',
    'CCTV inspection management and defect tracking',
    'Automated work order generation and crew dispatch',
    'Field crew scheduling and resource optimization',
    'Inventory and materials tracking',
    'Comprehensive reporting and analytics',
    'Role-based access control and permissions',
    'AI-powered data analysis and queries'
  ],
  keyBenefits: [
    'Reduce inspection-to-repair time from weeks to days',
    'Optimize crew utilization and reduce operational costs',
    'Ensure regulatory compliance with audit trails and reporting',
    'Leverage AI for predictive maintenance and asset prioritization'
  ],
  useCases: [
    'Sanitary sewer system management and maintenance',
    'Water infrastructure inspection and rehabilitation',
    'Stormwater asset management',
    'Municipal work order dispatch and tracking',
    'Infrastructure compliance reporting',
    'Predictive maintenance and asset lifecycle planning',
    'Multi-jurisdiction utility coordination',
    'Emergency response and critical asset management'
  ]
};

export const PRODUCT_MODULES = [
  { name: 'Dashboard', description: 'Real-time KPI overview and critical alerts' },
  { name: 'GIS Map', description: 'Interactive mapping with asset visualization and editing' },
  { name: 'Inspections', description: 'CCTV inspection records and defect management' },
  { name: 'Work Orders', description: 'Job creation, assignment, and tracking' },
  { name: 'Scheduling', description: 'Crew availability and shift planning' },
  { name: 'Inventory', description: 'Materials and parts tracking' },
  { name: 'Reports', description: 'Custom reporting and compliance documentation' },
  { name: 'Analytics', description: 'Advanced metrics and predictive analysis' }
];

export const TARGET_CUSTOMERS = [
  'Municipal Water Departments',
  'Sewer Utilities',
  'Stormwater Management Agencies',
  'Wastewater Treatment Operators',
  'Infrastructure Consulting Firms',
  'Private Contractors'
];

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
