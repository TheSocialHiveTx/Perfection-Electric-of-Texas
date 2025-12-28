
import React from 'react';
import { Phone } from 'lucide-react';

const StickyCallBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] px-4 pb-4 md:hidden">
      <div className="container mx-auto">
        <a 
          href="tel:7135300865" 
          className="flex items-center justify-center space-x-3 w-full bg-brand-yellow text-slate-900 h-14 rounded-xl shadow-2xl shadow-brand-yellow/40 font-black text-lg uppercase tracking-tight transition-transform active:scale-95 border-b-4 border-yellow-600"
        >
          <Phone className="fill-current" size={20} />
          <span>Call: (713) 530-0865</span>
        </a>
      </div>
    </div>
  );
};

export default StickyCallBar;
