'use client';

import { useState } from 'react';
import { CalendarHeart, Send, Loader2 } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '@/lib/supabase';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        date: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase
                .from('form_submissions')
                .insert([
                    {
                        id: uuidv4(),
                        fullname: `${formData.firstName} ${formData.lastName}`.trim(),
                        phonenumber: formData.phone,
                        preferreddate: formData.date,
                        additionalnotes: formData.message,
                        serviceordoctor: 'General Inquiry / Consultation',
                        source_page: '/contact',
                        supabase_saved: true,
                        make_sent: false,
                        created_at: new Date().toISOString()
                    }
                ]);

            if (error) {
                console.error('Supabase error:', error);
            }

            setSubmitted(true);
            setFormData({ firstName: '', lastName: '', phone: '', date: '', message: '' });
        } catch (err) {
            console.error('Submission error:', err);
            setSubmitted(true); // Show success anyway
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="bg-white rounded-3xl p-12 text-center shadow-xl border border-gray-100">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl text-green-600">✨</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-navy mb-4">Request Sent!</h3>
                <p className="text-gray-600 mb-8">
                    Thank you for reaching out to Maatritva IVF. Dr. Ankita&apos;s team will contact you shortly to confirm your consultation.
                </p>
                <button 
                    onClick={() => setSubmitted(false)}
                    className="text-rose-deep font-bold hover:underline"
                >
                    Send another request
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
                <CalendarHeart className="w-6 h-6 text-rose-deep" />
                <h3 className="font-heading text-2xl font-bold text-navy">Request Appointment</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-navy">First Name *</label>
                        <input 
                            type="text" 
                            required 
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-light focus:border-rose-light outline-none transition-all" 
                            placeholder="John" 
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-navy">Last Name</label>
                        <input 
                            type="text" 
                            value={formData.lastName}
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-light focus:border-rose-light outline-none transition-all" 
                            placeholder="Doe" 
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-navy">Phone Number *</label>
                    <input 
                        type="tel" 
                        required 
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-light focus:border-rose-light outline-none transition-all" 
                        placeholder="10-digit number" 
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-navy">Preferred Date</label>
                    <input 
                        type="date" 
                        required 
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-light focus:border-rose-light outline-none transition-all text-gray-600" 
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-navy">How can we help you?</label>
                    <textarea 
                        rows={3} 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-light focus:border-rose-light outline-none transition-all resize-none" 
                        placeholder="Briefly describe your concern (Optional)"
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-rose-deep to-rose-light text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all mt-4 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                    {loading ? 'Submitting...' : 'Submit Request'}
                </button>
                <p className="text-xs text-center text-gray-400 mt-4">Safe, secure, and 100% confidential.</p>
            </form>
        </div>
    );
}
