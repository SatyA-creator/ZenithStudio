import { Sparkles, Zap, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, delay: number}>>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Generate floating particles
    const particleCount = window.innerWidth < 768 ? 20 : 50;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      });
    };
    
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.section-reveal, .section-reveal-left, .section-reveal-right, .section-reveal-scale');
    animatedElements.forEach((el) => observer.observe(el));

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="hero" className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-zenith-black via-zenith-grey-900 to-zenith-grey-800 min-h-screen pt-20 md:pt-24 lg:pt-0 w-full max-w-full">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5 md:opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 8px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 8px)
            `,
            backgroundSize: '80px 80px',
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
          }}
        />
      </div>

      {/* Floating Particles - Reduced for mobile */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-white rounded-full opacity-10 md:opacity-20 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size * (isMobile ? 0.5 : 1)}px`,
              height: `${particle.size * (isMobile ? 0.5 : 1)}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Dynamic Spotlight Effect */}
      <div
        className="absolute inset-0 opacity-20 md:opacity-30"
        style={{
          background: `radial-gradient(circle 300px at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          transition: 'background 0.3s ease'
        }}
      />

      {/* Animated Orbs - Responsive sizing */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-5 md:top-20 md:left-20 w-16 h-16 md:w-32 md:h-32 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-5 md:bottom-20 md:right-20 w-24 h-24 md:w-48 md:h-48 bg-gradient-to-l from-white/3 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-2 md:left-10 w-12 h-12 md:w-24 md:h-24 bg-gradient-to-t from-white/4 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Animated Logo with Effects - Positioned in left corner - Mobile Responsive */}
      <div className="absolute top-4 left-4 md:top-8 lg:top-12 md:left-8 lg:left-14 z-20 animate-scale-in">
        <div className="relative group">
          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-2xl md:rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110"></div>
          
          {/* Logo container */}
          <div className="relative bg-gradient-to-br from-zenith-grey-800 to-zenith-black p-2 md:p-3 lg:p-4 rounded-xl md:rounded-2xl lg:rounded-3xl border border-white/10 shadow-2xl">
            <img 
              src="/logo.jpg" 
              alt="Zenith Studio Logo" 
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 object-contain rounded-lg md:rounded-xl lg:rounded-2xl animate-float"
            />
          </div>

          {/* Sparkle icon */}
          <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white animate-pulse" />
          </div>
        </div>
      </div>


      {/* Main Content - Two Column Layout - Mobile Responsive */}
      <div className="relative z-10 px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center min-h-screen py-8 md:py-12 lg:py-0">
          
          {/* Left Side - Content */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1">
            {/* Main Title with Staggered Animation - Mobile Responsive */}
            <div className="stagger-animation">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-wide hero-text relative">
                <span className="block animated-gradient animate-fade-in-up cursor-default relative overflow-hidden">
                  Zenith Studio.
                  {/* Floating gradient orbs that appear on hover - hidden on mobile and tablet */}
                  <div className="hidden lg:block gradient-orb w-16 h-16 xl:w-24 xl:h-24 bg-gradient-to-r from-pink-500 to-violet-500 -top-4 -left-2 xl:-top-6 xl:-left-3"></div>
                  <div className="hidden lg:block gradient-orb w-12 h-12 xl:w-20 xl:h-20 bg-gradient-to-r from-blue-500 to-cyan-500 -bottom-2 -right-1 xl:-bottom-3 xl:-right-2"></div>
                  <div className="hidden lg:block gradient-orb w-10 h-10 xl:w-16 xl:h-16 bg-gradient-to-r from-green-400 to-emerald-500 top-1/2 -left-3 xl:-left-4"></div>
                </span>
                <span className="block text-white animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  Future Proofing.
                </span>
                <span className="block text-white animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  Digital Economies
!
                </span>
              </h1>
            </div>

            {/* Animated Tagline - Mobile Responsive */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6 stagger-animation">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-zenith-grey-200 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                ZENITH STUDIO
              </p>
              <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center space-y-3 sm:space-y-0 sm:space-x-6 md:space-x-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  <span className="text-zenith-grey-300 text-xs sm:text-sm md:text-base">Innovation</span>
                </div>
                <div className="hidden sm:block w-1 h-4 md:h-6 bg-white/30"></div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  <span className="text-zenith-grey-300 text-xs sm:text-sm md:text-base">Excellence</span>
                </div>
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zenith-grey-400 max-w-2xl lg:max-w-none leading-relaxed animate-fade-in-up px-2 sm:px-4 lg:px-0" style={{ animationDelay: '1s' }}>
                Crafting exceptional digital experiences with cutting-edge technology and creative excellence
              </p>
            </div>

            {/* Enhanced CTA Buttons - Mobile Responsive */}
            {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center lg:justify-start items-center stagger-animation px-2 sm:px-4 lg:px-0">
              <a
                href="https://www.quantzen.co"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 bg-white text-zenith-black rounded-xl md:rounded-2xl font-bold text-sm sm:text-base md:text-lg overflow-hidden transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-white/30 animate-fade-in-up"
                style={{ animationDelay: '1.2s' }}
              >
                <span className="relative z-10 flex items-center justify-center space-x-2 md:space-x-3">
                  <span>Explore QuantZen</span>
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-zenith-grey-100 via-white to-zenith-grey-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </a>
              
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#contact');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="group relative w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 bg-transparent border-2 border-white/30 text-white rounded-xl md:rounded-2xl font-bold text-sm sm:text-base md:text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-500 glass-effect animate-fade-in-up"
                style={{ animationDelay: '1.4s' }}
              >
                <span className="relative z-10 flex items-center justify-center space-x-2 md:space-x-3">
                  <span>Partner With Us</span>
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl md:rounded-2xl"></div>
              </a>
            </div> */}
          </div>

          {/* Right Side - GIF - Mobile Responsive */}
          <div className="flex justify-center lg:justify-end items-center animate-fade-in-up order-1 lg:order-2" style={{ animationDelay: '0.8s' }}>
            <div className="relative group">
              {/* Animated border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 rounded-2xl md:rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute inset-0.5 bg-gradient-to-br from-zenith-black to-zenith-grey-900 rounded-2xl md:rounded-3xl"></div>
              
              {/* Video Container - Mobile Responsive */}
               {/* <div className="relative p-3 md:p-4 bg-gradient-to-br from-zenith-grey-800/50 to-zenith-black/50 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl">
                <video
                  src="/bg_video.mp4"  // <-- Replace with your actual video path
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[24rem] lg:h-[24rem] xl:w-[28rem] xl:h-[28rem] object-cover rounded-2xl shadow-lg"
                />
                <Sparkles className="absolute -top-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 text-white animate-pulse" />
              </div> */}

{/* Image Container - Mobile Responsive */}
<div className="relative p-3 md:p-4 bg-gradient-to-br from-zenith-grey-800/50 to-zenith-black/50 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl">
  <img
    src="/panther.jpg" // <-- Replace with your actual image path
    alt="Quantum Security Illustration"
    className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[24rem] lg:h-[24rem] xl:w-[28rem] xl:h-[28rem] object-cover rounded-2xl shadow-lg"
  />
  <Sparkles className="absolute -top-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 text-white animate-pulse" />
</div>



              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Corner Decorations - Mobile Responsive */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 border-l-2 border-t-2 border-white/10 rounded-tl-2xl md:rounded-tl-3xl"></div>
      <div className="absolute top-4 right-4 md:top-8 md:right-8 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 border-r-2 border-t-2 border-white/10 rounded-tr-2xl md:rounded-tr-3xl"></div>
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 border-l-2 border-b-2 border-white/10 rounded-bl-2xl md:rounded-bl-3xl"></div>
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 border-r-2 border-b-2 border-white/10 rounded-br-2xl md:rounded-br-3xl"></div>
    </section>
  );
}
