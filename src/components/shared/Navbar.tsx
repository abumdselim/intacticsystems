'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import siteConfig, { NavItem } from '@/content/siteConfig';

type Lang = 'en' | 'bn';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Lang>('en');

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'bn' : 'en'));
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = siteConfig.navItems;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#174d70] shadow-md ${
          scrolled
            ? 'backdrop-blur-md shadow-lg'
            : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="Intactic Systems"
                width={140}
                height={40}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((item: NavItem) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors hover:text-cyan-400"
                >
                  {item.label[lang]}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Toggle */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white rounded-lg transition-colors hover:text-cyan-400"
                aria-label="Toggle language"
              >
                <Globe className="w-4 h-4" />
                <span>{lang === 'en' ? 'EN' : 'BN'}</span>
                <span className="text-white/40">/ {lang === 'en' ? 'BN' : 'EN'}</span>
              </button>

              {/* CTA Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/#contact"
                  className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-[#174d70] bg-white rounded-full shadow-lg transition-colors hover:bg-cyan-400 hover:text-white"
                >
                  {lang === 'en' ? 'Get a Quote' : 'কোটেশন নিন'}
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 p-2 rounded-xl text-white hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-40 h-full w-[300px] bg-white/80 backdrop-blur-xl shadow-2xl border-l border-white/30 lg:hidden"
            >
              <div className="flex flex-col h-full pt-24 px-6 pb-8">
                {/* Nav Links */}
                <div className="flex flex-col gap-1">
                  {navLinks.map((item: NavItem, i: number) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-base font-medium text-[#174d70] rounded-xl transition-colors hover:bg-[#174d70]/5"
                      >
                        {item.label[lang]}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Mobile Actions */}
                <div className="flex flex-col gap-3 pt-6 border-t border-[#174d70]/10">
                  {/* Language Toggle */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    onClick={toggleLang}
                    className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#174d70] rounded-xl transition-colors hover:bg-[#174d70]/5"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{lang === 'en' ? 'EN' : 'BN'}</span>
                    <span className="text-[#174d70]/40">/ {lang === 'en' ? 'BN' : 'EN'}</span>
                  </motion.button>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link
                      href="/#contact"
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-center px-6 py-3 text-sm font-semibold text-white bg-[#174d70] rounded-full shadow-lg shadow-[#174d70]/25 transition-colors hover:bg-[#174d70]/90"
                    >
                      {lang === 'en' ? 'Get a Quote' : 'কোটেশন নিন'}
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
