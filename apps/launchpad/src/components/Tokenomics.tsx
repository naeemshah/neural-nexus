const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 tracking-tight">
              Built for <br/><span className="text-emerald-cyber">Value Preservation</span>
            </h2>
            <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
              Our smart contract is engineered to reward long-term holders while continuously reducing circulating supply.
            </p>
            <ul className="space-y-4 sm:space-y-6">
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 xs:w-10 xs:h-10 rounded-lg xs:rounded-xl bg-emerald-cyber/10 flex items-center justify-center shrink-0 mt-0.5 xs:mt-1 border border-emerald-cyber/20">
                  <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-emerald-cyber"></div>
                </div>
                <div>
                  <span className="font-bold block text-base xs:text-lg sm:text-xl">1 Billion Total Supply</span>
                  <span className="text-gray-500 text-xs xs:text-sm">Hard-coded limit. No new tokens can ever be minted.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 xs:w-10 xs:h-10 rounded-lg xs:rounded-xl bg-emerald-cyber/10 flex items-center justify-center shrink-0 mt-0.5 xs:mt-1 border border-emerald-cyber/20">
                  <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-emerald-cyber"></div>
                </div>
                <div>
                  <span className="font-bold block text-base xs:text-lg sm:text-xl">25% Genesis Burn</span>
                  <span className="text-gray-500 text-xs xs:text-sm">250,000,000 $NAE sent to dead address at launch.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 xs:w-10 xs:h-10 rounded-lg xs:rounded-xl bg-emerald-cyber/10 flex items-center justify-center shrink-0 mt-0.5 xs:mt-1 border border-emerald-cyber/20">
                  <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-emerald-cyber"></div>
                </div>
                <div>
                  <span className="font-bold block text-base xs:text-lg sm:text-xl">25% Burn Tax</span>
                  <span className="text-gray-500 text-xs xs:text-sm">Every transfer burns 25% (owner exempt). Deflationary by design.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="aspect-square rounded-2xl xs:rounded-3xl sm:rounded-[3rem] border-2 border-emerald-cyber/10 flex items-center justify-center relative bg-emerald-cyber/5 cyber-border">
              <div className="w-4/5 h-4/5 rounded-xl xs:rounded-2xl sm:rounded-[2rem] border-2 border-emerald-cyber/30 flex items-center justify-center p-4 xs:p-6 sm:p-8 text-center bg-obsidian-deep/50">
                <div className="text-emerald-cyber">
                  <div className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-black cyber-glow">25%</div>
                  <div className="text-[10px] xs:text-xs font-mono tracking-[0.2em] xs:tracking-[0.3em] uppercase mt-2 xs:mt-4">Supply Burned</div>
                </div>
              </div>
              <div className="absolute -top-2 xs:-top-3 sm:-top-4 right-1/4 bg-obsidian-deep border border-emerald-cyber/50 px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-md xs:rounded-lg text-[8px] xs:text-[10px] font-mono tracking-widest uppercase">
                Cap: 1B
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;