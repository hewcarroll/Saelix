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

export type PageView = 'home' | 'saelix-slate' | 'demo' | 'kala' | 'solutions-water' | 'solutions-municipalities';

export interface ModuleBeforeAfter {
  name: string;
  icon: string;
  before: string;
  after: string;
  outcome: string;
}

export interface SolutionUseCase {
  title: string;
  description: string;
  bulletPoints: string[];
}
