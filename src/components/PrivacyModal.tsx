import React, { useEffect, useRef } from 'react';
import { X, Database, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerElement: HTMLElement | null;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({
  isOpen,
  onClose,
  triggerElement
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      if (triggerElement) {
        triggerElement.focus();
      }
      return;
    }

    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, triggerElement, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0"
            aria-hidden="true"
          />

          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200/90 shadow-dark-card p-7 sm:p-9 text-left my-8 z-10"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-navy-900 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
              aria-label="Close Privacy Notice modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-brand-teal">
                <Lock className="w-5 h-5" />
              </div>
              <h3 id="privacy-modal-title" className="text-xl font-extrabold text-navy-950 tracking-tight">
                Demonstration Data & Privacy Notice
              </h3>
            </div>

            <div className="mt-5 space-y-4 text-sm text-slate-600 leading-relaxed font-normal">
              <p>
                This website is an early concept preview and interactive architectural demonstration for <strong>DataOps Guardian Ltd.</strong>
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2">
                <h4 className="font-bold text-navy-950 text-xs uppercase tracking-wider flex items-center gap-2">
                  <Database className="w-4 h-4 text-brand-teal" />
                  Local-Only Data Storage
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Information entered into the &ldquo;Request a Pilot&rdquo; modal is saved solely inside this web browser’s local storage (key: <code className="font-mono text-slate-800 bg-slate-200/70 px-1 py-0.5 rounded">dataopsGuardianPilotSubmissions</code>). No data is transmitted across the internet, sent to third-party services, or received on any server.
                </p>
              </div>

              <p className="text-xs text-slate-500">
                You may inspect or clear stored demonstration submissions at any time directly through your web browser developer tools or settings.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl text-sm font-bold text-navy-950 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
