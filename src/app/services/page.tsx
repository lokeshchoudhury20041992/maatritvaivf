import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/schema-helpers';
import SchemaMarkup from '@/components/SchemaMarkup';
import servicesData from '@/data/services.json';
import Link from 'next/link';
import { ArrowRight, Stethoscope, Microscope, Activity, ShieldCheck, Asterisk } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    title: 'Fertility Services & Treatments | Maatritva IVF Kolkata',
    description: 'Fertility treatments available at Maatritva IVF, Kolkata, including IVF, ICSI, IUI, egg freezing and laparoscopic surgery.',
    path: '/services',
    keywords: ['fertility services kolkata', 'ivf treatments', 'icsi treatment', 'egg freezing', 'ivf centre in kolkata'],
});

export default function ServicesIndexPage() {
    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'All Services', url: '/services' },
    ]);

    const getIconPrefix = (index: number) => {
        const icons = [Stethoscope, Microscope, Activity, ShieldCheck, Asterisk];
        const Icon = icons[index % icons.length];
        return <Icon className="w-5 h-5" />;
    };

    return (
        <>
            <SchemaMarkup schema={breadcrumbs} />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-navy to-navy-light pt-32 pb-16 lg:py-24 lg:pt-36 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-rose-deep/20 blur-3xl rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full pointer-events-none"></div>
                
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
                        Fertility Services
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                        Treatments range from IUI to IVF, genetic testing and laparoscopic surgery. Read about each service below.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 lg:py-24 bg-cream min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service, idx) => (
                            <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
                            >
                                <div className="p-8 flex flex-col h-full">
                                    <div className="w-14 h-14 bg-rose-pale/50 rounded-2xl flex items-center justify-center text-rose-deep mb-6 group-hover:scale-110 transition-transform">
                                        {getIconPrefix(idx)}
                                    </div>
                                    <h2 className="font-heading text-xl lg:text-2xl font-bold text-navy mb-3 group-hover:text-rose-deep transition-colors">
                                        {service.title.replace('— Best IVF Centre in Kolkata', '')}
                                    </h2>
                                    <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">
                                        {service.content.intro.substring(0, 120)}...
                                    </p>
                                    
                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex gap-2">
                                            {typeof service.cost === 'string' && (
                                                <span className="text-xs font-semibold px-3 py-1 bg-gray-50 rounded-full text-gray-600">Pricing Available</span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2 text-rose-deep font-semibold text-sm group-hover:gap-3 transition-all">
                                            Learn More <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
