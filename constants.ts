import { Feature, ModuleBeforeAfter, SolutionUseCase } from './types';

export const COMPANY_INFO = {
  name: 'Saelix',
  tagline: 'Infrastructure Management Platform',
  description: 'Unified GIS, inspections, and work orders for water, sewer, and stormwater utilities, municipalities, and infrastructure operators.',
  contactEmail: 'collaborate@saelix.org',
  founded: 2023
};

export const HOME_PAGE_FEATURES: Feature[] = [
  {
    icon: 'map',
    title: 'Single Source of Truth',
    description: 'One platform for GIS assets, inspection records, work orders, and compliance reports — no more toggling between disconnected systems.'
  },
  {
    icon: 'truck',
    title: 'Field Inspection to Compliant Report',
    description: 'CCTV inspection data flows directly into defect scoring, work order generation, and regulatory-ready reports in one continuous workflow.'
  },
  {
    icon: 'zap',
    title: 'Designed for Field Crews',
    description: 'Built for the people who actually do the work — intuitive scheduling, mobile-ready dispatch, and real-time crew coordination.'
  }
];

export const SAELIX_SLATE = {
  name: 'Saelix Slate',
  version: '1.0.0',
  releaseDate: '2025-Q1',
  tagline: 'Unified GIS & Field Operations for Water Infrastructure',
  description: 'Cut overflow incidents and regulatory risk with unified GIS, inspections, and work orders for water, sewer, and stormwater utilities. Enterprise-grade, but deployable by small and mid-sized utilities.',
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
    'Reduce inspection-to-repair cycles from weeks to days',
    'Eliminate duplicate data entry across GIS, inspections, and work orders',
    'Generate NASSCO-compliant reports directly from field inspection data',
    'Optimize crew utilization with intelligent scheduling and dispatch'
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

export const PRODUCT_MODULES_DETAIL: ModuleBeforeAfter[] = [
  {
    name: 'Dashboard',
    icon: 'bar-chart',
    before: 'Scattered KPI data across spreadsheets, emails, and legacy systems. No single view of operational health.',
    after: 'Real-time operational dashboard with critical alerts, crew status, and compliance deadlines in one screen.',
    outcome: 'Faster decision-making, fewer missed SLA deadlines.'
  },
  {
    name: 'GIS Map',
    icon: 'map-pin',
    before: 'Paper maps or disconnected GIS that doesn\'t link to inspection history or work orders.',
    after: 'Interactive asset map with inspection history, condition scores, and work order status layered directly on each pipe segment.',
    outcome: 'Know the full story of any asset in two clicks.'
  },
  {
    name: 'Inspections',
    icon: 'clipboard-check',
    before: 'CCTV footage reviewed in one system, defects logged in another, reports generated manually.',
    after: 'CCTV inspection records with NASSCO defect coding, automatic severity scoring, and one-click report generation.',
    outcome: 'From CCTV inspection to compliant report in one system.'
  },
  {
    name: 'Work Orders',
    icon: 'file-text',
    before: 'Work orders created manually from inspection notes, dispatched via radio or phone calls.',
    after: 'Automated work order generation from inspection findings, with crew assignment, priority scoring, and progress tracking.',
    outcome: 'No inspection finding falls through the cracks.'
  },
  {
    name: 'Scheduling',
    icon: 'calendar',
    before: 'Whiteboards, spreadsheets, or memory-based crew scheduling with no visibility into availability.',
    after: 'Visual crew scheduling with availability tracking, skill matching, and geographic optimization.',
    outcome: 'Right crew, right job, right time.'
  },
  {
    name: 'Inventory',
    icon: 'package',
    before: 'Manual inventory counts, no connection between parts used and work orders completed.',
    after: 'Materials tracking linked to work orders, automatic reorder alerts, and usage trend analysis.',
    outcome: 'Never delay a repair for a missing part.'
  },
  {
    name: 'Reports',
    icon: 'file-text',
    before: 'Hours spent compiling compliance reports from multiple data sources each reporting cycle.',
    after: 'One-click compliance reports for EPA, NASSCO, and OSHA requirements with complete audit trails.',
    outcome: 'Audit-ready documentation without the manual effort.'
  },
  {
    name: 'Analytics',
    icon: 'bar-chart',
    before: 'Reactive maintenance decisions based on gut feel or the last emergency.',
    after: 'Trend analysis, predictive condition scoring, and data-driven capital planning.',
    outcome: 'Move from reactive to proactive infrastructure management.'
  }
];

export const WHY_UTILITIES_CHOOSE = [
  'Single source of truth for GIS assets, inspections, work orders, and compliance',
  'From field inspection to compliant report in one continuous workflow',
  'Enterprise-grade capabilities deployable by small and mid-sized utilities',
  'Designed for field crews, not just back-office managers',
  'Built specifically for water, sewer, and stormwater infrastructure',
  'Built by operators and engineers who have worked with CCTV, NASSCO, and GIS in the field'
];

export const CASE_STUDY = {
  headline: 'How a 500-Mile System Cut Unplanned Truck Rolls by 30%',
  summary: 'A mid-sized municipal water utility managing over 500 miles of sewer and stormwater pipe was drowning in disconnected systems — GIS in one tool, inspections in another, work orders on paper. Crews were dispatched reactively, often rolling trucks to sites that had already been addressed or lacked the right parts.',
  results: [
    { metric: '30%', label: 'Reduction in unplanned truck rolls' },
    { metric: '60%', label: 'Faster inspection-to-work-order cycle' },
    { metric: '4 hrs/week', label: 'Saved on compliance reporting' }
  ],
  quote: 'We stopped re-keying the same data into three different systems. Now an inspection finding becomes a work order in one click, and the right crew shows up with the right parts.',
  attribution: 'Collections System Manager'
};

export const GUIDED_DEMO_STEPS = [
  { step: 1, action: 'Open the GIS Map', description: 'See your infrastructure assets on an interactive map' },
  { step: 2, action: 'Select a pipe segment', description: 'View condition data, inspection history, and linked work orders' },
  { step: 3, action: 'Browse Inspections', description: 'Review CCTV inspection records with NASSCO defect coding' },
  { step: 4, action: 'Create a Work Order', description: 'Generate a work order directly from an inspection finding' }
];

export const TARGET_CUSTOMERS = [
  'Municipal Water Departments',
  'Sewer Utilities',
  'Stormwater Management Agencies',
  'Wastewater Treatment Operators',
  'Infrastructure Consulting Firms',
  'Private Contractors'
];

export const SOLUTIONS_WATER_UTILITIES = {
  title: 'Solutions for Water Utilities',
  subtitle: 'Unified GIS, inspections, and work orders for water, sewer, and stormwater infrastructure.',
  heroDescription: 'Water utilities manage thousands of miles of buried infrastructure with aging assets, limited budgets, and growing regulatory pressure. Saelix Slate gives your team one platform to manage it all.',
  useCases: [
    {
      title: 'Sewer Lining & Rehabilitation Projects',
      description: 'Coordinate CCTV inspection, defect scoring, contractor dispatch, and closeout documentation in one workflow.',
      bulletPoints: [
        'Prioritize pipe segments by condition score and failure risk',
        'Track lining project progress from inspection to completion',
        'Generate as-built documentation automatically'
      ]
    },
    {
      title: 'FOG (Fats, Oils & Grease) Programs',
      description: 'Manage FOG inspections, compliance tracking, and enforcement actions from the same platform as your mainline inspections.',
      bulletPoints: [
        'Schedule recurring FOG inspections by zone',
        'Track compliance status for every food service establishment',
        'Link FOG violations to downstream SSO risk areas on GIS'
      ]
    },
    {
      title: 'SSO (Sanitary Sewer Overflow) Prevention',
      description: 'Identify high-risk segments before overflows happen by connecting inspection data to maintenance history and weather patterns.',
      bulletPoints: [
        'Risk-rank pipe segments using inspection and incident history',
        'Automate preventive maintenance scheduling for high-risk zones',
        'Document overflow responses for regulatory reporting'
      ]
    },
    {
      title: 'Capital Improvement Planning',
      description: 'Use inspection data and condition scoring to build data-driven capital improvement programs.',
      bulletPoints: [
        'Aggregate condition data across your entire system',
        'Project rehabilitation timelines based on deterioration curves',
        'Export data-backed CIP recommendations for budget requests'
      ]
    }
  ] as SolutionUseCase[]
};

export const SOLUTIONS_MUNICIPALITIES = {
  title: 'Solutions for Municipalities',
  subtitle: 'Enterprise-grade infrastructure management that works for small and mid-sized municipal operations.',
  heroDescription: 'Municipal public works departments juggle multiple infrastructure systems — water, sewer, stormwater — often with small teams and limited technology budgets. Saelix Slate provides enterprise capabilities without enterprise complexity.',
  useCases: [
    {
      title: 'Multi-System Infrastructure Management',
      description: 'Manage water, sewer, and stormwater assets in a single GIS-based platform instead of maintaining separate systems for each.',
      bulletPoints: [
        'Unified asset registry across all infrastructure types',
        'Shared crew scheduling across water, sewer, and storm operations',
        'Consolidated reporting for council presentations and audits'
      ]
    },
    {
      title: 'Storm Event Response',
      description: 'Coordinate emergency inspections, damage assessments, and repair dispatch when severe weather hits your infrastructure.',
      bulletPoints: [
        'Rapid field inspection capture during and after storm events',
        'Priority-based work order dispatch for emergency repairs',
        'FEMA-ready damage documentation and cost tracking'
      ]
    },
    {
      title: 'Consent Decree & Regulatory Compliance',
      description: 'Meet regulatory deadlines and consent decree milestones with audit-ready documentation generated directly from operational data.',
      bulletPoints: [
        'Track inspection and repair milestones against regulatory timelines',
        'Generate compliance reports on demand for regulators',
        'Maintain complete audit trails for every asset and activity'
      ]
    },
    {
      title: 'Cross-Department Coordination',
      description: 'Break down silos between water, sewer, streets, and engineering departments with shared visibility into infrastructure activities.',
      bulletPoints: [
        'Shared GIS view across departments',
        'Cross-department work order visibility',
        'Consolidated scheduling to prevent conflicting fieldwork'
      ]
    }
  ] as SolutionUseCase[]
};

export const KALA = {
  name: 'KALA',
  fullName: 'Kognition Adaptive Learning Architecture',
  tagline: 'Ethical AI with Persistent Memory',
  description: 'An adaptive AI architecture built on an immutable ethics kernel — five foundational laws that ensure transparent recommendations, auditable decisions, and predictable behavior under regulatory constraints. KALA is the AI engine that will power predictive maintenance, anomaly detection, and explainable recommendations inside Saelix Slate.',
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
    name: 'Adaptive Learning Architecture',
    description: 'KALA maintains persistent context across sessions, enabling it to build understanding of your infrastructure over time and deliver increasingly relevant recommendations.',
    methods: [
      {
        name: 'Structured Knowledge Encoding',
        description: 'Information is encoded in hierarchical structures that preserve full context — from individual inspection findings to system-wide condition trends — enabling complete knowledge transfer across sessions.',
        role: 'Storage & context preservation'
      },
      {
        name: 'Scalable Pattern Indexing',
        description: 'Memory is organized using self-similar indexing patterns that maintain efficient retrieval at any scale — whether querying a single asset or analyzing trends across an entire utility system.',
        role: 'Retrieval & organization'
      },
      {
        name: 'Context-Aware Relevance',
        description: 'Memory retrieval is weighted by contextual relevance, surfacing the most pertinent historical data, inspection patterns, and maintenance outcomes for each decision point.',
        role: 'Relevance & prioritization'
      }
    ]
  },
  capabilities: [
    'Transparent recommendations with full reasoning audit trails',
    'Predictive maintenance prioritization based on inspection and condition data',
    'Anomaly detection across inspection records and operational patterns',
    'Explainable AI decisions that meet regulatory scrutiny',
    'Persistent learning that improves recommendations over time',
    'Auditable decision logs tied to ethics kernel validation'
  ],
  status: 'Research & Development'
};

export const FOOTER_LINKS = {
  product: [
    { label: 'Saelix Slate', href: '/saelix-slate' },
    { label: 'KALA AI Lab', href: '/kala' }
  ],
  solutions: [
    { label: 'Water Utilities', href: '/solutions-water' },
    { label: 'Municipalities', href: '/solutions-municipalities' }
  ],
  company: [
    { label: 'Contact', href: `mailto:${COMPANY_INFO.contactEmail}` }
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' }
  ]
};
