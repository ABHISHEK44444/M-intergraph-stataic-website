import React from 'react';
import {
    UsersIcon,
    CheckCircleIcon,
    BriefcaseIcon,
    LightBulbIcon,
    ShieldCheckIcon
} from './IconComponents';

interface OutsourcingPageProps {
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

export const OutsourcingPage: React.FC<OutsourcingPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };
    
    const isoAccreditations = [
        "ISO 9001:2008 Certification",
        "ISO 20000-1:2011 IT Service Management Certification",
        "ISO 27000:2005 Information Security Management System Standard Certification"
    ];

    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Service: Outsourcing</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            Outsourcing Resources: Empowering Your Workforce
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            At M Intergraph Systems Pvt. Ltd., we understand the critical role of staffing in achieving business goals. Our outsourcing services provide flexible solutions to meet your workforce needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                     <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                        <div className="animate-on-scroll">
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Contractual and Temporary Manpower</h2>
                            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                               We offer contractual or temporary manpower to address your staffing requirements. Whether for short-term projects or specific roles, we tailor our services to your needs.
                            </p>
                            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                                Our goal is to seamlessly integrate with your team and enhance productivity.
                            </p>
                        </div>
                        <div className="relative animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <img 
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                alt="Team collaborating on a project"
                                className="rounded-2xl shadow-2xl aspect-[4/3] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Payroll Services Section */}
            <section className="py-20 sm:py-28 bg-gray-50">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Resource Identification and Payroll Services" subtitle="Here’s how we can assist your organization:" />
                    <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="animate-on-scroll">
                            <DetailCard icon={<UsersIcon className="w-9 h-9" />} title="Hiring and Identification">
                               <p>We collaborate with clients to identify suitable resources. Selected candidates become part of our payroll for service delivery.</p>
                            </DetailCard>
                        </div>
                         <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <DetailCard icon={<BriefcaseIcon className="w-9 h-9" />} title="Pre-Identified Resources">
                               <p>Clients can also choose to place pre-identified resources on our payroll. We take responsibility for HR administrative activities and statutory compliance.</p>
                            </DetailCard>
                        </div>
                         <div className="animate-on-scroll" style={{'--animation-delay': '0.2s'} as React.CSSProperties}>
                            <DetailCard icon={<CheckCircleIcon className="w-9 h-9" />} title="Client Control and Monitoring">
                                <p>While we manage operational and performance aspects, clients retain control. You oversee the outcomes, ensuring alignment with your business objectives.</p>
                            </DetailCard>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Commitment Section */}
            <section className="py-20 sm:py-28 bg-white border-t border-b border-gray-200">
                <div className="container mx-auto px-4">
                     <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
                        <div className="relative order-last lg:order-first animate-on-scroll">
                           <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2134&auto=format&fit=crop" alt="Professionals in a meeting" className="rounded-2xl shadow-2xl aspect-[4/3] object-cover"/>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <LightBulbIcon className="h-16 w-16 mb-6 text-blue-500" />
                            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Our Commitment to Excellence</h3>
                             <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                                With over 20 years of growth, we bring stability and expertise. Our focus is on empowering your workforce for success.
                            </p>
                            <div className="mt-8">
                                <h4 className="text-2xl font-semibold text-slate-800 mb-4">ISO Accreditations:</h4>
                                <ul className="space-y-3">
                                    {isoAccreditations.map(cert => <ListItem key={cert}>{cert}</ListItem>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
             <section className="bg-white py-20">
                <div className="container mx-auto px-4 text-center text-slate-600">
                    <p className="text-2xl font-semibold">At M Intergraph, we don’t just provide resources; <span className="text-blue-600">we deliver solutions that drive your business forward.</span></p>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Looking for Flexible Staffing Solutions?</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                       Contact us today to learn how our outsourcing services can empower your business.
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Enquire Now
                    </a>
                </div>
            </section>
        </main>
    );
};
