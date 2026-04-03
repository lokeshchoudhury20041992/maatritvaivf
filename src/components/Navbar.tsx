'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Calendar, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/ivf-cost-kolkata', label: 'IVF Cost' },
    { href: '/doctors', label: 'Our Doctors' },
    { href: '/blog', label: 'Blog' },
];

const serviceDropdown = [
    { href: '/services/best-ivf-treatment', label: 'Best IVF Treatment' },
    { href: '/services/iui-treatment', label: 'IUI Treatment' },
    { href: '/services/icsi-treatment', label: 'ICSI Treatment' },
    { href: '/services/donor-egg-ivf', label: 'Donor Egg IVF' },
    { href: '/services/egg-freezing', label: 'Egg Freezing' },
    { href: '/services/laparoscopic-surgery-infertility', label: 'Laparoscopic Surgery' },
    { href: '/services/fertility-preservation', label: 'Fertility Preservation' },
    { href: '/services/hysteroscopy', label: 'Hysteroscopy' },
    { href: '/services/high-risk-pregnancy-management', label: 'High-Risk Pregnancy' },
];

const conditionsDropdown = [
    { href: '/conditions/pcos-and-infertility', label: 'PCOS & Infertility' },
    { href: '/conditions/low-amh-treatment', label: 'Low AMH Treatment' },
    { href: '/conditions/male-infertility', label: 'Male Infertility' },
    { href: '/conditions/endometriosis', label: 'Endometriosis' },
    { href: '/conditions/blocked-fallopian-tubes', label: 'Blocked Fallopian Tubes' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const [showConditions, setShowConditions] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 shrink-0">
                        <div className="relative w-12 h-12 lg:w-16 lg:h-16">
                            <Image 
                                src="/images/img/logo.png" 
                                alt="Maatritva Fertility" 
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="hidden sm:block">
                            <p className="font-heading font-bold text-navy text-base lg:text-xl leading-tight">
                                Maatritva Fertility
                            </p>
                            <p className="text-xs lg:text-sm text-rose-deep font-medium">IVF and Health care</p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-2">
                        <Link href="/" className="px-3 py-2 text-sm font-medium text-navy hover:text-rose-deep transition-colors rounded-lg hover:bg-rose-pale/50">
                            Home
                        </Link>

                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setShowServices(true)}
                            onMouseLeave={() => setShowServices(false)}
                        >
                            <button className="px-3 py-2 text-sm font-medium text-navy hover:text-rose-deep transition-colors rounded-lg hover:bg-rose-pale/50 flex items-center gap-1">
                                Services
                                <ChevronDown className="w-3 h-3" />
                            </button>
                            <AnimatePresence>
                                {showServices && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                                    >
                                        {serviceDropdown.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="block px-4 py-3 text-sm text-navy hover:bg-rose-pale/50 hover:text-rose-deep transition-colors"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Conditions Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setShowConditions(true)}
                            onMouseLeave={() => setShowConditions(false)}
                        >
                            <button className="px-3 py-2 text-sm font-medium text-navy hover:text-rose-deep transition-colors rounded-lg hover:bg-rose-pale/50 flex items-center gap-1">
                                Conditions
                                <ChevronDown className="w-3 h-3" />
                            </button>
                            <AnimatePresence>
                                {showConditions && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                                    >
                                        {conditionsDropdown.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="block px-4 py-3 text-sm text-navy hover:bg-rose-pale/50 hover:text-rose-deep transition-colors"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {navLinks.filter(l => l.label !== 'Home').map((link) => (
                             <Link key={link.href} href={link.href} className="px-3 py-2 text-sm font-medium text-navy hover:text-rose-deep transition-colors rounded-lg hover:bg-rose-pale/50">
                                 {link.label}
                             </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a href="tel:+918100353839" className="flex items-center gap-2 text-sm font-medium text-navy hover:text-rose-deep transition-colors">
                            <Phone className="w-4 h-4" />
                            Call Now
                        </a>
                        <Link
                            href="/contact"
                            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-rose-deep to-rose-light text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
                        >
                            <Calendar className="w-4 h-4" />
                            Book Consultation
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-rose-pale/50 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6 text-navy" /> : <Menu className="w-6 h-6 text-navy" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="lg:hidden overflow-y-auto max-h-[80vh] bg-white border-t border-gray-100 shadow-xl"
                    >
                        <div className="px-4 py-4 space-y-1">
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider px-4 mt-2 mb-1">Services</div>
                            {serviceDropdown.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 pl-6 text-sm font-medium text-navy hover:text-rose-deep hover:bg-rose-pale/30 rounded-lg transition-colors border-l-2 border-rose-light/20"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider px-4 mt-4 mb-1">Conditions</div>
                            {conditionsDropdown.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 pl-6 text-sm font-medium text-navy hover:text-rose-deep hover:bg-rose-pale/30 rounded-lg transition-colors border-l-2 border-rose-light/20"
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider px-4 mt-4 mb-1">Pages</div>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 text-base font-medium text-navy hover:text-rose-deep hover:bg-rose-pale/30 rounded-lg transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-5 pb-2 border-t border-gray-100 space-y-3">
                                <a
                                    href="tel:+918100353839"
                                    className="flex items-center justify-center gap-2 px-4 py-3 text-navy font-medium border border-navy/20 rounded-full hover:bg-navy hover:text-white transition-all"
                                >
                                    <Phone className="w-4 h-4" />
                                    +91 8100 353839
                                </a>
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-rose-deep to-rose-light text-white font-semibold rounded-full shadow-md"
                                >
                                    <Calendar className="w-4 h-4" />
                                    Book Consultation
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

