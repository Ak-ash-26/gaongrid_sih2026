import React, { useState } from 'react';
import { X, Check, Sprout, Building2, FlaskConical, Tractor, Users, ShieldCheck, ArrowRight } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: string;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose, initialRole = 'farmer' }) => {
  const [role, setRole] = useState<string>(initialRole);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('Deoria, UP');
  const [cropOrService, setCropOrService] = useState('Wheat / Paddy');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const roles = [
    { id: 'farmer', name: 'Farmer', icon: Sprout, desc: 'Sell crops, residue & rent machinery' },
    { id: 'buyer', name: 'Buyer / Miller', icon: Building2, desc: 'Procure bulk crops & biomass residue' },
    { id: 'dealer', name: 'Fertilizer Dealer', icon: FlaskConical, desc: 'List fertilizers & agricultural inputs' },
    { id: 'machinery', name: 'Machinery Owner', icon: Tractor, desc: 'Rent out tractors & harvesters' },
    { id: 'labour', name: 'Labour Leader', icon: Users, desc: 'List farm worker team & availability' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after brief celebration
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl border border-stone-200 shadow-2xl max-w-lg w-full overflow-hidden relative animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-xs">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="text-2xl font-extrabold text-stone-900 font-display">
              Welcome to GaonGrid!
            </h3>
            <p className="text-sm text-stone-600">
              Registration request submitted for <strong>{fullName || 'Farmer Partner'}</strong> ({role.toUpperCase()}). You will receive an SMS confirmation on {phone || '+91 98765 43210'}.
            </p>
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 font-medium">
              <ShieldCheck className="w-4 h-4 inline mr-1 text-emerald-700" />
              Smart India Hackathon 2026 Sandbox: Account provisioned instantly.
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-emerald-800 text-white font-bold text-sm hover:bg-emerald-700 transition-colors cursor-pointer"
            >
              Continue to Dashboard
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            
            <div className="mb-5">
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                SIH Free Registration
              </span>
              <h3 className="text-2xl font-extrabold text-stone-900 font-display mt-1">
                Join the GaonGrid Network
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Choose your role to get direct access, zero middlemen & transparent pricing.
              </p>
            </div>

            {/* Role Switcher */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-5">
              {roles.map((r) => {
                const Icon = r.icon;
                const isSelected = role === r.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRole(r.id)}
                    className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-emerald-900 text-white border-emerald-900 shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-emerald-300' : 'text-stone-600'}`} />
                    <div className="mt-1.5">
                      <span className="text-xs font-bold block leading-tight">{r.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">
                  Full Name / Enterprise Name:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Kumar Yadav"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:bg-white focus:outline-hidden focus:border-emerald-700"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Mobile Number (for OTP):
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:bg-white focus:outline-hidden focus:border-emerald-700"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    District / Village:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Deoria, UP"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:bg-white focus:outline-hidden focus:border-emerald-700"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">
                  Primary Crop or Service Interest:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Wheat, Basmati Rice, Paddy Straw, Tractor Hiring"
                  value={cropOrService}
                  onChange={(e) => setCropOrService(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-xl focus:bg-white focus:outline-hidden focus:border-emerald-700"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-950/20 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Complete Free Registration</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-stone-400 text-center">
                By registering, you agree to direct transparent transactions on GaonGrid.
              </p>
            </form>

          </div>
        )}

      </div>
    </div>
  );
};
