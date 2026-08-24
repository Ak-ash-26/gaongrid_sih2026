import React, { useState } from 'react';
import { 
  TrendingUp, 
  CheckCircle2, 
  MapPin, 
  Tractor, 
  Flame, 
  ShieldCheck, 
  Sparkles, 
  ArrowUpRight,
  User,
  Clock,
  Layers
} from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'wheat' | 'residue' | 'machinery'>('wheat');

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
      {/* Background Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-600/15 via-amber-500/10 to-emerald-800/10 rounded-3xl blur-2xl -z-10" />

      {/* Main Mockup Container */}
      <div className="relative bg-white rounded-2xl border border-stone-200/90 shadow-xl overflow-hidden backdrop-blur-xs">
        
        {/* Device / App Header */}
        <div className="bg-emerald-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-emerald-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-800 border border-emerald-700 flex items-center justify-center font-bold text-xs">
              GG
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-xs text-emerald-100">Farmer Live Hub</span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
              </div>
              <p className="text-[11px] text-emerald-300">UP Mandi Grid • 0 Middleman Active</p>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-emerald-950/60 px-2.5 py-1 rounded-md text-[11px] font-medium text-emerald-200 border border-emerald-700/50">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>SIH Verified Grid</span>
          </div>
        </div>

        {/* Mockup Farmer Profile Banner */}
        <div className="p-4 bg-stone-50/80 border-b border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-900 font-bold text-sm">
              RK
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="text-xs font-bold text-stone-900">Rajesh Kumar</h4>
                <span className="px-1.5 py-0.2 text-[9px] font-bold bg-emerald-100 text-emerald-800 rounded-sm">KYC VERIFIED</span>
              </div>
              <p className="text-[11px] text-stone-500 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-700" />
                <span>Deoria, Uttar Pradesh • 6.5 Acres</span>
              </p>
            </div>
          </div>

          {/* Quick Stats Pill */}
          <div className="text-right">
            <span className="text-[10px] text-stone-400 font-medium block">Total Monitored Gain</span>
            <span className="text-xs font-bold text-emerald-700 font-display">+18.4% vs APMC</span>
          </div>
        </div>

        {/* Interactive Simulation Panel */}
        <div className="p-5 space-y-4">
          
          {/* Active Listing Card (Wheat 50 Quintal) */}
          <div className="bg-linear-to-b from-emerald-50/70 to-white rounded-xl p-4 border border-emerald-200 shadow-xs relative">
            <div className="flex items-start justify-between">
              <div>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-100 text-emerald-800 rounded-full">
                  🌾 Active Harvest Listing
                </span>
                <h4 className="text-base font-bold text-stone-900 mt-1">Sharbati Wheat (Grade A)</h4>
                <p className="text-xs text-stone-500">Lot size: <strong className="text-stone-800">50 Quintal</strong> • Ready in Barn</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-stone-500 uppercase font-semibold">Farmer Base Price</span>
                <div className="text-sm font-bold text-stone-700">₹2,400 <span className="text-[10px] font-normal">/ Q</span></div>
              </div>
            </div>

            {/* Direct Buyer Offers Feed */}
            <div className="mt-3 pt-3 border-t border-emerald-100/80 space-y-2">
              <div className="flex items-center justify-between text-[11px] text-stone-500">
                <span className="font-semibold text-stone-700 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  3 Direct Buyer Bids Received:
                </span>
                <span className="text-emerald-700 font-medium">Auto-Comparing...</span>
              </div>

              {/* Best Offer Highlight */}
              <div className="bg-white p-2.5 rounded-lg border border-emerald-500 shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold">
                    B2
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-stone-900">Bharat Flour Mills</span>
                      <span className="px-1.5 py-0.2 bg-amber-100 text-amber-800 text-[9px] font-bold rounded-sm flex items-center gap-0.5">
                        ⭐ Best Offer
                      </span>
                    </div>
                    <p className="text-[10px] text-stone-500">Instant UPI • Free Barn Pickup</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-extrabold text-emerald-700 font-display">₹2,450 <span className="text-[10px] font-normal text-stone-500">/ Q</span></div>
                  <span className="text-[9px] text-emerald-700 font-semibold">+₹2,500 extra profit</span>
                </div>
              </div>

              {/* Other Offer */}
              <div className="bg-stone-50/80 p-2 rounded-lg border border-stone-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-stone-400 text-[10px] font-semibold">Agro Trading Co.</span>
                </div>
                <div className="text-stone-600 font-semibold">₹2,350 / Q</div>
              </div>
            </div>

            {/* Farmer Action */}
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[11px] text-stone-500 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Farmer selects best offer directly
              </span>
              <span className="text-xs font-bold text-emerald-800 flex items-center gap-0.5 hover:underline cursor-pointer">
                Accept Deal <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Quick Ecosystem Ticker */}
          <div className="grid grid-cols-2 gap-2 text-left">
            <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-200">
              <span className="text-[10px] text-stone-500 font-medium block">Fertilizer Rate</span>
              <span className="text-xs font-bold text-stone-800">Nano Urea: ₹220</span>
              <span className="text-[10px] text-emerald-700 block font-medium">In Stock (4.5 km away)</span>
            </div>
            <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-200">
              <span className="text-[10px] text-stone-500 font-medium block">Government Benefit</span>
              <span className="text-xs font-bold text-stone-800">PM-KISAN: Eligible</span>
              <span className="text-[10px] text-blue-700 block font-medium">₹6,000 / yr direct</span>
            </div>
          </div>

        </div>

      </div>

      {/* Floating Card 1: Machinery (Top Right) */}
      <div 
        id="hero-floating-machinery"
        className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-stone-200/80 shadow-lg flex items-center gap-3 animate-bounce-subtle z-20"
      >
        <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
          <Tractor className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-stone-900">Tractor Available</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          </div>
          <p className="text-[11px] text-stone-500 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-stone-400" />
            <span>6 km away • ₹1,500/day</span>
          </p>
        </div>
      </div>

      {/* Floating Card 2: Crop Residue Buyer (Bottom Left) */}
      <div 
        id="hero-floating-residue"
        className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-stone-200/80 shadow-lg flex items-center gap-3 z-20"
      >
        <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
          <Flame className="w-5 h-5 text-emerald-700" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-stone-900">Crop Residue Buyer</span>
            <span className="px-1 py-0.2 bg-emerald-100 text-emerald-800 text-[9px] font-bold rounded-xs">Biomass</span>
          </div>
          <p className="text-[11px] text-emerald-700 font-semibold">
            8 Ton Required • ₹1,800/Ton
          </p>
          <span className="text-[9px] text-stone-400">Zero burning • Instant truck pickup</span>
        </div>
      </div>

    </div>
  );
};
