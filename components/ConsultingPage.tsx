

import React from 'react';
import {
    CheckCircleIcon,
    LightBulbIcon,
    ShieldCheckIcon,
    CloudIcon,
    RocketIcon,
    ScaleIcon,
    CpuChipIcon,
    UsersIcon
} from './IconComponents';

interface ConsultingPageProps {
    onNavigate: (path: string) => void;
}

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full">
        <div className="bg-blue-100 text-blue-600 w-16 h-16 mb-6 rounded-full flex items-center justify-center">{icon}</div>
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
        <p className="mt-3 text-slate-600 text-base leading-relaxed">{description}</p>
    </div>
);

export const ConsultingPage: React.FC<ConsultingPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    const services = [
        { icon: <LightBulbIcon className="w-9 h-9" />, title: "IT Strategy & Roadmap", description: "Align your technology with business goals. We help you create a clear, actionable IT roadmap for sustainable growth and innovation." },
        { icon: <ShieldCheckIcon className="w-9 h-9" />, title: "Cybersecurity Consulting", description: "Protect your assets with expert guidance. We assess vulnerabilities, implement robust security controls, and ensure compliance." },
        { icon: <CloudIcon className="w-9 h-9" />, title: "Cloud Advisory", description: "Navigate your cloud journey with confidence. We provide strategy, migration planning, and optimization for AWS, Azure, and Google Cloud." },
        { icon: <RocketIcon className="w-9 h-9" />, title: "Digital Transformation", description: "Reimagine your business for the digital age. We guide you through process automation, data analytics, and modern application development." },
        { icon: <ScaleIcon className="w-9 h-9" />, title: "IT Governance & Risk", description: "Establish robust governance frameworks. We help you manage IT risks, ensure regulatory compliance, and optimize IT performance." },
        { icon: <CpuChipIcon className="w-9 h-9" />, title: "Technology Sourcing", description: "Make informed decisions on technology investments. We assist with vendor selection, procurement, and contract negotiation." },
    ];

    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-3xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">IT Consulting & Advisory</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            Strategic Guidance for Your Digital Future
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            Leverage our deep industry expertise to solve complex challenges, mitigate risks, and unlock new opportunities for your business.
                        </p>
                        <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-blue-700 hover:shadow-xl hover:scale-105 transform">
                            Talk to an Expert
                        </a>
                    </div>
                </div>
            </section>
            
            {/* Our Consulting Services Section */}
            <section className="py-20 sm:py-28 bg-gray-50"
                 style={{ backgroundImage: `
                    radial-gradient(circle at top left, rgba(29, 78, 216, 0.03), transparent 35%),
                    radial-gradient(circle at bottom right, rgba(29, 78, 216, 0.03), transparent 35%)
                 `}}
            >
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Our Consulting Services Catalog</h2>
                        <p className="mt-6 text-xl text-slate-600">
                           We offer a wide range of advisory services designed to address your most critical IT initiatives and challenges.
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                           <div key={index} className="animate-on-scroll" style={{'--animation-delay': `${(index % 3) * 0.1}s`} as React.CSSProperties}>
                                <ServiceCard icon={service.icon} title={service.title} description={service.description} />
                           </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Ready to Elevate Your IT Strategy?</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                        Let's discuss how our consulting and advisory services can drive your business forward.
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Schedule a Free Consultation
                    </a>
                </div>
            </section>
        </main>
    );
};