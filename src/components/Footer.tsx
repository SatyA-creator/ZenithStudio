import { useState } from 'react';
import { ExternalLink, Mail, MapPin, Phone, X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative max-w-4xl mx-4 max-h-[90vh] overflow-y-auto bg-zenith-grey-900 rounded-2xl border border-zenith-grey-600 shadow-2xl">
        <div className="sticky top-0 bg-zenith-grey-900 border-b border-zenith-grey-600 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-zenith-grey-400 hover:text-white transition-colors duration-200 p-2 hover:bg-zenith-grey-800 rounded-lg"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6 text-zenith-grey-200 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
         { label: 'Home', href: '#home' },
        { label: 'About Us', href: '#who-we-are' }
       
      
      ]
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Services', href: '#services' },
        { label: 'Team', href: '#team' }
      ]
    },
    // {
    //   title: 'Resources',
    //   links: [
    //     { label: 'Documentation', href: 'https://www.quantzen.co', external: true },
    //     { label: 'API Reference', href: 'https://www.quantzen.co', external: true },
    //     { label: 'Developer Tools', href: 'https://www.quantzen.co', external: true },
    //     { label: 'Roadmap', href: '#roadmap' }
    //   ]
    // }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <footer className="relative bg-gradient-to-b from-zenith-grey-800 to-zenith-black text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-white/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/logo.jpg" 
                  alt="Zenith Studio Logo" 
                  className="h-12 w-12 object-contain rounded-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">Zenith Studio</h3>
                  <p className="text-zenith-grey-400 text-sm">Quantum-Safe Innovation</p>
                </div>
              </div>
              <p className="text-zenith-grey-300 mb-6 leading-relaxed max-w-md">
                Pioneering post-quantum cryptography solutions for Web3 and enterprise security. 
                Building the future of digital trust, one quantum-safe algorithm at a time.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-zenith-grey-400">
                  <Mail size={16} />
                  <span className="text-sm">hello@zenithstudio.com</span>
                </div>
                <div className="flex items-center space-x-3 text-zenith-grey-400">
                  <Phone size={16} />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-zenith-grey-400">
                  <MapPin size={16} />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        onClick={(e) => !link.external && handleLinkClick(e, link.href)}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="text-zenith-grey-400 hover:text-white transition-colors duration-300 text-sm flex items-center space-x-2 group"
                      >
                        <span>{link.label}</span>
                        {link.external && (
                          <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-zenith-grey-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-zenith-grey-400 text-sm text-center md:text-left">
                © {currentYear} Zenith Studio. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center md:justify-end items-center space-x-6 text-sm">
                <button
                  onClick={() => setShowPrivacyModal(true)}
                  className="text-zenith-grey-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => setShowTermsModal(true)}
                  className="text-zenith-grey-400 hover:text-white transition-colors duration-300"
                >
                  Terms of Use
                </button>
                <a
                  href="https://www.quantzen.live/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zenith-grey-400 hover:text-white transition-colors duration-300 flex items-center space-x-1"
                >
                  <span>QuantZen</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
        title="Privacy Policy"
      >
        <div className="space-y-6">
          <p className="text-sm text-zenith-grey-400">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>
          
          <section>
            <h3 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h3>
            <p className="mb-4">
              Zenith Studio ("we," "our," or "us") collects information you provide directly to us, 
              such as when you create an account, use our services, or contact us for support.
            </p>
            <ul className="list-disc list-inside space-y-2 text-zenith-grey-300">
              <li>Personal information (name, email address, phone number)</li>
              <li>Company information and technical requirements</li>
              <li>Usage data and analytics</li>
              <li>Communications and support interactions</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h3>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 text-zenith-grey-300">
              <li>Provide, maintain, and improve our quantum-safe cryptography services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Develop new products and services</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">3. Information Security</h3>
            <p>
              We implement industry-leading security measures, including post-quantum cryptography, 
              to protect your personal information. Our security practices are designed to be 
              quantum-resistant and future-proof against emerging threats.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">4. Data Sharing</h3>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this privacy policy or as required by law.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">5. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@zenithstudio.com" className="text-blue-400 hover:text-blue-300">
                privacy@zenithstudio.com
              </a>
            </p>
          </section>
        </div>
      </Modal>

      {/* Terms of Use Modal */}
      <Modal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
        title="Terms of Use"
      >
        <div className="space-y-6">
          <p className="text-sm text-zenith-grey-400">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h3>
            <p>
              By accessing and using Zenith Studio's services, you accept and agree to be bound by 
              the terms and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">2. Service Description</h3>
            <p className="mb-4">
              Zenith Studio provides quantum-safe cryptography solutions, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zenith-grey-300">
              <li>QuantZen SDK for post-quantum cryptography</li>
              <li>Dual-signature security implementation</li>
              <li>Enterprise quantum-safe consulting</li>
              <li>Web3 and blockchain security solutions</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">3. User Responsibilities</h3>
            <p className="mb-4">Users of our services agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-zenith-grey-300">
              <li>Use the services only for lawful purposes</li>
              <li>Not attempt to breach or circumvent security measures</li>
              <li>Maintain the confidentiality of any access credentials</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">4. Intellectual Property</h3>
            <p>
              All content, features, and functionality of our services are owned by Zenith Studio 
              and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">5. Limitation of Liability</h3>
            <p>
              In no event shall Zenith Studio be liable for any indirect, incidental, special, 
              consequential, or punitive damages, including without limitation, loss of profits, 
              data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">6. Quantum-Safe Disclaimers</h3>
            <p>
              While our post-quantum cryptography solutions are designed to resist quantum attacks 
              based on current understanding and NIST standards, the field of quantum computing is 
              rapidly evolving. We continuously update our algorithms and implementations as new 
              research emerges.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">7. Contact Information</h3>
            <p>
              For questions about these Terms of Use, please contact us at{' '}
              <a href="mailto:legal@zenithstudio.com" className="text-blue-400 hover:text-blue-300">
                legal@zenithstudio.com
              </a>
            </p>
          </section>
        </div>
      </Modal>
    </>
  );
}
