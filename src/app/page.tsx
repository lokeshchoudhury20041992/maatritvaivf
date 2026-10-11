import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import ServiceCard from '@/components/ServiceCard';
import FAQSection from '@/components/FAQSection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getFAQSchema, getBreadcrumbSchema, SITE_URL } from '@/lib/schema-helpers';
import { Stethoscope, Baby, Microscope, Scissors, HeartPulse, ArrowRight, Star, CheckCircle, ShieldCheck, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IVF and Fertility Care in Kolkata | Maatritva Fertility IVF and Health care',
  description:
    'Maatritva Fertility IVF and Health care, New Town, Kolkata, with Dr. Ankita Mandal. IVF, IUI, ICSI and laparoscopic surgery, with fee details shared before treatment. Outcomes vary with individual medical factors.',
  alternates: { canonical: 'https://bestivfcentreinkolkata.com' },
};

const services = [
  {
    title: 'IVF Treatment',
    description: 'In Vitro Fertilisation with individualised protocols. Suitability and outcomes depend on age, diagnosis and treatment history.',
    href: '/services/best-ivf-treatment',
    icon: <Baby className="w-6 h-6" />,
    image: '/images/img/localized/In-Vitro-Fertilization-IVF.png',
  },
  {
    title: 'IUI Treatment',
    description: 'A less invasive fertility treatment, often considered before IVF, timed with ovulation monitoring.',
    href: '/services/iui-treatment',
    icon: <Stethoscope className="w-6 h-6" />,
    image: '/images/img/localized/intrauterine-insemination-iui.png',
  },
  {
    title: 'ICSI Treatment',
    description: 'Injection of a single sperm into each egg, commonly used for male factor infertility.',
    href: '/services/icsi-treatment',
    icon: <Microscope className="w-6 h-6" />,
    image: '/images/img/localized/snehivf_529964.jpeg',
  },
  {
    title: 'Laparoscopic Surgery',
    description: 'Minimally invasive keyhole surgery to diagnose and treat tubal blockages, cysts, and endometriosis.',
    href: '/services/laparoscopic-surgery-infertility',
    icon: <Scissors className="w-6 h-6" />,
    image: '/images/img/localized/sharp_chula_latest.jpg',
  },
  {
    title: 'High-Risk Pregnancy',
    description: 'Antenatal monitoring and management for IVF pregnancies, multiples and complex maternal conditions.',
    href: '/services/high-risk-pregnancy-management',
    icon: <HeartPulse className="w-6 h-6" />,
    image: '/images/img/localized/Managing-High-Risk-Pregnancy-with-Care.webp',
  },
];

const homepageFaqs = [
  {
    question: 'I have been trying for over a year. When should I consult a fertility specialist?',
    answer:
      'Common medical guidance is to seek evaluation if you are under 35 and have been trying for <b>12 months without conceiving</b>, or over 35 and trying for 6 months. Earlier consultation is recommended if you have known issues like irregular periods or PCOS.',
  },
  {
    question: 'How is care organised at Maatritva IVF?',
    answer:
      'At Maatritva, <b>Dr. Ankita Mandal oversees treatment planning</b>, with protocols tailored to each patient\'s medical history and test results. Consultations take place in a private clinic setting.',
  },
  {
    question: 'Is IVF the only option, or are there simpler treatments?',
    answer:
      'IVF is not always the first step. Dr. Ankita follows a <b>step-wise approach</b>: starting with ovulation induction, proceeding to IUI, and recommending IVF only when necessary. Depending on the cause of infertility, some patients conceive with simpler treatments; others may need IVF.',
  },
  {
    question: 'How transparent is the pricing at your centre?',
    answer:
      'We provide a <b>detailed cost breakdown before you begin</b>. Costs depend on the treatment plan, medicines and any additional procedures. Visit our IVF Cost page or ask during your consultation for a personalised estimate.',
  },
];

export default function HomePage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumbs} />
      <SchemaMarkup schema={getFAQSchema(homepageFaqs)} />

      {/* Hero */}
      <HeroSection />

      {/* Trust Bar */}
      <TrustBar />

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-cream/50 relative overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#e11d48 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-pale/20 blur-[120px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold-light/20 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-pale/80 backdrop-blur-sm rounded-full mb-6 border border-rose-deep/10 shadow-sm animate-fade-in">
              <Stethoscope className="w-4 h-4 text-rose-deep" />
              <span className="text-xs font-bold text-rose-deep uppercase tracking-widest">Our Medical Expertise</span>
            </div>
            <h2 className="font-heading text-4xl lg:text-6xl font-black text-navy mb-6 tracking-tight">
              Comprehensive <span className="text-rose-deep">Fertility</span> Care
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-rose-deep to-gold mx-auto rounded-full mb-8" />
            <p className="text-navy/70 max-w-2xl mx-auto text-lg lg:text-xl font-medium leading-relaxed">
              From initial consultation to treatment and follow-up, with care
              planned by Dr. Ankita Mandal and the clinical team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <ServiceCard key={service.href} {...service} index={index} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/ivf-cost-kolkata"
              className="inline-flex items-center gap-3 px-10 py-5 bg-navy text-white font-bold rounded-full hover:bg-rose-deep transition-all duration-300 shadow-xl hover:shadow-rose-deep/30 hover:-translate-y-1"
            >
              View IVF Cost Breakdown
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Dr. Ankita */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-light/30 rounded-full mb-6">
                <Star className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-navy">Why Maatritva IVF</span>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy mb-6">
                About Dr. Ankita Mandal&apos;s Practice
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Dr. Ankita Mandal is a Consultant Gynaecologist, Obstetrician and Infertility Specialist.
                Patients are seen by her at consultation, and treatment plans are discussed in detail,
                including the options, risks and likely costs.
              </p>

              <div className="space-y-4">
                {[
                  'MBBS, MS (OBG), Fellowship in Reproductive Medicine',
                  '15+ years of specialised experience in infertility',
                  'Personally supervises every IVF cycle and procedure',
                  'Written cost estimate shared before treatment begins',
                  'Private outpatient clinic in New Town, Kolkata',
                  'Treatment outcomes vary with age and individual medical factors',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-rose-pale to-gold-light/30 rounded-3xl p-8 lg:p-12">
                {/* Patient testimonials removed (NMC 2026 guidelines, para 3.2 Expl. V, 6.2, 8.1(v)); replaced with factual clinic information. */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-gold" />
                    <p className="font-heading font-bold text-navy">Clinic Address</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    101, First Floor, Block-CF, Axismall Multicomplex, Newtown,
                    Kolkata 700156, West Bengal
                  </p>
                </div>

                <div className="mt-6 bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-gold" />
                    <p className="font-heading font-bold text-navy">Appointments</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Call +91 8100343839 / +91 8100353839 or send a message on WhatsApp to enquire
                    about appointment availability.
                  </p>
                </div>
              </div>

              {/* Floating trust badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-sage-light/30 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-sage" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">Registered Medical Practitioners</p>
                  <p className="text-xs text-gray-500">Qualifications listed on Our Doctors page</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Facilities */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Facility images replaced: previous images were AI-generated or carried other organisations' branding (NMC 2026 guidelines, para 3.2 Expl. II, 7.2). Replace with genuine clinic photographs. */}
                    <Image src="/images/img/localized/snehivf_529964.jpeg" alt="Illustration of ICSI (sperm injection into an egg)" fill className="object-cover" />
                  </div>
                  <div className="relative h-48 rounded-3xl overflow-hidden shadow-xl">
                    <Image src="/images/img/localized/intrauterine-insemination-iui.png" alt="Diagram of intrauterine insemination (IUI)" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="relative h-48 rounded-3xl overflow-hidden shadow-xl">
                    <Image src="/images/img/localized/Managing-High-Risk-Pregnancy-with-Care.webp" alt="Pregnancy care" fill className="object-cover" />
                  </div>
                  <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl">
                    <Image src="/images/img/localized/In-Vitro-Fertilization-IVF.png" alt="Illustration of in vitro fertilisation" fill className="object-cover" />
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-rose-pale/30 rounded-full blur-3xl" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-pale rounded-full mb-6">
                <Microscope className="w-4 h-4 text-rose-deep" />
                <span className="text-sm font-medium text-rose-deep">Technology & Care</span>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy mb-6">
                Clinic Facilities <br/>in New Town, Kolkata
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Maatritva IVF has an embryology laboratory, ultrasonography and cryopreservation
                facilities on site, so that monitoring, laboratory work and embryo storage can be
                carried out at the clinic.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="p-4 rounded-2xl bg-cream border border-rose-pale">
                  <h4 className="font-bold text-navy mb-2">Embryology Lab</h4>
                  <p className="text-sm text-gray-500">Controlled laboratory environment for embryo culture.</p>
                </div>
                <div className="p-4 rounded-2xl bg-cream border border-rose-pale">
                  <h4 className="font-bold text-navy mb-2">Private Suites</h4>
                  <p className="text-sm text-gray-500">Comfortable, private recovery areas for day-care procedures.</p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-rose-deep text-white font-bold rounded-full hover:bg-rose-700 transition-all shadow-lg hover:shadow-rose-deep/20"
              >
                Schedule a Visit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Condition Hubs Teaser */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy mb-4">
              Understanding Your Condition
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Knowledge is the first step. Read about common fertility conditions and how
              Dr. Ankita approaches each one.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'PCOS Treatment',
                desc: 'A common hormonal condition; several fertility treatment options are available.',
                href: '/conditions/pcos-and-infertility',
              },
              {
                title: 'Low AMH',
                desc: 'A low number does not mean zero chances. Learn about tailored IVF protocols.',
                href: '/conditions/low-amh-treatment',
              },
              {
                title: 'Blocked Fallopian Tubes',
                desc: 'Surgery or IVF? Understand your diagnosis and options clearly.',
                href: '/conditions/blocked-fallopian-tubes',
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group block bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-rose-pale transition-all duration-300"
              >
                <h3 className="font-heading text-xl font-bold text-navy mb-2 group-hover:text-rose-deep transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{card.desc}</p>
                <span className="text-sm font-semibold text-rose-deep flex items-center gap-1">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={homepageFaqs} />
    </>
  );
}
