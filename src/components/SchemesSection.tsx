import React, { useState } from 'react';
import { 
  Landmark, 
  CheckCircle2, 
  FileText, 
  ExternalLink, 
  Info, 
  ShieldCheck, 
  HelpCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { GOV_SCHEMES_DATA } from '../data/mockData';
import { GovScheme } from '../types';

interface SchemesSectionProps {
  onSelectScheme?: (scheme: GovScheme) => void;
  onOpenJoinModal: (role?: string) => void;
}

export const SchemesSection: React.FC<SchemesSectionProps> = ({ onOpenJoinModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedScheme, setSelectedScheme] = useState<GovScheme | null>(GOV_SCHEMES_DATA[0]);

  const categories = ['All', 'Income Support', 'Insurance', 'Mechanization', 'Irrigation', 'Soil & Inputs'];

  const filteredSchemes = activeCategory === 'All'
    ? GOV_SCHEMES_DATA
    : GOV_SCHEMES_DATA.filter(s => s.category === activeCategory);

  return (
    <section id="schemes" className="py-24 bg-stone-100/60 relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Landmark className="w-3.5 h-3.5 text-purple-700" />
            <span>Government Assistance & Subsidies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-display tracking-tight">
            Don't Miss the Benefits You May Be Eligible For.
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-4 leading-relaxed">
            Discover official agricultural schemes, machinery subsidies, crop insurance, and financial support programs relevant to your farm.
          </p>

          {/* SIH Prototype Notice Banner */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-xs font-medium text-left">
            <Info className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>SIH Prototype Notice:</strong> Scheme references are factual central & state programs. Eligibility verification is demonstrated as a prototype advisory tool.
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-purple-900 text-white shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-200/80 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Schemes Layout: List on Left, Active Detailed Recommendation on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Scheme Cards Feed */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
              Verified Government Support Programs ({filteredSchemes.length})
            </h3>
            {filteredSchemes.map((scheme) => {
              const isSelected = selectedScheme?.id === scheme.id;
              return (
                <div
                  key={scheme.id}
                  onClick={() => setSelectedScheme(scheme)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-white border-purple-600 shadow-md ring-2 ring-purple-600/20'
                      : 'bg-white/80 border-stone-200 hover:border-purple-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-md bg-purple-100 text-purple-800">
                      {scheme.tag}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Potentially Eligible
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-stone-900 font-display">
                    {scheme.name}
                  </h4>
                  {scheme.hindiName && (
                    <p className="text-xs text-stone-500 mt-0.5 font-medium">
                      {scheme.hindiName}
                    </p>
                  )}

                  <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                    {scheme.benefits}
                  </p>

                  <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-purple-800">
                    <span>View Required Documents</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Scheme Interactive Recommendation Card */}
          {selectedScheme && (
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-lg flex flex-col justify-between">
              <div>
                {/* Header of Active Scheme */}
                <div className="flex items-start justify-between pb-4 border-b border-stone-100">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                        🟢 Recommended Scheme
                      </span>
                      <span className="text-xs text-stone-400 font-medium">
                        {selectedScheme.category}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-display">
                      {selectedScheme.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Administered by: {selectedScheme.ministry}
                    </p>
                  </div>
                </div>

                {/* Benefits Section */}
                <div className="mt-5 bg-purple-50/70 p-4 rounded-xl border border-purple-200">
                  <h4 className="text-xs font-bold uppercase text-purple-900 tracking-wider mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                    Key Benefits & Financial Assistance:
                  </h4>
                  <p className="text-sm font-medium text-purple-950 leading-relaxed">
                    {selectedScheme.benefits}
                  </p>
                </div>

                {/* Eligibility Criteria */}
                <div className="mt-5">
                  <h4 className="text-xs font-bold uppercase text-stone-500 tracking-wider mb-2">
                    Eligibility Criteria:
                  </h4>
                  <div className="space-y-1.5">
                    {selectedScheme.eligibility.map((el, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{el}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Required Documents Checklist */}
                <div className="mt-5 pt-4 border-t border-stone-100">
                  <h4 className="text-xs font-bold uppercase text-stone-500 tracking-wider mb-2 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-stone-600" />
                    Required Documents Checklist:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedScheme.requiredDocs.map((doc, idx) => (
                      <div key={idx} className="p-2.5 bg-stone-50 rounded-lg border border-stone-200 text-xs font-medium text-stone-800 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0"></span>
                        <span>{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={selectedScheme.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-100 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  id="schemes-check-eligibility-btn"
                  onClick={() => onOpenJoinModal('farmer')}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-purple-900 hover:bg-purple-800 text-white font-bold text-xs shadow-md shadow-purple-950/20 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Check My Profile Eligibility →</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
