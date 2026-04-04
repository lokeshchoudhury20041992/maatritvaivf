import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/schema-helpers';
import SchemaMarkup from '@/components/SchemaMarkup';
import blogData from '@/data/blogs.json';
import { ArrowRight, User, BookOpen } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
    title: 'Fertility & IVF Blog — Expert Articles by Dr. Ankita Mandal',
    description: 'Read expert articles on IVF, fertility, PCOS, male infertility, and more by Dr. Ankita Mandal at Maatritva IVF, Kolkata. Evidence-based, patient-friendly information.',
    path: '/blog',
    keywords: ['IVF blog', 'fertility blog', 'PCOS information', 'IVF success tips', 'fertility articles Kolkata'],
});

export default function BlogListingPage() {
    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
    ]);

    return (
        <>
            <SchemaMarkup schema={breadcrumbs} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-navy to-navy-light py-16 lg:py-24 pt-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
                        Fertility & IVF Blog
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                        Evidence-based deep dives on fertility, IVF, reproductive health, and more —
                        written by Dr. Ankita Mandal, Dr. Chhabi Ghosh and the expert team.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-16 lg:py-24 bg-cream min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogData.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="p-6 lg:p-8 flex flex-col h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 bg-rose-pale/30 text-rose-deep text-xs font-semibold rounded-full flex items-center gap-1">
                                            <BookOpen className="w-3 h-3" /> Guide
                                        </span>
                                    </div>
                                    <h2 className="font-heading text-xl lg:text-2xl font-bold text-navy mb-3 group-hover:text-rose-deep transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-sm text-gray-600 mb-6 line-clamp-3 flex-grow">
                                        {post.metaDescription || post.content?.intro}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                                        <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                                            <User className="w-3 h-3 text-rose-deep" />
                                            {post.author}
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-rose-deep/30 group-hover:text-rose-deep transition-colors" />
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
