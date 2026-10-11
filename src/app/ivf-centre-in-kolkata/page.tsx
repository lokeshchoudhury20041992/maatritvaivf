import { Metadata } from 'next';
import FAQSection from '@/components/FAQSection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getFAQSchema, generatePageMetadata, getBreadcrumbSchema } from '@/lib/schema-helpers';
import { Award, CheckCircle, ArrowRight, Microscope, Heart, ShieldCheck, Building2, Clock, Phone, MessageCircle, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
    title: 'IVF Centre in Kolkata — Maatritva IVF by Dr. Ankita Mandal',
    description: 'Maatritva IVF is an IVF centre in New Town, Kolkata, with an in-house laboratory and time-lapse embryo monitoring. Treatment with Dr. Ankita Mandal. Outcomes vary with individual medical factors.',
    path: '/ivf-centre-in-kolkata',
    keywords: ['IVF centre in Kolkata', 'IVF clinic Kolkata', 'IVF hospital Kolkata', 'Maatritva IVF'],
});

const faqs = [
    {
        question: 'What does the IVF centre at Maatritva offer?',
        answer: '<b>Maatritva Fertility IVF & Healthcare</b> in New Town, Kolkata has an in-house IVF laboratory with time-lapse embryo monitoring. Treatment is planned by Dr. Ankita Mandal. Outcomes vary with age, diagnosis and other individual factors.',
    },
    {
        question: 'What should I look for when choosing an IVF centre?',
        answer: 'Look for a centre with <b>a qualified, registered IVF specialist, a well-equipped laboratory, clear written cost estimates, and clear information about risks and realistic outcomes</b>. Laboratory quality is one of several factors that can affect outcomes.',
    },
    {
        question: 'Does Maatritva IVF have its own laboratory?',
        answer: 'Yes. Maatritva IVF has a <b>dedicated, in-house IVF laboratory</b> with HEPA-filtered air, time-lapse embryo monitoring (EmbryoScope), dedicated ICSI workstations, and cryopreservation (vitrification) equipment.',
    },
    {
        question: 'What is time-lapse embryo monitoring?',
        answer: '<b>Time-lapse monitoring</b> is a technology that takes images of developing embryos every few minutes, allowing embryologists to assess development without removing them from the incubator. It can provide additional information for embryo selection; evidence on whether it improves pregnancy rates is still being evaluated.',
    },
    {
        question: 'Where is Maatritva IVF located?',
        answer: 'Maatritva IVF is located in <b>New Town, Rajarhat, Kolkata — 700156</b>. It is just 15 minutes from Kolkata Airport and easily accessible from Salt Lake, EM Bypass, and all major areas of the city.',
    },
    {
        question: 'Does Maatritva IVF treat patients from Bangladesh?',
        answer: 'Yes. Maatritva IVF provides <b>dedicated support for Bangladesh patients</b> including medical visa assistance, airport pickup, accommodation guidance, and Bengali-speaking staff. Kolkata is the nearest Indian metro for many patients travelling from Bangladesh.',
    },
    {
        question: 'What treatments are available at Maatritva IVF?',
        answer: 'Maatritva IVF offers <b>IVF, ICSI, IUI, egg freezing, embryo freezing, donor egg IVF, male infertility treatment (TESA/PESA), PGD/PGS genetic testing, laparoscopic surgery, and hysteroscopy</b>. All treatments are performed under the supervision of Dr. Ankita Mandal.',
    },
    {
        question: 'What affects IVF success?',
        answer: 'IVF outcomes <b>depend mainly on age, the cause of infertility, embryo quality and treatment history</b>, and decline with increasing age. No outcome can be guaranteed. Your doctor can discuss what may be realistic for your situation during consultation.',
    },
    {
        question: 'How are IVF costs explained at Maatritva IVF?',
        answer: 'Treatment costs are documented in a <b>written estimate before treatment starts</b>, listing medicines, procedures and any additional costs. Ask during consultation for details of the charges that apply to your treatment plan.',
    },
    {
        question: 'Can I visit the lab before starting treatment?',
        answer: 'Yes. We encourage prospective patients to <b>visit the clinic and laboratory</b> before committing to treatment. Meeting the team can help you ask questions before making a decision.',
    },
];

export default function IVFCentrePage() {
    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'IVF Centre in Kolkata', url: '/ivf-centre-in-kolkata' },
    ]);

    return (
        <>
            <SchemaMarkup schema={breadcrumbs} />
            <SchemaMarkup schema={getFAQSchema(faqs)} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-navy to-navy-light py-16 lg:py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                            <Building2 className="w-4 h-4 text-gold" />
                            <span className="text-sm text-white/90 font-medium">IVF Centre in Kolkata</span>
                        </div>
                        <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4">
                            IVF Centre in Kolkata — Maatritva IVF by Dr. Ankita Mandal
                        </h1>
                        <p className="text-white/80 text-lg mb-8 leading-relaxed">
                            In-house IVF laboratory. Time-lapse embryo monitoring. Treatment planned by Dr. Ankita Mandal.
                            Written cost estimates. Outcomes vary with individual medical factors.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="#book" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-deep to-rose-light text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all">
                                Book a Visit <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a href="tel:+918100343839" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all">
                                <Phone className="w-4 h-4" /> Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Direct Answer Block */}
            <section className="py-16 lg:py-20 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-6">
                        What Makes a Good IVF Centre?
                    </h2>
                    <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm mb-8">
                        <p className="text-gray-800 text-lg leading-relaxed">
                            A good IVF centre combines an <strong>qualified reproductive medicine specialist, a well-run in-house
                                embryology laboratory, appropriate equipment, clear pricing, and honest information about risks and outcomes</strong>.
                        </p>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-navy mb-4">Key Factors When Choosing an IVF Centre</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { icon: <Microscope className="w-6 h-6 text-navy" />, title: 'Laboratory Quality', desc: 'HEPA filtration, temperature control, time-lapse monitoring, and experienced embryologists. The lab is where fertilisation, culture and selection happen, so its standards matter.' },
                            { icon: <Award className="w-6 h-6 text-gold" />, title: 'Doctor Experience', desc: 'Look for a registered specialist with recognised reproductive medicine training and experience with complex cases such as recurrent failure and low AMH.' },
                            { icon: <ShieldCheck className="w-6 h-6 text-sage" />, title: 'Cost Transparency', desc: 'Ask for a written estimate upfront, with medication, procedures and any additional costs clearly listed.' },
                            { icon: <Heart className="w-6 h-6 text-rose-deep" />, title: 'Patient Support', desc: 'Fertility treatment is emotionally demanding. Look for centres that offer counselling and clear arrangements for out-of-hours concerns.' },
                        ].map((item) => (
                            <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-100">
                                <div className="mb-3">{item.icon}</div>
                                <h4 className="font-heading font-bold text-navy mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Lab */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-6">
                        Inside the Maatritva IVF Laboratory
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        The clinic has an in-house IVF laboratory. Its facilities include:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            'HEPA-filtered clean room with controlled air quality',
                            'Time-lapse embryo monitoring (EmbryoScope technology)',
                            'Dedicated ICSI micromanipulation workstations',
                            'Vitrification for egg and embryo freezing',
                            'Continuous temperature and pH monitoring',
                            'Clinical embryologists on the laboratory team',
                            'Separate sperm processing laboratory',
                            'Backup power and equipment redundancy systems',
                        ].map((item) => (
                            <div key={item} className="flex items-start gap-3 bg-cream px-5 py-3 rounded-xl border border-gray-100">
                                <CheckCircle className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                                <span className="text-sm text-navy font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services + Location */}
            <section className="py-16 lg:py-20 bg-cream">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-8 text-center">
                        Treatments Available at Our Centre
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                        {[
                            { label: 'IVF Treatment', href: '/services/best-ivf-treatment' },
                            { label: 'ICSI Treatment', href: '/services/icsi-treatment' },
                            { label: 'IUI Treatment', href: '/services/iui-treatment' },
                            { label: 'Egg Freezing', href: '/services/egg-freezing' },
                            { label: 'Donor Egg IVF', href: '/services/donor-egg-ivf' },
                            { label: 'Male Infertility', href: '/conditions/male-infertility' },
                            { label: 'TESA / PESA', href: '/services/tesa-pesa' },
                            { label: 'PGD / PGS', href: '/services/best-ivf-treatment' },
                            { label: 'Laparoscopy', href: '/services/laparoscopic-surgery-infertility' },
                        ].map((item) => (
                            <Link key={item.href} href={item.href} className="flex items-center gap-3 bg-white px-5 py-4 rounded-xl border border-gray-100 hover:border-rose-pale hover:shadow-sm transition-all group">
                                <CheckCircle className="w-4 h-4 text-sage shrink-0" />
                                <span className="text-sm font-medium text-navy group-hover:text-rose-deep transition-colors">{item.label}</span>
                                <ArrowRight className="w-3 h-3 text-gray-300 ml-auto group-hover:text-rose-deep transition-colors" />
                            </Link>
                        ))}
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                        <MapPin className="w-8 h-8 text-rose-deep mx-auto mb-3" />
                        <h3 className="font-heading text-lg font-bold text-navy mb-2">Find Us</h3>
                        <p className="text-gray-600 text-sm mb-1">Maatritva Fertility IVF & Healthcare</p>
                        <p className="text-gray-600 text-sm mb-4">New Town, Rajarhat, Kolkata — 700156</p>
                        <p className="text-xs text-gray-500">15 minutes from Kolkata Airport · Easy access from Salt Lake, EM Bypass, Howrah</p>
                    </div>
                </div>
            </section>

            {/* Patient reviews removed (NMC 2026 guidelines, para 3.2 Expl. V, 6.2, 8.1(v)); replaced with outcome and risk information. */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-8 text-center">Outcomes and Risks</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: 'Outcomes vary', text: 'The chance of pregnancy depends on age, the cause of infertility, embryo quality and treatment history. More than one cycle may be needed, and pregnancy cannot be guaranteed.' },
                            { title: 'Possible risks', text: 'Risks can include ovarian hyperstimulation syndrome, multiple pregnancy and procedure-related complications. Your doctor will discuss these with you before treatment.' },
                        ].map((item) => (
                            <div key={item.title} className="bg-cream rounded-2xl p-6 border border-gray-100">
                                <p className="font-heading font-bold text-navy text-sm mb-3">{item.title}</p>
                                <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} title="Frequently Asked Questions — IVF Centre in Kolkata" />

            {/* CTA */}
            <section className="py-16 lg:py-20 bg-gradient-to-r from-rose-deep to-rose-light" id="book">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">Visit Maatritva IVF</h2>
                    <p className="text-white/90 mb-8 text-lg">Contact the clinic to enquire about appointment availability or a visit.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="#book" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-rose-deep font-bold rounded-full shadow-lg hover:shadow-xl transition-all"><Clock className="w-4 h-4" /> Book Appointment</Link>
                        <a href="tel:+918100343839" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all"><Phone className="w-4 h-4" /> Call Now</a>
                        <a href="https://wa.me/918100343839" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
                    </div>
                </div>
            </section>
        </>
    );
}
