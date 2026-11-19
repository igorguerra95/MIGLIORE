import type { ReactNode } from 'react';

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

export type ProjectCategory = 'Todos' | 'Residencial' | 'Comercial';

export interface PortfolioProject {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'Todos'>;
  location: string;
  areaSqm: number;
  year: string;
  image: string;
  imageAlt: string;
  summary: string;
  architecturalConcept: string;
  materials: string[];
  featured?: boolean;
}

export interface StudioMetric {
  id: string;
  value: number;
  suffix: string;
  label: string;
  detail: string;
}

export interface ProcessStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: 'Residencial' | 'Comercial' | 'Corporativo';
  estimatedArea: string;
  message: string;
}
