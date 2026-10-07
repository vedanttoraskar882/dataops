import React, { useState } from 'react';
import { 
  Plug, 
  Share2, 
  BrainCircuit, 
  AlertCircle, 
  TrendingDown, 
  ShieldCheck, 
  RefreshCw, 
  Clock, 
  Layers, 
  Info, 
  CheckCircle2, 
  XCircle, 
  Sparkles 
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: 'Connect and assess',
      desc: 'Identify critical workflows and configure the relevant connectors across databases, file stores, and pipelines.',
      icon: Plug,
      detail: 'Lightweight agentless connectors poll operational metadata without reading proprietary payload contents.'
    },
    {
      number: '02',
      title: 'Discover dependencies',
      desc: 'Map sources, jobs, files, datasets, dashboards and responsible owners into an interactive lineage graph.',
      icon: Share2,
      detail: 'Discovers implicit relationships between upstream vendor feeds and downstream Power BI semantic models.'
    },
    {
      number: '03',
      title: 'Learn expected behaviour',
      desc: 'Establish reliability baselines from historical operational activity, timing cycles, and schema signatures.',
      icon: BrainCircuit,
      detail: 'Learns typical delivery hours, batch sizes, column definitions, and SLA variance envelopes automatically.'
    },
    {
      number: '04',
      title: 'Detect and explain issues',
      desc: 'Identify delays, volume changes, schema drift and performance regressions, paired with supporting evidence.',
      icon: AlertCircle,
      detail: 'Translates ambiguous data breaks into clear forensic evidence with row count diffs and schema deltas.'
    },
    {
      number: '05',
      title: 'Assess business impact',
      desc: 'Determine which reports, departments, workflows and AI applications may be affected before stakeholders notice.',
      icon: TrendingDown,
      detail: 'Determines downstream stakeholders: CFO margin reports, logistics scheduling, and automated reorder agents.'
    },
    {
      number: '06',
      title: 'Control release and response',
      desc: 'Publish trusted data or apply review, restriction, quarantine and permitted recovery actions.',
      icon: ShieldCheck,
      detail: 'Suppresses automated refresh on dashboards and blocks flawed data from entering predictive models.'
    },
    {
      number: '07',
      title: 'Validate and update trust',
      desc: 'Check recovered output before release and update the trust passport and incident history.',
      icon: RefreshCw,
      detail: 'Generates new cryptographic Trust Tokens once reconciled and logs incident metrics to the Trust Passport.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-slate-50 text-navy-900 scroll-mt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/90 text-navy-900 text-xs font-bold uppercase tracking-wider mb-4 border border-slate-300/80">
            Operational Lifecycle
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-navy-950 leading-[1.15]">
            How DataOps Guardian operates.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            From initial metadata discovery to automated policy-gating, explore the seven-step reliability lifecycle planned for UK SME data environments.
          </p>
        </div>

        {/* 7 Steps Visual Timeline / Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStepIndex === idx;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'border-brand-teal shadow-card ring-1 ring-brand-teal/30 -translate-y-1'
                    : 'border-slate-200/80 shadow-subtle hover:border-slate-300 hover:shadow-card hover:-translate-y-0.5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-3xl font-black text-slate-300">
                      {step.number}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-cyan-500 text-navy-950 shadow-sm' : 'bg-cyan-50 border border-cyan-100 text-brand-teal'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-navy-950 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  <span>Step {idx + 1} of 7</span>
                  <span className="text-brand-teal font-medium">Click to focus</span>
                </div>
              </div>
            );
          })}

          {/* Active step quick summary panel in grid slot */}
          <div className="bg-gradient-to-br from-navy-950 to-navy-900 text-white rounded-3xl p-7 border border-navy-800 shadow-dark-card flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan block mb-2">
                Active Step Focus
              </span>
              <h4 className="text-xl font-bold text-white tracking-tight">
                {steps[activeStepIndex].title}
              </h4>
              <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                {steps[activeStepIndex].detail}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-navy-850 text-xs text-slate-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              <span>Lifecycle Stage {activeStepIndex + 1} of 7</span>
            </div>
          </div>
        </div>

        {/* Example Scenario Card - Interactive Deep-Dive */}
        <div className="mt-20 bg-navy-950 text-white rounded-3xl p-7 sm:p-11 border border-navy-800 shadow-dark-card relative overflow-hidden">
          {/* Subtle top indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-brand-cyan/30 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-5">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span>Illustrative Product Workflow Scenario</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                When a completed order feed still goes wrong.
              </h3>
              
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                A supplier changes an API field. The import finishes without a technical error, but only 57% of expected orders are loaded. DataOps Guardian is designed to detect the volume drop, identify the structural change, trace the affected fulfilment dashboard and hold unreliable data pending review and correction.
              </p>

              {/* Comparative Outcome Cards */}
              <div className="mt-8 pt-6 border-t border-navy-850 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-navy-900/80 border border-rose-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                    <XCircle className="w-4 h-4" />
                    <span>Traditional Monitoring</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed font-normal">
                    Job reported status 0 (Success). Incomplete data flows unnoticed into morning logistics dispatch, resulting in under-scheduled transport and missed deliveries.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-navy-900/80 border border-brand-cyan/40 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-brand-cyan font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>With DataOps Guardian</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed font-normal">
                    Adaptive contracts flag the 43% deficit and suppress publication before warehouse dispatch schedules update, notifying the data lead with root-cause context.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual simulation trace box */}
            <div className="lg:col-span-5 bg-navy-900/95 rounded-3xl p-6 border border-navy-700/80 shadow-card space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-navy-800 text-[11px] text-slate-400 font-sans">
                <span className="font-bold tracking-wider uppercase text-slate-300">SIMULATION AUDIT TRACE</span>
                <span className="text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                  PIPELINE ALERT
                </span>
              </div>

              <div className="space-y-2.5 text-[11px]">
                <div className="flex items-center gap-2.5 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                  <span>04:15:02 UTC - Ingestion finished (code 0)</span>
                </div>
                <div className="flex items-center gap-2.5 text-amber-300">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>04:15:08 UTC - Volume: 1,368 vs baseline 2,400</span>
                </div>
                <div className="flex items-center gap-2.5 text-brand-cyan">
                  <Layers className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" />
                  <span>04:15:10 UTC - Impact traced: Fulfilment BI</span>
                </div>
                <div className="p-3 rounded-xl bg-navy-950 border border-amber-500/30 text-amber-200 font-bold tracking-tight">
                  GATE: HOLD_PUBLICATION_PENDING_REVIEW
                </div>
              </div>

              <div className="pt-3 text-[11px] text-slate-400 font-sans italic border-t border-navy-800">
                Illustrative scenario from the planned product workflow, not an achieved customer result.
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-navy-850 flex items-center gap-2.5 text-xs text-slate-400">
            <Info className="w-4 h-4 text-brand-cyan flex-shrink-0" />
            <span>
              This walkthrough describes the intended automated gating logic under development for UK SME production environments.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
