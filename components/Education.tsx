'use client';

import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import Image from 'next/image';

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="font-mono text-accent text-sm tracking-widest uppercase mb-4 block">Academic Foundation</span>
          <h2 className="text-5xl md:text-7xl font-light text-white tracking-tight">
            Education <span className="italic font-serif text-accent">&</span> Credentials
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 group relative bg-secondary/20 border border-white/5 rounded-[2rem] p-8 md:p-12 hover:bg-secondary/30 transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white p-2 flex items-center justify-center overflow-hidden shrink-0 shadow-xl">
                <Image src="https://www.kletech.ac.in/admission/images/kle-footer-logo.webp" alt="KLE Tech Logo" width={128} height={128} className="object-contain" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="px-4 py-1 bg-accent/10 border border-accent/20 text-accent rounded-full text-xs font-mono uppercase tracking-wider">
                    Class of 2024
                  </span>
                  <div className="flex items-center gap-2 text-text-secondary text-sm font-mono">
                    <Calendar size={14} />
                    2020 — 2024
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-light text-white mb-2 group-hover:text-accent transition-colors">
                  Bachelor of Engineering
                </h3>
                <p className="text-xl text-text-secondary mb-6 font-serif italic">
                  KLE Technological University, Hubballi
                </p>

                <div className="grid md:grid-cols-1 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        Specialization in Computer Science and Engineering with a focus on Intelligent Systems.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        Engaged in research-led projects involving distributed computing and machine learning architectures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-secondary/20 border border-white/5 rounded-[2rem] p-8 h-full">
              <div className="flex items-center gap-2 mb-6 text-white font-medium">
                <Award size={20} className="text-accent-soft" />
                <span className="text-xl">Academic Highlights</span>
              </div>
              <ul className="space-y-6">
                {[
                  { title: "Research Focus", desc: "Capstone project on Sharding-based Blockchain scalability." },
                  { title: "Leadership", desc: "Technical Lead in University Tech Society, organizing 10+ workshops." },
                  { title: "Excellence", desc: "Consistently ranked in top 5% of the batch for core CSE subjects." }
                ].map((item, i) => (
                  <li key={i} className="group">
                    <h4 className="text-accent text-xs font-mono uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-text-secondary text-sm font-light leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
