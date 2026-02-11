const Tokenomics = () => {
  const distribution = [
    { label: 'Presale', percentage: 50, amount: 500000000, color: 'bg-emerald-cyber' },
    { label: 'Liquidity', percentage: 30, amount: 300000000, color: 'bg-blue-500' },
    { label: 'Marketing', percentage: 15, amount: 150000000, color: 'bg-purple-500' },
    { label: 'Ecosystem', percentage: 5, amount: 50000000, color: 'bg-yellow-500' },
  ];

  return (
    <section id="tokenomics" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">Tokenomics</h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Sustainable deflationary mechanics designed for long-term value appreciation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Distribution Chart */}
          <div className="glass-panel rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Token Distribution</h3>
            
            <div className="space-y-4 sm:space-y-5">
              {distribution.map((item, index) => (
                <div key={index} className="space-y-1.5 sm:space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="font-medium">{item.label}</span>
                    <span className="font-mono">{item.percentage}% • {item.amount.toLocaleString()} $NAE</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 sm:h-3 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${item.color} transition-all duration-1000`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-lg sm:rounded-xl bg-emerald-cyber/5 border border-emerald-cyber/20">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-cyber/20 flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-cyber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold">Total Supply: 1,000,000,000 $NAE</div>
                  <div className="text-[10px] sm:text-xs text-gray-500">Fixed supply with aggressive burn mechanics</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Burn Mechanics */}
          <div className="glass-panel rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Burn Mechanics</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="p-4 sm:p-5 rounded-lg sm:rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm sm:text-base font-medium">Transaction Burn</div>
                  <div className="text-lg sm:text-xl font-bold text-emerald-cyber">25%</div>
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500">
                  25% of every transaction is permanently burned, creating constant deflationary pressure
                </div>
              </div>
              
              <div className="p-4 sm:p-5 rounded-lg sm:rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm sm:text-base font-medium">Liquidity Lock</div>
                  <div className="text-lg sm:text-xl font-bold text-emerald-cyber">100%</div>
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500">
                  All presale liquidity is permanently locked, ensuring long-term stability
                </div>
              </div>
              
              <div className="p-4 sm:p-5 rounded-lg sm:rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm sm:text-base font-medium">Team Allocation</div>
                  <div className="text-lg sm:text-xl font-bold text-emerald-cyber">0%</div>
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500">
                  No team tokens, no pre-mine. Fair launch for all participants
                </div>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8">
              <h4 className="text-sm sm:text-base font-bold mb-3 sm:mb-4">Key Features</h4>
              <ul className="space-y-2 sm:space-y-3 text-[10px] sm:text-xs text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-cyber mt-0.5">✓</span>
                  <span>Owner-exempt burn tax (team can transfer without 25% tax)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-cyber mt-0.5">✓</span>
                  <span>Automatic liquidity pool contributions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-cyber mt-0.5">✓</span>
                  <span>Real-time burn tracking dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-cyber mt-0.5">✓</span>
                  <span>Community-driven governance (future)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;