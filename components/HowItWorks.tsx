import React from 'react';
import Container from './ui/Container';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, Globe } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#030303]">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            From Idea to Live Website <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              in 3 Easy Steps
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Forget plugins, domain setup, and complex hosting settings. 
            Just describe your idea, and NovaWP handles the rest.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Desktop Curved Arrows (SVG Overlay) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-full -translate-y-1/2 pointer-events-none z-0">
             {/* Arrow 1 -> 2 (Curved Up) */}
             <svg className="absolute top-[-40px] left-[20%] w-[20%] h-20 text-purple-500/30 dashed-path" viewBox="0 0 100 50" preserveAspectRatio="none">
               <path d="M0,50 Q50,0 100,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
             </svg>
             {/* Arrow 2 -> 3 (Curved Down) */}
             <svg className="absolute bottom-[-40px] right-[20%] w-[20%] h-20 text-purple-500/30 dashed-path" viewBox="0 0 100 50" preserveAspectRatio="none">
               <path d="M0,0 Q50,50 100,0" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
             </svg>
             {/* Arrow Marker Definition */}
             <svg>
               <defs>
                 <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                   <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                 </marker>
               </defs>
             </svg>
          </div>

          {/* STEP 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative z-10 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold tracking-widest text-purple-500 uppercase">Step — 1</span>
              <h3 className="text-2xl font-bold text-white">Describe Your Vision</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Tell us what your business does, just like explaining it to a friend. Our AI understands nuance.
              </p>
            </div>

            {/* Mockup UI: Input Prompt */}
            <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm min-h-[220px] flex flex-col justify-center">
              <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-4 shadow-inner">
                <div className="flex items-center gap-2 mb-3">
                   <Sparkles className="w-4 h-4 text-purple-400" />
                   <span className="text-xs text-gray-400">AI Assistant</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-3/4 bg-white/20 rounded animate-pulse"></div>
                  <div className="h-2 w-1/2 bg-white/20 rounded animate-pulse delay-75"></div>
                </div>
                <div className="mt-4 flex justify-end">
                   <div className="px-3 py-1.5 bg-purple-600 text-[10px] font-bold rounded text-white flex items-center gap-1">
                     Start Building <ArrowRight className="w-3 h-3" />
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* STEP 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative z-10 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold tracking-widest text-purple-500 uppercase">Step — 2</span>
              <h3 className="text-2xl font-bold text-white">AI Builds Everything</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                In under 60 seconds, NovaWP creates your structure, writes copy, and sets up plugins.
              </p>
            </div>

            {/* Mockup UI: Generating Loader */}
            <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-0 overflow-hidden backdrop-blur-sm min-h-[220px] relative group">
              {/* Background Website Skeleton */}
              <div className="absolute inset-0 p-4 opacity-30 blur-[2px] transition-all duration-500 group-hover:blur-0 group-hover:opacity-50">
                <div className="w-full h-8 bg-white/10 rounded mb-4"></div>
                <div className="flex gap-4 mb-4">
                   <div className="w-1/3 h-24 bg-white/10 rounded"></div>
                   <div className="w-2/3 h-24 bg-white/10 rounded"></div>
                </div>
                <div className="w-full h-32 bg-white/10 rounded"></div>
              </div>
              
              {/* Floating Processing Tags */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <motion.div 
                  animate={{ scale: [0.9, 1, 0.9] }} 
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="bg-black/80 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-mono text-green-400 flex items-center gap-2 shadow-xl"
                >
                  <CheckCircle2 className="w-3 h-3" /> Generating Layout...
                </motion.div>
                <motion.div 
                  animate={{ scale: [0.95, 1.05, 0.95] }} 
                  transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
                  className="bg-black/80 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-mono text-blue-400 flex items-center gap-2 shadow-xl"
                >
                  <CheckCircle2 className="w-3 h-3" /> Writing Copy...
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* STEP 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="relative z-10 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold tracking-widest text-purple-500 uppercase">Step — 3</span>
              <h3 className="text-2xl font-bold text-white">Launch & Succeed</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Hit publish and your site goes live with premium hosting, SSL, and a free domain included.
              </p>
            </div>

            {/* Mockup UI: Live Site */}
            <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-0 overflow-hidden backdrop-blur-sm min-h-[220px] relative">
              {/* Browser Bar */}
              <div className="bg-black/40 border-b border-white/5 h-6 flex items-center px-3 gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
              </div>
              
              {/* Content Preview */}
              <div className="relative h-full bg-gradient-to-br from-gray-900 to-black p-4">
                 <div className="text-center mt-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-[8px] mb-2 border border-white/10">Elevating Brands</div>
                    <div className="h-2 w-32 bg-white/80 mx-auto rounded mb-2"></div>
                    <div className="h-2 w-20 bg-white/40 mx-auto rounded"></div>
                    
                    <button className="mt-4 px-3 py-1 bg-white text-black text-[10px] font-bold rounded">Get Started</button>
                 </div>
                 
                 {/* Success Badge Overlay */}
                 <div className="absolute bottom-10 left-1/2 -translate-x-1/2 translate-y-2 w-full px-4">
                    <div className="bg-white text-black p-3 rounded-lg shadow-xl flex items-center justify-between animate-bounce-subtle">
                       <span className="text-xs font-bold">Site is Live!</span>
                       <Globe className="w-4 h-4 text-blue-600" />
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;