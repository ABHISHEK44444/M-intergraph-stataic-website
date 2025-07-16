import { PRODUCTS } from '../constants';
import type { AiSolution, Product } from '../types';

export const findSolutions = async (problemDescription: string): Promise<AiSolution[]> => {
  try {
    const response = await fetch('/api/gemini', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ problemDescription }),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: `The AI service returned an error (status: ${response.status})` }));
        throw new Error(errorData.message || 'An unexpected error occurred while communicating with the AI service.');
    }

    const solutions: AiSolution[] = await response.json();
    
    // Filter on the client-side to ensure the AI didn't hallucinate a product name.
    const validSolutions = solutions.filter(sol => 
        PRODUCTS.some((p: Product) => p.name === sol.productName)
    );
    
    return validSolutions;

  } catch (error) {
    console.error('Error calling /api/gemini endpoint:', error);
    if (error instanceof Error) {
        throw new Error(`Failed to get a recommendation. Details: ${error.message}`);
    }
    throw new Error('An unknown error occurred while communicating with the AI service.');
  }
};
