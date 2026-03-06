'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function FloatingCard({
  className,
  delay,
  children,
}: {
  className?: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 4 + delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#174d70]/[0.03] via-transparent to-[#00d1ff]/[0.05]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column — Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-center lg:text-left"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold leading-[1.1] tracking-tight"
            >
              <span className="text-[#174d70]">Building a </span>
              <span className="text-[#00d1ff]">Bold &amp; Credible</span>
              <br />
              <span className="text-[#174d70]">Digital Presence</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-gray-500 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              We deliver Custom Software, Professional Web Design, and
              360° Brand Strategy — crafted to help ambitious businesses
              stand out and scale confidently.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2"
            >
              {/* Primary CTA */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/#contact"
                  className="inline-flex items-center px-8 py-3.5 text-sm font-semibold text-white bg-[#174d70] rounded-full shadow-xl shadow-[#174d70]/20 transition-colors hover:bg-[#174d70]/90"
                >
                  Start Your Project
                </Link>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/#services"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#174d70] border-2 border-[#174d70] rounded-full transition-colors hover:bg-[#174d70]/5"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column — Visual */}
          <div className="relative hidden lg:flex items-center justify-center min-h-[500px]">
            {/* Glow ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute w-[380px] h-[380px] rounded-full border border-[#00d1ff]/20 bg-gradient-to-br from-[#00d1ff]/[0.06] to-transparent"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.15, ease: 'easeOut' }}
              className="absolute w-[280px] h-[280px] rounded-full border border-[#174d70]/10 bg-gradient-to-tr from-[#174d70]/[0.04] to-transparent"
            />

            {/* Floating cards */}
            <FloatingCard
              delay={0.3}
              className="absolute top-8 right-8"
            >
              <div className="px-5 py-4 rounded-2xl bg-white/80 backdrop-blur-lg shadow-xl shadow-[#174d70]/10 border border-[#174d70]/10">
                <div className="w-8 h-8 rounded-lg bg-[#174d70] mb-2 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">&lt;/&gt;</span>
                </div>
                <p className="text-xs font-semibold text-[#174d70]">Custom Software</p>
                <p className="text-[10px] text-gray-400 mt-0.5">SME Solutions</p>
              </div>
            </FloatingCard>

            <FloatingCard
              delay={0.5}
              className="absolute top-1/2 -translate-y-1/2 -left-2"
            >
              <div className="px-5 py-4 rounded-2xl bg-white/80 backdrop-blur-lg shadow-xl shadow-[#00d1ff]/10 border border-[#00d1ff]/15">
                <div className="w-8 h-8 rounded-lg bg-[#00d1ff] mb-2 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">W</span>
                </div>
                <p className="text-xs font-semibold text-[#174d70]">Web Design</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Local Experts</p>
              </div>
            </FloatingCard>

            <FloatingCard
              delay={0.7}
              className="absolute bottom-12 right-16"
            >
              <div className="px-5 py-4 rounded-2xl bg-white/80 backdrop-blur-lg shadow-xl shadow-[#174d70]/10 border border-[#174d70]/10">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#174d70] to-[#00d1ff] mb-2 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">B</span>
                </div>
                <p className="text-xs font-semibold text-[#174d70]">Brand Strategy</p>
                <p className="text-[10px] text-gray-400 mt-0.5">360° Branding</p>
              </div>
            </FloatingCard>

            <FloatingCard
              delay={0.9}
              className="absolute bottom-32 left-8"
            >
              <div className="px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-lg shadow-xl shadow-[#00d1ff]/10 border border-[#00d1ff]/15">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] font-medium text-gray-500">Live & Scaling</span>
                </div>
                <p className="text-lg font-bold text-[#174d70] mt-1">99.9%</p>
                <p className="text-[10px] text-gray-400">Uptime Guaranteed</p>
              </div>
            </FloatingCard>

            {/* Decorative dots */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[420px] h-[420px]"
            >
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-[#00d1ff]/30"
                  style={{
                    top: `${50 + 48 * Math.sin((2 * Math.PI * i) / 8)}%`,
                    left: `${50 + 48 * Math.cos((2 * Math.PI * i) / 8)}%`,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
