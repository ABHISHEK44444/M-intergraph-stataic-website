
import React from 'react';

export const Welcome: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-white relative overflow-hidden scroll-mt-28">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 opacity-50 pointer-events-none">
        <div className="w-[40rem] h-[40rem] bg-blue-50 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 opacity-50 pointer-events-none">
        <div className="w-[40rem] h-[40rem] bg-indigo-50 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Content */}
          <div className="relative animate-on-scroll order-last lg:order-first">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                alt="A professional team collaborating in a modern meeting room"
                className="rounded-2xl shadow-2xl aspect-video lg:aspect-[4/3] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-full h-full bg-slate-200 rounded-2xl -z-0 transform-gpu"></div>
          </div>
          
          {/* Text Content */}
          <div className="text-left animate-on-scroll" style={{'--animation-delay': '0.2s'} as React.CSSProperties}>
            <h1 className="text-5xl font-extrabold tracking-tighter text-slate-900 sm:text-6xl md:text-7xl leading-tight">
              Welcome to M Intergraph Systems
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-xl">
              An acclaimed IT System Integrator and Managed Service Provider committed to delivering excellence, stability, and speed for your enterprise.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Stat Cards */}
              <div className="bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-gray-200 text-center shadow-lg">
                <p className="text-4xl font-bold text-blue-600">30+</p>
                <p className="mt-1 text-sm font-semibold text-slate-600 uppercase tracking-wider">Years Exp.</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-gray-200 text-center shadow-lg">
                <p className="text-4xl font-bold text-blue-600">ISO</p>
                <p className="mt-1 text-sm font-semibold text-slate-600 uppercase tracking-wider">Certified</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-gray-200 text-center shadow-lg">
                <p className="text-4xl font-bold text-blue-600">70+</p>
                <p className="mt-1 text-sm font-semibold text-slate-600 uppercase tracking-wider">Locations</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
