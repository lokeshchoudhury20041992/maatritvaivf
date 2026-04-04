'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    href: string;
    icon: React.ReactNode;
    index: number;
    image?: string;
}

export default function ServiceCard({ title, description, href, icon, index, image }: ServiceCardProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="h-full"
        >
            <Link href={href} className="group block h-full">
                <div className="relative h-full bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(225,29,72,0.1)] transition-all duration-500 hover:-translate-y-2 flex flex-col group-hover:border-rose-pale/50">
                    {/* Background Decorative Gradient */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-rose-pale/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {image && (
                        <div className="relative h-60 w-full overflow-hidden">
                            <Image 
                                src={image} 
                                alt={title} 
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            {/* Improved Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                            
                            {/* Premium Icon Badge over image */}
                            <div className="absolute bottom-4 left-6 w-12 h-12 rounded-xl glass flex items-center justify-center text-white shadow-xl translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                {icon}
                            </div>
                        </div>
                    )}
                    
                    <div className="p-8 lg:p-10 flex flex-col flex-1 relative z-10">
                        {!image && (
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-deep/10 to-rose-pale flex items-center justify-center text-rose-deep mb-6 group-hover:bg-rose-deep group-hover:text-white group-hover:shadow-lg group-hover:shadow-rose-deep/20 transition-all duration-500">
                                {icon}
                            </div>
                        )}
                        
                        <h3 className="font-heading text-2xl font-extrabold text-navy mb-4 group-hover:text-rose-deep transition-all duration-300">
                            {title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-8 flex-1 group-hover:text-navy/80 transition-colors">
                            {description}
                        </p>
                        
                        <div className="pt-4 border-t border-gray-50 group-hover:border-rose-pale/30 transition-colors">
                            <div className="inline-flex items-center gap-3 text-sm font-bold text-rose-deep group-hover:gap-5 transition-all duration-300">
                                Explore Treatment Details 
                                <div className="w-8 h-8 rounded-full bg-rose-pale/50 flex items-center justify-center group-hover:bg-rose-deep group-hover:text-white transition-all duration-300">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Progress Indicator Highlight */}
                    <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r from-rose-pale via-rose-deep to-gold group-hover:w-full transition-all duration-700" />
                </div>
            </Link>
        </motion.div>
    );
}
