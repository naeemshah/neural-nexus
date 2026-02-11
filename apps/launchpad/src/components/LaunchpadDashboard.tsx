import { useState, useEffect } from 'react';

const LaunchpadDashboard = () => {
  const [contributionAmount, setContributionAmount] = useState('0.1');
  const [burnStatus, setBurnStatus] = useState('PRE-OPENING');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Mock live data updates
    const interval = setInterval(() => {
      const states = ['PRE-OPENING', 'INITIALIZING', 'WAITING_DEPLOY', 'TESTING_NODE'];
      setBurnStatus(states[Math.floor(Math.random() * states.length)]);
      
      // Simulate progress
      setProgress(prev => (prev + 1) % 100);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="tracker" className="py-16 sm:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Nexus Launchpad</h2>
          <p className="text-gray-400">Phase 1: Genesis Liquidity Generation</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Status Card */}
          <div className="lg:col-span-2 bg-obsidian-deep/60 backdrop-blur-xl border-emerald-cyber/20 border-2 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 relative overflow-hidden burn-gradient cyber-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-center sm:text-left mb-6 sm:mb-8">
              <div>
                <h3 className="text-gray-400 text-[9px] xs:text-[10px] sm:text-sm font-mono mb-2 uppercase tracking-widest">Current Status</h3>
                <p className="text-xl sm:text-2xl md:text-4xl font-bold text-emerald-cyber" id="burnRate">{burnStatus}</p>
                <p className="text-[9px] xs:text-[10px] sm:text-xs text-gray-500 mt-2">RAISE TARGET: 50.0 ETH</p>
              </div>
              <div>
                <h3 className="text-gray-400 text-[9px] xs:text-[10px] sm:text-sm font-mono mb-2 uppercase tracking-widest">Network</h3>
                <p className="text-xl sm:text-2xl md:text-4xl font-bold text-white">BASE</p>
                <p className="text-[9px] xs:text-[10px] sm:text-xs text-emerald-cyber mt-2">MAINNET DEPLOYMENT READY</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-[10px] font-mono mb-2">
                <span className="text-emerald-cyber">PHASE: GENESIS</span>
                <span className="text-gray-500">TARGET: 50 ETH</span>
              </div>
              <div className="w-full bg-white/5 h-4 rounded-full overflow-hidden border border-white/10">
                <div 
                  className="bg-emerald-cyber h-full shadow-[0_0_15px_rgba(0,255,159,0.5)] transition-all duration-1000" 
                  style={{ width: `${progress}%` }}
                  id="progress-bar"
                ></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[10px] text-gray-500 uppercase font-mono">My Contribution</div>
                <div className="text-xl font-bold">0.00 ETH</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[10px] text-gray-500 uppercase font-mono">Token Balance</div>
                <div className="text-xl font-bold">0 $NAE</div>
              </div>
            </div>
          </div>

          {/* Action Card */}
          <div className="bg-obsidian-deep/60 backdrop-blur-xl border-white/10 border rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-center">
            <div className="mb-6">
              <label className="block text-[10px] font-mono text-gray-500 uppercase mb-2">Amount (ETH)</label>
              <div className="relative">
                <input 
                  type="number" 
                  id="contribution-amount" 
                  placeholder="0.1" 
                  value={contributionAmount}
                  onChange={(e) => setContributionAmount(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-emerald-cyber outline-none transition-all font-bold text-lg"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-sm text-emerald-cyber">ETH</span>
              </div>
            </div>
            <button 
              id="contribute-btn" 
              className="btn-primary w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl text-sm sm:text-base mb-4 opacity-50 cursor-not-allowed"
              disabled
            >
              Connect Wallet to Contribute
            </button>
            <p className="text-[10px] text-center text-gray-500 font-mono">
              MIN: 0.01 ETH | MAX: 2.0 ETH
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchpadDashboard;