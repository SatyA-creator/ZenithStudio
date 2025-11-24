import { Menu, X, Twitter, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About us', href: '#who-we-are' },
    { label: 'Services', href: '#specialties' },
    { label: 'Team', href: '#team' }
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300">
        <div className="bg-white/90 backdrop-blur-md rounded-full px-8 py-3 shadow-2xl border border-white/20">
          <div className="flex items-center justify-center space-x-8">
            {/* Logo */}
            <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="flex items-center group mr-4">
              <img 
                src="/logo.jpg" 
                alt="Zenith Studio Logo" 
                className="h-8 w-8 object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            {/* Navigation Items */}
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-gray-700 hover:text-black transition-all duration-300 font-medium py-2 px-3 rounded-full hover:bg-gray-100"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Get a Quote Button */}
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 font-small ml-4"
            >
              Join Us
            </a>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 ml-6">
              <a
                href="https://x.com/zenith__studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-all duration-300 p-2 rounded-full hover:bg-gray-100"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/zenithstudio009/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-all duration-300 p-2 rounded-full hover:bg-gray-100"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-zenith-black/95 backdrop-blur-md shadow-xl">
        <div className="flex justify-between items-center p-4">
          {/* Mobile Logo */}
          <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="flex items-center group">
            <img 
              src="/logo.jpg" 
              alt="Zenith Studio Logo" 
              className="h-8 w-8 object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
            />
            <span className="ml-3 text-white font-bold text-lg">Zenith Studio</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="text-white hover:text-zenith-grey-200 transition-colors duration-300 p-2 rounded-lg hover:bg-zenith-grey-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-zenith-black/95 backdrop-blur-md border-t border-zenith-grey-700">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="block text-zenith-grey-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-zenith-grey-800 text-lg"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleClick(e, '#contact')}
                className="block bg-white text-black text-center px-6 py-3 rounded-full hover:bg-gray-200 transition-all duration-300 font-medium mt-4"
              >
                Get a Quote
              </a>
              
              {/* Mobile Social Media Icons */}
              <div className="flex justify-center space-x-6 mt-6 pt-4 border-t border-zenith-grey-700">
                <a
                  href="https://twitter.com/zenithstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zenith-grey-300 hover:text-white transition-all duration-300 p-3 rounded-lg hover:bg-zenith-grey-800"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://linkedin.com/company/zenithstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zenith-grey-300 hover:text-white transition-all duration-300 p-3 rounded-lg hover:bg-zenith-grey-800"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
