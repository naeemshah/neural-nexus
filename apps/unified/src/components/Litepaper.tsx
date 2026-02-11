import React from 'react';

const Litepaper: React.FC = () => {
  const sections = [
    { title: 'Introduction', desc: 'Overview of Neural Nexus and $NAE token' },
    { title: 'Tokenomics', desc: 'Detailed token distribution and burn mechanics' },
    { title: 'Roadmap', desc: 'Development timeline and future plans' },
    { title: 'Technology', desc: 'Technical architecture and security features' },
    { title: 'Team', desc: 'Core team members and advisors' },
    { title: 'Legal', desc: 'Compliance and regulatory information' },
  ];

  return (
    <section id="litepaper" className="py-16 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Litepaper</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive documentation of the Neural Nexus ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sections.map((section, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="text-2xl font-bold text-emerald-cyber mb-3">{section.title}</div>
              <p className="text-gray-400">{section.desc}</p>
              <div className="mt-4 flex items-center text-emerald-cyber">
                <span>Read Section</span>
                <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-3">Download Full Litepaper</h3>
              <p className="text-gray-400 mb-6 md:mb-0">
                Get the complete technical documentation and whitepaper
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-emerald-cyber text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,255,159,0.4)] transition-all">
                Download PDF
              </button>
              <button className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors">
                Read Online
              </button>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-emerald-cyber mb-3">25%</div>
            <div className="text-lg font-bold mb-2">Burn Tax</div>
            <p className="text-gray-400">Aggressive deflationary mechanism</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-emerald-cyber mb-3">100%</div>
            <div className="text-lg font-bold mb-2">Community Focused</div>
            <p className="text-gray-400">No team allocation, fair launch</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-emerald-cyber mb-3">Base</div>
            <div className="text-lg font-bold mb-2">Network</div>
            <p className="text-gray-400">Built on Ethereum L2 for low fees</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Litepaper;