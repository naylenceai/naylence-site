import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Architecture from './components/Architecture';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScroll } from './hooks/useScroll';
import { blogs } from './data/constants';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('python');
  const scrolled = useScroll(20);

  return (
    <div className="min-h-screen bg-[#020808] text-slate-300 font-sans selection:bg-teal-500/30 overflow-x-hidden">
      <Navigation 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        scrolled={scrolled} 
      />
      <Hero activeTab={activeTab} setActiveTab={setActiveTab} />
      <Architecture />
      <Blog blogs={blogs} />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

