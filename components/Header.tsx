

import React, { useState, useEffect } from 'react';
import { 
    MIntergraphLogo, 
    BriefcaseIcon, 
    UsersIcon, 
    BuildingOfficeIcon,
    RectangleGroupIcon,
    KeyIcon,
    ShieldCheckIcon,
    LockClosedIcon,
    EnvelopeIcon,
    ServerStackIcon,
    CloudIcon,
    Bars3Icon,
    XMarkIcon,
    GlobeAltIcon,
    ChartBarIcon,
    ComputerDesktopIcon,
    LeafIcon,
    ChatBubbleLeftRightIcon,
    CpuChipIcon,
    ScaleIcon,
    CodeBracketIcon,
    ArchiveBoxIcon,
    QrCodeIcon
} from './IconComponents';

interface HeaderProps {
  onNavigate: (path: string) => void;
  currentPage: string;
  isScrolled: boolean;
}

const ChevronDownIcon: React.FC<{ className?: string }> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);


export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage, isScrolled }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setMobileDropdownOpen(null); // Reset dropdowns when menu closes
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    onNavigate(path);
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  };

  const handleMouseEnter = (label: string) => {
    if (timeoutId) clearTimeout(timeoutId);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    const newTimeoutId = window.setTimeout(() => setOpenDropdown(null), 200);
    setTimeoutId(newTimeoutId);
  };
  
  const handleMobileDropdownToggle = (label: string) => {
    setMobileDropdownOpen(prev => (prev === label ? null : label));
  };

  const navLinks = [
      { path: 'home', label: 'Home' },
      { 
        label: 'About Us', 
        path: 'about',
        dropdown: [
          { path: 'about', label: 'The Company', icon: <BriefcaseIcon /> },
          { path: 'about#clientele', label: 'Clientele', icon: <UsersIcon /> },
          { path: 'people-and-values', label: 'Our People & Values', icon: <UsersIcon /> },
          { path: 'facilities', label: 'Facilities', icon: <BuildingOfficeIcon /> },
          { path: 'careers', label: 'Careers', icon: <BriefcaseIcon /> },
        ]
      },
      { 
        label: 'Solutions', 
        path: 'solutions',
        layout: 'grid',
        dropdown: [
          { path: 'vdi', label: 'Virtual Desktop Infrastructure (VDI)', icon: <RectangleGroupIcon /> },
          { path: 'iams', label: 'Identity Access Management (IAMS)', icon: <KeyIcon /> },
          { path: 'mail-security', label: 'Mail Security Solution', icon: <EnvelopeIcon /> },
          { path: 'utms', label: 'Unified Threat Management (UTMS)', icon: <ShieldCheckIcon /> },
          { path: 'ccs', label: 'Cloud Computing Solution (CCS)', icon: <CloudIcon /> },
          { path: 'dlps', label: 'Data Leakage Prevention (DLPS)', icon: <LockClosedIcon /> },
          { path: 'dss', label: 'Database Security Solution (DSS)', icon: <ServerStackIcon /> },
        ]
      },
      { 
        label: 'Products', 
        path: 'products',
        layout: 'grid',
        dropdown: [
            { path: 'malkhana-management', label: 'Malkhana Management System', icon: <ArchiveBoxIcon /> },
            { path: 'products#hardware', label: 'RFID & Barcode Hardware', icon: <QrCodeIcon /> },
        ]
      },
      { 
        label: 'Services', 
        path: 'services',
        layout: 'grid',
        dropdown: [
            { path: 'software-development', label: 'Software Development', icon: <CodeBracketIcon /> },
            { path: 'outsourcing', label: 'Outsourcing', icon: <UsersIcon /> },
            { path: 'retail-it-management', label: 'Retail IT Management', icon: <ChartBarIcon /> },
            { path: 'services#network-management', label: 'Network Management', icon: <GlobeAltIcon /> },
            { path: 'server-management', label: 'Server Management', icon: <ServerStackIcon /> },
            { path: 'desktop-management', label: 'Desktop Management', icon: <ComputerDesktopIcon /> },
            { path: 'gogreen', label: 'GoGreen', icon: <LeafIcon /> },
        ]
      },
      { 
        label: 'IT Consulting', 
        path: 'consulting',
        layout: 'grid',
        dropdown: [
          { path: 'consulting-overview', label: 'Consulting Overview', icon: <BriefcaseIcon /> },
          { path: 'core-infra-optimization', label: 'Core Infra Optimization', icon: <CpuChipIcon /> },
          { path: 'cloud-advisory', label: 'Cloud Advisory', icon: <CloudIcon /> },
          { path: 'capacity-planning', label: 'Capacity Planning & Advisory', icon: <ScaleIcon /> },
        ]
      },
      { path: 'home#ai-finder', label: 'AI Finder' },
      { path: 'home#testimonials', label: 'Testimonials' },
      { path: 'home#contact', label: 'Contact' },
  ];

  const headerClasses = `fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-md' : 'bg-transparent'}`;
  const linkColor = isScrolled ? 'text-slate-700' : 'text-white';
  const hoverLinkColor = isScrolled ? 'hover:text-blue-600' : 'hover:text-gray-200';
  const activeLinkColor = isScrolled ? 'text-blue-600' : 'text-white';
  const logoColor = isScrolled ? 'text-slate-900' : 'text-white';

  const getLinkClass = (path: string, hasDropdown = false, dropdownPaths?: string[]) => {
    let baseClasses = `text-lg font-semibold transition-colors duration-300 ${linkColor} ${hoverLinkColor} py-2`;
    if(hasDropdown) baseClasses += ' flex items-center';

    const isDropdownActive = dropdownPaths && dropdownPaths.includes(currentPage);
    if ((currentPage === 'home' && path === 'home') || isDropdownActive || currentPage === path) {
         return `${baseClasses} ${activeLinkColor}`;
    }
    return baseClasses;
  };

  const renderNavLinks = (isMobile = false) => (
    navLinks.map(link => (
      link.dropdown ? (
        <div key={link.label} className={isMobile ? 'w-full' : 'relative'}>
            <button
                onClick={(e) => {
                    if (isMobile) {
                        e.preventDefault();
                        handleMobileDropdownToggle(link.label);
                    } else {
                        handleNavClick(e, link.path);
                    }
                }}
                className={isMobile
                    ? 'text-xl text-slate-800 font-bold flex justify-between items-center w-full py-4'
                    : getLinkClass(link.path, true, link.dropdown.map(i => i.path.split('#')[0]))
                }
                aria-haspopup="true"
                aria-expanded={isMobile ? mobileDropdownOpen === link.label : openDropdown === link.label}
            >
                <span>{link.label}</span>
                <ChevronDownIcon className={`w-5 h-5 ml-2 transition-transform duration-300 ${isMobile ? (mobileDropdownOpen === link.label ? 'rotate-180' : '') : ''}`} />
            </button>
            {isMobile && (
              <div className={`pl-4 overflow-hidden transition-all duration-500 ease-in-out ${mobileDropdownOpen === link.label ? 'max-h-96 mt-2 space-y-2' : 'max-h-0'}`}>
                {link.dropdown.map(item => (
                  <a key={item.path} href={`#${item.path}`} onClick={(e) => handleNavClick(e, item.path)} className="block py-3 text-lg text-slate-600 hover:text-blue-600 transition-colors">
                    {item.label}
                  </a>
                ))}
              </div>
            )}
        </div>
      ) : (
        <a key={link.path} href={`#${link.path}`} onClick={(e) => handleNavClick(e, link.path)} className={isMobile ? 'text-xl text-slate-800 font-bold block py-4' : getLinkClass(link.path)}>
          {link.label}
        </a>
      )
    ))
  );

  return (
    <>
      <header className={headerClasses}>
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-4">
            <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center space-x-4">
              <MIntergraphLogo className="h-10 w-auto" />
              <span className={`text-2xl font-extrabold tracking-tight whitespace-nowrap transition-colors duration-300 ${logoColor}`}>M Intergraph Systems</span>
            </a>
            
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map(link => (
                  link.dropdown ? (
                    <div 
                        key={link.label} 
                        className="relative"
                        onMouseEnter={() => handleMouseEnter(link.label)}
                        onMouseLeave={handleMouseLeave}
                    >
                      <button
                          onClick={(e) => handleNavClick(e, link.path)}
                          className={getLinkClass(link.path, true, link.dropdown.map(i => i.path.split('#')[0]))}
                          aria-haspopup="true"
                          aria-expanded={openDropdown === link.label}
                      >
                          {link.label}
                          <ChevronDownIcon className={`w-4 h-4 ml-1.5 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === link.label && (
                          <div 
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-auto bg-white rounded-xl shadow-2xl z-30 border border-gray-100 animate-on-scroll is-visible" 
                            style={{'--animation-delay': '0s', animationDuration: '0.2s'} as React.CSSProperties}
                            onMouseEnter={() => handleMouseEnter(link.label)} 
                            onMouseLeave={handleMouseLeave}
                          >
                             <div className="p-2">
                                  {link.layout === 'grid' ? (
                                      <div className="grid grid-cols-2 gap-2 w-[40rem] p-4">
                                          {link.dropdown.map(item => (
                                              <a key={item.path} href={`#${item.path}`} onClick={(e) => handleNavClick(e, item.path)} className="p-4 rounded-lg hover:bg-gray-100 transition-colors group">
                                                  <div className="flex items-center space-x-4">
                                                      {React.cloneElement(item.icon, { className: 'w-8 h-8 text-blue-500 transition-colors flex-shrink-0' })}
                                                      <div><p className="font-semibold text-slate-800 text-base whitespace-normal leading-tight">{item.label}</p></div>
                                                  </div>
                                              </a>
                                          ))}
                                      </div>
                                  ) : (
                                      <div className="flex flex-col space-y-1 p-2 min-w-max">
                                          {link.dropdown.map(item => (
                                              <a key={item.path} href={`#${item.path}`} onClick={(e) => handleNavClick(e, item.path)} className="px-4 py-3 rounded-md hover:bg-gray-100 transition-colors group w-64">
                                                  <div className="flex items-center space-x-4">
                                                      {React.cloneElement(item.icon, { className: 'w-7 h-7 text-blue-500 transition-colors' })}
                                                      <span className="font-semibold text-slate-800 text-base whitespace-nowrap">{item.label}</span>
                                                  </div>
                                              </a>
                                          ))}
                                      </div>
                                  )}
                              </div>
                          </div>
                      )}
                    </div>
                  ) : ( <a key={link.path} href={`#${link.path}`} onClick={(e) => handleNavClick(e, link.path)} className={getLinkClass(link.path)}>{link.label}</a>)
              ))}
            </div>

            <div className="flex items-center space-x-4">
                <a href="#" onClick={(e) => handleNavClick(e, 'contact')} className="hidden sm:inline-block bg-blue-600 text-white text-lg font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-105 transform">
                    Contact Us
                </a>
                <button onClick={() => setIsMobileMenuOpen(true)} className={`lg:hidden transition-colors duration-300 ${linkColor}`} aria-label="Open menu">
                    <Bars3Icon className="h-8 w-8" />
                </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl p-6">
              <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-slate-800">Menu</span>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-500 hover:text-slate-800" aria-label="Close menu">
                      <XMarkIcon className="h-8 w-8" />
                  </button>
              </div>
              <nav className="mt-12 flex flex-col space-y-2">
                  {renderNavLinks(true)}
                  <div className="pt-8 border-t border-gray-200 mt-6">
                    <a href="#" onClick={(e) => handleNavClick(e, 'contact')} className="w-full text-center block bg-blue-600 text-white font-bold py-4 px-5 rounded-lg transition-all duration-300 shadow-md hover:bg-blue-700 hover:shadow-lg">
                      Contact Us
                    </a>
                  </div>
              </nav>
          </div>
          <div className="absolute inset-0 bg-black/20 -z-10" onClick={() => setIsMobileMenuOpen(false)}></div>
      </div>
    </>
  );
};