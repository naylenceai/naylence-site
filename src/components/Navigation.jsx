import React from 'react';
import { Menu, X, Github } from 'lucide-react';
import Logo from './Logo';

const Navigation = ({ isMenuOpen, setIsMenuOpen, scrolled }) => {
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-[#020808]/95 backdrop-blur-md border-teal-900/30 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Logo className="w-10 h-10" />
          <span className="text-xl font-bold text-white tracking-tight">
            naylence<span className="text-teal-500">.ai</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#architecture" 
            className="text-sm font-medium hover:text-teal-400 transition-colors"
            onClick={(e) => handleNavClick(e, '#architecture')}
          >
            Architecture
          </a>
          <a 
            href="#about" 
            className="text-sm font-medium hover:text-teal-400 transition-colors"
            onClick={(e) => handleNavClick(e, '#about')}
          >
            About
          </a>
          <a 
            href="#blog" 
            className="text-sm font-medium hover:text-teal-400 transition-colors"
            onClick={(e) => handleNavClick(e, '#blog')}
          >
            Blog
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium hover:text-teal-400 transition-colors"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Contact
          </a>
          <a 
            href="https://github.com/naylence" 
            target="_blank" 
            rel="noreferrer" 
            className="text-sm font-medium hover:text-teal-400 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://discord.gg/NVjacrm22X" 
            target="_blank" 
            rel="noreferrer" 
            className="text-sm font-medium hover:text-teal-400 transition-colors"
          >
            Discord
          </a>
          <button 
            className="bg-teal-950/50 hover:bg-teal-900/50 text-teal-100 px-4 py-2 rounded-md text-sm font-medium transition-all border border-teal-800/50 flex items-center gap-2 group hover:border-teal-500/50 hover:shadow-[0_0_15px_-5px_rgba(20,184,166,0.3)]"
            aria-label="Star Naylence on GitHub"
          >
            <Github className="w-4 h-4" aria-hidden="true" />
            Star on GitHub
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors" 
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 w-full bg-[#020808] border-b border-teal-900/30 py-4 px-4 flex flex-col space-y-4 shadow-2xl"
        >
          <a 
            href="#architecture" 
            className="text-slate-300 hover:text-teal-400 font-medium transition-colors" 
            onClick={(e) => handleNavClick(e, '#architecture')}
          >
            Architecture
          </a>
          <a 
            href="#about" 
            className="text-slate-300 hover:text-teal-400 font-medium transition-colors" 
            onClick={(e) => handleNavClick(e, '#about')}
          >
            About
          </a>
          <a 
            href="#blog" 
            className="text-slate-300 hover:text-teal-400 font-medium transition-colors" 
            onClick={(e) => handleNavClick(e, '#blog')}
          >
            Blog
          </a>
          <a 
            href="#contact" 
            className="text-slate-300 hover:text-teal-400 font-medium transition-colors" 
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Contact
          </a>
          <a 
            href="https://github.com/naylence" 
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-teal-400 font-medium transition-colors" 
            onClick={() => setIsMenuOpen(false)}
          >
            GitHub
          </a>
          <button 
            className="bg-teal-600 text-white px-5 py-2.5 rounded-lg font-medium w-full hover:bg-teal-500 transition-colors"
            aria-label="Get started with Naylence"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

