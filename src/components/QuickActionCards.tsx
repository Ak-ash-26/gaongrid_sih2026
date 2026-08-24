import React from 'react';
import { Sprout, FlaskConical, Recycle, Tractor, ArrowUpRight } from 'lucide-react';

interface QuickActionCardsProps {
  onSelectAction: (targetSection: string, subTab?: string) => void;
}

export const QuickActionCards: React.FC<QuickActionCardsProps> = ({ onSelectAction }) => {
  const actions = [
    {
      id: 'sell-crops',
      target: 'marketplace',
      subTab: 'crops',
      emoji: '🌾',
      icon: Sprout,
      title: 'Sell Crops',
      description: 'Connect directly with verified buyers & processors.',
      badge: 'Zero Middlemen',
      accentColor: 'group-hover:border-emerald-600',
      iconBg: 'bg-emerald-100 text-emerald-800'
    },
    {
      id: 'buy-fertilizers',
      target: 'marketplace',
      subTab: 'fertilizers',
      emoji: '🧪',
      icon: FlaskConical,
      title: 'Buy Fertilizers',
      description: 'Compare certified dealers, live stock & district rates.',
      badge: 'Price Transparency',
      accentColor: 'group-hover:border-blue-600',
      iconBg: 'bg-blue-100 text-blue-800'
    },
    {
      id: 'sell-residue',
      target: 'residue',
      emoji: '♻️',
      icon: Recycle,
      title: 'Sell Residue',
      description: 'Turn agricultural straw & stubble into verified income.',
      badge: 'Don\'t Burn It',
      accentColor: 'group-hover:border-amber-600',
      iconBg: 'bg-amber-100 text-amber-900'
    },
    {
      id: 'farm-services',
      target: 'services',
      emoji: '🚜',
      icon: Tractor,
      title: 'Find Farm Services',
      description: 'Rent heavy machinery & hire local skilled farm labour.',
      badge: 'On-Demand Hiring',
      accentColor: 'group-hover:border-emerald-700',
      iconBg: 'bg-stone-100 text-stone-900'
    }
  ];

  return (
    <section className="relative -mt-6 sm:-mt-8 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              id={`quick-card-${action.id}`}
              type="button"
              onClick={() => onSelectAction(action.target, action.subTab)}
              className={`group relative bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-stone-200 shadow-sm hover:shadow-lg transition-all duration-300 text-left cursor-pointer flex flex-col justify-between ${action.accentColor} hover:-translate-y-1`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl ${action.iconBg} flex items-center justify-center font-bold text-lg shadow-2xs`}>
                    <span>{action.emoji}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-md group-hover:bg-emerald-50 group-hover:text-emerald-800 transition-colors">
                    {action.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                  {action.title}
                </h3>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  {action.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-emerald-800 group-hover:text-emerald-900">
                <span>Access Module</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
