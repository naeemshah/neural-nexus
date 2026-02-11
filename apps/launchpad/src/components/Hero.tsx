const Hero = () => {
  return (
    <header className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-10 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] xs:w-[700px] sm:w-[800px] md:w-[900px] lg:w-[1000px] h-[300px] xs:h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-emerald-cyber/10 blur-[60px] xs:blur-[70px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 py-0.5 xs:py-1 rounded-full bg-emerald-cyber/10 border border-emerald-cyber/20 mb-3 sm:mb-4 md:mb-6 lg:mb-8">
          <span className="w-1.5 h-1.5 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-cyber animate-ping"></span>
          <span className="text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] font-mono font-bold text-emerald-cyber uppercase tracking-widest">
            Genesis Launchpad Coming Soon
          </span>
        </div>
        
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold mb-3 sm:mb-4 md:mb-6 tracking-tight leading-[0.9]">
          Neural Nexus <br className="hidden xs:block"/>
          <span className="text-emerald-cyber cyber-glow">Token Presale</span>
        </h1>
        
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-xl xs:max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-relaxed px-2">
          Join the $NAE genesis event. Empowering decentralized intelligence through aggressive deflationary mechanics on the{' '}
          <span className="text-emerald-cyber font-bold">Base Network</span>.
        </p>
        
        <div className="flex flex-col xs:flex-row items-center justify-center gap-2 xs:gap-3 sm:gap-4 px-2">
          <a href="#tracker" className="w-full xs:w-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 py-2.5 xs:py-3 sm:py-3.5 md:py-4 bg-emerald-cyber text-obsidian-deep rounded-lg sm:rounded-xl hover:shadow-[0_0_20px_rgba(0,255,159,0.4)] transition-all font-bold uppercase tracking-widest text-[10px] xs:text-xs sm:text-sm text-center">
            Contribute Now
          </a>
          <a href="/" className="w-full xs:w-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 py-2.5 xs:py-3 sm:py-3.5 md:py-4 border border-emerald-cyber/30 rounded-lg sm:rounded-xl hover:bg-emerald-cyber/5 transition-all text-emerald-cyber font-bold uppercase tracking-widest text-[10px] xs:text-xs sm:text-sm text-center">
            Ecosystem Overview
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;