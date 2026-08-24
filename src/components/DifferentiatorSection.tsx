import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Building2, 
  TrendingUp, 
  DollarSign, 
  Award, 
  Zap, 
  Users, 
  Check,
  FlaskConical,
  Sprout
} from 'lucide-react';
import { DEMO_BUYER_OFFERS } from '../data/mockData';
import { FertilizerMarketplace } from './FertilizerMarketplace';

interface DifferentiatorSectionProps {
  onOpenJoinModal: (role?: string) => void;
  activeTab?: 'crops' | 'fertilizers';
  onTabChange?: (tab: 'crops' | 'fertilizers') => void;
}

export const DifferentiatorSection: React.FC<DifferentiatorSectionProps> = ({ 
  onOpenJoinModal,
  activeTab: controlledTab,
  onTabChange
}) => {
  const [internalTab, setInternalTab] = useState<'crops' | 'fertilizers'>('crops');
  const activeTab = controlledTab || internalTab;

  const handleTabChange = (tab: 'crops' | 'fertilizers') => {
    if (onTabChange) {
      onTabChange(tab);
    } else {
      setInternalTab(tab);
    }
  };

  const [selectedBuyerId, setSelectedBuyerId] = useState<string>('buyer-b');
  const [isOfferAccepted, setIsOfferAccepted] = useState<boolean>(false);

  const quantity = 50; // 50 Quintal
  const expectedRate = 2400; // Base expected
  const selectedBuyer = DEMO_BUYER_OFFERS.find((b) => b.id === selectedBuyerId) || DEMO_BUYER_OFFERS[0];
  
  const totalPayout = quantity * selectedBuyer.offeredPrice;
  const standardMandiFeeLost = Math.round(totalPayout * 0.06); // 6% broker fee saved!
  const extraEarningVsBase = (selectedBuyer.offeredPrice - expectedRate) * quantity;

  const handleSelectOffer = (id: string) => {
    setSelectedBuyerId(id);
    setIsOfferAccepted(false);
  };

  return (
    <section id="marketplace" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/60 border border-emerald-600/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Direct Agricultural Marketplace</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            Sell Direct. Buy Smart. Compare Prices.
          </h2>
          <p className="text-stone-300 text-base sm:text-lg mt-3 leading-relaxed">
            Eliminate middlemen markups. Compare multiple buyer bids for your harvest, or check fertilizer dealer rates and official DBT subsidies in real time.
          </p>

          {/* Simple Tab Switcher */}
          <div className="mt-8 inline-flex p-1.5 bg-stone-800/90 border border-stone-700 rounded-2xl shadow-lg">
            <button
              type="button"
              id="tab-btn-sell-crops"
              onClick={() => handleTabChange('crops')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'crops'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'text-stone-300 hover:text-white hover:bg-stone-700/50'
              }`}
            >
              <Sprout className="w-4 h-4" />
              <span>🌾 Sell Crops (Compare Buyer Bids)</span>
            </button>
            <button
              type="button"
              id="tab-btn-buy-fertilizers"
              onClick={() => handleTabChange('fertilizers')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'fertilizers'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'text-stone-300 hover:text-white hover:bg-stone-700/50'
              }`}
            >
              <FlaskConical className="w-4 h-4" />
              <span>🧪 Buy Fertilizers (Compare Dealer Prices)</span>
            </button>
          </div>

        </div>

        {/* Tab 1: Crops View */}
        {activeTab === 'crops' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            {/* Visual Workflow Steps */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-5xl mx-auto text-center">
              {[
                { step: '01', title: 'Farmer Lists Lot', desc: 'Crop, quantity, target price' },
                { step: '02', title: 'Multiple Buyers Bid', desc: 'Direct verified millers & traders' },
                { step: '03', title: 'Compare Offers', desc: 'Price, speed & pickup terms' },
                { step: '04', title: 'Farmer Chooses', desc: 'Full autonomy to accept' },
                { step: '05', title: 'Direct Transaction', desc: 'Direct bank transfer & pickup' }
              ].map((flow, index) => (
                <div 
                  key={index}
                  className="bg-stone-800/80 border border-stone-700/60 rounded-xl p-3.5 relative flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-sm inline-block mb-1.5">
                      {flow.step}
                    </span>
                    <h4 className="text-xs font-bold text-stone-100">{flow.title}</h4>
                    <p className="text-[11px] text-stone-400 mt-1">{flow.desc}</p>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-emerald-500 font-bold">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Interactive Marketplace Comparison Mockup */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
              
              {/* Left: Farmer Listing Box */}
              <div className="lg:col-span-5 bg-stone-800/90 rounded-2xl border border-stone-700 p-6 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-stone-700">
                    <div>
                      <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wide">
                        Live Farmer Listing
                      </span>
                      <h3 className="text-2xl font-extrabold text-white font-display mt-0.5">
                        Sharbati Wheat
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 text-xs font-bold bg-emerald-900/60 text-emerald-300 border border-emerald-600/40 rounded-lg">
                      Grade A+ Verified
                    </span>
                  </div>

                  <div className="mt-5 space-y-3 text-sm">
                    <div className="flex items-center justify-between bg-stone-900/70 p-3 rounded-xl border border-stone-800">
                      <span className="text-stone-400 text-xs">Total Quantity</span>
                      <span className="text-white font-bold font-display text-base">50 Quintal (5,000 kg)</span>
                    </div>

                    <div className="flex items-center justify-between bg-stone-900/70 p-3 rounded-xl border border-stone-800">
                      <span className="text-stone-400 text-xs">Farmer Expected Price</span>
                      <span className="text-amber-300 font-bold font-display text-base">₹2,400 / Quintal</span>
                    </div>

                    <div className="flex items-center justify-between bg-stone-900/70 p-3 rounded-xl border border-stone-800">
                      <span className="text-stone-400 text-xs">Origin Location</span>
                      <span className="text-stone-200 font-medium text-xs flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                        Deoria, Uttar Pradesh
                      </span>
                    </div>

                    <div className="flex items-center justify-between bg-stone-900/70 p-3 rounded-xl border border-stone-800">
                      <span className="text-stone-400 text-xs">Farmer Profile</span>
                      <span className="text-stone-200 font-medium text-xs">Rajesh Kumar (KYC Verified)</span>
                    </div>
                  </div>

                  <div className="mt-5 p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-800/60 text-xs text-emerald-200">
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-emerald-100 block">Farmer in Total Control:</strong>
                        Listing is broadcasted to verified flour mills and traders within 50 km. Only the farmer decides which offer to accept.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-700/80 text-center">
                  <span className="text-[11px] text-stone-400">
                    Status: <strong className="text-emerald-400">Receiving Live Offers (3)</strong>
                  </span>
                </div>
              </div>

              {/* Right: Competing Buyer Offers */}
              <div className="lg:col-span-7 bg-stone-800/90 rounded-2xl border border-stone-700 p-6 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-stone-700">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-emerald-400" />
                      <h3 className="text-lg font-bold text-white">
                        Direct Buyer Offers Received
                      </h3>
                    </div>
                    <span className="text-xs text-stone-400">
                      Click an offer to compare payout
                    </span>
                  </div>

                  {/* Offers List */}
                  <div className="mt-4 space-y-3">
                    {DEMO_BUYER_OFFERS.map((offer) => {
                      const isSelected = offer.id === selectedBuyerId;
                      return (
                        <div
                          key={offer.id}
                          onClick={() => handleSelectOffer(offer.id)}
                          className={`p-4 rounded-xl border transition-all cursor-pointer relative ${
                            isSelected
                              ? 'bg-emerald-950/80 border-emerald-500 shadow-md ring-1 ring-emerald-500'
                              : 'bg-stone-900/60 border-stone-700/80 hover:border-stone-500'
                          }`}
                        >
                          {offer.isBestOffer && (
                            <span className="absolute -top-2.5 right-4 px-2.5 py-0.5 bg-amber-400 text-stone-950 text-[10px] font-extrabold rounded-full flex items-center gap-1 shadow-xs">
                              <Award className="w-3 h-3" /> BEST DEAL
                            </span>
                          )}

                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="text-sm font-bold text-white">{offer.company}</h4>
                                <span className="text-xs text-amber-300 font-medium">★ {offer.rating}</span>
                              </div>
                              <p className="text-xs text-stone-400 mt-0.5">
                                Buyer: {offer.buyerName} • {offer.distanceKm} km away
                              </p>
                              <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px]">
                                <span className="px-2 py-0.5 bg-stone-800 text-stone-300 rounded-md">
                                  {offer.paymentTerms}
                                </span>
                                {offer.pickupOffered && (
                                  <span className="px-2 py-0.5 bg-emerald-900/50 text-emerald-300 rounded-md">
                                    ✓ Free Barn Pickup
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="text-right shrink-0">
                              <div className="text-lg font-black text-white font-display">
                                ₹{offer.offeredPrice.toLocaleString('en-IN')}{' '}
                                <span className="text-xs font-normal text-stone-400">/ Q</span>
                              </div>
                              <span className={`text-xs font-bold block mt-1 ${
                                offer.offeredPrice >= expectedRate ? 'text-emerald-400' : 'text-stone-400'
                              }`}>
                                {offer.offeredPrice >= expectedRate
                                  ? `+₹${(offer.offeredPrice - expectedRate) * quantity} profit`
                                  : `-₹${(expectedRate - offer.offeredPrice) * quantity}`}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Selected Offer Breakdown Card */}
                  <div className="mt-5 bg-stone-900 p-4 rounded-xl border border-stone-700">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="border-r border-stone-800 pr-2">
                        <span className="text-[10px] text-stone-400 block uppercase">Gross Payout</span>
                        <span className="text-sm sm:text-base font-extrabold text-white font-display">
                          ₹{totalPayout.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <div className="border-r border-stone-800 pr-2">
                        <span className="text-[10px] text-stone-400 block uppercase">Middleman Fee Saved</span>
                        <span className="text-sm sm:text-base font-extrabold text-emerald-400 font-display">
                          ₹{standardMandiFeeLost.toLocaleString('en-IN')} (0% cut)
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-stone-400 block uppercase">Farmer Net Gain</span>
                        <span className="text-sm sm:text-base font-extrabold text-amber-300 font-display">
                          {extraEarningVsBase >= 0 ? `+₹${extraEarningVsBase.toLocaleString('en-IN')}` : 'Fair Market Price'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Farmer Action CTA */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-stone-700">
                  <div className="text-xs text-stone-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Zero broker deductions. Direct bank settlement.</span>
                  </div>

                  <button
                    type="button"
                    id="differentiator-accept-btn"
                    onClick={() => {
                      setIsOfferAccepted(true);
                      setTimeout(() => {
                        onOpenJoinModal('farmer');
                      }, 800);
                    }}
                    className={`w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isOfferAccepted
                        ? 'bg-emerald-500 text-stone-950'
                        : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg'
                    }`}
                  >
                    {isOfferAccepted ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Deal Finalized! Creating Farmer Account...</span>
                      </>
                    ) : (
                      <>
                        <span>Choose {selectedBuyer.company.split(' ')[0]} Offer →</span>
                      </>
                    )}
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Tab 2: Fertilizers View */}
        {activeTab === 'fertilizers' && (
          <div className="animate-in fade-in duration-300">
            <FertilizerMarketplace onOpenJoinModal={onOpenJoinModal} />
          </div>
        )}

      </div>
    </section>
  );
};
