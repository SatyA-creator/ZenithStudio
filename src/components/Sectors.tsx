import { Globe, Building2, Gamepad2, Building } from 'lucide-react';

export default function Sectors() {
  const sectors = [
    {
      icon: Globe,
      title: 'Web3 & DeFi',
      description: 'Wallets, custodians, exchanges, decentralized applications'
    },
    {
      icon: Building2,
      title: 'Banking & Fintech',
      description: 'Secure payments, custody solutions, regulatory compliance'
    },
    {
      icon: Gamepad2,
      title: 'Gaming & AI Applications',
      description: 'Protecting in-game assets and AI-driven platforms'
    },
    {
      icon: Building,
      title: 'Critical Infrastructure',
      description: 'Future-proofing systems vulnerable to cyber warfare'
    }
  ];

  return (
    <section className="py-20 px-4 sm:py-24 sm:px-6 section-gradient-1 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-float-medium"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float-fast"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16 section-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 section-reveal-scale">
            Sectors We Serve
          </h2>
          <p className="text-zenith-grey-400 sm:text-lg md:text-xl max-w-2xl mx-auto">
            We provide cutting-edge post-quantum cryptography solutions across multiple industries.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 bg-zenith-grey-900/60 backdrop-blur-md rounded-3xl border border-white/10 hover:border-white/30 transition-transform duration-500 hover:-translate-y-2 shadow-lg hover:shadow-white/20"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center mb-4">
                <sector.icon className="w-14 h-14 sm:w-16 sm:h-16 text-zenith-grey-300 group-hover:text-white transition-transform duration-300 transform group-hover:scale-110" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-zenith-grey-100 transition-colors duration-300 text-center">
                {sector.title}
              </h3>
              <p className="text-zenith-grey-400 sm:text-base text-center group-hover:text-zenith-grey-300 transition-colors duration-300 leading-relaxed">
                {sector.description}
              </p>

              {/* Glow overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
