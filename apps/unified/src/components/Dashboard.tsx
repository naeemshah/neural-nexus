import React from 'react';

const Dashboard: React.FC = () => {
  const metrics = [
    { label: 'Market Cap', value: '$2.5M', change: '+12.5%' },
    { label: '24h Volume', value: '$125K', change: '+8.2%' },
    { label: 'Holders', value: '1,234', change: '+5.7%' },
    { label: 'Price', value: '$0.025', change: '+3.4%' },
  ];

  const recentTransactions = [
    { type: 'Buy', amount: '$5,000', user: '0xabc...def', time: '2 min ago' },
    { type: 'Buy', amount: '$2,500', user: '0x123...456', time: '5 min ago' },
    { type: 'Sell', amount: '$1,200', user: '0x789...012', time: '12 min ago' },
    { type: 'Buy', amount: '$8,000', user: '0x345...678', time: '18 min ago' },
  ];

  return (
    <section id="dashboard" className="py-16 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Dashboard</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-time metrics and analytics for the Neural Nexus ecosystem
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold mb-2">{metric.value}</div>
              <div className="text-gray-400 text-sm mb-1">{metric.label}</div>
              <div className="text-xs font-medium text-green-500">{metric.change}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Chart Section */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Price Chart</h3>
            <div className="h-64 bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-cyber mb-2">$0.025</div>
                <div className="text-gray-400">Current $NAE Price</div>
                <div className="mt-4 text-sm text-gray-500">
                  Chart visualization would appear here
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-between text-sm">
              <button className="px-4 py-2 bg-gray-700 rounded-lg">24H</button>
              <button className="px-4 py-2 bg-emerald-cyber text-black rounded-lg font-medium">7D</button>
              <button className="px-4 py-2 bg-gray-700 rounded-lg">1M</button>
              <button className="px-4 py-2 bg-gray-700 rounded-lg">1Y</button>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Recent Transactions</h3>
            <div className="space-y-4">
              {recentTransactions.map((tx, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      tx.type === 'Buy' ? 'bg-green-900/30' : 'bg-red-900/30'
                    }`}>
                      <span className={tx.type === 'Buy' ? 'text-green-500' : 'text-red-500'}>
                        {tx.type === 'Buy' ? '↑' : '↓'}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium">{tx.type} {tx.amount}</div>
                      <div className="text-xs text-gray-400">{tx.user}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">{tx.time}</div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors">
              View All Transactions
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-xl p-6">
            <h4 className="text-lg font-bold mb-3">Total Burns</h4>
            <div className="text-3xl font-bold text-emerald-cyber">12.5M $NAE</div>
            <div className="text-sm text-gray-400 mt-2">≈ $312,500 burned</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <h4 className="text-lg font-bold mb-3">Liquidity Locked</h4>
            <div className="text-3xl font-bold text-blue-500">$750K</div>
            <div className="text-sm text-gray-400 mt-2">Locked for 2 years</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <h4 className="text-lg font-bold mb-3">Next Burn</h4>
            <div className="text-3xl font-bold text-red-500">500K $NAE</div>
            <div className="text-sm text-gray-400 mt-2">In 3 hours</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;