import React, { useState } from 'react';
import { 
  Recycle, 
  Flame, 
  Truck, 
  Coins, 
  Factory, 
  Leaf, 
  CheckCircle, 
  ArrowRight, 
  MapPin, 
  ShieldCheck,
  Calculator,
  Wind
} from 'lucide-react';
import { SAMPLE_RESIDUE_LISTINGS } from '../data/mockData';

interface ResidueSectionProps {
  onOpenJoinModal: (role?: string) => void;
  onOpenResidueEstimator?: () => void;
}

export const ResidueSection: React.FC<ResidueSectionProps> = ({ onOpenJoinModal }) => {
  const [selectedCrop, setSelectedCrop] = useState<'paddy' | 'wheat' | 'sugarcane'>('paddy');
  const [tons, setTons] = useState<number>(8);

  const rates: Record<string, { rate: number; label: string; buyer: string; co2PerTon: number }> = {
    paddy: { rate: 1750, label: 'Paddy Straw (Parali)', buyer: 'Purvanchal Biomass Power Plant', co2PerTon: 1400 },
    wheat: { rate: 2200, label: 'Wheat Straw (Turi)', buyer: 'Bio-Pellet Renewable Fuel Works', co2PerTon: 1250 },
    sugarcane: { rate: 1450, label: 'Sugarcane Bagasse', buyer: 'Co-gen Paper & Power Industries', co2PerTon: 1600 },
  };

  const currentRate = rates[selectedCrop];
  const totalEarnings = tons * currentRate.rate;
  const co2Saved = Math.round((tons * currentRate.co2PerTon) / 1000);

  return (
    <section id="residue" className="py-24 bg-[#F5F8F5] relative border-b border-emerald-950/10 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300/60 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-4">
            <Leaf className="w-3.5 h-3.5 text-emerald-700" />
            <span>Sustainable Agriculture & Income</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-display tracking-tight">
            Don't Burn It.{' '}
            <span className="text-emerald-800 underline decoration-amber-400/70 underline-offset-8">
              Earn From It.
            </span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-4 leading-relaxed">
            GaonGrid connects farmers with biomass plants, bio-coal producers, and composting industries that put crop residue to productive use — stopping air pollution while creating secondary farm revenue.
          </p>
        </div>

        {/* 5-Step Process Flow */}
        <div className="mb-16">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm max-w-5xl mx-auto">
            <h3 className="text-xs font-bold uppercase text-stone-400 tracking-wider text-center mb-6">
              How Residue Monetization Works
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center">
              
              {/* Step 1 */}
              <div className="text-center p-3 rounded-xl bg-stone-50 border border-stone-200">
                <div className="w-10 h-10 mx-auto rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm mb-2">
                  1
                </div>
                <h4 className="text-xs font-bold text-stone-900">Farmer</h4>
                <p className="text-[11px] text-stone-500 mt-0.5">Lists stubble location & quantity</p>
              </div>

              {/* Step 2 */}
              <div className="text-center p-3 rounded-xl bg-amber-50 border border-amber-200">
                <div className="w-10 h-10 mx-auto rounded-full bg-amber-200 text-amber-900 flex items-center justify-center font-bold text-sm mb-2">
                  2
                </div>
                <h4 className="text-xs font-bold text-stone-900">Crop Residue</h4>
                <p className="text-[11px] text-stone-500 mt-0.5">Paddy, wheat, sugarcane straw</p>
              </div>

              {/* Step 3 */}
              <div className="text-center p-3 rounded-xl bg-blue-50 border border-blue-200">
                <div className="w-10 h-10 mx-auto rounded-full bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-sm mb-2">
                  3
                </div>
                <h4 className="text-xs font-bold text-stone-900">Verified Buyer</h4>
                <p className="text-[11px] text-stone-500 mt-0.5">Biomass, biofuel & cogen units</p>
              </div>

              {/* Step 4 */}
              <div className="text-center p-3 rounded-xl bg-stone-50 border border-stone-200">
                <div className="w-10 h-10 mx-auto rounded-full bg-stone-200 text-stone-900 flex items-center justify-center font-bold text-sm mb-2">
                  4
                </div>
                <h4 className="text-xs font-bold text-stone-900">Bulk Transport</h4>
                <p className="text-[11px] text-stone-500 mt-0.5">Tractor-trolley & truck pickup</p>
              </div>

              {/* Step 5 */}
              <div className="text-center p-3 rounded-xl bg-emerald-50 border border-emerald-300">
                <div className="w-10 h-10 mx-auto rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm mb-2">
                  5
                </div>
                <h4 className="text-xs font-bold text-emerald-950">Direct Income</h4>
                <p className="text-[11px] text-emerald-800 mt-0.5">Instant bank transfer to farmer</p>
              </div>

            </div>
          </div>
        </div>

        {/* Interactive Residue Calculator & Featured Listing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Left: Interactive Stubble Earnings Estimator */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-emerald-900/15 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900">
                    Residue Income & Impact Calculator
                  </h3>
                </div>
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  Instant Estimate
                </span>
              </div>

              {/* Crop Type Tabs */}
              <div className="mt-5">
                <label className="text-xs font-bold text-stone-700 uppercase block mb-2">
                  Select Crop Residue Type:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'paddy', name: 'Paddy Straw', tag: 'High Demand' },
                    { id: 'wheat', name: 'Wheat Straw', tag: 'Animal/Biofuel' },
                    { id: 'sugarcane', name: 'Sugarcane Bagasse', tag: 'Cogen Power' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setSelectedCrop(tab.id as any)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedCrop === tab.id
                          ? 'bg-emerald-900 text-white border-emerald-900 shadow-sm'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      <span className="text-xs font-bold block">{tab.name}</span>
                      <span className={`text-[10px] block mt-0.5 ${
                        selectedCrop === tab.id ? 'text-emerald-200' : 'text-stone-500'
                      }`}>
                        {tab.tag}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Input (Simple number input instead of slider) */}
              <div className="mt-6 bg-stone-50 p-4 rounded-xl border border-stone-200">
                <label className="text-xs font-bold text-stone-800 block mb-1">
                  Estimated Residue Quantity (Tons):
                </label>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <div className="relative flex-1">
                    <input
                      type="number"
                      min="1"
                      max="500"
                      value={tons}
                      onChange={(e) => setTons(Math.max(1, parseInt(e.target.value) || 1))}
                      placeholder="Enter quantity in tons (e.g. 10)"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-xl font-bold text-stone-900 focus:outline-hidden focus:border-emerald-700 shadow-2xs"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-stone-500 pointer-events-none">
                      Metric Tons
                    </span>
                  </div>

                  {/* Quick Preset Buttons */}
                  <div className="flex items-center gap-1.5 overflow-x-auto">
                    {[5, 10, 20, 35, 50].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setTons(preset)}
                        className={`px-2.5 py-2 text-xs font-bold rounded-lg border transition-colors cursor-pointer ${
                          tons === preset
                            ? 'bg-emerald-800 text-white border-emerald-800'
                            : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                        }`}
                      >
                        {preset}T
                      </button>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-stone-500 mt-2">
                  Enter the approximate stubble weight or click a preset above (1 acre paddy typically yields ~2 to 3 tons).
                </p>
              </div>

              {/* Live Calculated Stats Banner */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-semibold mb-1">
                    <Coins className="w-4 h-4 text-emerald-700" />
                    <span>Estimated Income</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-950 font-display">
                    ₹{totalEarnings.toLocaleString('en-IN')}
                  </div>
                  <span className="text-[11px] text-emerald-700 font-medium mt-0.5 block">
                    @ ₹{currentRate.rate}/Ton from verified buyer
                  </span>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                  <div className="flex items-center gap-1.5 text-xs text-blue-800 font-semibold mb-1">
                    <Wind className="w-4 h-4 text-blue-700" />
                    <span>Emissions Prevented</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-950 font-display">
                    ~{co2Saved} Tons
                  </div>
                  <span className="text-[11px] text-blue-700 font-medium mt-0.5 block">
                    Zero smoke & particulate PM2.5 pollution
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-500">
                Matched Buyer: <strong className="text-stone-800">{currentRate.buyer}</strong>
              </span>
              <button
                type="button"
                onClick={() => onOpenJoinModal('farmer')}
                className="px-4 py-2 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
              >
                List My Residue
              </button>
            </div>
          </div>

          {/* Right: Featured Verified Buyer Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <span className="px-2.5 py-1 text-xs font-bold bg-amber-100 text-amber-900 rounded-md">
                  Active Procurement Call
                </span>
                <span className="flex items-center gap-1 text-xs text-emerald-700 font-semibold">
                  <ShieldCheck className="w-4 h-4" /> Vetted Buyer
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <h4 className="text-xl font-bold text-stone-900 font-display">
                    Paddy Straw (Parali) Bulk Requirement
                  </h4>
                  <p className="text-xs text-stone-500 mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    Gorakhpur & Surrounding 40 km Districts
                  </p>
                </div>

                <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Requirement Quantity:</span>
                    <strong className="text-stone-800">8 - 200 Tons</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Offer Rate:</span>
                    <strong className="text-emerald-800 font-bold text-sm">₹1,750 / Ton</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Procuring Organization:</span>
                    <strong className="text-stone-800">Purvanchal Biomass Power Plant</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Logistics Support:</span>
                    <strong className="text-emerald-700">Coordinated Fleet Pickup Included</strong>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900">
                  <strong className="block mb-0.5">Transportation Coordination:</strong>
                  GaonGrid pairs your lot with nearby tractor trolleys or logistics trucks to transport residue smoothly to the buyer's processing yard.
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-100">
              <button
                type="button"
                id="residue-find-buyers-btn"
                onClick={() => onOpenJoinModal('farmer')}
                className="w-full py-3 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white text-sm font-bold shadow-md shadow-emerald-950/15 flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Find Residue Buyers →</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
