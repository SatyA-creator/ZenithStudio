import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', company: '', message: '' });

    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zenith-grey-800 to-zenith-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 fade-in-section">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4 md:mb-6">Join the Movement</h2>
          <p className="text-lg md:text-xl text-zenith-grey-200 max-w-3xl mx-auto leading-relaxed px-4">
            Zenith Studio isn't just building tools. We're building the infrastructure of trust for the quantum era.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1.7fr] gap-8 md:gap-12 items-start">
          {/* Left Info Block */}
          <div className="slide-in-left">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">Get in Touch</h3>
            <p className="text-zenith-grey-300 mb-6 md:mb-8 leading-relaxed">
              Whether you're interested in integrating QuantZen, exploring partnership opportunities,
              or learning more about our quantum-safe solutions, we'd love to hear from you.
            </p>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0" />
                <p className="text-zenith-grey-300 text-sm md:text-base">Enterprise-grade security solutions</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0" />
                <p className="text-zenith-grey-300 text-sm md:text-base">Developer-friendly integration</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0" />
                <p className="text-zenith-grey-300 text-sm md:text-base">Strategic partnerships</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form onSubmit={handleSubmit} className="slide-in-right glass-effect bg-zenith-grey-800/50 p-6 md:p-8 rounded-2xl border border-zenith-grey-600 card-hover w-full md:w-full">
            <div className="space-y-4 md:space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white mb-2 font-medium text-sm md:text-base">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-3 md:py-3 bg-zenith-black/50 border border-zenith-grey-600 rounded-xl text-white focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-300 placeholder-zenith-grey-400 text-sm md:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2 font-medium text-sm md:text-base">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-3 md:py-3 bg-zenith-black/50 border border-zenith-grey-600 rounded-xl text-white focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-300 placeholder-zenith-grey-400 text-sm md:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-white mb-2 font-medium text-sm md:text-base">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-3 bg-zenith-black/50 border border-zenith-grey-600 rounded-xl text-white focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-300 placeholder-zenith-grey-400 text-sm md:text-base"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2 font-medium text-sm md:text-base">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3} // reduced rows to make form shorter
                  className="w-full px-3 py-3 bg-zenith-black/50 border border-zenith-grey-600 rounded-xl text-white focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-300 resize-none placeholder-zenith-grey-400 text-sm md:text-base"
                  placeholder="Tell us about your project or inquiry"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 md:py-4 bg-white text-zenith-black rounded-xl font-bold text-lg hover:bg-zenith-grey-100 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-white/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={20} />
              </button>

              {submitStatus === 'success' && (
                <p className="text-white text-center font-medium">Message sent successfully!</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
