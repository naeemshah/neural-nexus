const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-emerald-cyber rounded flex items-center justify-center">
              <span className="text-obsidian-deep font-black text-sm">N</span>
            </div>
            <span className="text-lg font-bold tracking-tighter">NEURAL NEXUS</span>
          </div>
          <p className="text-gray-500 text-sm max-w-xs">Building the infrastructure for decentralized intelligence. Built by Naeem Shah.</p>
        </div>
        
        <div className="flex gap-16">
          <div>
            <h4 className="text-xs font-bold text-white uppercase mb-4 tracking-widest">Ecosystem</h4>
            <ul className="text-gray-500 text-sm space-y-2">
              <li><a href="/launchpad" className="hover:text-emerald-cyber transition-colors">Launchpad</a></li>
              <li><a href="/launchpad#tracker" className="hover:text-emerald-cyber transition-colors">Burn Tracker</a></li>
              <li><a href="https://github.com/naeemshah/neural-nexus/blob/main/LITEPAPER.md" target="_blank" className="hover:text-emerald-cyber transition-colors">Litepaper</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-white uppercase mb-4 tracking-widest">Connect</h4>
            <ul className="text-gray-500 text-sm space-y-2">
              <li><a href="https://x.com/PAL47Bot" target="_blank" className="hover:text-emerald-cyber transition-colors">X / Twitter</a></li>
              <li><a href="https://t.me/PAL47Bot" target="_blank" className="hover:text-emerald-cyber transition-colors">Telegram</a></li>
              <li><a href="https://github.com/naeemshah/neural-nexus" target="_blank" className="hover:text-emerald-cyber transition-colors">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-white uppercase mb-4 tracking-widest">Legal</h4>
            <ul className="text-gray-500 text-sm space-y-2">
              <li><a href="#" className="hover:text-emerald-cyber transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-emerald-cyber transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center">
        <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.2em]">© 2026 Neural Nexus Protocol | All Systems Nominal</p>
      </div>
    </footer>
  );
};

export default Footer;