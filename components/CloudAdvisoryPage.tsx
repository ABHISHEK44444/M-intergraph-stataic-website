import React from 'react';
import {
    CloudIcon,
    CheckCircleIcon,
    UsersIcon,
    LightBulbIcon,
    ShieldCheckIcon,
    ScaleIcon,
    LeafIcon,
    ArrowTrendingUpIcon,
    BriefcaseIcon
} from './IconComponents';

interface CloudAdvisoryPageProps {
    onNavigate: (path: string) => void;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="text-center max-w-4xl mx-auto animate-on-scroll">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{children}</h2>
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
        <span className="text-slate-700 font-medium">{children}</span>
    </li>
);

export const CloudAdvisoryPage: React.FC<CloudAdvisoryPageProps> = ({ onNavigate }) => {

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
                    backgroundImage: "url('https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Cloud Advisory</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            Unlocking Business Value with Cloud Services
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                           Our Cloud Advisory Services empower organizations to develop robust cloud computing strategies for private, public, or hybrid models.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="py-20 sm:py-28 lg:py-32">
                <div className="container mx-auto px-4 space-y-24">
                    
                    <div>
                        <SectionTitle>Strategic Relevance of Cloud Computing</SectionTitle>
                        <div className="mt-16 grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
                            <div className="animate-on-scroll">
                                <DetailCard icon={<LightBulbIcon className="w-9 h-9" />} title="Composability: Creating an Agile Business">
                                    <p>In today’s dynamic business landscape, flexibility is key. Our composability framework allows you to construct, assemble, and reassemble business elements, achieving greater standardization, accelerated delivery, and reduced time-to-market.</p>
                                    <p className="mt-4 font-semibold text-slate-800">Best Practices:</p>
                                    <ul className="mt-2 space-y-2">
                                        <ListItem>Connect experiences and operations across customers, partners, and employees.</ListItem>
                                        <ListItem>Balance proprietary and standard platform elements for optimal outcomes.</ListItem>
                                        <ListItem>Integrate AI and analytics for real business results.</ListItem>
                                    </ul>
                                </DetailCard>
                            </div>
                             <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                                <DetailCard icon={<LeafIcon className="w-9 h-9" />} title="Sustainability that Makes Business Sense">
                                    <p>Sustainability is a top concern for businesses. Our approach ensures both financial and environmental responsibility.</p>
                                    <ul className="mt-4 space-y-3">
                                        <li className="flex items-center"><ShieldCheckIcon className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0"/><strong>Cloud sovereignty:</strong> Benefits include security, control, compliance, data privacy, and scalability.</li>
                                        <li className="flex items-center"><ScaleIcon className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0"/><strong>Financial Operations (FinOps):</strong> Optimize cloud costs while maintaining performance.</li>
                                        <li className="flex items-center"><LeafIcon className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0"/><strong>Green Operations (GreenOps):</strong> Align cloud solutions with environmental goals.</li>
                                    </ul>
                                </DetailCard>
                            </div>
                        </div>
                    </div>

                    <div className="pt-16 border-t border-gray-200">
                        <SectionTitle>Challenges Addressed</SectionTitle>
                        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                           <div className="animate-on-scroll"> <DetailCard icon={<BriefcaseIcon className="w-9 h-9" />} title="Business Case Development">We help you articulate the value proposition of cloud adoption, including cost savings, agility, and competitive advantages.</DetailCard></div>
                           <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}> <DetailCard icon={<CloudIcon className="w-9 h-9" />} title="Efficient & Scalable Architecture">Design cloud solutions that seamlessly integrate legacy IT data and public cloud providers, balancing vision with practical choices.</DetailCard></div>
                           <div className="animate-on-scroll" style={{'--animation-delay': '0.2s'} as React.CSSProperties}> <DetailCard icon={<UsersIcon className="w-9 h-9" />} title="Optimal Workload Placement">Determine the right cloud model (Public, Private, or Hybrid) for each application to ensure performance, security, and cost-effectiveness.</DetailCard></div>
                        </div>
                    </div>
                    
                    <div className="pt-16 border-t border-gray-200">
                        <SectionTitle>Key Benefits</SectionTitle>
                        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                           <div className="animate-on-scroll"> <DetailCard icon={<ArrowTrendingUpIcon className="w-9 h-9" />} title="Market Opportunities & Transformation">Capitalize on emerging trends and stay ahead of the curve. Be a transformational force in your industry.</DetailCard></div>
                           <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}> <DetailCard icon={<LightBulbIcon className="w-9 h-9" />} title="Innovative Value for Customers">Cloud solutions enable new revenue streams and enhance customer experiences through agility and scalability.</DetailCard></div>
                           <div className="animate-on-scroll" style={{'--animation-delay': '0.2s'} as React.CSSProperties}> <DetailCard icon={<CheckCircleIcon className="w-9 h-9" />} title="Strategic Alignment">Align your organization with a well-defined cloud computing strategy to maximize business value from the cloud.</DetailCard></div>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* Final CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Ready to Embark on Your Cloud Journey?</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                       At M Intergraph, we’re committed to unlocking the full potential of cloud computing for your organization. Let’s embark on this transformative journey together!
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Schedule a Cloud Consultation
                    </a>
                </div>
            </section>
        </main>
    );
};