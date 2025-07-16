

import React from 'react';
import {
    SparklesIcon,
    KeyIcon,
    HandRaisedIcon,
    ArrowTrendingUpIcon,
    ScaleIcon,
    TrophyIcon,
    LightBulbIcon,
    AcademicCapIcon,
    ClipboardDocumentCheckIcon,
    ChatBubbleLeftEllipsisIcon
} from './IconComponents';

interface ValueCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full">
        <div className="text-blue-500 w-12 h-12 mb-5">{icon}</div>
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
        <p className="mt-3 text-slate-600 text-base leading-relaxed">{description}</p>
    </div>
);

const CultureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; }> = ({ icon, title, children }) => (
    <div className="bg-white p-10 rounded-2xl border border-gray-200 shadow-xl h-full">
        <div className="flex items-center mb-5">
            <div className="text-blue-500 w-10 h-10">{icon}</div>
            <h3 className="ml-5 text-3xl font-bold text-slate-900">{title}</h3>
        </div>
        <div className="text-slate-600 text-lg leading-relaxed space-y-4">{children}</div>
    </div>
);


export const PeopleAndValuesPage: React.FC = () => {

    const values = [
        { icon: <SparklesIcon />, title: "Customer Delight", description: "We don't settle for meeting expectations; we exceed them. Our commitment to customer satisfaction drives everything we do." },
        { icon: <KeyIcon />, title: "Ownership", description: "We take ownership of our roles and responsibilities. Independence and accountability fuel our determination to get things done." },
        { icon: <HandRaisedIcon />, title: "Teamwork", description: "We celebrate collective achievements and leverage each team member's unique skills to ensure success and fuel our customers' vision." },
        { icon: <ArrowTrendingUpIcon />, title: "Respect & Growth", description: "We foster an environment of mutual respect and dignity, where personal and professional growth opportunities are woven into our fabric." },
        { icon: <ScaleIcon />, title: "Integrity", description: "Ethical behavior is our compass. Transparency and openness define our conduct with employees, clients, and partners." },
        { icon: <TrophyIcon />, title: "Strive for Excellence", description: "Continual improvement is our mantra. We aim to lead the industry through innovation and service excellence." },
    ];

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
                    <div className="text-white z-10 max-w-3xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Our People & Values</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                           The Heart of Our Success
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            Our culture is built on a foundation of core values that guide our actions, decisions, and interactions every day.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Core Values Section */}
            <div className="py-20 sm:py-28">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Our Core Principles</h2>
                        <p className="mt-6 text-xl text-slate-600">
                            These values aren't just words on a page—they shape our culture, guide our decisions, and inspire us to achieve greatness together.
                        </p>
                    </div>
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                           <div key={index} className="animate-on-scroll" style={{'--animation-delay': `${(index % 3) * 0.1}s`} as React.CSSProperties}>
                                <ValueCard icon={value.icon} title={value.title} description={value.description} />
                           </div>
                        ))}
                         <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 shadow-lg flex items-center justify-center lg:col-span-1 md:col-span-2 animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <div className="text-center">
                                <LightBulbIcon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-blue-900">Leadership & Innovation</h3>
                                <p className="mt-2 text-blue-800">We empower every individual to demonstrate leadership and creative thinking.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Culture Section */}
            <div className="py-20 sm:py-28 bg-white border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Our Commitment to Growth</h2>
                        <p className="mt-6 text-xl text-slate-600">
                            We believe that our people define our excellence. We are committed to investing in their journey from day one.
                        </p>
                    </div>
                    <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
                        <div className="animate-on-scroll">
                            <CultureCard icon={<ClipboardDocumentCheckIcon />} title="Induction & Recruitment">
                               <p>Learning the ropes is a priority. During induction, new team members are encouraged to ask questions, meet teams, and absorb our work culture to ensure a successful journey.</p>
                            </CultureCard>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <CultureCard icon={<AcademicCapIcon />} title="Training & Development">
                               <p>We invest heavily in both soft and hard skills development. Ongoing training ensures our team stays at the forefront of the industry, ready to tackle any challenge.</p>
                            </CultureCard>
                        </div>
                         <div className="animate-on-scroll" style={{'--animation-delay': '0.2s'} as React.CSSProperties}>
                             <CultureCard icon={<ChatBubbleLeftEllipsisIcon />} title="High Engagement">
                               <p>Through continual feedback and empathetic listening, we identify strengths and areas for improvement. Our stable, warm, and entrepreneurial work environment reflects this commitment.</p>
                            </CultureCard>
                        </div>
                    </div>
                </div>
            </div>

             {/* Final CTA */}
            <div className="bg-gray-50 py-16 sm:py-20">
                <div className="container mx-auto px-4 text-center text-slate-600 border-t border-gray-200 pt-12">
                    <p className="text-2xl font-semibold">M Intergraph: Where values drive excellence, and <span className="text-blue-600">every journey matters.</span></p>
                </div>
            </div>
        </main>
    );
};
