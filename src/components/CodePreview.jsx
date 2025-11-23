import React from 'react';

const CodePreview = ({ activeTab, setActiveTab }) => {
  const pythonCode = (
    <>
      <span className="text-purple-400">import</span> asyncio<br/>
      <span className="text-purple-400">from</span> naylence.fame.core <span className="text-purple-400">import</span> FameFabric<br/>
      <span className="text-purple-400">from</span> naylence.agent <span className="text-purple-400">import</span> BaseAgent<br/><br/>
      
      <span className="text-blue-400">class</span> <span className="text-yellow-300">HelloAgent</span>(BaseAgent):<br/>
      &nbsp;&nbsp;<span className="text-blue-400">async def</span> <span className="text-yellow-300">on_message</span>(self, message):<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-teal-300">f"Agent received: &#123;message&#125;"</span>)<br/><br/>

      <span className="text-slate-500"># Start fabric & serve agent</span><br/>
      <span className="text-blue-400">async with</span> FameFabric.create() <span className="text-blue-400">as</span> fabric:<br/>
      &nbsp;&nbsp;addr = <span className="text-blue-400">await</span> fabric.serve(HelloAgent())<br/>
      &nbsp;&nbsp;<span className="text-blue-400">await</span> fabric.send_message(addr, <span className="text-teal-300">"Hello World"</span>)
    </>
  );

  const typescriptCode = (
    <>
      <span className="text-purple-400">import</span> &#123; FameFabric &#125; <span className="text-purple-400">from</span> <span className="text-teal-300">'@naylence/core'</span>;<br/>
      <span className="text-purple-400">import</span> &#123; BaseAgent &#125; <span className="text-purple-400">from</span> <span className="text-teal-300">'@naylence/agent'</span>;<br/><br/>

      <span className="text-blue-400">class</span> <span className="text-yellow-300">EchoAgent</span> <span className="text-blue-400">extends</span> BaseAgent &#123;<br/>
      &nbsp;&nbsp;<span className="text-blue-400">async</span> <span className="text-yellow-300">onMessage</span>(msg: <span className="text-yellow-300">any</span>) &#123;<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;console.log(<span className="text-teal-300">`Received: $&#123;msg&#125;`</span>);<br/>
      &nbsp;&nbsp;&#125;<br/>
      &#125;<br/><br/>
      
      <span className="text-slate-500">// TypeScript Runtime coming soon</span>
    </>
  );

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
      <div className="relative bg-[#030c0c] rounded-xl border border-teal-900/50 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-teal-900/30 bg-[#020808]">
          <div className="flex space-x-2" role="presentation">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
          </div>
          <div className="flex space-x-4 text-xs font-medium text-slate-500" role="tablist">
            <button 
              onClick={() => setActiveTab('python')}
              role="tab"
              aria-selected={activeTab === 'python'}
              aria-controls="code-content"
              className={`hover:text-teal-400 transition-colors ${
                activeTab === 'python' ? 'text-teal-400' : ''
              }`}
            >
              hello.py
            </button>
            <button 
              onClick={() => setActiveTab('typescript')}
              role="tab"
              aria-selected={activeTab === 'typescript'}
              aria-controls="code-content"
              className={`hover:text-teal-400 transition-colors ${
                activeTab === 'typescript' ? 'text-teal-400' : ''
              }`}
            >
              agent.ts
            </button>
          </div>
        </div>
        <div 
          id="code-content"
          className="p-6 font-mono text-sm overflow-x-auto"
          role="tabpanel"
        >
          <code className="text-slate-300">
            {activeTab === 'python' ? pythonCode : typescriptCode}
          </code>
        </div>
      </div>
    </div>
  );
};

export default CodePreview;

