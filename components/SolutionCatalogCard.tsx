import React from 'react';
import type { SolutionCatalogItem } from '../types';

interface SolutionCatalogCardProps {
    item: SolutionCatalogItem;
}

export const SolutionCatalogCard: React.FC<SolutionCatalogCardProps> = ({ item }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600 text-sm flex-grow">{item.description}</p>
                <a href="#" className="mt-4 text-cyan-600 hover:text-cyan-700 font-semibold text-sm self-start">
                    Read More
                </a>
            </div>
        </div>
    );
};
