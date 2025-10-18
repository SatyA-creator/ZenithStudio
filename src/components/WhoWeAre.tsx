import { Shield, Lock, Globe, Sparkles, Atom } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhoWeAre() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: Shield,
      title: "Quantum-Safe",
      description: "Post-quantum cryptography protection"
    },
    {
      icon: Globe,
      title: "Web3 Ready",
      description: "Built for decentralized ecosystems"
    },
    {
      icon: Lock,
      title: "Enterprise Grade",
      description: "Trusted by global enterprises"
    }
  ];

  return (
    <section id="who-we-are" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-zenith-black via-zenith-grey-900 to-zenith-grey-800">
      
      {/* Enhanced Quantum Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Floating Quantum Orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.3, 0.7, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-l from-cyan-500/15 to-teal-500/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.2, 0.6, 0.2],
            x: [0, -40, 0],
            y: [0, 25, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <motion.div
          className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-violet-500/20 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.4, 1], 
            opacity: [0.4, 0.8, 0.4],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 md:mb-24"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            animate={{ rotateY: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <Atom className="w-8 h-8 md:w-10 md:h-10 text-white" />
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gradient leading-tight"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Who We Are
            </motion.h2>
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white animate-pulse" />
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-zenith-grey-200 max-w-4xl mx-auto font-light leading-relaxed"
            variants={itemVariants}
          >
            Pioneers in quantum-safe technology for the Web3 era
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
          {/* Left - Enhanced Visual */}
          <motion.div
            className="order-2 lg:order-1 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative group">
              {/* Central Shield with Enhanced Animations */}
              <motion.div
                className="relative z-20 p-8 md:p-12 bg-gradient-to-br from-zenith-grey-800/50 to-zenith-black/50 rounded-full backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(255,255,255,0.1)',
                    '0 0 40px rgba(255,255,255,0.3)',
                    '0 0 20px rgba(255,255,255,0.1)'
                  ]
                }}
                transition={{ 
                  boxShadow: { duration: 3, repeat: Infinity },
                  scale: { type: "spring", stiffness: 300 }
                }}
              >
                <Shield className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 text-white relative z-10" strokeWidth={1.5} />
              </motion.div>

              {/* Orbiting Elements */}
              <motion.div
                className="absolute inset-0 border-2 border-white/10 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ width: '120%', height: '120%', top: '-10%', left: '-10%' }}
              />
              
              <motion.div
                className="absolute inset-0 border border-white/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ width: '140%', height: '140%', top: '-20%', left: '-20%' }}
              />

              {/* Quantum Nodes */}
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    originX: 0.5,
                    originY: 0.5,
                  }}
                  animate={{
                    rotate: 360,
                    x: Math.cos((i * Math.PI * 2) / 6) * 100,
                    y: Math.sin((i * Math.PI * 2) / 6) * 100,
                  }}
                  transition={{
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    x: { duration: 0 },
                    y: { duration: 0 }
                  }}
                />
              ))}

              {/* Pulse Ring */}
              <motion.div
                className="absolute inset-0 border-4 border-white/30 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 0.3, 0.8]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </motion.div>

          {/* Right - Enhanced Content */}
          <motion.div 
            className="order-1 lg:order-2 space-y-8"
            variants={itemVariants}
          >
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <motion.p 
                className="text-lg md:text-xl text-zenith-grey-200 leading-relaxed"
                variants={itemVariants}
              >
                <motion.span 
                  className="font-semibold text-white"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Zenith Studio
                </motion.span>{" "}
                operates at the convergence of Web3 infrastructure, quantum-safe cryptography, 
                and applied research and development. We engineer technology designed to protect 
                the digital economy from current cyber threats and future quantum computing risks.
              </motion.p>
              
              <motion.p 
                className="text-base md:text-lg text-zenith-grey-300 leading-relaxed"
                variants={itemVariants}
              >
                Our solutions are built for seamless integration, regulatory compliance, 
                and trusted by Web3 innovators and global enterprises alike.
              </motion.p>
            </motion.div>

            {/* Feature Cards */}
            <motion.div 
              className="grid sm:grid-cols-3 gap-4 md:gap-6"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group p-4 md:p-6 bg-gradient-to-br from-zenith-grey-800/40 to-zenith-black/40 rounded-2xl border border-white/10 hover:border-white/30 backdrop-blur-sm"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(255,255,255,0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300"
                    animate={{ 
                      boxShadow: [
                        '0 0 0px rgba(255,255,255,0)',
                        '0 0 20px rgba(255,255,255,0.2)',
                        '0 0 0px rgba(255,255,255,0)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </motion.div>
                  <h4 className="font-bold text-white text-sm md:text-base mb-2">{feature.title}</h4>
                  <p className="text-zenith-grey-400 text-xs md:text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Quote Section */}
        <motion.div
          className="max-w-5xl mx-auto"
          variants={itemVariants}
        >
          <motion.div
            className="relative p-8 md:p-12 bg-gradient-to-br from-zenith-grey-800/30 to-zenith-black/30 rounded-3xl border border-white/20 backdrop-blur-sm overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Background Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10">
              <motion.div 
                className="text-6xl md:text-8xl text-white/10 font-bold mb-4"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                "
              </motion.div>
              
              <motion.p 
                className="text-lg md:text-xl lg:text-2xl text-zenith-grey-200 italic leading-relaxed mb-6 pl-4 md:pl-8"
                variants={itemVariants}
              >
                The arrival of large-scale quantum computers will break the cryptography 
                underpinning all digital systems today potentially within a decade.
              </motion.p>
              
              <motion.div 
                className="flex items-center space-x-4 pl-4 md:pl-8"
                variants={itemVariants}
              >
                <motion.div 
                  className="w-16 h-1 bg-gradient-to-r from-white to-zenith-grey-400 rounded-full"
                  animate={{ scaleX: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-white font-bold text-base md:text-lg">World Economic Forum, 2024</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}
