'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Autonomous Navigation",
    subtitle: "Robotics & Computer Vision",
    description: "Developing robust SLAM algorithms for autonomous mobile robots in dynamic indoor environments.",
    problem: "Navigating complex, changing environments requires high-fidelity spatial awareness and real-time path planning.",
    architecture: "Integrated ROS2 with custom LiDAR-based SLAM and depth-camera fusion for obstacle avoidance.",
    metrics: "Successfully navigated 50+ test scenarios with zero collisions and 95% path efficiency.",
    tech: ["ROS2", "C++", "Python", "OpenCV"],
    image: "https://picsum.photos/seed/robotics/800/600"
  },
  {
    id: 2,
    title: "Distributed Ledger Sync",
    subtitle: "Blockchain Infrastructure",
    description: "Optimizing state synchronization protocols for decentralized networks to improve node onboarding speed.",
    problem: "New nodes in decentralized networks often take days to synchronize full state history.",
    architecture: "Implemented a snapshot-based fast-sync protocol with cryptographic verification of state roots.",
    metrics: "Reduced initial sync time by 65% while maintaining full security guarantees.",
    tech: ["Go", "gRPC", "LevelDB", "Prometheus"],
    image: "https://picsum.photos/seed/blockchain/800/600"
  },
  {
    id: 3,
    title: "Edge Intelligence Hub",
    subtitle: "IoT & Machine Learning",
    description: "A lightweight inference engine designed for low-power ARM devices to perform real-time anomaly detection.",
    problem: "Sending raw IoT data to the cloud for inference consumes excessive bandwidth and introduces latency.",
    architecture: "Quantized TensorFlow Lite models deployed on Raspberry Pi clusters with MQTT-based data orchestration.",
    metrics: "98% accuracy in anomaly detection with sub-50ms local inference latency.",
    tech: ["Python", "TFLite", "MQTT", "InfluxDB"],
    image: "https://picsum.photos/seed/iot/800/600"
  },
  {
    id: 4,
    title: "Scalable Microservices",
    subtitle: "Cloud Native Architecture",
    description: "Designing and deploying a resilient microservices architecture for high-traffic data processing applications.",
    problem: "Monolithic architectures struggle with horizontal scaling and independent service deployments.",
    architecture: "Containerized services managed by Kubernetes with Istio service mesh for observability and traffic control.",
    metrics: "Achieved 99.99% availability under 10x traffic spikes during load testing.",
    tech: ["Java", "Spring Boot", "Kubernetes", "Istio"],
    image: "https://picsum.photos/seed/cloud/800/600"
  },
  {
    id: 5,
    title: "Agentic AI Orchestrator",
    subtitle: "Gen AI & Multi-Agent Systems",
    description: "Building a framework for autonomous AI agents to collaborate on complex multi-step reasoning tasks.",
    problem: "Single-model LLM calls often fail at complex, multi-step workflows requiring external tool use.",
    architecture: "LangGraph-based orchestration with custom memory management and tool-calling validation layers.",
    metrics: "Improved task completion rate by 40% compared to zero-shot prompting.",
    tech: ["Python", "LangChain", "OpenAI", "Redis"],
    image: "https://picsum.photos/seed/ai/800/600"
  },
  {
    id: 6,
    title: "Cybersecurity Mesh",
    subtitle: "Zero Trust Security",
    description: "Implementing a zero-trust security architecture for distributed enterprise environments.",
    problem: "Traditional perimeter-based security is ineffective in modern, remote-first cloud environments.",
    architecture: "Identity-aware proxies with continuous authentication and micro-segmentation of network traffic.",
    metrics: "Reduced potential attack surface by 80% through granular access controls.",
    tech: ["Terraform", "Vault", "OIDC", "Envoy"],
    image: "https://picsum.photos/seed/security/800/600"
  }
];

export default function WorkGrid() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="font-mono text-accent/80 text-xs tracking-[0.4em] uppercase mb-4 block">Portfolio</span>
          <h2 className="text-5xl font-light text-white">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group relative bg-secondary/40 border border-white/5 rounded-3xl overflow-hidden transition-all hover:border-accent/30 ${expandedId === project.id ? 'md:col-span-2' : ''}`}
            >
              <div className="flex flex-col md:flex-row">
                <div className={`relative overflow-hidden ${expandedId === project.id ? 'md:w-1/2' : 'w-full h-72 md:h-96'}`}>
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                </div>

                <div className={`p-10 flex flex-col justify-between ${expandedId === project.id ? 'md:w-1/2' : 'w-full'}`}>
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-3xl font-light text-white group-hover:text-accent transition-colors">{project.title}</h3>
                        <p className="font-mono text-[10px] text-text-secondary uppercase tracking-[0.2em] mt-2">{project.subtitle}</p>
                      </div>
                      <div className="flex gap-4">
                        <Github size={20} className="text-text-secondary hover:text-white cursor-pointer transition-colors" />
                        <ExternalLink size={20} className="text-text-secondary hover:text-white cursor-pointer transition-colors" />
                      </div>
                    </div>
                    <p className="text-text-secondary mb-8 leading-relaxed font-light">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-3 mb-10">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-white/5 text-[10px] font-mono text-text-secondary rounded-full border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                    className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-soft transition-colors"
                  >
                    {expandedId === project.id ? 'Collapse Details' : 'View Architecture'}
                    {expandedId === project.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {expandedId === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-white/5 p-8 bg-background/50"
                  >
                    <div className="grid md:grid-cols-3 gap-8">
                      <div>
                        <h4 className="font-mono text-[10px] text-accent uppercase tracking-widest mb-3">The Problem</h4>
                        <p className="text-sm text-text-secondary leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-mono text-[10px] text-accent uppercase tracking-widest mb-3">Architecture</h4>
                        <p className="text-sm text-text-secondary leading-relaxed">{project.architecture}</p>
                      </div>
                      <div>
                        <h4 className="font-mono text-[10px] text-accent uppercase tracking-widest mb-3">Key Metrics</h4>
                        <p className="text-sm text-text-secondary leading-relaxed">{project.metrics}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
