"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Zap, Star, Shield, Trophy } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function PowerCore() {
  const [activeNode, setActiveNode] = useState(0);

  // Map icons to the stats
  const icons = [
    Trophy, // experience
    Shield, // TV station
    Zap,    // Real estate specialty
    Star    // Passion
  ];

  return (
    <section id="power-core" className="relative md:min-h-screen w-full bg-graphite flex flex-col justify-center py-12 md:py-20 px-6 md:px-12 border-b border-charcoal overflow-hidden blueprint-grid-fine">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-dashed border-gold/10 animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-charcoal animate-spin-slow-reverse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col mb-16 relative pl-6 border-l-2 border-gold/60">
          {/* Mechanical Accent corners */}
          <div className="absolute top-0 left-0 w-2 h-[6px] bg-gold"></div>
          <div className="absolute bottom-0 left-0 w-2 h-[6px] bg-gold"></div>
          
          <span className="font-mono text-xs text-gold tracking-widest uppercase mb-2 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            SECTION 02 // MODULE: CORE_POWER
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-platinum tracking-tight uppercase leading-tight mb-3">
            {siteConfig.about.title}
          </h2>
          <p className="text-xs font-mono text-gold/70 uppercase tracking-[0.2em] mt-1">
            {siteConfig.about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mechanical containment container with portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[3/4] p-4 bg-charcoal/20 border border-charcoal/80 rounded-sm gold-glow flex items-center justify-center overflow-hidden group">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold/40"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold/40"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold/40"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold/40"></div>
              
              <div className="relative w-full h-full overflow-hidden border border-charcoal/40 bg-obsidian">
                {/* Scanner bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent animate-scan z-10" style={{ animationDuration: '4s' }}></div>
                
                <img 
                  src={siteConfig.about.portrait} 
                  alt="MC Vinh Quang Portrait" 
                  className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/10 to-transparent"></div>
                
                {/* Interactive HUD text on portrait */}
                <div className="absolute bottom-4 left-4 right-4 font-mono text-[10px] text-platinum/60 flex justify-between bg-obsidian/80 backdrop-blur-sm p-2 border border-charcoal/60">
                  <span>ID: VQ_CORE_01</span>
                  <span>THERM: NOMINAL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Central Power Core HUD */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* The Telemetry Core Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {siteConfig.about.stats.map((stat, index) => {
                const IconComponent = icons[index] || Cpu;
                const isActive = activeNode === index;
                
                return (
                  <button
                    key={index}
                    onClick={() => setActiveNode(index)}
                    className={`text-left p-6 metal-panel relative overflow-hidden transition-all duration-300 focus:outline-none cursor-pointer select-none group border ${
                      isActive 
                        ? "border-gold/60 bg-gold/[0.03] shadow-[0_0_20px_rgba(213,182,122,0.1)]" 
                        : "border-charcoal hover:border-gold/30 hover:bg-charcoal/20"
                    }`}
                  >
                    {/* Glowing highlight indicator */}
                    <div className={`absolute top-0 left-0 h-full w-[3px] transition-colors duration-300 ${isActive ? "bg-gold" : "bg-transparent group-hover:bg-gold/30"}`}></div>
                    
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-mono text-xs text-platinum/50 block tracking-widest mb-1 uppercase">
                          {stat.label}
                        </span>
                        <span className="text-2xl md:text-3xl font-black text-platinum tracking-tight group-hover:text-gold transition-colors duration-300">
                          {stat.value}
                        </span>
                      </div>
                      <IconComponent className={`w-5 h-5 transition-colors duration-300 ${isActive ? "text-gold" : "text-platinum/30 group-hover:text-gold/60"}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Core Output: Philosophy Transmission Panel */}
            <div className="metal-panel border border-charcoal p-8 relative min-h-[200px] flex flex-col justify-between">
              {/* Mechanical Header */}
              <div className="flex justify-between items-center border-b border-charcoal/60 pb-3 mb-4">
                <span className="font-mono text-[10px] text-gold tracking-widest uppercase">
                  CORE_OUTPUT // TRANS_LOG_0{activeNode + 1}
                </span>
                <span className="font-mono text-[9px] text-platinum/40">
                  DECRYPTION: ACTIVE
                </span>
              </div>

              {/* Dynamic text outputs based on active node */}
              <div className="relative flex-grow flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeNode}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg md:text-xl font-bold text-gold tracking-wide">
                      {siteConfig.about.shareTitle}
                    </h3>
                    <p className="text-platinum/80 leading-relaxed text-sm md:text-base">
                      {siteConfig.about.shareParagraphs[activeNode] || siteConfig.about.shareParagraphs[0]}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Mechanical telemetry indicator footer */}
              <div className="flex items-center space-x-2 mt-6 pt-4 border-t border-charcoal/60">
                <div className="h-1 flex-grow bg-charcoal rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gold"
                    initial={{ width: "25%" }}
                    animate={{ width: `${(activeNode + 1) * 25}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <span className="font-mono text-[10px] text-gold/80 pl-2">
                  {((activeNode + 1) * 25).toFixed(0)}% POWER
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
