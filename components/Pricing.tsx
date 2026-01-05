import React from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

interface PricingProps {
  onOpenModal: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenModal }) => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-[#030303]">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />

      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Choose the plan that fits your workflow. Cancel anytime.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Starter Plan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Starter</h3>
              <p className="text-gray-400 text-sm">Perfect for individuals and hobbyists.</p>
            </div>
            
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">$19.99</span>
              <span className="text-gray-500">/mo</span>
            </div>

            <Button variant="outline" className="w-full mb-8" onClick={onOpenModal}>Get Started</Button>

            <ul className="space-y-4 flex-1">
              {[
                "10 AI Site Generations / month",
                "Access to 140+ UiCore Templates",
                "Standard Hosting",
                "SSL & Security Included",
                "Email Support"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <Check className="w-5 h-5 text-gray-500 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative p-8 rounded-2xl bg-black/40 border border-purple-500/50 backdrop-blur-md flex flex-col shadow-[0_0_50px_rgba(168,85,247,0.15)]"
          >
            {/* Badge */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-2">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Most Popular
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
              <p className="text-gray-400 text-sm">For freelancers and agencies scaling up.</p>
            </div>
            
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">$39.99</span>
              <span className="text-gray-500">/mo</span>
            </div>

            <Button variant="primary" className="w-full mb-8 shadow-lg shadow-purple-900/20" onClick={onOpenModal}>Get Started</Button>

            <ul className="space-y-4 flex-1">
              {[
                "30 AI Site Generations / month",
                "Access to 140+ UiCore Templates",
                "Premium High-Speed Hosting",
                "Priority Live Chat Support",
                "5 Sandbox Environments",
                "White Label Options",
                "Team Collaboration"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-white text-sm">
                  <Check className="w-5 h-5 text-green-400 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;