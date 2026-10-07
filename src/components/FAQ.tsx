import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqItems = [
    {
      question: 'What is DataOps Guardian?',
      answer: 'A planned SME-focused data reliability platform that connects monitoring, business impact and policy-controlled data release.'
    },
    {
      question: 'Who is it designed for?',
      answer: 'UK SMEs and mid-market organisations, typically with approximately 50–500 employees, plus MSPs and BI consultancies.'
    },
    {
      question: 'How is this different from ordinary monitoring?',
      answer: 'Its intended focus extends from whether a job ran to whether the resulting data is trustworthy and appropriate for business use.'
    },
    {
      question: 'Which systems are covered by the product plan?',
      answer: 'SQL Server, Oracle, SSIS, Python workflows, APIs, Excel/CSV processes, Power BI and cloud storage, with coverage developed progressively.'
    },
    {
      question: 'What are adaptive data contracts?',
      answer: 'Reliability expectations learned from historical patterns such as volume, schema, freshness and runtime.'
    },
    {
      question: 'What is a Trust Passport?',
      answer: 'An evolving record of a pipeline’s ownership, dependencies, reliability expectations, incidents, recovery procedures and AI readiness.'
    },
    {
      question: 'How does the AI readiness gate help?',
      answer: 'It is designed to restrict unreliable input data before use in AI, forecasting and automation workflows.'
    },
    {
      question: 'Does it automatically repair every problem?',
      answer: 'No. Advanced recovery is a roadmap capability governed by policies, approval requirements and validation.'
    },
    {
      question: 'How much does audit and onboarding cost?',
      answer: '£1,200 one-off, with onboarding and implementation included.'
    },
    {
      question: 'When is Premium planned?',
      answer: 'From Year 2 of the business-plan timeline, at £950 per customer per month.'
    },
    {
      question: 'Is the full platform already operational?',
      answer: 'The plan describes a concept preview and staged development. This landing page presents the proposed product and collects pilot interest.'
    },
    {
      question: 'What happens when I submit the pilot form?',
      answer: 'This frontend demonstration saves your details only in this browser’s localStorage. It does not send them to the company.'
    }
  ];

  const filteredItems = searchQuery.trim() === ''
    ? faqItems
    : faqItems.filter(item => 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-slate-50 text-navy-900 scroll-mt-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/90 text-navy-900 text-xs font-bold uppercase tracking-wider mb-4 border border-slate-300/80">
            Questions & Answers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-navy-950 leading-[1.15]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-slate-600 font-normal">
            Factual clarifications regarding the DataOps Guardian concept, roadmap, pricing, and this frontend demonstration.
          </p>

          {/* Quick Filter Input */}
          <div className="mt-8 relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. contracts, passport, pricing)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 text-sm text-navy-950 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-teal transition-all shadow-subtle"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-navy-950"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5" role="region" aria-label="Frequently Asked Questions Accordion">
          {filteredItems.map((item) => {
            const originalIndex = faqItems.findIndex(fi => fi.question === item.question);
            const isOpen = openIndex === originalIndex;
            const contentId = `faq-content-${originalIndex}`;
            const headerId = `faq-header-${originalIndex}`;

            return (
              <div
                key={item.question}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-subtle hover:border-slate-300 transition-all duration-200 overflow-hidden"
              >
                <h3>
                  <button
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleItem(originalIndex)}
                    className="w-full text-left px-6 sm:px-7 py-5 flex items-center justify-between gap-4 font-bold text-navy-950 text-base sm:text-lg hover:bg-slate-50/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-teal transition-colors"
                  >
                    <span className="flex items-center gap-3.5 min-w-0">
                      <span className="text-xs font-mono font-bold text-slate-400 flex-shrink-0">
                        {String(originalIndex + 1).padStart(2, '0')}.
                      </span>
                      <span className="truncate sm:whitespace-normal">{item.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-brand-teal' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={contentId}
                      role="region"
                      aria-labelledby={headerId}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden border-t border-slate-100"
                    >
                      <div className="px-6 sm:px-7 pb-6 pt-3 text-slate-600 text-sm leading-relaxed font-normal">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {filteredItems.length === 0 && (
            <div className="text-center py-10 bg-white rounded-3xl border border-slate-200 text-slate-500 text-sm">
              No questions found matching &ldquo;{searchQuery}&rdquo;.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
