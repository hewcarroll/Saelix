import { Product, Paper } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Aether Lens',
    tagline: 'Ethical Bias Detection & Correction',
    description: 'A robust analysis tool for large language models that visualizes and corrects semantic bias in real-time, ensuring alignment with Coherology principles.',
    version: '2.4.1',
    downloadUrl: '#',
    features: ['Real-time Sentiment Mapping', 'Bias Vector Visualization', 'Coherence Score Integration'],
    icon: 'search'
  },
  {
    id: 'p2',
    name: 'Coherent Flow',
    tagline: 'Workflow Optimization for Research Teams',
    description: 'A collaborative platform designed to synchronize research efforts across distributed teams using predictive coherence modeling.',
    version: '1.0.8',
    downloadUrl: '#',
    features: ['Node-based Logic Streams', 'Encrypted Data Sharing', 'Automated Citation Management'],
    icon: 'share-2'
  },
  {
    id: 'p3',
    name: 'Saelix Core',
    tagline: 'Foundational AI Framework',
    description: 'The open-source kernel powering all Saelix applications. Build your own tools upon the principles of ethical computing.',
    version: '0.9.5-beta',
    downloadUrl: '#',
    features: ['Modular Architecture', 'Python & Rust Bindings', 'Low-latency Inference Engine'],
    icon: 'cpu'
  }
];

export const PAPERS: Paper[] = [
  {
    id: 'w1',
    title: 'Foundations of Coherology: Unifying Synthetic and Organic Intelligence',
    author: 'Dr. Aris Thorne',
    date: '2023-11-15',
    category: 'Coherology',
    abstract: 'An introduction to the fundamental axioms of Coherology, exploring how resonant frequencies in information processing can bridge the gap between biological cognition and artificial neural networks.',
  },
  {
    id: 'w2',
    title: 'Ethical Alignment in High-Parameter Models',
    author: 'Saelix Research Team',
    date: '2024-02-10',
    category: 'Ethics',
    abstract: 'A comparative study on reinforcement learning from human feedback (RLHF) versus Constitutional AI, proposing a third path based on Coherence Theory.',
  },
  {
    id: 'w3',
    title: 'Quantum Coherence in Neuromorphic Chips',
    author: 'L. V. Chen',
    date: '2024-05-22',
    category: 'Systems',
    abstract: 'Investigating the potential for quantum tunneling effects to improve energy efficiency in next-generation hardware tailored for Coherology-based models.',
  },
  {
    id: 'w4',
    title: 'The Mirror Protocol: Reflective Safety Mechanisms',
    author: 'Sarah Jenkins',
    date: '2023-08-30',
    category: 'Ethics',
    abstract: 'Defining a safety protocol where AI systems must simulate the potential social impact of an output before generation, effectively creating a "conscience" loop.',
  },
  {
    id: 'w5',
    title: 'Harmonic Data Structures',
    author: 'Dr. Aris Thorne',
    date: '2024-01-12',
    category: 'Coherology',
    abstract: 'Redefining database architecture to prioritize relationship integrity and semantic resonance over traditional indexing methods.',
  }
];
