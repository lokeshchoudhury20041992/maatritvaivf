'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X, Send, User, Phone, CalendarDays } from 'lucide-react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '@/lib/supabase';

export default function LeadForm() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '', date: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Mapping fields to public.form_submissions
            const { error } = await supabase
                .from('form_submissions')
                .insert([
                    {
                        id: uuidv4(),
                        fullname: formData.name,
                        phonenumber: formData.phone,
                        preferreddate: formData.date,
                        serviceordoctor: 'Dr. Ankita Mandal',
                        source_page: typeof window !== 'undefined' ? window.location.pathname : '/',
                        supabase_saved: true,
                        make_sent: false,
                        created_at: new Date().toISOString()
                    }
                ]);

            if (error) {
                console.error('Supabase error:', error);
            }

            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setIsExpanded(false);
                setFormData({ name: '', phone: '', date: '' });
                setLoading(false);
            }, 3000);
        } catch (err) {
            console.error('Submission error:', err);
            setLoading(false);
            // Show success anyway to not block user, but log error
            setSubmitted(true);
        }
    };

    return (
        <>
            {/* Desktop floating form */}
            <div className="hidden lg:block fixed bottom-8 right-8 z-40" id="book">
                <AnimatePresence mode="wait">
                    {!isExpanded ? (
                        <motion.button
                            key="trigger"
                            initial={{ scale: 0, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 10 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsExpanded(true)}
                            className="w-16 h-16 rounded-full bg-gradient-to-r from-rose-deep to-rose-light text-white shadow-[0_10px_25px_-5px_rgba(180,67,108,0.4)] hover:shadow-[0_20px_35px_-5px_rgba(180,67,108,0.5)] flex items-center justify-center transition-all duration-300 relative group"
                        >
                            <Calendar className="w-7 h-7" />
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold rounded-full border-2 border-white animate-pulse" />
                        </motion.button>
                    ) : (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, scale: 0.9, y: 40, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 0.9, y: 40, filter: 'blur(10px)' }}
                            className="w-[360px] bg-white rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden"
                        >
                            <div className="bg-gradient-to-br from-navy to-navy-light p-6 relative">
                                <div className="flex items-center gap-4">
                                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-white/20">
                                        <Image src="/images/img/dr_ankita.png" alt="Dr. Ankita" fill className="object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-heading font-bold text-white text-lg">Quick Booking</h3>
                                        <p className="text-white/60 text-xs mt-0.5">Start your journey today</p>
                                    </div>
                                    <button 
                                        onClick={() => setIsExpanded(false)} 
                                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                            
                            {submitted ? (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-10 text-center"
                                >
                                    <div className="w-20 h-20 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-6">
                                        <span className="text-4xl">✨</span>
                                    </div>
                                    <h4 className="font-heading font-bold text-navy text-xl mb-2">Request Received!</h4>
                                    <p className="text-sm text-gray-500">Dr. Ankita&apos;s team will call you within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Full Name</label>
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-rose-deep transition-colors" />
                                            <input
                                                type="text"
                                                placeholder="Enter your name"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-deep/20 focus:bg-white focus:border-rose-deep/30 transition-all duration-300"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Phone Number</label>
                                        <div className="relative group">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-rose-deep transition-colors" />
                                            <input
                                                type="tel"
                                                placeholder="10-digit number"
                                                required
                                                pattern="[0-9]{10}"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-deep/20 focus:bg-white focus:border-rose-deep/30 transition-all duration-300"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Preferred Date</label>
                                        <div className="relative group">
                                            <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-rose-deep transition-colors" />
                                            <input
                                                type="date"
                                                required
                                                value={formData.date}
                                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                                className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-deep/20 focus:bg-white focus:border-rose-deep/30 transition-all duration-300"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-4 bg-gradient-to-r from-rose-deep to-rose-light text-white font-bold rounded-2xl shadow-[0_10px_20px_-5px_rgba(180,67,108,0.3)] hover:shadow-[0_15px_25px_-5px_rgba(180,67,108,0.4)] hover:translate-y-[-2px] active:translate-y-[0px] transition-all duration-300 flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {loading ? (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                Confirm Appointment
                                            </>
                                        )}
                                    </button>
                                    <p className="text-[10px] text-center text-gray-400 font-medium">✨ Priority scheduling for web requests</p>
                                </form>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Mobile sticky footer */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 slide-up">
                <div className="bg-white/80 backdrop-blur-xl border-t border-gray-100 shadow-[0_-10px_30px_rgba(0,0,0,0.08)] px-5 py-4 rounded-t-[32px]">
                    <div className="flex items-center gap-3 max-w-md mx-auto">
                        <a
                            href="tel:+918100343839"
                            className="flex-1 flex items-center justify-center gap-2 py-4 bg-navy text-white font-bold rounded-2xl text-sm hover:scale-[0.98] transition-all"
                        >
                            <Phone className="w-4 h-4" />
                            Call Us
                        </a>
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="flex-1 flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-rose-deep to-rose-light text-white font-bold rounded-2xl text-sm shadow-lg shadow-rose-200"
                        >
                            <Calendar className="w-4 h-4" />
                            Book Now
                        </button>
                    </div>
                </div>

                {/* Mobile expanded form */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-white border-t border-gray-100 overflow-hidden"
                        >
                            {submitted ? (
                                <div className="p-8 text-center bg-gray-50/50">
                                    <p className="font-heading font-bold text-navy text-xl">Thank You! ✨</p>
                                    <p className="text-sm text-gray-500 mt-2">Personalised care is on its way.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="p-6 space-y-4 max-w-md mx-auto">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                                            <Image src="/images/img/dr_ankita.png" alt="Dr. Ankita" fill className="object-cover" />
                                        </div>
                                        <h3 className="font-bold text-navy leading-tight">Request an appointment with <br/><span className="text-rose-deep">Dr. Ankita Mandal</span></h3>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl text-sm focus:ring-2 focus:ring-rose-deep/20"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        required
                                        pattern="[0-9]{10}"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl text-sm focus:ring-2 focus:ring-rose-deep/20"
                                    />
                                    <input
                                        type="date"
                                        required
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl text-sm focus:ring-2 focus:ring-rose-deep/20"
                                    />
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-4 bg-gradient-to-r from-rose-deep to-rose-light text-white font-bold rounded-2xl mb-4 disabled:opacity-70 flex items-center justify-center gap-2"
                                    >
                                        {loading && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                                        {loading ? 'Submitting...' : 'Submit Request'}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
