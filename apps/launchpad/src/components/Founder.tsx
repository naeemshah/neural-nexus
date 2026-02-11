const Founder = () => {
  return (
    <section id="founder" className="py-24 px-6 mb-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shrink-0 border-2 border-emerald-cyber/20 shadow-2xl">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Naeem" 
              alt="Naeem Shah" 
              className="w-full h-full object-cover bg-obsidian-deep"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Naeem Shah</h2>
            <h4 className="text-emerald-cyber font-mono text-sm uppercase mb-6 tracking-widest">
              Founder & Technical Architect
            </h4>
            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              Naeem Shah is a serial entrepreneur and technical architect with a decade of experience in building scalable digital infrastructures. His vision for $NAE stems from a deep-rooted belief in transparent, code-based monetary systems. 
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Under his leadership, Neural Nexus aims to bridge the gap between complex blockchain mechanics and intuitive user experiences, making decentralized wealth preservation accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;