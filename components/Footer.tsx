

import React from 'react';
import { MIntergraphLogo, MapPinIcon, PhoneIcon, EnvelopeIcon } from './IconComponents';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };
  
  const quickLinks = [
    { label: 'Home', path: 'home' },
    { label: 'About Us', path: 'about' },
    { label: 'Clientele', path: 'about#clientele' },
    { label: 'Careers', path: 'careers' },
    { label: 'Solutions', path: 'solutions' },
    { label: 'Products', path: 'products' },
    { label: 'Services', path: 'services' },
    { label: 'IT Consulting', path: 'consulting' },
    { label: 'AI Finder', path: 'home#ai-finder' },
  ];

  const contactEmails = [
    { label: 'General Info', email: 'info@mintergraph.com' },
    { label: 'Sales', email: 'sales@mintergraph.com' },
    { label: 'Careers', email: 'careers@mintergraph.com' },
    { label: 'Service Desk', email: 'servicedesk@mintergraph.com' },
    { label: 'Contact', email: 'contact@mintergraph.com' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center space-x-3 mb-5">
              <MIntergraphLogo className="h-9 w-auto text-white" />
              <span className="text-xl font-bold text-white">M Intergraph Systems</span>
            </a>
            <p className="text-slate-400 leading-relaxed">
              An ISO-certified IT System Integrator and Managed Service Provider, offering a comprehensive suite of IT solutions.
            </p>
            <p className="mt-4 text-slate-500 italic text-sm">"PERFECT SOLUTION From It Advisor"</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map(link => (
                 <a key={link.path} href={`#${link.path}`} onClick={(e) => handleNavClick(e, link.path)} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200">{link.label}</a>
              ))}
            </nav>
          </div>

          {/* Column 3: Reach Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Reach Us</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start">
                <MapPinIcon className="h-6 w-6 mr-4 mt-1 flex-shrink-0 text-slate-500" />
                <span>GROUND FLOOR, A-99, DDA Shed, Block A, Okhla Phase II, Okhla Industrial Estate, New Delhi, Delhi 110020</span>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 mr-4 mt-1 flex-shrink-0 text-slate-500" />
                <div>
                  <a href="tel:+919899980247" className="hover:text-white transition-colors">+91 9899980247</a><br/>
                  <a href="tel:+919301530202" className="hover:text-white transition-colors">+91 93015 30202</a>
                </div>
              </li>
              <li className="flex items-start">
                <EnvelopeIcon className="h-5 w-5 mr-4 mt-1 flex-shrink-0 text-slate-500" />
                 <a href="mailto:contact@mintergraph.com" className="hover:text-white transition-colors">contact@mintergraph.com</a>
              </li>
            </ul>
             <div className="mt-4">
                <p className="font-semibold text-slate-200">Other Office Locations:</p>
                <p className="text-slate-400">Delhi, Mumbai, Jaipur</p>
            </div>
          </div>
          
          {/* Column 4: Emails */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Get in Touch</h3>
            <ul className="space-y-2.5 text-slate-400">
                {contactEmails.map(contact => (
                    <li key={contact.email}>
                        <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                            <span className="font-medium text-slate-300">{contact.label}:</span> {contact.email}
                        </a>
                    </li>
                ))}
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} M Intergraph Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};