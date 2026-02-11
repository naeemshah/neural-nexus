import React from 'react';
import Hero from './Hero';
import Tokenomics from './Tokenomics';
import Litepaper from './Litepaper';
import Dashboard from './Dashboard';
import Founder from './Founder';

const WebsiteContent: React.FC = () => {
  return (
    <div className="bg-gray-950 text-white">
      <Hero />
      <Tokenomics />
      <Litepaper />
      <Dashboard />
      <Founder />
    </div>
  );
};

export default WebsiteContent;