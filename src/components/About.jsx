import React from 'react';
import { Building2, Users, Rocket } from 'lucide-react';

const About = () => {
  const companies = [
    { name: 'Oracle', icon: Building2 },
    { name: 'GE Digital', icon: Building2 },
    { name: 'Microsoft', icon: Building2 },
  ];

  return (
    <section id="about" className="py-24 bg-[#020808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built by Industry Veterans
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            The Naylence team brings decades of experience building distributed systems 
            at scale, with founders who have successfully exited startups and worked at 
            the world's leading technology companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-6 h-6 text-teal-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Startup Success</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Our founders have successfully built and exited multiple startups, 
                    bringing real-world experience in scaling distributed systems and 
                    building products that developers love.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-teal-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Silicon Valley Roots</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Based in Silicon Valley, we're at the heart of innovation, 
                    surrounded by the companies and engineers pushing the boundaries 
                    of what's possible with distributed systems and AI.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#030c0c] p-8 rounded-xl border border-teal-900/30">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Users className="text-teal-400" aria-hidden="true" />
              Experience at Scale
            </h3>
            <p className="text-slate-400 mb-6">
              Our team has built and operated systems at some of the world's largest 
              technology companies:
            </p>
            <div className="space-y-4">
              {companies.map((company, idx) => {
                const IconComponent = company.icon;
                return (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-[#020808] rounded-lg border border-teal-900/20 hover:border-teal-500/30 transition-colors"
                  >
                    <IconComponent className="w-5 h-5 text-teal-400" aria-hidden="true" />
                    <span className="text-white font-medium">{company.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

