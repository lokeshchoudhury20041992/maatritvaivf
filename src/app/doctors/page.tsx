import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/schema-helpers';
import SchemaMarkup from '@/components/SchemaMarkup';
import { ArrowRight, Award, BookOpen, HeartPulse, GraduationCap, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = generatePageMetadata({
    title: 'Our Doctors — Fertility Specialists at Maatritva IVF, Kolkata',
    description: 'Meet Dr. Ankita Mandal and Dr. Chhabi Ghosh, Kolkata\'s leading fertility specialists. Combining advanced medical science with compassionate patient care.',
    path: '/doctors',
    keywords: ['Dr Ankita Mandal', 'IVF specialist Kolkata', 'best gynecologist Kolkata', 'fertility doctors', 'Best IVF doctors in Newtown'],
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
                        Meet Your Fertility Experts
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                        At Maatritva IVF, our specialists combine decades of clinical excellence with deep compassion to help you bring your baby home.
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
                                <p className="text-sm text-gray-600">MBBS, MS (OBG), Fellowship in Reproductive Medicine</p>
                            </div>

                            {/* Content Side */}
                            <div className="lg:col-span-7 p-8 lg:p-12">
                                <div className="flex items-center gap-3 mb-6">
                                    <Award className="w-6 h-6 text-gold" />
                                    <h3 className="font-heading text-xl font-bold text-navy">About Dr. Mandal</h3>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Dr. Ankita Mandal is the visionary behind Maatritva IVF. With extensive expertise established from comprehensive training and years of successfully complicated clinical cases, she is known for her personalized, patient-first approach. She champions advanced, evidence-based reproductive techniques over one-size-fits-all treatments.
                                </p>
                                
                                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-navy flex items-center gap-2">
                                            <HeartPulse className="w-4 h-4 text-rose-deep" />
                                            Clinical Focus
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li><Link href="/services/ivf-treatment" className="hover:text-rose-deep transition-colors">&rarr; Advanced IVF & ICSI</Link></li>
                                            <li><Link href="/conditions/pcos-treatment" className="hover:text-rose-deep transition-colors">&rarr; PCOS Management</Link></li>
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
                                            <li>• MBBS</li>
                                            <li>• Master of Surgery (MS) in Obstetrics & Gynecology</li>
                                            <li>• Fellowship in Reproductive Medicine (FNB)</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <Link 
                                    href="/#book" 
                                    className="inline-flex flex-row items-center gap-2 bg-gradient-to-r from-navy to-navy-light text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                                >
                                    Book Consultation <ArrowRight className="w-4 h-4"/>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Prattay Mazumdar */}
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="grid lg:grid-cols-12 gap-0">
                             {/* Image Side */}
                             <div className="lg:col-span-5 lg:order-2 bg-blue-50/50 flex flex-col items-center justify-center p-8 lg:p-12 text-center border-b lg:border-b-0 lg:border-l border-gray-100">
                                <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-3xl border-4 border-white shadow-lg mb-6 overflow-hidden">
                                    <Image 
                                        src="/images/img/Prattay.png" 
                                        alt="Prattay Mazumdar" 
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                                <h2 className="font-heading text-3xl font-bold text-navy mb-2">Mr. Prattay Mazumdar</h2>
                                <p className="text-blue-600 font-semibold text-lg mb-4">Director & Senior Embryologist</p>
                                <p className="text-sm text-gray-600">M.Sc. (Clinical Embryology)</p>
                            </div>

                            {/* Content Side */}
                            <div className="lg:col-span-7 lg:order-1 p-8 lg:p-12">
                                <div className="flex items-center gap-3 mb-6">
                                    <Users className="w-6 h-6 text-gold" />
                                    <h3 className="font-heading text-xl font-bold text-navy">About Mr. Mazumdar</h3>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Prattay Mazumdar is a distinguished Embryologist with a passion for helping couples achieve their dreams of parenthood. His meticulous work in the embryology lab ensures that every embryo is given the best possible environment for development, significantly contributing to the high success rates at Maatritva IVF.
                                </p>
                                
                                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-navy flex items-center gap-2">
                                            <HeartPulse className="w-4 h-4 text-blue-600" />
                                            Expertise
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li>&rarr; Advanced Embryo Culture</li>
                                            <li>&rarr; ICSI & Laser Assisted Hatching</li>
                                            <li>&rarr; Blastocyst Culture</li>
                                            <li>&rarr; Cryopreservation Techniques</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

// Minimal placeholder
function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
