
import React from 'react';
import {
    UsersIcon,
    WhatsappIcon,
    PhoneIcon,
    ArrowTrendingUpIcon,
    CreditCardIcon,
    ClockIcon,
    BriefcaseIcon
} from './IconComponents';

interface CareersPageProps {
    onNavigate: (path: string) => void;
}

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center flex flex-col items-center justify-center h-40 transform hover:-translate-y-2 transition-transform duration-300">
        <div className="text-blue-600 w-12 h-12 mb-3">{icon}</div>
        <h3 className="text-lg font-bold text-slate-800">{title}</h3>
    </div>
);

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate }) => {
    const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Careers</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            Where your passion meets our vision
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            If you're passionate about technology and want to take your career to the next level, we invite you to apply for one of our open positions today!
                        </p>
                        <div className="mt-10">
                            <a href="#" onClick={handleApplyClick} className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-blue-700 hover:shadow-xl hover:scale-105 transform">
                                Apply Now
                            </a>
                        </div>
                        <div className="mt-8 text-lg font-semibold text-white">
                            <p className="mb-2 text-blue-200">OR</p>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                                <a href="tel:+919899980247" className="flex items-center hover:text-blue-200 transition-colors">
                                    <PhoneIcon className="w-5 h-5 mr-2"/>
                                    <span>Call: +91-9899980247</span>
                                </a>
                                <a href="https://wa.me/919899980247" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-200 transition-colors">
                                    <span>Whatsapp:</span>
                                    <WhatsappIcon className="w-8 h-8 ml-1 text-green-400"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Perks & Benefits section */}
            <section className="py-20 sm:py-24 bg-white">
                 <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Perks & Benefits</h2>
                        <p className="mt-6 text-xl text-slate-600">
                           We value our team members and offer a competitive package that supports their professional and personal growth.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <div className="animate-on-scroll" style={{'--animation-delay': '0s'} as React.CSSProperties}><BenefitCard icon={<ArrowTrendingUpIcon className="w-10 h-10" />} title="Career Growth" /></div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}><BenefitCard icon={<BriefcaseIcon className="w-10 h-10" />} title="Work From Anywhere" /></div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.2s'} as React.CSSProperties}><BenefitCard icon={<CreditCardIcon className="w-10 h-10" />} title="Smart Salary" /></div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.3s'} as React.CSSProperties}><BenefitCard icon={<ClockIcon className="w-10 h-10" />} title="Flexible Hours" /></div>
                    </div>
                </div>
            </section>

            {/* Culture Section */}
            <section className="py-20 sm:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                        <div className="relative animate-on-scroll order-last lg:order-first">
                            <img 
                                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop"
                                alt="A diverse team collaborating in a bright, modern office"
                                className="rounded-2xl shadow-2xl aspect-[4/3] object-cover"
                            />
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Our Culture of Growth and Innovation</h2>
                            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                                At M Intergraph, we foster a collaborative and dynamic environment where innovation thrives. We believe in investing in our people, providing them with the tools, training, and opportunities they need to grow both personally and professionally.
                            </p>
                            <p className="mt-4 text-xl text-slate-600 leading-relaxed">
                                Join us and be part of a team that's passionate about solving complex challenges and making a real impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Openings */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                     <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl animate-on-scroll">Current Openings</h2>
                        <p className="mt-6 text-xl text-slate-600 animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                           We are always looking for talented individuals to join our team. While we may not have specific roles listed here at the moment, we encourage you to send your resume to our HR department.
                        </p>
                        <div className="mt-8 animate-on-scroll" style={{'--animation-delay': '0.2s'} as React.CSSProperties}>
                             <a href="mailto:careers@mintergraph.com" className="text-xl font-bold text-blue-600 hover:underline">
                                careers@mintergraph.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Ready to Make an Impact?</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                       We believe that great people build great companies. If you're ready to contribute to a dynamic and innovative team, we'd love to hear from you.
                    </p>
                    <a href="#" onClick={handleApplyClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Join Our Team
                    </a>
                </div>
            </section>
        </main>
    );
};
