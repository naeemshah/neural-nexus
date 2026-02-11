const Litepaper = () => {
  return (
    <section id="litepaper" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white/[0.02] px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">Litepaper</h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Understand the vision, technology, and economics behind Neural Nexus
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Vision Card */}
          <div className="glass-panel rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-emerald-cyber/30 transition-all group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-emerald-cyber/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-emerald-cyber/20 transition-all">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-cyber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Vision</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
              Neural Nexus aims to create a sustainable deflationary token ecosystem that rewards holders through aggressive burn mechanics while maintaining liquidity and stability.
            </p>
            <ul className="space-y-2 text-[10px] sm:text-xs text-gray-500">
              <li className="flex items-center gap-2">
                <span className="text-emerald-cyber">•</span>
                <span>Decentralized financial infrastructure</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-cyber">•</span>
                <span>Community-driven governance</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-cyber">•</span>
                <span>Cross-chain interoperability</span>
              </li>
            </ul>
          </div>
          
          {/* Technology Card */}
          <div className="glass-panel rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-emerald-cyber/30 transition-all group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-emerald-cyber/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-emerald-cyber/20 transition-all">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-cyber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Technology</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
              Built on Base Network with advanced smart contract architecture featuring owner-exempt burn tax, automatic liquidity provisioning, and real-time analytics.
            </p>
            <ul className="space-y-2 text-[10px] sm:text-xs text-gray-500">
              <li className="flex items-center gap-2">
                <span className="text-emerald-cyber">•</span>
                <span>ERC-20 compliant with custom extensions</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-cyber">•</span>
                <span>25% transaction burn tax (owner exempt)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-cyber">•</span>
                <span>Hardhat & Foundry test suite</span>
              </li>
            </ul>
          </div>
          
          {/* Economics Card */}
          <div className="glass-panel rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-emerald-cyber/30 transition-all group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-emerald-cyber/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-emerald-cyber/20 transition-all">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-cyber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Economics</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
              Deflationary tokenomics designed for sustainable growth with 25% burn tax, 100% locked liquidity, and zero team allocation ensuring fair distribution.
            </p>
            <ul className="space-y-2 text-[10px] sm:text-xs text-gray-500">
              <li className="flex items-center gap-2">
                <span className="text-emerald-cyber">•</span>
                <span>1 billion fixed total supply</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-cyber">•</span>
                <span>50% presale, 30% liquidity, 15% marketing, 5% ecosystem</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-cyber">•</span>
                <span>Real-time burn tracking dashboard</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <a 
            href="https://github.com/naeemshah/neural-nexus/blob/main/LITEPAPER.md" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-bold uppercase tracking-widest"
          >
            <span>Read Full Litepaper</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
          <p className="text-gray-500 text-[10px] sm:text-xs mt-4">
            Available on GitHub • Regularly updated
          </p>
        </div>
      </div>
    </section>
  );
};

export default Litepaper;