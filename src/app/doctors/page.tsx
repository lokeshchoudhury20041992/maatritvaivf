import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/schema-helpers';
import SchemaMarkup from '@/components/SchemaMarkup';
import { ArrowRight, Award, HeartPulse, GraduationCap, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = generatePageMetadata({
    title: 'Our Doctors — Fertility Specialists at Maatritva IVF, Kolkata',
    description: 'Doctors at Maatritva IVF, Kolkata: Dr. Ankita Mandal, Dr. Chhabi Ghosh and Dr. Prattay Ghosh — qualifications, specialties and areas of practice.',
    path: '/doctors',
    keywords: ['Dr Ankita Mandal', 'Dr Chhabi Ghosh', 'Dr Prattay Ghosh', 'IVF specialist Kolkata', 'gynecologist Kolkata', 'fertility doctors', 'IVF doctors in Newtown'],
});

export default function DoctorsPage() {
    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Our Doctors', url: '/doctors' },
    ]);

    return (
        <>
            <SchemaMarkup schema={breadcrumbs} />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-navy to-navy-light pt-32 pb-16 lg:py-24 lg:pt-36 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-rose-deep/20 blur-3xl rounded-full pointer-events-none"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
                        Meet Our Doctors
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                        Qualifications, specialties and areas of practice of the doctors at Maatritva IVF.
                    </p>
                </div>
            </section>

            {/* Doctors Profile Section */}
            <section className="py-16 lg:py-24 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                    
                    {/* Dr. Ankita Mandal */}
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="grid lg:grid-cols-12 gap-0">
                            {/* Image Side */}
                            <div className="lg:col-span-5 bg-rose-pale/30 flex flex-col items-center justify-center p-8 lg:p-12 text-center border-b lg:border-b-0 lg:border-r border-gray-100">
                                <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-3xl border-4 border-white shadow-lg mb-6 overflow-hidden">
                                    <Image 
                                        src="/images/img/dr_ankita.png" 
                                        alt="Dr. Ankita Mandal" 
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                                <h2 className="font-heading text-3xl font-bold text-navy mb-2">Dr. Ankita Mandal</h2>
                                <p className="text-rose-deep font-semibold text-lg mb-4">Lead IVF & Infertility Specialist</p>
                                <p className="text-sm text-gray-600 font-medium">MBBS, MD, Diploma in Reproductive Medicine, FIMAS</p>
                                <p className="text-xs text-gray-400 mt-2">(G&O, Infertility & IVF specialist)</p>
                            </div>

                            {/* Content Side */}
                            <div className="lg:col-span-7 p-8 lg:p-12">
                                <div className="flex items-center gap-3 mb-6">
                                    <Award className="w-6 h-6 text-gold" />
                                    <h3 className="font-heading text-xl font-bold text-navy">About Dr. Mandal</h3>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Dr. Ankita Mandal is the founder of Maatritva IVF. She is a gynaecologist and infertility specialist whose practice covers IVF, ICSI, IUI and gynaecological laparoscopy, with treatment plans individualised to each patient&apos;s medical history.
                                </p>
                                
                                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-navy flex items-center gap-2">
                                            <HeartPulse className="w-4 h-4 text-rose-deep" />
                                            Clinical Focus
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li><Link href="/services/best-ivf-treatment" className="hover:text-rose-deep transition-colors">&rarr; IVF & ICSI</Link></li>
                                            <li><Link href="/conditions/pcos-and-infertility" className="hover:text-rose-deep transition-colors">&rarr; PCOS Management</Link></li>
                                            <li><Link href="/conditions/low-amh-treatment" className="hover:text-rose-deep transition-colors">&rarr; Low AMH / Poor Responders</Link></li>
                                            <li><Link href="/services/laparoscopic-surgery-infertility" className="hover:text-rose-deep transition-colors">&rarr; Fertility Enhancing Surgeries</Link></li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-navy flex items-center gap-2">
                                            <GraduationCap className="w-4 h-4 text-rose-deep" />
                                            Qualifications
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li>• MBBS, MD</li>
                                            <li>• Diploma in Reproductive Medicine</li>
                                            <li>• FIMAS</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <a 
                                    href="https://maatritvaivffertility.com/ankita" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex flex-row items-center gap-2 bg-gradient-to-r from-navy to-navy-light text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                                >
                                    Book Consultation <ArrowRight className="w-4 h-4"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Dr. Chhabi Ghosh */}
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="grid lg:grid-cols-12 gap-0">
                             {/* Image Side */}
                             <div className="lg:col-span-5 lg:order-2 bg-rose-pale/30 flex flex-col items-center justify-center p-8 lg:p-12 text-center border-b lg:border-b-0 lg:border-l border-gray-100">
                                <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-3xl border-4 border-white shadow-lg mb-6 overflow-hidden">
                                    <Image 
                                        src="/images/img/Chhabi.jpg" 
                                        alt="Dr. Chhabi Ghosh" 
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                                <h2 className="font-heading text-3xl font-bold text-navy mb-2">Dr. Chhabi Ghosh</h2>
                                <p className="text-rose-deep font-semibold text-lg mb-4">Senior Specialist in ART</p>
                                <p className="text-sm text-gray-600 font-bold uppercase tracking-wider">35+ Yrs Experience</p>
                            </div>

                            {/* Content Side */}
                            <div className="lg:col-span-7 lg:order-1 p-8 lg:p-12">
                                <div className="flex items-center gap-3 mb-6">
                                    <Award className="w-6 h-6 text-gold" />
                                    <h3 className="font-heading text-xl font-bold text-navy">About Dr. Ghosh</h3>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Dr. Chhabi Ghosh is a senior consultant in Assisted Reproductive Technology (ART) with over 35 years of clinical experience, including complex fertility cases.
                                </p>
                                
                                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-navy flex items-center gap-2">
                                            <HeartPulse className="w-4 h-4 text-rose-deep" />
                                            Specialization
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li><Link href="/services/best-ivf-treatment" className="hover:text-rose-deep transition-colors">&rarr; Senior ART Specialist</Link></li>
                                            <li><Link href="/services/icsi-treatment" className="hover:text-rose-deep transition-colors">&rarr; Complex Fertility Management</Link></li>
                                            <li><Link href="/services/tesa-pesa" className="hover:text-rose-deep transition-colors">&rarr; Surgical Sperm Retrieval</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <a 
                                    href="https://maatritvaivffertility.com/chhabi" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex flex-row items-center gap-2 bg-gradient-to-r from-navy to-navy-light text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                                >
                                    Book Consultation <ArrowRight className="w-4 h-4"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Dr. Prattay Ghosh */}
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="grid lg:grid-cols-12 gap-0">
                             {/* Image Side */}
                             <div className="lg:col-span-5 bg-blue-50/50 flex flex-col items-center justify-center p-8 lg:p-12 text-center border-b lg:border-b-0 lg:border-r border-gray-100">
                                <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-3xl border-4 border-white shadow-lg mb-6 overflow-hidden">
                                    <Image 
                                        src="/images/img/Prattay.png" 
                                        alt="Dr. Prattay Ghosh" 
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                                <h2 className="font-heading text-3xl font-bold text-navy mb-2">Dr. Prattay Ghosh, MD</h2>
                                <p className="text-blue-600 font-semibold text-lg mb-4">General Physician</p>
                                <p className="text-sm text-gray-600 font-bold uppercase tracking-wider">14+ Yrs Experience</p>
                            </div>

                            {/* Content Side */}
                            <div className="lg:col-span-7 p-8 lg:p-12">
                                <div className="flex items-center gap-3 mb-6">
                                    <Users className="w-6 h-6 text-gold" />
                                    <h3 className="font-heading text-xl font-bold text-navy">About Dr. Prattay Ghosh</h3>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Dr. Prattay Ghosh provides essential general medical support to our fertility patients, including assessment and management of general health conditions that can affect fertility treatment and pregnancy. He has 14 years of experience as a physician.
                                </p>
                                
                                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-navy flex items-center gap-2">
                                            <HeartPulse className="w-4 h-4 text-blue-600" />
                                            Clinical Focus
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li>&rarr; General Health Review</li>
                                            <li>&rarr; Medical Optimization for IVF</li>
                                            <li>&rarr; Patient Health Screening</li>
                                        </ul>
                                    </div>
                                </div>

                                <a 
                                    href="https://maatritvaivffertility.com/prattayghosh" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex flex-row items-center gap-2 bg-gradient-to-r from-navy to-navy-light text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                                >
                                    Book Consultation <ArrowRight className="w-4 h-4"/>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}


