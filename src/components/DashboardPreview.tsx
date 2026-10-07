import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  ShieldAlert, 
  ArrowRight, 
  Layers, 
  GitCommit, 
  Database, 
  Cpu, 
  BarChart3, 
  Info 
} from 'lucide-react';

export const DashboardPreview: React.FC = () => {
  const [selectedPipeline, setSelectedPipeline] = useState<string>('order-feed');
  const [activeTab, setActiveTab] = useState<'overview' | 'incident' | 'lineage'>('overview');

  const pipelines = [
    {
      id: 'order-feed',
      name: 'Order Feed',
      endpoint: 'POST /orders/v2',
      status: 'Quarantined',
      statusType: 'quarantine',
      badgeClass: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
      dotClass: 'bg-amber-400',
      icon: AlertTriangle,
      iconBoxClass: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
      summary: 'Volume anomaly detected: -43% below rolling 30-day baseline',
      detail: 'Expected ~2,400 orders; loaded 1,368 records (57% volume). Upstream job exited with status 0 (Success). Schema has 1 unmapped attribute.',
      downstream: 'Fulfilment planning dashboard, Logistics ERP, Daily Demand Model',
      policyVerdict: 'HOLD_PUBLICATION_PENDING_REVIEW'
    },
    {
      id: 'inventory-sync',
      name: 'Inventory Sync',
      endpoint: 'SQL → WMS ERP',
      status: 'Trusted',
      statusType: 'trusted',
      badgeClass: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
      dotClass: 'bg-emerald-400',
      icon: CheckCircle2,
      iconBoxClass: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
      summary: 'Schema intact • 100% record match • Latency 2.4s',
      detail: 'Baseline verified against 90-day moving window. 42,890 records synchronized across 3 regional depots with 0 schema variances.',
      downstream: 'Warehouse Stock Allocator, E-commerce Cart API',
      policyVerdict: 'SAFE_TO_PUBLISH'
    },
    {
      id: 'finance-extract',
      name: 'Finance Extract',
      endpoint: 'SSIS Daily Ledger',
      status: 'Stale',
      statusType: 'stale',
      badgeClass: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
      dotClass: 'bg-sky-400',
      icon: Clock,
      iconBoxClass: 'bg-sky-500/10 border-sky-500/20 text-sky-400',
      summary: 'Last refreshed 38 hrs ago (Expected SLA: 24 hrs)',
      detail: 'Scheduled cron execution delayed. Last successful sync 14 Oct 02:00. Upstream staging table awaiting vendor file arrival.',
      downstream: 'CFO Monthly Margin BI, Executive Cashflow Sheet',
      policyVerdict: 'DEGRADED_SLA_WARNING'
    },
    {
      id: 'forecast-input',
      name: 'Forecast Input',
      endpoint: 'Demand Feature Store',
      status: 'AI-blocked',
      statusType: 'ai-blocked',
      badgeClass: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
      dotClass: 'bg-rose-400',
      icon: ShieldAlert,
      iconBoxClass: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
      summary: 'Downstream safety gate triggered • Incomplete upstream partition',
      detail: 'Safety gate intervened: blocked downstream demand model inference because upstream order ingestion was flagged as incomplete.',
      downstream: 'Automated Procurement Forecaster, AI Reorder Engine',
      policyVerdict: 'AI_INGESTION_BLOCKED'
    }
  ];

  const currentPipeline = pipelines.find(p => p.id === selectedPipeline) || pipelines[0];

  return (
    <div className="relative mx-auto max-w-5xl rounded-3xl border border-navy-700/80 bg-navy-950/95 p-4 sm:p-7 shadow-dark-card backdrop-blur-2xl text-left overflow-hidden">
      {/* Top ambient highlight gradient */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-cyan via-teal-400 to-indigo-500 opacity-90" />
      <div className="absolute -top-24 right-1/4 w-72 h-72 bg-brand-cyan/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-navy-800/90">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <div className="w-3 h-3 rounded-full bg-slate-700/80" />
            <div className="w-3 h-3 rounded-full bg-slate-700/80" />
            <div className="w-3 h-3 rounded-full bg-slate-700/80" />
          </div>
          <div className="h-4 w-px bg-navy-800 mx-1" />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-bold text-brand-cyan">
                Illustrative platform preview
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-navy-900 text-slate-300 border border-navy-700/70">
                Sample Concept Data
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Policy-Controlled Reliability Control Graph &bull; Monitoring Workspace
            </p>
          </div>
        </div>

        {/* View toggles */}
        <div className="flex items-center gap-1 bg-navy-900/90 p-1 rounded-xl border border-navy-800 text-xs font-medium">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'overview'
                ? 'bg-navy-800 text-brand-cyan font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Overview
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('incident')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'incident'
                ? 'bg-navy-800 text-amber-300 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Incident INC-842
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('lineage')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'lineage'
                ? 'bg-navy-800 text-slate-200 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Lineage Flow
          </button>
        </div>
      </div>

      {/* Main Grid: Pipeline overview + Business-Impact incident card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
        
        {/* Left Column (7 cols): Pipeline overview list */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-brand-cyan" />
              Pipeline Reliability Overview
            </h4>
            <span className="text-[11px] text-slate-400 font-mono">
              Click to inspect pipeline
            </span>
          </div>

          <div className="space-y-2.5">
            {pipelines.map((pipe) => {
              const Icon = pipe.icon;
              const isSelected = selectedPipeline === pipe.id;

              return (
                <div
                  key={pipe.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedPipeline(pipe.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedPipeline(pipe.id);
                    }
                  }}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-navy-900 border-brand-cyan/60 shadow-subtle ring-1 ring-brand-cyan/30'
                      : 'bg-navy-900/60 border-navy-800 hover:bg-navy-900/90 hover:border-navy-700'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 ${pipe.iconBoxClass}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-100 truncate">
                          {pipe.name}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono bg-navy-950 px-2 py-0.5 rounded border border-navy-800">
                          {pipe.endpoint}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 truncate mt-0.5">
                        {pipe.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 text-right">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${pipe.badgeClass}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${pipe.dotClass}`} />
                      {pipe.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Compact dependency flow visualization */}
          <div className="pt-2">
            <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <GitCommit className="w-3 h-3 text-brand-cyan" />
                Compact Dependency Flow Trace
              </span>
              <span className="text-[10px] text-slate-500 font-normal">Automated Lineage Graph</span>
            </h5>

            <div className="p-3.5 rounded-2xl bg-navy-900/50 border border-navy-800/80 flex items-center justify-between text-xs overflow-x-auto gap-2">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-navy-950 border border-navy-800 flex-shrink-0 text-slate-300">
                <Database className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-medium">Supplier API</span>
              </div>
              
              <div className="flex items-center gap-1 text-amber-400">
                <div className="w-2 h-0.5 bg-amber-400/40" />
                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
              </div>

              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 flex-shrink-0 text-amber-300 font-medium shadow-sm">
                <Layers className="w-3.5 h-3.5" />
                <span>Order Feed (57%)</span>
              </div>

              <div className="flex items-center gap-1 text-rose-400">
                <div className="w-2 h-0.5 bg-rose-400/40" />
                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
              </div>

              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-rose-500/10 border border-rose-500/30 flex-shrink-0 text-rose-300 font-medium shadow-sm">
                <Cpu className="w-3.5 h-3.5" />
                <span>Demand AI Gate</span>
              </div>

              <div className="flex items-center gap-1 text-slate-600">
                <div className="w-2 h-0.5 bg-slate-700" />
                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
              </div>

              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-navy-950 border border-navy-800/60 flex-shrink-0 text-slate-400">
                <BarChart3 className="w-3.5 h-3.5 text-slate-500" />
                <span>Fulfilment BI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Dynamic inspection card */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="rounded-2xl bg-gradient-to-b from-navy-900 to-navy-950 p-5 border border-navy-700/80 shadow-card">
            
            <div className="flex items-center justify-between border-b border-navy-800 pb-3 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Active Incident Analysis
              </span>
              <span className="text-[10px] font-mono bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20">
                INC-842
              </span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div>
                <span className="text-slate-400 block text-[10px] font-semibold uppercase tracking-wider">
                  Incident
                </span>
                <p className="text-slate-100 font-semibold text-sm mt-0.5">
                  &ldquo;Order feed volume is below expected levels.&rdquo;
                </p>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Expected ~2,400 orders &bull; Loaded 1,368 records (57% volume). Upstream job exited with status 0 (Success).
                </p>
              </div>

              <div className="p-3 rounded-xl bg-navy-850/80 border border-navy-700/60">
                <span className="text-brand-cyan block text-[10px] uppercase tracking-wider font-bold">
                  Business Impact Evaluation
                </span>
                <p className="text-slate-200 font-semibold text-xs mt-1">
                  &ldquo;Fulfilment planning dashboard may be affected.&rdquo;
                </p>
                <div className="mt-2 flex items-center gap-2 text-[11px] text-slate-300">
                  <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-semibold text-[10px]">
                    High Business Risk
                  </span>
                  <span>Warehouse dispatch schedules at risk of under-allocation.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
                <span className="text-amber-400 block text-[10px] uppercase tracking-wider font-bold">
                  Controlled Release Policy Decision
                </span>
                <p className="text-amber-200 font-bold text-sm mt-0.5">
                  &ldquo;Hold publication pending review.&rdquo;
                </p>
                <p className="text-slate-300 text-xs mt-1.5 leading-relaxed">
                  Automatic gate engaged: Downstream executive dashboard suppressed from automatic refresh. Escalated to Data Lead.
                </p>
              </div>
            </div>
          </div>

          {/* Selected Pipeline Detailed Inspector */}
          <div className="p-4 rounded-2xl bg-navy-900/60 border border-navy-800 text-xs space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Inspecting Pipeline:</span>
              <span className="text-slate-200 font-semibold font-mono">{currentPipeline.name}</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Policy Release State:</span>
              <span className="text-brand-cyan font-mono font-medium">{currentPipeline.policyVerdict}</span>
            </div>
            <div className="pt-2 border-t border-navy-800/80 text-[11px] text-slate-400">
              <span className="text-slate-500 block text-[10px] uppercase font-semibold">Downstream Dependents:</span>
              <span className="text-slate-300">{currentPipeline.downstream}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Footer disclaimer badge */}
      <div className="mt-6 pt-4 border-t border-navy-800/80 flex items-center gap-2 text-xs text-slate-400">
        <Info className="w-4 h-4 text-brand-cyan flex-shrink-0" />
        <span>
          <strong>Note:</strong> All displayed data, pipeline names and incident records are illustrative. This interface preview represents planned platform capabilities and is not connected to live customer pipelines.
        </span>
      </div>
    </div>
  );
};
