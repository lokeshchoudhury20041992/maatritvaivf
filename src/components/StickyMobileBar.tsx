'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';

export default function StickyMobileBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex justify-between gap-3 md:hidden fade-in-up">
      <Link href="tel:+918100353839" className="flex-1 bg-rose-600 text-white rounded-xl py-3 flex items-center justify-center gap-2 font-medium hover:bg-rose-700 focus:bg-rose-700 active:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-600 active:scale-95">
        <Phone size={18} /> Call Us
      </Link>
      <Link href="https://wa.me/918100353839" className="flex-1 bg-green-500 text-white rounded-xl py-3 flex items-center justify-center gap-2 font-medium hover:bg-green-600 focus:bg-green-600 active:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 active:scale-95">
        <MessageCircle size={18} /> WhatsApp
      </Link>
    </div>
  );
}
