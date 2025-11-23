import React from 'react';
import { Share2, Shield, Layers, Box, Terminal, Cpu } from 'lucide-react';

const Architecture = () => {
  const features = [
    { 
      icon: Share2, 
      title: "Distributed by Default", 
      desc: "Agents aren't confined to one runtime. They exist across servers, containers, and browsers while behaving like a single fabric." 
    },
    { 
      icon: Shield, 
      title: "Trust as a Protocol", 
      desc: "Security is layered and flexible. Dial it from 'open and experimental' to 'sealed and production-grade' without rewriting code." 
    },
    { 
      icon: Layers, 
      title: "Polyglot Runtime", 
      desc: "First-class support for Python and TypeScript. Write agents in the language best suited for the task." 
    },
  ];

  return (
    <section className="py-24 bg-[#030c0c]" id="architecture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">The Anatomy of the Fabric</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Naylence is built from the ground up as a distributed system. 
            Agents, Nodes, and Sentinels work together to form a secure mesh.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={idx} 
                className="bg-[#020808] p-8 rounded-xl border border-teal-900/30 hover:border-teal-500/50 transition-all group hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-teal-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-500/10 transition-colors">
                  <IconComponent className="w-6 h-6 text-teal-400" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Architecture Diagram */}
        <div className="mt-20 p-8 border border-teal-900/30 rounded-2xl bg-[#020808] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-50"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Box className="text-teal-400" aria-hidden="true" /> Sentinels: The Post Office
              </h3>
              <p className="text-slate-400 mb-6">
                Sentinels route messages, enforce trust boundaries, and manage communication flows. 
                They ensure an agent in one node can talk to another agent across the internet 
                without complex configuration.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-3" aria-hidden="true"></div>
                  Route messages via logical addresses
                </li>
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-3" aria-hidden="true"></div>
                  Enforce security policies dynamically
                </li>
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-3" aria-hidden="true"></div>
                  Connects nodes across Docker, Cloud, & Local
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full bg-[#030c0c] rounded-lg p-6 border border-dashed border-teal-800/50 flex items-center justify-center min-h-[200px]">
              <div className="text-center">
                <div className="flex justify-center gap-8 mb-4" role="presentation">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded bg-teal-950 border border-teal-800 flex items-center justify-center mb-2">
                      <Terminal size={20} aria-hidden="true" />
                    </div>
                    <span className="text-xs text-slate-500">Agent A</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="h-0.5 w-16 bg-teal-500/50 relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#030c0c] px-2 text-[10px] text-teal-400">ENVELOPE</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded bg-teal-950 border border-teal-500/50 flex items-center justify-center mb-2 shadow-[0_0_15px_-5px_rgba(45,212,191,0.3)]">
                      <Box size={20} className="text-teal-400" aria-hidden="true" />
                    </div>
                    <span className="text-xs text-teal-400">Sentinel</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="h-0.5 w-16 bg-teal-500/50 relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#030c0c] px-2 text-[10px] text-teal-400">ROUTE</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded bg-teal-950 border border-teal-800 flex items-center justify-center mb-2">
                      <Cpu size={20} aria-hidden="true" />
                    </div>
                    <span className="text-xs text-slate-500">Agent B</span>
                  </div>
                </div>
                <div className="text-xs text-slate-600">Agents discover each other through the fabric</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;

