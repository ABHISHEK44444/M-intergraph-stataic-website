


import React from 'react';
import { CheckCircleIcon, GlobeAltIcon, UsersIcon, ShieldCheckIcon, ServerStackIcon, LightBulbIcon, HeartIcon } from './IconComponents';

const StatCard: React.FC<{ icon: React.ReactNode; value: string; label: string }> = ({ icon, value, label }) => (
    <div className="bg-white p-8 rounded-2xl shadow-xl text-center flex flex-col items-center h-full border border-gray-200">
        <div className="text-blue-500 mb-4">{icon}</div>
        <div className="text-5xl font-extrabold text-slate-900">{value}</div>
        <div className="text-base font-medium text-slate-500 mt-2">{label}</div>
    </div>
);

export const AboutPage: React.FC = () => {
    const isoAccreditations = [
        { title: "ISO 9001:2008", description: "Quality Management" },
        { title: "ISO 20000-1:2011", description: "IT Service Management" },
        { title: "ISO 27000:2005", description: "Information Security Management" },
    ];

    const managedServices = [
        "Procurement of hardware and software",
        "Deployment to your locations",
        "365-day NOC management",
        "Leading security measures",
        "End-user support",
        "Proper equipment disposal",
    ];

    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section 
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2134&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-3xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">The Company</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                           Empowering Business Excellence
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            A leading IT System Integrator and Managed Service Provider, committed to delivering stability, leadership, and speed.
                        </p>
                    </div>
                </div>
            </section>

            {/* At a glance stats */}
            <div className="py-20 sm:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="animate-on-scroll"><StatCard icon={<HeartIcon className="h-12 w-12" />} value="30+" label="Years of Growth" /></div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}><StatCard icon={<UsersIcon className="h-12 w-12" />} value="70+" label="Support Locations" /></div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.2s'} as React.CSSProperties}><StatCard icon={<GlobeAltIcon className="h-12 w-12" />} value="Global" label="Project Experience" /></div>
                    </div>
                </div>
            </div>

            <div className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto space-y-28">

                        {/* Reach and Collaborations */}
                        <div className="grid md:grid-cols-2 gap-16 items-center animate-on-scroll">
                            <div className="pr-4">
                                <h2 className="text-4xl font-bold tracking-tight text-slate-900">Our Reach and Collaborations</h2>
                                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                                    We operate across India with 70+ support centers and have strong project experience in the UAE, KSA, Africa, and Europe. We work closely with partners through private-branded field services and NOC services.
                                </p>
                            </div>
                            <div className="flex justify-center">
                               <img src="https://images.unsplash.com/photo-1570126618953-add78693c4e4?q=80&w=1974&auto=format&fit=crop" alt="Global Network" className="rounded-2xl shadow-xl aspect-[4/3] object-cover" />
                            </div>
                        </div>

                        {/* Our Clientele */}
                        <div id="clientele" className="grid md:grid-cols-2 gap-16 items-center animate-on-scroll scroll-mt-28">
                            <div className="flex justify-center">
                               <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop" alt="Diverse team of clients in a meeting" className="rounded-2xl shadow-xl aspect-[4/3] object-cover" />
                            </div>
                             <div className="md:pl-4">
                                <h2 className="text-4xl font-bold tracking-tight text-slate-900">Our Diverse Clientele</h2>
                                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                                    We cater to 250+ clients across India, offering custom-built software solutions empowered by RFID, Barcode, and IoT technologies.
                                </p>
                                <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                                    Our long list of clients includes retail, supply chain, logistics and transportation, education, government, manufacturing, and IT business owners.
                                </p>
                            </div>
                        </div>

                        {/* ISO Accreditations */}
                        <div className="animate-on-scroll">
                            <div className="text-center">
                                <h2 className="text-4xl font-bold tracking-tight text-slate-900">Stability and Recognition</h2>
                                <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">Our commitment to quality is validated by internationally recognized standards.</p>
                            </div>
                            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
                                {isoAccreditations.map((cert, index) => (
                                    <div key={cert.title} className="bg-white border border-gray-200 p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll" style={{'--animation-delay': `${index * 0.1}s`} as React.CSSProperties}>
                                        <ShieldCheckIcon className="h-12 w-12 mx-auto text-blue-500 mb-5" />
                                        <h3 className="text-xl font-semibold text-slate-900">{cert.title}</h3>
                                        <p className="text-slate-500 mt-2 text-base">{cert.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Managed IT Services */}
                        <div className="bg-gray-100 p-10 md:p-14 rounded-3xl border border-gray-200 animate-on-scroll">
                            <div className="text-center">
                                <ServerStackIcon className="h-12 w-12 mx-auto text-blue-500 mb-5" />
                                <h2 className="text-4xl font-bold tracking-tight text-slate-900">End-to-End Managed IT Services</h2>
                                <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">From a secure data center, NOC, and Helpdesk, our support consistently surpasses expectations. We handle everything:</p>
                            </div>
                            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-5">
                                {managedServices.map((service, index) => (
                                    <div key={index} className="flex items-center p-2">
                                        <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                                        <span className="text-slate-700 font-medium text-base">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Collaborative Solutions & Peace of Mind */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             <div className="bg-white p-10 rounded-2xl border border-gray-200 shadow-xl h-full animate-on-scroll">
                                <LightBulbIcon className="h-10 w-10 text-blue-500 mb-4" />
                                <h2 className="text-3xl font-bold text-slate-900">Collaborative Solutions</h2>
                                <p className="mt-5 text-lg text-slate-600 leading-relaxed">By working closely on project engagements, we provide integrated and innovative end-to-end solutions that streamline operational effectiveness and mitigate risks.</p>
                            </div>
                            <div className="bg-white p-10 rounded-2xl border border-gray-200 shadow-xl h-full animate-on-scroll" style={{'--animation-delay': `0.1s`} as React.CSSProperties}>
                                <HeartIcon className="h-10 w-10 text-blue-500 mb-4" />
                                <h2 className="text-3xl font-bold text-slate-900">Peace of Mind for Your Business</h2>
                                <p className="mt-5 text-lg text-slate-600 leading-relaxed">Let us manage your IT so you can concentrate on your core business. We deliver stability, leadership, and speed, whether supporting your team or replacing an existing department.</p>
                            </div>
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="mt-24 sm:mt-32 text-center text-slate-600 border-t border-gray-200 pt-12">
                        <p className="text-2xl font-semibold">At M Intergraph Systems, excellence isn't just a goal—<span className="text-blue-600">it's our commitment to you.</span></p>
                    </div>
                </div>
            </div>
        </main>
    );
};