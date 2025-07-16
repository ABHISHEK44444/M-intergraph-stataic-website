
import React from 'react';
import {
    GlobeAltIcon,
    ScaleIcon,
    ShieldCheckIcon,
    ServerStackIcon,
    UsersIcon,
    CheckCircleIcon,
    CpuChipIcon,
    LightBulbIcon
} from './IconComponents';

interface VdiPageProps {
    onNavigate: (path: string) => void;
}

const HowItWorksCard: React.FC<{ number: number; title: string; children: React.ReactNode; }> = ({ number, title, children }) => (
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

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col text-left">
        <div className="flex-shrink-0 bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">{icon}</div>
        <h3 className="text-2xl font-bold text-slate-900 flex-grow">{title}</h3>
        <p className="mt-4 text-slate-600 leading-relaxed">{description}</p>
    </div>
);

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
        <span className="text-lg text-slate-700">{children}</span>
    </li>
);

export const VdiPage: React.FC<VdiPageProps> = ({ onNavigate }) => {

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
                    backgroundImage: "url('https://images.unsplash.com/photo-1591410972418-3331ce6f7a75?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Solution: VDI</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            Virtual Desktop Infrastructure
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            Empowering flexible workspaces by revolutionizing how organizations deliver and manage desktop environments with enhanced mobility, security, and scalability.
                        </p>
                    </div>
                </div>
            </section>

            {/* How VDI Works Section */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">How VDI Works</h2>
                        <p className="mt-6 text-xl text-slate-600">In a VDI deployment, virtual desktops are hosted on a centralized server, providing secure access to end-users from any device.</p>
                    </div>
                    <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 gap-10">
                        <div className="animate-on-scroll">
                            <HowItWorksCard number={1} title="Centralized Server">
                                VMs host virtual desktops on a centralized server within the data center. Multiple VM instances can coexist on the same server.
                            </HowItWorksCard>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <HowItWorksCard number={2} title="End-User Access">
                                End clients (devices) connect to the centrally managed server. Users access their virtualized desktops securely.
                            </HowItWorksCard>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.2s'} as React.CSSProperties}>
                            <HowItWorksCard number={3} title="Connection Broker">
                                The connection broker assigns a virtual desktop from the resource pool to each client, ensuring efficient resource allocation.
                            </HowItWorksCard>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.3s'} as React.CSSProperties}>
                            <HowItWorksCard number={4} title="Hypervisor Management">
                                The hypervisor creates, runs, and manages host machine VMs encapsulating individual virtual desktop environments.
                            </HowItWorksCard>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Benefits of VDI Section */}
            <section className="py-20 sm:py-28 bg-gray-50 border-t border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Benefits of VDI</h2>
                    </div>
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="animate-on-scroll">
                            <BenefitCard icon={<GlobeAltIcon className="w-9 h-9" />} title="Remote Access" description="Users connect to their virtual desktops from anywhere, on any device, facilitating remote work and enhancing mobility." />
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <BenefitCard icon={<ScaleIcon className="w-9 h-9" />} title="Cost Savings" description="Lower hardware requirements for end devices. Access virtual desktops from older devices, thin clients, or tablets." />
                        </div>
                        <div className="animate-on-scroll">
                            <BenefitCard icon={<ShieldCheckIcon className="w-9 h-9" />} title="Security Enhancement" description="Data resides on the server, reducing risks if an endpoint device is compromised. Centralized management ensures consistent security policies." />
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <BenefitCard icon={<ServerStackIcon className="w-9 h-9" />} title="Centralized Management" description="Easily patch, update, and configure all virtual desktops from a single point, which streamlines IT operations." />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Considerations and Solutions */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
                        <div className="lg:col-span-3 animate-on-scroll">
                            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Key Considerations</h3>
                             <ul className="mt-8 space-y-8">
                                <ListItem><strong>Persistent vs. Non-Persistent VDI:</strong> We help you choose the right model—Persistent VDI retains user customizations, while Non-persistent VDI resets to a standard state after each session for higher security and easier management.</ListItem>
                                <ListItem><strong>Performance Optimization:</strong> Proper resource allocation and monitoring are crucial. We balance performance with scalability to ensure a smooth user experience without overprovisioning.</ListItem>
                                <ListItem><strong>User Experience:</strong> We focus on ensuring seamless access and responsiveness, optimizing graphics and multimedia performance for a productive workforce.</ListItem>
                             </ul>
                        </div>
                        <div className="lg:col-span-2 animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                             <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-200 shadow-lg h-full">
                                <LightBulbIcon className="h-12 w-12 mb-5 text-blue-600" />
                                <h3 className="text-2xl font-bold text-blue-900">Mint VDI Solutions</h3>
                                <p className="mt-3 text-blue-800 leading-relaxed">Explore our VDI-related products and resources to:</p>
                                <ul className="mt-4 space-y-2 text-blue-800">
                                   <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 mr-3 flex-shrink-0" />Deliver cloud-hosted virtual desktops.</li>
                                   <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 mr-3 flex-shrink-0" />Scale and secure your VDI solutions.</li>
                                   <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 mr-3 flex-shrink-0" />Transform desktop & app virtualization.</li>
                                </ul>
                             </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Final CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Empower Your Organization</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                        For a sustainable, safer workplace, reach out to us. Let’s empower your organization with flexible workspaces!
                    </p>
                    <a href="mailto:solutions@mintergraph.com" className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Contact Us at solutions@mintergraph.com
                    </a>
                </div>
            </section>
        </main>
    );
};
