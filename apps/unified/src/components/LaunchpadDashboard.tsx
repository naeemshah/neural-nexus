import React, { useState } from 'react';

const LaunchpadDashboard: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [connected, setConnected] = useState(false);

  const stats = [
    { label: 'Total Raised', value: '$125,450', change: '+12.5%' },
    { label: 'Participants', value: '1,234', change: '+8.2%' },
    { label: 'Tokens Sold', value: '45.6M', change: '+15.3%' },
    { label: 'Time Remaining', value: '3D 12H', change: 'Live' },
  ];

  const handleConnect = () => {
    setConnected(true);
    // In a real app, this would connect to wallet
  };

  const handleBuy = () => {
    if (!amount || !connected) return;
    alert(`Buying $${amount} worth of $NAE tokens!`);
    setAmount('');
  };

  return (
    <section id="launchpad" className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Token Launchpad</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Participate in the $NAE token launch with secure, transparent distribution
          </p>
        </div>

        {/* Stats Grid - Fully responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-gray-400 text-xs sm:text-sm mb-1">{stat.label}</div>
              <div className={`text-xs font-medium ${stat.change === 'Live' ? 'text-emerald-cyber' : 'text-green-500'}`}>
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Purchase Panel */}
          <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Purchase $NAE Tokens</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-gray-400 mb-2 text-sm sm:text-base">Amount (USD)</label>
                <div className="relative">
                  <span className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 sm:py-3 pl-8 sm:pl-10 pr-3 sm:pr-4 text-white focus:outline-none focus:border-emerald-cyber text-sm sm:text-base mobile-tap-target"
                    min="10"
                    max="10000"
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs sm:text-sm text-gray-400">
                  <span>Balance: {connected ? '$1,234.56' : 'Connect wallet'}</span>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setAmount('10')}
                      className="text-emerald-cyber hover:underline text-xs"
                    >
                      Min: $10
                    </button>
                    <button 
                      onClick={() => setAmount('100')}
                      className="text-emerald-cyber hover:underline text-xs"
                    >
                      Use 100
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-2 text-sm sm:text-base">You Receive</label>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 sm:p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div className="mb-2 sm:mb-0">
                      <div className="text-xl sm:text-2xl font-bold">
                        {amount ? (parseFloat(amount) / 0.025).toLocaleString() : '0'}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">$NAE Tokens</div>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-xs sm:text-sm text-gray-400">Price: $0.025</div>
                      <div className="text-xs text-emerald-cyber">1 $NAE = $0.025</div>
                    </div>
                  </div>
                </div>
              </div>

              {!connected ? (
                <button
                  onClick={handleConnect}
                  className="w-full bg-emerald-cyber text-black font-bold py-3 rounded-lg hover:shadow-[0_0_20px_rgba(0,255,159,0.4)] transition-all text-sm sm:text-base mobile-tap-target"
                >
                  Connect Wallet
                </button>
              ) : (
                <button
                  onClick={handleBuy}
                  disabled={!amount}
                  className={`w-full font-bold py-3 rounded-lg transition-all text-sm sm:text-base mobile-tap-target ${
                    amount
                      ? 'bg-emerald-cyber text-black hover:shadow-[0_0_20px_rgba(0,255,159,0.4)]'
                      : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Buy $NAE Tokens
                </button>
              )}

              <div className="text-center text-xs sm:text-sm text-gray-400">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse hidden sm:inline"></span>
                  <span className="sm:hidden">✓ Secure • Real-time • Instant</span>
                  <span className="hidden sm:inline">Secure transaction • Real-time tracking • Instant distribution</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info Panel */}
          <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Launch Information</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Sale Progress</h4>
                <div className="mb-2">
                  <div className="flex justify-between text-xs sm:text-sm mb-1">
                    <span>Soft Cap: $50K</span>
                    <span>Hard Cap: $250K</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-cyber rounded-full"
                      style={{ width: '50.2%' }}
                    ></div>
                  </div>
                  <div className="text-right text-xs sm:text-sm text-emerald-cyber mt-1">
                    50.2% Complete
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Token Details</h4>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Token Name</span>
                    <span className="font-medium">Neural Nexus ($NAE)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Network</span>
                    <span className="font-medium">Base Network</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Token Price</span>
                    <span className="font-medium">$0.025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Total Supply</span>
                    <span className="font-medium">1B</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 sm:pt-6 border-t border-gray-700">
                <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Important Notes</h4>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                  <li className="flex items-start">
                    <span className="text-emerald-cyber mr-2 mt-0.5">•</span>
                    <span>Tokens distributed immediately after purchase</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-cyber mr-2 mt-0.5">•</span>
                    <span>25% burn tax applies to all transactions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-cyber mr-2 mt-0.5">•</span>
                    <span>Min: $10 • Max: $10,000 per purchase</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-cyber mr-2 mt-0.5">•</span>
                    <span>5% referral bonus for referred purchases</span>
                  </li>
                </ul>
              </div>

              {/* Mobile-only quick actions */}
              <div className="sm:hidden pt-4 border-t border-gray-700">
                <h4 className="text-base font-bold mb-3">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={() => window.open('https://docs.neuralnexus.ai', '_blank')}
                    className="bg-gray-700 text-white py-2 rounded-lg text-xs"
                  >
                    📚 Docs
                  </button>
                  <button 
                    onClick={() => window.open('https://t.me/neuralnexus', '_blank')}
                    className="bg-gray-700 text-white py-2 rounded-lg text-xs"
                  >
                    💬 Telegram
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Navigation Hint */}
        <div className="mt-6 sm:hidden text-center text-xs text-gray-500">
          ↕️ Scroll for more details • Tap buttons for actions
        </div>
      </div>
    </section>
  );
};

export default LaunchpadDashboard;