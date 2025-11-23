import React from 'react';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#030c0c]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have questions about Naylence? Interested in enterprise solutions or partnerships? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="bg-[#020808] rounded-2xl border border-teal-900/30 p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-teal-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-teal-400" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Contact Our Sales Team
            </h3>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              For inquiries about enterprise deployments, custom solutions, or partnership 
              opportunities, please reach out to our sales team.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <a
              href="mailto:sales@naylence.ai"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#020808] transition-all duration-200 bg-teal-400 rounded-lg hover:bg-teal-300 hover:shadow-[0_0_20px_-5px_rgba(45,212,191,0.5)] group"
              aria-label="Email Naylence sales team"
            >
              <Mail className="mr-2 w-5 h-5" aria-hidden="true" />
              sales@naylence.ai
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>

            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              <span>We typically respond within 24 hours</span>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-teal-900/30">
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="text-center md:text-left">
                <h4 className="text-white font-semibold mb-2">For Developers</h4>
                <p className="text-slate-400">
                  Join our <a 
                    href="https://discord.gg/NVjacrm22X" 
                    target="_blank"
                    rel="noreferrer"
                    className="text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    Discord community
                  </a> or check out our{' '}
                  <a 
                    href="https://github.com/naylence/naylence-examples-python" 
                    target="_blank"
                    rel="noreferrer"
                    className="text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    examples repository
                  </a>.
                </p>
              </div>
              <div className="text-center md:text-right">
                <h4 className="text-white font-semibold mb-2">For Press</h4>
                <p className="text-slate-400">
                  Media inquiries? Contact us at{' '}
                  <a 
                    href="mailto:sales@naylence.ai" 
                    className="text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    sales@naylence.ai
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

