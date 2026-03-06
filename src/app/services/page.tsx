'use client';

import { motion } from 'framer-motion';
import {
  Code,
  Monitor,
  Sparkles,
  MessageSquare,
  ShoppingBag,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import siteConfig from '@/content/siteConfig';

const iconMap: Record<string, React.ElementType> = {
  'custom-software': Code,
  'web-design': Monitor,
  'brand-aesthetics': Sparkles,
  'bulk-sms': MessageSquare,
  'premium-shop': ShoppingBag,
};

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen pt-32 pb-24">
      {/* Header */}
      <div className="text-center px-4">
        <p className="text-[#00d1ff] font-bold text-sm tracking-widest uppercase">
          What We Do
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#174d70] mt-4 max-w-3xl mx-auto">
          Empowering Businesses with Bold Digital Solutions
        </h1>
      </div>

      {/* Zig-Zag Services */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 space-y-28">
        {siteConfig.services.map((service, index) => {
          const Icon = iconMap[service.id] || Code;
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={service.id}
              className={`flex flex-col gap-16 items-center ${
                isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Visual Block */}
              <motion.div
                initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full md:w-1/2"
              >
                <div className="relative bg-gradient-to-br from-[#174d70] to-[#0d3550] rounded-3xl shadow-2xl aspect-square md:aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#00d1ff] blur-3xl opacity-20" />
                  <Icon className="w-32 h-32 text-white/50" />
                </div>
              </motion.div>

              {/* Text Block */}
              <motion.div
                initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="w-full md:w-1/2"
              >
                <h2 className="text-3xl font-bold text-[#174d70] mb-4">
                  {service.title.en}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {service.description.en}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-[#174d70] text-[#174d70] px-8 py-3 rounded-full font-semibold transition-all hover:bg-[#174d70] hover:text-white"
                >
                  Start this Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
