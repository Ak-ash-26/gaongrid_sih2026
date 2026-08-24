import React from 'react';
import { Users, Building2, Tractor, Landmark, ShieldCheck, Award } from 'lucide-react';

export const ImpactSection: React.FC = () => {
  const stats = [
    {
      id: 'farmers',
      value: '10K+',
      label: 'Farmers Network Target',
      description: 'Small & marginal farmers targeted across priority agricultural districts.',
      icon: Users,
      color: 'text-emerald-800',
      bg: 'bg-emerald-50 border-emerald-200'
    },
    {
      id: 'buyers',
      value: '500+',
      label: 'Potential Buyers & Millers',
      description: 'Vetted institutional buyers, biomass energy units & agro-processors.',
      icon: Building2,
      color: 'text-amber-800',
      bg: 'bg-amber-50 border-amber-200'
    },
    {
      id: 'resources',
      value: '1,000+',
      label: 'Farm Resources Mapped',
      description: 'Tractors, combine harvesters, seed drills & skilled labour tolis.',
      icon: Tractor,
      color: 'text-stone-800',
      bg: 'bg-stone-100 border-stone-300'
    },
    {
      id: 'schemes',
      value: '25+',
      label: 'Scheme & Subsidy References',
      description: 'Integrated central & state welfare programs with document requirements.',
      icon: Landmark,
      color: 'text-purple-800',
      bg: 'bg-purple-50 border-purple-200'
    }
  ];

  return (
    <section id="impact" className="py-24 bg-[#F5F8F5] relative border-b border-stone-200 overflow-hidden">
      
      {/* Background circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            <span>Smart India Hackathon Prototype Scope</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-display tracking-tight">
            Designed for Scalable Rural Impact
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-4 leading-relaxed">
            Engineered to support village clusters, APMC catchment areas, and industrial residue buyers across Indian states.
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={`impact-stat-${item.id}`}
                className={`p-6 rounded-2xl border ${item.bg} shadow-2xs hover:shadow-md transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center shadow-2xs">
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-white/60 text-stone-600">
                      Scope Metric
                    </span>
                  </div>

                  <div className={`text-4xl sm:text-5xl font-black font-display tracking-tight ${item.color}`}>
                    {item.value}
                  </div>

                  <h3 className="text-base font-bold text-stone-900 mt-2">
                    {item.label}
                  </h3>

                  <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mandatory Prototype Disclaimer Text */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 p-3 bg-white rounded-xl border border-stone-200/90 shadow-2xs text-xs text-stone-500 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>
              <strong>Note:</strong> Prototype demonstration metrics — not live platform statistics. Developed as a high-fidelity prototype submission for Smart India Hackathon (SIH).
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
