
import React from 'react';
import {
    UsersIcon,
    BriefcaseIcon,
    LightBulbIcon,
    ShieldCheckIcon,
    ServerStackIcon,
    ComputerDesktopIcon,
    ClipboardDocumentCheckIcon,
    RocketIcon
} from './IconComponents';

interface ServerManagementPageProps {
    onNavigate: (path: string) => void;
}

const SectionTitle: React.FC<{ title: string; subtitle?: string; }> = ({ title, subtitle }) => (
    <div className="text-center max-w-4xl mx-auto animate-on-scroll">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{title}</h2>
        {subtitle && <p className="mt-6 text-xl text-slate-600">{subtitle}</p>}
    </div>
);

const DetailCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full">
        <div className="bg-blue-100 text-blue-600 w-16 h-16 mb-6 rounded-full flex items-center justify-center">{icon}</div>
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
        <div className="mt-4 text-slate-600 text-lg leading-relaxed space-y-4">{children}</div>
    </div>
);

export const ServerManagementPage: React.FC<ServerManagementPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    const coreServices = [
        { icon: <BriefcaseIcon className="w-9 h-9" />, title: "Asset and Inventory Management", description: "Effectively manage hardware and software assets with monthly reports that provide precise inventory details, ensuring compliance and streamlining budgeting." },
        { icon: <ClipboardDocumentCheckIcon className="w-9 h-9" />, title: "Ticketing & CIO Dashboard", description: "Our ITIL-based ticketing system allows users to log problems easily, while the CIO dashboard provides comprehensive reporting on service performance and SLAs." },
        { icon: <ServerStackIcon className="w-9 h-9" />, title: "Proactive Server Management", description: "With 365-day monitoring and instant alerting, our engineers ensure timely responses to critical conditions. We're always available to keep your servers running." },
        { icon: <ComputerDesktopIcon className="w-9 h-9" />, title: "SDE & Desktop Hardening", description: "We maintain a standard desktop environment adhering to company IT policies, removing unwanted software and enhancing security and compliance." },
        { icon: <ShieldCheckIcon className="w-9 h-9" />, title: "Patch Management and Antivirus", description: "Stay up-to-date with the latest security patches. We help you reduce vulnerabilities and minimize downtime for increased productivity." },
        { icon: <RocketIcon className="w-9 h-9" />, title: "Software Deployment & Remote Troubleshooting", description: "Deploy software and apply application patches remotely and silently. Save on manual rollouts, reduce errors, and resolve issues with minimal disruption." },
    ];

    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1580829525414-d75459fdb018?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Service: Server Management</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                           360° Server Management Services
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                          Our holistic approach to server and desktop management is designed to address key challenges and enhance your entire IT infrastructure.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* Core Services Section */}
            <section className="py-20 sm:py-28 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Our Core Management Services" />
                    <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreServices.map((service, index) => (
                             <div key={service.title} className="animate-on-scroll" style={{'--animation-delay': `${(index % 3) * 0.1}s`} as React.CSSProperties}>
                                <DetailCard icon={service.icon} title={service.title}>
                                    <p>{service.description}</p>
                                </DetailCard>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Why Choose M Intergraph Section */}
            <section className="py-20 sm:py-28 bg-gray-50 border-t border-b border-gray-200">
                <div className="container mx-auto px-4">
                     <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
                        <div className="relative order-last lg:order-first animate-on-scroll">
                           <img src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1974&auto=format&fit=crop" alt="IT professionals collaborating" className="rounded-2xl shadow-2xl aspect-[4/3] object-cover"/>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <LightBulbIcon className="h-16 w-16 mb-6 text-blue-500" />
                            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Reliable and Proactive Support</h3>
                             <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                                We are committed to providing reliable, efficient, and proactive IT services. By entrusting your server management to us, you can free up valuable resources to focus on your core business objectives and drive growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Empower Your Business Infrastructure</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                       Choose M Intergraph for IT services that are as reliable as they are efficient. Let us empower your business.
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Contact an Expert
                    </a>
                </div>
            </section>
        </main>
    );
};
