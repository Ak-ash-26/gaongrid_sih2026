import React from 'react';
import { Sprout, Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenJoinModal: (role?: string) => void;
  onOpenMarketplace: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenJoinModal, onOpenMarketplace }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center shadow-md">
                <Sprout className="w-5 h-5 text-emerald-300 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight text-white font-display">
                  Gaon<span className="text-emerald-400">Grid</span>
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
              <strong>"Connecting Farmers to Better Opportunities."</strong>
              <br />
              A unified digital ecosystem bridging farmers directly with buyers, input dealers, residue processors, machinery owners, and government welfare programs.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950/80 border border-emerald-800/80 rounded-lg text-xs font-semibold text-emerald-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Smart India Hackathon 2026 Prototype</span>
              </span>
            </div>
          </div>

          {/* Column 1: Platform */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#marketplace" className="hover:text-emerald-400 transition-colors">
                  Crop Marketplace
                </a>
              </li>
              <li>
                <a href="#marketplace" className="hover:text-emerald-400 transition-colors">
                  Fertilizers & Inputs
                </a>
              </li>
              <li>
                <a href="#residue" className="hover:text-emerald-400 transition-colors">
                  Crop Residue (Parali)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Farm Labour Hiring
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Farm Machinery Rental
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#schemes" className="hover:text-emerald-400 transition-colors">
                  Government Schemes
                </a>
              </li>
              <li>
                <a href="#schemes" className="hover:text-emerald-400 transition-colors">
                  Subsidies & Insurance
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Help Center & FAQs
                </a>
              </li>
              <li>
                <a href="#problem" className="hover:text-emerald-400 transition-colors">
                  Agritech Whitepaper
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  About GaonGrid
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-emerald-400 transition-colors">
                  Rural Impact & Scope
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenJoinModal('buyer')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Partner as Buyer / Miller
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenJoinModal('dealer')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Dealer Network
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © 2026 GaonGrid — SIH Prototype. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Farmer Charter</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
