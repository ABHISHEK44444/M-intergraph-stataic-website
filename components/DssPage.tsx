
import React from 'react';
import {
    ServerStackIcon,
    ShieldCheckIcon,
    CheckCircleIcon,
    UsersIcon,
    LightBulbIcon,
    BriefcaseIcon,
    GlobeAltIcon,
    KeyIcon,
    ClipboardDocumentCheckIcon,
    RectangleGroupIcon
} from './IconComponents';

interface DssPageProps {
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
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <div className="mt-4 text-slate-600 text-base leading-relaxed space-y-4">{children}</div>
    </div>
);

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
        <span className="text-lg text-slate-700">{children}</span>
    </li>
);

export const DssPage: React.FC<DssPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };
    
    const keyFeatures = [
        { icon: <KeyIcon className="w-8 h-8" />, title: "Vulnerability Assessment (VA)", description: "Automatically discovers databases, scans for vulnerabilities and sensitive data, and provides clear remediation advisories." },
        { icon: <ShieldCheckIcon className="w-8 h-8" />, title: "Database Activity Monitoring (DAM)", description: "Identifies suspicious activities by users or applications, alerts on data theft or tampering, and creates a full audit trail for forensic analysis." },
        { icon: <BriefcaseIcon className="w-8 h-8" />, title: "Data Loss & Theft Prevention", description: "Proactively prevents unauthorized data leaks by monitoring Data Manipulation Language (DML) activities like INSERTs, UPDATEs, and DELETEs." },
        { icon: <CheckCircleIcon className="w-8 h-8" />, title: "Auditing & Compliance", description: "Automates compliance with pre-defined, customizable reporting templates for SOX, PCI, and HIPAA." },
        { icon: <ServerStackIcon className="w-8 h-8" />, title: "Change Control", description: "Tracks and logs all changes to database structures (DDL and DCL) to maintain integrity and provide a clear audit history." },
        { icon: <ClipboardDocumentCheckIcon className="w-8 h-8" />, title: "DML Monitoring", description: "Monitors and tracks all Data Manipulation Language activities, including INSERTs, UPDATEs, and DELETEs, to detect unusual behavior." },
        { icon: <RectangleGroupIcon className="w-8 h-8" />, title: "Physical & Virtualized Support", description: "Provides comprehensive support for both physical and virtualized database environments, ensuring consistent security across your entire infrastructure." },
        { icon: <GlobeAltIcon className="w-8 h-8" />, title: "Flexible Deployment", description: "Supports various flexible deployment modes including off-line/sniffing, native audit collection, and agent-based monitoring." }
    ];

    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1593428982843-3d8495d45435?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Solution: DSS</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            Database Security Solution
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            A critical aspect of modern IT, safeguarding your most valuable assets with comprehensive protection against internal and external threats.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why it Matters Section */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                     <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                        <div className="animate-on-scroll">
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Why Database Security Matters</h2>
                            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                              As organizations increasingly rely on data for decision-making, operations, and competitive advantage, protecting databases becomes paramount. A breach in any of these areas can have severe consequences.
                            </p>
                            <ul className="mt-8 space-y-5">
                                <ListItem><strong>Data Confidentiality, Integrity, and Availability:</strong> Ensures sensitive data remains private, its integrity is maintained, and authorized users have access when needed.</ListItem>
                                <ListItem><strong>Distributed Architectures:</strong> Organizations store valuable information across distributed database systems. Securing these assets is crucial for business continuity and trust.</ListItem>
                            </ul>
                        </div>
                        <div className="relative animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <img 
                                src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2070&auto=format&fit=crop"
                                alt="Data security concept with lock on server"
                                className="rounded-2xl shadow-2xl aspect-[4/3] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-20 sm:py-28 bg-gray-50">
                <div className="container mx-auto px-4">
                    <SectionTitle title="M Intergraph’s Comprehensive Database Security Solution" subtitle="We partner with leading vendors to offer robust database security solutions with the following key features:" />
                    <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {keyFeatures.map((item, index) => (
                             <div key={item.title} className="animate-on-scroll" style={{'--animation-delay': `${(index % 4) * 0.05}s`} as React.CSSProperties}>
                                <DetailCard icon={item.icon} title={item.title}>
                                    <p>{item.description}</p>
                                </DetailCard>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WAF Integration Section */}
            <section className="py-20 sm:py-28 bg-white border-t border-b border-gray-200">
                <div className="container mx-auto px-4">
                     <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
                        <div className="relative animate-on-scroll">
                           <img src="https://images.unsplash.com/photo-1603899122634-f086ca5f0ddd?q=80&w=2070&auto=format&fit=crop" alt="Web Application Firewall concept" className="rounded-2xl shadow-2xl aspect-[4/3] object-cover"/>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <LightBulbIcon className="h-16 w-16 mb-6 text-blue-500" />
                            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Integration with Web Application Firewall (WAF)</h3>
                             <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                                M Intergraph demonstrates seamless integration of database security with WAF to provide a comprehensive application security solution that defends against multi-dimensional attack vectors.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Final CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Protect Your Core Assets</h2>
                    <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
                       Protecting your databases is not just about compliance; it’s about safeguarding your organization’s core assets. With M Intergraph, you’ll have access to the most valued database security products, backed by expertise and experience. Let’s secure your critical data effectively!
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Request a Security Assessment
                    </a>
                </div>
            </section>
        </main>
    );
};
