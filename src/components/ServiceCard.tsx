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
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link href={href} className="group block h-full">
                <div className="h-full bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-rose-pale transition-all duration-500 hover:-translate-y-2 flex flex-col">
                    {image && (
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image 
                                src={image} 
                                alt={title} 
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    )}
                    <div className="p-6 lg:p-8 flex flex-col flex-1">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-deep/10 to-rose-pale flex items-center justify-center text-rose-deep mb-5 group-hover:bg-rose-deep group-hover:text-white transition-all duration-300">
                            {icon}
                        </div>
                        <h3 className="font-heading text-xl font-bold text-navy mb-3 group-hover:text-rose-deep transition-colors">
                            {title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                            {description}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-bold text-rose-deep group-hover:translate-x-2 transition-transform duration-300">
                            Learn More <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
