import { motion } from "framer-motion";
import { Shield, Zap, Cpu } from "lucide-react";

export default function WhyNow() {
  return (
    <section className="relative overflow-hidden py-28 px-6 bg-gradient-to-b from-black via-zenith-grey-900 to-zenith-black text-white">
      {/* Background Glow Orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-500/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-400/10 blur-[140px] animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-r from-zenith-grey-400/20 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-white via-zenith-grey-200 to-white bg-clip-text text-transparent"
        >
          Why Zenith Now?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-zenith-grey-100 max-w-3xl mx-auto mb-20"
        >
          The Quantum Cliff is closer than people think.
        </motion.p>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            viewport={{ once: true }}
            className="relative p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 backdrop-blur-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500 group"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-br from-grey-500/40 to-cyan-400/40 p-3 rounded-2xl">
              <Zap className="w-10 h-10 text-white animate-pulse" />
            </div>
            <h3 className="text-4xl font-extrabold mb-4 mt-8">$2B+</h3>
            <p className="text-lg text-zenith-grey-200">
              Web3 security breaches already exceed <span className="font-semibold text-white">in losses in H1 2025 alone.</span>
            </p>
            <p className="text-sm mt-4 text-zenith-grey-400">Source: Chainalysis</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            className="relative p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 backdrop-blur-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500 group"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-br from-grey-400/40 to-indigo-400/40 p-3 rounded-2xl">
              <Shield className="w-10 h-10 text-white animate-float" />
            </div>
            <h3 className="text-3xl font-extrabold mb-4 mt-8">Quantum Threat</h3>
            <p className="text-lg text-zenith-grey-200">
              As quantum computing advances, traditional cryptography faces inevitable obsolescence.
            </p>
            <p className="text-sm mt-4 text-zenith-grey-400">Source: Industry Reports</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            viewport={{ once: true }}
            className="relative p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 backdrop-blur-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500 group"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-br from-grey-400/40 to-teal-400/40 p-3 rounded-2xl">
              <Cpu className="w-10 h-10 text-white animate-pulse" />
            </div>
            <h3 className="text-3xl font-extrabold mb-4 mt-8">The Time is Now</h3>
            <p className="text-lg text-zenith-grey-200">
              Enterprises, regulators, and developers need <span className="text-white font-semibold">ready-to-integrate solutions</span> not academic research.
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-zenith-grey-800/60 to-zenith-black/60 p-12 rounded-3xl border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.05)] backdrop-blur-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-10 animate-pulse"></div>
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 leading-relaxed">
            Zenith delivers exactly that:{" "}
            <span className="text-white font-bold bg-gradient-to-r from-white to-zenith-grey-200 bg-clip-text text-transparent">
              production-ready PQC SDKs.
            </span>
          </h3>
          <p className="text-lg text-zenith-grey-200 max-w-3xl mx-auto">
            Designed for real-world integration and future-proof Web3 ecosystems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
