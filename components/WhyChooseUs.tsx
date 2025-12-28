
import React from 'react';
import { ShieldCheck, UserCheck, HardHat, PhoneCall } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:flex-1 relative order-2 lg:order-1">
            <img 
              src="https://picsum.photos/seed/electrician/800/600" 
              alt="Electrician Work" 
              className="rounded-3xl shadow-lg w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-brand-yellow px-6 py-4 rounded-2xl shadow-xl hidden md:block">
              <p className="text-slate-900 font-black text-3xl">100%</p>
              <p className="text-slate-800 font-bold uppercase text-[10px]">Safety First</p>
            </div>
          </div>

          <div className="flex-1 order-1 lg:order-2">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-[10px] mb-2">Our Standards</h2>
            <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Safety-First Service
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <ShieldCheck className="text-brand-yellow shrink-0" size={18} />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Licensed</h4>
                  <p className="text-[11px] text-slate-500">Certified Texas professionals.</p>
                </div>
              </div>

              <div className="flex gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <UserCheck className="text-brand-yellow shrink-0" size={18} />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Local</h4>
                  <p className="text-[11px] text-slate-500">Proudly Houston based.</p>
                </div>
              </div>

              <div className="flex gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 col-span-1 sm:col-span-2">
                <HardHat className="text-brand-yellow shrink-0" size={18} />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Clean & Reliable</h4>
                  <p className="text-[11px] text-slate-500">We respect your home and leave it tidy.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-slate-900 p-4 rounded-2xl flex items-center justify-between">
              <div className="pl-2">
                <p className="text-slate-500 text-[10px] font-bold uppercase mb-0.5">Contact Us</p>
                <p className="text-white font-black text-lg">(713) 530-0865</p>
              </div>
              <a href="tel:7135300865" className="bg-brand-yellow text-slate-900 p-3 rounded-xl hover:scale-105 transition-transform">
                <PhoneCall size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
