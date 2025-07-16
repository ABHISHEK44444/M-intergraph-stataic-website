
import React from 'react';
import {
    CloudIcon,
    UsersIcon,
    CheckCircleIcon,
    LightBulbIcon,
    ScaleIcon,
    RocketIcon,
    BriefcaseIcon
} from './IconComponents';

interface CcsPageProps {
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
        <span className="text-slate-700 font-medium">{children}</span>
    </li>
);

export const CcsPage: React.FC<CcsPageProps> = ({ onNavigate }) => {

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
                    backgroundImage: "url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Solution: CCS</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            Cloud Computing Solution
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            Unlocking agility, efficiency, and innovation by leveraging the power of the cloud to meet your strategic business goals.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                     <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                        <div className="animate-on-scroll">
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Understanding Cloud Computing</h2>
                            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                               Cloud computing provides on-demand access to resources like storage and infrastructure over the internet. It eliminates the need for self-managed physical resources, allowing organizations to pay only for what they use.
                            </p>
                            <ul className="mt-8 space-y-3">
                                <ListItem><strong>Agility:</strong> Quickly deploy applications and services.</ListItem>
                                <ListItem><strong>Cost Savings:</strong> Reduce capital expenditures and improve efficiency.</ListItem>
                                <ListItem><strong>Scalability:</strong> Scale resources up or down as needed.</ListItem>
                                <ListItem><strong>Accessibility:</strong> Access services from anywhere via the internet.</ListItem>
                            </ul>
                        </div>
                        <div className="relative animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <img 
                                src="https://images.unsplash.com/photo-1546937636-94b91695476a?q=80&w=1974&auto=format&fit=crop"
                                alt="Abstract cloud network connections"
                                className="rounded-2xl shadow-2xl aspect-[4/3] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategy and Assessment Section */}
            <section className="py-20 sm:py-28 bg-gray-50">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Our Cloud Services" subtitle="We guide you from strategy and assessment to seamless migration and optimization." />
                    <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="animate-on-scroll">
                            <DetailCard icon={<LightBulbIcon className="w-9 h-9" />} title="Cloud Strategy & Integration">
                                <p>The cloud landscape is vast. We help you navigate complex choices and integrate solutions effectively, aligning cloud adoption with your larger business strategy and managing risks within your governance frameworks.</p>
                            </DetailCard>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                             <DetailCard icon={<BriefcaseIcon className="w-9 h-9" />} title="Cloud Assessment Services">
                                <p>Our assessment services minimize risks by evaluating the specific benefits of cloud computing for your business. We provide customized solutions for SaaS applications, process migration, and CAPEX reduction.</p>
                            </DetailCard>
                        </div>
                    </div>
                </div>
            </section>
            
             {/* Cloud Migration Section */}
            <section className="py-20 sm:py-28 bg-white border-t border-b border-gray-200">
                <div className="container mx-auto px-4">
                     <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
                        <div className="relative animate-on-scroll">
                           <img src="https://images.unsplash.com/photo-1590955977218-3546734493e1?q=80&w=2070&auto=format&fit=crop" alt="Data migration and processing" className="rounded-2xl shadow-2xl aspect-[4/3] object-cover"/>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                             <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Cloud Migration</h3>
                             <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                                Our migration services focus on reducing costs, enhancing performance, and scaling efficiently without the need to maintain physical data centers. Cloud architecture provides the flexibility to adapt to changing markets and metrics across public, private, and hybrid models.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Ready to Harness the Power of the Cloud?</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                       Cloud computing isn't a one-size-fits-all solution. Let's find the right fit for your unique business needs and unlock the full potential of cloud computing for your organization!
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Discuss Your Cloud Strategy
                    </a>
                </div>
            </section>
        </main>
    );
};
