
import React, { useState, useCallback } from 'react';
import { findSolutions } from '../services/geminiService';
import type { AiSolution } from '../types';
import { WandIcon, CheckCircleIcon } from './IconComponents';

const LoadingSpinner: React.FC = () => (
    <div className="flex items-center justify-center space-x-4" aria-label="Analyzing your needs">
        <svg className="animate-spin h-8 w-8 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span className="text-xl text-slate-300">Analyzing your needs...</span>
    </div>
);

export const AiSolutionFinder: React.FC = () => {
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [solutions, setSolutions] = useState<AiSolution[] | null>(null);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) {
            setError('Please describe your business problem.');
            return;
        }

        setIsLoading(true);
        setError(null);
        setSolutions(null);

        try {
            const result = await findSolutions(query);
            if (result.length === 0) {
                setError("Our AI couldn't find a specific match for your request. Please try rephrasing your problem.");
            } else {
                setSolutions(result);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    }, [query]);

    return (
        <div className="bg-slate-900 rounded-3xl p-10 md:p-16 border border-slate-800 shadow-2xl shadow-black/30">
            <div className="text-center">
                <WandIcon className="mx-auto h-16 w-16 text-blue-400" />
                <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">AI-Powered Solution Finder</h2>
                <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-300">
                    Describe your business challenge or goal, and our AI consultant will recommend the perfect M Intergraph Systems product for you.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-12 max-w-2xl mx-auto">
                <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g., 'We need to automate our sales reporting and connect our CRM to our marketing platform.'"
                    className="w-full h-40 p-5 bg-slate-800 border-2 border-slate-700 rounded-xl text-white text-lg placeholder-slate-500 focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300"
                    disabled={isLoading}
                    aria-label="Describe your business challenge"
                />
                <button
                    type="submit"
                    className="mt-6 w-full flex items-center justify-center rounded-xl px-6 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg hover:shadow-xl hover:shadow-blue-600/20 hover:scale-105 transform transition-all duration-300 disabled:from-slate-600 disabled:to-slate-700 disabled:shadow-lg disabled:scale-100 disabled:cursor-not-allowed"
                    disabled={isLoading}
                >
                    {isLoading ? 'Thinking...' : 'Find My Solution'}
                </button>
            </form>

            <div className="mt-12 max-w-3xl mx-auto">
                {isLoading && <LoadingSpinner />}
                {error && <p className="text-center text-red-300 bg-red-900/40 p-4 rounded-xl text-lg">{error}</p>}
                {solutions && (
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-center text-white">Here are your recommended solutions:</h3>
                        {solutions.map((solution, index) => (
                            <div 
                                key={index} 
                                className="bg-slate-800/60 p-6 rounded-xl border border-slate-700 animate-on-scroll is-visible"
                                style={{'--animation-delay': `${index * 0.1}s`} as React.CSSProperties}
                            >
                                <h4 className="flex items-center text-xl font-bold text-blue-400">
                                    <CheckCircleIcon className="h-7 w-7 mr-3" />
                                    {solution.productName}
                                </h4>
                                <p className="mt-3 text-slate-300 text-base">{solution.reasoning}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
