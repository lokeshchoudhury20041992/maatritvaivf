import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import services from '@/data/services.json';
import CTA from '@/components/CTA';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';
import FAQSection from '@/components/FAQSection';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  
  if (!service) return {};

  return {
    title: `${service.title} | Maatritva IVF`,
    description: service.metaDescription,
    alternates: {
      canonical: `https://bestivfcentreinkolkata.com/services/${service.slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url: `https://bestivfcentreinkolkata.com/services/${service.slug}`,
      type: 'article',
    }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": service.title,
    "description": service.metaDescription,
    "about": {
      "@type": "MedicalSpecialty",
      "name": "Fertility Specialist"
    }
  };

  return (
    <>
      <SchemaMarkup schema={schema} />
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{service.content.h1}</h1>
          <p className="text-xl text-gray-600 mb-8">{service.content.intro}</p>
          
          <div className="flex flex-wrap justify-center gap-4 bg-rose-50 p-6 rounded-2xl border border-rose-100">
            <div className="bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100 flex-1 min-w-[200px]">
              <p className="text-sm text-gray-500 font-medium mb-1">Estimated Cost</p>
              <p className="text-xl font-bold text-rose-600">{service.cost}</p>
            </div>
            <div className="bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100 flex-1 min-w-[200px]">
              <p className="text-sm text-gray-500 font-medium mb-1">Success Rate*</p>
              <p className="text-xl font-bold text-green-600">{service.successRate}</p>
              <p className="text-[10px] text-gray-400 mt-1 italic leading-tight">*Varies by age & medical history</p>
            </div>
          </div>
        </header>

        <div className="prose prose-lg prose-rose max-w-none mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is {service.title}?</h2>
          <p className="text-gray-700 mb-6">{service.content.whatIs}</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Needs This?</h2>
          <p className="text-gray-700 mb-8">{service.content.whoNeedsThis}</p>

          <CTA title="Ready to Start Your Journey?" subtitle="Consult with Kolkata's top fertility experts today." />

          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Process</h2>
          <ul className="space-y-4 mb-8">
            {service.content.process.map((step, index) => (
              <li key={index} className="flex item-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold">{index + 1}</span>
                <span className="text-gray-700 py-1 font-medium">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <CTA title="Need More Information on Cost & Success?" subtitle="Speak directly with our clinical coordinators." />

        <div className="mt-8 border-t border-gray-200">
           <FAQSection faqs={service.content.faqs} title="Frequently Asked Questions" />
        </div>

        {service.relatedLinks && service.relatedLinks.length > 0 && (
          <div className="mt-16 bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Topics</h3>
            <ul className="flex flex-wrap gap-4">
              {service.relatedLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 group">
                    <span className="border-b border-transparent group-hover:border-blue-800 transition-colors">{link.text}</span>
                    <span className="text-lg">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </>
  );
}
