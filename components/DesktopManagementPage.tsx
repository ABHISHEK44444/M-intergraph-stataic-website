
import React from 'react';
import {
    UsersIcon,
    BriefcaseIcon,
    LightBulbIcon,
    ShieldCheckIcon,
    ServerStackIcon,
    ComputerDesktopIcon,
    RocketIcon,
    GlobeAltIcon
} from './IconComponents';

interface DesktopManagementPageProps {
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

export const DesktopManagementPage: React.FC<DesktopManagementPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    const coreServices = [
        { icon: <BriefcaseIcon className="w-9 h-9" />, title: "Asset and Inventory Management", description: "Manage hardware and software assets effectively. MindShare's monthly reports provide precise inventory details across geographies, ensuring compliance and streamlining budgeting." },
        { icon: <ShieldCheckIcon className="w-9 h-9" />, title: "SDE & Desktop Hardening", description: "Achieve a Standard Desktop Environment (SDE) adhering to company IT policies. We remove unwanted software, disable unnecessary hardware, and enhance security." },
        { icon: <ShieldCheckIcon className="w-9 h-9" />, title: "Patch Management, Spyware & Antivirus", description: "Stay up-to-date with critical security patches. We reduce desktop vulnerabilities and minimize downtime for increased productivity." },
        { icon: <RocketIcon className="w-9 h-9" />, title: "Disk De-fragmentation & Performance", description: "Our services ensure desktops are free from unwanted debris, improving hard disk life and overall performance." },
        { icon: <ServerStackIcon className="w-9 h-9" />, title: "Software Deployment", description: "Using sophisticated tools, our NOC deploys client applications and software packages remotely and seamlessly, eliminating manual errors." },
        { icon: <GlobeAltIcon className="w-9 h-9" />, title: "Remote & Power Management", description: "Minimize user disturbance with remote troubleshooting and save on electricity costs. Our ITIL-based ticketing system and CIO Dashboard provide full visibility and control." },
    ];

    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1579820010410-c10418a89273?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Service: Desktop Management</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            360° Desktop Management Services
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            At M Intergraph, we recognize that desktops are critical knowledge repositories. Our services address the complexities of security, application management, and inventory control.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* Core Services Section */}
            <section className="py-20 sm:py-28 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle title="A Holistic Approach to Desktop Management" />
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
                           <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop" alt="Team discussing IT strategy" className="rounded-2xl shadow-2xl aspect-[4/3] object-cover"/>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <LightBulbIcon className="h-16 w-16 mb-6 text-blue-500" />
                            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Why Choose M Intergraph?</h3>
                             <div className="mt-6 text-lg text-slate-600 leading-relaxed space-y-4">
                                <p><strong>Comprehensive Services:</strong> Our end-to-end desktop management covers all critical aspects.</p>
                                <p><strong>Proactive Approach:</strong> We secure, manage, inventory, and support desktops centrally.</p>
                                <p><strong>Stability and Expertise:</strong> With over 20 years of growth, we bring stability and leadership to your IT management.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Empower Your IT Environment</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                       Let M Intergraph empower your IT environment, so you can focus on driving business success.
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Optimize Your Desktops
                    </a>
                </div>
            </section>
        </main>
    );
};
