'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock } from 'lucide-react';

interface StatItem {
    icon: React.ReactNode;
    end: number;
    suffix: string;
    label: string;
}

function AnimatedCounter({ end, suffix, inView }: { end: number; suffix: string; inView: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [end, inView]);

    return (
        <span className="counter-glow">
            {count.toLocaleString()}{suffix}
        </span>
    );
}

export default function TrustBar() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const stats: StatItem[] = [
        // Patient counts, cycle counts and satisfaction percentages removed (NMC 2026 guidelines, para 8.1(iii)).
        { icon: <Clock className="w-6 h-6" />, end: 15, suffix: '+', label: 'Years of Clinical Experience — Dr. Ankita Mandal' },
        { icon: <Clock className="w-6 h-6" />, end: 35, suffix: '+', label: 'Years of Clinical Experience — Dr. Chhabi Ghosh' },
    ];

    return (
        <section ref={ref} className="py-16 bg-cream/50 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="text-center"
                        >
                            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-rose-pale to-rose-pale/50 flex items-center justify-center text-rose-deep">
                                {stat.icon}
                            </div>
                            <p className="font-heading text-3xl lg:text-4xl font-bold text-navy mb-1">
                                <AnimatedCounter end={stat.end} suffix={stat.suffix} inView={isInView} />
                            </p>
                            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
