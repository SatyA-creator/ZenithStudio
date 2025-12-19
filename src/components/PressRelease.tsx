import { Newspaper, ExternalLink, Calendar } from 'lucide-react';

export default function PressRelease() {
  return (
    <section id="press" className="relative py-24 bg-gradient-to-br from-zenith-black via-zenith-grey-900 to-zenith-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-section">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Newspaper className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
              In The News
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Press Release
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay updated with our latest announcements and media coverage
          </p>
        </div>

        {/* Press Release Card */}
        <div className="max-w-5xl mx-auto">
          <div className="group relative bg-gradient-to-br from-zenith-grey-800/50 to-zenith-grey-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
            {/* Animated Border Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-[500px] md:h-[650px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
                <img
                  src="/press-1.png"
                  alt="Press Release"
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zenith-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-zenith-black/80"></div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12 flex flex-col justify-center min-h-[500px] md:min-h-[650px]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                    <span className="text-blue-400 text-sm font-semibold">Latest News</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  Zenith Studio Announces Revolutionary Quantum-Safe Solutions
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Zenith Studio is proud to announce groundbreaking developments in quantum-safe blockchain technology, 
                  setting new standards for security and innovation in the Web3 ecosystem.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300">#Blockchain</span>
                  <span className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300">#QuantumSafe</span>
                  <span className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300">#Web3</span>
                  <span className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300">#Innovation</span>
                </div>

                <a
                  href="https://www.linkedin.com/posts/quantumsecuritydefence_we-are-delighted-to-welcome-quantzen-into-activity-7407691355398819844-Zlje/?utm_medium=ios_app&rcm=ACoAADpqSi4BkJFo8e3WlrIZs6N4AA63YDh0lv8&utm_source=social_share_send&utm_campaign=copy_link"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 w-fit group/btn"
                >
                  <span>Read Full Release</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Additional Press Items */}
          {/* <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group relative bg-gradient-to-br from-zenith-grey-800/30 to-zenith-grey-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Newspaper className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-xs text-gray-400">Dec {20 - item}, 2025</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  Recent Update #{item}
                </h4>
                <p className="text-sm text-gray-400 mb-4">
                  Brief description of the press release or media coverage...
                </p>
                <a
                  href="#"
                  className="text-blue-400 text-sm font-semibold hover:text-blue-300 inline-flex items-center gap-1 group/link"
                >
                  Learn More
                  <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
