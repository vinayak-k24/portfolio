'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X, Github, BookOpen, Linkedin, Award, FileText } from 'lucide-react';

const navItems = [
  { name: 'Education', href: '#education' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#papers' },
  { name: 'Skills', href: '#systems' },
  { name: 'Certs', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <motion.div 
        className="absolute top-0 left-0 right-0 h-[2px] bg-accent origin-left"
        style={{ scaleX }}
      />
      
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-light tracking-tighter text-white font-serif italic"
        >
          Vinayak<span className="text-accent">.</span>Kone
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-xs font-mono uppercase tracking-widest text-text-secondary hover:text-accent transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
          <a 
            href="https://orcid.org/0000-0001-8238-6960" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-white transition-colors"
            title="ORCID"
          >
            <Award size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/vinayak-kone-8ba631214/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-white transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="https://github.com/vinayak-k24" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-white transition-colors"
            title="GitHub"
          >
            <Github size={18} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass border-t border-white/5 px-6 py-4 flex flex-col space-y-4"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-text-secondary hover:text-accent"
            >
              {item.name}
            </a>
          ))}
          <div className="flex gap-4 pt-4 border-t border-white/5">
            <a href="https://orcid.org/0000-0001-8238-6960" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white">
              <Award size={20} />
            </a>
            <a href="https://www.linkedin.com/in/vinayak-kone-8ba631214/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/vinayak-k24" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white">
              <Github size={20} />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
