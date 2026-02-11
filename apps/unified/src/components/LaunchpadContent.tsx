import React from 'react';
import Hero from './Hero';
import LaunchpadDashboard from './LaunchpadDashboard';
import Tokenomics from './Tokenomics';
import Roadmap from './Roadmap';
import Founder from './Founder';

const LaunchpadContent: React.FC = () => {
  return (
    <div className="bg-gray-950 text-white">
      <Hero isLaunchpad={true} />
      <LaunchpadDashboard />
      <Tokenomics />
      <Roadmap />
      <Founder />
    </div>
  );
};

export default LaunchpadContent;