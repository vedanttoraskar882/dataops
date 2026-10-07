import React from 'react';
import { Search, ShieldCheck, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { DashboardPreview } from './DashboardPreview';

interface HeroProps {
  onRequestPilot: (triggerElement?: HTMLElement) => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestPilot }) => {
  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#platform');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Stagger animation container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 bg-navy-950 text-white overflow-hidden scroll-mt-20">
      {/* Background ambient mesh & decorative grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-cyan/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[350px] bg-brand-teal/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[300px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          variants={containerVariants}
          initial="visible"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Small label */}
          <motion.div variants={itemVariants} className="inline-block mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/90 border border-brand-cyan/30 text-xs font-semibold text-brand-cyan shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span>Data reliability for UK SMEs</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
          >
            Know when your business data is{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-teal-300 to-emerald-400">
              safe to use.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            DataOps Guardian is designed to uncover silent data failures, explain their business impact and control whether information should reach your reports, forecasts and AI workflows.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              type="button"
              onClick={(e) => onRequestPilot(e.currentTarget)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-navy-950 bg-gradient-to-r from-brand-cyan via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-teal-300 shadow-cyan-glow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 focus-visible:ring-brand-cyan"
            >
              Request a Pilot
            </button>
            <a
              href="#platform"
              onClick={handleExploreClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-navy-900/80 hover:bg-navy-850 border border-navy-700/90 hover:border-slate-500 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <span>Explore the Platform</span>
              <ArrowRight className="w-4 h-4 text-brand-cyan" />
            </a>
          </motion.div>

          {/* Supporting highlights */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-navy-850/80 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left"
          >
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-navy-900/70 border border-navy-800/80 hover:border-navy-700 transition-colors backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-brand-cyan/10 text-brand-cyan flex-shrink-0">
                <Search className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-200">
                Discover hidden dependencies.
              </span>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-navy-900/70 border border-navy-800/80 hover:border-navy-700 transition-colors backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-amber-400/10 text-amber-300 flex-shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-200">
                Detect unreliable data.
              </span>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-navy-900/70 border border-navy-800/80 hover:border-navy-700 transition-colors backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-brand-teal/10 text-teal-300 flex-shrink-0">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-200">
                Control release with business context.
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Illustrative Dashboard Preview with subtle entrance motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          className="mt-14 sm:mt-18"
        >
          <DashboardPreview />
        </motion.div>
      </div>
    </section>
  );
};
