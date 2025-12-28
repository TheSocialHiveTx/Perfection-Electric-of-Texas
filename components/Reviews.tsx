
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Social Proof</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">What Houston Neighbors Say</h3>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} size={24} className={i <= 4 ? "fill-brand-yellow text-brand-yellow" : "text-slate-200 fill-slate-200"} />
              ))}
            </div>
            <span className="font-bold text-xl">3.9 / 5.0</span>
            <span className="text-slate-400 ml-2">(7 Verified Reviews)</span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-50 p-10 md:p-16 rounded-[3rem] relative">
            <Quote className="absolute top-10 right-10 text-slate-200 w-20 h-20 -z-0" />
            <div className="relative z-10 text-center">
              <p className="text-2xl md:text-3xl font-medium text-slate-700 italic leading-relaxed mb-10">
                "We take great pride in delivering perfection to every customer in Texas. Whether it's a small repair or a massive upgrade, our 3.9-star rating reflects our commitment to local excellence."
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center font-black text-xl text-slate-900">
                  PE
                </div>
                <div className="text-left">
                  <p className="font-bold text-slate-900">Perfection Electric of Texas</p>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-widest">Houston Local Business</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://www.google.com/search?q=Perfection+Electric+of+Texas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 font-bold text-sm uppercase tracking-widest transition-colors"
            >
              View More Google Reviews →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
