'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

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

/* Animated SVG illustration for the right column */
function HeroIllustration() {
  return (
    <motion.svg
      viewBox="0 0 520 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[520px]"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#174d70" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#00d1ff" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#174d70" />
          <stop offset="100%" stopColor="#0f3550" />
        </linearGradient>
        <linearGradient id="accentBar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00d1ff" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="cardGrad1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#174d70" />
          <stop offset="100%" stopColor="#00d1ff" />
        </linearGradient>
        <linearGradient id="cardGrad2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="cardGrad3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer glow circle */}
      <motion.circle
        cx="260" cy="240" r="200"
        fill="url(#bgGrad)"
        stroke="url(#accentBar)"
        strokeWidth="1"
        strokeOpacity="0.3"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '260px 240px' }}
      />

      {/* Inner orbit ring */}
      <motion.circle
        cx="260" cy="240" r="150"
        fill="none"
        stroke="#174d70"
        strokeWidth="1"
        strokeOpacity="0.2"
        strokeDasharray="6 10"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '260px 240px' }}
      />

      {/* Central laptop / monitor shape */}
      <rect x="170" y="150" width="180" height="120" rx="10" fill="url(#screenGrad)" />
      <rect x="178" y="158" width="164" height="104" rx="6" fill="#0d2e46" />
      {/* Screen content lines */}
      <rect x="186" y="166" width="80" height="6" rx="3" fill="url(#accentBar)" opacity="0.9" />
      <rect x="186" y="178" width="120" height="4" rx="2" fill="#ffffff" opacity="0.25" />
      <rect x="186" y="188" width="100" height="4" rx="2" fill="#ffffff" opacity="0.15" />
      <rect x="186" y="198" width="130" height="4" rx="2" fill="#ffffff" opacity="0.15" />
      <rect x="186" y="208" width="90" height="4" rx="2" fill="#ffffff" opacity="0.1" />
      {/* Code block accent */}
      <rect x="186" y="220" width="50" height="30" rx="4" fill="#00d1ff" opacity="0.15" />
      <rect x="192" y="226" width="30" height="4" rx="2" fill="#00d1ff" opacity="0.7" />
      <rect x="192" y="234" width="22" height="4" rx="2" fill="#00d1ff" opacity="0.5" />
      {/* Laptop base */}
      <path d="M155 275 L185 275 L185 280 L335 280 L335 275 L365 275 L370 290 L150 290 Z" fill="#174d70" opacity="0.6" />

      {/* Floating metric card — top right */}
      <FloatGroup delay={0} offsetY={-10}>
        <rect x="340" y="100" width="130" height="70" rx="14" fill="white" filter="url(#glow)" opacity="0.95" />
        <rect x="340" y="100" width="130" height="70" rx="14" fill="none" stroke="url(#cardGrad1)" strokeWidth="1.5" />
        <rect x="352" y="114" width="24" height="24" rx="6" fill="url(#cardGrad1)" />
        <text x="362" y="130" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">&lt;/&gt;</text>
        <text x="388" y="126" fontSize="10" fontWeight="700" fill="#174d70">Custom</text>
        <text x="388" y="140" fontSize="10" fontWeight="700" fill="#174d70">Software</text>
        <text x="352" y="158" fontSize="9" fill="#94a3b8">SME Solutions</text>
      </FloatGroup>

      {/* Floating metric card — left */}
      <FloatGroup delay={0.4} offsetY={8}>
        <rect x="48" y="190" width="130" height="70" rx="14" fill="white" filter="url(#glow)" opacity="0.95" />
        <rect x="48" y="190" width="130" height="70" rx="14" fill="none" stroke="url(#cardGrad2)" strokeWidth="1.5" />
        <rect x="60" y="203" width="24" height="24" rx="6" fill="url(#cardGrad2)" />
        <text x="72" y="219" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">W</text>
        <text x="96" y="216" fontSize="10" fontWeight="700" fill="#174d70">Web</text>
        <text x="96" y="230" fontSize="10" fontWeight="700" fill="#174d70">Design</text>
        <text x="60" y="248" fontSize="9" fill="#94a3b8">Local Experts</text>
      </FloatGroup>

      {/* Floating metric card — bottom right */}
      <FloatGroup delay={0.8} offsetY={-8}>
        <rect x="340" y="310" width="130" height="70" rx="14" fill="white" filter="url(#glow)" opacity="0.95" />
        <rect x="340" y="310" width="130" height="70" rx="14" fill="none" stroke="url(#cardGrad3)" strokeWidth="1.5" />
        <rect x="352" y="323" width="24" height="24" rx="6" fill="url(#cardGrad3)" />
        <text x="364" y="339" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">B</text>
        <text x="388" y="335" fontSize="10" fontWeight="700" fill="#174d70">Brand</text>
        <text x="388" y="349" fontSize="10" fontWeight="700" fill="#174d70">Strategy</text>
        <text x="352" y="368" fontSize="9" fill="#94a3b8">360° Branding</text>
      </FloatGroup>

      {/* Uptime badge — bottom center */}
      <FloatGroup delay={1.1} offsetY={6}>
        <rect x="185" y="315" width="150" height="60" rx="30" fill="white" filter="url(#glow)" opacity="0.95" />
        <rect x="185" y="315" width="150" height="60" rx="30" fill="none" stroke="url(#cardGrad1)" strokeWidth="1.5" />
        <circle cx="210" cy="345" r="5" fill="#22c55e" opacity="0.9" />
        <text x="222" y="340" fontSize="9" fill="#64748b" fontWeight="500">Uptime</text>
        <text x="222" y="354" fontSize="14" fontWeight="800" fill="#174d70">99.9%</text>
      </FloatGroup>

      {/* Orbiting dots */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.circle
          key={i}
          cx={260 + 200 * Math.cos((2 * Math.PI * i) / 6)}
          cy={240 + 200 * Math.sin((2 * Math.PI * i) / 6)}
          r="4"
          fill={i % 2 === 0 ? '#00d1ff' : '#a855f7'}
          opacity="0.5"
          animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </motion.svg>
  );
}

/* Helper component to animate SVG groups with floating motion */
function FloatGroup({
  delay,
  offsetY,
  children,
}: {
  delay: number;
  offsetY: number;
  children: React.ReactNode;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <motion.g
        animate={{ y: [0, offsetY, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut' }}
      >
        {children}
      </motion.g>
    </motion.g>
  );
}

export default function Hero() {
  return (
    <section className="relative -mt-20 pt-20 min-h-[90vh] flex items-center overflow-hidden">
      {/* Rich multi-stop gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f2a3f] via-[#174d70] to-[#0d1f2d]" />

      {/* Animated colour blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-5%] w-[55%] h-[55%] rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, #00d1ff 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], x: [0, -15, 0], y: [0, 15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute top-[30%] left-[40%] w-[35%] h-[35%] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* Subtle mesh grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#00d1ff 1px, transparent 1px), linear-gradient(90deg, #00d1ff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column — Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-7 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d1ff]/30 bg-[#00d1ff]/10 text-[#00d1ff] text-xs font-semibold tracking-wide mx-auto lg:mx-0"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Innovative Digital Solutions
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold leading-[1.1] tracking-tight"
            >
              <span className="text-white">Building a </span>
              <span
                className="inline-block"
                style={{
                  background: 'linear-gradient(135deg, #00d1ff 0%, #a855f7 50%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Bold &amp; Credible
              </span>
              <br />
              <span className="text-white">Digital Presence</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-slate-300 max-w-lg mx-auto lg:mx-0 leading-relaxed"
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
                  className="hero-cta-primary relative inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white rounded-full overflow-hidden shadow-2xl shadow-[#00d1ff]/30 transition-shadow duration-300 hover:shadow-[#a855f7]/50"
                >
                  <Sparkles className="w-4 h-4" />
                  Start Your Project
                </Link>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/#services"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white rounded-full transition-all duration-300 hover:bg-white/10"
                  style={{
                    border: '2px solid transparent',
                    backgroundImage:
                      'linear-gradient(#174d70, #174d70), linear-gradient(135deg, #00d1ff, #a855f7, #ec4899)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                  }}
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust stats */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-6 justify-center lg:justify-start pt-2"
            >
              {[
                { value: '50+', label: 'Projects' },
                { value: '99.9%', label: 'Uptime' },
                { value: '100%', label: 'Satisfaction' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center lg:text-left">
                  <p
                    className="text-xl font-extrabold"
                    style={{
                      background: 'linear-gradient(135deg, #00d1ff, #a855f7)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {value}
                  </p>
                  <p className="text-xs text-slate-400">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column — SVG Illustration */}
          <div className="relative flex items-center justify-center min-h-[420px] lg:min-h-[500px]">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
