
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Welcome } from './components/Welcome';
import { JourneyMission } from './components/JourneyMission';
import { TestimonialCard } from './components/TestimonialCard';
import { Footer } from './components/Footer';
import { FloatingContactBar } from './components/FloatingContactBar';
import { TESTIMONIALS } from './constants';
import type { Testimonial } from './types';
import { AiSolutionFinder } from './components/AiSolutionFinder';
import { AboutPage } from './components/AboutPage';
import { FacilitiesPage } from './components/FacilitiesPage';
import { PeopleAndValuesPage } from './components/PeopleAndValuesPage';
import ServicesPage from './components/ServicesPage';
import { SolutionsPage } from './components/SolutionsPage';
import { ContactModal } from './components/ContactModal';
import { ConsultingPage } from './components/ConsultingPage';
import { ContactSection } from './components/ContactSection';
import { ConsultingOverviewPage } from './components/ConsultingOverviewPage';
import { CoreInfraOptimizationPage } from './components/CoreInfraOptimizationPage';
import { CloudAdvisoryPage } from './components/CloudAdvisoryPage';
import { CapacityPlanningPage } from './components/CapacityPlanningPage';
import { VdiPage } from './components/VdiPage';
import { IamsPage } from './components/IamsPage';
import { MailSecurityPage } from './components/MailSecurityPage';
import { UtmsPage } from './components/UtmsPage';
import { CcsPage } from './components/CcsPage';
import { DlpsPage } from './components/DlpsPage';
import { DssPage } from './components/DssPage';
import { OutsourcingPage } from './components/OutsourcingPage';
import { RetailItPage } from './components/RetailItPage';
import { DesktopManagementPage } from './components/DesktopManagementPage';
import { ServerManagementPage } from './components/ServerManagementPage';
import { GoGreenPage } from './components/GoGreenPage';
import { SoftwareDevelopmentPage } from './components/SoftwareDevelopmentPage';
import { ProductsPage } from './components/ProductsPage';
import { MalkhanaManagementPage } from './components/MalkhanaManagementPage';
import { CareersPage } from './components/CareersPage';

function App(): React.ReactNode {
  const [currentPage, setCurrentPage] = useState('home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // We delay the query to ensure elements from the new page are in the DOM
    const timeoutId = setTimeout(() => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
        clearTimeout(timeoutId);
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.unobserve(el));
    };
  }, [currentPage]);


  const navigate = (path: string) => {
    if (path === 'contact') {
      setIsContactModalOpen(true);
      return;
    }

    const [page, anchor] = path.split('#');
    
    if (currentPage === page && anchor) {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        return;
    }

    setCurrentPage(page);
    window.scrollTo(0, 0);

    if (anchor) {
        setTimeout(() => {
            const element = document.getElementById(anchor);
            if(element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // Small delay to allow page render
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'facilities':
        return <FacilitiesPage />;
      case 'people-and-values':
        return <PeopleAndValuesPage />;
      case 'careers':
        return <CareersPage onNavigate={navigate} />;
      case 'services':
        return <ServicesPage onNavigate={navigate} />;
      case 'solutions':
        return <SolutionsPage onNavigate={navigate} />;
      case 'products':
        return <ProductsPage onNavigate={navigate} />;
      case 'malkhana-management':
        return <MalkhanaManagementPage onNavigate={navigate} />;
      case 'vdi':
        return <VdiPage onNavigate={navigate} />;
      case 'iams':
        return <IamsPage onNavigate={navigate} />;
      case 'mail-security':
        return <MailSecurityPage onNavigate={navigate} />;
      case 'utms':
        return <UtmsPage onNavigate={navigate} />;
      case 'ccs':
        return <CcsPage onNavigate={navigate} />;
      case 'dlps':
        return <DlpsPage onNavigate={navigate} />;
      case 'dss':
        return <DssPage onNavigate={navigate} />;
      case 'outsourcing':
        return <OutsourcingPage onNavigate={navigate} />;
      case 'retail-it-management':
        return <RetailItPage onNavigate={navigate} />;
      case 'desktop-management':
        return <DesktopManagementPage onNavigate={navigate} />;
      case 'server-management':
        return <ServerManagementPage onNavigate={navigate} />;
      case 'gogreen':
        return <GoGreenPage onNavigate={navigate} />;
      case 'software-development':
        return <SoftwareDevelopmentPage onNavigate={navigate} />;
      case 'consulting':
        return <ConsultingPage onNavigate={navigate} />;
      case 'consulting-overview':
        return <ConsultingOverviewPage onNavigate={navigate} />;
      case 'core-infra-optimization':
        return <CoreInfraOptimizationPage onNavigate={navigate} />;
      case 'cloud-advisory':
        return <CloudAdvisoryPage onNavigate={navigate} />;
      case 'capacity-planning':
        return <CapacityPlanningPage onNavigate={navigate} />;
      case 'home':
      default:
        return (
          <main>
            <Hero />
            <Welcome />
            <JourneyMission />
            <section id="ai-finder" className="py-20 sm:py-28 lg:py-32 bg-slate-900 scroll-mt-28">
              <div className="container mx-auto px-4 animate-on-scroll">
                <AiSolutionFinder />
              </div>
            </section>
            <section id="testimonials" className="py-20 sm:py-28 lg:py-32 bg-gray-50 scroll-mt-28">
              <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto animate-on-scroll">
                  <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">What Our Customers Say</h2>
                  <p className="mt-6 text-xl text-slate-600">
                    Building trust through reliable service and customer satisfaction.
                  </p>
                </div>
                <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
                  {TESTIMONIALS.map((testimonial: Testimonial, index: number) => (
                    <div key={testimonial.author} className="animate-on-scroll" style={{'--animation-delay': `${index * 0.1}s`} as React.CSSProperties}>
                        <TestimonialCard testimonial={testimonial} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <ContactSection />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <Header onNavigate={navigate} currentPage={currentPage} isScrolled={scrolled} />
      {renderPage()}
      <Footer onNavigate={navigate} />
      <FloatingContactBar onNavigate={navigate} />
    </div>
  );
}

export default App;
