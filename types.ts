export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  version: string;
  downloadUrl: string;
  features: string[];
  icon: string;
}

export interface Paper {
  id: string;
  title: string;
  author: string;
  date: string;
  abstract: string;
  category: 'Coherology' | 'Ethics' | 'Systems' | 'Philosophy';
  content?: string; // Full content simulated
  downloadUrl?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export type PageView = 'home' | 'products' | 'wiki' | 'about' | 'contact';
