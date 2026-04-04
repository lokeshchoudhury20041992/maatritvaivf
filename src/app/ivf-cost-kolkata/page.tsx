import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/schema-helpers';
import SchemaMarkup from '@/components/SchemaMarkup';
import { IndianRupee, CheckCircle2, Info, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
    title: 'IVF Cost in Kolkata 2024 — Transparent Pricing | Maatritva IVF',
    description: 'Get transparent breakdown of IVF cost in Kolkata. We explain package inclusions, ICSI costs, hidden fees to avoid, and realistic financial expectations.',
    path: '/ivf-cost-kolkata',
    keywords: ['ivf cost kolkata', 'test tube baby cost', 'icsi cost kolkata', 'iui cost', 'affordable ivf center kolkata'],
});

export default function IVFCostPage() {
    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'IVF Cost in Kolkata', url: '/ivf-cost-kolkata' },
    ]);

    return (
        <>
            <SchemaMarkup schema={breadcrumbs} />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-navy to-navy-light pt-32 pb-16 lg:py-24 lg:pt-36 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
                        Transparent IVF Cost in Kolkata
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                        At Maatritva IVF, we believe in 100% financial transparency. No hidden fees, no surprise bills—just honest pricing for world-class fertility care.
                    </p>
                </div>
            </section>

            {/* General Overview */}
            <section className="py-16 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
                        <h2 className="font-heading text-3xl font-bold text-navy mb-6">How Much Does IVF Really Cost?</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            A standard <Link href="/services/best-ivf-treatment" className="text-rose-deep font-semibold hover:underline">IVF treatment cycle</Link> in Kolkata typically ranges from <strong className="text-navy">₹1,20,000 to ₹2,50,000</strong>. This variation exists because every patient&apos;s biological protocol is different. The cost heavily depends on the amount of stimulation medications required (which is based on your age and AMH levels) and any advanced laboratory techniques needed.
                        </p>
                        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 flex items-start gap-4">
                            <Info className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-700 leading-relaxed">
                                <strong>Our Promise:</strong> During your initial consultation, Dr. Ankita Mandal will design a custom protocol and provide a dedicated cost sheet. You will know exactly what you are paying for before treatment begins.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cost Breakdown Table */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl font-bold text-center text-navy mb-12">Estimated Costs by Procedure</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* IUI */}
                        <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-heading text-xl font-bold text-navy">IUI Treatment</h3>
                                <div className="flex items-center text-rose-deep font-bold text-xl">
                                    <IndianRupee className="w-5 h-5"/> 15,000 - 25,000
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm mb-6">Per cycle, including basic monitoring and sperm wash.</p>
                            <Link href="/services/iui-treatment" className="text-rose-deep font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                Read about IUI <ArrowRight className="w-4 h-4"/>
                            </Link>
                        </div>

                        {/* Standard IVF */}
                        <div className="border-2 border-navy rounded-2xl p-8 shadow-md relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
                            <div className="absolute top-0 right-0 bg-navy text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Most Common</div>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-heading text-xl font-bold text-navy">Standard IVF Cycle</h3>
                                <div className="flex items-center text-navy font-bold text-xl">
                                    <IndianRupee className="w-5 h-5"/> 1.2L - 1.8L
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm mb-6">Excludes advanced medications for severe poor responders.</p>
                            <Link href="/services/best-ivf-treatment" className="text-navy font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                Read about IVF <ArrowRight className="w-4 h-4"/>
                            </Link>
                        </div>

                        {/* ICSI */}
                        <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-heading text-xl font-bold text-navy">ICSI Treatment</h3>
                                <div className="flex items-center text-rose-deep font-bold text-xl">
                                    <IndianRupee className="w-5 h-5"/> 1.5L - 2.0L
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm mb-6">Recommended for <Link href="/conditions/male-infertility" className="underline">male factor infertility</Link> or previous failed fertilization.</p>
                            <Link href="/services/icsi-treatment" className="text-rose-deep font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                Read about ICSI <ArrowRight className="w-4 h-4"/>
                            </Link>
                        </div>

                        {/* Donor Egg IVF */}
                        <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-heading text-xl font-bold text-navy">Donor Egg IVF</h3>
                                <div className="flex items-center text-rose-deep font-bold text-xl">
                                    <IndianRupee className="w-5 h-5"/> 2.0L - 2.5L
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm mb-6">Includes donor compensation, screening, and medications.</p>
                            <Link href="/services/donor-egg-ivf" className="text-rose-deep font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                Read about Donor IVF <ArrowRight className="w-4 h-4"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Included */}
            <section className="py-16 bg-navy text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl font-bold mb-8 text-center text-gold">What Does an IVF Package Usually Include?</h2>
                    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                            <p className="text-white/80">Ovarian stimulation protocols and monitoring (Ultrasounds)</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                            <p className="text-white/80">Surgical Egg Retrieval under anesthesia (OPU)</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                            <p className="text-white/80">Sperm prep and washing routines</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                            <p className="text-white/80">Standard IVF fertilization in the Embryology Lab</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                            <p className="text-white/80">Embryo culture up to Day 3 or Day 5 (Blastocyst)</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                            <p className="text-white/80"> Fresh Embryo Transfer Procedure</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
