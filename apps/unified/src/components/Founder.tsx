import React from 'react';

const Founder: React.FC = () => {
  const teamMembers = [
    {
      name: 'Naeem Shah',
      role: 'Founder & CEO',
      bio: 'Blockchain entrepreneur with 8+ years in crypto, previously led multiple successful DeFi projects.',
      twitter: '@naeemshah45',
    },
    {
      name: 'Alex Chen',
      role: 'CTO',
      bio: 'Former senior engineer at major crypto exchange, specializes in smart contract security and scalability.',
      twitter: '@alexchen_tech',
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Marketing',
      bio: 'Digital marketing expert with focus on crypto community building and growth strategies.',
      twitter: '@sarahcrypto',
    },
  ];

  const advisors = [
    { name: 'Dr. Michael Zhang', role: 'Blockchain Security Advisor' },
    { name: 'Lisa Rodriguez', role: 'Legal & Compliance Advisor' },
    { name: 'David Park', role: 'DeFi Economics Advisor' },
  ];

  return (
    <section id="team" className="py-16 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Team & Advisors</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experienced professionals building the future of decentralized finance
          </p>
        </div>

        {/* Core Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Core Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 text-center">
                <div className="w-24 h-24 bg-emerald-cyber/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="text-3xl">{member.name.charAt(0)}</div>
                </div>
                <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                <div className="text-emerald-cyber font-medium mb-4">{member.role}</div>
                <p className="text-gray-400 mb-6">{member.bio}</p>
                <div className="text-sm text-gray-500">{member.twitter}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Advisors</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 text-center">
                <h4 className="text-lg font-bold mb-2">{advisor.name}</h4>
                <div className="text-gray-400">{advisor.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Transparency Note */}
        <div className="mt-16 bg-gray-800 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-3">Transparency & Security</h3>
              <p className="text-gray-400">
                All team members are publicly doxxed. Smart contracts are audited and verified.
              </p>
            </div>
            <div className="flex space-x-4 mt-6 md:mt-0">
              <button className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                View Audits
              </button>
              <button className="px-6 py-3 bg-emerald-cyber text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,255,159,0.4)] transition-all">
                Contact Team
              </button>
            </div>
          </div>
        </div>

        {/* Key Principles */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="text-3xl mb-4">🔒</div>
            <div className="text-lg font-bold mb-2">Security First</div>
            <p className="text-gray-400">Audited contracts, multi-sig wallets, regular security reviews</p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl mb-4">🌐</div>
            <div className="text-lg font-bold mb-2">Transparency</div>
            <p className="text-gray-400">Public team, open-source code, regular updates</p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl mb-4">🤝</div>
            <div className="text-lg font-bold mb-2">Community Driven</div>
            <p className="text-gray-400">No team allocation, community governance, fair launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;