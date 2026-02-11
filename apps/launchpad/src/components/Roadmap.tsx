const Roadmap = () => {
  const milestones = [
    {
      phase: "Phase 1",
      title: "Genesis Launch",
      status: "current",
      items: [
        "Token Presale (50 ETH Target)",
        "Base Mainnet Deployment",
        "Initial Liquidity Lock (2 Years)",
        "Community DAO Formation"
      ]
    },
    {
      phase: "Phase 2",
      title: "Ecosystem Growth",
      status: "upcoming",
      items: [
        "Staking & Yield Farming",
        "Cross-Chain Bridge (Arbitrum)",
        "Partner Integrations",
        "Governance Token Airdrop"
      ]
    },
    {
      phase: "Phase 3",
      title: "Neural Expansion",
      status: "future",
      items: [
        "AI-Powered Trading Tools",
        "DeFi Protocol Suite",
        "Institutional Gateway",
        "Global Expansion"
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-16 sm:py-24 px-4 sm:px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Strategic Roadmap</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            A transparent, milestone-driven path to building the Neural Nexus ecosystem.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-emerald-cyber/20 -translate-x-1/2 hidden sm:block"></div>
          
          <div className="space-y-8 sm:space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  index % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-4 sm:left-1/2 w-4 h-4 sm:w-6 sm:h-6 rounded-full border-2 border-emerald-cyber bg-obsidian-deep z-10 -translate-x-1/2 sm:-translate-x-1/2">
                  <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full m-auto mt-0.5 sm:mt-1 ${
                    milestone.status === 'current' ? 'bg-emerald-cyber animate-pulse' :
                    milestone.status === 'upcoming' ? 'bg-emerald-cyber/50' : 'bg-emerald-cyber/20'
                  }`}></div>
                </div>
                
                {/* Content card */}
                <div className={`ml-12 sm:ml-0 sm:w-5/12 ${
                  index % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12'
                }`}>
                  <div className="bg-obsidian-deep/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-2 sm:px-3 py-1 rounded-full text-[9px] sm:text-xs font-mono font-bold uppercase tracking-widest ${
                        milestone.status === 'current' ? 'bg-emerald-cyber/20 text-emerald-cyber' :
                        milestone.status === 'upcoming' ? 'bg-emerald-cyber/10 text-emerald-cyber/80' : 'bg-white/5 text-gray-400'
                      }`}>
                        {milestone.phase}
                      </span>
                      <span className="text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-widest">
                        {milestone.status}
                      </span>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold mb-3">{milestone.title}</h3>
                    
                    <ul className="space-y-2">
                      {milestone.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-cyber/50 mt-1.5 shrink-0"></div>
                          <span className="text-sm sm:text-base text-gray-400">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;