import React, { useState } from 'react';
import { 
  Network, 
  FileCode2, 
  TrendingDown, 
  FileCheck2, 
  ShieldAlert, 
  Wrench, 
  Layers, 
  Sparkles, 
  Info 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Platform: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'initial' | 'later' | 'roadmap'>('all');
  const [selectedModuleId, setSelectedModuleId] = useState<string>('control-graph');

  const modules = [
    {
      id: 'control-graph',
      stage: 'Initial development',
      badgeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
      category: 'initial',
      title: 'Legacy Data Reliability Control Graph',
      icon: Network,
      description:
        'Maps relationships between systems, pipelines, datasets, dashboards, owners and business processes to show where data originates, what depends on it and the current reliability conditions.',
      states: ['Trusted', 'Stale', 'Degraded', 'Quarantined', 'AI-blocked', 'Safe-to-publish'],
      keyDetail: 'Visualises complete lineage and highlights where broken assumptions cascade across reports.',
      sampleSnippet: 'GRAPH::TRACE [MSSQL_Orders] → [Aggregator_ETL] → [BI_Fulfilment]'
    },
    {
      id: 'adaptive-contracts',
      stage: 'Later development',
      badgeColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
      category: 'later',
      title: 'Behaviour-Mined Adaptive Data Contracts',
      icon: FileCode2,
      description:
        'Designed to learn expected behaviour from historical pipeline activity. Analyses schema structure, record volumes, freshness cycles, runtimes, file arrivals and API payloads to identify deviations from normal operation.',
      contractNote:
        'A data contract is a set of expectations about how a workflow’s data should behave—established automatically rather than via rigid, manual maintenance.',
      keyDetail: 'Automatically flags unexpected null spikes, column alterations, and atypical arrival times.',
      sampleSnippet: 'CONTRACT::VERIFY expected_rows(2400 ± 15%) & schema_checksum(0x9B)'
    },
    {
      id: 'risk-propagation',
      stage: 'Later development',
      badgeColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
      category: 'later',
      title: 'Business-Risk Propagation Engine',
      icon: TrendingDown,
      description:
        'Connects technical data issues directly to affected reports, departments, workflows, revenue-related processes and compliance activities, helping teams prioritise incidents by business importance.',
      keyDetail: 'Translates a column type mismatch into: "CFO monthly margin report delayed".',
      sampleSnippet: 'PROPAGATE::SEV-1 [Column_Type_Mismatch] → IMPACT: [Finance_Ledger_Q3]'
    },
    {
      id: 'trust-passport',
      stage: 'Later development',
      badgeColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
      category: 'later',
      title: 'Dynamic Trust Passport',
      icon: FileCheck2,
      description:
        'Maintains an evolving record of each important pipeline or dataset. Includes ownership, source systems, dependencies, refresh schedules, quality expectations, incident history, recovery procedures and AI readiness.',
      keyDetail: 'Provides an auditable pedigree so data consumers can inspect the health history of any dataset.',
      sampleSnippet: 'PASSPORT::AUDIT id:pipe_94 | uptime:99.2% | owner:Lead_DataOps'
    },
    {
      id: 'ai-gate',
      stage: 'Later development',
      badgeColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
      category: 'later',
      title: 'AI Readiness and Decision-Safety Gate',
      icon: ShieldAlert,
      description:
        'Designed to assess freshness, completeness, schema stability, ownership, auditability and reliability history before data reaches AI, forecasting or automation systems, restricting unsuitable data until required trust conditions are met.',
      keyDetail: 'Guards predictive demand models and LLM contexts from hallucinating on garbage inputs.',
      sampleSnippet: 'GATE::EVALUATE [Forecast_FeatureStore] → DECISION: RESTRICT_UNSUITABLE'
    },
    {
      id: 'self-healing',
      stage: 'Advanced roadmap',
      badgeColor: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
      category: 'roadmap',
      title: 'Business-Gated Self-Healing',
      icon: Wrench,
      description:
        'Designed to support controlled recovery through pipeline restarts, checkpoint recovery, reconciliation, quarantine and escalation. Recovery actions are subject to policies and human approval where required, and repaired output must be validated before release.',
      keyDetail: 'Ensures remediation never acts as an unverified black box; human oversight remains primary.',
      sampleSnippet: 'RECOVER::POLICY [Reconciliation_Run] REQUIRES_HUMAN_APPROVAL: TRUE'
    }
  ];

  const supportingCapabilities = [
    { title: 'Automatic pipeline discovery', desc: 'Identifies active sources, queries, and execution cadences.' },
    { title: 'Freshness and volume monitoring', desc: 'Tracks expected delivery windows and row volume drift.' },
    { title: 'Schema drift detection', desc: 'Alerts on added, dropped, or modified field structures.' },
    { title: 'SQL performance regression monitoring', desc: 'Flags query runtime spikes before timeout failures occur.' },
    { title: 'AI-assisted root-cause explanations', desc: 'Synthesises operational context into human-readable briefs.' },
    { title: 'Pipeline Trust Tokens', desc: 'Cryptographically signed tokens stating current release state.' },
    { title: 'Reliability and incident records', desc: 'Preserves complete post-incident forensic histories.' }
  ];

  const techBadges = [
    'SQL Server',
    'Oracle',
    'SSIS',
    'Python workflows',
    'APIs',
    'Excel',
    'CSV',
    'Power BI',
    'Cloud storage'
  ];

  const filteredModules = activeTab === 'all' 
    ? modules 
    : modules.filter(m => m.category === activeTab);

  return (
    <section id="platform" className="py-24 sm:py-32 bg-navy-950 text-white scroll-mt-16 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-cyan/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-navy-700/80 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-4">
            Platform Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
            A reliability layer from source systems to business decisions.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            DataOps Guardian provides a structured control fabric that bridges fragmented operational infrastructure and business intelligence. Explore the planned platform capabilities across our staged product roadmap.
          </p>
        </div>

        {/* Roadmap Phase Filtering Tabs */}
        <div className="mt-12 flex flex-wrap gap-2.5 items-center border-b border-navy-800/90 pb-5">
          <span className="text-xs uppercase font-bold text-slate-400 mr-2 tracking-wider">
            Filter by stage:
          </span>
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-brand-cyan to-brand-teal text-navy-950 shadow-cyan-glow'
                : 'bg-navy-900 text-slate-300 hover:bg-navy-850 hover:text-white border border-navy-800'
            }`}
          >
            All Modules (6)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('initial')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'initial'
                ? 'bg-emerald-400 text-navy-950 shadow-sm'
                : 'bg-navy-900 text-slate-300 hover:bg-navy-850 hover:text-white border border-navy-800'
            }`}
          >
            Initial Development (1)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('later')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'later'
                ? 'bg-cyan-400 text-navy-950 shadow-sm'
                : 'bg-navy-900 text-slate-300 hover:bg-navy-850 hover:text-white border border-navy-800'
            }`}
          >
            Later Development (4)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('roadmap')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'roadmap'
                ? 'bg-purple-400 text-navy-950 shadow-sm'
                : 'bg-navy-900 text-slate-300 hover:bg-navy-850 hover:text-white border border-navy-800'
            }`}
          >
            Advanced Roadmap (1)
          </button>
        </div>

        {/* 6 Core Modules Grid */}
        <motion.div 
          layout
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredModules.map((mod) => {
              const Icon = mod.icon;
              const isSelected = selectedModuleId === mod.id;

              return (
                <motion.div
                  key={mod.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setSelectedModuleId(mod.id)}
                  className={`rounded-3xl bg-navy-900/90 border p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'border-brand-cyan/60 shadow-dark-card ring-1 ring-brand-cyan/20'
                      : 'border-navy-800 hover:border-navy-700 hover:-translate-y-1'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-navy-850 border border-navy-700/80 flex items-center justify-center text-brand-cyan shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${mod.badgeColor}`}>
                        {mod.stage}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {mod.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                      {mod.description}
                    </p>

                    {mod.contractNote && (
                      <div className="mt-4 p-3.5 rounded-2xl bg-navy-950/90 border border-navy-800 text-xs text-slate-300 leading-relaxed">
                        <strong className="text-brand-cyan block mb-1">Contract Concept:</strong>
                        {mod.contractNote}
                      </div>
                    )}

                    {mod.states && (
                      <div className="mt-5 pt-4 border-t border-navy-800">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                          Classified Reliability States:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {mod.states.map((st) => (
                            <span
                              key={st}
                              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-navy-950 text-slate-300 border border-navy-800"
                            >
                              {st}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-navy-800/80">
                    <div className="text-xs text-slate-400 flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan flex-shrink-0" />
                      <span>{mod.keyDetail}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-navy-950/80 border border-navy-800 text-[10px] font-mono text-slate-400 truncate">
                      {mod.sampleSnippet}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Conceptual Distinction Banner: Trust Passports vs. Trust Tokens */}
        <div className="mt-16 p-7 sm:p-9 rounded-3xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-brand-cyan/40 shadow-cyan-glow relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan flex-shrink-0 shadow-sm">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-cyan mb-1.5">
                Conceptual Distinction
              </div>
              <p className="text-lg sm:text-xl font-bold text-white leading-snug">
                &ldquo;Trust Passports record the operational history and context. Trust Tokens represent the current reliability and release state.&rdquo;
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                A passport maintains historical auditability, runtimes, and baseline changes over time. A token provides downstream systems with an immediate, deterministic green/amber/red publication verdict.
              </p>
            </div>
          </div>
        </div>

        {/* Supporting Capabilities Section */}
        <div className="mt-16">
          <div className="flex items-center gap-2.5 mb-6">
            <Layers className="w-5 h-5 text-brand-cyan" />
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Supporting Platform Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {supportingCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-5 rounded-2xl bg-navy-900/60 border border-navy-800 hover:border-navy-700 transition-colors"
              >
                <h4 className="text-sm font-bold text-slate-200">
                  {cap.title}
                </h4>
                <p className="mt-1.5 text-xs text-slate-400 leading-relaxed font-normal">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Intended Technology Coverage Badges */}
        <div className="mt-16 p-7 sm:p-9 rounded-3xl bg-navy-900/50 border border-navy-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan block">
                Planned Integration Coverage
              </span>
              <h4 className="text-xl font-bold text-white mt-1">
                Target Environment Connectors
              </h4>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-navy-950 px-3.5 py-1.5 rounded-full border border-navy-800">
              <Info className="w-3.5 h-3.5 text-brand-cyan" />
              Coverage developed progressively across roadmap
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-2xl leading-relaxed">
            DataOps Guardian is designed to monitor both legacy database environments and modern analytics engines. Note: Connectors are developed progressively and are not all currently available.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-navy-950 text-slate-200 border border-navy-700 hover:border-brand-cyan/60 hover:text-white transition-all shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
