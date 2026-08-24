import React, { useState } from 'react';
import { 
  Users, 
  Tractor, 
  MapPin, 
  Star, 
  Calendar, 
  Clock, 
  Compass, 
  ShieldCheck, 
  ArrowRight, 
  Search,
  CheckCircle2,
  PhoneCall,
  SlidersHorizontal
} from 'lucide-react';
import { SAMPLE_MACHINERY, SAMPLE_LABOUR_GROUPS } from '../data/mockData';

interface FarmServicesSectionProps {
  onOpenJoinModal: (role?: string) => void;
}

export const FarmServicesSection: React.FC<FarmServicesSectionProps> = ({ onOpenJoinModal }) => {
  const [selectedMachineryCategory, setSelectedMachineryCategory] = useState<string>('All');
  const [selectedLabourSkill, setSelectedLabourSkill] = useState<string>('All');
  const [bookedItemId, setBookedItemId] = useState<string | null>(null);

  const filteredMachinery = selectedMachineryCategory === 'All' 
    ? SAMPLE_MACHINERY 
    : SAMPLE_MACHINERY.filter(m => m.category === selectedMachineryCategory);

  const filteredLabour = selectedLabourSkill === 'All'
    ? SAMPLE_LABOUR_GROUPS
    : SAMPLE_LABOUR_GROUPS.filter(l => l.specialization.toLowerCase().includes(selectedLabourSkill.toLowerCase()));

  const handleBooking = (id: string) => {
    setBookedItemId(id);
    setTimeout(() => {
      setBookedItemId(null);
      onOpenJoinModal('farmer');
    }, 1200);
  };

  return (
    <section id="services" className="py-24 bg-[#FBFBFA] relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-emerald-700" />
            <span>Farm Operations & Resources</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-display tracking-tight">
            Everything You Need for the Next Farm Operation.
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-4 leading-relaxed">
            Eliminate critical peak-season delays. Discover, compare, and instantly book verified farm machinery and experienced labour squads nearby.
          </p>
        </div>

        {/* Two Large Service Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Find Farm Labour */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between hover:border-emerald-700/60 transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 font-display">
                      Find Farm Labour
                    </h3>
                    <p className="text-xs text-stone-500">
                      Verified teams for harvesting, sowing & transplanting
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-bold bg-emerald-50 text-emerald-800 rounded-md border border-emerald-200 hidden sm:inline-block">
                  Vetted Squads
                </span>
              </div>

              {/* Filters for Labour */}
              <div className="mt-4 flex flex-wrap items-center gap-1.5 text-xs">
                <span className="text-stone-400 text-[11px] font-semibold mr-1">Work Type:</span>
                {['All', 'Harvesting', 'Sowing', 'Weeding'].map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setSelectedLabourSkill(filter)}
                    className={`px-3 py-1 rounded-full font-semibold transition-all cursor-pointer ${
                      selectedLabourSkill === filter
                        ? 'bg-emerald-800 text-white'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Labour Group Cards */}
              <div className="mt-5 space-y-3.5">
                {filteredLabour.map((group) => (
                  <div
                    key={group.id}
                    className="p-4 rounded-xl border border-stone-200 bg-stone-50/60 hover:bg-white hover:border-emerald-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-stone-900">{group.leaderName}</h4>
                        <span className="px-2 py-0.2 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-sm">
                          {group.teamSize} Workers Squad
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 font-medium mt-1">
                        Specialization: {group.specialization}
                      </p>
                      <div className="flex items-center gap-3 text-[11px] text-stone-500 mt-2">
                        <span className="flex items-center gap-1 text-stone-600">
                          <MapPin className="w-3 h-3 text-emerald-700" />
                          {group.location} ({group.distanceKm} km)
                        </span>
                        <span>•</span>
                        <span>{group.experienceYears} yrs experience</span>
                        <span>•</span>
                        <span className="text-amber-600 font-semibold flex items-center gap-0.5">
                          ★ {group.rating}
                        </span>
                      </div>
                    </div>

                    <div className="text-left sm:text-right shrink-0 flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-2 sm:pt-0 border-stone-200">
                      <div>
                        <div className="text-base font-extrabold text-stone-900 font-display">
                          ₹{group.dailyWagePerPerson}
                          <span className="text-xs font-normal text-stone-500"> / person / day</span>
                        </div>
                        <span className="text-[10px] text-emerald-700 font-semibold block">
                          Available Today
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleBooking(group.id)}
                        className="mt-2 px-3 py-1.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                      >
                        {bookedItemId === group.id ? 'Connecting...' : 'Book Team'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Search Criteria Box */}
              <div className="mt-5 p-3.5 bg-stone-100/80 rounded-xl text-xs text-stone-600 space-y-1">
                <div className="font-semibold text-stone-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Fair Daily Wages & Direct Communication</span>
                </div>
                <p>
                  Wage terms and team sizes are confirmed directly before dispatch. No agency cuts or hidden commissions.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-100">
              <button
                type="button"
                id="services-find-labour-btn"
                onClick={() => onOpenJoinModal('farmer')}
                className="w-full py-3 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white text-sm font-bold shadow-md shadow-emerald-950/15 flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Find Farm Labour →</span>
              </button>
            </div>
          </div>

          {/* Card 2: Find Farm Machinery */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between hover:border-amber-700/60 transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
                    <Tractor className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 font-display">
                      Find Farm Machinery
                    </h3>
                    <p className="text-xs text-stone-500">
                      Tractors, harvesters, rotavators & custom hiring units
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-bold bg-amber-100 text-amber-900 rounded-md border border-amber-200 hidden sm:inline-block">
                  Verified CHC Hubs
                </span>
              </div>

              {/* Machinery Category Filters */}
              <div className="mt-4 flex flex-wrap items-center gap-1.5 text-xs">
                <span className="text-stone-400 text-[11px] font-semibold mr-1">Equipment:</span>
                {['All', 'Tractor', 'Harvester', 'Seed Drill'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedMachineryCategory(cat)}
                    className={`px-3 py-1 rounded-full font-semibold transition-all cursor-pointer ${
                      selectedMachineryCategory === cat
                        ? 'bg-amber-800 text-white'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Machinery Items Feed */}
              <div className="mt-5 space-y-3.5">
                {filteredMachinery.map((mach) => (
                  <div
                    key={mach.id}
                    className="p-4 rounded-xl border border-stone-200 bg-stone-50/60 hover:bg-white hover:border-amber-400 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-stone-900">{mach.name}</h4>
                        <span className="px-1.5 py-0.2 bg-stone-200 text-stone-800 text-[9px] font-bold rounded-sm">
                          {mach.model}
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Owner: {mach.ownerName}
                      </p>
                      <div className="flex items-center gap-3 text-[11px] text-stone-500 mt-2">
                        <span className="flex items-center gap-1 text-stone-600">
                          <MapPin className="w-3 h-3 text-amber-700" />
                          {mach.location} ({mach.distanceKm} km away)
                        </span>
                        <span>•</span>
                        <span className="text-amber-600 font-semibold flex items-center gap-0.5">
                          ★ {mach.rating}
                        </span>
                      </div>
                    </div>

                    <div className="text-left sm:text-right shrink-0 flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-2 sm:pt-0 border-stone-200">
                      <div>
                        <div className="text-base font-extrabold text-stone-900 font-display">
                          ₹{mach.ratePerDay.toLocaleString('en-IN')}
                          <span className="text-xs font-normal text-stone-500"> / day</span>
                        </div>
                        {mach.ratePerHour && (
                          <span className="text-[10px] text-stone-500 block">
                            (or ₹{mach.ratePerHour}/hr • ₹{mach.ratePerAcre}/acre)
                          </span>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => handleBooking(mach.id)}
                        className="mt-2 px-3 py-1.5 bg-amber-800 hover:bg-amber-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                      >
                        {bookedItemId === mach.id ? 'Connecting...' : 'Rent Equipment'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Machinery Features Box */}
              <div className="mt-5 p-3.5 bg-stone-100/80 rounded-xl text-xs text-stone-600 space-y-1">
                <div className="font-semibold text-stone-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Transparent Rental Rates & Proximity Dispatch</span>
                </div>
                <p>
                  Machines are geo-located to reduce diesel transit costs and ensure same-day arrival on your farm plot.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-100">
              <button
                type="button"
                id="services-find-machinery-btn"
                onClick={() => onOpenJoinModal('farmer')}
                className="w-full py-3 px-4 rounded-xl bg-amber-800 hover:bg-amber-700 text-white text-sm font-bold shadow-md shadow-amber-950/15 flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Find Farm Machinery →</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
