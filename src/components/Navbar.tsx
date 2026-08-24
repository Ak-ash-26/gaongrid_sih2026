import { useState, useEffect } from 'react';
import { Menu, X, Globe, Sprout, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';

interface NavbarProps {
  onOpenJoinModal: (role?: string) => void;
  onOpenLoginModal: () => void;
  onOpenMarketplace: () => void;
}

export const Navbar = ({ onOpenJoinModal, onOpenLoginModal, onOpenMarketplace }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active link spy
      const sections = ['home', 'marketplace', 'services', 'residue', 'schemes', 'about'];
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Marketplace', href: '#marketplace', id: 'marketplace' },
    { label: 'Farm Services', href: '#services', id: 'services' },
    { label: 'Crop Residue', href: '#residue', id: 'residue' },
    { label: 'Schemes', href: '#schemes', id: 'schemes' },
    { label: 'About', href: '#about', id: 'about' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-emerald-900/10 shadow-xs py-3.5'
          : 'bg-[#FBFBFA]/90 backdrop-blur-xs border-b border-emerald-950/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a
            href="#home"
            id="nav-logo"
            className="flex items-center gap-2.5 group focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center shadow-md shadow-emerald-900/15 group-hover:bg-emerald-700 transition-colors">
              <div className="relative">
                <Sprout className="w-5 h-5 text-emerald-300 stroke-[2.2]" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full border-2 border-emerald-800"></span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-emerald-950 font-display">
                  Gaon<span className="text-emerald-700">Grid</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-emerald-100 text-emerald-800 rounded-md border border-emerald-200 uppercase tracking-wider">
                  SIH 2026
                </span>
              </div>
              <span className="text-[11px] font-medium text-emerald-800/70 hidden sm:block">
                Digital Agriculture Ecosystem
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-emerald-950/5 p-1 rounded-full border border-emerald-900/10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                id={`nav-link-${link.id}`}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeSection === link.id
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-stone-700 hover:text-emerald-900 hover:bg-emerald-900/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions (Lang Selector + Login + Get Started) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative flex items-center bg-stone-100 border border-stone-200 rounded-lg px-2 py-1 text-xs font-medium text-stone-700">
              <Globe className="w-3.5 h-3.5 text-emerald-700 mr-1.5" />
              <select
                id="language-select"
                value={selectedLang}
                onChange={(e) => setSelectedLang(e.target.value)}
                className="bg-transparent border-none focus:outline-hidden cursor-pointer text-stone-800 font-medium pr-1"
              >
                <option value="EN">English</option>
                <option value="HI">हिन्दी (Hindi)</option>
                <option value="PA">ਪੰਜਾਬੀ (Punjabi)</option>
                <option value="MR">मराठी (Marathi)</option>
              </select>
            </div>

            {/* Login Button */}
            <button
              type="button"
              id="nav-login-btn"
              onClick={onOpenLoginModal}
              className="px-3.5 py-2 text-sm font-medium text-stone-700 hover:text-emerald-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
            >
              Login
            </button>

            {/* Get Started Button */}
            <button
              type="button"
              id="nav-get-started-btn"
              onClick={() => onOpenJoinModal('farmer')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-700 active:bg-emerald-900 rounded-lg shadow-sm shadow-emerald-900/20 transition-all cursor-pointer"
            >
              <UserCheck className="w-4 h-4" />
              <span>Get Started</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden bg-white border-b border-emerald-900/10 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 text-sm font-medium rounded-lg ${
                  activeSection === link.id
                    ? 'bg-emerald-800 text-white font-semibold'
                    : 'text-stone-800 hover:bg-stone-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-stone-200 flex flex-col gap-2.5">
            <div className="flex items-center justify-between px-2 py-1">
              <span className="text-xs text-stone-500 font-medium">Select Language:</span>
              <div className="flex items-center gap-1">
                {['EN', 'HI', 'PA'].map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setSelectedLang(lang)}
                    className={`px-2.5 py-1 text-xs rounded-md ${
                      selectedLang === lang
                        ? 'bg-emerald-800 text-white font-semibold'
                        : 'bg-stone-100 text-stone-700'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-2">
              <button
                type="button"
                id="mobile-login-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLoginModal();
                }}
                className="w-full py-2.5 text-center text-sm font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg"
              >
                Login
              </button>
              <button
                type="button"
                id="mobile-register-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal('farmer');
                }}
                className="w-full py-2.5 text-center text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg flex items-center justify-center gap-1"
              >
                <span>Join Free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
