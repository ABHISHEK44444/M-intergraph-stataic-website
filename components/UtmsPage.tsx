
import React from 'react';
import {
    ShieldCheckIcon,
    UsersIcon,
    CheckCircleIcon,
    LightBulbIcon,
    ServerStackIcon,
    LockClosedIcon,
    EnvelopeIcon,
    GlobeAltIcon
} from './IconComponents';

interface UtmsPageProps {
    onNavigate: (path: string) => void;
}

const SectionTitle: React.FC<{ title: string; subtitle?: string; }> = ({ title, subtitle }) => (
    <div className="text-center max-w-4xl mx-auto animate-on-scroll">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{title}</h2>
        {subtitle && <p className="mt-6 text-xl text-slate-600">{subtitle}</p>}
    </div>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; }> = ({ icon, title }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-center">
            <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">{icon}</div>
            <h3 className="ml-5 text-lg font-bold text-slate-800">{title}</h3>
        </div>
    </div>
);

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
        <span className="text-lg text-slate-700">{children}</span>
    </li>
);

export const UtmsPage: React.FC<UtmsPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    const coreFeatures = [
        { icon: <ShieldCheckIcon className="w-7 h-7" />, title: "Stateful Firewall" },
        { icon: <ShieldCheckIcon className="w-7 h-7" />, title: "Antivirus & Anti-Malware" },
        { icon: <EnvelopeIcon className="w-7 h-7" />, title: "AntiSpam Protection" },
        { icon: <ShieldCheckIcon className="w-7 h-7" />, title: "Intrusion Prevention (IPS)" },
        { icon: <LockClosedIcon className="w-7 h-7" />, title: "SSLVPN and IPSEC VPN" },
        { icon: <GlobeAltIcon className="w-7 h-7" />, title: "Web and Content Filtering" },
        { icon: <UsersIcon className="w-7 h-7" />, title: "User Identity & Authentication" },
    ];

    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=2069&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Solution: UTMS</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            Unified Threat Management
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            Simplifying IT Security by consolidating multiple critical security features into a single, efficient, and cost-effective solution.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                        <div className="animate-on-scroll">
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900">The Challenge of Complexity</h2>
                            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                               As organizations expand their IT infrastructure, maintaining security becomes increasingly challenging. Traditional approaches with separate devices for firewalls, antivirus, IPS, and more lead to higher costs, operational overhead, and complex management.
                            </p>
                            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                                <strong>Unified Threat Management (UTM)</strong> technology addresses this by consolidating multiple security features into a single device, streamlining your entire security posture.
                            </p>
                        </div>
                        <div className="relative animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <img 
                                src="https://images.unsplash.com/photo-1585392476632-0bff8a245a57?q=80&w=1964&auto=format&fit=crop"
                                alt="Network security hardware in a server rack"
                                className="rounded-2xl shadow-2xl aspect-[4/3] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Comprehensive Features Section */}
            <section className="py-20 sm:py-28 bg-gray-50">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Comprehensive Security in a Single Device" subtitle="UTM combines several critical security functions into one unit:" />
                    <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coreFeatures.map((item, index) => (
                             <div key={item.title} className="animate-on-scroll" style={{'--animation-delay': `${(index % 3) * 0.05}s`} as React.CSSProperties}>
                                <FeatureCard icon={item.icon} title={item.title} />
                            </div>
                        ))}
                         <div className="sm:col-span-2 lg:col-span-1 animate-on-scroll" style={{'--animation-delay': '0.35s'} as React.CSSProperties}>
                             <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 shadow-lg h-full flex items-center">
                                <p className="text-xl font-bold text-blue-800 text-center">And much more, including WAN Optimization, DLP, and VoIP Security...</p>
                             </div>
                        </div>
                    </div>
                </div>
            </section>
            
             {/* Expertise Section */}
            <section className="py-20 sm:py-28 bg-white border-t border-b border-gray-200">
                <div className="container mx-auto px-4">
                     <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
                        <div className="relative animate-on-scroll">
                           <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop" alt="Team collaborating on a security solution" className="rounded-2xl shadow-2xl aspect-[4/3] object-cover"/>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <LightBulbIcon className="h-16 w-16 mb-6 text-blue-500" />
                            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">M Intergraph’s Expertise in UTM</h3>
                             <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                                We collaborate with market-leading vendors to provide robust UTM solutions tailored to your business needs.
                            </p>
                            <ul className="mt-8 space-y-5">
                                <ListItem><strong>Infrastructure Analysis:</strong> Assessing where UTM can enhance your existing environment.</ListItem>
                                <ListItem><strong>Solution Design:</strong> Integrating UTM seamlessly into your IT infrastructure.</ListItem>
                                <ListItem><strong>Implementation & Support:</strong> Ensuring successful deployment and providing post-sales support.</ListItem>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Simplify Your Security Today</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                       Contact our sales team to explore how UTM can simplify your organization’s security while supporting your business goals.
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Talk to a Security Expert
                    </a>
                </div>
            </section>
        </main>
    );
};
