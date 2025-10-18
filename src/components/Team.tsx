import { Linkedin } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Ashish Janghel',
      role: 'Founder & CEO',
      linkedin: '#',
      image: '/ashish.JPG',
    },
    {
      name: 'Claire Cairns',
      role: 'Head of Marketing + Advisor',
      linkedin: 'https://www.linkedin.com/in/clairecblockchain/',
      image: '/claire.jpg',
    },
    {
      name: 'Ramesh Gopal',
      role: 'CTO (Blockchain Architect)',
      linkedin: '#',
      image: '/ramesh.jpg',
    },
    {
      name: 'Raman Agarwal',
      role: 'Full Stack Developer',
      linkedin: '#',
      image: '/images/team/raman.jpg',
    },
    {
      name: 'Pathanjali',
      role: 'Partnerships + Investment Advisor',
      linkedin: '#',
      image: '/pathanjali.jpg',
    },
    {
      name: 'Easa',
      role: 'Advisory Board + Early Investor',
      linkedin: '#',
      image: '/images/team/easa.jpg',
    },
    {
      name: 'Anna',
      role: 'Advisor (QSDCEF) Quantum Cybersecurity',
      linkedin: '#',
      image: '/anna.jpg',
    },
    {
      name: 'Steve',
      role: 'Advisor (QSDCEF) Quantum Cybersecurity',
      linkedin: '#',
      image: '/steve.jpg',
    },
  ];

  return (
    <section
      id="team"
      className="py-24 px-4 bg-gradient-to-b from-zenith-grey-800 to-zenith-black relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-r from-white/8 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-l from-white/5 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 fade-in-section">
          <h2 className="text-5xl md:text-6xl font-black text-gradient mb-8 leading-tight">
            The Team Behind Zenith
          </h2>
          <p className="text-xl md:text-2xl text-zenith-grey-200 max-w-4xl mx-auto leading-relaxed">
            A team of builders, cryptographers, marketers, and investors bridging deep R&D expertise
            with market execution.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-white to-zenith-grey-400 rounded-full mx-auto mt-8"></div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-zenith-grey-800/60 to-zenith-black/60 p-8 rounded-3xl border border-zenith-grey-600/50 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 text-center glass-effect card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/60 transition-all duration-500 shadow-lg">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zenith-grey-700 to-zenith-black text-white text-2xl font-bold">
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-white/20 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>

              {/* Name and Role */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zenith-grey-100 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-zenith-grey-300 mb-6 group-hover:text-zenith-grey-200 transition-colors duration-300">
                {member.role}
              </p>

              {/* LinkedIn Button */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zenith-grey-700/50 text-white hover:bg-white hover:text-zenith-black transition-all duration-300 hover:scale-110 group-hover:shadow-lg"
                aria-label={`${member.name} LinkedIn`}
              >
                <Linkedin size={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
