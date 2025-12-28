
import React from 'react';
import { MapPin } from 'lucide-react';

const neighborhoods = [
  "Southeast Houston", "Pasadena", "Deer Park", "Pearland", 
  "South Belt / Ellington", "Clear Lake", "Hobby Airport Area", 
  "Friendswood", "Galveston County", "Greater Houston"
];

const ServiceArea: React.FC = () => {
  return (
    <section id="areas" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/10 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-brand-yellow font-bold tracking-widest uppercase text-sm mb-4">Our Service Area</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-6">Proudly Serving Houston, TX</h3>
            <p className="text-slate-400 text-lg">
              Based at 9125 Airport Blvd, we provide rapid response to neighborhoods across the Southeast.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {neighborhoods.map((area, idx) => (
              <div key={idx} className="flex items-center space-x-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <MapPin className="text-brand-yellow shrink-0" size={18} />
                <span className="font-medium text-slate-200">{area}</span>
              </div>
            ))}
          </div>

          <div className="bg-brand-yellow text-slate-900 rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl shadow-brand-yellow/20">
            <h4 className="text-3xl md:text-4xl font-black mb-6 italic">In the Dark? Don't Wait.</h4>
            <p className="text-lg md:text-xl font-bold mb-10 opacity-90">Our technicians are on standby 24 hours a day to restore your power.</p>
            <a 
              href="tel:7135300865" 
              className="inline-flex items-center space-x-3 bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition-all transform hover:scale-105 active:scale-95 shadow-xl"
            >
              <span className="uppercase">Call (713) 530-0865 Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
