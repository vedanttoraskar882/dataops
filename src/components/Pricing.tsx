import React from 'react';
import { 
  Truck, 
  ShoppingCart, 
  Factory, 
  Calculator, 
  Stethoscope, 
  Boxes, 
  Headphones, 
  LineChart, 
  Check, 
  Calendar 
} from 'lucide-react';

interface PricingProps {
  onRequestPilot: (triggerElement?: HTMLElement) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onRequestPilot }) => {
  const targetSectors = [
    { title: 'Logistics', icon: Truck, desc: 'Dispatch feeds, routing datasets & transit tracking.' },
    { title: 'E-commerce', icon: ShoppingCart, desc: 'Omnichannel inventory syncs, order lines & returns.' },
    { title: 'Manufacturing', icon: Factory, desc: 'Batch telemetry, ERP extracts & supply intake logs.' },
    { title: 'Finance teams', icon: Calculator, desc: 'Daily reconciliation extracts & ledger consolidations.' },
    { title: 'Healthcare suppliers', icon: Stethoscope, desc: 'Compliance catalogues & medical stock feeds.' },
    { title: 'Wholesale & distribution', icon: Boxes, desc: 'B2B order EDI pipelines & warehouse allocations.' },
    { title: 'Managed Service Providers (MSPs)', icon: Headphones, desc: 'Client database support & outsourced pipeline health.' },
    { title: 'BI consultancies', icon: LineChart, desc: 'Power BI semantic models & client analytics stacks.' },
  ];

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-white text-navy-900 scroll-mt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-navy-900 text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
            Market & Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-navy-950 leading-[1.12]">
            Target market & subscription plans.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Transparent, SME-aligned pricing based on our progressive business plan. All pricing tiers connect directly to our early pilot programme.
          </p>
        </div>

        {/* Part 1: Who It Is For */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
              Ideal Customer Profile
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
              Who It Is For
            </h3>
            <p className="mt-2.5 text-base text-slate-600 leading-relaxed font-normal">
              DataOps Guardian is designed for UK SMEs and mid-market organisations with recurring, business-critical data workflows, mixed technology systems (combining legacy databases and modern scripts), and limited specialist internal DataOps resources.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {targetSectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div
                  key={sector.title}
                  className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50 hover:shadow-subtle hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center text-brand-teal mb-4 shadow-subtle">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-navy-950 tracking-tight">
                    {sector.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed font-normal">
                    {sector.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 2: Subscription Plans */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
              Transparent SaaS Tiers
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
              Subscription Plans
            </h3>
            <p className="mt-2.5 text-base text-slate-600 leading-relaxed font-normal">
              Standardised monthly tiers based on pipeline scale. No invented user seats, hidden connector penalties or artificial restrictions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* BASIC */}
            <div className="rounded-3xl p-8 bg-white border border-slate-200/90 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-extrabold text-navy-950 tracking-tight">BASIC</h4>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-5xl font-black text-navy-950">£450</span>
                  <span className="text-xs text-slate-500 font-medium">per customer/month</span>
                </div>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed font-normal">
                  For smaller SMEs beginning data reliability improvement.
                </p>

                <div className="mt-8 pt-6 border-t border-slate-100 space-y-3.5">
                  <div className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-brand-teal flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Up to 10 monitored pipelines</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={(e) => onRequestPilot(e.currentTarget)}
                  className="w-full py-3.5 px-5 rounded-xl text-sm font-bold text-navy-950 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  Request a Pilot
                </button>
              </div>
            </div>

            {/* STANDARD */}
            <div className="rounded-3xl p-8 bg-navy-950 text-white border-2 border-brand-cyan shadow-dark-card hover:shadow-cyan-glow hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-cyan to-brand-teal text-navy-950 text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                Primary Standard Tier
              </div>

              <div>
                <div className="flex items-center justify-between mb-4 mt-1">
                  <h4 className="text-xl font-extrabold text-white tracking-tight">STANDARD</h4>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-5xl font-black text-white">£750</span>
                  <span className="text-xs text-slate-300 font-medium">per customer/month</span>
                </div>
                <p className="mt-4 text-sm text-slate-300 leading-relaxed font-normal">
                  For growing SMEs with multiple data workflows.
                </p>

                <div className="mt-8 pt-6 border-t border-navy-850 space-y-3.5">
                  <div className="flex items-start gap-3 text-sm text-slate-200 font-medium">
                    <div className="w-5 h-5 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Up to 50 monitored pipelines</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-navy-850">
                <button
                  type="button"
                  onClick={(e) => onRequestPilot(e.currentTarget)}
                  className="w-full py-3.5 px-5 rounded-xl text-sm font-bold text-navy-950 bg-gradient-to-r from-brand-cyan to-brand-teal hover:from-cyan-300 hover:to-teal-300 shadow-glow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  Request a Pilot
                </button>
              </div>
            </div>

            {/* PREMIUM */}
            <div className="rounded-3xl p-8 bg-white border border-slate-200/90 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-extrabold text-navy-950 tracking-tight">PREMIUM</h4>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200">
                    Planned from Year 2
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-5xl font-black text-navy-950">£950</span>
                  <span className="text-xs text-slate-500 font-medium">per customer/month</span>
                </div>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed font-normal">
                  For multi-site SMEs, MSPs and BI partners requiring advanced controls.
                </p>

                <div className="mt-8 pt-6 border-t border-slate-100 space-y-3.5">
                  <div className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-brand-teal flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Unlimited pipelines</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-brand-teal flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Multi-client monitoring</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={(e) => onRequestPilot(e.currentTarget)}
                  className="w-full py-3.5 px-5 rounded-xl text-sm font-bold text-navy-950 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  Register Pilot Interest
                </button>
              </div>
            </div>

          </div>

          {/* Pricing Roadmap Note */}
          <div className="mt-12 p-6 rounded-3xl bg-slate-50 border border-slate-200 flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-brand-teal flex-shrink-0 shadow-subtle">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong className="text-navy-950 block text-sm font-bold mb-1">Pricing roadmap note:</strong>
              “Business-plan pricing: Basic and Standard remain £450 and £750 per month in Years 1–2, increasing to £470 and £790 respectively from Year 3. Premium is planned from Year 2 at £950 per month, with its price held flat through Year 3.”
              <p className="mt-1.5 text-slate-500 text-xs">
                (Year 1, Year 2 and Year 3 refer to the business-plan timeline, not specific calendar dates.)
              </p>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mt-16 pt-10 border-t border-slate-200">
            <h4 className="text-2xl font-extrabold text-navy-950 mb-2 tracking-tight">
              Additional Services
            </h4>
            <p className="text-sm text-slate-600 mb-8 font-normal">
              Supporting onboarding, initial audit, and dedicated reliability assistance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-subtle">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  One-Off Assessment
                </span>
                <h5 className="text-lg font-bold text-navy-950 mt-1">
                  Data Reliability Audit & Onboarding
                </h5>
                <div className="mt-2.5 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-navy-950">£1,200</span>
                  <span className="text-xs text-slate-500 font-medium">one-off per customer</span>
                </div>
                <p className="mt-3.5 text-xs text-slate-600 leading-relaxed font-normal">
                  Onboarding and implementation are included in this combined fee. No separate onboarding fee is charged.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-subtle">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Optional Add-On
                </span>
                <h5 className="text-lg font-bold text-navy-950 mt-1">
                  Premium Incident Support
                </h5>
                <div className="mt-2.5 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-navy-950">£120</span>
                  <span className="text-xs text-slate-500 font-medium">/month optional add-on</span>
                </div>
                <p className="mt-3.5 text-xs text-slate-600 leading-relaxed font-normal">
                  Enhanced investigation and reliability support for critical pipelines. Does not promise 24/7 coverage or contractual response times.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-subtle">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Specialist Engagements
                </span>
                <h5 className="text-lg font-bold text-navy-950 mt-1">
                  Custom Connectors & Sector Templates
                </h5>
                <div className="mt-2.5 flex items-baseline gap-1">
                  <span className="text-lg font-bold text-slate-800">Scope-Dependent</span>
                </div>
                <p className="mt-3.5 text-xs text-slate-600 leading-relaxed font-normal">
                  The plan does not define fixed prices for custom connectors, bespoke sector templates and specialist services. Delivered based on organisational requirements.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
