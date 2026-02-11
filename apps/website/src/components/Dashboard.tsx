import { useState, useEffect } from 'react';

const Dashboard = () => {
  const [burnedToday, setBurnedToday] = useState(142500);
  const [totalBurned, setTotalBurned] = useState(1250000);
  const [marketCap, setMarketCap] = useState(1250000);
  const [holders, setHolders] = useState(42);

  useEffect(() => {
    // Simulate live data updates
    const interval = setInterval(() => {
      setBurnedToday(prev => prev + Math.floor(Math.random() * 1000));
      setTotalBurned(prev => prev + Math.floor(Math.random() * 5000));
      setMarketCap(prev => prev + Math.floor(Math.random() * 10000));
      setHolders(prev => prev + Math.floor(Math.random() * 2));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
  };

  return (
    <section id="dashboard" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">Live Dashboard</h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Real-time metrics tracking the Neural Nexus ecosystem
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Burned Today */}
          <div className="glass-panel rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center">
            <div className="text-[10px] sm:text-xs text-gray-500 uppercase font-mono mb-2">Burned Today</div>
            <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-emerald-cyber mb-1">
              {formatNumber(burnedToday)}
            </div>
            <div className="text-[10px] sm:text-xs text-gray-500">$NAE</div>
            <div className="mt-3 h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-cyber" style={{ width: '75%' }}></div>
            </div>
          </div>
          
          {/* Total Burned */}
          <div className="glass-panel rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center">
            <div className="text-[10px] sm:text-xs text-gray-500 uppercase font-mono mb-2">Total Burned</div>
            <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white mb-1">
              {formatNumber(totalBurned)}
            </div>
            <div className="text-[10px] sm:text-xs text-gray-500">$NAE</div>
            <div className="mt-3 h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-cyber" style={{ width: '12.5%' }}></div>
            </div>
          </div>
          
          {/* Market Cap */}
          <div className="glass-panel rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center">
            <div className="text-[10px] sm:text-xs text-gray-500 uppercase font-mono mb-2">Market Cap</div>
            <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white mb-1">
              ${formatNumber(marketCap)}
            </div>
            <div className="text-[10px] sm:text-xs text-emerald-cyber">+2.4% today</div>
            <div className="mt-3 h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-cyber" style={{ width: '60%' }}></div>
            </div>
          </div>
          
          {/* Holders */}
          <div className="glass-panel rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center">
            <div className="text-[10px] sm:text-xs text-gray-500 uppercase font-mono mb-2">Holders</div>
            <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white mb-1">
              {holders}
            </div>
            <div className="text-[10px] sm:text-xs text-emerald-cyber">+2 today</div>
            <div className="mt-3 h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-cyber" style={{ width: '30%' }}></div>
            </div>
          </div>
        </div>
        
        {/* Burn Progress */}
        <div className="glass-panel rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-1">Total Burn Progress</h3>
              <p className="text-gray-400 text-sm">Target: 100,000,000 $NAE burned</p>
            </div>
            <div className="mt-3 sm:mt-0">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-cyber">
                {((totalBurned / 100000000) * 100).toFixed(2)}%
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500">of target burned</div>
            </div>
          </div>
          
          <div className="w-full bg-white/5 h-3 sm:h-4 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-cyber shadow-[0_0_15px_rgba(0,255,159,0.5)] transition-all duration-1000"
              style={{ width: `${(totalBurned / 100000000) * 100}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between mt-3 text-[10px] sm:text-xs">
            <span className="text-emerald-cyber">0 $NAE</span>
            <span className="text-gray-500">Target: 100M $NAE</span>
            <span className="text-emerald-cyber">{formatNumber(totalBurned)} $NAE</span>
          </div>
          
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-3 sm:p-4 rounded-lg bg-white/5">
              <div className="text-[10px] sm:text-xs text-gray-500 uppercase font-mono">Burn Rate</div>
              <div className="text-lg sm:text-xl font-bold">25%</div>
              <div className="text-[8px] sm:text-[10px] text-gray-500">per transaction</div>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-white/5">
              <div className="text-[10px] sm:text-xs text-gray-500 uppercase font-mono">Remaining</div>
              <div className="text-lg sm:text-xl font-bold">{formatNumber(100000000 - totalBurned)}</div>
              <div className="text-[8px] sm:text-[10px] text-gray-500">$NAE to target</div>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-white/5">
              <div className="text-[10px] sm:text-xs text-gray-500 uppercase font-mono">Daily Avg</div>
              <div className="text-lg sm:text-xl font-bold">{formatNumber(28500)}</div>
              <div className="text-[8px] sm:text-[10px] text-gray-500">$NAE burned/day</div>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-white/5">
              <div className="text-[10px] sm:text-xs text-gray-500 uppercase font-mono">Est. Completion</div>
              <div className="text-lg sm:text-xl font-bold">~350 days</div>
              <div className="text-[8px] sm:text-[10px] text-gray-500">at current rate</div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 sm:mt-10">
          <p className="text-gray-500 text-[10px] sm:text-xs">
            Data updates every 5 seconds • Burn tracker powered by Base Network
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;