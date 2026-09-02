export type ProjectCategory = 'all' | 'wordpress' | 'react' | 'ecommerce' | 'performance';

export interface ProjectProcessStep {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'wordpress' | 'react' | 'ecommerce' | 'performance';
  categoryLabel: string;
  description: string;
  fullDescription: string;
  problem: string;
  solution: string;
  processSteps: ProjectProcessStep[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl: string;
  screenshots?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  client: string;
  agencyUrl?: string; // <- Agregada como opcional
  role: string;
  year: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'tools';
  categoryLabel: string;
  level: number; // 0-100
  yearsExperience: string;
  icon: string; // Lucide icon name or SVG
  description: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  content: string;
  rating: number;
  projectTitle?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  imageUrl: string;
  tags: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  budget?: string;
  message: string;
}

export interface CvOptimizationStrategy {
  platform: 'workana' | 'linkedin' | 'remote_jobs';
  platformName: string;
  bestFor: string;
  ratingScore: number;
  recommendations: string[];
  keyHeadline: string;
  achievementsToHighlight: string[];
  dosAndDonts: {
    do: string[];
    dont: string[];
  };
}
