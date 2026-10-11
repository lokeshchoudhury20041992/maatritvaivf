'use client';

import { motion } from 'framer-motion';
import { Calendar, Phone, Award, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-white pt-10">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-pale/50 to-transparent z-0 hidden lg:block" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold-light/20 blur-[120px] rounded-full z-0" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-rose-pale/30 blur-[150px] rounded-full z-0" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full mt-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-rose-deep/5 rounded-full mb-8 border border-rose-deep/10 shadow-sm"
                        >
                            <Award className="w-5 h-5 text-rose-deep" />
                            <span className="text-sm text-rose-deep font-bold tracking-wide uppercase">IVF &amp; Fertility Care in Kolkata</span>
                        </motion.div>

                        <h1 className="font-heading text-5xl sm:text-6xl lg:text-[72px] font-light text-navy leading-[1.05] mb-8">
                            Your Journey to <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-deep to-rose-light font-medium">
                                Parenthood
                            </span> <br/>
                            Starts With Us
                        </h1>

                        <p className="text-xl lg:text-2xl text-gray-500 mb-10 leading-relaxed max-w-xl font-light">
                            Fertility evaluation and treatment, including IVF, IUI and ICSI, with
                            Dr. Ankita Mandal. Treatment plans and outcomes depend on individual medical factors.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-5 mb-12">
                            <Link
                                href="/contact"
                                className="group flex items-center justify-center gap-3 px-10 py-5 bg-rose-deep text-white font-heading font-extrabold text-xl rounded-2xl shadow-[0_20px_40px_-10px_rgba(180,67,108,0.4)] hover:shadow-[0_25px_50px_-10px_rgba(180,67,108,0.5)] hover:-translate-y-1 transition-all duration-300"
                            >
                                <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                Book Consultation
                            </Link>
                            <a
                                href="tel:+918100343839"
                                className="flex items-center justify-center gap-3 px-10 py-5 border-2 border-navy/10 text-navy font-heading font-bold text-xl rounded-2xl hover:bg-navy/5 hover:border-navy/20 transition-all duration-300"
                            >
                                <Phone className="w-6 h-6" />
                                Call Now
                            </a>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                            <div>
                                <div className="flex items-center gap-1 mb-1">
                                    <MapPin className="w-4 h-4 text-gold" />
                                </div>
                                <p className="text-sm font-bold text-navy">New Town, Kolkata</p>
                            </div>
                            <div className="h-10 w-px bg-gray-200" />
                            <div>
                                <p className="text-2xl font-black text-rose-deep leading-none">15+</p>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Years Experience</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Visual Elements */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="relative"
                    >
                        {/* Main Featured Image - Indian Couple */}
                        <div className="relative z-10 w-full aspect-[4/5] lg:aspect-[3/4] rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-cream">
                            <Image 
                                src="/images/img/hero_image_1.png" 
                                alt="Maatritva IVF Journey" 
                                fill 
                                className="object-cover object-center transform hover:scale-110 transition-transform duration-[10s]"
                                priority
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                        </div>

                        {/* Floating Doctor Card */}
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-10 -left-10 lg:-left-20 z-20 w-72 bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/50"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-rose-deep/20">
                                    <Image src="/images/img/dr_ankita.png" alt="Dr. Ankita" fill className="object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy text-lg leading-tight">Dr. Ankita Mandal</h4>
                                    <p className="text-xs text-rose-deep font-bold">Infertility Specialist</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    <span>IVF, IUI &amp; ICSI</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <ShieldCheck className="w-4 h-4 text-green-500" />
                                    <span>Gynaecology &amp; Laparoscopy</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Certificate Badge */}
                        <motion.div
                            initial={{ rotate: -10 }}
                            animate={{ rotate: [ -10, 10, -10 ] }}
                            transition={{ duration: 8, repeat: Infinity }}
                            className="absolute -top-10 -right-10 z-20 w-32 h-32 bg-gold rounded-full flex items-center justify-center p-4 shadow-xl border-4 border-white"
                        >
                            <div className="text-center text-navy">
                                <p className="text-[10px] font-black uppercase leading-[1] mb-1">Fertility</p>
                                <p className="text-lg font-black uppercase leading-[1]">IVF</p>
                                <p className="text-[10px] font-black uppercase leading-[1] mt-1">Clinic</p>
                            </div>
                        </motion.div>

                        {/* Decorative circles */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-rose-deep/10 rounded-full" />
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-rose-deep/20 rounded-full" />
                    </motion.div>
                </div>
            </div>

            {/* Bottom Section Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
        </section>
    );
}
