import React from 'react';

interface HeroProps {
  isLaunchpad?: boolean;
}

const Hero: React.FC<HeroProps> = ({ isLaunchpad = false }) => {
  return (
    <header className="relative pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-12 px-3 sm:px-4 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] bg-emerald-cyber/10 blur-[30px] sm:blur-[40px] md:blur-[50px] lg:blur-[60px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-full bg-emerald-cyber/10 border border-emerald-cyber/20 mb-4 sm:mb-6">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-cyber animate-ping"></span>
          <span className="text-xs font-mono font-bold text-emerald-cyber uppercase tracking-widest">
            {isLaunchpad ? 'Launchpad Live' : 'Live on Base'}
          </span>
        </div>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight">
          Neural Nexus <br />
          <span className="text-emerald-cyber cyber-glow text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            {isLaunchpad ? 'Token Launchpad' : '$NAE Token'}
          </span>
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
          {isLaunchpad 
            ? 'Participate in the $NAE token launch with secure, transparent token distribution and real-time tracking.'
            : 'A high-performance, deflationary token powering the Neural Nexus ecosystem with aggressive burn mechanics on Base Network.'
          }
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 px-2">
          {!isLaunchpad && (
            <a 
              href="#launchpad" 
              className="w-full sm:w-auto px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-emerald-cyber text-black rounded-lg hover:shadow-[0_0_20px_rgba(0,255,159,0.4)] transition-all font-bold uppercase tracking-widest text-xs sm:text-sm text-center mobile-tap-target"
            >
              Go to Launchpad
            </a>
          )}
          <a 
            href="#litepaper" 
            className="w-full sm:w-auto px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 border border-emerald-cyber/30 rounded-lg hover:bg-emerald-cyber/5 transition-all text-emerald-cyber font-bold uppercase tracking-widest text-xs sm:text-sm text-center mobile-tap-target"
          >
            Read Litepaper
          </a>
        </div>

        {/* Hero Stats with animation */}
        <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-3xl mx-auto px-2">
          <div className="glass-panel p-2 sm:p-3 md:p-4 rounded-lg text-center transform transition-transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-cyber/20">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-cyber animate-pulse">25%</div>
            <div className="text-xs text-gray-500 uppercase font-mono mt-0.5 sm:mt-1">Burn Tax</div>
          </div>
          <div className="glass-panel p-2 sm:p-3 md:p-4 rounded-lg text-center transform transition-transform hover:scale-105 hover:shadow-lg hover:shadow-white/10">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">1B</div>
            <div className="text-xs text-gray-500 uppercase font-mono mt-0.5 sm:mt-1">Total Supply</div>
          </div>
          <div className="glass-panel p-2 sm:p-3 md:p-4 rounded-lg text-center transform transition-transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center justify-center">
              <span className="mr-1">⚡</span>Base
            </div>
            <div className="text-xs text-gray-500 uppercase font-mono mt-0.5 sm:mt-1">Network</div>
          </div>
          <div className="glass-panel p-2 sm:p-3 md:p-4 rounded-lg text-center transform transition-transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-cyber/20">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-cyber">0%</div>
            <div className="text-xs text-gray-500 uppercase font-mono mt-0.5 sm:mt-1">Team Allocation</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;