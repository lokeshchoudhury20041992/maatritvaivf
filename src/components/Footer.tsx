import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Heart, Facebook, Instagram, Youtube, Award, ShieldCheck, Microscope } from 'lucide-react';
import Image from 'next/image';

const services = [
    { href: '/services/ivf-treatment', label: 'IVF Treatment' },
    { href: '/services/iui-treatment', label: 'IUI Treatment' },
    { href: '/services/icsi-treatment', label: 'ICSI Treatment' },
    { href: '/services/laparoscopic-surgery-infertility', label: 'Laparoscopic Surgery' },
    { href: '/services/high-risk-pregnancy', label: 'High-Risk Pregnancy' },
    { href: '/services/egg-freezing', label: 'Egg Freezing' },
    { href: '/services/male-infertility-treatment', label: 'Male Infertility' },
    { href: '/services/donor-egg-ivf', label: 'Donor Egg IVF' },
];

const locations = [
    { href: '/locations/salt-lake', label: 'Salt Lake' },
    { href: '/locations/new-town', label: 'New Town' },
    { href: '/locations/south-kolkata', label: 'South Kolkata' },
    { href: '/locations/howrah', label: 'Howrah' },
    { href: '/locations/north-kolkata', label: 'North Kolkata' },
    { href: '/locations/dum-dum-airport', label: 'Dum Dum & Airport' },
    { href: '/locations/barasat-north-24-parganas', label: 'Barasat & N24P' },
    { href: '/locations/bangladesh-ivf-support', label: 'Bangladesh IVF' },
];

const quickLinks = [
    { href: '/ivf-cost-kolkata', label: 'IVF Cost' },
    { href: '/best-ivf-specialist-in-kolkata', label: 'Best IVF Specialist' },
    { href: '/doctors/dr-ankita-mandal', label: 'Dr. Ankita Mandal' },
    { href: '/conditions/pcos-treatment', label: 'PCOS Treatment' },
    { href: '/conditions/low-amh-treatment', label: 'Low AMH Treatment' },
    { href: '/conditions/male-infertility', label: 'Male Infertility' },
    { href: '/blog', label: 'Blog' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
];

export default function Footer() {
    return (
        <footer className="bg-navy text-white overflow-hidden relative">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-deep/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand & Contact */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="relative w-16 h-16 transition-transform group-hover:scale-110">
                                <Image 
                                    src="/images/img/logo.png" 
                                    alt="Maatritva Fertility" 
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <p className="font-heading font-bold text-2xl leading-tight">Maatritva Fertility</p>
                                <p className="text-sm text-rose-light font-medium">IVF and Health care</p>
                            </div>
                        </Link>
                        
                        <p className="text-sm text-white/60 leading-relaxed max-w-xs">
                            Kolkata&apos;s leading fertility clinic, combining advanced ART technology with 
                            deeply personalized care for every family.
                        </p>

                        <div className="space-y-4">
                            <a href="tel:+918100353839" className="flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors group">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-gold/20">
                                    <Phone className="w-4 h-4 text-gold" />
                                </div>
                                <span>+91 8100 353839</span>
                            </a>
                            <a href="mailto:care@maatritvaivffertility.com" className="flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors group">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-gold/20">
                                    <Mail className="w-4 h-4 text-gold" />
                                </div>
                                <span>care@maatritvaivffertility.com</span>
                            </a>
                            <div className="flex items-start gap-3 text-sm text-white/70 group">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                    <MapPin className="w-4 h-4 text-gold" />
                                </div>
                                <address className="not-italic leading-relaxed">
                                    101, First Floor, Block-CF,<br/>
                                    Axismall Multicomplex, Newtown,<br/>
                                    Kolkata 700156, West Bengal
                                </address>
                            </div>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-8 relative inline-block">
                            Our Services
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-gold rounded-full" />
                        </h4>
                        <ul className="grid grid-cols-1 gap-y-4">
                            {services.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-sm text-white/50 hover:text-white transition-all flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold transition-colors" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick & Conditions Column */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-8 relative inline-block">
                            Explore
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-gold rounded-full" />
                        </h4>
                        <ul className="grid grid-cols-1 gap-y-4">
                            {quickLinks.slice(0, 8).map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-sm text-white/50 hover:text-white transition-all flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-rose-light/30 group-hover:bg-rose-light transition-colors" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Why Us / Trust Column */}
                    <div className="space-y-10">
                        <div>
                            <h4 className="font-heading font-bold text-lg mb-8 relative inline-block">
                                Quality Standards
                                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-gold rounded-full" />
                            </h4>
                            <div className="grid grid-cols-1 gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                                        <ShieldCheck className="w-6 h-6 text-gold" />
                                    </div>
                                    <p className="text-xs font-bold text-white/80 uppercase tracking-widest leading-none">NMC Certified Specialists</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                                        <Microscope className="w-6 h-6 text-gold" />
                                    </div>
                                    <p className="text-xs font-bold text-white/80 uppercase tracking-widest leading-none">Advanced Embryo Lab</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h5 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-6">Connect With Us</h5>
                            <div className="flex items-center gap-4">
                                <a href="https://www.facebook.com/p/Maatritva-Fertility-IVF-Healthcare-61577218150861/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-rose-deep hover:border-transparent transition-all group">
                                    <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="https://www.instagram.com/maatritvafertilityivf/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-rose-deep hover:border-transparent transition-all group">
                                    <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="https://www.youtube.com/@BestFertilityIVFclinicKolkata" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-rose-deep hover:border-transparent transition-all group">
                                    <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/5 bg-black/20 backdrop-blur-sm relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="flex flex-col gap-2 items-center lg:items-start text-center lg:text-left">
                            <p className="text-xs text-white/40 leading-relaxed font-medium">
                                © {new Date().getFullYear()} Best IVF Centre in Kolkata — Maatritva IVF. All Rights Reserved.
                            </p>
                            <p className="text-[10px] text-white/20 uppercase tracking-widest">
                                Kolkata&apos;s Leading Clinic for IVF, ICSI, & IUI Excellence
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-2xl border border-white/10">
                             <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Developed by</span>
                             <span className="text-sm font-black text-gold tracking-tighter uppercase italic">Tag easy</span>
                             <Heart className="w-3 h-3 text-rose-deep animate-pulse" />
                        </div>

                        <div className="text-center lg:text-right max-w-md hidden md:block">
                            <p className="text-[10px] text-white/30 italic leading-relaxed">
                                Disclaimer: Results vary based on individual conditions. Always consult a certified fertility specialist before starting ART treatments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
