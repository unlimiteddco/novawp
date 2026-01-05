import React, { useState, useEffect } from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#030303]/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-orange-500">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              NovaWP
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { name: 'Features', href: '#features' },
              { name: 'Pricing', href: '#pricing' },
              { name: 'Real examples', href: '#showcase' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Log in
            </button>
            <Button size="sm" onClick={onOpenModal}>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/10 overflow-hidden"
          >
            <Container className="py-4 space-y-4">
              {[
                { name: 'Features', href: '#features' },
                { name: 'Pricing', href: '#pricing' },
                { name: 'Real examples', href: '#showcase' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium text-gray-300 hover:text-white"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button className="text-center text-sm font-medium text-gray-300 hover:text-white">
                  Log in
                </button>
                <Button className="w-full" onClick={() => { onOpenModal(); setIsMobileMenuOpen(false); }}>
                  Get Started
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;