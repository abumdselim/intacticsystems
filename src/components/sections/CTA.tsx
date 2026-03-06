'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#174d70] to-[#0d3550] shadow-2xl py-16 px-8"
        >
          {/* Decorative blurred shape */}
          <div className="absolute -top-10 -right-10 size-64 rounded-full bg-[#00d1ff] opacity-20 blur-3xl" />

          {/* Content */}
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to Transform Your
              <br className="hidden sm:block" /> Digital Presence?
            </h2>

            <p className="text-blue-100 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s build something bold, credible, and tailored
              specifically for your business growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-4">
              {/* Primary Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-[#00d1ff] text-[#0a2538] font-bold px-8 py-3.5 rounded-full transition-transform"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Secondary Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center border-2 border-white/20 text-white px-8 py-3.5 rounded-full transition-colors hover:bg-white/10"
                >
                  Explore Shop
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
