const Hero = () => {
  return (
    <header className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] xs:w-[700px] sm:w-[800px] md:w-[900px] lg:w-[1000px] h-[300px] xs:h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-emerald-cyber/10 blur-[60px] xs:blur-[70px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 py-0.5 xs:py-1 rounded-full bg-emerald-cyber/10 border border-emerald-cyber/20 mb-4 sm:mb-6 md:mb-8">
          <span className="w-1.5 h-1.5 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-cyber animate-ping"></span>
          <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-mono font-bold text-emerald-cyber uppercase tracking-widest">
            Live on Base Network
          </span>
        </div>
        
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 tracking-tight leading-[0.9]">
          Neural Nexus <br className="hidden xs:block"/>
          <span className="text-emerald-cyber cyber-glow">$NAE Token</span>
        </h1>
        
        <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-400 max-w-xl xs:max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed px-2">
          A high-performance, deflationary token powering the Neural Nexus ecosystem with aggressive burn mechanics and sustainable tokenomics on the{' '}
          <span className="text-emerald-cyber font-bold">Base Network</span>.
        </p>
        
        <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 px-2">
          <a href="/launchpad" className="w-full xs:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-emerald-cyber text-black rounded-lg sm:rounded-xl hover:shadow-[0_0_20px_rgba(0,255,159,0.4)] transition-all font-bold uppercase tracking-widest text-xs sm:text-sm text-center">
            Go to Launchpad
          </a>
          <a href="#litepaper" className="w-full xs:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 border border-emerald-cyber/30 rounded-lg sm:rounded-xl hover:bg-emerald-cyber/5 transition-all text-emerald-cyber font-bold uppercase tracking-widest text-xs sm:text-sm text-center">
            Read Litepaper
          </a>
        </div>

        {/* Hero Stats */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 xs:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto px-2">
          <div className="glass-panel p-3 sm:p-4 rounded-lg sm:rounded-xl text-center">
            <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-emerald-cyber">25%</div>
            <div className="text-[8px] xs:text-[9px] sm:text-[10px] text-gray-500 uppercase font-mono mt-1">Burn Tax</div>
          </div>
          <div className="glass-panel p-3 sm:p-4 rounded-lg sm:rounded-xl text-center">
            <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white">1B</div>
            <div className="text-[8px] xs:text-[9px] sm:text-[10px] text-gray-500 uppercase font-mono mt-1">Total Supply</div>
          </div>
          <div className="glass-panel p-3 sm:p-4 rounded-lg sm:rounded-xl text-center">
            <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white">Base</div>
            <div className="text-[8px] xs:text-[9px] sm:text-[10px] text-gray-500 uppercase font-mono mt-1">Network</div>
          </div>
          <div className="glass-panel p-3 sm:p-4 rounded-lg sm:rounded-xl text-center">
            <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-emerald-cyber">0%</div>
            <div className="text-[8px] xs:text-[9px] sm:text-[10px] text-gray-500 uppercase font-mono mt-1">Team Allocation</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;