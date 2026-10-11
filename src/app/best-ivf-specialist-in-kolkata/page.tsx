import { Metadata } from 'next';
import FAQSection from '@/components/FAQSection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getFAQSchema, generatePageMetadata, getBreadcrumbSchema } from '@/lib/schema-helpers';
import { Award, CheckCircle, ArrowRight, Star, Users, Heart, ShieldCheck, Microscope, IndianRupee, Clock, Phone, MessageCircle, Stethoscope, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
    title: 'IVF Specialist in Kolkata — Dr. Ankita Mandal | Maatritva IVF',
    description: 'IVF specialist in Kolkata: Dr. Ankita Mandal (MBBS, MS OBG, Fellowship in Infertility) at Maatritva IVF, New Town. Information on IVF treatment, process, costs and risks. Outcomes vary with individual medical factors.',
    path: '/best-ivf-specialist-in-kolkata',
    keywords: ['IVF specialist in Kolkata', 'IVF doctor Kolkata', 'IVF specialist Kolkata', 'Dr Ankita Mandal IVF', 'fertility doctor Kolkata'],
});

const faqs = [
    {
        question: 'Who is the IVF specialist at Maatritva IVF, Kolkata?',
        answer:
            '<b>Dr. Ankita Mandal</b> is the Founder Director of Maatritva IVF. She holds an MBBS, an MS in Obstetrics & Gynaecology, a Fellowship in Infertility and an Advanced Diploma in Reproductive Medicine & ART (KIEL, Germany), and has over 15 years of clinical experience.',
    },
    {
        question: 'What are the chances of success with IVF?',
        answer:
            'IVF outcomes <b>vary widely between individuals</b> and depend mainly on the woman\'s age, ovarian reserve, sperm quality, embryo quality and the underlying diagnosis. Chances generally decline with age, particularly after 35. No outcome can be guaranteed. Your doctor can discuss what is realistic for you after reviewing your test results.',
    },
    {
        question: 'How much does IVF cost in Kolkata?',
        answer:
            'IVF costs at Maatritva IVF are <b>explained in writing before treatment</b>. A basic IVF cycle starts from a consultation-based estimate, while advanced IVF with ICSI is higher. The final cost depends on your protocol, medications needed, and additional procedures like ICSI, blastocyst culture, or PGT. We provide a complete written breakdown before treatment begins.',
    },
    {
        question: 'Is IVF treatment painful?',
        answer:
            'Experiences vary. The hormone injections are subcutaneous (under the skin) and are <b>usually well tolerated</b>, though some bruising or soreness is common. Egg retrieval is performed under sedation, so most women feel little discomfort during the procedure; mild cramping or bloating afterwards is common. Embryo transfer usually takes 5-10 minutes and feels similar to a pelvic examination for most women.',
    },
    {
        question: 'How long does one IVF cycle take?',
        answer:
            'A typical IVF cycle takes <b>approximately 4-6 weeks</b> from the start of ovarian stimulation to the pregnancy blood test. This includes 10-12 days of stimulation, egg retrieval, 3-5 days of embryo culture, embryo transfer, and a 14-day wait before the pregnancy test.',
    },
    {
        question: 'How does age affect IVF treatment?',
        answer:
            'In general, IVF success rates are highest for <b>women under 35</b> and decline gradually with age, more noticeably after 38. After 42-43, donor eggs are often discussed as an option. Your doctor will advise on options based on your age, ovarian reserve and medical history.',
    },
    {
        question: 'Does Dr. Ankita Mandal personally handle every IVF case?',
        answer:
            'Dr. Ankita <b>oversees treatment planning</b> from initial consultation through stimulation monitoring, egg retrieval decisions, embryo transfer and pregnancy confirmation, working with the clinic\'s embryologists and clinical team.',
    },
    {
        question: 'What are the risks of IVF?',
        answer:
            'IVF is a <b>well-established procedure</b> performed for over 45 years worldwide, but like any medical treatment it carries risks. These include bloating and cramping, ovarian hyperstimulation syndrome (OHSS), multiple pregnancy, ectopic pregnancy, and the risks of egg retrieval such as bleeding or infection (uncommon). Monitoring and protocol choice aim to reduce these risks; your doctor will discuss them before treatment.',
    },
    {
        question: 'Can male infertility be treated with IVF?',
        answer:
            'Often, yes. <b>ICSI (Intracytoplasmic Sperm Injection)</b> can allow fertilisation even with very low sperm count or poor motility. For men with azoospermia (no sperm in ejaculate), surgical sperm retrieval (TESA/PESA) combined with ICSI may be an option, although sperm cannot be retrieved in every case.',
    },
    {
        question: 'Does Maatritva IVF offer egg freezing?',
        answer:
            'Yes. We offer <b>oocyte cryopreservation (egg freezing)</b> for women who wish to preserve their fertility. This may be considered by women planning to delay motherhood or facing medical treatments like chemotherapy. Eggs frozen at a younger age, generally before 35, tend to have better chances of later use, but egg freezing does not guarantee a future pregnancy.',
    },
    {
        question: 'Can I book an online consultation with Dr. Ankita Mandal?',
        answer:
            'Yes. Dr. Ankita offers <b>online video consultations</b> for initial evaluations, follow-ups, and second opinions. This is especially useful for outstation patients and international patients from Bangladesh and Northeast India.',
    },
    {
        question: 'What facilities does Maatritva IVF have?',
        answer:
            'Maatritva IVF has <b>an in-house IVF laboratory with time-lapse embryo monitoring</b>, ultrasonography and embryo freezing facilities. A written cost estimate is provided before treatment begins.',
    },
];

export default function BestIVFSpecialistPage() {
    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'IVF Specialist in Kolkata', url: '/best-ivf-specialist-in-kolkata' },
    ]);

    return (
        <>
            <SchemaMarkup schema={breadcrumbs} />
            <SchemaMarkup schema={getFAQSchema(faqs)} />

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 1 — HERO AUTHORITY BLOCK
            ═══════════════════════════════════════════════════════════════ */}
            <section className="bg-gradient-to-br from-navy to-navy-light py-16 lg:py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12 items-center">
                        <div className="lg:col-span-3">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                                <Award className="w-4 h-4 text-gold" />
                                <span className="text-sm text-white/90 font-medium">IVF Specialist in Kolkata</span>
                            </div>
                            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4">
                                IVF Specialist in Kolkata — Fertility Care with Dr. Ankita Mandal
                            </h1>
                            <p className="text-rose-pale font-medium text-lg mb-3">
                                Founder Director, Maatritva Fertility IVF & Healthcare
                            </p>
                            <p className="text-white/70 text-sm mb-6">
                                MBBS · MS (OBG) · Fellowship in Infertility · Advanced Diploma ART (KIEL, Germany)
                            </p>

                            {/* Quick credibility highlights */}
                            {/* Patient counts and "Top 5" ranking removed (NMC 2026 guidelines, para 8.1(iii), 8.1(ix)). */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                                {[
                                    { value: '15+', label: 'Years Experience' },
                                    { value: 'MS', label: 'Obstetrics & Gynaecology' },
                                    { value: 'IVF', label: 'IUI · ICSI' },
                                    { value: 'KIEL', label: 'Germany Trained' },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-white/10 rounded-xl p-3 text-center border border-white/10">
                                        <p className="text-white font-heading font-bold text-lg">{stat.value}</p>
                                        <p className="text-white/60 text-xs">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="#book"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-deep to-rose-light text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                                >
                                    Book a Consultation
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="tel:+918100343839"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
                                >
                                    <Phone className="w-4 h-4" />
                                    Call Now
                                </Link>
                            </div>
                        </div>
                        <div className="lg:col-span-2 hidden lg:flex justify-center">
                            <div className="w-80 h-80 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden">
                                <Stethoscope className="w-24 h-24 text-white/20" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-4">
                                    <p className="text-white font-heading font-bold text-sm">Dr. Ankita Mandal</p>
                                    <p className="text-white/70 text-xs">IVF Specialist & Gynaecologist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 2 — DIRECT ANSWER BLOCK (AI OVERVIEW OPTIMISED)
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-16 lg:py-20 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-6">
                        Who Is the IVF Specialist at Maatritva IVF?
                    </h2>
                    <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm mb-8">
                        <p className="text-gray-800 text-lg leading-relaxed">
                            <strong>Dr. Ankita Mandal</strong> is the Founder Director of Maatritva Fertility IVF &amp; Healthcare,
                            Kolkata, with over 15 years of experience in reproductive medicine, an Advanced Diploma in ART from
                            KIEL, Germany, and a Fellowship in Infertility.
                        </p>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-navy mb-4">What to Consider When Choosing an IVF Specialist</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        When choosing an IVF specialist, patients commonly consider the following:
                    </p>
                    <ul className="space-y-3 mb-6">
                        {[
                            'Specialised training in reproductive medicine (not just general gynaecology)',
                            'Registration with the State or National Medical Register',
                            'A well-equipped, independently managed IVF laboratory',
                            'Personalised protocols — not one-size-fits-all stimulation',
                            'Transparent communication about success rates, costs, and realistic expectations',
                            'Emotional support and counselling as part of the treatment process',
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                        You are welcome to ask any clinic, including ours, about these points before starting treatment.
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 3 — ABOUT DR. ANKITA MANDAL
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-6">
                        About Dr. Ankita Mandal
                    </h2>
                    <div className="prose prose-gray max-w-none space-y-4 text-gray-700 text-lg leading-relaxed">
                        <p>
                            Dr. Ankita Mandal is a <strong>Consultant Gynaecologist, Obstetrician, Infertility Specialist,
                                and Gynaecological Laparoscopic Surgeon</strong>. She graduated from SCB Medical College, Cuttack
                            and completed her MS in Obstetrics & Gynaecology from RIMS, Ranchi. She then earned a
                            Fellowship in Infertility and an Advanced Diploma in Reproductive Medicine & ART from KIEL, Germany.
                        </p>
                        <p>
                            She has <strong>over 15 years of clinical experience</strong>. Her areas of clinical focus include
                            recurrent IVF failure, low AMH/diminished ovarian reserve, male factor infertility and unexplained
                            infertility.
                        </p>
                        <p>
                            She is a member of <strong>ISOG, FOGSI, ACOG</strong>, and a Fellow of <strong>FIAOG</strong>.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mt-8">
                        {[
                            { label: 'Qualifications', value: 'MBBS, MS (OBG), Fellowship Infertility, Diploma ART (Germany)' },
                            { label: 'Experience', value: '15+ years in Reproductive Medicine' },
                            { label: 'Special Focus', value: 'Complex IVF, Low AMH, Male Factor, Recurrent Failure' },
                            { label: 'Professional Bodies', value: 'ISOG, FOGSI, ACOG, FIAOG' },
                        ].map((item) => (
                            <div key={item.label} className="bg-cream rounded-xl p-5 border border-gray-100">
                                <p className="text-xs font-semibold text-rose-deep uppercase tracking-wide mb-1">{item.label}</p>
                                <p className="text-sm text-navy font-medium">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 4 — WHY CHOOSING THE RIGHT IVF SPECIALIST MATTERS
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-16 lg:py-20 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-6">
                        Why Choosing the Right IVF Specialist Matters
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        IVF is not a one-size-fits-all treatment. Several clinical and laboratory factors shape how treatment
                        is planned:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: <Star className="w-6 h-6 text-gold" />,
                                title: 'Individual Factors',
                                desc: 'Stimulation protocols are usually tailored to individual factors such as AMH, FSH, body weight and previous response. Outcomes still vary and cannot be guaranteed.',
                            },
                            {
                                icon: <Microscope className="w-6 h-6 text-navy" />,
                                title: 'Laboratory Quality',
                                desc: 'The IVF lab is where fertilisation, embryo culture, and selection happen. Laboratory conditions are one of the factors that can affect embryo development. Maatritva\'s lab has time-lapse monitoring, HEPA-filtered air and in-house embryologists.',
                            },
                            {
                                icon: <Heart className="w-6 h-6 text-rose-deep" />,
                                title: 'Personalised Protocols',
                                desc: 'Stimulation protocols can be individualised — for example, mild stimulation for some low-reserve patients or antagonist protocols for PCOS patients at risk of hyperstimulation.',
                            },
                            {
                                icon: <ShieldCheck className="w-6 h-6 text-sage" />,
                                title: 'Complex Cases',
                                desc: 'Recurrent IVF failure, poor embryo quality and thin endometrium usually need further evaluation before another cycle is planned. Some of these problems may not be fully correctable.',
                            },
                        ].map((item) => (
                            <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="font-heading text-lg font-bold text-navy mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 5 — IVF TREATMENT PROCESS (STEP-BY-STEP)
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-4">
                        How Does IVF Treatment Work? Step-by-Step Process
                    </h2>
                    <p className="text-gray-700 mb-8 leading-relaxed">
                        IVF (In Vitro Fertilisation) is a fertility treatment where eggs are collected from the ovaries,
                        fertilised with sperm in a laboratory, and the resulting embryo is transferred to the uterus to
                        achieve pregnancy. Here is how the process works at Maatritva IVF:
                    </p>
                    <div className="space-y-6">
                        {[
                            { step: '1', title: 'Initial Consultation & Diagnosis', desc: 'Dr. Ankita reviews your complete medical history, performs a baseline ultrasound, and orders blood tests (AMH, FSH, LH, thyroid) and semen analysis. This identifies the root cause and informs protocol design.' },
                            { step: '2', title: 'Personalised Protocol Design', desc: 'Based on your diagnosis, age, and ovarian reserve, a customised stimulation protocol is designed. This may range from a mild protocol for low AMH to an antagonist protocol for PCOS patients.' },
                            { step: '3', title: 'Ovarian Stimulation (10-12 Days)', desc: 'Daily hormone injections stimulate your ovaries to produce multiple mature eggs. Regular ultrasound scans and blood tests monitor follicle growth. Dosage is adjusted based on your response.' },
                            { step: '4', title: 'Trigger Injection & Egg Retrieval', desc: 'When follicles reach a suitable size, a trigger injection finalises maturation. 34-36 hours later, eggs are retrieved under sedation in a procedure that usually takes 15-20 minutes; mild cramping afterwards is common.' },
                            { step: '5', title: 'Fertilisation & Embryo Culture', desc: 'Eggs are fertilised by conventional IVF or ICSI (single sperm injection), as clinically indicated. Embryos are cultured for 3-5 days in our time-lapse incubator, allowing continuous monitoring without disturbance.' },
                            { step: '6', title: 'Embryo Selection & Transfer', desc: 'An embryo is selected based on its development and gently placed into the uterus. This usually takes 5-10 minutes and most women feel only mild discomfort. We typically recommend single embryo transfer (SET) to avoid multiple pregnancy risks.' },
                            { step: '7', title: 'Pregnancy Test (14 Days Later)', desc: 'A blood test (beta-hCG) approximately 14 days after transfer shows whether pregnancy has occurred. If positive, regular monitoring begins. Our counselling team provides emotional support throughout the wait.' },
                        ].map((item) => (
                            <div key={item.step} className="flex gap-6 items-start">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-rose-deep to-rose-light flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">{item.step}</span>
                                </div>
                                <div>
                                    <h3 className="font-heading text-lg font-bold text-navy mb-1">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 6 — FACTORS AFFECTING IVF SUCCESS
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-16 lg:py-20 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-4">
                        What Affects IVF Success Rates?
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        IVF success rates vary by age, diagnosis and laboratory factors. The table below shows how chances
                        generally change with age. It is not a statement of this clinic&apos;s results and no outcome is guaranteed.
                    </p>
                    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-8">
                        <div className="grid grid-cols-3 bg-navy text-white text-center py-3 text-sm font-semibold">
                            <div>Age Group</div>
                            <div>General Trend</div>
                            <div>Key Factor</div>
                        </div>
                        {[
                            // Percentage success rates removed (NMC 2026 guidelines, para 8.1(iii), 8.1(vi)); general trend shown instead.
                            { age: 'Under 35', rate: 'Highest', factor: 'Egg quality & quantity usually better' },
                            { age: '35-37', rate: 'Gradually lower', factor: 'Egg quality begins to decline' },
                            { age: '38-40', rate: 'Lower', factor: 'Protocol choice becomes more important' },
                            { age: '40-42', rate: 'Considerably lower', factor: 'PGT may be discussed' },
                            { age: '43+', rate: 'Low with own eggs', factor: 'Donor eggs often discussed' },
                        ].map((row, i) => (
                            <div key={row.age} className={`grid grid-cols-3 text-center py-3 text-sm ${i % 2 === 0 ? 'bg-cream/50' : 'bg-white'}`}>
                                <div className="font-semibold text-navy">{row.age}</div>
                                <div className="font-bold text-rose-deep">{row.rate}</div>
                                <div className="text-gray-600 text-xs px-2">{row.factor}</div>
                            </div>
                        ))}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-navy mb-4">Factors That Influence IVF Success</h3>
                    <ul className="space-y-2 mb-6">
                        {[
                            'Egg quality and ovarian reserve (AMH, AFC)',
                            'Sperm quality — morphology, motility, DNA fragmentation',
                            'Embryo quality and laboratory conditions',
                            'Uterine environment — endometrial thickness and pattern',
                            'Lifestyle — BMI, smoking, stress levels',
                            'The IVF specialist\'s experience and protocol selection',
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <CheckCircle className="w-4 h-4 text-sage shrink-0 mt-1" />
                                <span className="text-gray-700 text-sm">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                        Your doctor can discuss <strong>individual chances and risks</strong> at consultation, based on your
                        test results and history.
                    </p>
                </div>
            </section >

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 7 — IVF TREATMENT COST IN KOLKATA
            ═══════════════════════════════════════════════════════════════ */}
            < section className="py-16 lg:py-20 bg-white" >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-4">
                        How Much Does IVF Cost in Kolkata?
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        IVF cost in Kolkata varies based on the type of treatment, medications required, and additional
                        procedures. At Maatritva IVF, we provide a <strong>written cost estimate</strong> — you will
                        receive a detailed written breakdown before any treatment begins.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-cream rounded-2xl p-6 border border-gray-100">
                            <div className="flex items-center gap-2 mb-3">
                                <IndianRupee className="w-5 h-5 text-navy" />
                                <h3 className="font-heading text-lg font-bold text-navy">What Affects IVF Cost?</h3>
                            </div>
                            <ul className="space-y-2">
                                {['Type of protocol (standard IVF vs ICSI)', 'Medication dosage (depends on ovarian response)', 'Additional procedures (PGT, blastocyst culture, LAH)', 'Frozen embryo transfer cycles', 'Donor egg or sperm programmes'].map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                                        <CheckCircle className="w-3 h-3 text-sage shrink-0 mt-1" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-cream rounded-2xl p-6 border border-gray-100">
                            <div className="flex items-center gap-2 mb-3">
                                <ShieldCheck className="w-5 h-5 text-sage" />
                                <h3 className="font-heading text-lg font-bold text-navy">Cost Information</h3>
                            </div>
                            <ul className="space-y-2">
                                {['Complete written cost estimate before treatment', 'Medication costs listed separately', 'Payment options can be discussed with the clinic'].map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                                        <CheckCircle className="w-3 h-3 text-sage shrink-0 mt-1" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="text-center">
                        <Link href="/ivf-cost-kolkata" className="inline-flex items-center gap-2 text-rose-deep font-semibold hover:underline">
                            View Detailed IVF Cost Breakdown <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section >

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 8 — FERTILITY SERVICES OFFERED
            ═══════════════════════════════════════════════════════════════ */}
            < section className="py-16 lg:py-20 bg-cream" >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-4 text-center">
                        Fertility Services at Maatritva IVF
                    </h2>
                    <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
                        Beyond IVF, we offer a complete range of fertility services. Where clinically appropriate, simpler
                        treatments are considered first — IVF is one option, not the only option.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { label: 'IVF Treatment', href: '/services/best-ivf-treatment', desc: 'Complete IVF cycle with individualised stimulation.' },
                            { label: 'ICSI Treatment', href: '/services/icsi-treatment', desc: 'Single sperm injection per egg. Essential for male factor infertility.' },
                            { label: 'IUI Treatment', href: '/services/iui-treatment', desc: 'Simpler, less invasive option for mild fertility issues.' },
                            { label: 'Egg Freezing', href: '/services/egg-freezing', desc: 'Freezing eggs for possible future use. Does not guarantee future pregnancy.' },
                            { label: 'Male Infertility', href: '/services/male-infertility-treatment', desc: 'Comprehensive diagnosis and treatment for male factor.' },
                            { label: 'Donor Egg IVF', href: '/services/donor-egg-ivf', desc: 'For women with diminished ovarian reserve or advanced age.' },
                            { label: 'TESA / PESA', href: '/services/testicular-sperm-extraction', desc: 'Surgical sperm retrieval for azoospermia cases.' },
                            { label: 'Blastocyst Transfer', href: '/services/blastocyst-transfer', desc: 'Day 5 embryo culture and transfer, where suitable.' },
                            { label: 'PGD / PGS Testing', href: '/services/ivf-with-pgd-pgs', desc: 'Genetic screening of embryos before transfer.' },
                        ].map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-rose-pale hover:shadow-md transition-all group"
                            >
                                <h3 className="font-heading text-base font-bold text-navy mb-1 group-hover:text-rose-deep transition-colors flex items-center gap-2">
                                    {item.label}
                                    <ArrowRight className="w-3 h-3 text-gray-300 group-hover:text-rose-deep transition-colors" />
                                </h3>
                                <p className="text-xs text-gray-600">{item.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section >

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 9 — ABOUT MAATRITVA IVF
            ═══════════════════════════════════════════════════════════════ */}
            < section className="py-16 lg:py-20 bg-white" >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-8">
                        About Maatritva IVF
                    </h2>
                    <div className="space-y-6">
                        {[
                            {
                                icon: <Microscope className="w-6 h-6 text-navy" />,
                                title: 'IVF Laboratory',
                                desc: 'The laboratory has HEPA-filtered clean rooms, time-lapse embryo monitoring (EmbryoScope), ICSI workstations and vitrification equipment.',
                            },
                            {
                                icon: <MapPin className="w-6 h-6 text-rose-deep" />,
                                title: 'Information Centres Across Region',
                                desc: 'We have expanded our reach with information and consultation centres to serve patients from Salt Lake, New Town, South Kolkata, Howrah, North Kolkata, Barasat and Bangladesh.',
                            },
                            {
                                icon: <Users className="w-6 h-6 text-sage" />,
                                title: 'Bangladesh & International Patient Support',
                                desc: 'Kolkata is the closest Indian metro to Bangladesh. We provide medical visa assistance, airport pickup, accommodation coordination, and Bengali-speaking staff on request.',
                            },
                            {
                                icon: <Heart className="w-6 h-6 text-rose-deep" />,
                                title: 'Personalised Care',
                                desc: 'Dr. Ankita Mandal oversees treatment planning, and protocols are individualised to each patient\'s medical history and test results.',
                            },
                        ].map((item) => (
                            <div key={item.title} className="flex gap-5 items-start">
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-cream flex items-center justify-center">{item.icon}</div>
                                <div>
                                    <h3 className="font-heading text-lg font-bold text-navy mb-1">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 10 — TREATMENT OUTCOMES NOTE
                Patient testimonials and star ratings removed (NMC 2026 guidelines, para 3.2 Expl. V, 6.2, 8.1(v), 8.1(xi)).
            ═══════════════════════════════════════════════════════════════ */}
            < section className="py-16 lg:py-20 bg-cream" >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-8 text-center">
                        Before You Start Treatment
                    </h2>
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Fertility treatment outcomes vary with age, diagnosis and treatment history, and no outcome can
                            be guaranteed. Before any treatment begins, your doctor will explain the options available to you,
                            their risks, the likely number of cycles and the expected costs, so that you can make an informed decision.
                        </p>
                    </div>
                </div>
            </section >

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 11 — FAQs (12 OPTIMISED QUESTIONS)
            ═══════════════════════════════════════════════════════════════ */}
            < FAQSection faqs={faqs} title="Frequently Asked Questions — IVF Specialist in Kolkata" />

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 12 — CONTACT
            ═══════════════════════════════════════════════════════════════ */}
            < section className="py-16 lg:py-20 bg-gradient-to-r from-rose-deep to-rose-light" id="book" >
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
                        Have Questions About IVF?
                    </h2>
                    <p className="text-white/90 mb-8 text-lg">
                        Contact the clinic to enquire about appointment availability with Dr. Ankita Mandal.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#book"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-rose-deep font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                        >
                            <Clock className="w-4 h-4" />
                            Book Appointment
                        </Link>
                        <a
                            href="tel:+918100343839"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
                        >
                            <Phone className="w-4 h-4" />
                            Call Now
                        </a>
                        <a
                            href="https://wa.me/918100343839"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
                        >
                            <MessageCircle className="w-4 h-4" />
                            WhatsApp
                        </a>
                    </div>
                </div>
            </section >
        </>
    );
}
