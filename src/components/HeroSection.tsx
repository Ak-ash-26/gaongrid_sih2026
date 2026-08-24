import React from 'react';
import { ArrowRight, CheckCircle2, UserPlus } from 'lucide-react';

interface HeroSectionProps {
  onOpenJoinModal: (role?: string) => void;
  onExploreMarketplace: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenJoinModal,
  onExploreMarketplace,
}) => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-grid-pattern"
    >
      {/* Decorative gradient blur in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-br from-emerald-200/40 via-amber-100/20 to-transparent blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Small Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/5 border border-emerald-800/15 text-emerald-900 text-xs font-semibold tracking-wide mb-6">
          <span className="text-base leading-none">🌾</span>
          <span>Built for Farmers • Simple & Direct</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
          <span className="text-[11px] font-bold text-emerald-700 uppercase">Kisan Digital Seva</span>
        </div>

        {/* Main Headline */}
        <h1
          id="hero-headline"
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight font-display leading-[1.15]"
        >
          Sell Direct.{' '}
          <span className="text-emerald-800 underline decoration-emerald-400/40 underline-offset-8">
            Buy Smart.
          </span>{' '}
          Grow Better.
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-2xl mx-auto mt-6">
          GaonGrid connects farmers directly with verified buyers and fertilizer dealers — helping you compare prices, sell crops without middlemen cuts, and monetize crop residue easily.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6">
          <button
            type="button"
            id="hero-explore-btn"
            onClick={onExploreMarketplace}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-emerald-800 hover:bg-emerald-700 active:bg-emerald-900 rounded-xl shadow-md shadow-emerald-950/20 transition-all cursor-pointer group"
          >
            <span>Explore Marketplace</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            id="hero-join-farmer-btn"
            onClick={() => onOpenJoinModal('farmer')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-emerald-950 bg-stone-100 hover:bg-stone-200/90 active:bg-stone-300 border border-stone-300/80 rounded-xl transition-all cursor-pointer"
          >
            <UserPlus className="w-4 h-4 text-emerald-800" />
            <span>Join as Farmer</span>
          </button>
        </div>

        {/* Trust Checklist */}
        <div className="pt-8 mt-8 border-t border-stone-200/80 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs sm:text-sm font-medium text-stone-600">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Direct Connections</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Transparent Rates</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Zero Middlemen Brokerage</span>
          </div>
        </div>
      </div>
    </section>
  );
};

