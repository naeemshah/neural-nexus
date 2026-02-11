import React from 'react';

const Tokenomics: React.FC = () => {
  const tokenomics = [
    { label: 'Burn Tax', value: '25%', color: 'bg-red-500' },
    { label: 'Liquidity', value: '60%', color: 'bg-blue-500' },
    { label: 'Marketing', value: '10%', color: 'bg-purple-500' },
    { label: 'Development', value: '5%', color: 'bg-green-500' },
  ];

  return (
    <section id="tokenomics" className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Tokenomics</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Sustainable token distribution with aggressive burn mechanics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Pie Chart Visualization */}
          <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto">
              {/* Pie chart segments */}
              <div className="absolute inset-0 rounded-full border-6 sm:border-7 md:border-8 border-red-500" style={{ clipPath: 'inset(0 50% 0 0)' }}></div>
              <div className="absolute inset-0 rounded-full border-6 sm:border-7 md:border-8 border-blue-500" style={{ clipPath: 'inset(0 0 0 50%)' }}></div>
              <div className="absolute inset-0 rounded-full border-6 sm:border-7 md:border-8 border-purple-500" style={{ clipPath: 'inset(50% 0 0 0)' }}></div>
              <div className="absolute inset-0 rounded-full border-6 sm:border-7 md:border-8 border-green-500" style={{ clipPath: 'inset(0 0 50% 0)' }}></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold">100%</div>
                  <div className="text-xs sm:text-sm text-gray-400">Distribution</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tokenomics Details */}
          <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Distribution Breakdown</h3>
            
            <div className="space-y-6">
              {tokenomics.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full ${item.color} mr-3`}></div>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <div className="text-xl font-bold">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <h4 className="text-xl font-bold mb-4">Key Features</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-emerald-cyber mr-2">✓</span>
                  <span>Automatic burns on every transaction</span>
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-cyber mr-2">✓</span>
                  <span>Deflationary supply model</span>
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-cyber mr-2">✓</span>
                  <span>Transparent token allocation</span>
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-cyber mr-2">✓</span>
                  <span>No team allocation - community focused</span>
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