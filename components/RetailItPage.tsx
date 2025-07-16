
import React from 'react';
import {
    UsersIcon,
    CheckCircleIcon,
    BriefcaseIcon,
    LightBulbIcon,
    ShieldCheckIcon,
    ServerStackIcon,
    ComputerDesktopIcon,
    GlobeAltIcon,
    ClipboardDocumentCheckIcon
} from './IconComponents';

interface RetailItPageProps {
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

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
        <span className="text-lg text-slate-700">{children}</span>
    </li>
);

export const RetailItPage: React.FC<RetailItPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    const highlights = [
        { icon: <GlobeAltIcon className="w-9 h-9" />, title: "365-Day Network Operations Center (NOC)", description: "Proactive preventive maintenance services. No holidays, no sick leaves—we're always available. Your business doesn't stop, and neither do we." },
        { icon: <ServerStackIcon className="w-9 h-9" />, title: "Enterprise Monitoring System", description: "No need for expensive enterprise monitoring tools. Our inclusive services come with monitoring and management tools." },
        { icon: <ClipboardDocumentCheckIcon className="w-9 h-9" />, title: "ITIL-Based Ticketing System", description: "Users can log desktop problems easily. Track tickets, monitor SLAs online, and receive alerts for breached SLAs." },
        { icon: <ComputerDesktopIcon className="w-9 h-9" />, title: "CIO Dashboard", description: "Comprehensive reporting on desktop performance, patch management, vulnerability assessment, and SLA management. Executive insights at your fingertips." },
    ];

    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1556742044-597b1a134659?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Service: Retail IT</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            360° Retail IT Services
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            At M Intergraph Systems Pvt. Ltd., we understand the unique challenges faced by retailers. Our 360° Retail IT Services are designed to address these challenges and enhance your business operations.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* Core Services Section */}
            <section className="py-20 sm:py-28 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Core Retail Support" />
                    <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="animate-on-scroll">
                            <DetailCard icon={<ComputerDesktopIcon className="w-9 h-9" />} title="POS Application Support">
                               <p>Worried your retail software might fail during peak hours? We have expertise in most retail software, handling critical tasks like database indexing to ensure smooth operations. Our support covers on-site and remote assistance during your business hours, including weekends and holidays.</p>
                            </DetailCard>
                        </div>
                         <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <DetailCard icon={<BriefcaseIcon className="w-9 h-9" />} title="Asset Management">
                               <p>Keep track of your assets with monthly inventory reports. Our reports include hardware information, service tags, and software applications, helping you budget for new assets effectively.</p>
                            </DetailCard>
                        </div>
                         <div className="animate-on-scroll" style={{'--animation-delay': '0.2s'} as React.CSSProperties}>
                            <DetailCard icon={<ShieldCheckIcon className="w-9 h-9" />} title="Warranty Uplift">
                                <p>With 365-day support, we get spare parts to you promptly from our own pool, bypassing OEM delays. We ensure timely resolution with a committed Service Level Agreement.</p>
                            </DetailCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="py-20 sm:py-28 bg-gray-50">
                <div className="container mx-auto px-4">
                    <SectionTitle title="360° Retail IT Management: Highlights" />
                     <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {highlights.map((item, index) => (
                             <div key={item.title} className="animate-on-scroll" style={{'--animation-delay': `${(index % 2) * 0.1}s`} as React.CSSProperties}>
                                <DetailCard icon={item.icon} title={item.title}>
                                    <p>{item.description}</p>
                                </DetailCard>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Commitment Section */}
            <section className="py-20 sm:py-28 bg-white border-t border-b border-gray-200">
                <div className="container mx-auto px-4">
                     <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
                        <div className="relative order-last lg:order-first animate-on-scroll">
                           <img src="https://images.unsplash.com/photo-1570126618953-add78693c4e4?q=80&w=1974&auto=format&fit=crop" alt="Global partnership and trust" className="rounded-2xl shadow-2xl aspect-[4/3] object-cover"/>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <LightBulbIcon className="h-16 w-16 mb-6 text-blue-500" />
                            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Count on M Intergraph</h3>
                             <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                                Partner with one of the leading retail technology services providers. Our journey in Retail IT services began in 1997 alongside Dominos' second store in India. We've never looked back since!
                            </p>
                            <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-200">
                                <h4 className="text-2xl font-semibold text-slate-800 mb-4">Quality of Life Improvement:</h4>
                                <ul className="space-y-3">
                                    <ListItem>Reduced downtime per desktop.</ListItem>
                                    <ListItem>Comprehensive reports on inventory, tickets, and SLAs.</ListItem>
                                    <ListItem>Better work-life balance by relying on our NOC during weekends and holidays.</ListItem>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Ready to Empower Your Retail Business?</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                       Choose M Intergraph for reliable, efficient, and proactive retail IT services. We're here to support your success.
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Enquire Now
                    </a>
                </div>
            </section>
        </main>
    );
};
