import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 transition-all duration-300 hover:border-green-500 hover:-translate-y-2 hover:shadow-xl flex flex-col">
      <h3 className="text-2xl font-bold text-white flex-grow">{product.name}</h3>
      <p className="mt-4 text-slate-300">{product.description}</p>
    </div>
  );
};