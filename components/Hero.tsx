
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './IconComponents';

const slides = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    title: 'Empowering Your Team with Seamless IT.',
    subtitle: 'Integrated solutions that boost productivity and collaboration across your enterprise.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1603899122634-f086ca5f0ddd?q=80&w=2070&auto=format&fit=crop',
    title: 'Reliable Infrastructure, Resilient Business.',
    subtitle: 'Expert management of your data centers and IT infrastructure for peak performance.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1934&auto=format&fit=crop',
    title: 'Navigate the Cloud with Confidence.',
    subtitle: 'Strategic cloud advisory to accelerate your digital transformation and optimize costs.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1906&auto=format&fit=crop',
    title: 'Proactive Security, Complete Peace of Mind.',
    subtitle: 'Protecting your digital assets with advanced threat intelligence and 24/7 monitoring.',
  },
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <section className="relative h-[75vh] min-h-[600px] w-full overflow-hidden">
      {/* Slides Container */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          style={{ backgroundImage: `url('${slide.imageUrl}')` }}
        >
            <div className="absolute inset-0 bg-black/60"></div>
        </div>
      ))}

      {/* Text Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <div className="w-full">
             {slides.map((slide, index) => (
                <div key={index} className={`transition-all duration-1000 ease-in-out w-full ${currentIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 absolute inset-0 flex flex-col justify-center items-center'}`}>
                     {currentIndex === index && (
                        <>
                            <h1 className="text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
                                {slide.title}
                            </h1>
                            <p className="mt-8 max-w-3xl mx-auto text-xl text-slate-200 md:text-2xl" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
                                {slide.subtitle}
                            </p>
                        </>
                    )}
                </div>
             ))}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <div className="absolute z-30 top-1/2 -translate-y-1/2 w-full flex justify-between px-4 sm:px-8">
        <button
          onClick={goToPrevious}
          className="bg-black/20 text-white p-3 rounded-full hover:bg-black/50 transition-colors focus:outline-none"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="h-8 w-8" />
        </button>
        <button
          onClick={goToNext}
          className="bg-black/20 text-white p-3 rounded-full hover:bg-black/50 transition-colors focus:outline-none"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="h-8 w-8" />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute z-30 bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white'}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};
