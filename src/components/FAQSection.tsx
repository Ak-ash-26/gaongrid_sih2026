import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does GaonGrid eliminate middlemen while ensuring transaction safety?',
      answer: 'GaonGrid allows farmers to publish crop lots directly to verified institutional buyers, flour mills, and wholesale traders. Multiple buyers place direct competitive bids in real time. The farmer chooses the highest or most convenient offer. Payments are settled digitally with escrow/delivery confirmation, eliminating traditional 6–10% commission deductions by unofficial brokers.'
    },
    {
      question: 'How does the Crop Residue monetization model stop stubble burning?',
      answer: 'Farmers list their agricultural residue (paddy straw, wheat straw, bagasse) along with location and estimated tonnage. GaonGrid maps these listings to nearby biomass power plants, bio-coal briquette manufacturers, and composting units that purchase stubble in bulk. Logistics and tractor-trolley transport are coordinated through the grid so the farmer receives clean earnings instead of burning waste.'
    },
    {
      question: 'How can farmers compare fertilizer prices and stock availability?',
      answer: 'The Fertilizer Marketplace module connects to authorized district dealers and cooperative societies (e.g. IFFCO, KRIBHCO). Farmers can view official Government subsidized MRPs, check live inventory status, and find the closest dealer within a few kilometers to avoid black-market markups during peak fertilizer demand.'
    },
    {
      question: 'How are farm machinery rentals and labour groups organized during peak seasons?',
      answer: 'Tractor owners, combine harvester operators, Custom Hiring Centers (CHCs), and local agricultural labour leaders list their rates, equipment models, and squad sizes. Farmers can book nearby services based on transparent daily or hourly pricing and geographic proximity, reducing diesel transit costs and preventing critical crop delays.'
    },
    {
      question: 'How does GaonGrid handle Government Schemes information without misleading claims?',
      answer: 'GaonGrid acts as a clean informational directory for verified central and state agricultural welfare programs (such as PM-KISAN, PMFBY, and SMAM machinery subsidies). It provides genuine eligibility criteria, required document checklists, and direct links to official government portals without making unverified benefit promises.'
    },
    {
      question: 'What is the role of this prototype in Smart India Hackathon (SIH)?',
      answer: 'This prototype demonstrates a unified, scalable digital infrastructure designed to solve agrarian fragmentation. It integrates six critical verticals (direct crop commerce, inputs, residue recovery, mechanization, labour, and welfare) into an accessible interface tailored for Indian farmers and rural stakeholders.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight">
            Everything You Need to Know About GaonGrid
          </h2>
          <p className="text-stone-600 text-base mt-3">
            Clear answers on marketplace functioning, stubble monetization, and security.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'border-emerald-700/60 bg-emerald-950/2 shadow-xs'
                    : 'border-stone-200 bg-[#FBFBFA] hover:border-stone-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                >
                  <span className="text-base font-bold text-stone-900 font-display">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-emerald-800 text-white rotate-180' : 'bg-stone-200 text-stone-700'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
