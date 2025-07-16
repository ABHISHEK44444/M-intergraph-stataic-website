
import React from 'react';
import { WhatsappIcon, PhoneIcon, QuestionMarkCircleIcon } from './IconComponents';

interface FloatingContactBarProps {
  onNavigate: (path: string) => void;
}

export const FloatingContactBar: React.FC<FloatingContactBarProps> = ({ onNavigate }) => {
    const handleHelpClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-end">
            <a 
                href="https://wa.me/919899980247" // Replace with actual WhatsApp number
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-l-lg shadow-lg mb-2 transform hover:translate-x-[-8px] transition-transform duration-200 ease-in-out" 
                aria-label="Contact us on WhatsApp"
            >
                <WhatsappIcon className="h-6 w-6" />
            </a>
            <a 
                href="tel:+919899980247" // Replace with actual phone number
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-l-lg shadow-lg mb-2 transform hover:translate-x-[-8px] transition-transform duration-200 ease-in-out" 
                aria-label="Call us"
            >
                <PhoneIcon className="h-6 w-6" />
            </a>
            <a 
                href="#" 
                onClick={handleHelpClick}
                className="bg-slate-600 hover:bg-slate-700 text-white p-3 rounded-l-lg shadow-lg transform hover:translate-x-[-8px] transition-transform duration-200 ease-in-out" 
                aria-label="Get help"
            >
                <QuestionMarkCircleIcon className="h-6 w-6" />
            </a>
        </div>
    );
};
