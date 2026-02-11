import { useState, useEffect } from 'react';

const LaunchpadDashboard = () => {
  const [contributionAmount, setContributionAmount] = useState('0.1');
  const [burnStatus, setBurnStatus] = useState('PRE-OPENING');
  const [progress, setProgress] = useState(0);
  const [totalRaised, setTotalRaised] = useState(0);
  const [contributorCount, setContributorCount] = useState(0);

  useEffect(() => {
    // Mock live data updates
    const interval = setInterval(() => {
      const states = ['PRE-OPENING', 'INITIALIZING', 'WAITING_DEPLOY', 'TESTING_NODE'];
      setBurnStatus(states[Math.floor(Math.random() * states.length)]);
      
      // Simulate progress
      setProgress(prev => (prev + 1) % 100);
      
      // Simulate fundraising progress
      setTotalRaised(prev => Math.min(50, prev + Math.random() * 0.5));
      setContributorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatETH = (value: number) => {
    return value.toFixed(2);
  };

  return (
    <section id="tracker" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 sm:mb-4">Nexus Launchpad</h2>
          <p className="text-gray-400 text-sm sm:text-base">Phase 1: Genesis Liquidity Generation</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Status Card */}
          <div className="lg:col-span-2 bg-obsidian-deep/60 backdrop-blur-xl border-emerald-cyber/20 border-2 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 relative overflow-hidden burn-gradient cyber-border">
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-center xs:text-left mb-4 sm:mb-6 md:mb-8">
              <div>
                <h3 className="text-gray-400 text-[8px] xs:text-[9px] sm:text-[10px] md:text-sm font-mono mb-1 sm:mb-2 uppercase tracking-widest">Current Status</h3>
                <p className="text-lg xs:text-xl sm:text-2xl md:text-4xl font-bold text-emerald-cyber" id="burnRate">{burnStatus}</p>
                <p className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs text-gray-500 mt-1 sm:mt-2">RAISE TARGET: 50.0 ETH</p>
              </div>
              <div>
                <h3 className="text-gray-400 text-[8px] xs:text-[9px] sm:text-[10px] md:text-sm font-mono mb-1 sm:mb-2 uppercase tracking-widest">Network</h3>
                <p className="text-lg xs:text-xl sm:text-2xl md:text-4xl font-bold text-white">BASE</p>
                <p className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs text-emerald-cyber mt-1 sm:mt-2">MAINNET DEPLOYMENT READY</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6 sm:mb-8">
              <div className="flex justify-between text-[9px] xs:text-[10px] sm:text-xs font-mono mb-1 sm:mb-2">
                <span className="text-emerald-cyber">PHASE: GENESIS</span>
                <span className="text-gray-500">TARGET: 50 ETH</span>
              </div>
              <div className="w-full bg-white/5 h-3 sm:h-4 rounded-full overflow-hidden border border-white/10">
                <div 
                  className="bg-emerald-cyber h-full shadow-[0_0_15px_rgba(0,255,159,0.5)] transition-all duration-1000" 
                  style={{ width: `${progress}%` }}
                  id="progress-bar"
                ></div>
              </div>
              <div className="flex justify-between mt-1 sm:mt-2">
                <span className="text-[8px] xs:text-[9px] sm:text-[10px] text-emerald-cyber">
                  {formatETH(totalRaised)} ETH Raised
                </span>
                <span className="text-[8px] xs:text-[9px] sm:text-[10px] text-gray-500">
                  {contributorCount} Contributors
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10">
                <div className="text-[8px] xs:text-[9px] sm:text-[10px] text-gray-500 uppercase font-mono mb-1">My Contribution</div>
                <div className="text-base sm:text-lg md:text-xl font-bold">0.00 ETH</div>
                <div className="text-[8px] xs:text-[9px] sm:text-[10px] text-gray-500 mt-1">Connect wallet to view</div>
              </div>
              <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10">
                <div className="text-[8px] xs:text-[9px] sm:text-[10px] text-gray-500 uppercase font-mono mb-1">Token Balance</div>
                <div className="text-base sm:text-lg md:text-xl font-bold">0 $NAE</div>
                <div className="text-[8px] xs:text-[9px] sm:text-[10px] text-gray-500 mt-1">1 ETH = 10,000 $NAE</div>
              </div>
            </div>
          </div>

          {/* Action Card */}
          <div className="bg-obsidian-deep/60 backdrop-blur-xl border-white/10 border rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-center">
            <div className="mb-4 sm:mb-6">
              <label className="block text-[8px] xs:text-[9px] sm:text-[10px] font-mono text-gray-500 uppercase mb-1 sm:mb-2">Amount (ETH)</label>
              <div className="relative">
                <input 
                  type="number" 
                  id="contribution-amount" 
                  placeholder="0.1" 
                  value={contributionAmount}
                  onChange={(e) => setContributionAmount(e.target.value)}
                  min="0.01"
                  max="2.0"
                  step="0.01"
                  className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 sm:py-4 focus:border-emerald-cyber outline-none transition-all font-bold text-base sm:text-lg"
                />
                <span className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 font-mono text-xs sm:text-sm text-emerald-cyber">ETH</span>
              </div>
              <div className="flex justify-between mt-2">
                <button 
                  type="button"
                  onClick={() => setContributionAmount('0.01')}
                  className="text-[8px] xs:text-[9px] sm:text-[10px] text-gray-400 hover:text-emerald-cyber transition-colors"
                >
                  Min: 0.01
                </button>
                <button 
                  type="button"
                  onClick={() => setContributionAmount('0.1')}
                  className="text-[8px] xs:text-[9px] sm:text-[10px] text-gray-400 hover:text-emerald-cyber transition-colors"
                >
                  Default: 0.1
                </button>
                <button 
                  type="button"
                  onClick={() => setContributionAmount('2.0')}
                  className="text-[8px] xs:text-[9px] sm:text-[10px] text-gray-400 hover:text-emerald-cyber transition-colors"
                >
                  Max: 2.0
                </button>
              </div>
            </div>
            
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-emerald-cyber/5 border border-emerald-cyber/20">
              <div className="text-[8px] xs:text-[9px] sm:text-[10px] text-gray-400 uppercase font-mono mb-1">You will receive</div>
              <div className="text-base sm:text-lg md:text-xl font-bold text-emerald-cyber">
                {contributionAmount ? (parseFloat(contributionAmount) * 10000).toLocaleString() : '0'} $NAE
              </div>
              <div className="text-[8px] xs:text-[9px] sm:text-[10px] text-gray-500 mt-1">
                Rate: 1 ETH = 10,000 $NAE
              </div>
            </div>
            
            <button 
              id="contribute-btn" 
              className="btn-primary w-full py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl md:rounded-2xl text-xs sm:text-sm md:text-base mb-3 sm:mb-4 opacity-50 cursor-not-allowed"
              disabled
            >
              Connect Wallet to Contribute
            </button>
            <p className="text-[8px] xs:text-[9px] sm:text-[10px] text-center text-gray-500 font-mono">
              Connect your wallet to participate in the presale
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchpadDashboard;