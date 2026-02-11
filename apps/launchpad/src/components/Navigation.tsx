import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 border-b border-white/5 bg-obsidian-glass">
      <div className="max-w-7xl mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-emerald-cyber rounded-lg flex items-center justify-center shrink-0 group-hover:shadow-[0_0_15px_rgba(0,255,159,0.5)] transition-all">
            <span className="text-obsidian-deep font-black text-xl">N</span>
          </div>
          <span className="text-base sm:text-lg font-bold tracking-tighter text-white group-hover:text-emerald-cyber transition-colors truncate max-w-[120px] sm:max-w-none">
            NEURAL NEXUS
          </span>
        </a>
        
        <div className="hidden md:flex space-x-8 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <a href="#tokenomics" className="hover:text-emerald-cyber transition-colors">Tokenomics</a>
          <a href="https://github.com/naeemshah/neural-nexus/blob/main/LITEPAPER.md" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-cyber transition-colors">Litepaper</a>
          <a href="#tracker" className="hover:text-emerald-cyber transition-colors">Presale Status</a>
          <a href="#roadmap" className="hover:text-emerald-cyber transition-colors">Roadmap</a>
          <a href="#founder" className="hover:text-emerald-cyber transition-colors">Founder</a>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="btn-primary px-4 sm:px-6 py-2 rounded-full font-bold text-[9px] sm:text-xs uppercase tracking-wider whitespace-nowrap">
            Connect Wallet
          </button>
          <button 
            id="menu-toggle" 
            className="md:hidden text-emerald-cyber p-2" 
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu" 
        className={`md:hidden absolute top-full left-0 w-full bg-obsidian-deep/95 backdrop-blur-xl border-b border-white/10 px-6 py-8 flex flex-col gap-6 text-center text-xs font-bold uppercase tracking-widest z-40 transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <a href="#tokenomics" className="hover:text-emerald-cyber transition-colors" onClick={() => setIsMenuOpen(false)}>Tokenomics</a>
        <a href="https://github.com/naeemshah/neural-nexus/blob/main/LITEPAPER.md" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-cyber transition-colors" onClick={() => setIsMenuOpen(false)}>Litepaper</a>
        <a href="#tracker" className="hover:text-emerald-cyber transition-colors" onClick={() => setIsMenuOpen(false)}>Presale Status</a>
        <a href="#roadmap" className="hover:text-emerald-cyber transition-colors" onClick={() => setIsMenuOpen(false)}>Roadmap</a>
        <a href="#founder" className="hover:text-emerald-cyber transition-colors" onClick={() => setIsMenuOpen(false)}>Founder</a>
      </div>
    </nav>
  );
};

export default Navigation;