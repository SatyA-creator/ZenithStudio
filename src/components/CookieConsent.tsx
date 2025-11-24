import { useState, useEffect } from 'react';
import { Cookie, X, Check, Settings } from 'lucide-react';

interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already given consent
    const savedConsent = localStorage.getItem('zenith-cookie-consent');
    if (!savedConsent) {
      // Delay showing banner for better UX
      setTimeout(() => setShowBanner(true), 2000);
    }
  }, []);

  const handleAcceptAll = () => {
    const allConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setConsent(allConsent);
    saveCookieConsent(allConsent);
    setShowBanner(false);
  };

  const handleSaveSettings = () => {
    saveCookieConsent(consent);
    setShowBanner(false);
    setShowSettings(false);
  };

  const saveCookieConsent = (consentData: CookieConsent) => {
    localStorage.setItem('zenith-cookie-consent', JSON.stringify({
      ...consentData,
      timestamp: new Date().toISOString(),
    }));
    
    // Here you would typically integrate with analytics services
    if (consentData.analytics) {
      console.log('Analytics cookies enabled');
      // Initialize Google Analytics, etc.
    }
    
    if (consentData.marketing) {
      console.log('Marketing cookies enabled');
      // Initialize marketing tracking
    }
  };

  const toggleConsent = (type: keyof CookieConsent) => {
    if (type === 'necessary') return; // Necessary cookies cannot be disabled
    
    setConsent(prev => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-zenith-grey-900/95 to-zenith-black/95 backdrop-blur-md border-t border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
            
            {/* Icon and Text */}
            <div className="flex items-start gap-3 flex-1">
              <div className="flex-shrink-0 mt-1">
                <Cookie className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-sm sm:text-base mb-1">
                  We value your privacy
                </h3>
                <p className="text-zenith-grey-300 text-xs sm:text-sm leading-relaxed">
                  We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic. 
                  By clicking "Accept All", you consent to our use of cookies. You can manage your preferences anytime.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 lg:gap-3 w-full lg:w-auto lg:flex-shrink-0">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-transparent border border-white/20 hover:border-white/40 text-white rounded-lg font-medium text-sm transition-all duration-300 hover:bg-white/5"
              >
                <Settings className="w-4 h-4" />
                <span>Customize</span>
              </button>
              
              <button
                onClick={handleAcceptAll}
                className="flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-zenith-black rounded-lg font-bold text-sm hover:bg-zenith-grey-100 transition-all duration-300 shadow-lg hover:shadow-white/20"
              >
                <Check className="w-4 h-4" />
                <span>Accept All</span>
              </button>
            </div>
          </div>

          {/* Cookie Settings Panel */}
          {showSettings && (
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="space-y-4">
                <h4 className="text-white font-semibold text-base mb-4">Cookie Preferences</h4>
                
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h5 className="text-white font-medium text-sm">Necessary Cookies</h5>
                      <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs font-medium">
                        Always Active
                      </span>
                    </div>
                    <p className="text-zenith-grey-400 text-xs leading-relaxed">
                      Essential cookies required for basic website functionality, security, and user authentication.
                    </p>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h5 className="text-white font-medium text-sm mb-1">Analytics Cookies</h5>
                    <p className="text-zenith-grey-400 text-xs leading-relaxed">
                      Help us understand how visitors interact with our website by collecting anonymous information.
                    </p>
                  </div>
                  <button
                    onClick={() => toggleConsent('analytics')}
                    className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                      consent.analytics 
                        ? 'bg-white' 
                        : 'bg-zenith-grey-600'
                    }`}
                  >
                    <div className={`absolute top-0.5 w-5 h-5 rounded-full transition-all duration-300 ${
                      consent.analytics 
                        ? 'left-6 bg-zenith-black' 
                        : 'left-0.5 bg-white'
                    }`} />
                  </button>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h5 className="text-white font-medium text-sm mb-1">Marketing Cookies</h5>
                    <p className="text-zenith-grey-400 text-xs leading-relaxed">
                      Used to track visitors across websites to display relevant ads and marketing campaigns.
                    </p>
                  </div>
                  <button
                    onClick={() => toggleConsent('marketing')}
                    className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                      consent.marketing 
                        ? 'bg-white' 
                        : 'bg-zenith-grey-600'
                    }`}
                  >
                    <div className={`absolute top-0.5 w-5 h-5 rounded-full transition-all duration-300 ${
                      consent.marketing 
                        ? 'left-6 bg-zenith-black' 
                        : 'left-0.5 bg-white'
                    }`} />
                  </button>
                </div>

                {/* Save Settings Button */}
                <div className="pt-4 flex justify-end">
                  <button
                    onClick={handleSaveSettings}
                    className="px-6 py-2.5 bg-white text-zenith-black rounded-lg font-bold text-sm hover:bg-zenith-grey-100 transition-all duration-300 shadow-lg"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Backdrop when settings are open */}
      {showSettings && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setShowSettings(false)}
        />
      )}
    </>
  );
}