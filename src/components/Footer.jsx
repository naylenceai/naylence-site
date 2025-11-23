import React from 'react';
import { Github, MessageSquare } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-teal-900/30 bg-[#020808] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Logo className="w-6 h-6" />
              <span className="font-bold text-white">
                naylence<span className="text-teal-500">.ai</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm mb-4">
              The agentic fabric for distributed intelligence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/naylence" 
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Visit Naylence on GitHub"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>
              <a 
                href="https://discord.gg/NVjacrm22X" 
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Join Naylence Discord"
              >
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Project</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Examples
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a 
                  href="https://discord.gg/NVjacrm22X" 
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/naylence" 
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/naylence" 
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-teal-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-teal-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-teal-900/30 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {currentYear} Naylence. Open source under Apache 2.0.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

