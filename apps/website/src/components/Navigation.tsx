import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav 
      id="main-nav" 
      className={`fixed w-full z-50 transition-all duration-300 px-4 xs:px-5 sm:px-6 py-3 xs:py-4 ${
        scrolled ? 'bg-obsidian-deep/95 backdrop-blur-xl border-b border-white/5' : 'bg-obsidian-deep/80 backdrop-blur-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 xs:gap-3 group">
          <div className="w-8 xs:w-9 h-8 xs:h-9 bg-emerald-cyber rounded-lg flex items-center justify-center shrink-0 group-hover:shadow-[0_0_15px_rgba(0,255,159,0.5)] transition-all">
            <span className="text-obsidian-deep font-black text-xl xs:text-2xl">N</span>
          </div>
          <span className="text-base xs:text-lg sm:text-xl font-bold tracking-tighter text-white group-hover:text-emerald-cyber transition-colors">
            NEURAL NEXUS
          </span>
        </a>
        
        <div className="hidden md:flex space-x-6 lg:space-x-8 text-xs xs:text-sm font-bold uppercase tracking-widest text-gray-400">
          <a href="#tokenomics" className="hover:text-emerald-cyber transition-colors py-1">Tokenomics</a>
          <a href="#litepaper" className="hover:text-emerald-cyber transition-colors py-1">Litepaper</a>
          <a href="#dashboard" className="hover:text-emerald-cyber transition-colors py-1">Dashboard</a>
          <a href="#founder" className="hover:text-emerald-cyber transition-colors py-1">Founder</a>
          <a href="/launchpad" className="hover:text-emerald-cyber transition-colors py-1">Launchpad</a>
        </div>
        
        <div className="flex items-center gap-2 xs:gap-3">
          <button className="btn-cyber px-4 xs:px-5 sm:px-6 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm uppercase whitespace-nowrap">
            Connect Wallet
          </button>
          <button 
            id="menu-toggle" 
            className="md:hidden text-emerald-cyber p-1.5 xs:p-2" 
            aria-label="Toggle Menu"
            onClick={handleMenuClick}
            aria-expanded={isMenuOpen}
          >
            <svg className="w-5 xs:w-6 h-5 xs:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu" 
        className={`md:hidden absolute top-full left-0 w-full bg-obsidian-deep/95 backdrop-blur-xl border-b border-white/10 px-5 xs:px-6 py-6 xs:py-8 flex flex-col gap-4 xs:gap-5 text-center text-sm font-bold uppercase tracking-widest z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <a href="#tokenomics" className="hover:text-emerald-cyber transition-colors py-2 xs:py-3" onClick={handleMenuItemClick}>Tokenomics</a>
        <a href="#litepaper" className="hover:text-emerald-cyber transition-colors py-2 xs:py-3" onClick={handleMenuItemClick}>Litepaper</a>
        <a href="#dashboard" className="hover:text-emerald-cyber transition-colors py-2 xs:py-3" onClick={handleMenuItemClick}>Dashboard</a>
        <a href="#founder" className="hover:text-emerald-cyber transition-colors py-2 xs:py-3" onClick={handleMenuItemClick}>Founder</a>
        <a href="/launchpad" className="hover:text-emerald-cyber transition-colors py-2 xs:py-3" onClick={handleMenuItemClick}>Launchpad</a>
      </div>
    </nav>
  );
};

export default Navigation;