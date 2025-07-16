
import React from 'react';
import {
    UsersIcon,
    CheckCircleIcon,
    LightBulbIcon,
    CpuChipIcon,
    DevicePhoneMobileIcon,
    CodeBracketIcon
} from './IconComponents';

interface SoftwareDevelopmentPageProps {
    onNavigate: (path: string) => void;
}

const InfoSection: React.FC<{
    imageUrl: string;
    imageAlt: string;
    title: string;
    children: React.ReactNode;
}> = ({ imageUrl, imageAlt, title, children }) => (
    <div className="flex flex-col lg:flex-row overflow-hidden rounded-2xl shadow-2xl border border-gray-200 bg-white">
        <div className="lg:w-1/2">
            <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover min-h-[300px]"/>
        </div>
        <div className="lg:w-1/2 p-8 md:p-12 bg-slate-800 text-white flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h3>
            <div className="mt-6 text-slate-300 text-xl leading-relaxed space-y-4">
                {children}
            </div>
        </div>
    </div>
);

const ServiceItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-center">
        <CheckCircleIcon className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" />
        <span className="font-medium text-lg">{children}</span>
    </div>
);

export const SoftwareDevelopmentPage: React.FC<SoftwareDevelopmentPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Service: Software Development</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            Software Development Services
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                           We provide quality-centered, high-performing, secure, and scalable software development services to startups, small and medium businesses, and enterprises.
                        </p>
                        <button onClick={handleEnquireClick} className="mt-10 inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-blue-700 hover:shadow-xl hover:scale-105 transform">
                            Request Software Development
                        </button>
                    </div>
                </div>
            </section>
            
            {/* What We Do Section */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center animate-on-scroll">
                        <CodeBracketIcon className="h-16 w-16 mx-auto mb-6 text-blue-500" />
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">What We Do</h2>
                        <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                           At M Intergraph, as a software development company in India, we are focused on delivering value to our clients in various business areas.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content Sections */}
            <div className="py-20 sm:py-24 bg-gray-50 space-y-20">
                <div className="container mx-auto px-4 animate-on-scroll">
                    <InfoSection
                        imageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                        imageAlt="Code on a laptop screen"
                        title="Custom Software Development"
                    >
                        <p>We provide tailored functionality and features to specific users and organizations through our custom software development services. We also offer specific software to our clients, supplementing their QR code, RFID, and IoT requirements, delivering high performance and scalability in day-to-day operations.</p>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-4">
                            <ServiceItem>Web Development</ServiceItem>
                            <ServiceItem>Mobile Development</ServiceItem>
                            <ServiceItem>Desktop Development</ServiceItem>
                            <ServiceItem>Cloud Development</ServiceItem>
                            <ServiceItem>SaaS Development</ServiceItem>
                            <ServiceItem>API & Integrations</ServiceItem>
                        </div>
                        <div className="mt-6">
                            <a href="#" onClick={handleEnquireClick} className="inline-block text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 border-2 border-white hover:bg-white hover:text-slate-800">
                                Contact Now
                            </a>
                        </div>
                    </InfoSection>
                </div>

                <div className="container mx-auto px-4 animate-on-scroll">
                    <div className="text-center bg-white p-10 md:p-16 rounded-2xl shadow-xl border border-gray-200">
                        <DevicePhoneMobileIcon className="h-16 w-16 mx-auto mb-6 text-blue-500" />
                        <h3 className="text-4xl font-bold tracking-tight text-slate-900">Mobile Application Development</h3>
                        <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-600">We provide end-to-end mobile application development while focusing on client’s needs as to best time to market, high-performance, and scalability.</p>
                        <p className="mt-4 max-w-3xl mx-auto text-xl text-slate-500">Our application development team is highly skilled in Cross-Platform and Hybrid applications enabling businesses to target multiple platforms including Windows, iOS, and Android.</p>
                        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-700 font-semibold text-lg">
                           <span>Flutter</span>
                           <span>React Native</span>
                           <span>Objective C</span>
                           <span>UI/UX Development</span>
                           <span>API Integrations</span>
                        </div>
                         <div className="mt-10">
                            <button onClick={handleEnquireClick} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:bg-blue-700 hover:shadow-lg">
                                Contact Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 animate-on-scroll">
                    <InfoSection
                        imageUrl="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop"
                        imageAlt="Developers collaborating at a computer"
                        title="Developers On-Demand"
                    >
                        <p>Hire best on-demand software developers and transform your vision into reality with unmatched development expertise in enterprise software development.</p>
                        <p>M Intergraph’s highly trained developers provide best time to market, design, develop and test your software in a professional environment. We also provide continuous maintenance and support services and optimize your IT infrastructure for enhanced growth and value creation.</p>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-4">
                           <ServiceItem>Full-time developers</ServiceItem>
                           <ServiceItem>Transform IT infrastructure</ServiceItem>
                           <ServiceItem>Unlock high value</ServiceItem>
                           <ServiceItem>Save on development cost</ServiceItem>
                        </div>
                        <div className="mt-6">
                           <a href="#" onClick={handleEnquireClick} className="inline-block text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 border-2 border-white hover:bg-white hover:text-slate-800">
                                Read More
                            </a>
                        </div>
                    </InfoSection>
                </div>
            </div>

            {/* Final CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Transform Your Vision into Reality</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                       Ready to build your next project? Let our expert developers bring your ideas to life.
                    </p>
                    <button onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Hire a Developer
                    </button>
                </div>
            </section>
        </main>
    );
};
