import React from 'react';

const Footer: React.FC = () => {
  const links = {
    Product: ['Launchpad', 'Dashboard', 'Litepaper', 'Roadmap'],
    Resources: ['Documentation', 'Audits', 'Blog', 'FAQ'],
    Community: ['Twitter', 'Telegram', 'Discord', 'GitHub'],
    Legal: ['Terms', 'Privacy', 'Disclaimer', 'Contact'],
  };

  return (
    <footer className="bg-gray-950 text-white pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 px-3 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="text-2xl sm:text-3xl font-bold mr-2 sm:mr-3">⚡</div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">Neural Nexus</h2>
                <div className="text-emerald-cyber text-xs sm:text-sm">Unified App v1.0</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              A high-performance, deflationary token powering the Neural Nexus ecosystem 
              with aggressive burn mechanics on Base Network.
            </p>
            <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
              <button className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors text-xs sm:text-sm mobile-tap-target">
                𝕏
              </button>
              <button className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors text-xs sm:text-sm mobile-tap-target">
                📱
              </button>
              <button className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors text-xs sm:text-sm mobile-tap-target">
                💬
              </button>
              <button className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors text-xs sm:text-sm mobile-tap-target">
                📚
              </button>
            </div>
          </div>

          {/* Links - Responsive grid */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 md:mb-4">{category}</h3>
              <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-emerald-cyber transition-colors text-sm sm:text-base"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-6 md:mb-0">
              <div className="flex items-center text-xs sm:text-sm text-gray-400">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-1.5 sm:mr-2 animate-pulse"></span>
                <span>Unified App Running on Port 3001</span>
              </div>
              <div className="text-xs text-gray-500 mt-1 sm:mt-2">
                © 2026 Neural Nexus. All rights reserved.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6">
              <div className="text-xs sm:text-sm text-gray-400">
                <span className="text-emerald-cyber font-medium">$NAE</span> Contract: 
                <span className="ml-1 sm:ml-2 font-mono text-xs">0x1234...5678</span>
              </div>
              <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800 rounded-lg text-xs sm:text-sm hover:bg-gray-700 transition-colors mobile-tap-target">
                Copy Address
              </button>
            </div>
          </div>

          {/* Mobile Responsive Note */}
          <div className="mt-6 sm:mt-8 text-center text-xs text-gray-500 md:hidden">
            <p>📱 Mobile optimized • Tap tabs to switch • 🔄 Pull to refresh</p>
          </div>

          {/* Status Bar */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center text-xs text-gray-500 gap-2 sm:gap-3 md:gap-4">
            <div className="flex items-center">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>
              <span className="hidden sm:inline">Website Tab</span>
              <span className="sm:hidden">Site</span>
            </div>
            <div className="flex items-center">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>
              <span className="hidden sm:inline">Launchpad Tab</span>
              <span className="sm:hidden">Buy</span>
            </div>
            <div className="flex items-center">
              <span className="w-1.5 h-1.5 bg-emerald-cyber rounded-full mr-1.5 animate-pulse"></span>
              <span className="hidden sm:inline">Port 3001 Active</span>
              <span className="sm:hidden">Live</span>
            </div>
            <div className="flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1.5"></span>
              <span className="hidden sm:inline">Mobile Responsive</span>
              <span className="sm:hidden">Mobile</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;