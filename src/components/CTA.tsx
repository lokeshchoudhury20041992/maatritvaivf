import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function CTA({ title = "Book Your Free Consultation Today", subtitle = "Take the first step towards your dream of parenthood with Maatritva IVF's leading fertility experts." }: { title?: string; subtitle?: string }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-rose-pale/30 rounded-[40px] p-12 lg:p-20 text-center my-20 border border-rose-pale shadow-2xl">
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-rose-deep/5 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-gold/10 rounded-full blur-2xl" />
      
      <div className="relative z-10">
        <h3 className="font-heading text-3xl md:text-5xl font-black text-navy mb-6 leading-tight">{title}</h3>
        <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-3xl mx-auto font-medium leading-relaxed">{subtitle}</p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link 
            href="tel:+918100343839" 
            className="group px-10 py-5 bg-rose-deep text-white rounded-2xl font-bold text-lg hover:bg-rose-700 hover:shadow-2xl hover:shadow-rose-deep/30 transition-all active:scale-95 flex items-center justify-center gap-3 w-full sm:w-auto overflow-hidden relative"
          >
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            +91 8100343839 / +91 8100353839
          </Link>
          <Link 
            href="https://wa.me/918100343839" 
            className="group px-10 py-5 bg-navy text-white rounded-2xl font-bold text-lg hover:bg-navy-light hover:shadow-2xl hover:shadow-navy/20 transition-all active:scale-95 flex items-center justify-center gap-3 w-full sm:w-auto"
          >
            <span className="w-6 h-6 flex items-center justify-center bg-green-500 rounded-full text-white text-xs">W</span>
            WhatsApp Now
          </Link>
        </div>
      </div>
    </div>
  );
}
