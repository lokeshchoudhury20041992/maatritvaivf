import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import blogs from '@/data/blogs.json';
import CTA from '@/components/CTA';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';
import { coreDoctors } from '@/lib/doctors-data';

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);
  
  if (!blog) return {};

  return {
    title: `${blog.title} | Maatritva IVF`,
    description: blog.metaDescription,
    alternates: {
      canonical: `https://bestivfcentreinkolkata.com/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.metaDescription,
      url: `https://bestivfcentreinkolkata.com/blog/${blog.slug}`,
      type: 'article',
    }
  };
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://bestivfcentreinkolkata.com/blog/${blog.slug}`
    },
    "headline": blog.title,
    "description": blog.metaDescription,
    "author": {
      "@type": "Person",
      "name": blog.author || "Dr. Ankita Mandal"
    }
  };

  return (
    <>
      <SchemaMarkup schema={schema} />
      <article className="max-w-3xl mx-auto px-4 py-8 md:py-16">
        <header className="mb-10">
          <p className="text-sm text-rose-600 font-bold mb-2 uppercase tracking-wide">Medical Blog</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{blog.content.h1}</h1>
          <p className="text-xl text-gray-600 mb-6 italic border-l-4 border-rose-300 pl-4 py-2 bg-rose-50 rounded-r-lg">{blog.content.intro}</p>
          <div className="flex items-center gap-3 mt-8">
            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden border-2 border-rose-100 flex items-center justify-center font-bold text-xl text-gray-500">
              {blog.author ? blog.author.charAt(0) : 'D'}
            </div>
            <div>
              <p className="font-bold text-gray-900">{blog.author || "Dr. Ankita Mandal"}</p>
              {/* Author qualifications shown per NMC 2026 guidelines, para 3.2 Expl. III/IV. Registration numbers still to be added. */}
              <p className="text-sm text-gray-500">
                {coreDoctors.find((d) => d.name === (blog.author || 'Dr. Ankita Mandal'))?.degrees ?? 'Fertility Specialist'}
              </p>
            </div>
          </div>
        </header>

        <div className="prose prose-lg prose-rose max-w-none mb-12">
          <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">{blog.content.body}</div>
          
          <CTA title="Want to Discuss This With A Doctor?" subtitle="Contact the clinic to enquire about a confidential consultation." />
          
          {blog.content.conclusion && (
            <div className="mt-8 p-6 bg-gray-50 border-l-4 border-gray-400 rounded-r-lg">
              <p className="font-medium text-gray-900 italic m-0">{blog.content.conclusion}</p>
            </div>
          )}
        </div>

        {blog.relatedLinks && blog.relatedLinks.length > 0 && (
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Explore Further</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {blog.relatedLinks.map((link, index) => (
                <Link key={index} href={link.url} className="p-6 rounded-xl border border-gray-200 hover:border-rose-300 hover:shadow-md transition-all group">
                  <h4 className="text-lg font-bold text-rose-700 mb-2 group-hover:text-rose-800 flex items-center justify-between">
                    {link.text} <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
