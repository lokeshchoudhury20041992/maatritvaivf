import { Metadata } from 'next';
import FAQSection from '@/components/FAQSection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getFAQSchema, generatePageMetadata, getBreadcrumbSchema } from '@/lib/schema-helpers';
import { Award, CheckCircle, ArrowRight, Baby, Heart, Microscope, ShieldCheck, Clock, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
    title: 'Test Tube Baby (IVF) Centre in Kolkata — Maatritva IVF | Dr. Ankita Mandal',
    description: 'Test tube baby (IVF) treatment in Kolkata. Maatritva IVF with Dr. Ankita Mandal offers IVF and ICSI treatment, with a written cost estimate before treatment. Outcomes vary with individual medical factors.',
    path: '/test-tube-baby-centre-kolkata',
    keywords: ['test tube baby centre Kolkata', 'test tube baby Kolkata', 'test tube baby cost Kolkata', 'IVF test tube baby', 'test tube baby centre'],
});

const faqs = [
    {
        question: 'What is a test tube baby?',
        answer: 'A "test tube baby" is the <b>colloquial term for a baby conceived through IVF (In Vitro Fertilisation)</b>. In IVF, eggs are retrieved from the ovaries, fertilised with sperm in a laboratory dish (not a test tube), and the resulting embryo is transferred to the uterus to achieve pregnancy.',
    },
    {
        question: 'What test tube baby (IVF) facilities does Maatritva IVF have?',
        answer: '<b>Maatritva Fertility IVF & Healthcare</b>, New Town, Kolkata, has an in-house IVF laboratory with ICSI and time-lapse embryo monitoring. Treatment is planned by Dr. Ankita Mandal. Outcomes vary with age, diagnosis and other individual factors.',
    },
    {
        question: 'How is a test tube baby made?',
        answer: 'The process involves: <b>1) Stimulating the ovaries to produce multiple eggs, 2) Retrieving eggs under sedation, 3) Fertilising eggs with sperm in the lab (using ICSI), 4) Culturing embryos for 3-5 days, 5) Transferring a selected embryo to the uterus</b>. The entire process takes about 4-6 weeks.',
    },
    {
        question: 'Is a test tube baby the same as a normal baby?',
        answer: 'Yes. <b>A test tube baby (IVF baby) is completely normal</b>. The difference is only in how fertilisation occurs — in a lab instead of inside the body. Once the embryo implants, the pregnancy and baby development are identical to natural conception.',
    },
    {
        question: 'What is the success rate of test tube baby treatment?',
        answer: 'Success rates <b>depend mainly on the woman\'s age, the cause of infertility, embryo quality and treatment history</b>, and decline with increasing age. No outcome can be guaranteed. Your doctor can discuss what may be realistic for your situation during consultation.',
    },
    {
        question: 'How much does test tube baby treatment cost in Kolkata?',
        answer: 'The cost of test tube baby (IVF) treatment <b>depends on the protocol, medications and any additional procedures needed</b>. Maatritva IVF provides a written estimate before treatment begins. See our IVF Cost page for details.',
    },
    {
        question: 'Is the test tube baby procedure painful?',
        answer: 'Experiences vary. <b>Hormone injections are subcutaneous and generally well tolerated; egg retrieval is usually done under sedation, and some cramping or discomfort afterwards is common; embryo transfer takes 5-10 minutes and usually needs no anaesthesia</b>. Your doctor will explain what to expect and the possible risks, such as ovarian hyperstimulation.',
    },
    {
        question: 'At what age can you do test tube baby treatment?',
        answer: 'IVF can be done at any reproductive age. <b>Success rates are generally higher for women under 35 and decline with age. After 42-43, donor eggs may be discussed</b> as an option, depending on individual circumstances.',
    },
    {
        question: 'What is the difference between IVF and ICSI?',
        answer: 'In standard IVF, <b>eggs and sperm are placed together to fertilise naturally</b>. In ICSI, <b>a single sperm is directly injected into each egg</b> — recommended for male factor infertility or previous fertilisation failure. The choice between IVF and ICSI depends on the individual case.',
    },
    {
        question: 'Can male infertility be treated with test tube baby?',
        answer: 'Yes. <b>ICSI combined with surgical sperm retrieval (TESA/PESA) may allow some men with azoospermia</b> (no sperm in ejaculate) to father a child, if sperm can be retrieved. Male factor infertility is one of the most common reasons couples seek test tube baby treatment.',
    },
];

export default function TestTubeBabyCentrePage() {
    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Test Tube Baby Centre Kolkata', url: '/test-tube-baby-centre-kolkata' },
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
                            <Baby className="w-4 h-4 text-gold" />
                            <span className="text-sm text-white/90 font-medium">Test Tube Baby (IVF) Centre</span>
                        </div>
                        <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4">
                            Test Tube Baby (IVF) Centre in Kolkata — Maatritva IVF
                        </h1>
                        <p className="text-white/80 text-lg mb-8 leading-relaxed">
                            IVF and ICSI treatment with an in-house laboratory and time-lapse embryo monitoring.
                            Treatment planned by Dr. Ankita Mandal. Outcomes vary with individual medical factors.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="#book" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-deep to-rose-light text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all">
                                Book Consultation <ArrowRight className="w-4 h-4" />
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
                        What Is Test Tube Baby Treatment?
                    </h2>
                    <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm mb-8">
                        <p className="text-gray-800 text-lg leading-relaxed">
                            <strong>&ldquo;Test tube baby&rdquo;</strong> is the popular term for In Vitro Fertilisation (IVF) — a
                            fertility treatment where eggs are retrieved from the ovaries, fertilised with sperm in a laboratory,
                            and the resulting embryo is placed in the uterus to achieve pregnancy. Despite the name, no test tubes
                            are actually used — fertilisation occurs in specialised culture dishes under controlled conditions.
                        </p>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-navy mb-4">How Does the Test Tube Baby Process Work?</h3>
                    <div className="space-y-4">
                        {[
                            { step: '1', title: 'Consultation & Testing', desc: 'Both partners are evaluated. Blood tests, ultrasound, and semen analysis identify the cause of infertility and inform the treatment plan.' },
                            { step: '2', title: 'Ovarian Stimulation', desc: 'Daily hormone injections for 10-12 days stimulate the ovaries to produce multiple eggs. Growth is monitored with regular ultrasound scans.' },
                            { step: '3', title: 'Egg Retrieval', desc: 'Mature eggs are collected through a short procedure, usually under sedation. It takes about 15-20 minutes; mild cramping afterwards is common.' },
                            { step: '4', title: 'Fertilisation (ICSI)', desc: 'Each egg is fertilised by injecting a single healthy sperm directly into it (ICSI). Embryos develop for 3-5 days in our time-lapse incubator.' },
                            { step: '5', title: 'Embryo Transfer', desc: 'A selected embryo is placed into the uterus in a short procedure that usually causes little discomfort. Suitable extra embryos may be frozen for future use.' },
                            { step: '6', title: 'Pregnancy Test', desc: 'A blood test 14 days after transfer confirms pregnancy. If positive, regular monitoring begins for a healthy pregnancy.' },
                        ].map((item) => (
                            <div key={item.step} className="flex gap-5 items-start">
                                <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-rose-deep to-rose-light flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">{item.step}</span>
                                </div>
                                <div>
                                    <h4 className="font-heading text-base font-bold text-navy mb-1">{item.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Is Test Tube Baby Normal? */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-6">
                        Is a Test Tube Baby Normal?
                    </h2>
                    <div className="bg-cream rounded-2xl p-6 lg:p-8 border border-gray-100 mb-8">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            <strong>Yes.</strong> An IVF baby is a baby like any other. The only difference is
                            how conception occurs — in a laboratory instead of inside the body. Once the embryo implants in the uterus,
                            the pregnancy, fetal development, delivery, and the child&apos;s growth are identical to natural conception.
                            Since the birth of Louise Brown (the world&apos;s first IVF baby) in 1978, over <strong>12 million IVF
                                babies</strong> have been born worldwide.
                        </p>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-navy mb-4">Who Needs Test Tube Baby Treatment?</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            'Couples who have failed to conceive after trying for 1+ years',
                            'Women with blocked or damaged fallopian tubes',
                            'Women with advanced endometriosis',
                            'Couples with severe male factor infertility',
                            'Women with diminished ovarian reserve / low AMH',
                            'Unexplained infertility (when all tests are normal)',
                            'Couples who have failed IUI treatment',
                            'Women needing donor egg or embryo programmes',
                        ].map((item) => (
                            <div key={item} className="flex items-start gap-3 bg-white px-4 py-3 rounded-xl border border-gray-100">
                                <CheckCircle className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Maatritva */}
            <section className="py-16 lg:py-20 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-8">
                        About Test Tube Baby Treatment at Maatritva IVF
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { icon: <Award className="w-6 h-6 text-gold" />, title: 'Dr. Ankita Mandal', desc: 'MBBS, MS (OBG), Fellowship in Infertility, Advanced Diploma in Reproductive Medicine & ART (KIEL, Germany); 15+ years of clinical experience.' },
                            { icon: <Microscope className="w-6 h-6 text-navy" />, title: 'Modern Laboratory', desc: 'In-house laboratory with HEPA-filtered clean room, time-lapse monitoring, ICSI workstations and vitrification (embryo freezing).' },
                            { icon: <ShieldCheck className="w-6 h-6 text-sage" />, title: 'Written Cost Estimates', desc: 'A written cost estimate is provided before treatment begins.' },
                            { icon: <Heart className="w-6 h-6 text-rose-deep" />, title: 'Counselling Support', desc: 'Fertility counsellors are available to support patients during treatment.' },
                        ].map((item) => (
                            <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                                <div className="mb-3">{item.icon}</div>
                                <h3 className="font-heading text-lg font-bold text-navy mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Patient testimonials removed (NMC 2026 guidelines, para 3.2 Expl. V, 6.2, 8.1(v)); replaced with outcome and risk information. */}
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

            {/* Related Services */}
            <section className="py-12 bg-cream">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="font-heading text-xl font-bold text-navy mb-4 text-center">Related Treatments</h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {[
                            { label: 'IVF Treatment', href: '/services/best-ivf-treatment' },
                            { label: 'ICSI Treatment', href: '/services/icsi-treatment' },
                            { label: 'IUI Treatment', href: '/services/iui-treatment' },
                            { label: 'Blastocyst Transfer', href: '/services/best-ivf-treatment' },
                            { label: 'Male Infertility', href: '/conditions/male-infertility' },
                            { label: 'IVF Cost', href: '/ivf-cost-kolkata' },
                        ].map((item) => (
                            <Link key={item.href} href={item.href} className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-navy hover:border-rose-deep hover:text-rose-deep transition-colors">
                                {item.label} <ArrowRight className="w-3 h-3" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} title="Frequently Asked Questions — Test Tube Baby Centre Kolkata" />

            {/* CTA */}
            <section className="py-16 lg:py-20 bg-gradient-to-r from-rose-deep to-rose-light" id="book">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">Contact the Clinic</h2>
                    <p className="text-white/90 mb-8 text-lg">Contact the clinic to enquire about appointment availability and treatment costs.</p>
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
