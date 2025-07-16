


import React from 'react';
import { 
    CheckCircleIcon, 
    CpuChipIcon, 
    ServerStackIcon, 
    GlobeAltIcon, 
    BuildingOfficeIcon,
    UsersIcon,
    ChartBarIcon,
    ComputerDesktopIcon,
    LeafIcon,
    CodeBracketIcon
} from './IconComponents';

interface ServicesPageProps {
    onNavigate: (path: string) => void;
}

const ServiceCard: React.FC<{ imageUrl: string; icon: React.ReactNode; title: string; description: string; features: string[] }> = ({ imageUrl, icon, title, description, features }) => (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 h-full transform hover:-translate-y-2 transition-transform duration-300 overflow-hidden flex flex-col">
        <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
        <div className="p-8 lg:p-10 flex flex-col flex-grow">
            <div className="flex items-center mb-6">
                <div className="p-4 bg-blue-100 rounded-full flex-shrink-0">
                    {icon}
                </div>
                <h3 className="ml-5 text-3xl font-bold text-slate-900">{title}</h3>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed mb-6 flex-grow">{description}</p>
            <ul className="space-y-4">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                        <span className="text-slate-600 text-base font-medium">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const ServiceDetailCard: React.FC<{ id: string; icon: React.ReactNode; title: string; children: React.ReactNode; onClick?: () => void; }> = ({ id, icon, title, children, onClick }) => (
    <div 
        id={id} 
        className={`bg-white p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-200 h-full transform hover:-translate-y-2 transition-transform duration-300 scroll-mt-28 ${onClick ? 'cursor-pointer' : ''}`}
        onClick={onClick}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } } : undefined}
    >
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


const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
    
    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    const serviceDetails = [
        {
            name: 'IT System Integration Solutions',
            icon: <CpuChipIcon className="h-10 w-10 text-blue-600" />,
            imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
            features: [
                "End-to-end solution design and architecture.",
                "Hardware and software procurement and deployment.",
                "Integration with existing CRM, ERP, and legacy systems.",
                "Data center and cloud infrastructure setup."
            ],
            description: "We specialize in seamlessly integrating diverse technology components—from hardware and software to networking and cloud services—to create a unified, efficient, and optimized IT environment that aligns perfectly with your business processes."
        },
        {
            name: 'Managed IT Services',
            icon: <ServerStackIcon className="h-10 w-10 text-blue-600" />,
            imageUrl: "https://images.unsplash.com/photo-1581090464777-f32202518901?q=80&w=2070&auto=format&fit=crop",
            features: [
                "24/7 infrastructure monitoring and management.",
                "Proactive maintenance and support.",
                "Comprehensive security management.",
                "Dedicated helpdesk and user support."
            ],
            description: "Entrust your IT infrastructure to us. Our managed services ensure your systems are running at peak performance, security, and reliability, allowing you to focus on your core business objectives while we handle the complexities of IT."
        },
        {
            name: 'Private Branded Field Services',
            icon: <GlobeAltIcon className="h-10 w-10 text-blue-600" />,
            imageUrl: "https://images.unsplash.com/photo-1573497491208-601c52ba4f68?q=80&w=2070&auto=format&fit=crop",
            features: [
                "On-site support under your brand name.",
                "Flexible engagement models.",
                "Access to a wide network of skilled engineers.",
                "Services across the Middle East, Africa, and Europe."
            ],
            description: "Extend your service reach globally without the overhead. We collaborate with System Integrators and IT service companies to provide customized, private-branded field services, representing your company with professionalism and expertise."
        },
        {
            name: 'Network Operations Center (NOC) Services',
            icon: <BuildingOfficeIcon className="h-10 w-10 text-blue-600" />,
            imageUrl: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1974&auto=format&fit=crop",
            features: [
                "365-day continuous network monitoring.",
                "Incident detection, response, and resolution.",
                "Performance and availability management.",
                "Support for Middle East, Africa, and Europe."
            ],
            description: "Our state-of-the-art Network Operations Center (NOC) provides round-the-clock monitoring and management to ensure your network's uninterrupted operation, safeguarding your business against downtime and performance issues."
        }
    ];

    const servicesCatalog = [
        {
            id: 'software-development',
            icon: <CodeBracketIcon className="h-9 w-9 text-blue-600" />,
            title: 'Software Development',
            description: 'Quality-centered, high-performing, and scalable software development services. Click to explore our custom, mobile, and on-demand offerings.',
            path: 'software-development'
        },
        {
            id: 'outsourcing',
            icon: <UsersIcon className="h-9 w-9 text-blue-600" />,
            title: 'Outsourcing',
            description: 'Comprehensive outsourcing solutions to streamline your business operations. Click to learn more about our flexible staffing and payroll services.',
            path: 'outsourcing'
        },
        {
            id: 'retail-it-management',
            icon: <ChartBarIcon className="h-9 w-9 text-blue-600" />,
            title: 'Retail IT Management',
            description: 'Specialized IT management for the retail sector to enhance customer experience and operational efficiency. Click to discover our 360° retail solutions.',
            path: 'retail-it-management'
        },
        {
            id: 'network-management',
            icon: <GlobeAltIcon className="h-9 w-9 text-blue-600" />,
            title: 'Network Management',
            description: 'Robust network management services to ensure connectivity, security, and performance. More details coming soon.'
        },
        {
            id: 'server-management',
            icon: <ServerStackIcon className="h-9 w-9 text-blue-600" />,
            title: 'Server Management',
            description: '360° services to enhance your IT infrastructure, from proactive monitoring to patch management. Click for more details.',
            path: 'server-management'
        },
        {
            id: 'desktop-management',
            icon: <ComputerDesktopIcon className="h-9 w-9 text-blue-600" />,
            title: 'Desktop Management',
            description: 'Holistic services to manage security, applications, and performance for your entire desktop fleet. Click to learn more.',
            path: 'desktop-management'
        },
        {
            id: 'gogreen',
            icon: <LeafIcon className="h-9 w-9 text-blue-600" />,
            title: 'GoGreen',
            description: 'Sustainable IT solutions to reduce your environmental footprint and energy costs through desktop power management. Click to learn more.',
            path: 'gogreen'
        }
    ];

    return (
        <main className="bg-white">
            <section 
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-3xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Our Services</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                           Comprehensive IT Services & Support
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                           At M Intergraph, we offer a complete suite of services designed to help our clients leverage the latest technology and solve complex business challenges.
                        </p>
                        <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-blue-700 hover:shadow-xl hover:scale-105 transform">
                            Enquire Now
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 sm:py-28 lg:py-32 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Our Service Offerings</h2>
                        <p className="mt-6 text-xl text-slate-600">
                            We deliver end-to-end solutions tailored to meet the unique demands of your business, ensuring efficiency, reliability, and growth.
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
                        {serviceDetails.map((service, index) => (
                            <div key={service.name} className="animate-on-scroll" style={{'--animation-delay': `${(index % 2) * 0.1}s`} as React.CSSProperties}>
                                <ServiceCard 
                                    imageUrl={service.imageUrl}
                                    icon={service.icon} 
                                    title={service.name} 
                                    description={service.description} 
                                    features={service.features} 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section id="services-catalog" className="py-20 sm:py-28 lg:py-32 bg-white border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Our Service Catalog</h2>
                        <p className="mt-6 text-xl text-slate-600">
                            Explore our specialized services designed to address specific business needs and empower your organization.
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto items-stretch">
                        {servicesCatalog.map((service, index) => (
                            <div key={service.id} className="animate-on-scroll" style={{'--animation-delay': `${(index % 2) * 0.1}s`} as React.CSSProperties}>
                                <ServiceDetailCard 
                                    id={service.id} 
                                    icon={service.icon} 
                                    title={service.title}
                                    onClick={service.path ? () => onNavigate(service.path) : undefined}
                                >
                                    <p>{service.description}</p>
                                </ServiceDetailCard>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ServicesPage;