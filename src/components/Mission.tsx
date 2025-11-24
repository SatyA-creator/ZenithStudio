import { Shield, Zap, FileCheck, Link } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Mission() {
  const focusAreas = [
    {
      icon: Shield,
      title: 'Quantum-Safe SDKs',
      description: 'For wallets, DEXs, custodians, and enterprises',
    },
    {
      icon: Zap,
      title: 'Zero-Disruption Integration',
      description: 'Overlaying existing protocols',
    },
    {
      icon: FileCheck,
      title: 'Regulatory Alignment',
      description: 'With NIST PQC standards and global compliance',
    },
    {
      icon: Link,
      title: 'Cross-Chain Readiness',
      description: 'Across EVM and non-EVM ecosystems',
    },
  ];

  return (
    <section
      id="mission"
      className="relative py-20 md:py-28 px-6 lg:px-10 overflow-hidden bg-gradient-to-b from-zenith-black via-zenith-grey-900 to-zenith-black"
    >
      {/* === Orbiting Background Animation === */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.15]">
        <div className="orbital-container">
          <div className="orbit orbit1"></div>
          <div className="orbit orbit2"></div>
          <div className="orbit orbit3"></div>
          <div className="particle particle1"></div>
          <div className="particle particle2"></div>
          <div className="particle particle3"></div>
        </div>
      </div>

      {/* === Section Content === */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="w-20 h-1 bg-gradient-to-r from-white/70 to-zenith-grey-400 mx-auto mb-6 rounded-full"></div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            Our Mission
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-zenith-grey-300 max-w-4xl mx-auto leading-relaxed">
            Making quantum-safe security effortless. Every wallet, application, and protocol deserves
            uncrackable protection without the complexity, governance challenges, or expense of chain-level migrations.
          </p>
        </motion.div>

        {/* === Focus Area Cards === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusAreas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-zenith-grey-800/50 to-zenith-black/60 
              p-8 rounded-2xl border border-white/10 hover:border-white/25 
              hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-all duration-500
              hover:-translate-y-2 hover:scale-[1.03] backdrop-blur-md"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-2xl">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-white/10 blur-lg opacity-0 group-hover:opacity-60 transition-all"></div>
                </div>
                <h3 className="text-xl font-semibold text-white">{area.title}</h3>
                <p className="text-zenith-grey-300 text-sm leading-relaxed">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtle Bottom Accent */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-4">
            <div className="w-6 md:w-8 h-1 bg-gradient-to-r from-transparent to-white/40 rounded-full"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full animate-ping"></div>
            <div className="w-6 md:w-8 h-1 bg-gradient-to-l from-transparent to-white/40 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* === CSS Animations === */}
      <style>{`
        .orbital-container {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 800px;
          height: 800px;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .orbit {
          position: absolute;
          border: 1px dashed rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          animation: rotateOrbit linear infinite;
        }

        .orbit1 {
          width: 600px;
          height: 600px;
          top: 100px;
          left: 100px;
          animation-duration: 40s;
        }

        .orbit2 {
          width: 450px;
          height: 450px;
          top: 175px;
          left: 175px;
          animation-duration: 60s;
          animation-direction: reverse;
        }

        .orbit3 {
          width: 300px;
          height: 300px;
          top: 250px;
          left: 250px;
          animation-duration: 80s;
        }

        .particle {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.5), transparent);
          box-shadow: 0 0 12px rgba(255,255,255,0.4);
          animation: orbitParticle linear infinite;
        }

        .particle1 {
          top: 50%;
          left: 50%;
          transform-origin: -300px 0;
          animation-duration: 20s;
        }

        .particle2 {
          top: 50%;
          left: 50%;
          transform-origin: -200px 0;
          animation-duration: 30s;
          animation-delay: 4s;
        }

        .particle3 {
          top: 50%;
          left: 50%;
          transform-origin: -100px 0;
          animation-duration: 25s;
          animation-delay: 8s;
        }

        @keyframes rotateOrbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orbitParticle {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
