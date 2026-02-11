const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold mb-6 tracking-tight">
              Built for <br/><span className="text-emerald-cyber">Value Preservation</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Our smart contract is engineered to reward long-term holders while continuously reducing circulating supply.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-cyber/10 flex items-center justify-center shrink-0 mt-1 border border-emerald-cyber/20">
                  <div className="w-2 h-2 rounded-full bg-emerald-cyber"></div>
                </div>
                <div>
                  <span className="font-bold block text-xl">1 Billion Total Supply</span>
                  <span className="text-gray-500 text-sm">Hard-coded limit. No new tokens can ever be minted.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-cyber/10 flex items-center justify-center shrink-0 mt-1 border border-emerald-cyber/20">
                  <div className="w-2 h-2 rounded-full bg-emerald-cyber"></div>
                </div>
                <div>
                  <span className="font-bold block text-xl">25% Genesis Burn</span>
                  <span className="text-gray-500 text-sm">250,000,000 $NAE sent to dead address at launch.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="aspect-square rounded-[3rem] border-2 border-emerald-cyber/10 flex items-center justify-center relative bg-emerald-cyber/5 cyber-border">
              <div className="w-4/5 h-4/5 rounded-[2rem] border-2 border-emerald-cyber/30 flex items-center justify-center p-8 text-center bg-obsidian-deep/50">
                <div className="text-emerald-cyber">
                  <div className="text-7xl font-black cyber-glow">25%</div>
                  <div className="text-xs font-mono tracking-[0.3em] uppercase mt-4">Supply Burned</div>
                </div>
              </div>
              <div className="absolute -top-4 right-1/4 bg-obsidian-deep border border-emerald-cyber/50 px-4 py-2 rounded-lg text-[10px] font-mono tracking-widest uppercase">
                Cap: 1,000,000,000
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;