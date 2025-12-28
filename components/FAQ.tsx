
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Are you a licensed electrician in Texas?",
    answer: "Yes, Perfection Electric of Texas is fully licensed and insured for all residential and commercial electrical work in the state of Texas."
  },
  {
    question: "Do you provide emergency service after hours?",
    answer: "Absolutely. We are open 24 hours a day, 7 days a week. If you have an electrical emergency in the Houston area, call us immediately at (713) 530-0865."
  },
  {
    question: "How do I know if I need a panel upgrade?",
    answer: "Common signs include flickering lights, frequently tripping breakers, or the need to use multiple power strips for basic appliances. We can perform a safety audit to confirm if an upgrade is necessary."
  },
  {
    question: "What specific areas do you cover in Houston?",
    answer: "We are based near Hobby Airport (9125 Airport Blvd) and primarily serve Southeast Houston, Pasadena, Pearland, and surrounding neighborhoods."
  },
  {
    question: "How much do your services typically cost?",
    answer: "Pricing varies based on the complexity of the job. We provide clear, honest estimates before starting any work so you are never surprised by the final bill."
  }
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">FAQ</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Common Questions</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl overflow-hidden border transition-all ${
                  openIdx === idx ? 'border-brand-yellow shadow-md' : 'border-slate-200'
                }`}
              >
                <button 
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900 group"
                >
                  <span className="text-lg md:text-xl pr-8">{faq.question}</span>
                  <div className={`shrink-0 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`}>
                    {openIdx === idx ? <Minus className="text-brand-yellow" /> : <Plus className="text-slate-400 group-hover:text-brand-yellow" />}
                  </div>
                </button>
                {openIdx === idx && (
                  <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed text-lg">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
