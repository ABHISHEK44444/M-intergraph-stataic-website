import React from 'react';
import {
    MIntergraphLogo,
    ComputerDesktopIcon,
    DevicePhoneMobileIcon,
    WifiIcon,
    PrinterIcon,
    QrCodeIcon,
    TagIcon,
    TicketIcon,
    SignalIcon,
    CreditCardIcon
} from './IconComponents';

interface ProductsPageProps {
    onNavigate: (path: string) => void;
}

const ProductGroup: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h3 className="text-2xl font-bold text-slate-800 mb-6 pb-4 border-b-2 border-blue-200">{title}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {children}
        </div>
    </div>
);

const HardwareItem: React.FC<{ icon: React.ReactNode; name: string }> = ({ icon, name }) => (
    <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-100 transition-colors">
        <div className="text-blue-600 w-10 h-10">{icon}</div>
        <p className="text-lg font-semibold text-slate-700">{name}</p>
    </div>
);


export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate }) => {

    const handleCardClick = (path: string) => {
        onNavigate(path);
    };

    return (
        <main className="bg-white">
             <section 
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1526925539332-aa3b66e35444?q=80&w=1965&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Our Products</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                           Technology Solutions & Hardware
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                          Explore our flagship software solutions and the high-quality hardware components that power them.
                        </p>
                    </div>
                </div>
            </section>
            
            <section className="py-20 sm:py-28 lg:py-32 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Our Software Products</h2>
                         <p className="mt-6 text-xl text-slate-600">
                           Innovative solutions designed to solve complex challenges in public and private sectors.
                        </p>
                    </div>

                    <div className="mt-20 max-w-2xl mx-auto animate-on-scroll">
                        <div 
                            className="bg-white rounded-2xl shadow-xl border border-gray-200 h-full transform hover:-translate-y-2 transition-transform duration-300 overflow-hidden flex flex-col items-center text-center p-10 cursor-pointer"
                            onClick={() => handleCardClick('malkhana-management')}
                            role="button"
                            tabIndex={0}
                        >
                            <MIntergraphLogo className="h-16 w-auto mb-6" />
                             <h3 className="text-3xl font-bold text-slate-900">Malkhana Management System</h3>
                             <p className="mt-4 text-lg text-slate-600">An RFID-based system for police forces to securely track and manage case evidence, ensuring chain of custody and judicial integrity.</p>
                             <span className="mt-6 text-blue-600 font-bold text-lg hover:text-blue-800 transition-colors">Learn More &rarr;</span>
                        </div>
                    </div>
                </div>
            </section>

             <section id="hardware" className="py-20 sm:py-28 lg:py-32 bg-white border-t border-gray-200 scroll-mt-28">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Hardware Products</h2>
                         <p className="mt-6 text-xl text-slate-600">
                           We supply a wide range of industry-leading RFID and Barcode hardware to support our solutions and your operational needs.
                        </p>
                    </div>

                    <div className="mt-20 max-w-7xl mx-auto space-y-16 animate-on-scroll">
                        <ProductGroup title="Zebra Products">
                            <HardwareItem icon={<QrCodeIcon />} name="Zebra RFID Readers"/>
                            <HardwareItem icon={<DevicePhoneMobileIcon />} name="Zebra Mobile Computers"/>
                            <HardwareItem icon={<WifiIcon />} name="Zebra RFID Antennas"/>
                            <HardwareItem icon={<PrinterIcon />} name="Zebra RFID Printers"/>
                            <HardwareItem icon={<ComputerDesktopIcon />} name="Zebra Kiosk System"/>
                        </ProductGroup>
                        
                        <ProductGroup title="Other Products">
                            <HardwareItem icon={<TagIcon />} name="RFID Tags"/>
                            <HardwareItem icon={<QrCodeIcon />} name="RFID Readers"/>
                            <HardwareItem icon={<WifiIcon />} name="RFID Antennas"/>
                            <HardwareItem icon={<TagIcon />} name="Barcode Labels"/>
                            <HardwareItem icon={<QrCodeIcon />} name="Barcode Scanners"/>
                            <HardwareItem icon={<TicketIcon />} name="Barcode Ribbons"/>
                            <HardwareItem icon={<PrinterIcon />} name="Barcode Printers"/>
                            <HardwareItem icon={<SignalIcon />} name="BLE Beacons & Gateways"/>
                            <HardwareItem icon={<CreditCardIcon />} name="POS Terminals"/>
                        </ProductGroup>
                    </div>
                </div>
            </section>
        </main>
    )
};
