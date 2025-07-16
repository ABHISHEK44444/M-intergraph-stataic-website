
import React from 'react';
import {
    KeyIcon,
    ShieldCheckIcon,
    UsersIcon,
    ServerStackIcon,
    CheckCircleIcon,
    LightBulbIcon,
    LockClosedIcon,
} from './IconComponents';

interface IamsPageProps {
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

export const IamsPage: React.FC<IamsPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    const keyComponents = [
        { icon: <LockClosedIcon className="w-9 h-9" />, title: 'Authentication', description: 'Verifying user identities through various methods (e.g., passwords, biometrics, tokens) to ensure only authorized users gain access.' },
        { icon: <KeyIcon className="w-9 h-9" />, title: 'Authorization', description: 'Determining the level of access for authenticated users by assigning roles, permissions, and privileges based on business needs.' },
        { icon: <UsersIcon className="w-9 h-9" />, title: 'User Management', description: 'Streamlining user provisioning, deprovisioning, and lifecycle management for all user accounts, profiles, and attributes.' },
        { icon: <ServerStackIcon className="w-9 h-9" />, title: 'Central User Repository', description: 'Storing user identity data securely in a centralized source for robust authentication and authorization across all systems.' },
    ];
    
    const bestPractices = [
        "Implement Multifactor Authentication (MFA) for privileged access, supporting various methods like biometrics and smart cards.",
        "Leverage a Zero Trust Architecture with adaptive, context-aware access controls to balance trust against risk.",
        "Prioritize an excellent user experience for both customers and employees to align IAM with business and IT goals.",
        "Apply zero-trust principles to your entire digital supply chain to protect customer data and resources end-to-end."
    ];

    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Solution: IAMS</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            Identity Access Management
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            Empowering secure, compliant, and efficient access to your critical system resources across the enterprise.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center animate-on-scroll">
                        <LightBulbIcon className="h-16 w-16 mx-auto mb-6 text-blue-500" />
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Secure and Streamline Access</h2>
                        <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                            In today’s interconnected digital landscape, efficiently managing user access to critical system resources is paramount. Identity Access Management (IAM) provides detailed insights and visibility throughout the access lifecycle, enabling organizations to reduce costs, mitigate risks, and ensure regulatory compliance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Components Section */}
            <section className="py-20 sm:py-28 bg-gray-50">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Key Components of IAM" />
                    <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {keyComponents.map((item, index) => (
                             <div key={item.title} className="animate-on-scroll" style={{'--animation-delay': `${(index % 2) * 0.1}s`} as React.CSSProperties}>
                                <DetailCard icon={item.icon} title={item.title}>
                                    <p>{item.description}</p>
                                </DetailCard>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* SSO and Federation Section */}
            <section className="py-20 sm:py-28 bg-white border-t border-b border-gray-200">
                <div className="container mx-auto px-4">
                     <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto items-center">
                        <div className="animate-on-scroll">
                            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Single Sign-On (SSO) & Federation</h3>
                             <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                               IAM solutions often include SSO features, allowing users to seamlessly access multiple resources without repeated logins. This enhances user experience and reduces the burden on helpdesk support.
                            </p>
                             <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                                <strong>Federation</strong> enables users to reuse electronic identities across distributed enterprise architectures, reducing administrative redundancy and improving interoperability.
                            </p>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                           <div className="relative">
                               <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop" alt="Digital connections and security" className="rounded-2xl shadow-2xl aspect-[4/3] object-cover"/>
                           </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Best Practices Section */}
            <section className="py-20 sm:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <SectionTitle title="Best Practices for IAM" />
                        <div className="mt-12 bg-white p-10 rounded-2xl border border-gray-200 shadow-xl animate-on-scroll">
                            <ul className="space-y-6">
                                {bestPractices.map((practice, index) => (
                                    <ListItem key={index}>{practice}</ListItem>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Final CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Secure Your Enterprise Today</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                        At M Intergraph, we integrate IAM seamlessly into your infrastructure, ensuring security, scalability, and compliance. Let’s build a robust IAM solution tailored to your organization’s needs!
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Contact an IAM Expert
                    </a>
                </div>
            </section>
        </main>
    );
};
