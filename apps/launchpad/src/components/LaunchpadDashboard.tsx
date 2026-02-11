import { useState, useEffect } from 'react';
import { useWallet } from '../context/WalletContext';

const LaunchpadDashboard = () => {
  const { isConnected, address } = useWallet();
  const [contributionAmount, setContributionAmount] = useState('0.1');
  const [burnStatus, setBurnStatus] = useState('PRE-OPENING');
  const [progress, setProgress] = useState(0);
  const [totalRaised, setTotalRaised] = useState(0);
  const [contributorCount, setContributorCount] = useState(0);
  const [isContributing, setIsContributing] = useState(false);
  const [contributionSuccess, setContributionSuccess] = useState(false);

  // Mock contract address and presale details
  const PRESALE_CONTRACT = '0x0000000000000000000000000000000000000000';
  const TOKEN_RATE = 10000; // 1 ETH = 10,000 $NAE
  const PRESALE_TARGET = 50; // 50 ETH target
  const MIN_CONTRIBUTION = 0.01;
  const MAX_CONTRIBUTION = 2.0;

  useEffect(() => {
    // Mock live data updates
    const interval = setInterval(() => {
      const states = ['PRE-OPENING', 'INITIALIZING', 'WAITING_DEPLOY', 'TESTING_NODE'];
      setBurnStatus(states[Math.floor(Math.random() * states.length)]);
      
      // Simulate progress
      setProgress(prev => (prev + 1) % 100);
      
      // Simulate fundraising progress
      setTotalRaised(prev => Math.min(PRESALE_TARGET, prev + Math.random() * 0.5));
      setContributorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatETH = (value: number) => {
    return value.toFixed(2);
  };

  const formatAddress = (addr: string | null) => {
    if (!addr) return '';
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
  };

  const handleContribute = async () => {
    if (!isConnected || !address) {
      alert('Please connect your wallet first');
      return;
    }

    const amount = parseFloat(contributionAmount);
    if (isNaN(amount) || amount < MIN_CONTRIBUTION || amount > MAX_CONTRIBUTION) {
      alert(`Please enter a valid amount between ${MIN_CONTRIBUTION} and ${MAX_CONTRIBUTION} ETH`);
      return;
    }

    setIsContributing(true);
    
    try {
      // Mock contribution - in real implementation, this would interact with the smart contract
      console.log(`Contributing ${amount} ETH from ${address}`);
      
      // Simulate blockchain transaction
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setContributionSuccess(true);
      setTimeout(() => setContributionSuccess(false), 5000);
      
      // Update mock data
      setTotalRaised(prev => Math.min(PRESALE_TARGET, prev + amount));
      setContributorCount(prev => prev + 1);
      
    } catch (error) {
      console.error('Contribution failed:', error);
      alert('Contribution failed. Please try again.');
    } finally {
      setIsContributing(false);
    }
  };

  const calculateTokenAmount = () => {
    const amount = parseFloat(contributionAmount);
    if (isNaN(amount)) return 0;
    return amount * TOKEN_RATE;
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
                <div className="text-[8px] xs:text-[9px] sm:text-[10px] text-gray-500 uppercase font-mono mb-1">
                  {isConnected ? 'My Contribution' : 'Wallet Status'}
                </div>
                <div className="text-base sm:text-lg md:text-xl font-bold">
                  {isConnected ? '0.00 ETH' : 'Not Connected'}
                </div>
                <div className="text-[8px] xs:text-[9px] sm:text-[10px] text-gray-500 mt-1">
                  {isConnected ? formatAddress(address) : 'Connect wallet to contribute'}
                </div>
              </div>
              <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10">
                <div className="text-[8px] xs:text-[9px] sm:text-[10px] text-gray-500 uppercase font-mono mb-1">Token Balance</div>
                <div className="text-base sm:text-lg md:text-xl font-bold">
                  {isConnected ? '0 $NAE' : '0 $NAE'}
                </div>
                <div className="text-[8px] xs:text-[9px] sm:text-[10px] text-gray-500 mt-1">1 ETH = {TOKEN_RATE.toLocaleString()} $NAE</div>
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
                {calculateTokenAmount().toLocaleString()} $NAE
              </div>
              <div className="text-[8px] xs:text-[9px] sm:text-[10px] text-gray-500 mt-1">
                Rate: 1 ETH = {TOKEN_RATE.toLocaleString()} $NAE
              </div>
            </div>
            
            {contributionSuccess && (
              <div className="mb-3 sm:mb-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-emerald-cyber/10 border border-emerald-cyber/30">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-cyber flex items-center justify-center">
                    <svg className="w-2 h-2 text-obsidian-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-[10px] xs:text-xs font-bold text-emerald-cyber">
                    Contribution Successful!
                  </span>
                </div>
                <p className="text-[8px] xs:text-[9px] text-gray-400 mt-1">
                  {contributionAmount} ETH contributed. Tokens will be distributed after presale ends.
                </p>
              </div>
            )}
            
            <button 
              id="contribute-btn" 
              onClick={handleContribute}
              disabled={!isConnected || isContributing}
              className={`btn-primary w-full py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl md:rounded-2xl text-xs sm:text-sm md:text-base mb-3 sm:mb-4 transition-all ${
                !isConnected || isContributing ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
              }`}
            >
              {isContributing ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : !isConnected ? (
                'Connect Wallet to Contribute'
              ) : (
                `Contribute ${contributionAmount} ETH`
              )}
            </button>
            <p className="text-[8px] xs:text-[9px] sm:text-[10px] text-center text-gray-500 font-mono">
              {isConnected 
                ? `Presale contract: ${PRESALE_CONTRACT.substring(0, 6)}...${PRESALE_CONTRACT.substring(PRESALE_CONTRACT.length - 4)}`
                : 'Connect your wallet to participate in the presale'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchpadDashboard;