import { useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import WhoWeAre from './components/WhoWeAre';
import Mission from './components/Mission';
import Specialties from './components/Specialties';
import Abilities from './components/Abilities';
import QuantZen from './components/QuantZen';
import Sectors from './components/Sectors';
import Team from './components/Team';
import Roadmap from './components/Roadmap';
import WhyNow from './components/WhyNow';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add different animation classes based on data attributes
          const animationType = entry.target.getAttribute('data-animation') || 'fade-in';
          entry.target.classList.add('visible');
          
          if (animationType === 'stagger') {
            entry.target.classList.add('stagger-animation');
          }
        }
      });
    }, observerOptions);

    // Observe all sections and elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-section, .slide-in-left, .slide-in-right, .scale-in, section');
    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    // Parallax effect for hero section
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        const speed = parseFloat(htmlElement.getAttribute('data-speed') || '0.5');
        const yPos = -(scrolled * speed);
        htmlElement.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zenith-black via-zenith-grey-900 to-zenith-grey-800 text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <WhoWeAre />
      <Mission />
      <Specialties />
      <Abilities />
      <QuantZen />
      <Sectors />
      <Team />
      <Roadmap />
      <WhyNow />
      <ContactForm />
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;
