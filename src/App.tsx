import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QuickActionCards } from './components/QuickActionCards';
import { ProblemSection } from './components/ProblemSection';
import { CoreFeatures } from './components/CoreFeatures';
import { DifferentiatorSection } from './components/DifferentiatorSection';
import { ResidueSection } from './components/ResidueSection';
import { FarmServicesSection } from './components/FarmServicesSection';
import { SchemesSection } from './components/SchemesSection';
import { HowItWorks } from './components/HowItWorks';
import { ImpactSection } from './components/ImpactSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';
import { LoginModal } from './components/LoginModal';
import { MarketplaceModal } from './components/MarketplaceModal';

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [joinModalRole, setJoinModalRole] = useState<string>('farmer');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMarketplaceOpen, setIsMarketplaceOpen] = useState(false);
  const [marketplaceTab, setMarketplaceTab] = useState<'crops' | 'fertilizers'>('crops');

  const handleOpenJoinModal = (role: string = 'farmer') => {
    setJoinModalRole(role);
    setIsJoinModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string, subTab?: string) => {
    if (subTab === 'fertilizers' || subTab === 'crops') {
      setMarketplaceTab(subTab);
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'marketplace') {
      setIsMarketplaceOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-stone-900 font-sans selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenJoinModal={handleOpenJoinModal}
        onOpenLoginModal={() => setIsLoginModalOpen(true)}
        onOpenMarketplace={() => setIsMarketplaceOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <HeroSection
          onOpenJoinModal={handleOpenJoinModal}
          onExploreMarketplace={() => setIsMarketplaceOpen(true)}
        />

        {/* 2. Quick Action Cards (Floating / Snapping below hero) */}
        <QuickActionCards onSelectAction={handleScrollToSection} />

        {/* 3. Problem Section ("Farmers Shouldn't Have to Navigate Agriculture Alone") */}
        <ProblemSection />

        {/* 4. Core Features ("One Grid. Multiple Opportunities.") */}
        <CoreFeatures onSelectFeature={handleScrollToSection} />

        {/* 5. Main Differentiator ("No Middlemen. More Choices. Better Deals.") */}
        <DifferentiatorSection 
          onOpenJoinModal={handleOpenJoinModal}
          activeTab={marketplaceTab}
          onTabChange={setMarketplaceTab}
        />

        {/* 6. Crop Residue Section ("Don't Burn It. Earn From It.") */}
        <ResidueSection onOpenJoinModal={handleOpenJoinModal} />

        {/* 7. Farm Services Section ("Everything You Need for the Next Farm Operation.") */}
        <FarmServicesSection onOpenJoinModal={handleOpenJoinModal} />

        {/* 8. Government Schemes Section ("Don't Miss the Benefits You May Be Eligible For.") */}
        <SchemesSection onOpenJoinModal={handleOpenJoinModal} />

        {/* 9. How It Works (4-Step Process Timeline) */}
        <HowItWorks onOpenJoinModal={() => handleOpenJoinModal('farmer')} />

        {/* 10. Impact Section (Prototype Demonstration Metrics) */}
        <ImpactSection />

        {/* 11. FAQ Accordion Section */}
        <FAQSection />

        {/* 12. Final High-Impact CTA */}
        <FinalCTA
          onOpenJoinModal={handleOpenJoinModal}
          onExploreMarketplace={() => setIsMarketplaceOpen(true)}
        />

      </main>

      {/* Footer */}
      <Footer
        onOpenJoinModal={handleOpenJoinModal}
        onOpenMarketplace={() => setIsMarketplaceOpen(true)}
      />

      {/* Interactive Modals */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        initialRole={joinModalRole}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />

      <MarketplaceModal
        isOpen={isMarketplaceOpen}
        onClose={() => setIsMarketplaceOpen(false)}
        onOpenJoinModal={handleOpenJoinModal}
        initialTab={marketplaceTab}
      />

    </div>
  );
}
