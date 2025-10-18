import { ExternalLink, Shield, Zap, CheckCircle, Code, Sparkles, Atom } from 'lucide-react';

export default function QuantZen() {
  const features = [
    {
      icon: Shield,
      title: 'No Hard Forks',
      description: 'Blockchains remain unchanged, no disruptive migrations'
    },
    {
      icon: CheckCircle,
      title: 'No Re-auditing',
      description: 'Complete compatibility with existing applications'
    },
    {
      icon: Zap,
      title: 'Immediate Quantum Resilience',
      description: 'Developers integrate protection today'
    },
    {
      icon: Code,
      title: 'Seamless Integration',
      description: 'Plug-and-play SDK for wallets, custodians, and DeFi'
    }
  ];

  return (
    <section id="quantzen" className="py-24 px-4 bg-gradient-to-b from-zenith-black via-zenith-grey-900 to-zenith-grey-800 relative overflow-hidden">
      {/* Quantum-inspired Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-white/10 via-white/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-l from-white/8 via-white/3 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-96 h-96 bg-gradient-to-t from-white/5 via-white/2 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Quantum Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255,255,255,0.2) 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 1px, transparent 1px),
            radial-gradient(circle at 40% 40%, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px, 60px 60px, 40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-flex items-center space-x-3 mb-8">
            <Atom className="w-8 h-8 text-white animate-spin-slow" />
            <span className="text-4xl md:text-5xl font-black tracking-wider text-gradient">Flagship Product:QuantZen</span>
            <Atom className="w-8 h-8 text-white animate-spin-slow" />
          </div>
           
          <div className="relative inline-block">
            <p className="text-xl md:text-3xl text-white font-light mb-8 leading-relaxed max-w-4xl">
              The world's first dual-signature SDK combining classical ECDSA with Post-Quantum Cryptography.
            </p>
            <div className="absolute -top-4 -right-4">
              <Sparkles className="w-8 h-8 text-white/60 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-12 text-center slide-in-left">Why QuantZen Matters:</h3>
          <div className="grid md:grid-cols-2 gap-8 stagger-animation">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-zenith-grey-800/60 to-zenith-black/60 p-8 rounded-3xl border border-zenith-grey-600/50 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 glass-effect"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Animated Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:rotate-3">
                    <feature.icon className="w-8 h-8 text-white group-hover:text-zenith-grey-100 transition-colors duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                </div>

                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-zenith-grey-100 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-zenith-grey-300 leading-relaxed group-hover:text-zenith-grey-200 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Progress indicator */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-white to-zenith-grey-400 group-hover:w-full transition-all duration-700 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Insurance Quote */}
        <div className="mb-12 slide-in-right">
          <div className="relative bg-gradient-to-r from-zenith-grey-800/40 to-zenith-black/40 p-12 rounded-3xl border border-zenith-grey-600/30 glass-effect hover-glow">
            <div className="absolute top-8 left-8 text-6xl text-white/20 font-serif">"</div>
            <div className="relative z-10 text-center pl-4">
              <p className="text-zenith-grey-200 text-2xl md:text-3xl font-light leading-relaxed mb-6">
                QuantZen is an insurance policy for the entire digital asset stack delivered by empowering the applications and wallets already in use.
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-white to-zenith-grey-400 rounded-full mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Statistical Quote */}
        <div className="mb-16 fade-in-section">
          <div className="relative bg-gradient-to-br from-zenith-grey-800/60 to-zenith-black/60 border-l-4 border-white p-10 rounded-2xl glass-effect">
            <div className="absolute top-6 left-6 text-5xl text-white/30 font-bold">$8T</div>
            <div className="relative z-10 pl-16">
              <p className="text-zenith-grey-200 italic text-xl md:text-2xl leading-relaxed mb-4">
                By 2030, nearly $8 trillion in digital assets could be exposed to quantum attacks if post-quantum migration stalls.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 bg-white rounded-full"></div>
                <p className="text-white font-bold text-lg">Deloitte, 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center scale-in">
          <a
            href="https://www.quantzen.co"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-zenith-black rounded-2xl font-bold text-xl overflow-hidden transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-white/30"
          >
            <span className="relative z-10">Learn More About QuantZen</span>
            <ExternalLink size={24} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-zenith-grey-100 via-white to-zenith-grey-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
