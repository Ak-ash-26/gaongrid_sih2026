import React from 'react';
import { 
  Users2, 
  Scale, 
  Flame, 
  Clock4, 
  ArrowDown, 
  CheckCircle, 
  Layers 
} from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      id: 'middlemen',
      number: '01',
      icon: Users2,
      title: 'Middlemen Dependency',
      highlight: '15-25% Margin Loss',
      description: 'Limited direct access to institutional buyers forces farmers to sell through commission agents, reducing price transparency and payout control.'
    },
    {
      id: 'price-discovery',
      number: '02',
      icon: Scale,
      title: 'Price Discovery Gap',
      highlight: 'Asymmetric Information',
      description: 'Farmers struggle to compare multiple buyer offers simultaneously, often accepting lower local rates due to lack of market visibility.'
    },
    {
      id: 'residue',
      number: '03',
      icon: Flame,
      title: 'Crop Residue Waste',
      highlight: 'Burning vs Monetizing',
      description: 'Without organized buyer networks or freight logistics, millions of tons of stubble are burned as waste instead of generating industrial revenue.'
    },
    {
      id: 'resources',
      number: '04',
      icon: Clock4,
      title: 'Resource Availability',
      highlight: 'Harvest Time Delays',
      description: 'Finding reliable machinery and seasonal agricultural labour during crucial 48-hour sowing or harvesting windows remains chaotic and unreliable.'
    }
  ];

  return (
    <section id="problem" className="py-20 bg-stone-100/70 relative border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/80 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>The Rural Challenge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight">
            Farmers Shouldn't Have to Navigate Agriculture Alone.
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3 leading-relaxed">
            Fragmented channels, asymmetric prices, and missing logistics create unnecessary hardship across every cropping season.
          </p>
        </div>

        {/* 4 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob) => {
            const Icon = prob.icon;
            return (
              <div
                key={prob.id}
                id={`problem-card-${prob.id}`}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-emerald-800" />
                    </div>
                    <span className="text-xs font-mono font-bold text-stone-400">
                      {prob.number}
                    </span>
                  </div>

                  <span className="inline-block px-2 py-0.5 text-[10px] font-bold text-rose-800 bg-rose-50 rounded-sm mb-2">
                    {prob.highlight}
                  </span>

                  <h3 className="text-lg font-bold text-stone-900 mb-2">
                    {prob.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {prob.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition Bridge */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="bg-emerald-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-emerald-800 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Background pattern */}
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-emerald-700/30 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-800 text-emerald-200 text-xs font-semibold">
                <Layers className="w-3.5 h-3.5 text-emerald-300" />
                <span>Unified Ecosystem</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
                GaonGrid Brings It All Together.
              </h3>
              <p className="text-emerald-200 text-sm max-w-xl">
                A single digital platform that integrates crop commerce, inputs, residue monetization, machinery rentals, labour booking, and government schemes into one transparent network.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="#marketplace"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-emerald-950 font-bold text-sm hover:bg-emerald-50 transition-colors shadow-sm cursor-pointer"
              >
                <span>Explore Features</span>
                <ArrowDown className="w-4 h-4 text-emerald-800" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
