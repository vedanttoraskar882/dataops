import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FooterProps {
  onRequestPilot: (triggerElement?: HTMLElement) => void;
  onOpenPrivacy: (triggerElement?: HTMLElement) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestPilot, onOpenPrivacy }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-850 relative overflow-hidden">
      {/* Decorative ambient bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan via-teal-400 to-indigo-500 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center">
              <span className="font-extrabold text-xl tracking-tight text-white">
                DataOps<span className="text-brand-cyan font-normal ml-1">Guardian Ltd.</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
              Designed to help SMEs build confidence in the data behind business decisions.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-navy-900 text-brand-cyan border border-navy-800">
                Early Concept Preview & Demonstration
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Page Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, '#home')}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, '#about')}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#platform"
                  onClick={(e) => handleLinkClick(e, '#platform')}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  Platform
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => handleLinkClick(e, '#how-it-works')}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => handleLinkClick(e, '#pricing')}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  Market & Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleLinkClick(e, '#faq')}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Action / Pilot Area */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-4">
            <button
              type="button"
              onClick={(e) => onRequestPilot(e.currentTarget)}
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl text-navy-950 bg-gradient-to-r from-brand-cyan via-teal-300 to-emerald-400 hover:shadow-cyan-glow transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-navy-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
          <p>
            &copy; {currentYear} DataOps Guardian Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={(e) => onOpenPrivacy(e.currentTarget)}
              className="hover:text-slate-300 underline underline-offset-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-cyan"
            >
              Demonstration Privacy Notice
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
