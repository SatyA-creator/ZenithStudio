import { Calendar, Target, Zap } from 'lucide-react';

export default function Roadmap() {
  const milestones = [
    {
      phase: 'Q1 2024',
      title: 'Foundation',
      items: ['Research & Development of PQC algorithms', 'Initial SDK architecture', 'Team formation']
    },
    {
      phase: 'Q2 2024',
      title: 'Development',
      items: ['QuantZen SDK alpha release', 'NIST compliance implementation', 'Initial partnerships']
    },
    {
      phase: 'Q3 2024',
      title: 'Testing',
      items: ['Beta testing with select partners', 'Security audits', 'Documentation and tooling']
    },
    {
      phase: 'Q4 2024',
      title: 'Launch',
      items: ['Public SDK release', 'Cross-chain integration', 'Developer ecosystem expansion']
    },
    {
      phase: '2025',
      title: 'Scale',
      items: ['Enterprise adoption', 'Global compliance certification', 'Continued innovation in PQC']
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-zenith-black to-zenith-grey-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-l from-white/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 75%, rgba(255,255,255,0.1) 1px, transparent 1px),
            radial-gradient(circle at 75% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-flex items-center space-x-2 mb-6">
            <Target className="w-6 h-6 text-white animate-pulse" />
            <span className="text-zenith-grey-400 font-medium tracking-wider uppercase">Our Journey</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gradient mb-8 leading-tight">Zenith Roadmap</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-white to-zenith-grey-400 rounded-full mx-auto"></div>
        </div>

        <div className="relative">
          {/* Desktop timeline line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-white via-zenith-grey-400 to-white rounded-full" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right text-center' : 'md:text-left text-center'}`}>
                  <div className="group relative bg-gradient-to-br from-zenith-grey-800/60 to-zenith-black/60 p-8 rounded-3xl border border-zenith-grey-600/50 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 glass-effect card-hover">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                    <div className={`flex items-center gap-3 mb-4 justify-center md:${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <Calendar className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-white font-bold text-lg bg-gradient-to-r from-white to-zenith-grey-200 bg-clip-text text-transparent">
                        {milestone.phase}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-zenith-grey-100 transition-colors duration-300">
                      {milestone.title}
                    </h3>

                    <ul className="space-y-3">
                      {milestone.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-zenith-grey-300 group-hover:text-zenith-grey-200 transition-colors duration-300">
                          <Zap className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-white to-zenith-grey-400 group-hover:w-full transition-all duration-700 rounded-full"></div>
                  </div>
                </div>

                {/* Desktop timeline node */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-white/20 to-white/10 border-4 border-zenith-grey-800 z-10 hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 rounded-full bg-white animate-pulse"></div>
                </div>

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
