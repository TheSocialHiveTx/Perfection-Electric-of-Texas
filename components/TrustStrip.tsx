
import React from 'react';
import { Star } from 'lucide-react';

const TrustStrip: React.FC = () => {
  return (
    <div className="bg-slate-900 py-2.5 border-y border-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-12 text-center">
        <div className="flex items-center space-x-2 text-white">
          <div className="flex">
            {[1, 2, 3, 4].map(i => (
              <Star key={i} size={12} className="fill-brand-yellow text-brand-yellow" />
            ))}
            <Star size={12} className="text-brand-yellow/30" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">3.9/5 Star Local Expert</span>
        </div>
        
        <div className="hidden md:block h-3 w-[1px] bg-slate-700"></div>

        <div className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
          Serving Southeast Houston & Surrounding Areas
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
