export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface SaelixSlateSpec {
  version: string;
  releaseDate: string;
  features: string[];
}

export type PageView = 'home' | 'saelix-slate' | 'demo' | 'kala';
