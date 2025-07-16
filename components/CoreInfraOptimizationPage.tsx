import React from 'react';
import {
    KeyIcon,
    ShieldCheckIcon,
    ComputerDesktopIcon,
    ServerStackIcon,
    UsersIcon,
    LightBulbIcon,
} from './IconComponents';

interface CoreInfraOptimizationPageProps {
    onNavigate: (path: string) => void;
}

const ApproachCard: React.FC<{ number: number; title: string; children: React.ReactNode; }> = ({ number, title, children }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg flex items-start transition-all duration-300 hover:shadow-xl hover:border-blue-300">
        <div className="flex-shrink-0 text-blue-500 font-extrabold text-5xl w-16 text-center">
            {number}
        </div>
        <div className="ml-6 border-l-4 border-blue-200 pl-6">
            <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
            <p className="mt-3 text-lg text-slate-600 leading-relaxed">{children}</p>
        </div>
    </div>
);

const FocusAreaCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col text-left">
        <div className="flex-shrink-0 bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">{icon}</div>
        <h3 className="text-2xl font-bold text-slate-900 flex-grow">{title}</h3>
        <p className="mt-4 text-slate-600 leading-relaxed">{description}</p>
    </div>
);


export const CoreInfraOptimizationPage: React.FC<CoreInfraOptimizationPageProps> = ({ onNavigate }) => {

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
                    backgroundImage: "url('https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Consulting</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            Core Infrastructure Optimization
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            A strategic model based on industry best practices to enhance security, reduce TCO, and maximize the business value of your IT investments.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center animate-on-scroll">
                        <LightBulbIcon className="h-16 w-16 mx-auto mb-6 text-blue-500" />
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">A Proven Model for Maturity</h2>
                        <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                            At M Intergraph, our Core Infrastructure Optimization Model is built upon industry best practices, drawing from Microsoft’s experiences with enterprise customers, Gartner’s Infrastructure Maturity Model, and MIT’s Architecture Maturity Model.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="py-20 sm:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Our Approach</h2>
                    </div>
                    <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 gap-10">
                        <div className="animate-on-scroll">
                            <ApproachCard number={1} title="Assessment and Evaluation">
                                The first step involves evaluating your existing infrastructure’s maturity using a comprehensive standardized template. This assessment provides a clear understanding of where your organization stands in terms of infrastructure readiness.
                            </ApproachCard>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <ApproachCard number={2} title="Progressive Roadmap">
                                Leveraging the model, we develop a customized plan to progress through each maturity level. Our goal is to maximize business benefits by aligning technology investments with strategic objectives.
                            </ApproachCard>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.2s'} as React.CSSProperties}>
                            <ApproachCard number={3} title="Substantiated Reports">
                                We substantiate our Core Infrastructure Optimization (Core IO) assessment reports, covering gap areas and providing Total Cost of Ownership (TCO) calculations. Additionally, we quantify dollar savings achievable through optimization efforts.
                            </ApproachCard>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Key Areas of Focus Section */}
            <section className="py-20 sm:py-28 bg-white border-t border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Key Areas of Focus</h2>
                    </div>
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="animate-on-scroll">
                            <FocusAreaCard icon={<KeyIcon className="w-9 h-9" />} title="Identity & Access Management" description="Managing people and asset identities is crucial. We recommend solutions to protect identity data, enabling other mature capabilities within your organization." />
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <FocusAreaCard icon={<ShieldCheckIcon className="w-9 h-9" />} title="Security, Networking, and Monitoring" description="To safeguard information and communication, we guide you on implementing security measures, ensuring access while defending against denial attacks and viruses." />
                        </div>
                        <div className="animate-on-scroll">
                            <FocusAreaCard icon={<ComputerDesktopIcon className="w-9 h-9" />} title="Desktop, Device, and Server Management" description="Efficiently managing mobile devices, PDAs, and servers is essential. Our solutions empower your organization to streamline operations and enhance overall efficiency." />
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <FocusAreaCard icon={<ServerStackIcon className="w-9 h-9" />} title="Data Protection & Recovery" description="As data stores proliferate, organizations face increasing pressure to protect critical information. Our structured backup, storage, and restore management strategies ensure cost-effective and timely recovery when needed." />
                        </div>
                    </div>
                </div>
            </section>

            {/* Implementation and State Section */}
            <section className="py-20 sm:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
                        <div className="animate-on-scroll">
                            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Team discussing a roadmap" className="rounded-2xl shadow-xl aspect-[4/3] object-cover"/>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <h3 className="text-3xl font-bold text-slate-900">Phased Implementation</h3>
                            <p className="mt-4 text-lg text-slate-600">Based on discussions with your IT team, we identify priority areas for phased implementation. Sub-implementations within each category allow for targeted improvements.</p>
                            
                            <h3 className="mt-10 text-3xl font-bold text-slate-900">Achieving a Dynamic State</h3>
                            <p className="mt-4 text-lg text-slate-600">Our Core Infrastructure Optimization Model provides clients with a clear roadmap and budget to achieve a dynamic state across all four infrastructure optimization categories mentioned above.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Final CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Optimize Your Infrastructure Today</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                        Let's build a roadmap to a more secure, efficient, and cost-effective IT infrastructure.
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Schedule an Assessment
                    </a>
                </div>
            </section>
        </main>
    );
};
