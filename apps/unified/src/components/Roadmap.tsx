import React from 'react';

const Roadmap: React.FC = () => {
  const phases = [
    {
      title: 'Phase 1: Launch',
      status: 'completed',
      items: [
        'Token creation and deployment',
        'Initial liquidity provision',
        'Website and launchpad launch',
        'Community building',
      ],
    },
    {
      title: 'Phase 2: Growth',
      status: 'current',
      items: [
        'CEX listings',
        'Marketing campaigns',
        'Partnership announcements',
        'Staking platform development',
      ],
    },
    {
      title: 'Phase 3: Expansion',
      status: 'upcoming',
      items: [
        'Mobile app release',
        'Additional product features',
        'Global expansion',
        'Enterprise partnerships',
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-16 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Roadmap</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Strategic development timeline for the Neural Nexus ecosystem
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800 hidden md:block"></div>

          {phases.map((phase, index) => (
            <div key={index} className={`relative mb-12 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-gray-900 z-10 hidden md:flex items-center justify-center">
                <div className={`w-3 h-3 rounded-full ${
                  phase.status === 'completed' ? 'bg-green-500' :
                  phase.status === 'current' ? 'bg-emerald-cyber animate-pulse' :
                  'bg-gray-700'
                }`}></div>
              </div>

              {/* Content */}
              <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className={`bg-gray-900 rounded-2xl p-8 ${
                  phase.status === 'current' ? 'ring-2 ring-emerald-cyber' : ''
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{phase.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      phase.status === 'completed' ? 'bg-green-900/30 text-green-500' :
                      phase.status === 'current' ? 'bg-emerald-cyber/20 text-emerald-cyber' :
                      'bg-gray-800 text-gray-400'
                    }`}>
                      {phase.status === 'completed' ? '✓ Completed' :
                       phase.status === 'current' ? '● In Progress' :
                       '○ Upcoming'}
                    </span>
                  </div>
                  
                  <ul className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        {index % 2 === 0 ? (
                          <>
                            <span className="text-emerald-cyber mr-2 mt-1">•</span>
                            <span className="text-gray-300">{item}</span>
                          </>
                        ) : (
                          <>
                            <span className="text-gray-300">{item}</span>
                            <span className="text-emerald-cyber ml-2 mt-1">•</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>

                  {phase.status === 'current' && (
                    <div className="mt-6 pt-6 border-t border-gray-800">
                      <div className="text-sm text-gray-400 mb-2">Current Progress</div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-emerald-cyber rounded-full"
                          style={{ width: index === 1 ? '65%' : '100%' }}
                        ></div>
                      </div>
                      <div className="text-right text-sm text-emerald-cyber mt-1">
                        {index === 1 ? '65% Complete' : '100% Complete'}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current Focus */}
        <div className="bg-gray-900 rounded-2xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-6">Current Focus: Phase 2 - Growth</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4 text-emerald-cyber">Active Initiatives</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-cyber rounded-full mr-3 animate-pulse"></span>
                  <span>CEX listing negotiations</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-cyber rounded-full mr-3 animate-pulse"></span>
                  <span>Marketing campaign rollout</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-cyber rounded-full mr-3 animate-pulse"></span>
                  <span>Staking platform development</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-emerald-cyber">Next Milestones</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-emerald-cyber mr-3">Q1 2026</span>
                  <span>First CEX listing</span>
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-cyber mr-3">Q2 2026</span>
                  <span>Staking platform launch</span>
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-cyber mr-3">Q3 2026</span>
                  <span>Mobile app beta</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;