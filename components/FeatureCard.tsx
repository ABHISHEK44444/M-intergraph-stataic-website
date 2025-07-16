import React from 'react';
import type { Feature } from '../types';

interface FeatureCardProps {
  feature: Feature;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-center h-16 w-16 mx-auto rounded-full bg-gray-200">
        {feature.icon}
      </div>
      <h3 className="mt-6 text-xl font-bold text-slate-900">{feature.title}</h3>
      <p className="mt-2 text-base text-slate-600">{feature.description}</p>
    </div>
  );
};
