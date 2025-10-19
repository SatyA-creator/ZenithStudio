import { Linkedin } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
       name: "Ashish Janghel",
      role: "Founder & CEO",
      expertise: "Certified Quantum Security Engineer, M.Tech in Blockchain",
      description: "Lead architect behind QuantZen™, Certified Quantum Security Engineer and M.Tech in Blockchain pioneering the world's first Quantum-Proof Shield, securing Web3 infrastructure for the post-quantum era.",
      image: "/ashish.JPG",
      linkedin: "https://www.linkedin.com/in/ashish-janghel/",
    },
    {
      name: "Claire (Elizabeth) C",
      role: "Head of Marketing & VP",
      expertise: "Award-winning Web3 PR & Investor Relations Expert",
      description: "Award-winning Web3 PR and investor relations expert with a decade of experience scaling blockchain brands through strategy, storytelling, and global reach.",
      image: "/clarie.jpg",
      linkedin: "https://www.linkedin.com/in/clairecblockchain/",
    },
    {
   name: "Ramesh Gopal",
      role: "CTO",
      expertise: "Blockchain Architect, Smart Contracts & DeFi Expert",
      description: "Experienced Blockchain Architect with 13+ years in DLT, Ethereum, and Web3 security expert in smart contracts, DeFi ecosystems, and scalable decentralised architectures driving innovation and quantum-safe integration.",
      image: "/ramesh.jpg",
      linkedin: "https://www.linkedin.com/in/ramesh-gopal/",
    },
   
    {
      name: "Pathanjali Sharma",
      role: "Head of Business Development & Investor Relations",
      expertise: "Venture Capitalist & Strategic Leader in Growth & Partnerships",
      description: "Experienced venture capitalist and strategic leader driving growth, partnerships, and investor relations spearheading business development and fundraising initiatives.",
      image: "/pathanjali.jpg",
      linkedin: "https://www.linkedin.com/in/pathanjalisharma21/",
    },
   
    {
      name: "Anna Beata",
      role: "Advisor",
      expertise: "Quantum Cybersecurity Expert, CEO at QuantumPrime",
      description: "Quantum cybersecurity expert and CEO at Quantum Security Defense and QuantumPrime, specialising in quantum-safe encryption, teleportation research, and global education empowering innovation and resilience in the post-quantum security landscape.",
      image: "/anna.jpg",
      linkedin: "https://www.linkedin.com/in/annabeata/",
    },
    {
      name: "Steve Vaile",
      role: "Advisor",
      expertise: "Global Leader in Quantum Innovation & Cybersecurity",
      description: "Global leader in cybersecurity and quantum innovation, bridging Quantum, AI, and Web3 to secure critical infrastructure worldwide. As Consulting Director at Quantum Security & Defence, he drives deep-tech transformation and resilience across international markets.",
      image: "/steve.jpg",
      linkedin: "https://www.linkedin.com/in/stevevaile/",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-zenith-grey-800/60 to-zenith-black/60 p-6 rounded-3xl border border-zenith-grey-600/50 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-4 hover:scale-102 text-center glass-effect card-hover flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative mb-4">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/60 transition-all duration-500 shadow-lg">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zenith-grey-700 to-zenith-black text-white text-lg font-bold">
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-white/20 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>

              {/* Name and Role */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zenith-grey-100 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-zenith-grey-300 mb-3 group-hover:text-zenith-grey-200 transition-colors duration-300 font-semibold">
                {member.role}
              </p>
               {/* Expertise Badge */}
              <div className="mb-4">
                <div className="inline-block bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
                  <p className="text-xs text-white font-medium">
                    {member.expertise}
                  </p>
                </div>
              </div>
              {/* Description */}
              <p className="text-zenith-grey-400 mb-4 group-hover:text-zenith-grey-300 transition-colors duration-300 text-sm leading-relaxed flex-grow">
                {member.description}
              </p>

             
              {/* LinkedIn Button */}
              <div className="mt-auto">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
