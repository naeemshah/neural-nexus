import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav 
      id="main-nav" 
      className={`fixed w-full z-50 transition-all duration-300 px-6 py-4 ${scrolled ? 'py-2' : 'py-4'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel px-6 py-3 rounded-full border-white/10">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-cyber rounded-lg flex items-center justify-center shrink-0">
            <span className="text-obsidian-deep font-black text-xl">N</span>
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tighter cyber-glow truncate">NEURAL NEXUS</span>
        </a>
        
        <div className="hidden md:flex space-x-10 text-xs font-bold uppercase tracking-widest text-gray-400">
          <a href="#tokenomics" className="hover:text-emerald-cyber transition-all hover:tracking-[0.2em]">Tokenomics</a>
          <a href="https://github.com/naeemshah/neural-nexus/blob/main/LITEPAPER.md" target="_blank" className="hover:text-emerald-cyber transition-all hover:tracking-[0.2em]">Litepaper</a>
          <a href="/launchpad#tracker" className="hover:text-emerald-cyber transition-all hover:tracking-[0.2em]">Burn Tracker</a>
          <a href="#dashboard" className="hover:text-emerald-cyber transition-all hover:tracking-[0.2em]">Dashboard</a>
          <a href="#founder" className="hover:text-emerald-cyber transition-all hover:tracking-[0.2em]">Founder</a>
        </div>

        <div className="flex items-center">
          <a href="/launchpad" className="btn-cyber px-4 sm:px-6 py-2 rounded-full text-[10px] sm:text-xs shrink-0 ml-2 flex items-center justify-center">
            Launchpad
          </a>
          <button 
            id="menu-toggle" 
            className="md:hidden ml-4 text-emerald-cyber p-2" 
            aria-label="Toggle Menu"
            onClick={handleMenuClick}
            aria-expanded={isMenuOpen}
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
        className={`md:hidden absolute top-full left-0 w-full bg-obsidian-deep/95 backdrop-blur-xl border-b border-white/10 px-6 py-8 flex flex-col gap-6 text-center text-sm font-bold uppercase tracking-widest z-40 ${
          isMenuOpen ? 'active' : ''
        }`}
      >
        <a href="#tokenomics" className="hover:text-emerald-cyber transition-colors" onClick={handleMenuItemClick}>Tokenomics</a>
        <a href="https://github.com/naeemshah/neural-nexus/blob/main/LITEPAPER.md" target="_blank" className="hover:text-emerald-cyber transition-colors" onClick={handleMenuItemClick}>Litepaper</a>
        <a href="/launchpad#tracker" className="hover:text-emerald-cyber transition-colors" onClick={handleMenuItemClick}>Burn Tracker</a>
        <a href="#dashboard" className="hover:text-emerald-cyber transition-colors" onClick={handleMenuItemClick}>Dashboard</a>
        <a href="#founder" className="hover:text-emerald-cyber transition-colors" onClick={handleMenuItemClick}>Founder</a>
        <a href="/launchpad" className="text-emerald-cyber" onClick={handleMenuItemClick}>Launchpad</a>
      </div>
    </nav>
  );
};

export default Navigation;