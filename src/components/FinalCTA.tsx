import React from 'react';
import { ArrowRight, UserPlus, Sprout, CheckCircle2, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onOpenJoinModal: (role?: string) => void;
  onExploreMarketplace: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenJoinModal, onExploreMarketplace }) => {
  return (
    <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
      
      {/* Background radial gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-emerald-800/30 via-emerald-600/10 to-amber-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-6">
          <Sprout className="w-4 h-4 text-emerald-400" />
          <span>Transforming Rural Agriculture</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
          Your Farm. Your Choices.{' '}
          <span className="text-emerald-400">
            Your Opportunities.
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="text-stone-300 text-base sm:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
          Join GaonGrid and become part of a connected agricultural ecosystem built around direct access, better choices and smarter resource utilization.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            id="final-cta-join-btn"
            onClick={() => onOpenJoinModal('farmer')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-extrabold text-stone-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
          >
            <UserPlus className="w-5 h-5 text-stone-950" />
            <span>Join as Farmer</span>
          </button>

          <button
            type="button"
            id="final-cta-explore-btn"
            onClick={onExploreMarketplace}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-stone-800 hover:bg-stone-700 active:bg-stone-900 border border-stone-600 rounded-xl transition-all cursor-pointer"
          >
            <span>Explore Marketplace</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Value Propositions */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-stone-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Free Registration for Farmers</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>0% Commission Hidden Cuts</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Verified Rural Buyers & Services</span>
          </div>
        </div>

      </div>
    </section>
  );
};
