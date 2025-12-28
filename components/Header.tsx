
import React from 'react';
import { Phone, Zap } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-md py-2' : 'bg-white/80 backdrop-blur-xs py-3'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-brand-yellow p-1 rounded-md shadow-sm">
            <Zap className="text-slate-900 w-5 h-5 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className={`font-extrabold text-base leading-tight uppercase tracking-tighter ${
              isScrolled ? 'text-white' : 'text-slate-900'
            }`}>
              Perfection Electric
            </span>
            <span className={`text-[9px] font-bold uppercase tracking-[0.15em] ${
              isScrolled ? 'text-brand-yellow' : 'text-slate-500'
            }`}>
              of Texas
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center space-x-6">
          <a href="#services" className={`text-xs font-bold uppercase tracking-wider hover:text-brand-yellow transition-colors ${
            isScrolled ? 'text-white' : 'text-slate-700'
          }`}>Services</a>
          <a href="#areas" className={`text-xs font-bold uppercase tracking-wider hover:text-brand-yellow transition-colors ${
            isScrolled ? 'text-white' : 'text-slate-700'
          }`}>Areas</a>
          <a href="#faq" className={`text-xs font-bold uppercase tracking-wider hover:text-brand-yellow transition-colors ${
            isScrolled ? 'text-white' : 'text-slate-700'
          }`}>FAQ</a>
        </nav>

        <a 
          href="tel:7135300865" 
          className="flex items-center space-x-2 bg-brand-yellow hover:bg-yellow-500 text-slate-900 px-4 py-2 rounded-full font-bold text-sm transition-all shadow-sm active:scale-95"
        >
          <Phone size={14} className="fill-current" />
          <span className="hidden sm:inline">(713) 530-0865</span>
          <span className="sm:hidden uppercase text-[10px]">Call</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
