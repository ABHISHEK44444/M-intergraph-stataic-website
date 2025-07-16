import React from 'react';
import { UsersIcon, ChatBubbleLeftRightIcon, BriefcaseIcon, MapPinIcon, EnvelopeIcon, PhoneIcon } from './IconComponents';

// A generic card for displaying contact information
const InfoCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; }> = ({ icon, title, children }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col text-left h-full hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
    <div className="flex-shrink-0 w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">{icon}</div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4 flex-grow">{title}</h3>
    <div className="text-slate-600 space-y-4">{children}</div>
  </div>
);

// A reusable component for a single contact detail line (e.g., email or phone)
const ContactDetail: React.FC<{ icon: React.ReactNode; label: string; value: string; href: string; }> = ({ icon, label, value, href }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 w-5 text-slate-400 mt-1">{icon}</div>
        <div className="ml-3">
            <p className="text-sm font-semibold text-slate-500">{label}</p>
            <a href={href} className="text-blue-600 hover:text-blue-800 transition-colors break-all font-medium">{value}</a>
        </div>
    </div>
);

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 bg-gray-50 scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto animate-on-scroll">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Get in Touch</h2>
          <p className="mt-6 text-xl text-slate-600">
            We're here to help. Reach out to us through any of the channels below, and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Sales Card */}
            <div className="animate-on-scroll" style={{'--animation-delay': '0s'} as React.CSSProperties}>
              <InfoCard icon={<UsersIcon className="w-9 h-9" />} title="Sales">
                <ContactDetail icon={<EnvelopeIcon />} label="Email ID" href="mailto:sales@mintergraph.com" value="sales@mintergraph.com" />
                <ContactDetail icon={<PhoneIcon />} label="Mobile" href="tel:+919899980247" value="+91 9899980247" />
              </InfoCard>
            </div>

            {/* Support Card */}
            <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
              <InfoCard icon={<ChatBubbleLeftRightIcon className="w-9 h-9" />} title="Support">
                <ContactDetail icon={<EnvelopeIcon />} label="Email ID" href="mailto:servicedesk@mintergraph.com" value="servicedesk@mintergraph.com" />
                <ContactDetail icon={<PhoneIcon />} label="Mobile" href="tel:+919301530202" value="+91 93015 30202" />
              </InfoCard>
            </div>

            {/* Careers Card */}
            <div className="animate-on-scroll" style={{'--animation-delay': '0.2s'} as React.CSSProperties}>
              <InfoCard icon={<BriefcaseIcon className="w-9 h-9" />} title="Info & Careers">
                <ContactDetail icon={<EnvelopeIcon />} label="General Info" href="mailto:info@mintergraph.com" value="info@mintergraph.com" />
                <ContactDetail icon={<EnvelopeIcon />} label="Careers" href="mailto:careers@mintergraph.com" value="careers@mintergraph.com" />
              </InfoCard>
            </div>

            {/* Office Location Card */}
            <div className="animate-on-scroll" style={{'--animation-delay': '0.3s'} as React.CSSProperties}>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col h-full hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                        <MapPinIcon className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Corporate Head Office</h3>
                    <p className="text-slate-600 mb-5 flex-grow font-medium">
                        A-99, DDA Shed, Okhla Industrial Area, Phase-II, New Delhi–110020, India
                    </p>
                    <div className="w-full h-56 rounded-lg overflow-hidden border border-gray-200 mt-auto">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.643329112264!2d77.2831878150807!3d28.55042898244975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38f60a44de5%3A0x65431abd133c9441!2sA-99%2C%20DDA%20Shed%2C%20Block%20A%2C%20Okhla%20Phase%20II%2C%20Okhla%20Industrial%20Estate%2C%20New%20Delhi%2C%20Delhi%20110020!5e0!3m2!1sen!2sin!4v1620988844444"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="M Intergraph Office Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};