import type React from 'react';

export interface Product {
  name: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  avatarUrl: string;
}

export interface AiSolution {
  productName: string;
  reasoning: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SolutionCatalogItem {
  title: string;
  description: string;
  image: string;
}
