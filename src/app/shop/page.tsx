'use client';

import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Star,
  Layout,
  Search,
  Palette,
  Globe,
  MessageSquare,
  FileCode,
} from 'lucide-react';

const products = [
  {
    id: 'nextjs-ui-kit',
    name: 'Next.js Corporate UI Kit',
    description:
      'A comprehensive collection of 50+ production-ready components built with Next.js and Tailwind CSS.',
    price: 49,
    rating: 4.9,
    icon: Layout,
  },
  {
    id: 'seo-audit',
    name: 'Complete SEO Audit',
    description:
      'In-depth website SEO analysis with actionable recommendations and a detailed report.',
    price: 199,
    rating: 4.8,
    icon: Search,
  },
  {
    id: 'brand-logo',
    name: 'Brand Logo Package',
    description:
      'Professional logo design with 3 concepts, unlimited revisions, and full brand guidelines.',
    price: 149,
    rating: 5.0,
    icon: Palette,
  },
  {
    id: 'domain-hosting',
    name: 'Domain Setup & Hosting',
    description:
      'One-year premium hosting with domain registration, SSL certificate, and email setup.',
    price: 99,
    rating: 4.7,
    icon: Globe,
  },
  {
    id: 'sms-marketing',
    name: 'SMS Marketing Starter',
    description:
      'Ready-to-use bulk SMS campaign toolkit with templates and analytics dashboard access.',
    price: 79,
    rating: 4.6,
    icon: MessageSquare,
  },
  {
    id: 'landing-page',
    name: 'Landing Page Template',
    description:
      'High-converting responsive landing page template with A/B testing setup and analytics.',
    price: 39,
    rating: 4.9,
    icon: FileCode,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

export default function ShopPage() {
  return (
    <main className="bg-gray-50 min-h-screen pt-32 pb-24">
      {/* Header */}
      <div className="text-center px-4">
        <p className="text-[#00d1ff] font-bold text-sm tracking-wider uppercase">
          Digital Assets &amp; Packages
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#174d70] mt-4">
          Premium Tools for Your Business
        </h1>
      </div>

      {/* Product Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <motion.div
                key={product.id}
                variants={cardVariants}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl"
              >
                {/* Card Visual */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 aspect-video flex items-center justify-center">
                  <Icon className="w-12 h-12 text-gray-400" />
                </div>

                {/* Card Content */}
                <div>
                  <h3 className="font-bold text-xl text-[#174d70] mt-4 px-6">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 px-6 mt-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 px-6 mt-3">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-500 font-medium">
                      {product.rating}
                    </span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="flex justify-between items-center px-6 py-4 mt-4 border-t border-gray-50">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <button className="flex items-center gap-2 bg-[#174d70] text-white px-4 py-2 rounded-lg font-medium transition-colors hover:bg-[#00d1ff] hover:text-[#0a2538]">
                    <ShoppingCart className="w-4 h-4" />
                    Buy Now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </main>
  );
}
