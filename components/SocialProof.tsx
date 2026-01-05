import React from 'react';
import Container from './ui/Container';

const logos = [
  'Acme Corp', 'GlobalTech', 'Nebula', 'Vertex', 'Spherule', 'Monolith'
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <Container>
        <p className="text-center text-sm font-medium text-gray-500 mb-10">
          TRUSTED BY INNOVATIVE AGENCIES WORLDWIDE
        </p>
        
        {/* Marquee Effect */}
        <div className="relative flex overflow-hidden group">
          <div className="flex animate-marquee whitespace-nowrap gap-20 items-center">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <span 
                key={index} 
                className="text-2xl font-bold text-gray-700 hover:text-white transition-colors cursor-default select-none"
              >
                {logo}
              </span>
            ))}
          </div>
          
          {/* Gradient Masks for Marquee */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#030303] to-transparent z-10" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#030303] to-transparent z-10" />
        </div>
      </Container>
      
      {/* Custom Marquee Animation in Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SocialProof;