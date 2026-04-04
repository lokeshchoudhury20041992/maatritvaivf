import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/schema-helpers';
import SchemaMarkup from '@/components/SchemaMarkup';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = generatePageMetadata({
    title: 'Contact Maatritva IVF | Best Fertility Clinic in Kolkata',
    description: 'Book your fertility consultation at Maatritva IVF, Newtown Kolkata. Contact Dr. Ankita Mandal for personalized IVF, IUI, and fertility treatments.',
    path: '/contact',
    keywords: ['contact maatritva ivf', 'book appointment ivf kolkata', 'fertility clinic newtown', 'dr ankita mandal contact'],
});

export default function ContactPage() {
    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Contact Us', url: '/contact' },
    ]);

    return (
        <>
            <SchemaMarkup schema={breadcrumbs} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-navy to-navy-light pt-32 pb-16 lg:py-24 lg:pt-36 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-rose-deep/20 blur-3xl rounded-full pointer-events-none"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
                        Book Your Consultation
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                        Take the first step towards your parenthood journey. Reach out to schedule an appointment with Kolkata&apos;s leading fertility specialists.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 lg:py-24 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">
                        
                        {/* Info Column */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="font-heading text-3xl font-bold text-navy mb-4">We&apos;re Here to Help</h2>
                                <p className="text-gray-600 leading-relaxed max-w-sm">
                                    Whether you have a quick question or are ready to begin your treatment, our patient care team is available to guide you.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4 group">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-gray-100 text-rose-deep group-hover:rotate-12 transition-transform">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy mb-1 uppercase tracking-wider text-xs">Call Us (24/7 Helpline)</h4>
                                        <a href="tel:+918100343839" className="text-gray-600 hover:text-rose-deep transition-colors text-xl font-bold">+91 8100343839 / +91 8100353839</a>
                                    </div>
                                </div>

                                <div className="flex gap-4 group">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-gray-100 text-rose-deep group-hover:rotate-12 transition-transform">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy mb-1 uppercase tracking-wider text-xs">Email Us</h4>
                                        <a href="mailto:care@maatritvaivffertility.com" className="text-gray-600 hover:text-rose-deep transition-colors text-lg font-medium">care@maatritvaivffertility.com</a>
                                    </div>
                                </div>

                                <div className="flex gap-4 group">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-gray-100 text-rose-deep group-hover:rotate-12 transition-transform">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy mb-1 uppercase tracking-wider text-xs">Clinic Hours</h4>
                                        <p className="text-gray-600 font-medium">Monday - Saturday: 7:00 AM - 11:00 PM</p>
                                        <p className="text-gray-400 text-xs mt-1 italic">Sunday: Consultations via appointment</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 group">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-gray-100 text-rose-deep group-hover:rotate-12 transition-transform">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy mb-1 uppercase tracking-wider text-xs">Visit Us</h4>
                                        <p className="text-gray-600 leading-relaxed font-medium">
                                            101, First Floor, Block-CF,<br/>
                                            Axismall Multicomplex, Newtown,<br/>
                                            Kolkata 700156, West Bengal
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="relative">
                            {/* Accent Decoration */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/10 blur-2xl rounded-full" />
                            <ContactForm />
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    );
}
