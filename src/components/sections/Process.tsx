'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: Lightbulb,
    title: 'Discovery & Strategy',
    description:
      'We analyze your business goals, target audience, and technical requirements.',
  },
  {
    id: 2,
    icon: Code2,
    title: 'Design & Development',
    description:
      'Building the architecture with modern tech stacks and aesthetic UI/UX.',
  },
  {
    id: 3,
    icon: Rocket,
    title: 'Testing & Delivery',
    description:
      'Rigorous QA testing followed by a smooth deployment and ongoing support.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 0.3 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Process() {
  return (
    <section className="bg-gray-50/50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-bold tracking-wider uppercase text-[#00d1ff] mb-3">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#174d70] leading-tight">
            Our Engineering Process
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-0"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div
                key={step.id}
                className="flex flex-col lg:flex-row items-center"
              >
                {/* Step Card */}
                <motion.div
                  variants={stepVariants}
                  className="group flex flex-col items-center text-center max-w-[280px]"
                >
                  {/* Circular Icon */}
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#174d70] flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[#174d70] group-hover:shadow-lg group-hover:shadow-[#174d70]/20">
                    <Icon className="w-7 h-7 text-[#174d70] transition-colors duration-300 group-hover:text-white" />
                  </div>

                  {/* Step Number */}
                  <span className="text-xs font-bold text-[#00d1ff] tracking-wider uppercase mb-2">
                    Step {step.id}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Connecting Dashed Line */}
                {!isLast && (
                  <>
                    {/* Desktop: horizontal dashed line */}
                    <motion.div
                      variants={lineVariants}
                      className="hidden lg:block w-24 xl:w-32 border-t-2 border-dashed border-gray-300 mx-6 mt-8 origin-left"
                    />
                    {/* Mobile: vertical dashed line */}
                    <motion.div
                      variants={lineVariants}
                      className="lg:hidden h-12 border-l-2 border-dashed border-gray-300 my-2 origin-top"
                      style={{ scaleY: 1 }}
                    />
                  </>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
