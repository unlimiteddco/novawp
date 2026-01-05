import React from 'react';
import Container from './ui/Container';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

const examples = [
  { title: "BrightCare", img: "https://cdn.uicore.pro/2025/11/brightcare.webp", category: "Medical" },
  { title: "Peydo", img: "https://cdn.uicore.pro/2025/07/peydo.webp", category: "Finance" },
  { title: "Gazer", img: "https://cdn.uicore.pro/2025/07/gazer.webp", category: "Technology" },
  { title: "CampFit", img: "https://cdn.uicore.pro/2025/07/campfit.webp", category: "Fitness" },
  { title: "Snaeland", img: "https://cdn.uicore.pro/2025/05/snaeland.webp", category: "Travel" },
  { title: "Undro", img: "https://cdn.uicore.pro/2025/04/undro.webp", category: "Portfolio" },
  { title: "Greenhouse", img: "https://cdn.uicore.pro/2025/01/greenhouse.webp", category: "Real Estate" },
  { title: "Matte", img: "https://cdn.uicore.pro/2024/11/matte.webp", category: "E-Commerce" },
  { title: "Connect", img: "https://cdn.uicore.pro/2024/09/connect.webp", category: "SaaS" },
];

const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-24 bg-[#030303] relative border-t border-white/5">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            See some real examples
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Stunning websites created by our users in minutes, not days.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-white/5 cursor-pointer"
            >
              {/* Image */}
              <img 
                src={item.img} 
                alt={item.title} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-[2px]">
                <h3 className="text-2xl font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <span className="text-purple-400 text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.category}
                </span>
              </div>
              
              {/* Corner Badge (Always Visible) */}
              <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md border border-white/10 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                <Eye className="w-4 h-4 text-white" />
              </div>

            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Showcase;