

import React from 'react';
import { BuildingOfficeIcon, BoltIcon, LockClosedIcon, BeakerIcon, UsersIcon, CheckCircleIcon } from './IconComponents';

interface FacilityCardProps {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
    className?: string;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ icon, title, children, className = '' }) => (
    <div className={`bg-white border border-gray-200 p-8 lg:p-10 rounded-2xl flex flex-col shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full ${className}`}>
        <div className="flex items-center mb-6">
            <div className="text-blue-500">{icon}</div>
            <h3 className="ml-5 text-3xl font-bold text-slate-900">{title}</h3>
        </div>
        <div className="text-slate-600 text-lg leading-relaxed space-y-4 flex-grow">{children}</div>
    </div>
);

const InfoListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
        <span>{children}</span>
    </li>
);

export const FacilitiesPage: React.FC = () => {
    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section 
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-3xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Our Facilities</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                           Infrastructure for Excellence
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            World-class facilities designed to provide maximum uptime, security, and performance for your business needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Facilities Grid */}
            <div className="py-20 sm:py-28 lg:py-32">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        
                        <div className="animate-on-scroll">
                            <FacilityCard icon={<BuildingOfficeIcon className="h-12 w-12" />} title="Network Operations Center">
                                <p>Our NOC and Data Center serve as the backbone of our operations, designed to house network infrastructure, management systems, and our skilled support staff.</p>
                                <ul className="mt-5 space-y-4">
                                    <InfoListItem>A comprehensive view of all customer data for maximum system visibility.</InfoListItem>
                                    <InfoListItem>Your environment is remotely managed via a dedicated, secure connection.</InfoListItem>
                                    <InfoListItem>An alternate partner NOC in the UAE to cater to our Middle East customers.</InfoListItem>
                                </ul>
                            </FacilityCard>
                        </div>
                        
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <FacilityCard icon={<BoltIcon className="h-12 w-12" />} title="Reliability">
                                <p>A constant power supply is essential for uninterrupted service. Our facility includes robust backup power capabilities to ensure seamless operation.</p>
                                 <ul className="mt-5 space-y-4">
                                    <InfoListItem><strong>Battery Banks:</strong> Constantly charged to handle immediate power transitions.</InfoListItem>
                                    <InfoListItem><strong>Standby Generators:</strong> Ready to take over automatically during prolonged power outages.</InfoListItem>
                                </ul>
                            </FacilityCard>
                        </div>

                        <div className="animate-on-scroll">
                            <FacilityCard icon={<LockClosedIcon className="h-12 w-12" />} title="Security Measures">
                                 <p>M Intergraph prioritizes the physical and digital security of your assets with multi-layered protection.</p>
                                 <ul className="mt-5 space-y-4">
                                    <InfoListItem>Redundant security systems including video monitoring and biometric access control.</InfoListItem>
                                    <InfoListItem>A dedicated, 365-day on-site security team vigilantly safeguarding our premises.</InfoListItem>
                                </ul>
                            </FacilityCard>
                        </div>

                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <FacilityCard icon={<BeakerIcon className="h-12 w-12" />} title="Test Lab">
                                <p>We maintain a dedicated test lab for each client setup to simulate customer problems, perform in-depth troubleshooting, and better support client technology products.</p>
                                 <ul className="mt-5 space-y-4">
                                    <InfoListItem>Perform advanced, non-disruptive troubleshooting.</InfoListItem>
                                    <InfoListItem>Deepen our understanding of your unique technology stack.</InfoListItem>
                                </ul>
                            </FacilityCard>
                        </div>
                        
                        <div className="lg:col-span-2 animate-on-scroll">
                            <FacilityCard icon={<UsersIcon className="h-12 w-12" />} title="People and Processes">
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div>
                                        <p>Our skilled engineers handle L1, L2, and L3 support. Critical calls are promptly attended by L3 engineers from our Center of Excellence (CoE) team.</p>
                                    </div>
                                    <div>
                                        <p>We adhere to strict ITIL guidelines to ensure efficient, predictable, and effective processes.</p>
                                        <p className="mt-4 font-semibold text-blue-600">We proudly hold ISO 20000-1:2011 IT Service Management certification.</p>
                                    </div>
                                </div>
                            </FacilityCard>
                        </div>
                    </div>
                     {/* Final CTA */}
                    <div className="mt-24 sm:mt-32 text-center text-slate-600 border-t border-gray-200 pt-12">
                        <p className="text-2xl font-semibold">Our facilities reflect our commitment to <span className="text-blue-600">excellence and your success.</span></p>
                    </div>
                </div>
            </div>
        </main>
    );
};
