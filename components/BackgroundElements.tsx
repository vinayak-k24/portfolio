'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Brain, Cpu, Database, Network, Shield, Zap, Code, Terminal, Globe, Layers, Server, Lock } from 'lucide-react';

const icons = [
  { Icon: Brain, x: '10%', y: '15%', size: 40, delay: 0, duration: 12 },
  { Icon: Cpu, x: '85%', y: '20%', size: 30, delay: 2, duration: 14 },
  { Icon: Database, x: '15%', y: '75%', size: 35, delay: 1, duration: 11 },
  { Icon: Network, x: '80%', y: '80%', size: 45, delay: 3, duration: 15 },
  { Icon: Shield, x: '50%', y: '10%', size: 25, delay: 4, duration: 13 },
  { Icon: Zap, x: '5%', y: '45%', size: 20, delay: 1.5, duration: 10 },
  { Icon: Code, x: '90%', y: '55%', size: 30, delay: 2.5, duration: 12 },
  { Icon: Terminal, x: '45%', y: '90%', size: 40, delay: 0.5, duration: 14 },
  { Icon: Globe, x: '70%', y: '40%', size: 35, delay: 5, duration: 11 },
  { Icon: Layers, x: '30%', y: '60%', size: 28, delay: 1.2, duration: 13 },
  { Icon: Server, x: '60%', y: '15%', size: 32, delay: 3.5, duration: 15 },
  { Icon: Lock, x: '25%', y: '30%', size: 22, delay: 2.2, duration: 12 },
];

export default function BackgroundElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Floating Icons */}
      {icons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.05, 0.1, 0.05],
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
          className="absolute text-accent/20"
          style={{ left: item.x, top: item.y }}
        >
          <item.Icon size={item.size} strokeWidth={1} />
        </motion.div>
      ))}

      {/* Radial Gradients for Depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
}
