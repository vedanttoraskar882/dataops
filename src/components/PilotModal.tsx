import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, AlertTriangle, Shield, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PilotFormData, FormErrors } from '../types';
import { savePilotSubmission, isValidEmail, isValidPhoneNumber } from '../utils/storage';

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerElement: HTMLElement | null;
}

export const PilotModal: React.FC<PilotModalProps> = ({
  isOpen,
  onClose,
  triggerElement
}) => {
  const [formData, setFormData] = useState<PilotFormData>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    organisationName: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [storageError, setStorageError] = useState<string | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Manage focus, Escape key and focus trapping
  useEffect(() => {
    if (!isOpen) {
      if (triggerElement) {
        triggerElement.focus();
      }
      return;
    }

    const timer = setTimeout(() => {
      firstInputRef.current?.focus();
    }, 100);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Focus trap within modal
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

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter your phone number.';
    } else if (!isValidPhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number (digits, spaces, hyphens, and optional country code).';
    }

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Please enter your work email address.';
    } else if (!isValidEmail(formData.emailAddress)) {
      newErrors.emailAddress = 'Please enter a valid email address.';
    }

    if (!formData.organisationName.trim()) {
      newErrors.organisationName = 'Please enter your organisation name.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    if (storageError) {
      setStorageError(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setStorageError(null);
    setSaveSuccess(false);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = savePilotSubmission(formData);

      if (result.success) {
        setSaveSuccess(true);
        // Reset form fields ONLY after storage succeeds
        setFormData({
          fullName: '',
          phoneNumber: '',
          emailAddress: '',
          organisationName: ''
        });
        setErrors({});
      } else {
        // Retain entered form values on error
        setStorageError(result.errorMessage || 'Unable to save to browser storage.');
      }
    } catch (err) {
      setStorageError(err instanceof Error ? err.message : 'Unexpected storage failure.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pilot-modal-title"
          aria-describedby="pilot-modal-desc"
        >
          {/* Animated Backdrop click-to-dismiss */}
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
            {/* Close Button */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-navy-900 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
              aria-label="Close Request a Pilot modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-brand-teal">
                <Shield className="w-5 h-5" />
              </div>
              <h3 id="pilot-modal-title" className="text-2xl font-extrabold text-navy-950 tracking-tight">
                Request a Pilot
              </h3>
            </div>

            <p id="pilot-modal-desc" className="text-sm text-slate-600 mb-6 leading-relaxed font-normal">
              Tell us about your organisation and interest in data reliability.
            </p>

            {/* Success Alert Banner */}
            {saveSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm leading-snug">
                  <strong className="block font-bold">Saved successfully</strong>
                  <span className="font-normal">Your pilot interest has been saved in this browser.</span>
                </div>
              </motion.div>
            )}

            {/* Storage Error Alert Banner */}
            {storageError && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3"
              >
                <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm leading-snug">
                  <strong className="block font-bold">Storage notice</strong>
                  <span className="font-normal">{storageError}</span>
                </div>
              </motion.div>
            )}

            {/* Pilot Form */}
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Full Name <span className="text-rose-600">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  className={`w-full px-4 py-3 rounded-2xl border text-sm text-navy-950 bg-white transition-all focus:outline-none focus:ring-2 focus:ring-brand-teal ${
                    errors.fullName ? 'border-rose-300 bg-rose-50/20' : 'border-slate-300 hover:border-slate-400'
                  }`}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="mt-1.5 text-xs text-rose-600 font-medium">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Phone Number <span className="text-rose-600">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={!!errors.phoneNumber}
                  aria-describedby={errors.phoneNumber ? "phoneNumber-error" : undefined}
                  className={`w-full px-4 py-3 rounded-2xl border text-sm text-navy-950 bg-white transition-all focus:outline-none focus:ring-2 focus:ring-brand-teal ${
                    errors.phoneNumber ? 'border-rose-300 bg-rose-50/20' : 'border-slate-300 hover:border-slate-400'
                  }`}
                />
                {errors.phoneNumber && (
                  <p id="phoneNumber-error" className="mt-1.5 text-xs text-rose-600 font-medium">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="emailAddress"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Email Address <span className="text-rose-600">*</span>
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={!!errors.emailAddress}
                  aria-describedby={errors.emailAddress ? "emailAddress-error" : undefined}
                  className={`w-full px-4 py-3 rounded-2xl border text-sm text-navy-950 bg-white transition-all focus:outline-none focus:ring-2 focus:ring-brand-teal ${
                    errors.emailAddress ? 'border-rose-300 bg-rose-50/20' : 'border-slate-300 hover:border-slate-400'
                  }`}
                />
                {errors.emailAddress && (
                  <p id="emailAddress-error" className="mt-1.5 text-xs text-rose-600 font-medium">
                    {errors.emailAddress}
                  </p>
                )}
              </div>

              {/* Organisation Name */}
              <div>
                <label
                  htmlFor="organisationName"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Organisation Name <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  id="organisationName"
                  name="organisationName"
                  value={formData.organisationName}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={!!errors.organisationName}
                  aria-describedby={errors.organisationName ? "organisationName-error" : undefined}
                  className={`w-full px-4 py-3 rounded-2xl border text-sm text-navy-950 bg-white transition-all focus:outline-none focus:ring-2 focus:ring-brand-teal ${
                    errors.organisationName ? 'border-rose-300 bg-rose-50/20' : 'border-slate-300 hover:border-slate-400'
                  }`}
                />
                {errors.organisationName && (
                  <p id="organisationName-error" className="mt-1.5 text-xs text-rose-600 font-medium">
                    {errors.organisationName}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:text-navy-950 hover:bg-slate-100 transition-colors"
                >
                  Close
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-navy-950 bg-gradient-to-r from-brand-cyan to-brand-teal hover:from-cyan-300 hover:to-teal-300 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal disabled:opacity-60"
                >
                  <span>{isSubmitting ? 'Saving...' : 'Save Pilot Interest'}</span>
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
