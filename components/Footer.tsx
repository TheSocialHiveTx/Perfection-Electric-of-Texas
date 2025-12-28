
import React from 'react';
import { Phone, Mail, MapPin, Zap, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="text-brand-yellow w-8 h-8 fill-current" />
              <div className="flex flex-col">
                <span className="font-extrabold text-xl leading-tight uppercase tracking-tighter text-white">
                  Perfection Electric
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-yellow">
                  of Texas
                </span>
              </div>
            </div>
            <p className="mb-8 text-slate-400">
              Your safety is our priority. Professional electrical services in Houston, TX since 2011. Open 24/7 for your convenience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-slate-900 rounded-full hover:bg-brand-yellow hover:text-slate-900 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 bg-slate-900 rounded-full hover:bg-brand-yellow hover:text-slate-900 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h5>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-brand-yellow transition-colors">Services</a></li>
              <li><a href="#areas" className="hover:text-brand-yellow transition-colors">Service Area</a></li>
              <li><a href="#faq" className="hover:text-brand-yellow transition-colors">FAQ</a></li>
              <li><a href="tel:7135300865" className="hover:text-brand-yellow transition-colors font-bold text-white italic">24/7 Emergency Dispatch</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact Info</h5>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-brand-yellow shrink-0 mt-1" size={18} />
                <span>9125 Airport Blvd Suite C2,<br />Houston, TX 77061</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-brand-yellow shrink-0" size={18} />
                <a href="tel:7135300865" className="text-white font-bold">(713) 530-0865</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-brand-yellow shrink-0" size={18} />
                <span>TBD@petexas.us</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Hours</h5>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-200">Monday - Sunday</span>
                <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Open</span>
              </div>
              <p className="text-white font-bold text-2xl uppercase">24 Hours</p>
              <p className="text-xs mt-4 italic opacity-50">Immediate response available 365 days a year.</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest font-medium text-slate-600 uppercase">
          <p>© 2024 Perfection Electric of Texas. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
