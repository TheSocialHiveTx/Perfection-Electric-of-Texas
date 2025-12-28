
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import ServiceArea from './components/ServiceArea';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyCallBar from './components/StickyCallBar';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <WhyChooseUs />
        <ServiceArea />
        <Reviews />
        <FAQ />
      </main>

      <Footer />
      <StickyCallBar />
    </div>
  );
};

export default App;
