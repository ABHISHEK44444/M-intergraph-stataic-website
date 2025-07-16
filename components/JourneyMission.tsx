import React from 'react';
import { RocketIcon, TargetIcon } from './IconComponents';

export const JourneyMission: React.FC = () => {
    return (
        <section id="journey" className="py-20 sm:py-28 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-10 items-stretch">
                    
                    <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200 flex flex-col animate-on-scroll">
                        <div className="flex items-center space-x-5">
                           <div className="bg-blue-100 p-4 rounded-full">
                             <RocketIcon className="h-10 w-10 text-blue-600" />
                           </div>
                           <h3 className="text-3xl font-bold text-slate-900">Our Journey</h3>
                        </div>
                        <p className="mt-6 text-lg text-slate-600 leading-relaxed flex-grow">
                            With over two decades of stable growth and profitability, M Intergraph has become a trusted partner for businesses worldwide. Our presence extends across India, with 70+ support locations.
                        </p>
                    </div>

                    <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200 flex flex-col animate-on-scroll" style={{'--animation-delay': '0.2s'} as React.CSSProperties}>
                        <div className="flex items-center space-x-5">
                           <div className="bg-blue-100 p-4 rounded-full">
                            <TargetIcon className="h-10 w-10 text-blue-600" />
                           </div>
                           <h3 className="text-3xl font-bold text-slate-900">Our Mission</h3>
                        </div>
                        <p className="mt-6 text-lg text-slate-600 leading-relaxed flex-grow">
                            To provide quality support services and offer end-to-end IT solutions using best-in-class products, tailored to meet our customers' unique requirements.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
