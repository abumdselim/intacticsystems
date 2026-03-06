'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How long does it take to build a custom website or software?',
    answer:
      'Timelines vary based on complexity. A standard business website takes 2-3 weeks, while custom software for SMEs may take 1-3 months.',
  },
  {
    question: 'Do you provide ongoing maintenance and support?',
    answer:
      'Yes, we offer monthly maintenance packages to ensure your digital presence remains secure, fast, and up-to-date.',
  },
  {
    question: 'Do you work with local businesses in Bangladesh?',
    answer:
      'Absolutely! We specialize in empowering local professionals, SMEs, and offline businesses to build a credible digital footprint.',
  },
  {
    question: 'What is your payment structure?',
    answer:
      'We typically work with a milestone-based structure: an initial deposit to start, followed by payments tied to specific deliverables.',
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border-b border-gray-200 py-4"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={`text-base font-semibold transition-colors duration-200 ${
            isOpen ? 'text-[#174d70]' : 'text-gray-800'
          }`}
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 text-gray-500"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-bold tracking-wider uppercase text-[#00d1ff] mb-3">
            Got Questions?
          </p>
          <h2 className="text-3xl font-bold text-[#174d70]">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <div>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
