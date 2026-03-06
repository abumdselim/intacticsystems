'use client';

import { motion } from 'framer-motion';
import { Triangle, Code2, Palette, Database, Server } from 'lucide-react';

const techStack = [
  { name: 'Next.js', icon: Triangle },
  { name: 'React', icon: Code2 },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'Prisma ORM', icon: Database },
  { name: 'Supabase', icon: Server },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function TechStack() {
  return (
    <section className="bg-gray-50 border-t border-b border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs sm:text-sm font-bold tracking-wider uppercase text-gray-500 mb-10"
        >
          Powered by Industry-Leading Technologies
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {techStack.map(({ name, icon: Icon }) => (
            <motion.div
              key={name}
              variants={itemVariants}
              className="group flex flex-col items-center gap-3 py-6 px-4 rounded-2xl transition-colors hover:bg-white hover:shadow-sm"
            >
              <Icon className="w-8 h-8 text-gray-400 transition-all duration-300 group-hover:text-[#00d1ff] group-hover:scale-110" />
              <span className="text-sm font-medium text-gray-400 transition-colors duration-300 group-hover:text-[#174d70]">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
