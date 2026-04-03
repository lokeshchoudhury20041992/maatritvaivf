import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SchemaMarkup from '@/components/SchemaMarkup';
import CTA from '@/components/CTA';
import FAQSection from '@/components/FAQSection';
import conditions from '@/data/conditions.json';
import Link from 'next/link';

export async function generateStaticParams() {
  return conditions.map((condition) => ({
    slug: condition.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const condition = conditions.find((c) => c.slug === resolvedParams.slug);
  
  if (!condition) return {};

  return {
    title: `${condition.title} | Maatritva IVF`,
    description: condition.metaDescription,
    alternates: {
      canonical: `https://bestivfcentreinkolkata.com/conditions/${condition.slug}`,
    },
    openGraph: {
      title: condition.title,
      description: condition.metaDescription,
      url: `https://bestivfcentreinkolkata.com/conditions/${condition.slug}`,
      type: 'article',
    }
  };
}

export default async function ConditionPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const condition = conditions.find((c) => c.slug === resolvedParams.slug);

  if (!condition) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": condition.title,
    "description": condition.metaDescription,
    "possibleTreatment": {
      "@type": "MedicalTherapy",
      "name": "Fertility Treatment"
    }
  };

  return (
    <>
      <SchemaMarkup schema={schema} />
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{condition.content.h1}</h1>
          <p className="text-xl text-gray-600 mb-8">{condition.content.intro}</p>
        </header>

        <div className="prose prose-lg prose-rose max-w-none mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding This Condition</h2>
          <p className="text-gray-700 mb-6">{condition.content.whatIs}</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Symptoms & Diagnosis</h2>
          <p className="text-gray-700 mb-8">{condition.content.whoNeedsThis}</p>

          <CTA title="Concerned About Your Fertility?" subtitle="Our experts are here to diagnose and guide you." />

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Treatment Options</h2>
          <ul className="space-y-4 mb-8">
            {condition.content.process.map((step, index) => (
              <li key={index} className="flex item-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold">{index + 1}</span>
                <span className="text-gray-700 py-1 font-medium">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <CTA title="Discuss Your Case With A Specialist" subtitle="Advanced diagnosis and treatment plans available." />

        <div className="mt-8 border-t border-gray-200">
           <FAQSection faqs={condition.content.faqs} title="Frequently Asked Questions" />
        </div>

        {condition.relatedLinks && condition.relatedLinks.length > 0 && (
          <div className="mt-16 bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Topics</h3>
            <ul className="flex flex-wrap gap-4">
              {condition.relatedLinks.map((link, index) => (
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
