
import React from 'react';
import { Lightbulb, Wrench, ShieldAlert, Zap, Home, Building } from 'lucide-react';

const services = [
  {
    title: "Emergency Repairs",
    description: "24/7 response for sparks or outages.",
    icon: ShieldAlert,
    color: "bg-red-50 text-red-600"
  },
  {
    title: "Panel Upgrades",
    description: "Modernize for high-demand loads.",
    icon: Zap,
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    title: "Home Wiring",
    description: "New builds and historic rewiring.",
    icon: Home,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Lighting",
    description: "Indoor & outdoor LED solutions.",
    icon: Lightbulb,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Commercial",
    description: "Reliable service for businesses.",
    icon: Building,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Inspections",
    description: "Safety audits and code compliance.",
    icon: Wrench,
    color: "bg-emerald-50 text-emerald-600"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 px-4">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-[10px] mb-2">Capabilities</h2>
          <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900">Expert Electrical Care</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group flex flex-col items-center text-center"
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform ${service.color}`}>
                <service.icon size={20} className="md:w-6 md:h-6" />
              </div>
              <h4 className="text-sm md:text-lg font-bold text-slate-900 mb-1 leading-tight">{service.title}</h4>
              <p className="text-[11px] md:text-sm text-slate-500 leading-tight md:leading-relaxed mb-3">
                {service.description}
              </p>
              <a 
                href="tel:7135300865" 
                className="mt-auto text-[9px] md:text-xs font-black uppercase text-brand-yellow hover:underline"
              >
                Call Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
