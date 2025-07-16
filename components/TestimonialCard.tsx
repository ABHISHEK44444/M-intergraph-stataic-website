

import React from 'react';
import type { Testimonial } from '../types';
import { QuoteIcon } from './IconComponents';

export const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl relative overflow-hidden border border-gray-200 flex flex-col h-full hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
      <QuoteIcon className="absolute top-6 left-6 h-16 w-16 text-gray-100 opacity-90" />
      <div className="relative z-10 flex flex-col flex-grow h-full">
        <blockquote className="text-xl font-medium italic text-slate-700 leading-relaxed flex-grow">
          "{testimonial.quote}"
        </blockquote>
        <div className="mt-8 pt-6 border-t border-gray-200 flex items-center">
          <img className="h-14 w-14 rounded-full shadow-lg border-2 border-white" src={testimonial.avatarUrl} alt={testimonial.author} />
          <div className="ml-4">
            <p className="font-bold text-slate-900 text-lg">{testimonial.author}</p>
            <p className="text-slate-500 text-sm">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
