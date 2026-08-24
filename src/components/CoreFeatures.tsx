import React from 'react';
import { 
  Sprout, 
  FlaskConical, 
  Recycle, 
  Users, 
  Tractor, 
  Landmark, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface CoreFeaturesProps {
  onSelectFeature: (featureId: string, subTab?: string) => void;
}

export const CoreFeatures: React.FC<CoreFeaturesProps> = ({ onSelectFeature }) => {
  const features = [
    {
      id: 'crop-marketplace',
      target: 'marketplace',
      subTab: 'crops',
      emoji: '🌾',
      icon: Sprout,
      title: 'Direct Crop Marketplace',
      tagline: 'No Unnecessary Middlemen',
      description: 'Sell directly to verified buyers, millers, and corporate procurement. Compare incoming bids transparently before finalizing deals.',
      highlights: ['Direct Crop Listing', 'Live Bids Comparison', 'Farmer Chooses Best Offer'],
      ctaText: 'Explore Marketplace →',
      cardBg: 'bg-white',
      accentColor: 'border-emerald-200 hover:border-emerald-600',
      badgeClass: 'bg-emerald-100 text-emerald-800'
    },
    {
      id: 'fertilizer-marketplace',
      target: 'marketplace',
      subTab: 'fertilizers',
      emoji: '🧪',
      icon: FlaskConical,
      title: 'Fertilizer Marketplace',
      tagline: 'Compare Prices & Real Stock',
      description: 'Locate authorized fertilizer dealers, check real-time stock availability, compare brand MRPs, and prevent black-market markups.',
      highlights: ['Dealer Distance Map', 'Live Stock Status', 'Govt Subsidized MRPs'],
      ctaText: 'Compare Fertilizers →',
      cardBg: 'bg-white',
      accentColor: 'border-stone-200 hover:border-blue-600',
      badgeClass: 'bg-blue-100 text-blue-800'
    },
    {
      id: 'crop-residue',
      target: 'residue',
      emoji: '♻️',
      icon: Recycle,
      title: 'Crop Residue Marketplace',
      tagline: "Don't Burn It. Earn From It.",
      description: 'Connect agricultural straw, stubble, and sugarcane residue with biomass power plants, bio-coal pellet makers, and composting industries.',
      highlights: ['Paddy & Wheat Straw', 'Verified Biofuel Buyers', 'Bulk Transport Assistance'],
      ctaText: 'Monetize Residue →',
      cardBg: 'bg-white',
      accentColor: 'border-stone-200 hover:border-amber-600',
      badgeClass: 'bg-amber-100 text-amber-900'
    },
    {
      id: 'farm-labour',
      target: 'services',
      emoji: '👷',
      icon: Users,
      title: 'Farm Labour Grid',
      tagline: 'Reliable Agricultural Teams',
      description: 'Find vetted agricultural worker groups for sowing, transplanting, weeding, harvesting, and loading with clear daily wage transparency.',
      highlights: ['Location & Radius Filter', 'Skill & Experience Tags', 'Direct Contact & Booking'],
      ctaText: 'Find Farm Labour →',
      cardBg: 'bg-white',
      accentColor: 'border-stone-200 hover:border-emerald-600',
      badgeClass: 'bg-emerald-100 text-emerald-800'
    },
    {
      id: 'farm-machinery',
      target: 'services',
      emoji: '🚜',
      icon: Tractor,
      title: 'Farm Machinery Rental',
      tagline: 'Tractors, Harvesters & Implements',
      description: 'Rent heavy equipment by day, hour, or acre from local Custom Hiring Centers and machinery owners during critical crop phases.',
      highlights: ['Tractors & Harvesters', 'Transparent Rental Rates', 'Distance-Based Booking'],
      ctaText: 'Find Machinery →',
      cardBg: 'bg-white',
      accentColor: 'border-stone-200 hover:border-emerald-700',
      badgeClass: 'bg-stone-100 text-stone-900'
    },
    {
      id: 'gov-schemes',
      target: 'schemes',
      emoji: '🏛️',
      icon: Landmark,
      title: 'Government Schemes Discovery',
      tagline: 'Verified Subsidies & Benefits',
      description: 'Discover relevant agricultural schemes, subsidies, and insurance programs without misleading claims. Verified document checklists included.',
      highlights: ['PM-KISAN & PMFBY Details', 'Subsidies on Machinery (SMAM)', 'Direct Application Portals'],
      ctaText: 'Discover Schemes →',
      cardBg: 'bg-white',
      accentColor: 'border-stone-200 hover:border-purple-600',
      badgeClass: 'bg-purple-100 text-purple-800'
    }
  ];

  return (
    <section id="features" className="py-20 bg-[#FBFBFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Six Core Modules</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight">
            One Grid. Multiple Opportunities.
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3 leading-relaxed">
            Every feature is engineered to tackle real operational bottlenecks for Indian farmers and rural stakeholders.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={`feature-card-${item.id}`}
                className={`p-7 rounded-2xl border transition-all duration-300 shadow-2xs hover:shadow-lg flex flex-col justify-between ${item.cardBg} ${item.accentColor} group`}
              >
                <div>
                  {/* Top row: Emoji/Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                      <span>{item.emoji}</span>
                    </div>
                    <span className={`px-2.5 py-1 text-xs font-bold rounded-md ${item.badgeClass}`}>
                      {item.tagline}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-sm mt-2.5 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlight Checklist */}
                  <div className="mt-5 pt-4 border-t border-stone-100 space-y-2">
                    {item.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6 pt-4">
                  <button
                    type="button"
                    onClick={() => onSelectFeature(item.target, item.subTab)}
                    className="w-full py-2.5 px-4 rounded-xl bg-stone-50 group-hover:bg-emerald-800 group-hover:text-white text-stone-800 text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border border-stone-200 group-hover:border-emerald-800"
                  >
                    <span>{item.ctaText}</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
