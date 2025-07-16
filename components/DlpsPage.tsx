
import React from 'react';
import {
    LockClosedIcon,
    UsersIcon,
    CheckCircleIcon,
    LightBulbIcon,
    ServerStackIcon,
    ShieldCheckIcon,
    GlobeAltIcon
} from './IconComponents';

interface DlpsPageProps {
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

export const DlpsPage: React.FC<DlpsPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4138d04d475d?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Solution: DLPS</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            Data Leakage Prevention
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            Safeguarding your critical information by controlling data usage, transfer, and removal to mitigate the risk of data leaks.
                        </p>
                    </div>
                </div>
            </section>

            {/* Understanding DLP Section */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Understanding DLP" subtitle="DLP systems play a crucial role in securing sensitive information by enabling strict control over data across its entire lifecycle." />
                    <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="animate-on-scroll">
                            <DetailCard icon={<ServerStackIcon className="w-9 h-9" />} title="Data States">
                               <p>DLP addresses security across different states: Data in Use (active operations), Data in Motion (moving across networks), and Data at Rest (stored in databases or endpoints).</p>
                            </DetailCard>
                        </div>
                         <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <DetailCard icon={<GlobeAltIcon className="w-9 h-9" />} title="Granular Visibility">
                               <p>DLP provides deep content inspection and contextual analysis, considering attributes like originator, data type, timing, and recipient to identify potential risks.</p>
                            </DetailCard>
                        </div>
                         <div className="animate-on-scroll" style={{'--animation-delay': '0.2s'} as React.CSSProperties}>
                            <DetailCard icon={<ShieldCheckIcon className="w-9 h-9" />} title="Centralized Management">
                                <p>A unified framework ensures holistic data security. DLP policies are enforced consistently across the entire organization from a single management console.</p>
                            </DetailCard>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Benefits and Considerations Section */}
            <section className="py-20 sm:py-28 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-start">
                        <div className="animate-on-scroll">
                            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Benefits of DLP</h3>
                             <ul className="mt-8 space-y-6">
                                <ListItem><strong>Risk Mitigation:</strong> Prevents unauthorized data leaks, breaches, and exfiltration while safeguarding sensitive information from inadvertent exposure.</ListItem>
                                <ListItem><strong>Remote Work Enablement:</strong> Supports remote employees by maintaining robust data security, allowing productivity without compromising confidentiality.</ListItem>
                                <ListItem><strong>Compliance Requirements:</strong> Aligns with industry standards like GLBA, DSS, SOX, and FISMA, helping organizations meet regulatory obligations.</ListItem>
                             </ul>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Key Considerations</h3>
                             <ul className="mt-8 space-y-6">
                                <ListItem><strong>Solution Type:</strong> We help you choose the right DLP solution—endpoint, network, or storage-based—depending on your organization’s unique needs.</ListItem>
                                <ListItem><strong>Insider Threats:</strong> DLP is crucial for combating malicious insiders by detecting unauthorized data access or transfers.</ListItem>
                                <ListItem><strong>Messaging Security:</strong> Control data shared via instant messaging services to prevent accidental leaks through chat platforms.</ListItem>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Expertise Section */}
            <section className="py-20 sm:py-24 bg-white border-t border-b border-gray-200">
                <div className="container mx-auto px-4">
                     <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
                        <div className="relative order-last lg:order-first animate-on-scroll">
                           <img src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop" alt="Data security analysis on a laptop" className="rounded-2xl shadow-2xl aspect-[4/3] object-cover"/>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <LightBulbIcon className="h-16 w-16 mb-6 text-blue-500" />
                            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">M Intergraph’s Expertise</h3>
                             <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                                We assist organizations in selecting the ideal DLP solution. Whether you need network, storage, or endpoint-based protection, our tailored approach ensures your data remains secure and compliant.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Secure Your Critical Information</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                       DLP is paramount in today’s interconnected world. Let’s work together to secure your critical information effectively.
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Consult with a DLP Expert
                    </a>
                </div>
            </section>
        </main>
    );
};
