
import React from 'react';
import { ShieldCheck, Clock, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 lg:pt-40 lg:pb-24 overflow-hidden bg-white">
      {/* Decorative Background Elements - Subtler on mobile */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl lg:w-96 lg:h-96"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-50 px-2.5 py-1 rounded-full mb-4 border border-yellow-100">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
            </span>
            <span className="text-yellow-800 text-[9px] font-bold uppercase tracking-widest">Live 24/7 Support</span>
          </div>

          <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-4 leading-[1.15] tracking-tight">
            Professional Electrician <br className="hidden md:block" />
            <span className="text-brand-yellow">Services in Houston</span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed px-2">
            Fast, safe, and reliable electrical solutions for Houston homes and businesses. We keep your power on when it matters most.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
            <a 
              href="tel:7135300865" 
              className="w-full sm:w-auto bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 rounded-xl font-bold text-base shadow-lg shadow-slate-200 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              Call (713) 530-0865
            </a>
            <a 
              href="#services" 
              className="w-full sm:w-auto bg-white border border-slate-200 text-slate-600 hover:border-brand-yellow px-8 py-4 rounded-xl font-bold text-base transition-all"
            >
              Our Services
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-t border-slate-50 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-slate-500 text-sm">
              <ShieldCheck className="text-brand-yellow" size={18} />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-slate-500 text-sm">
              <Clock className="text-brand-yellow" size={18} />
              <span className="font-semibold">24/7 Availability</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-slate-500 text-sm">
              <Award className="text-brand-yellow" size={18} />
              <span className="font-semibold">Houston Local</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
