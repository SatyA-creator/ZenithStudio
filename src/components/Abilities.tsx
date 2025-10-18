import { motion } from "framer-motion";
import { CheckCircle, Shield, Code2, Network, Cpu } from "lucide-react";

export default function Abilities() {
  const abilities = [
    {
      icon: Shield,
      text: "R&D in Cryptography → From research-grade concepts to production SDKs",
    },
    {
      icon: Network,
      text: "Cross-Chain Engineering → Ethereum, Polygon, BNB, Solana, Sui, Aptos, and beyond",
    },
    {
      icon: Cpu,
      text: "Secure Key Management → High-entropy RNG, secure enclaves, comprehensive audit trails",
    },
    {
      icon: Code2,
      text: "Enterprise-Grade APIs → Built for Web3 and Web2 (banking, fintech, custodians)",
    },
    {
      icon: CheckCircle,
      text: "Developer Ecosystem Enablement → Documentation, tooling, verifier modules",
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-zenith-black via-zenith-grey-900 to-black">
      {/* Background Floating Graphics */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-zenith-purple/20 rounded-full blur-3xl top-0 left-10"
          animate={{
            y: [0, 20, 0],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-zenith-blue/20 rounded-full blur-3xl bottom-0 right-10"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Abilities
        </motion.h2>
        <motion.p
          className="text-zenith-grey-400 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          From cryptographic breakthroughs to production-ready SDKs — we bring
          research, engineering, and innovation together.
        </motion.p>
      </div>

      {/* Abilities Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {abilities.map((ability, index) => {
          const Icon = ability.icon;
          return (
            <motion.div
              key={index}
              className={`flex items-start gap-5 p-6 rounded-2xl bg-gradient-to-r from-zenith-grey-800/40 to-zenith-grey-900/40 border border-zenith-grey-800 shadow-lg hover:shadow-zenith-blue/30 backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 group ${index === abilities.length - 1 && abilities.length % 2 !== 0 ? 'sm:col-span-2 sm:max-w-xl sm:mx-auto' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex-shrink-0">
                <motion.div
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-zenith-purple/20 group-hover:bg-zenith-purple/40 transition-all duration-300"
                  whileHover={{ rotate: 10 }}
                >
                  <Icon className="w-6 h-6 text-zenith-purple group-hover:text-white transition-colors duration-300" />
                </motion.div>
              </div>
              <p className="text-zenith-grey-300 group-hover:text-white text-lg leading-relaxed transition-colors duration-300">
                {ability.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
