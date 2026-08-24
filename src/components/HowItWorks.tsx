import React from 'react';
import { UserCheck, Search, Scale, Handshake, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenJoinModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenJoinModal }) => {
  const steps = [
    {
      step: '01',
      icon: UserCheck,
      title: 'Register Profile',
      tagline: 'Farmer, Buyer or Service Provider',
      description: 'Create your digital agricultural profile with land size, crop specialty, or machinery fleet in less than 2 minutes.'
    },
    {
      step: '02',
      icon: Search,
      title: 'List or Search',
      tagline: 'Crops, Inputs, Residue, Services',
      description: 'List your harvested produce or crop residue, search local fertilizer dealers, or browse nearby tractors and labour teams.'
    },
    {
      step: '03',
      icon: Scale,
      title: 'Compare In Real Time',
      tagline: 'Transparent Bids & Availability',
      description: 'Review multiple competing buyer quotes, dealer fertilizer prices, equipment rental rates, and proximity distances side by side.'
    },
    {
      step: '04',
      icon: Handshake,
      title: 'Direct Connect & Transact',
      tagline: 'Zero Commission Middlemen',
      description: 'Accept the best deal directly, coordinate farm pickup, and receive direct digital payments with complete transparency.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-display tracking-tight">
            How GaonGrid Works
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-4 leading-relaxed">
            Designed for rural usability with simple visual flows, minimal data entry, and total farmer empowerment.
          </p>
        </div>

        {/* Timeline Grid with Connecting Line */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-stone-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  id={`how-step-${item.step}`}
                  className="bg-[#FBFBFA] p-6 rounded-2xl border border-stone-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between text-left group hover:border-emerald-700"
                >
                  <div>
                    {/* Step Number Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-800 text-white flex items-center justify-center font-display font-extrabold text-xl shadow-md shadow-emerald-950/20 group-hover:scale-105 transition-transform">
                        {item.step}
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-600 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-emerald-800" />
                      </div>
                    </div>

                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                      {item.tagline}
                    </span>

                    <h3 className="text-lg font-bold text-stone-900 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center gap-1 text-xs font-semibold text-stone-500 group-hover:text-emerald-800 transition-colors">
                    <span>Phase {item.step}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-16 text-center">
          <button
            type="button"
            onClick={onOpenJoinModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-950/20 transition-all cursor-pointer"
          >
            <span>Start Using GaonGrid Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
