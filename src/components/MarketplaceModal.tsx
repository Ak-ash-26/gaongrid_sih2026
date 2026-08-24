import React, { useState } from 'react';
import { 
  X, 
  Search, 
  Sprout, 
  FlaskConical, 
  Recycle, 
  Tractor, 
  Users, 
  MapPin, 
  Star, 
  ArrowRight,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { 
  SAMPLE_CROP_LISTINGS, 
  SAMPLE_FERTILIZERS, 
  SAMPLE_RESIDUE_LISTINGS, 
  SAMPLE_MACHINERY, 
  SAMPLE_LABOUR_GROUPS 
} from '../data/mockData';

interface MarketplaceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenJoinModal: (role?: string) => void;
  initialTab?: 'crops' | 'fertilizers' | 'residue' | 'machinery' | 'labour';
}

export const MarketplaceModal: React.FC<MarketplaceModalProps> = ({ 
  isOpen, 
  onClose, 
  onOpenJoinModal,
  initialTab = 'crops'
}) => {
  const [activeTab, setActiveTab] = useState<'crops' | 'fertilizers' | 'residue' | 'machinery' | 'labour'>(initialTab);
  const [searchQuery, setSearchQuery] = useState('');

  // Sync active tab whenever modal opens or initialTab changes
  React.useEffect(() => {
    if (isOpen && initialTab) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl border border-stone-200 shadow-2xl max-w-4xl w-full h-[85vh] flex flex-col overflow-hidden relative animate-in zoom-in-95 duration-200">
        
        {/* Modal Top Header */}
        <div className="p-5 sm:p-6 bg-stone-900 text-white flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold font-display">
                GaonGrid Live Marketplace Explorer
              </span>
              <span className="px-2 py-0.5 bg-emerald-700 text-emerald-100 text-[10px] font-bold rounded-md uppercase">
                Interactive SIH Demo
              </span>
            </div>
            <p className="text-xs text-stone-400 mt-0.5">
              Live district feed of crops, authorized fertilizer dealers, industrial residue buyers, and equipment.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Switcher & Search Bar */}
        <div className="p-4 bg-stone-50 border-b border-stone-200 shrink-0 space-y-3">
          
          {/* Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: 'crops', label: '🌾 Direct Crops', count: SAMPLE_CROP_LISTINGS.length },
              { id: 'fertilizers', label: '🧪 Fertilizers & Inputs', count: SAMPLE_FERTILIZERS.length },
              { id: 'residue', label: '♻️ Crop Residue', count: SAMPLE_RESIDUE_LISTINGS.length },
              { id: 'machinery', label: '🚜 Farm Machinery', count: SAMPLE_MACHINERY.length },
              { id: 'labour', label: '👷 Labour Groups', count: SAMPLE_LABOUR_GROUPS.length },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === tab.id
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  activeTab === tab.id ? 'bg-emerald-950 text-emerald-200' : 'bg-stone-100 text-stone-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={`Search ${activeTab} by name, crop variety, district or keyword...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-stone-300 rounded-xl focus:outline-hidden focus:border-emerald-700 font-medium"
            />
          </div>

        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          
          {/* CROPS TAB */}
          {activeTab === 'crops' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SAMPLE_CROP_LISTINGS.map((crop) => (
                <div
                  key={crop.id}
                  className="bg-white rounded-2xl p-4 border border-stone-200 shadow-2xs hover:border-emerald-600 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-md">
                          {crop.qualityGrade}
                        </span>
                        <h4 className="text-base font-bold text-stone-900 font-display mt-1">
                          {crop.cropName}
                        </h4>
                        <p className="text-xs text-stone-500">Variety: {crop.variety}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-stone-400 block">Expected</span>
                        <span className="text-sm font-bold text-stone-800">
                          ₹{crop.expectedPrice} / Q
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 bg-stone-50 p-2.5 rounded-xl border border-stone-100 space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-stone-500">Quantity:</span>
                        <strong className="text-stone-800">{crop.quantity} {crop.unit}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Location:</span>
                        <span className="text-stone-700 flex items-center gap-1 font-medium">
                          <MapPin className="w-3 h-3 text-emerald-700" />
                          {crop.location}, {crop.state}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Farmer:</span>
                        <span className="text-stone-800 font-semibold">{crop.farmerName}</span>
                      </div>
                    </div>

                    <div className="mt-3 p-2 bg-emerald-50 rounded-lg border border-emerald-200 flex items-center justify-between text-xs text-emerald-900">
                      <span>{crop.offersCount} Buyer Bids Active</span>
                      <strong className="text-emerald-800">Best: ₹{crop.bestOffer} / Q</strong>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] text-stone-400">Zero Middleman Cut</span>
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenJoinModal('buyer');
                      }}
                      className="px-3.5 py-1.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                    >
                      Place Buyer Bid
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* FERTILIZERS TAB */}
          {activeTab === 'fertilizers' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SAMPLE_FERTILIZERS.map((fert) => (
                <div
                  key={fert.id}
                  className="bg-white rounded-2xl p-4 border border-stone-200 shadow-2xs hover:border-blue-500 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-bold rounded-md">
                          {fert.category}
                        </span>
                        <h4 className="text-base font-bold text-stone-900 font-display mt-1">
                          {fert.name}
                        </h4>
                        <p className="text-xs text-stone-500">Brand: {fert.brand} • {fert.packSize}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-stone-400 block">Official Rate</span>
                        <span className="text-base font-extrabold text-stone-900 font-display">
                          ₹{fert.discountedPrice}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 bg-stone-50 p-2.5 rounded-xl border border-stone-100 space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-stone-500">Dealer:</span>
                        <strong className="text-stone-800">{fert.dealerName}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Address:</span>
                        <span className="text-stone-700 flex items-center gap-1 font-medium">
                          <MapPin className="w-3 h-3 text-emerald-700" />
                          {fert.dealerLocation} ({fert.distanceKm} km away)
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Stock Status:</span>
                        <span className="text-emerald-700 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Available in Store
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs text-amber-600 font-semibold">★ {fert.rating} Dealer Rating</span>
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenJoinModal('farmer');
                      }}
                      className="px-3.5 py-1.5 bg-blue-800 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                    >
                      Reserve / Call Dealer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* RESIDUE TAB */}
          {activeTab === 'residue' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SAMPLE_RESIDUE_LISTINGS.map((res) => (
                <div
                  key={res.id}
                  className="bg-white rounded-2xl p-4 border border-stone-200 shadow-2xs hover:border-amber-500 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="px-2 py-0.5 bg-amber-100 text-amber-900 text-[10px] font-bold rounded-md">
                          Don't Burn It
                        </span>
                        <h4 className="text-base font-bold text-stone-900 font-display mt-1">
                          {res.residueType}
                        </h4>
                        <p className="text-xs text-stone-500">Location: {res.location}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-stone-400 block">Offer Rate</span>
                        <span className="text-base font-extrabold text-amber-900 font-display">
                          ₹{res.pricePerTon} <span className="text-xs font-normal">/ Ton</span>
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 bg-stone-50 p-2.5 rounded-xl border border-stone-100 space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-stone-500">Available Lot:</span>
                        <strong className="text-stone-800">{res.quantityTon} Metric Tons</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Matched Buyers:</span>
                        <span className="text-emerald-800 font-semibold">{res.potentialBuyers[0]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Transport:</span>
                        <span className="text-stone-700">Truck / Trolley Coordinated</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] text-emerald-700 font-medium">CO2 Saved: {res.co2SavedKg / 1000} Tons</span>
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenJoinModal('buyer');
                      }}
                      className="px-3.5 py-1.5 bg-amber-800 hover:bg-amber-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                    >
                      Buy Stubble Lot
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* MACHINERY TAB */}
          {activeTab === 'machinery' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SAMPLE_MACHINERY.map((mach) => (
                <div
                  key={mach.id}
                  className="bg-white rounded-2xl p-4 border border-stone-200 shadow-2xs hover:border-amber-500 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="px-2 py-0.5 bg-stone-100 text-stone-800 text-[10px] font-bold rounded-md">
                          {mach.category}
                        </span>
                        <h4 className="text-base font-bold text-stone-900 font-display mt-1">
                          {mach.name}
                        </h4>
                        <p className="text-xs text-stone-500">Owner: {mach.ownerName}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-stone-400 block">Daily Rent</span>
                        <span className="text-base font-extrabold text-stone-900 font-display">
                          ₹{mach.ratePerDay}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 bg-stone-50 p-2.5 rounded-xl border border-stone-100 space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-stone-500">Distance:</span>
                        <strong className="text-stone-800">{mach.distanceKm} km from your village</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Model:</span>
                        <span className="text-stone-700">{mach.model}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs text-amber-600 font-semibold">★ {mach.rating} Rating</span>
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenJoinModal('farmer');
                      }}
                      className="px-3.5 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                    >
                      Rent Equipment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* LABOUR TAB */}
          {activeTab === 'labour' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SAMPLE_LABOUR_GROUPS.map((lab) => (
                <div
                  key={lab.id}
                  className="bg-white rounded-2xl p-4 border border-stone-200 shadow-2xs hover:border-emerald-600 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-md">
                          {lab.teamSize} Workers Squad
                        </span>
                        <h4 className="text-base font-bold text-stone-900 font-display mt-1">
                          {lab.leaderName}
                        </h4>
                        <p className="text-xs text-stone-500">Specialty: {lab.specialization}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-stone-400 block">Daily Wage</span>
                        <span className="text-base font-extrabold text-stone-900 font-display">
                          ₹{lab.dailyWagePerPerson}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 bg-stone-50 p-2.5 rounded-xl border border-stone-100 space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-stone-500">Village Location:</span>
                        <strong className="text-stone-800">{lab.location} ({lab.distanceKm} km)</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Experience:</span>
                        <span className="text-stone-700">{lab.experienceYears} Years in field operations</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs text-emerald-700 font-semibold">Available for Dispatch</span>
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenJoinModal('farmer');
                      }}
                      className="px-3.5 py-1.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                    >
                      Book Labour Squad
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-stone-500">
            Real-time multi-mandi aggregated data mock for Smart India Hackathon.
          </span>
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenJoinModal('farmer');
            }}
            className="px-4 py-2 bg-emerald-800 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors cursor-pointer"
          >
            Register to Post New Listing
          </button>
        </div>

      </div>
    </div>
  );
};
