import React from 'react';
import { LightBulbIcon, CheckCircleIcon, UsersIcon } from './IconComponents';

interface ConsultingOverviewPageProps {
    onNavigate: (path: string) => void;
}

const BenefitItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
        <span className="text-lg text-slate-700">{children}</span>
    </li>
);

export const ConsultingOverviewPage: React.FC<ConsultingOverviewPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    return (
        <main className="bg-white">
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
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Consulting Overview</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                           IT Consulting & Advisory Services
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            At M Intergraph Systems, we offer comprehensive IT consulting and advisory services to help businesses navigate the complex landscape of technology and achieve their strategic objectives.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="py-20 sm:py-28 lg:py-32 bg-gray-50"
                 style={{ backgroundImage: `
                    radial-gradient(circle at top left, rgba(29, 78, 216, 0.03), transparent 40%),
                    radial-gradient(circle at bottom right, rgba(29, 78, 216, 0.03), transparent 40%)
                 `}}
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-20">
                        
                        <div className="animate-on-scroll">
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Our Approach</h2>
                            <p className="mt-6 text-xl text-slate-600">
                                Our seasoned experts collaborate closely with clients, addressing challenges and driving improved business performance through a holistic approach that aligns IT with overall business needs.
                            </p>
                            <div className="mt-12 space-y-8">
                                <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg">
                                    <h3 className="text-2xl font-bold text-slate-800">1. Business and IT Alignment (BITA)</h3>
                                    <p className="mt-4 text-lg text-slate-600 leading-relaxed">We recognize that successful organizations require seamless alignment between their technology strategy and business goals. Our IT Advisory Services focus on bridging this gap, ensuring that technology investments directly contribute to business success.</p>
                                </div>
                                <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg">
                                    <h3 className="text-2xl font-bold text-slate-800">2. Rapidly Changing Technology Landscape</h3>
                                    <p className="mt-4 text-lg text-slate-600 leading-relaxed">In today’s dynamic business environment, technology evolves at an unprecedented pace. Our consultants stay ahead of the curve, helping clients seize opportunities and overcome challenges presented by emerging technologies.</p>
                                </div>
                                <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg">
                                    <h3 className="text-2xl font-bold text-slate-800">3. Collaboration with Key Stakeholders</h3>
                                    <p className="mt-4 text-lg text-slate-600 leading-relaxed">We work directly with Chief Information Officers (CIOs) and other stakeholders to create a more effective IT infrastructure. By understanding your unique requirements, we tailor solutions that drive process efficiencies across the organization.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-16 border-t border-gray-200 animate-on-scroll">
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Our Services</h2>
                            <div className="mt-12 grid md:grid-cols-2 gap-8">
                                <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg h-full">
                                    <h3 className="text-2xl font-bold text-slate-800">1. Technology Assessment and Recommendations</h3>
                                    <p className="mt-4 text-lg text-slate-600 leading-relaxed">We assess your existing IT systems and recommend tailored solutions to meet your business objectives. Our insights empower you to make informed decisions about technology investments.</p>
                                </div>
                                <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg h-full">
                                    <h3 className="text-2xl font-bold text-slate-800">2. Proven Methodologies and Tools</h3>
                                    <p className="mt-4 text-lg text-slate-600 leading-relaxed">Leveraging industry best practices, we deploy proven methodologies and tools for cost-effective technology integration and deployment. Our goal is to maximize value while minimizing risks.</p>
                                </div>
                                <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg h-full">
                                    <h3 className="text-2xl font-bold text-slate-800">3. Expert Advice Across Platforms</h3>
                                    <p className="mt-4 text-lg text-slate-600 leading-relaxed">Our team provides expert advice across a wide range of platforms and technologies. From desktop solutions to data centers, we ensure that your IT infrastructure is optimized for performance, availability, and security.</p>
                                </div>
                                <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg h-full">
                                    <h3 className="text-2xl font-bold text-slate-800">4. Enabling a Secure and Robust Infrastructure</h3>
                                    <p className="mt-4 text-lg text-slate-600 leading-relaxed">We create a secure and robust IT infrastructure that supports your business’s growth and technology requirements. Our solutions are designed to adapt to changing needs and future-proof your operations.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="pt-16 border-t border-gray-200 animate-on-scroll">
                             <div className="text-center">
                                <LightBulbIcon className="h-16 w-16 mx-auto mb-6 text-blue-500" />
                                <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Client Benefits</h2>
                            </div>
                            <div className="mt-12 max-w-2xl mx-auto bg-white p-10 rounded-2xl border border-gray-200 shadow-xl">
                                <ul className="space-y-5">
                                    <BenefitItem><strong>Strategic Alignment:</strong> Align your technology strategy with business objectives.</BenefitItem>
                                    <BenefitItem><strong>Cost-Effective Integration:</strong> Implement solutions using proven methodologies and tools.</BenefitItem>
                                    <BenefitItem><strong>Expert Guidance:</strong> Access advice across key IT areas.</BenefitItem>
                                    <BenefitItem><strong>Performance and Security:</strong> Address technology performance, availability, and security.</BenefitItem>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Final CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Ready to Transform Your Business?</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                       At M Intergraph Systems, we’re committed to helping you thrive in the digital age. Contact us today to explore how our IT consulting services can transform your business.
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Schedule a Free Consultation
                    </a>
                </div>
            </section>
        </main>
    );
};
