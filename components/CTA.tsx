import React from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import { motion } from 'framer-motion';

interface CTAProps {
  onOpenModal: () => void;
}

const CTA: React.FC<CTAProps> = ({ onOpenModal }) => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-purple-900/10 to-[#030303]" />
      
      {/* Radial Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Ready to build at the <br />
            <span className="text-white">speed of thought?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join 10,000+ creators building the next generation of the web. 
            No credit card required for the free tier.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-12 py-6 text-lg" onClick={onOpenModal}>
              Generate Your Site Now
            </Button>
            <p className="text-xs text-gray-500 mt-4 sm:mt-0 sm:absolute sm:bottom-[-40px]">
              Includes 3 free AI generations/month
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;