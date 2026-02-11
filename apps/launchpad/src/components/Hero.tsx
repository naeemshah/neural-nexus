const Hero = () => {
  return (
    <header className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-cyber/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-cyber/10 border border-emerald-cyber/20 mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-cyber animate-ping"></span>
          <span className="text-[9px] sm:text-[10px] font-mono font-bold text-emerald-cyber uppercase tracking-widest">
            Genesis Launchpad Coming Soon
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-extrabold mb-6 tracking-tight leading-[0.9]">
          Neural Nexus <br className="hidden sm:block"/>
          <span className="text-emerald-cyber cyber-glow">Token Presale</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Join the $NAE genesis event. Empowering decentralized intelligence through aggressive deflationary mechanics on the{' '}
          <span className="text-emerald-cyber font-bold">Base Network</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#tracker" className="w-full sm:w-auto px-10 py-4 bg-emerald-cyber text-obsidian-deep rounded-xl hover:shadow-[0_0_20px_rgba(0,255,159,0.4)] transition-all font-bold uppercase tracking-widest text-sm text-center">
            Contribute Now
          </a>
          <a href="/" className="w-full sm:w-auto px-10 py-4 border border-emerald-cyber/30 rounded-xl hover:bg-emerald-cyber/5 transition-all text-emerald-cyber font-bold uppercase tracking-widest text-sm text-center">
            Ecosystem Overview
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;