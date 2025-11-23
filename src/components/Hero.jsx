import React from 'react';
import { ArrowRight, Github } from 'lucide-react';
import CodePreview from './CodePreview';

const Hero = ({ activeTab, setActiveTab }) => {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Large Swirl Background */}
        <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] opacity-[0.03] rotate-12 pointer-events-none">
          <img src="/swirl-original.png" alt="" className="w-full h-full object-contain" aria-hidden="true" />
        </div>
        
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-teal-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-emerald-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-950/50 border border-teal-800/50 text-teal-400 text-xs font-semibold mb-6 backdrop-blur-sm">
              <span className="flex h-1.5 w-1.5 rounded-full bg-teal-400 mr-2 animate-pulse" aria-hidden="true"></span>
              The Agentic Fabric is Live
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Redefining how <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">
                AI Agents
              </span> communicate.
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
              A framework for building networks of distributed agents that can discover, talk, and collaborate securely. Treat interaction as a primitive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://github.com/naylence/naylence-examples-python"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-[#020808] transition-all duration-200 bg-teal-400 rounded-lg hover:bg-teal-300 hover:shadow-[0_0_20px_-5px_rgba(45,212,191,0.5)]"
                aria-label="Read the Naylence documentation"
              >
                Read the Docs
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </a>
              <a 
                href="https://github.com/naylence"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white transition-all duration-200 bg-teal-950/30 border border-teal-800/50 rounded-lg hover:bg-teal-900/50 hover:border-teal-700"
                aria-label="View Naylence on GitHub"
              >
                <Github className="mr-2 w-4 h-4" aria-hidden="true" />
                View on GitHub
              </a>
            </div>
          </div>

          {/* Code/Terminal Preview */}
          <CodePreview activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

