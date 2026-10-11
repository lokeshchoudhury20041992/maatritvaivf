import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/schema-helpers';
import SchemaMarkup from '@/components/SchemaMarkup';
import conditionsData from '@/data/conditions.json';
import Link from 'next/link';
import { ArrowRight, AlertCircle, HeartPulse, Activity } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    title: 'Fertility Conditions & Disorders | Maatritva IVF Kolkata',
    description: 'Learn about common fertility conditions like PCOS, Endometriosis, Low AMH, Male Infertility, and their treatments at Maatritva IVF Kolkata.',
    path: '/conditions',
    keywords: ['fertility conditions', 'pcos treatment', 'endometriosis', 'low amh', 'male infertility', 'blocked fallopian tubes'],
});

export default function ConditionsIndexPage() {
    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Conditions', url: '/conditions' },
    ]);

    const getIconPrefix = (index: number) => {
        const icons = [HeartPulse, AlertCircle, Activity];
        const Icon = icons[index % icons.length];
        return <Icon className="w-5 h-5" />;
    };

    return (
        <>
            <SchemaMarkup schema={breadcrumbs} />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-navy to-navy-light pt-32 pb-16 lg:py-24 lg:pt-36 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-gold/20 blur-3xl rounded-full pointer-events-none"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
                        Understanding Fertility Conditions
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                        Knowledge is the first step towards treatment. Explore comprehensive information on reproductive disorders and the treatment options available.
                    </p>
                </div>
            </section>

            {/* Conditions Grid */}
            <section className="py-16 lg:py-24 bg-cream min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {conditionsData.map((condition, idx) => (
                            <Link
                                key={condition.slug}
                                href={`/conditions/${condition.slug}`}
                                className="group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="p-8 flex flex-col h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                                             {getIconPrefix(idx)}
                                        </div>
                                    </div>
                                    <h2 className="font-heading text-xl font-bold text-navy mb-3 group-hover:text-blue-600 transition-colors">
                                        {condition.title.split(' — ')[0].replace('Treatment', '')}
                                    </h2>
                                    <p className="text-sm text-gray-600 mb-6 flex-grow line-clamp-3">
                                        {condition.content.intro}
                                    </p>
                                    
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                                         <span className="text-xs font-semibold px-3 py-1 bg-gray-50 rounded-full text-gray-500">Read Guide</span>
                                        <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                                            Treatment Options <ArrowRight className="w-4 h-4" />
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
