
import React from 'react';
import {
    ScaleIcon,
    CheckCircleIcon,
    UsersIcon,
    LightBulbIcon
} from './IconComponents';

interface CapacityPlanningPageProps {
    onNavigate: (path: string) => void;
}

const SectionTitle: React.FC<{ title: string; subtitle?: string; }> = ({ title, subtitle }) => (
    <div className="text-center max-w-4xl mx-auto animate-on-scroll">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{title}</h2>
        {subtitle && <p className="mt-6 text-xl text-slate-600">{subtitle}</p>}
    </div>
);

const ConsiderationCard: React.FC<{ number: number; title: string; description: string; }> = ({ number, title, description }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full">
        <div className="flex items-center mb-4">
            <span className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-extrabold text-xl">{number}</span>
            <h3 className="ml-5 text-xl font-bold text-slate-900">{title}</h3>
        </div>
        <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
);

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <CheckCircleIcon className="h-7 w-7 text-blue-500 mr-4 mt-1 flex-shrink-0" />
        <span className="text-lg text-slate-600 leading-relaxed">{children}</span>
    </li>
);

export const CapacityPlanningPage: React.FC<CapacityPlanningPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };
    
    const keyConsiderations = [
        { title: "Existing Capacity Utilization", description: "Evaluate how efficiently your current infrastructure resources are being used. Identify any bottlenecks or areas of underutilization." },
        { title: "KPIs and SLAs", description: "Correlate capacity utilization with Key Performance Indicators (KPIs) and Service Level Agreements (SLAs). Ensure that performance meets established standards." },
        { title: "Forecasting Workloads", description: "Collect workload forecasts, considering future services and provisioning needs. Understand the expected demand on your infrastructure." },
        { title: "Mapping Requirements", description: "Transform workload forecasts into specific IT resource requirements. Align these requirements with existing utilization patterns." },
        { title: "Predictive Analysis", description: "Predict when your infrastructure might reach capacity limits. Anticipate potential bottlenecks and plan accordingly." },
        { title: "Expansion Recommendations", description: "Based on the analysis, provide recommendations for expansion or investment. Enable strategic decision-making regarding infrastructure growth." }
    ];

    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1517483000871-3761a3561348?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Consulting</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            Capacity Planning & Consulting
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            A critical process ensuring your infrastructure can meet changing demands, optimizing resource utilization and adapting to future growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                        <div className="animate-on-scroll">
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900">The Importance of Capacity Planning</h2>
                            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                                <strong className="text-slate-800">Capacity planning</strong> is a critical process that ensures an organization’s infrastructure can meet changing demands for its products and services. In this context, <strong className="text-slate-800">”capacity”</strong> refers to the maximum amount of traffic an infrastructure can handle within a given timeframe.
                            </p>
                            <ul className="mt-8 space-y-5">
                                <ListItem><strong>Efficiency:</strong> A discrepancy between infrastructure capacity and customer demands leads to inefficiencies. It can result in either underutilized resources or unmet customer needs.</ListItem>
                                <ListItem><strong>Optimization:</strong> The goal of capacity planning is to minimize this discrepancy. By optimizing existing capacity, organizations can achieve better resource utilization.</ListItem>
                                <ListItem><strong>Adaptability:</strong> Demand for infrastructure capacity fluctuates due to changes in production output. Effective capacity planning ensures adaptability.</ListItem>
                            </ul>
                        </div>
                        <div className="relative animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <img 
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                                alt="Data analytics dashboard showing capacity metrics"
                                className="rounded-2xl shadow-2xl aspect-[4/3] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

             {/* Key Considerations Section */}
            <section className="py-20 sm:py-28 bg-gray-50">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Key Considerations" />
                    <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {keyConsiderations.map((item, index) => (
                            <div key={item.title} className="animate-on-scroll" style={{'--animation-delay': `${(index % 3) * 0.1}s`} as React.CSSProperties}>
                                <ConsiderationCard
                                    number={index + 1}
                                    title={item.title}
                                    description={item.description}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Why Choose M Intergraph Section */}
            <section className="py-20 sm:py-28 bg-white border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <div className="animate-on-scroll order-last md:order-first">
                             <img src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1974&auto=format&fit=crop" alt="Consulting team in a meeting" className="rounded-2xl shadow-xl aspect-[4/3] object-cover" />
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <LightBulbIcon className="h-16 w-16 mb-6 text-blue-500" />
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Why Choose M Intergraph?</h2>
                            <ul className="mt-6 space-y-4 text-lg text-slate-600 leading-relaxed">
                                <ListItem>Our <strong>Strategic Consulting team</strong> specializes in capacity planning.</ListItem>
                                <ListItem>We offer a comprehensive analysis within your specific environment.</ListItem>
                                <ListItem>Whether you’re considering additional investment or infrastructure expansion, we provide data-driven insights.</ListItem>
                            </ul>
                            <p className="mt-8 text-xl font-semibold text-slate-800">Remember, capacity planning isn’t just about reacting to inefficiencies—it’s about proactively ensuring your infrastructure can handle future demands.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Final CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Plan Your Future Capacity</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                        Let our experts help you build a robust and scalable infrastructure. Get in touch for a detailed capacity assessment.
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Request a Consultation
                    </a>
                </div>
            </section>
        </main>
    );
};
