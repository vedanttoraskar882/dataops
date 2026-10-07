import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onRequestPilot: (triggerElement?: HTMLElement) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestPilot }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'about', 'platform', 'how-it-works', 'pricing', 'faq'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Platform', href: '#platform', id: 'platform' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Market & Pricing', href: '#pricing', id: 'pricing' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/90 backdrop-blur-xl border-b border-navy-800/80 shadow-dark-card py-3'
          : 'bg-navy-950/60 backdrop-blur-md border-b border-navy-900/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Wordmark (clean typography, no top-left icon) */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center gap-2 text-white font-semibold text-lg sm:text-xl tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg py-1 px-1.5 transition-colors"
            aria-label="DataOps Guardian - Home"
          >
            <span className="font-extrabold tracking-tight text-white group-hover:text-slate-100 transition-colors">
              DataOps<span className="text-brand-cyan font-normal ml-1">Guardian</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan opacity-80 group-hover:scale-125 transition-transform" />
          </a>

          {/* Desktop Navigation with active pill indicator */}
          <nav className="hidden lg:flex items-center gap-1 bg-navy-900/60 border border-navy-800/80 rounded-full px-3 py-1.5 backdrop-blur-md shadow-subtle" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-navy-800/50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-pill"
                      className="absolute inset-0 bg-brand-cyan/20 border border-brand-cyan/40 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <button
              type="button"
              onClick={(e) => onRequestPilot(e.currentTarget)}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl text-navy-950 bg-gradient-to-r from-brand-cyan via-teal-300 to-emerald-400 hover:shadow-cyan-glow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 focus-visible:ring-brand-cyan"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-navy-900/80 border border-navy-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile menu dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden border-b border-navy-800 bg-navy-950/98 backdrop-blur-2xl px-5 pt-4 pb-7 overflow-hidden"
          >
            <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                    activeSection === link.id
                      ? 'bg-brand-cyan/15 text-brand-cyan font-semibold border border-brand-cyan/20'
                      : 'text-slate-200 hover:text-white hover:bg-navy-900'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-4 mt-2 border-t border-navy-850">
              <button
                type="button"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  onRequestPilot(e.currentTarget);
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold rounded-xl text-navy-950 bg-gradient-to-r from-brand-cyan to-brand-teal shadow-glow transition-all"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
