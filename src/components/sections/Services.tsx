'use client';

import { motion } from 'framer-motion';
import {
  Code,
  Monitor,
  Sparkles,
  MessageSquare,
  ShoppingBag,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import siteConfig, { Service } from '@/content/siteConfig';

const iconMap: Record<string, LucideIcon> = {
  'custom-software': Code,
  'web-design': Monitor,
  'brand-aesthetics': Sparkles,
  'bulk-sms': MessageSquare,
  'premium-shop': ShoppingBag,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-wider uppercase text-[#00d1ff] mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#174d70] leading-tight">
            Transforming Ideas into
            <br className="hidden sm:block" /> Digital Reality
          </h2>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {siteConfig.services.map((service: Service) => {
            const Icon = iconMap[service.id] || Code;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#174d70]/10 hover:border-[#00d1ff]/30"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#174d70]/5 flex items-center justify-center mb-5">
                  <Icon className="w-8 h-8 text-[#174d70]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900">
                  {service.title.en}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mt-3 leading-relaxed text-sm">
                  {service.description.en}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
