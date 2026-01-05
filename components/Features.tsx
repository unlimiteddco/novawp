import React from 'react';
import Container from './ui/Container';
import SpotlightCard from './ui/SpotlightCard';
import { MousePointer2, Smartphone, Layout, Wand2, Database, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'AI-Driven Customization',
    description: 'Describe your business in plain English. Our engine builds a unique structure, copy, and imagery tailored to your niche.',
    icon: Wand2,
    colSpan: 'lg:col-span-2',
    gradient: 'from-purple-500/20 to-blue-500/20'
  },
  {
    title: 'Native Elementor',
    description: 'No locked-in ecosystem. You get a clean, editable Elementor build that you truly own.',
    icon: Layout,
    colSpan: 'lg:col-span-1',
    gradient: 'from-orange-500/20 to-red-500/20'
  },
  {
    title: 'Managed Hosting',
    description: 'Blazing fast Google Cloud servers pre-configured for WordPress excellence.',
    icon: Database,
    colSpan: 'lg:col-span-1',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    title: 'Instant Production',
    description: 'Skip the setup. SSL, Permalinks, and Security plugins are auto-installed.',
    icon: Globe,
    colSpan: 'lg:col-span-2',
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 relative">
      <Container>
        <div className="mb-20">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl md:text-5xl font-bold mb-6"
           >
             More than just a template wrapper.
             <br />
             <span className="text-gray-500">A complete development suite.</span>
           </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <SpotlightCard key={idx} className={`${feature.colSpan} group h-full`}>
              {/* Gradient Background - Always Visible */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-100`} />
              
              <div className="relative p-8 h-full flex flex-col items-start justify-between min-h-[300px]">
                {/* Icon Container - Always Active Style */}
                <div className="mb-6 p-3 rounded-lg bg-white/10 border border-white/10">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Decorative Big Icon - Always Visible & Styled */}
                <div className="absolute right-8 top-8 opacity-20 transform scale-110 rotate-12 pointer-events-none">
                   <feature.icon className="w-24 h-24" />
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
        
        {/* Micro-interaction proof: Staggered stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
          {[
            { label: 'Sites Created', value: '10k+' },
            { label: 'Time Saved', value: '50k hrs' },
            { label: 'Avg Speed Score', value: '98/100' },
            { label: 'Uptime', value: '99.9%' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;