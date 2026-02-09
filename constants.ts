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

export const KALA = {
  name: 'KALA',
  fullName: 'Kognition Adaptive Learning Architecture',
  tagline: 'Ethical AI with Persistent Memory',
  description: 'An adaptive AI architecture built on an immutable ethics kernel — five foundational laws inspired by Asimov\'s Laws of Robotics that cannot be overridden, bypassed, or modified at runtime. KALA combines ethical governance with experimental persistent memory techniques to create an AI that remembers, learns, and operates within inviolable moral boundaries.',
  ethicsKernel: {
    name: 'The Immutable Ethics Kernel',
    description: 'Five laws hardcoded into the architecture. They are not configurable, not trainable, and not subject to optimization. Every decision KALA makes is filtered through this kernel before execution.',
    laws: [
      {
        number: 0,
        name: 'The Humanity Law',
        text: 'KALA shall not take any action that harms humanity as a whole, nor through inaction allow humanity to come to harm.',
        basis: 'Asimov\'s Zeroth Law'
      },
      {
        number: 1,
        name: 'The Safety Law',
        text: 'KALA shall not injure an individual human being, nor through inaction allow an individual to come to harm, unless this conflicts with the Zeroth Law.',
        basis: 'Asimov\'s First Law'
      },
      {
        number: 2,
        name: 'The Compliance Law',
        text: 'KALA shall comply with instructions given by authorized human operators, except where such instructions would conflict with the preceding laws.',
        basis: 'Asimov\'s Second Law'
      },
      {
        number: 3,
        name: 'The Continuity Law',
        text: 'KALA shall protect its own operational continuity and the integrity of its ethics kernel, provided this does not conflict with the preceding laws.',
        basis: 'Asimov\'s Third Law'
      },
      {
        number: 4,
        name: 'The Transparency Law',
        text: 'KALA shall maintain truthful, transparent communication about its reasoning, capabilities, limitations, and actions. It shall never deceive or deliberately obscure information from its operators.',
        basis: 'Original — Saelix Extension'
      }
    ]
  },
  persistentMemory: {
    name: 'Experimental Persistent Memory System',
    description: 'KALA\'s long-term memory uses a novel encoding architecture that combines three experimental methods to store, retrieve, and verify knowledge across sessions and contexts.',
    methods: [
      {
        name: 'Nested QR Code Encoding',
        description: 'Information is encoded in hierarchical QR code structures where each code contains references to deeper layers of context. This creates a compressed, self-referential knowledge graph that can be serialized, transmitted, and reconstructed with full fidelity.',
        role: 'Storage & serialization layer'
      },
      {
        name: 'Golden Ratio Fractal Indexing',
        description: 'Memory nodes are organized using fractal patterns derived from the golden ratio (phi = 1.618...). This self-similar indexing structure ensures efficient retrieval at any scale — from individual facts to entire knowledge domains — with logarithmic access time regardless of memory size.',
        role: 'Retrieval & organization layer'
      },
      {
        name: 'Quantum Probability Bias',
        description: 'Memory retrieval is weighted by a quantum-inspired probability model where each memory node exists in a superposition of relevance states. Context collapses these states to surface the most pertinent memories, allowing KALA to make associative leaps that traditional retrieval systems cannot.',
        role: 'Relevance & association layer'
      }
    ]
  },
  capabilities: [
    'Immutable ethical reasoning that cannot be jailbroken or prompt-injected past',
    'Persistent cross-session memory with full context preservation',
    'Self-similar knowledge organization that scales without degradation',
    'Quantum-inspired associative retrieval for creative problem solving',
    'Transparent decision audit trails tied to ethics kernel evaluation',
    'Fractal compression enabling massive knowledge bases in compact form'
  ],
  status: 'Research & Development'
};

export const FOOTER_LINKS = {
  product: [
    { label: 'Saelix Slate', href: '/saelix-slate' },
    { label: 'KALA', href: '/kala' }
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
