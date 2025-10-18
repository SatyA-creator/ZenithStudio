import { Lock, Layers, CheckCircle, Code, Sparkles } from 'lucide-react';

export default function Specialties() {
  const specialties = [
    {
      icon: Lock,
      title: 'Quantum-Safe Cryptography',
      description: 'Implementation of NIST-approved PQC algorithms including Dilithium and Kyber.'
    },
    {
      icon: Layers,
      title: 'Dual-Signature Security Layer™',
      description: 'ECDSA + PQC combined for maximum protection without compatibility disruption.'
    },
    {
      icon: CheckCircle,
      title: 'Audit & Compliance Ready',
      description: 'Engineered for FIPS 140-3, CNSA 2.0, and future regulatory standards.'
    },
    {
      icon: Code,
      title: 'Integration Simplicity',
      description: 'SDKs and APIs requiring zero code changes to existing infrastructure.'
    },
    {
      icon: Sparkles,
      title: 'Future-Proof Innovation',
      description: 'Mitigating current exploits while preparing for quantum computing threats.'
    }
  ];

  return (
    <section id="specialties" className="py-24 px-4 section-gradient-3 relative overflow-hidden">
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl opacity-30 float-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl opacity-40 float-medium" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-r from-green-500/5 to-transparent rounded-full blur-2xl opacity-30 float-fast" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 section-reveal">
          <div className="inline-flex items-center space-x-2 mb-6 section-reveal-scale">
            <Sparkles className="w-6 h-6 text-white float-fast glow-white" />
            <span className="text-zenith-grey-400 font-medium tracking-wider uppercase">What We Excel At</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gradient mb-8 leading-tight section-reveal-scale">Our Specialties</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-zenith-grey-400 rounded-full mx-auto glow-white"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-zenith-grey-800/80 to-zenith-black/80 p-10 rounded-3xl border border-zenith-grey-600/50 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 glass-effect section-reveal-left glow-purple ${index === specialties.length - 1 && specialties.length % 2 !== 0 ? 'md:col-span-2 md:max-w-lg md:mx-auto' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl md:rounded-3xl"></div>
              
              {/* Animated Icon Container */}
              <div className="relative mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-white/15 to-white/5 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:rotate-6">
                  <specialty.icon className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-zenith-grey-100 transition-colors duration-300" />
                </div>
                {/* Floating particles around icon */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 group-hover:text-zenith-grey-100 transition-colors duration-300">
                {specialty.title}
              </h3>
              <p className="text-zenith-grey-300 text-base md:text-lg leading-relaxed group-hover:text-zenith-grey-200 transition-colors duration-300">
                {specialty.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-white to-zenith-grey-400 group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

        <div className="slide-in-right">
          <div className="relative bg-gradient-to-r from-zenith-grey-800/60 to-zenith-black/60 border-l-4 border-white p-6 md:p-10 rounded-2xl glass-effect hover-glow">
            {/* Quote decoration */}
            <div className="absolute top-4 md:top-6 left-4 md:left-6 text-4xl md:text-6xl text-white/20 font-serif">"</div>
            
            <div className="relative z-10 pl-6 md:pl-8">
              <p className="text-zenith-grey-200 italic text-lg md:text-xl lg:text-2xl leading-relaxed mb-4 md:mb-6">
                Most of today's public-key encryption will be obsolete by 2035. Migration to post-quantum cryptography must begin now.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-8 md:w-12 h-1 bg-white rounded-full"></div>
                <p className="text-white font-bold text-base md:text-lg">NIST, PQC Roadmap</p>
              </div>
            </div>

            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 30% 70%, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
