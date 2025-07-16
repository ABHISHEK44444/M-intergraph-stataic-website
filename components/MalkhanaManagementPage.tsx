import React from 'react';
import {
    LockClosedIcon,
    ClockIcon,
    ChartBarIcon,
    DocumentDuplicateIcon,
    UsersIcon,
    CheckCircleIcon
} from './IconComponents';

interface MalkhanaManagementPageProps {
    onNavigate: (path: string) => void;
}

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 text-yellow-300">{icon}</div>
        <div className="ml-4">
            <h4 className="text-xl font-bold uppercase tracking-wide">{title}</h4>
            <p className="mt-1 text-blue-100">{description}</p>
        </div>
    </div>
);

const OfferItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
        <span className="text-slate-700 font-medium">{children}</span>
    </li>
);

export const MalkhanaManagementPage: React.FC<MalkhanaManagementPageProps> = ({ onNavigate }) => {
    
    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    return (
        <main className="bg-gray-100">
            {/* Hero Section */}
            <section 
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1599687351148-44b41a393e11?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-slate-900/70"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Product: Malkhana Management</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            Transforming Malkhana Management Across Police Forces
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            Smarter Evidence Tracking | State-Wide Visibility | Real-Time Monitoring
                        </p>
                    </div>
                </div>
            </section>

             <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">The Challenge of Manual Management</h2>
                        <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                           Malkhana rooms — custodians of seized items and evidence — are critical to justice. Yet, in most police stations, these are still manually managed, prone to delays, errors, or loss. At M Intergraph Systems Pvt. Ltd., we’ve developed a state-wide scalable RFID-based Malkhana Management System tailored for police departments.
                        </p>
                    </div>
                </div>
            </section>
            
            <section className="py-20 sm:py-24 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto shadow-2xl rounded-2xl overflow-hidden">
                        {/* Top Section */}
                        <div className="grid md:grid-cols-2">
                             <div className="bg-blue-600 text-white p-8 md:p-12 flex flex-col justify-center animate-on-scroll">
                                 <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase">Transforming Malkhana Management</h3>
                                <p className="mt-4 text-lg font-semibold text-blue-200">Smarter Evidence Tracking | State-Wide Visibility | Real-Time Monitoring</p>
                            </div>
                             <div className="bg-white p-8 md:p-12 animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                                <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-wider">What We Offer:</h3>
                                <ul className="mt-6 space-y-4 text-lg">
                                    <OfferItem>RFID-tagging of evidence FIR-wise</OfferItem>
                                    <OfferItem>Dock-door RFID readers for gate-level logging</OfferItem>
                                    <OfferItem>Integration with CCTNS APIs</OfferItem>
                                    <OfferItem>Android app for TC15 handhelds</OfferItem>
                                    <OfferItem>Role-based dashboards at district/HQ levels</OfferItem>
                                    <OfferItem>Real-time movement logs, alerts, and audit trails</OfferItem>
                                </ul>
                            </div>
                        </div>
                        {/* Bottom Section */}
                        <div className="grid md:grid-cols-2">
                             <div className="bg-blue-800 text-white p-8 md:p-12 flex flex-col justify-center order-last md:order-first animate-on-scroll">
                                <h3 className="text-2xl font-bold uppercase tracking-wider mb-8">System-Wide Benefits</h3>
                                <div className="space-y-8">
                                    <BenefitCard icon={<LockClosedIcon className="w-8 h-8"/>} title="Secure Chain of Custody" description="Prevent tampering or unauthorized access"/>
                                    <BenefitCard icon={<ClockIcon className="w-8 h-8"/>} title="Save Time" description="Instantly locate, track, and report evidence items"/>
                                    <BenefitCard icon={<ChartBarIcon className="w-8 h-8"/>} title="Data-Driven Monitoring" description="Centralized visibility for oversight teams"/>
                                    <BenefitCard icon={<DocumentDuplicateIcon className="w-8 h-8"/>} title="Auto-Generated Records" description="Reduce manual errors, enable instant audits"/>
                                </div>
                            </div>
                             <div className="bg-gray-50 p-8 md:p-12 order-first md:order-last animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                                <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-wider">Used Globally</h3>
                                <ul className="mt-6 space-y-4 text-lg">
                                    <OfferItem><strong>U.S. Police Departments:</strong> RFID-tagged narcotics & vehicle impound</OfferItem>
                                    <OfferItem><strong>UK Border Force:</strong> RFID-enabled customs screening</OfferItem>
                                </ul>
                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-wider">Let's Bring Smart Policing</h3>
                                    <p className="mt-4 text-lg text-slate-600">For demos or RFP partnerships, write to us.</p>
                                     <a href="mailto:solutions@mintergraph.com" className="mt-4 inline-block font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                                        solutions@mintergraph.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Final CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Reinforce Judicial Integrity and Citizen Confidence</h2>
                    <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
                      Our Malkhana Management system is a critical step towards modern, transparent, and efficient law enforcement. Let us help you implement this transformative solution.
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Request a Demo
                    </a>
                </div>
            </section>
        </main>
    )
};
