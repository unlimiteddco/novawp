import React from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative min-h-[110vh] flex items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Background Grid - Grid Shimmer */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Lighting Effect - Beam Texture */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-purple-500/20 blur-[100px] rounded-full opacity-50 pointer-events-none" />

      <Container className="relative z-10 flex flex-col items-center text-center">

        {/* Pill Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span className="text-xs font-medium text-purple-200 uppercase tracking-wide">
            Early access is now live
          </span>
        </motion.div>

        {/* Main Hook */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 max-w-5xl"
        >
          Build Elementor Sites <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 animate-gradient-x">
            At Warp Speed
          </span>
        </motion.h1>

        {/* Value Prop Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
        >
          The first AI-native builder that generates Elementor-ready websites in 60 seconds.
          Prompt to production with premium hosting included.
        </motion.p>

        {/* CTA Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button size="lg" className="w-full sm:w-auto shadow-[0_0_20px_rgba(139,92,246,0.3)]" onClick={onOpenModal}>
            Start Building for Free <Zap className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto group">
            Watch Demo <Play className="ml-2 w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
          </Button>
        </motion.div>

        {/* Website Examples Grid */}
        <div className="mt-20 w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                img: "https://cdn.uicore.pro/2025/11/voltrive.webp",
                title: "Voltrive EV",
                tag: "Automotive"
              },
              {
                img: "https://cdn.uicore.pro/2025/11/gardenify.webp",
                title: "Gardenify",
                tag: "Services"
              },
              {
                img: "https://cdn.uicore.pro/2025/07/globchart.webp",
                title: "GlobChart",
                tag: "SaaS"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + (index * 0.15) }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/50 transition-colors hover:border-white/20">

                  {/* Browser Header */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-black/40 backdrop-blur-md z-10 border-b border-white/5 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5 opacity-60">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Floating Badge */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex flex-col">
                        <span className="text-white font-semibold text-lg drop-shadow-lg">{item.title}</span>
                        <span className="text-gray-300 text-xs">{item.tag}</span>
                      </div>
                      <div className="bg-white text-black p-2 rounded-full">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-2 bg-purple-500/20 rounded-[20px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
};

export default Hero;