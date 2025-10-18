import { Shield, Zap, FileCheck, Link } from 'lucide-react';

export default function Mission() {
  const focusAreas = [
    {
      icon: Shield,
      title: 'Quantum-Safe SDKs',
      description: 'For wallets, DEXs, custodians, and enterprises'
    },
    {
      icon: Zap,
      title: 'Zero-Disruption Integration',
      description: 'Overlaying existing protocols'
    },
    {
      icon: FileCheck,
      title: 'Regulatory Alignment',
      description: 'With NIST PQC standards and global compliance'
    },
    {
      icon: Link,
      title: 'Cross-Chain Readiness',
      description: 'Across EVM and non-EVM ecosystems'
    }
  ];

  return (
    <section id="mission" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 section-gradient-2 relative overflow-hidden">
      {/* Enhanced Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-white/20 rounded-full float-slow glow-white"></div>
      <div className="absolute bottom-32 right-20 w-2 h-2 bg-white/30 rounded-full float-medium glow-blue" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-10 w-4 h-4 bg-white/15 rounded-full float-fast glow-purple" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-5 h-5 bg-white/10 rounded-full float-slow glow-green" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20 section-reveal">
          <div className="inline-block mb-4 md:mb-6">
            <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-white to-zenith-grey-400 rounded-full mb-4 md:mb-6 glow-white"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gradient mb-6 md:mb-8 leading-tight section-reveal-scale">Our Mission</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-zenith-grey-200 max-w-5xl mx-auto leading-relaxed px-4 section-reveal">
            Making quantum-safe security effortless. Every wallet, application, and protocol deserves uncrackable protection without the complexity, governance challenges, or expense of chain-level migrations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-zenith-grey-800/50 to-zenith-black/50 p-6 md:p-8 rounded-2xl border border-zenith-grey-600/50 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 card-hover glass-effect section-reveal-scale glow-purple"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Icon with Animation */}
              <div className="relative mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-zenith-grey-100 transition-colors duration-300" />
                </div>
                <div className="absolute inset-0 bg-white/10 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-zenith-grey-100 transition-colors duration-300">
                {area.title}
              </h3>
              <p className="text-sm md:text-base text-zenith-grey-300 leading-relaxed group-hover:text-zenith-grey-200 transition-colors duration-300">
                {area.description}
              </p>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '1px' }}>
                <div className="w-full h-full bg-gradient-to-br from-zenith-grey-800/50 to-zenith-black/50 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="flex justify-center mt-12 md:mt-16 fade-in-section">
          <div className="flex items-center space-x-4">
            <div className="w-6 md:w-8 h-1 bg-gradient-to-r from-transparent to-white/50 rounded-full"></div>
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
            <div className="w-6 md:w-8 h-1 bg-gradient-to-l from-transparent to-white/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
