import React, { useState } from 'react';

interface BlogArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

const Blog: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  const blogArticles: BlogArticle[] = [
    {
      id: 1,
      title: "The Future of Hyper-Deflationary Tokens on L2: Neural Nexus Case Study",
      excerpt: "Exploring how Neural Nexus leverages Base Network's L2 capabilities to create a sustainable, scarcity-driven economy.",
      date: "2026-02-11",
      readTime: "5 min read",
      category: "Tokenomics",
      content: `The cryptocurrency landscape has evolved significantly since Bitcoin's inception, with Layer 2 (L2) solutions emerging as the next frontier for scalable, efficient blockchain applications. Among the most innovative developments in this space are hyper-deflationary token models that combine scarcity mechanics with advanced ecosystem utility. Neural Nexus ($NAE) represents a paradigm shift in this domain, leveraging Base Network's L2 capabilities to create a sustainable, scarcity-driven economy.

## Key Innovations

1. **25% Burn Tax Mechanism**: Every transaction automatically burns 25% of tokens, creating permanent scarcity
2. **L2 Efficiency**: Base Network provides near-zero transaction fees and instant finality
3. **Ecosystem Integration**: Native staking, governance, and utility within the Neural Nexus platform

## Market Impact

The hyper-deflationary model addresses key challenges in traditional token economics:
- **Inflation Control**: Automatic burn reduces circulating supply over time
- **Value Accrual**: Scarcity mechanics drive long-term price appreciation
- **Community Alignment**: All participants benefit from the deflationary pressure

## Future Outlook

As L2 adoption accelerates, hyper-deflationary tokens like $NAE are positioned to redefine value capture in decentralized ecosystems. The combination of scarcity mechanics with L2 efficiency creates a powerful foundation for sustainable growth.`
    },
    {
      id: 2,
      title: "Why Base Network is the Ideal Platform for Next-Gen DeFi Projects",
      excerpt: "Analyzing Base Network's technical advantages for DeFi innovation and why Neural Nexus chose it as its foundation.",
      date: "2026-02-10",
      readTime: "4 min read",
      category: "Technology",
      content: `Base Network has emerged as a leading Layer 2 solution for Ethereum, offering unparalleled scalability, security, and developer experience. For DeFi projects like Neural Nexus, Base provides the ideal infrastructure for building next-generation financial applications.

## Technical Advantages

### 1. **Scalability**
- **Throughput**: 2,000+ transactions per second
- **Finality**: Sub-2 second block times
- **Cost**: <$0.01 average transaction fee

### 2. **Security**
- **Ethereum Security**: Inherits Ethereum's battle-tested security model
- **Optimistic Rollups**: Fraud proofs ensure transaction validity
- **Decentralized Sequencing**: No single point of failure

### 3. **Developer Experience**
- **EVM Compatibility**: Seamless migration from Ethereum
- **Tooling**: Comprehensive SDKs and developer tools
- **Community**: Growing ecosystem of builders and innovators

## Why Neural Nexus Chose Base

1. **Cost Efficiency**: The 25% burn tax mechanism requires low transaction fees to remain viable
2. **User Experience**: Fast transactions enhance the launchpad and staking experience
3. **Ecosystem Growth**: Base's expanding user base provides natural adoption channels

## Conclusion

Base Network represents the future of scalable blockchain infrastructure. For DeFi projects prioritizing user experience, cost efficiency, and security, Base offers an unmatched platform for innovation.`
    },
    {
      id: 3,
      title: "Building Sustainable Token Economies: Lessons from Neural Nexus",
      excerpt: "How Neural Nexus combines deflationary mechanics with real utility to create lasting value for token holders.",
      date: "2026-02-09",
      readTime: "6 min read",
      category: "Economics",
      content: `Sustainable token economies require careful balance between scarcity, utility, and community incentives. Neural Nexus ($NAE) implements a comprehensive economic model designed for long-term viability.

## Core Economic Principles

### 1. **Scarcity Through Utility**
- **Transaction Burns**: 25% automatic burn creates permanent scarcity
- **Staking Rewards**: Active participation earns additional tokens
- **Governance Rights**: Token holders influence protocol development

### 2. **Value Accrual Mechanisms**
- **Fee Distribution**: Protocol fees distributed to stakers
- **Buyback Programs**: Strategic treasury management
- **Ecosystem Growth**: New features drive demand for $NAE

### 3. **Community Alignment**
- **Transparent Roadmap**: Clear development trajectory
- **Governance Participation**: Community-driven decision making
- **Educational Resources**: Empowering users with knowledge

## Implementation Strategy

**Phase 1: Foundation (Current)**
- Token launch with 25% burn tax
- Basic staking functionality
- Community governance setup

**Phase 2: Expansion (Q2 2026)**
- Advanced DeFi integrations
- Cross-chain capabilities
- Enhanced governance features

**Phase 3: Maturity (Q4 2026)**
- Full ecosystem deployment
- Institutional partnerships
- Global adoption initiatives

## Key Takeaways

1. **Sustainability First**: Economic models must prioritize long-term viability over short-term gains
2. **Community-Centric**: Token value derives from active, engaged communities
3. **Adaptive Design**: Economic parameters should evolve with market conditions

Neural Nexus demonstrates how thoughtful economic design can create resilient token ecosystems in the rapidly evolving blockchain landscape.`
    }
  ];

  const handleArticleClick = (article: BlogArticle) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  if (selectedArticle) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 animate-fadeIn">
        <button
          onClick={handleBackToList}
          className="mb-6 flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Articles
        </button>

        <article className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800">
          <div className="flex items-center justify-between mb-6">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
              {selectedArticle.category}
            </span>
            <div className="text-gray-400 text-sm">
              {selectedArticle.date} • {selectedArticle.readTime}
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {selectedArticle.title}
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed whitespace-pre-line">
              {selectedArticle.content}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="flex items-center justify-between">
              <div className="text-gray-400 text-sm">
                Share this article:
              </div>
              <div className="flex space-x-3">
                <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </button>
                <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 8h.946c.61 0 1.172-.414 1.338-1.007l.495-1.966c.12-.479-.212-.984-.701-1.127-.489-.144-1.001.112-1.148.588l-.443 1.76h-1.89l.498-1.987c.12-.479-.212-.984-.701-1.127-.489-.144-1.001.112-1.148.588l-.5 2c-.047.18-.056.375-.026.565.03.19.1.37.208.525.108.155.25.283.415.374.165.091.348.142.535.15h.947l-1.47 5.834h-.946c-.61 0-1.172.414-1.338 1.007l-.495 1.966c-.12.479.212.984.701 1.127.489.144 1.001-.112 1.148-.588l.443-1.76h1.89l-.498 1.987c-.12.479.212.984.701 1.127.489.144 1.001-.112 1.148-.588l.5-2c.047-.18.056-.375.026-.565-.03-.19-.1-.37-.208-.525-.108-.155-.25-.283-.415-.374-.165-.091-.348-.142-.535-.15h-.947l1.47-5.834zm-2.81 5.834h-1.89l1.47-5.834h1.89l-1.47 5.834z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-fadeIn">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Neural Nexus Blog
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Insights, analysis, and updates on hyper-deflationary tokens, Layer 2 technology, and sustainable token economies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {blogArticles.map((article) => (
          <div
            key={article.id}
            className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
            onClick={() => handleArticleClick(article)}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <span className="text-gray-500 text-sm">{article.date}</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
              {article.title}
            </h3>
            
            <p className="text-gray-400 mb-4 line-clamp-3">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-800">
              <span className="text-gray-500 text-sm">{article.readTime}</span>
              <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
                Read More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-400">
              Subscribe to receive the latest articles and project updates directly in your inbox.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 flex-grow sm:flex-grow-0 sm:w-64"
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;