import React from 'react';

interface NavigationProps {
  activeTab: 'website' | 'launchpad';
  onTabChange: (tab: 'website' | 'launchpad') => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="bg-gray-900 text-white p-3 sm:p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center mb-3 sm:mb-0 w-full sm:w-auto justify-between sm:justify-start">
          <div className="flex items-center">
            <div className="text-xl sm:text-2xl font-bold mr-2">⚡</div>
            <h1 className="text-lg sm:text-xl font-bold">Neural Nexus</h1>
            <span className="ml-2 text-xs sm:text-sm bg-purple-600 px-2 py-1 rounded hidden sm:inline">Unified App</span>
          </div>
          
          {/* Mobile menu toggle (simplified) */}
          <div className="sm:hidden text-xs text-gray-400">
            {activeTab === 'website' ? '🌐' : '🚀'}
          </div>
        </div>

        {/* Tab Navigation - Improved for mobile */}
        <div className="flex w-full sm:w-auto space-x-1 sm:space-x-2 mb-3 sm:mb-0">
          <button
            onClick={() => onTabChange('website')}
            className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base mobile-tap-target ${
              activeTab === 'website'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <span className="sm:hidden">🌐 Site</span>
            <span className="hidden sm:inline">🌐 Website</span>
          </button>
          <button
            onClick={() => onTabChange('launchpad')}
            className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base mobile-tap-target ${
              activeTab === 'launchpad'
                ? 'bg-green-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <span className="sm:hidden">🚀 Buy</span>
            <span className="hidden sm:inline">🚀 Launchpad</span>
          </button>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center text-xs sm:text-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          <span className="hidden sm:inline">Live on Port 3001</span>
          <span className="sm:hidden">Live</span>
        </div>
      </div>

      {/* Mobile Responsive Note */}
      <div className="container mx-auto mt-2 text-center text-xs text-gray-400 sm:hidden">
        Tap tabs to switch • ↕️ Scroll for content
      </div>
    </nav>
  );
};

export default Navigation;