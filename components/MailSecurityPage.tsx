
import React from 'react';
import {
    EnvelopeIcon,
    ShieldCheckIcon,
    LockClosedIcon,
    ServerStackIcon,
    UsersIcon,
    CheckCircleIcon,
    LightBulbIcon,
    BriefcaseIcon,
    GlobeAltIcon
} from './IconComponents';

interface MailSecurityPageProps {
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

export const MailSecurityPage: React.FC<MailSecurityPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    const comprehensiveSolutions = [
        { icon: <ShieldCheckIcon className="w-8 h-8"/>, title: "AntiVirus Protection", description: "Shield your organization from email-borne malware, detecting and neutralizing viruses before they reach inboxes." },
        { icon: <EnvelopeIcon className="w-8 h-8"/>, title: "Inbound & Outbound AntiSpam", description: "Filter spam and unwanted messages to improve productivity by reducing email-related distractions." },
        { icon: <LockClosedIcon className="w-8 h-8"/>, title: "Mail Encryption", description: "Ensure the confidentiality of sensitive information by encrypting emails to protect data during transmission." },
        { icon: <BriefcaseIcon className="w-8 h-8"/>, title: "Data Loss Prevention (DLP)", description: "Prevent accidental or intentional data leaks by monitoring and controlling sensitive content within emails." },
        { icon: <ServerStackIcon className="w-8 h-8"/>, title: "Mail Archiving", description: "Maintain a secure archive of all email communications to comply with legal and regulatory requirements." },
        { icon: <UsersIcon className="w-8 h-8"/>, title: "User Quarantine", description: "Isolate suspicious emails for further analysis, minimizing the risk of malware spreading within your network." },
    ];

    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1585331505473-7586f8415d23?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Solution: Mail Security</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            Mail Security Solution
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            Safeguarding your most critical communication channel against modern threats, from spam and phishing to advanced malware.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center animate-on-scroll">
                        <LightBulbIcon className="h-16 w-16 mx-auto mb-6 text-blue-500" />
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Challenges in Email Security</h2>
                        <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                            Email is essential, but the underlying SMTP protocol lacks robust security. This leads to significant challenges for modern businesses, including productivity loss from spam and severe security risks from viruses, trojans, and phishing attacks.
                        </p>
                    </div>
                </div>
            </section>

            {/* Comprehensive Solution Section */}
            <section className="py-20 sm:py-28 bg-gray-50">
                <div className="container mx-auto px-4">
                    <SectionTitle title="M Intergraph's Comprehensive Mail Security Solution" subtitle="We collaborate with market-leading vendors to offer an integrated mail security solution tailored to your needs:" />
                    <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {comprehensiveSolutions.map((item, index) => (
                             <div key={item.title} className="animate-on-scroll" style={{'--animation-delay': `${(index % 3) * 0.1}s`} as React.CSSProperties}>
                                <DetailCard icon={item.icon} title={item.title}>
                                    <p>{item.description}</p>
                                </DetailCard>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Provider Solutions Section */}
            <section className="py-20 sm:py-28 bg-white border-t border-b border-gray-200">
                <div className="container mx-auto px-4">
                     <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
                        <div className="animate-on-scroll">
                            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Specialized Solutions for Service Providers</h3>
                             <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                                For service providers, we offer specialized features to protect your infrastructure and enhance your service offerings.
                            </p>
                            <ul className="mt-8 space-y-5">
                                <ListItem><strong>Outbound AntiSpam Solution:</strong> Prevent your IP addresses from being blacklisted due to spam bots, with seamless network integration.</ListItem>
                                <ListItem><strong>IP Blacklist Protection:</strong> Safeguard your reputation and maintain trust with customers by actively avoiding IP blacklisting.</ListItem>
                                <ListItem><strong>User Reputation-Based Filtering:</strong> Dynamically track user behavior to adapt filtering rules, enhancing accuracy and security.</ListItem>
                                <ListItem><strong>Dynamic Profiling:</strong> Support diverse user profiles across 3G, DSL, and WiMax networks to optimize security without compromising performance.</ListItem>
                                <ListItem><strong>Managed Mail Hosting Solutions:</strong> Design cloud-based or on-premises managed mail hosting services tailored to your clients' needs.</ListItem>
                            </ul>
                        </div>
                        <div className="relative animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                           <img src="https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1974&auto=format&fit=crop" alt="Network Operations Center" className="rounded-2xl shadow-2xl aspect-[4/3] object-cover"/>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Final CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Secure Your Communications Today</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                       For more information or to explore our mail security offerings, please reach out to our sales team. We're committed to securing your communications effectively!
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Contact Sales Team
                    </a>
                </div>
            </section>
        </main>
    );
};
