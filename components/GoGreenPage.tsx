
import React from 'react';
import {
    UsersIcon,
    CheckCircleIcon,
    LeafIcon,
} from './IconComponents';

interface GoGreenPageProps {
    onNavigate: (path: string) => void;
}

const SectionTitle: React.FC<{ title: string; subtitle?: string; }> = ({ title, subtitle }) => (
    <div className="text-center max-w-4xl mx-auto animate-on-scroll">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{title}</h2>
        {subtitle && <p className="mt-6 text-xl text-slate-600">{subtitle}</p>}
    </div>
);

const ApproachCard: React.FC<{ number: number; title: string; children: React.ReactNode; }> = ({ number, title, children }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg flex items-start transition-all duration-300 hover:shadow-xl hover:border-blue-300">
        <div className="flex-shrink-0 text-blue-500 font-extrabold text-5xl w-16 text-center">
            {number}
        </div>
        <div className="ml-6 border-l-4 border-blue-200 pl-6">
            <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
            <div className="mt-3 text-lg text-slate-600 leading-relaxed space-y-4">{children}</div>
        </div>
    </div>
);

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <CheckCircleIcon className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
        <span className="text-slate-700 font-medium">{children}</span>
    </li>
);


export const GoGreenPage: React.FC<GoGreenPageProps> = ({ onNavigate }) => {

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
                    backgroundImage: "url('https://images.unsplash.com/photo-1624970119914-239c4d28990c?q=80&w=2071&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-green-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-green-300 uppercase tracking-wider text-base">Service: GoGreen</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            Empowering Sustainable IT
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-green-100 leading-relaxed">
                           Our GoGreen initiative focuses on controlling desktop power management to reduce energy costs and minimize environmental impact.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center animate-on-scroll">
                        <LeafIcon className="h-16 w-16 mx-auto mb-6 text-green-500" />
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">M Intergraph GoGreen Initiative</h2>
                        <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                            At <strong className="text-slate-800">M Intergraph Systems Pvt. Ltd.</strong>, we believe in sustainable IT practices. Let's explore how our GoGreen - Desktop Power Management Services can benefit your organization.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="py-20 sm:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Our 3-Step Approach" />
                    <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 gap-10">
                        <div className="animate-on-scroll">
                            <ApproachCard number={1} title="Assess">
                                <p><strong>User Classification and Power Management Requirements:</strong></p>
                                <ul className="mt-2 space-y-3">
                                    <ListItem>Define user types based on power usage profiles.</ListItem>
                                    <ListItem>Consider parameters like computer type, operating system, uptime requirements, and more.</ListItem>
                                    <ListItem>Create power schemes for user profiles, including display timeout, hard disk timeout, sleep/hibernate/shutdown settings, and network card timeouts.</ListItem>
                                </ul>
                            </ApproachCard>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <ApproachCard number={2} title="Configure">
                                 <p><strong>Implementation and Centralized Control:</strong></p>
                                 <ul className="mt-2 space-y-3">
                                    <ListItem>Create Group Policy Templates for each user profile.</ListItem>
                                    <ListItem>Deploy group policy settings via Active Directory.</ListItem>
                                    <ListItem>Monitor power savings using utilities.</ListItem>
                                    <ListItem>Test updating and patching functionalities.</ListItem>
                                </ul>
                            </ApproachCard>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.2s'} as React.CSSProperties}>
                            <ApproachCard number={3} title="Monitor">
                                <p><strong>Effective ROI Feedback Mechanism:</strong></p>
                                <ul className="mt-2 space-y-3">
                                    <ListItem>Assess power savings for each user group type monthly.</ListItem>
                                    <ListItem>Fine-tune power settings based on feedback and achieved results.</ListItem>
                                </ul>
                            </ApproachCard>
                        </div>
                    </div>
                </div>
            </section>

             <section className="bg-white py-20">
                <div className="container mx-auto px-4 text-center text-slate-600 max-w-4xl mx-auto">
                    <p className="text-2xl font-semibold">We believe that M Intergraph GoGreen is a cost-effective way to make an <span className="text-green-600">immediate impact on your IT budget while contributing to a greener environment.</span></p>
                </div>
            </section>
            
            {/* Final CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Go Green with M Intergraph</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                        Ready to reduce costs and your carbon footprint? Let's discuss how our GoGreen services can be tailored for your organization.
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Enquire About GoGreen
                    </a>
                </div>
            </section>
        </main>
    );
};
