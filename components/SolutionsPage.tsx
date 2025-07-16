

import React from 'react';
import { 
    ServerStackIcon, 
    ClipboardDocumentCheckIcon, 
    CheckCircleIcon,
    RectangleGroupIcon,
    KeyIcon,
    ShieldCheckIcon,
    LockClosedIcon,
    EnvelopeIcon,
    CloudIcon
} from './IconComponents';

interface SolutionsPageProps {
    onNavigate: (path: string) => void;
}

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
        <span className="text-slate-600 text-lg">{children}</span>
    </li>
);

const SolutionDetailCard: React.FC<{ id: string; icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ id, icon, title, children }) => (
    <div id={id} className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-200 h-full transform hover:-translate-y-2 transition-transform duration-300 scroll-mt-28">
        <div className="flex items-center mb-6">
            <div className="p-4 bg-blue-100 rounded-full">
                {icon}
            </div>
            <h4 className="ml-5 text-2xl font-bold text-slate-900">{title}</h4>
        </div>
        <div className="text-slate-600 text-lg leading-relaxed space-y-4">
            {children}
        </div>
    </div>
);

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    const solutions = [];

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section 
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-3xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">IT Solutions</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                           IT Infrastructure & Service Management
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            We provide comprehensive IT solution integration, product consulting, and implementation support for Enterprise and Government sectors.
                        </p>
                        <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-blue-700 hover:shadow-xl hover:scale-105 transform">
                            Enquire Now
                        </a>
                    </div>
                </div>
            </section>
            
            {/* Main Content */}
            <div className="py-20 sm:py-28 lg:py-32 bg-gray-50"
                 style={{ backgroundImage: `
                    radial-gradient(circle at top left, rgba(29, 78, 216, 0.03), transparent 35%),
                    radial-gradient(circle at bottom right, rgba(29, 78, 216, 0.03), transparent 35%)
                 `}}
            >
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Solution Overview</h2>
                        <p className="mt-6 text-xl text-slate-600">
                           With vast expertise in solution integration, M Intergraph has divided its system integration solutions for the SMB, Enterprise, and Government Sectors.
                        </p>
                    </div>

                    <div className="mt-24 max-w-7xl mx-auto">
                        <div className="text-center mb-16 bg-white p-10 rounded-2xl shadow-lg border border-gray-100 animate-on-scroll">
                             <h3 className="text-3xl font-bold text-slate-800 tracking-tight">For Enterprise and Government</h3>
                             <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
                                In this stream, M Intergraph offers product and solution consulting & implementation support to its Government and large but selective enterprise customer.
                             </p>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                            
                            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200 h-full transform hover:-translate-y-2 transition-transform duration-300 animate-on-scroll">
                                <div className="flex items-center mb-6">
                                    <div className="p-4 bg-blue-100 rounded-full">
                                      <ServerStackIcon className="h-10 w-10 text-blue-600" />
                                    </div>
                                    <h4 className="ml-5 text-3xl font-bold text-slate-900">IT Infrastructure</h4>
                                </div>
                                <p className="text-slate-500 mb-8 text-lg">Implementation and Integration services covering:</p>
                                <ul className="space-y-4">
                                    <ListItem>Client – Thick, thin and Zero clients.</ListItem>
                                    <ListItem>Dynamic Desktop deployments</ListItem>
                                    <ListItem>Server & Storage Infrastructure for SMB and large Data Center environments</ListItem>
                                </ul>
                                
                                <div className="mt-10 pt-8 border-t border-gray-200/80">
                                     <h5 className="text-2xl font-semibold text-slate-800 mb-5">Virtualization</h5>
                                     <ul className="space-y-4">
                                        <ListItem>Server</ListItem>
                                        <ListItem>Storage</ListItem>
                                        <ListItem>Load balancer</ListItem>
                                        <ListItem>Clustering</ListItem>
                                        <ListItem>Security</ListItem>
                                     </ul>
                                </div>
                            </div>

                             <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200 h-full transform hover:-translate-y-2 transition-transform duration-300 animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                                <div className="flex items-center mb-6">
                                    <div className="p-4 bg-blue-100 rounded-full">
                                      <ClipboardDocumentCheckIcon className="h-10 w-10 text-blue-600" />
                                    </div>
                                    <h4 className="ml-5 text-3xl font-bold text-slate-900">Business Service Management</h4>
                                </div>
                                 <p className="text-slate-500 mb-8 text-lg">Our offerings include:</p>
                                <ul className="space-y-4">
                                    <ListItem>Process consulting (ITIL & ITSM)</ListItem>
                                    <ListItem>Employee self service</ListItem>
                                    <ListItem>Asset & configuration management</ListItem>
                                    <ListItem>IT controls managements</ListItem>
                                    <ListItem>License usage and compliance</ListItem>
                                    <ListItem>Service management</ListItem>
                                    <ListItem>IT governance & risk management</ListItem>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* New Solutions Catalog Section */}
                    { solutions.length > 0 && 
                        <div id="solutions-catalog" className="mt-24 sm:mt-32 pt-16 sm:pt-20 border-t border-gray-200 max-w-7xl mx-auto">
                            <div className="text-center mb-16 animate-on-scroll">
                                 <h3 className="text-4xl font-bold text-slate-900 sm:text-5xl">Our Solutions Catalog</h3>
                                 <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-600">
                                    Explore our specialized solutions designed to address specific business challenges and enhance your operational capabilities.
                                 </p>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                                {solutions.map((sol, index) => (
                                    <div key={sol.id} className="animate-on-scroll" style={{'--animation-delay': `${(index % 2) * 0.1}s`} as React.CSSProperties}>
                                        <SolutionDetailCard id={sol.id} icon={sol.icon} title={sol.title}>
                                            <p>{sol.description}</p>
                                        </SolutionDetailCard>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }

                </div>
            </div>
        </main>
    );
};
