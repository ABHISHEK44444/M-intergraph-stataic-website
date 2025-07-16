
import React, { useState, useEffect } from 'react';
import { XMarkIcon, PhoneIcon, EnvelopeIcon } from './IconComponents';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [serviceType, setServiceType] = useState('General Inquiry');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen) {
        return null;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate a network request
        setTimeout(() => {
            if (name && email && message && phone) {
                setStatus('success');
                // Don't clear fields on success, in case user wants to close manually.
            } else {
                setStatus('error');
            }
        }, 1500);
    };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 max-w-xl w-full relative transform transition-all duration-300 ease-out"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose}
                    className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close contact form"
                >
                    <XMarkIcon className="h-7 w-7" />
                </button>
                
                {status === 'success' ? (
                    <div className="text-center py-10">
                        <h2 className="text-3xl font-bold text-blue-600 mb-3">Thank You!</h2>
                        <p className="text-lg text-slate-600">Your message has been sent successfully. We'll get back to you shortly.</p>
                        <button
                            onClick={onClose}
                            className="mt-8 w-full rounded-lg bg-blue-600 px-6 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-700 hover:shadow-xl transform transition-all duration-300"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="text-center">
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Contact Us</h2>
                            <p className="mt-3 text-lg text-slate-500">Your email address will not be published. Required fields are marked *</p>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="name" className="sr-only">Your Name</label>
                                    <input 
                                        type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
                                        placeholder="Your Name *" 
                                        className="w-full px-5 py-3.5 bg-gray-100 border-2 border-gray-200 rounded-lg text-base focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300" 
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Email Address</label>
                                    <input 
                                        type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email Address *" 
                                        className="w-full px-5 py-3.5 bg-gray-100 border-2 border-gray-200 rounded-lg text-base focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300" 
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="sr-only">Phone Number</label>
                                    <input 
                                        type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Phone Number *" 
                                        className="w-full px-5 py-3.5 bg-gray-100 border-2 border-gray-200 rounded-lg text-base focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300" 
                                        required
                                    />
                                </div>
                                 <div>
                                    <label htmlFor="service-type" className="sr-only">Service Type</label>
                                    <select 
                                        id="service-type"
                                        value={serviceType}
                                        onChange={(e) => setServiceType(e.target.value)}
                                        className="w-full px-5 py-3.5 bg-gray-100 border-2 border-gray-200 rounded-lg text-base text-slate-600 focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300"
                                    >
                                        <option>General Inquiry</option>
                                        <option>IT Consulting & Advisory</option>
                                        <option>IT System Integration</option>
                                        <option>Managed IT Services</option>
                                        <option>Private Branded Field Services</option>
                                        <option>NOC Services</option>
                                        <option>Careers</option>
                                        <option>Sales</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Enter Your Message here</label>
                                <textarea 
                                    id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Enter Your Message here *" 
                                    className="w-full px-5 py-3.5 bg-gray-100 border-2 border-gray-200 rounded-lg text-base focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300"
                                    required
                                ></textarea>
                            </div>
                            
                            {status === 'error' && (
                                <p className="text-base text-red-600 text-center">Please fill out all required fields.</p>
                            )}
                            
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center rounded-lg px-6 py-4 text-lg font-semibold text-white bg-blue-600 shadow-lg hover:shadow-xl hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 disabled:from-slate-500 disabled:to-slate-600 disabled:shadow-lg disabled:scale-100 disabled:cursor-not-allowed"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                         <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-slate-500">
                            <p>Or contact us directly:</p>
                            <div className="mt-3 flex justify-center items-center space-x-6">
                                <a href="mailto:contact@mintergraph.com" className="flex items-center text-slate-600 hover:text-blue-600 transition-colors">
                                    <EnvelopeIcon className="h-5 w-5 mr-2" />
                                    <span>contact@mintergraph.com</span>
                                </a>
                                <a href="tel:+919899980247" className="flex items-center text-slate-600 hover:text-blue-600 transition-colors">
                                    <PhoneIcon className="h-5 w-5 mr-2" />
                                    <span>+91 9899980247</span>
                                </a>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
