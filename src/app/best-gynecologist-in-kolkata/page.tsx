import { Metadata } from 'next';
import FAQSection from '@/components/FAQSection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getFAQSchema, generatePageMetadata, getBreadcrumbSchema } from '@/lib/schema-helpers';
import { Award, CheckCircle, ArrowRight, Heart, ShieldCheck, Stethoscope, Clock, Phone, MessageCircle, Star } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
    title: 'Gynaecologist in Kolkata — Dr. Ankita Mandal | Maatritva IVF',
    description: 'Gynaecology consultation in Kolkata with Dr. Ankita Mandal — Consultant Gynaecologist, Obstetrician, Infertility Specialist and Gynaecological Laparoscopic Surgeon. MBBS, MS (OBG). 15+ years of clinical experience.',
    path: '/best-gynecologist-in-kolkata',
    keywords: ['gynaecologist in Kolkata', 'gynecologist Kolkata', 'gynaecology consultation Kolkata', 'lady gynecologist Kolkata', 'Dr Ankita Mandal gynaecologist'],
});

const faqs = [
    {
        question: 'Who is the gynaecologist at Maatritva IVF, Kolkata?',
        answer: '<b>Dr. Ankita Mandal</b> is a Consultant Gynaecologist, Obstetrician, Infertility Specialist and Gynaecological Laparoscopic Surgeon at Maatritva Fertility IVF & Healthcare, Kolkata, with 15+ years of clinical experience.',
    },
    {
        question: 'What does a gynaecologist do?',
        answer: 'A gynaecologist is a <b>medical specialist who diagnoses and treats conditions related to the female reproductive system</b>. This includes menstrual disorders, PCOS, endometriosis, fibroids, infertility, pregnancy care, and gynaecological cancers.',
    },
    {
        question: 'When should I visit a gynaecologist?',
        answer: 'Visit a gynaecologist for <b>irregular periods, heavy bleeding, pelvic pain, PCOS symptoms, difficulty conceiving, routine Pap smears, pregnancy care</b>, or any concerns about reproductive health. Annual check-ups are recommended for all women above 18.',
    },
    {
        question: 'Does Dr. Ankita Mandal do laparoscopic surgery?',
        answer: 'Yes. Dr. Ankita is a <b>trained gynaecological laparoscopic surgeon</b>. She performs minimally invasive surgeries for ovarian cysts, fibroids, endometriosis, ectopic pregnancy and tubal issues; recovery is often shorter than with open surgery, although every surgery carries some risk.',
    },
    {
        question: 'Can Dr. Ankita help with high-risk pregnancy?',
        answer: 'Yes. Dr. Ankita provides <b>comprehensive high-risk pregnancy management</b> including gestational diabetes, pre-eclampsia, placenta previa, and Rh incompatibility. Monitoring is planned according to each pregnancy\'s risk factors.',
    },
    {
        question: 'What is the difference between a gynaecologist and an infertility specialist?',
        answer: 'A gynaecologist handles <b>general women\'s health — periods, PCOS, fibroids, pregnancy</b>. An infertility specialist has additional training in reproductive medicine and ART (IVF, IUI, ICSI). Dr. Ankita practises in both gynaecology and fertility treatment.',
    },
    {
        question: 'Does Dr. Ankita Mandal offer online consultations?',
        answer: 'Yes. Dr. Ankita offers <b>online video consultations</b> for initial evaluations, follow-ups, and second opinions. This is especially useful for outstation and international patients.',
    },
    {
        question: 'What are Dr. Ankita Mandal\'s qualifications?',
        answer: 'Dr. Ankita holds <b>MBBS (SCB Medical College, Cuttack), MS (OBG) from RIMS Ranchi, Fellowship in Infertility, and Advanced Diploma in Reproductive Medicine & ART from KIEL, Germany</b>. She is a member of ISOG, FOGSI, ACOG, and a Fellow of FIAOG.',
    },
    {
        question: 'Is Dr. Ankita Mandal a lady gynaecologist?',
        answer: 'Yes. Dr. Ankita Mandal is a <b>female gynaecologist</b> practising in Kolkata.',
    },
    {
        question: 'Where is Dr. Ankita Mandal\'s clinic?',
        answer: 'Dr. Ankita practises at <b>Maatritva Fertility IVF & Healthcare, New Town, Rajarhat, Kolkata — 700156</b>. 15 minutes from Kolkata Airport, easily accessible from Salt Lake, Howrah, and across the city.',
    },
];

export default function BestGynaecologistPage() {
    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Gynaecologist in Kolkata', url: '/best-gynecologist-in-kolkata' },
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
                            <Award className="w-4 h-4 text-gold" />
                            <span className="text-sm text-white/90 font-medium">Gynaecology Consultation in Kolkata</span>
                        </div>
                        <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4">
                            Gynaecologist in Kolkata — Dr. Ankita Mandal
                        </h1>
                        <p className="text-white/80 text-lg mb-6 leading-relaxed">
                            Consultant Gynaecologist, Obstetrician, Infertility Specialist and Gynaecological
                            Laparoscopic Surgeon. MBBS, MS (OBG), Fellowship in Infertility.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                            {[
                                { value: 'MS', label: 'OBG' },
                                { value: '15+', label: 'Years' },
                                { value: 'Online', label: 'Consultations' },
                                { value: 'KIEL', label: 'Germany' },
                            ].map((stat) => (
                                <div key={stat.label} className="bg-white/10 rounded-xl p-3 text-center border border-white/10">
                                    <p className="text-white font-heading font-bold text-lg">{stat.value}</p>
                                    <p className="text-white/60 text-xs">{stat.label}</p>
                                </div>
                            ))}
                        </div>
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

            {/* Direct Answer */}
            <section className="py-16 lg:py-20 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-6">
                        About Dr. Ankita Mandal, Gynaecologist in Kolkata
                    </h2>
                    <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm mb-8">
                        <p className="text-gray-800 text-lg leading-relaxed">
                            <strong>Dr. Ankita Mandal</strong> is a Consultant
                            Gynaecologist, Obstetrician, Infertility Specialist, and Gynaecological Laparoscopic Surgeon with
                            over 15 years of clinical experience. She is the Founder Director of Maatritva Fertility IVF &
                            Healthcare.
                        </p>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-navy mb-4">When Should You See a Gynaecologist?</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        {[
                            'Irregular or missed periods',
                            'Heavy or prolonged menstrual bleeding',
                            'Pelvic pain or discomfort',
                            'PCOS symptoms (weight gain, acne, hair growth)',
                            'Difficulty getting pregnant',
                            'Routine Pap smear and cervical screening',
                            'Pregnancy confirmation and prenatal care',
                            'Menopausal symptoms',
                        ].map((item) => (
                            <div key={item} className="flex items-start gap-3 bg-white px-4 py-3 rounded-xl border border-gray-100">
                                <CheckCircle className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-6">
                        What Does Dr. Ankita Mandal Specialise In?
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        Dr. Ankita practises as both a gynaecologist and an infertility specialist, covering
                        routine gynaecological care as well as fertility treatment.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { icon: <Heart className="w-6 h-6 text-rose-deep" />, title: 'Gynaecology & Obstetrics', desc: 'Period disorders, PCOS management, fibroid treatment, HPV screening, pregnancy care, high-risk obstetrics, and postpartum support.' },
                            { icon: <Stethoscope className="w-6 h-6 text-navy" />, title: 'Infertility & IVF', desc: 'Complete infertility workup for both partners, IUI, IVF, ICSI, egg freezing, donor programmes, and recurrent failure management.' },
                            { icon: <ShieldCheck className="w-6 h-6 text-sage" />, title: 'Laparoscopic Surgery', desc: 'Minimally invasive surgery for ovarian cysts, fibroids, endometriosis, adhesions, tubal issues, and ectopic pregnancy.' },
                            { icon: <Star className="w-6 h-6 text-gold" />, title: 'Diagnostics', desc: 'Colposcopy, hysteroscopy, gynaecological ultrasound, 3D/4D scan support, and all fertility-related imaging.' },
                        ].map((item) => (
                            <div key={item.title} className="bg-cream rounded-2xl p-6 border border-gray-100">
                                <div className="mb-3">{item.icon}</div>
                                <h3 className="font-heading text-lg font-bold text-navy mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Conditions Treated */}
            <section className="py-16 lg:py-20 bg-cream">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-8 text-center">
                        Conditions Treated by Dr. Ankita Mandal
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[
                            { label: 'PCOS / PCOD', href: '/conditions/pcos-and-infertility' },
                            { label: 'Low AMH', href: '/conditions/low-amh-treatment' },
                            { label: 'Endometriosis', href: '/conditions/endometriosis' },
                            { label: 'Blocked Tubes', href: '/conditions/blocked-fallopian-tubes' },
                            { label: 'Uterine Fibroids', href: '/conditions/uterine-fibroids' },
                            { label: 'Male Infertility', href: '/conditions/male-infertility' },
                            { label: 'Recurrent Miscarriage', href: '/conditions/recurrent-miscarriage' },
                            { label: 'Ovulation Disorders', href: '/conditions/pcos-and-infertility' },
                            { label: 'Unexplained Infertility', href: '/conditions/unexplained-infertility' },
                        ].map((item) => (
                            <Link key={item.href} href={item.href} className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-gray-100 hover:border-rose-pale hover:shadow-sm transition-all group">
                                <CheckCircle className="w-4 h-4 text-sage shrink-0" />
                                <span className="text-sm font-medium text-navy group-hover:text-rose-deep transition-colors">{item.label}</span>
                                <ArrowRight className="w-3 h-3 text-gray-300 ml-auto group-hover:text-rose-deep" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} title="Frequently Asked Questions — Gynaecologist in Kolkata" />

            {/* CTA */}
            <section className="py-16 lg:py-20 bg-gradient-to-r from-rose-deep to-rose-light" id="book">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">Consult Dr. Ankita Mandal</h2>
                    <p className="text-white/90 mb-8 text-lg">Contact the clinic to enquire about appointment availability.</p>
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
