import React from 'react';
import { 
  Server, 
  Target, 
  Briefcase, 
  ShieldCheck, 
  GraduationCap, 
  Award, 
  UserCheck, 
  Database, 
  BarChart3, 
  Layers, 
  Sparkles 
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-slate-50 text-navy-900 scroll-mt-16 relative overflow-hidden">
      {/* Subtle background dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Core Premise */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/90 text-navy-900 text-xs font-bold uppercase tracking-wider mb-4 border border-slate-300/80">
              About the Concept
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-navy-950 leading-[1.15]">
              A successful pipeline does not always mean reliable data.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              In modern businesses, infrastructure often runs without a hitch and scheduled data jobs complete with exit code zero. Yet downstream dashboards, forecasts and customer-facing reports can still display stale figures, missing transactions, or structural corruption.
            </p>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              DataOps Guardian is designed to function as an active <strong className="text-navy-950 font-bold">reliability layer</strong> positioned between your underlying operational source systems and your business decision-makers. Rather than assuming that job completion equals data health, it evaluates whether information is genuinely safe to use.
            </p>
          </div>

          {/* Interactive Architectural Reliability Layer Visual */}
          <div className="lg:col-span-5 bg-navy-950 text-white rounded-3xl p-6 sm:p-7 border border-navy-800 shadow-dark-card space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-navy-850">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                The Reliability Layer Architecture
              </span>
              <span className="text-[10px] text-slate-400 font-mono">Conceptual Role</span>
            </div>

            {/* Level 1: Operational Sources */}
            <div className="p-3.5 rounded-2xl bg-navy-900 border border-navy-800">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-400" />
                  Operational Systems
                </span>
                <span className="text-[10px] text-slate-400">Sources</span>
              </div>
              <p className="text-[11px] text-slate-400">
                SQL Server, Oracle, SSIS jobs, Python scripts, CSVs, Partner APIs
              </p>
            </div>

            {/* Downward transition */}
            <div className="flex justify-center text-brand-cyan">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase bg-navy-900/90 px-3 py-1 rounded-full border border-brand-cyan/30 text-brand-cyan">
                <span>Evaluates Integrity</span>
              </div>
            </div>

            {/* Level 2: DataOps Guardian Reliability Layer */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border-2 border-brand-cyan shadow-cyan-glow relative">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-brand-cyan" />
                  DataOps Guardian Reliability Layer
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-brand-cyan text-navy-950 font-bold">
                  Gate Enforced
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1 leading-snug">
                Detects anomalies, validates adaptive contracts, traces business risk, and issues release verdicts.
              </p>
            </div>

            {/* Downward transition */}
            <div className="flex justify-center text-brand-cyan">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase bg-navy-900/90 px-3 py-1 rounded-full border border-brand-cyan/30 text-emerald-400">
                <span>Verified Release</span>
              </div>
            </div>

            {/* Level 3: Business Decisions */}
            <div className="p-3.5 rounded-2xl bg-navy-900 border border-navy-800">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-emerald-400" />
                  Business Decisions & Workflows
                </span>
                <span className="text-[10px] text-slate-400">Consumers</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Power BI reports, CFO margins, automated forecasting, logistics dispatch
              </p>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars in a Balanced Bento Layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-200">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-brand-teal mb-5">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-navy-950 tracking-tight">
              Legacy and Modern Environments
            </h3>
            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
              Designed to connect across legacy SQL Server, Oracle, and SSIS jobs as well as modern Python workflows, APIs, and cloud datasets.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-200">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-brand-teal mb-5">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-navy-950 tracking-tight">
              An SME-Focused Approach
            </h3>
            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
              Tailored for UK organisations with roughly 50–500 employees that need dependable data operations without maintaining an enterprise DataOps department.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-200">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mb-5">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-navy-950 tracking-tight">
              Business Context Behind Incidents
            </h3>
            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
              Translates technical anomalies into real business consequences—identifying affected departmental reports, revenue processes, and customer workflows.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-200">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-navy-950 tracking-tight">
              Trust-Based Decisions About Data Use
            </h3>
            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
              Introduces policy controls that hold or quarantine questionable data before it spreads into executive dashboards or automated models.
            </p>
          </div>
        </div>

        {/* Founder Profile - Executive Typography-based card (No photo box, no disclaimer text) */}
        <div className="mt-16 bg-white rounded-3xl border border-slate-200/90 shadow-card p-7 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Identity & Leadership Role */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-200 pb-8 lg:pb-0 lg:pr-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1.5">
                  Founder & Leadership
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                  Narasimha Chirumamilla
                </h3>
                <p className="text-sm font-semibold text-slate-600 flex items-center gap-1.5 mt-1.5">
                  <UserCheck className="w-4 h-4 text-brand-teal" />
                  Creator of the Concept
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 space-y-2.5">
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                  Role & Direction
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Creator of the concept and lead for product architecture, development and business direction.
                </p>
              </div>
            </div>

            {/* Right Column: Factual Biography & Qualifications */}
            <div className="lg:col-span-8 space-y-6 lg:pl-2">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-2.5">
                  Professional Background
                </h4>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  Narasimha Chirumamilla is a UK-based technology professional with more than 10 years of experience across cloud engineering, DevOps, platform engineering, infrastructure, data engineering and database administration. His experience spans CIRIUM, NTT DATA UK, Attra Infotech and DXC Technology.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                {/* Education */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <GraduationCap className="w-4 h-4 text-brand-teal" />
                    <span>Education</span>
                  </div>
                  <div className="text-sm font-bold text-navy-950">
                    Bachelor of Technology in Computer Science
                  </div>
                  <div className="text-xs text-slate-600">
                    Jawaharlal Nehru Technological University
                  </div>
                </div>

                {/* Certifications */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <Award className="w-4 h-4 text-brand-teal" />
                    <span>Professional Certifications</span>
                  </div>
                  <ul className="text-xs text-slate-700 space-y-2 font-medium">
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0" />
                      <span>AWS Certified Solutions Architect – Associate</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0" />
                      <span>Microsoft Certified: Azure Data Fundamentals</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0" />
                      <span>ITIL Foundation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
