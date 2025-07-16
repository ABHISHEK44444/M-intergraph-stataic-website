
import React from 'react';
import type { Product, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    name: 'IT System Integration Solutions',
    description: 'Seamlessly integrate technology components to optimize your business processes.',
  },
  {
    name: 'Managed IT Services',
    description: 'Trust us to manage your IT infrastructure efficiently, so you can focus on your core business.',
  },
  {
    name: 'Private Branded Field Services',
    description: 'Collaborate with our network of System Integrators and IT Service companies in the Middle East for customized field services.',
  },
  {
    name: 'Network Operations Center (NOC) Services',
    description: 'Ensure uninterrupted operations with our NOC services spanning the Middle East, Africa, and Europe.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "M Intergraph Systems has consistently delivered goods and computers as per our delivery schedules. Their after-sales service support has been highly satisfactory and prompt.",
    author: 'Valued Customer',
    company: 'Enterprise Client',
    avatarUrl: 'https://i.pravatar.cc/100?u=valued-customer',
  },
  {
    quote: "The team at M Intergraph is exceptional. Their expertise in cloud advisory helped us migrate seamlessly to a hybrid cloud environment, significantly improving our operational efficiency and reducing costs.",
    author: 'Aarav Sharma',
    company: 'Innovatech Solutions',
    avatarUrl: 'https://i.pravatar.cc/100?u=aarav-sharma',
  },
  {
    quote: "Their managed IT services are second to none. The proactive support and 24/7 monitoring from their NOC team give us complete peace of mind. A truly reliable and professional partner.",
    author: 'Priya Mehta',
    company: 'Global Logistics Corp',
    avatarUrl: 'https://i.pravatar.cc/100?u=priya-mehta',
  },
  {
    quote: "The VDI solution implemented by M Intergraph transformed our remote work capabilities. It's secure, fast, and was deployed with minimal disruption to our operations. Highly recommended!",
    author: 'Rajesh Kumar',
    company: 'FutureBuild Construction',
    avatarUrl: 'https://i.pravatar.cc/100?u=rajesh-kumar',
  },
];
